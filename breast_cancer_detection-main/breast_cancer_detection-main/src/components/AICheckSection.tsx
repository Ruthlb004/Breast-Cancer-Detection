import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import { Progress } from "./ui/progress";
import { Upload, AlertCircle, CheckCircle2, X, FileImage, Brain, Download } from "lucide-react";
import jsPDF from "jspdf";

interface AnalysisResult {
  type: 'success' | 'error' | null;
  message: string;
  confidence?: number;
  predictions?: { filename: string; prediction: string }[];
  overallResult?: string;
  details?: string[];
}

interface AICheckSectionProps {
  userEmail: string;
}

export function AICheckSection({ userEmail }: AICheckSectionProps) {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult>({ type: null, message: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateReport = async () => {
    if (!result.predictions || result.predictions.length === 0) return;

    const doc = new jsPDF();
    const reportDate = new Date().toLocaleString();
    const pageWidth = doc.internal.pageSize.getWidth();
    
    // Add Header Background
    doc.setFillColor(194, 24, 91);
    doc.rect(0, 0, pageWidth, 25, 'F');
    
    // Title text - centered
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.text('Breastly', pageWidth / 2, 12, { align: 'center' });
    doc.setFontSize(10);
    doc.text('Mammogram Analysis Report', pageWidth / 2, 19, { align: 'center' });
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    
    // User Information
    let yPos = 38;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('Patient Information:', 15, yPos);
    doc.setFont(undefined, 'normal');
    yPos += 8;
    doc.setFontSize(10);
    doc.text(`Email/Phone: ${userEmail}`, 15, yPos);
    yPos += 6;
    doc.text(`Report Generated: ${reportDate}`, 15, yPos);
    yPos += 6;
    doc.text('Analysis Method: AI-Powered Deep Learning (ResNet-50)', 15, yPos);
    yPos += 6;
    doc.text(`Number of Images Analyzed: ${result.predictions.length}`, 15, yPos);
    
    // Separator line
    yPos += 10;
    doc.setDrawColor(194, 24, 91);
    doc.setLineWidth(0.5);
    doc.line(15, yPos, pageWidth - 15, yPos);
    
    // Final Analysis Result
    yPos += 10;
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(194, 24, 91);
    doc.text('FINAL ANALYSIS RESULT', pageWidth / 2, yPos, { align: 'center' });
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    yPos += 8;
    
    // Result box
    doc.setFillColor(252, 228, 236); // Light pink background
    doc.roundedRect(15, yPos, pageWidth - 30, 18, 3, 3, 'F');
    
    yPos += 8;
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.setTextColor(194, 24, 91);
    const resultText = result.overallResult || 'Analysis Complete';
    doc.text(resultText, pageWidth / 2, yPos, { align: 'center', maxWidth: pageWidth - 40 });
    doc.setFont(undefined, 'normal');
    doc.setTextColor(0, 0, 0);
    
    yPos += 20;
    
    // Separator
    doc.setDrawColor(194, 24, 91);
    doc.setLineWidth(0.5);
    doc.line(15, yPos, pageWidth - 15, yPos);
    yPos += 12;
    
    // Uploaded Mammogram Images Section
    doc.setFontSize(14);
    doc.setFont(undefined, 'bold');
    doc.text('UPLOADED MAMMOGRAM IMAGES', 15, yPos);
    doc.setFont(undefined, 'normal');
    yPos += 10;
    
    // Add images to PDF (without individual results)
    const imagePromises = previews.map((preview, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.onload = () => {
          if (yPos > 230) {
            doc.addPage();
            yPos = 20;
          }
          
          // Add image
          const imgWidth = 70;
          const imgHeight = 60;
          try {
            doc.addImage(preview, 'JPEG', 20, yPos, imgWidth, imgHeight);
          } catch (e) {
            console.error('Error adding image:', e);
          }
          
          // Add image label only (no individual prediction)
          doc.setFontSize(10);
          doc.setTextColor(0, 0, 0);
          doc.text(`Image ${index + 1}`, 95, yPos + 15);
          doc.setFontSize(9);
          doc.setTextColor(100, 100, 100);
          doc.text(`Filename: ${uploadedFiles[index]?.name || 'Unknown'}`, 95, yPos + 23);
          doc.text(`Size: ${(uploadedFiles[index]?.size / 1024 / 1024).toFixed(2)} MB`, 95, yPos + 30);
          
          yPos += imgHeight + 15;
          
          // Separator between images
          if (index < previews.length - 1) {
            doc.setDrawColor(220, 220, 220);
            doc.setLineWidth(0.3);
            doc.line(20, yPos, pageWidth - 20, yPos);
            yPos += 10;
          }
          
          resolve();
        };
        img.onerror = () => {
          resolve(); // Continue even if image fails to load
        };
        img.src = preview;
      });
    });
    
    // Wait for all images to be added
    await Promise.all(imagePromises);
    
    // Disclaimer
    if (yPos > 220) {
      doc.addPage();
      yPos = 20;
    }
    
    yPos += 10;
    doc.setDrawColor(194, 24, 91);
    doc.setLineWidth(0.5);
    doc.line(15, yPos, pageWidth - 15, yPos);
    yPos += 10;
    
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('IMPORTANT DISCLAIMER', 15, yPos);
    doc.setFont(undefined, 'normal');
    yPos += 8;
    
    doc.setFontSize(9);
    const disclaimerText = 'This AI analysis is a supplementary tool and should NOT replace professional medical diagnosis. Always consult with qualified healthcare providers for accurate diagnosis and treatment. Early detection and professional medical care are crucial for the best outcomes.';
    const splitDisclaimer = doc.splitTextToSize(disclaimerText, pageWidth - 30);
    doc.text(splitDisclaimer, 15, yPos);
    
    yPos += splitDisclaimer.length * 5 + 10;
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text('Generated by Breastly - Breast Cancer Detection Platform', pageWidth / 2, yPos, { align: 'center' });
    doc.text('© 2025 Breastly. All rights reserved.', pageWidth / 2, yPos + 5, { align: 'center' });
    
    // Save PDF
    doc.save(`Breastly_Analysis_Report_${new Date().getTime()}.pdf`);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const validTypes = ['image/jpeg', 'image/png', 'image/dicom', 'application/dicom'];
      const validSize = file.size <= 10 * 1024 * 1024; // 10MB limit
      return validTypes.includes(file.type) || file.name.toLowerCase().endsWith('.dcm') || (validSize && file.type.startsWith('image/'));
    });

    if (validFiles.length !== files.length) {
      alert('Some files were skipped. Please upload DICOM (.dcm), JPEG, or PNG files under 10MB.');
    }

    setUploadedFiles(validFiles);

    // Create previews for image files
    const newPreviews: string[] = [];
    validFiles.forEach(file => {
      if (file.type.startsWith('image/') && !file.name.toLowerCase().endsWith('.dcm')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          newPreviews.push(e.target?.result as string);
          if (newPreviews.length === validFiles.filter(f => f.type.startsWith('image/') && !f.name.toLowerCase().endsWith('.dcm')).length) {
            setPreviews(newPreviews);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    setPreviews(newPreviews);

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // ===== Updated handleSubmit to support multiple files =====
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (uploadedFiles.length === 0) return;

    setIsLoading(true);
    setUploadProgress(0);
    setResult({ type: null, message: "" });

    try {
      const formData = new FormData();
      uploadedFiles.forEach(file => formData.append('images', file)); // append all files

      // Optional: simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 200);

      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Build details for each file
      const details = data.predictions.map((p: any) =>
        p.prediction ? `${p.filename}: ${p.prediction}` : `${p.filename}: ERROR`
      );

      // Calculate overall result for multiple images
      let overallResult = '';
      if (data.predictions.length > 1) {
        // Count different prediction types
        const predictionCounts: { [key: string]: number } = {};
        data.predictions.forEach((p: any) => {
          const pred = p.prediction || 'Unknown';
          predictionCounts[pred] = (predictionCounts[pred] || 0) + 1;
        });

        // Determine overall result based on severity
        const hasMalignant = data.predictions.some((p: any) => 
          p.prediction?.toLowerCase().includes('malignant')
        );
        const hasBenign = data.predictions.some((p: any) => 
          p.prediction?.toLowerCase().includes('benign')
        );
        const hasNormal = data.predictions.some((p: any) => 
          p.prediction?.toLowerCase().includes('normal')
        );

        if (hasMalignant) {
          overallResult = 'Malignant findings detected - Immediate medical consultation recommended';
        } else if (hasBenign) {
          overallResult = 'Benign findings detected - Follow-up consultation recommended';
        } else if (hasNormal) {
          overallResult = 'Normal findings - Regular screening recommended';
        } else {
          // If we can't determine, use the most common prediction
          const mostCommon = Object.entries(predictionCounts).sort((a, b) => b[1] - a[1])[0];
          overallResult = mostCommon ? mostCommon[0] : 'Analysis Complete';
        }
      } else if (data.predictions.length === 1) {
        overallResult = data.predictions[0].prediction || 'Analysis Complete';
      }

      setResult({
        type: 'success',
        message: `Analyzed ${data.predictions.length} image(s) successfully.`,
        predictions: data.predictions,
        overallResult,
        details
      });

    } catch (error: any) {
      setResult({
        type: 'error',
        message: error.message || "Something went wrong connecting to the backend."
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setUploadProgress(0), 3000);
    }
  };
  // ===============================================================

  return (
    <div className="space-y-6">
      <Card className="border-2 border-pink-900 shadow-lg bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-black">
            <Brain className="h-5 w-5 text-pink-900" />
            AI-Powered Mammogram Analysis
          </CardTitle>
          <CardDescription className="text-gray-700">
            Upload your mammogram images for AI-assisted cancer detection analysis.
            Supports DICOM (.dcm), JPEG, and PNG formats. Maximum file size: 10MB per image.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* File Upload Area */}
            <div className="space-y-2">
              <Label htmlFor="mammogram-upload">Mammogram Images</Label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                  uploadedFiles.length > 0 ? 'border-pink-900 bg-pink-50' : 'border-gray-300 hover:border-pink-900'
                }`}
                onClick={() => fileInputRef.current?.click()}
              >
                <Input
                  ref={fileInputRef}
                  id="mammogram-upload"
                  type="file"
                  accept=".dcm,.jpg,.jpeg,.png,image/*"
                  multiple
                  onChange={handleFileSelect}
                  disabled={isLoading}
                  className="hidden"
                />
               
                {uploadedFiles.length === 0 ? (
                  <div className="space-y-2">
                    <Upload className="h-8 w-8 mx-auto text-gray-400" />
                    <p className="text-black">Click to upload mammogram images</p>
                    <p className="text-sm text-gray-600">
                      DICOM (.dcm), JPEG, or PNG files
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <CheckCircle2 className="h-8 w-8 mx-auto text-pink-900" />
                    <p className="text-black">
                      {uploadedFiles.length} file{uploadedFiles.length > 1 ? 's' : ''} selected
                    </p>
                    <p className="text-sm text-gray-600">
                      Click to add more files or drag new files here
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* File List */}
            {uploadedFiles.length > 0 && (
              <div className="space-y-3">
                <Label className="text-black">Uploaded Files</Label>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 border border-pink-900 rounded-lg bg-gray-50">
                      <FileImage className="h-5 w-5 text-pink-900 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm truncate text-black">{file.name}</p>
                        <p className="text-xs text-gray-600">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        disabled={isLoading}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Image Previews */}
            {previews.length > 0 && (
              <div className="space-y-3">
                <Label className="text-black">Image Previews</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt={`Mammogram Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border-2 border-pink-900"
                      />
                      <div className="absolute bottom-2 left-2 bg-pink-900 bg-opacity-90 text-white text-xs px-2 py-1 rounded">
                        Image {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Upload Progress */}
            {isLoading && uploadProgress > 0 && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-black">
                  <span>Analyzing mammogram images...</span>
                  <span>{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="w-full [&>div]:bg-gradient-to-r [&>div]:from-pink-900 [&>div]:to-pink-700" />
              </div>
            )}
           
            <Button
              type="submit"
              disabled={uploadedFiles.length === 0 || isLoading}
              className="w-full bg-gradient-to-r from-pink-900 to-pink-700 hover:from-pink-800 hover:to-pink-600 text-white shadow-lg"
            >
              {isLoading ? "Analyzing Mammogram Images..." : "Start AI Analysis"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Results Display */}
      {result.type && (
        <Alert className={result.type === 'success' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}>
          {result.type === 'success' ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
          <AlertDescription className="ml-2">
            <div className="space-y-3">
              <p className={result.type === 'success' ? 'text-green-900' : 'text-red-900'}>
                {result.message}
              </p>
             
              {result.type === 'success' && (
                <div className="space-y-4">
                  {/* Overall Result for Multiple Images */}
                  {result.overallResult && result.predictions && result.predictions.length > 1 && (
                    <div className="bg-gradient-to-r from-pink-900 to-pink-700 text-white p-4 rounded-lg">
                      <h3 className="mb-2">Final Analysis Result</h3>
                      <p className="text-lg">{result.overallResult}</p>
                      <p className="text-sm mt-2 opacity-90">
                        Based on analysis of {result.predictions.length} mammogram images
                      </p>
                    </div>
                  )}

                  {/* Individual Image Results */}
                  {result.details && result.predictions && result.predictions.length > 1 && (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-700">Individual Image Results:</p>
                      {result.details.map((detail, index) => (
                        <div key={index} className="flex items-center justify-between bg-white p-3 rounded border border-green-200">
                          <span className="text-black text-sm">
                            {detail.split(': ')[0]}: <strong className="text-green-900">{detail.split(': ')[1]}</strong>
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Single Image Result */}
                  {result.predictions && result.predictions.length === 1 && (
                    <div className="bg-gradient-to-r from-pink-900 to-pink-700 text-white p-4 rounded-lg">
                      <h3 className="mb-2">Analysis Result</h3>
                      <p className="text-lg">{result.overallResult}</p>
                    </div>
                  )}
                  
                  {/* Download Report Button */}
                  <Button
                    onClick={generateReport}
                    className="w-full bg-gradient-to-r from-pink-900 to-pink-700 hover:from-pink-800 hover:to-pink-600 text-white mt-4"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Analysis Report (PDF)
                  </Button>
                </div>
              )}
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Important Notice */}
      <Alert className="border-pink-900 bg-pink-50">
        <AlertCircle className="h-5 w-5 text-pink-900" />
        <AlertDescription className="ml-2 text-gray-700">
          <strong className="text-pink-900">Important:</strong> This AI analysis is a supplementary tool and should not replace professional medical diagnosis.
          Always consult with qualified healthcare providers for accurate diagnosis and treatment.
        </AlertDescription>
      </Alert>
    </div>
  );
}
