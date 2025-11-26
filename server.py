from flask import Flask, request, jsonify
from flask_cors import CORS
import subprocess
import os
import uuid
import re
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all origins

@app.route('/predict', methods=['POST'])
def predict():
    if 'images' not in request.files:
        return jsonify({'error': 'No images uploaded'}), 400

    files = request.files.getlist('images')
    predictions = []

    current_dir = os.getcwd().replace("\\", "/")  # Use forward slashes for MATLAB

    for file in files:
        # Save with unique name to avoid overwriting
        unique_name = f"{uuid.uuid4().hex}_{file.filename}"
        file_path = os.path.join(current_dir, unique_name)
        file.save(file_path)

        # Call MATLAB and return JSON-like string
        command = (
            f'matlab -batch "cd(\'{current_dir}\'); '
            f'result = testSingleImage(\'{file_path}\'); '
            f'disp(jsonencode(result));"'
        )
        proc = subprocess.run(command, shell=True, capture_output=True, text=True)

        # Remove the uploaded image after processing
        os.remove(file_path)

        if proc.returncode != 0:
            predictions.append({
                'filename': file.filename,
                'error': proc.stderr
            })
        else:
            # Extract JSON-like output from MATLAB stdout
            matlab_output = proc.stdout.strip().splitlines()[-1]
            try:
                result = json.loads(matlab_output.replace("'", '"'))  # convert MATLAB quotes to JSON
            except:
                result = {'prediction': matlab_output, 'confidence': None}

            predictions.append({
                'filename': file.filename,
                'prediction': result.get('prediction'),
                'confidence': result.get('confidence')
            })

    return jsonify({'predictions': predictions})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
