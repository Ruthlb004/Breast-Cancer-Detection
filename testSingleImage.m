function out = testSingleImage(imagePath)

    %% -------- Load Model --------
    modelPath = fullfile('C:\Users\Loren Ruth\BCD\', 'trainedResNet50Model.mat');
    data = load(modelPath);
    net = data.trainedNet;

    %% -------- Read Input Image --------
    [~,~,ext] = fileparts(imagePath);
    ext = lower(ext);

    if strcmp(ext,'.dcm')
        img = dicomread(imagePath);
    else
        img = imread(imagePath);
    end

    originalImg = img;

    %% ============================================================
    %        MAMMOGRAM FILTERING (FACE / COLOR / BACKGROUND)
    %% ============================================================

    % -------------- 1. Face Detection ----------------
    faceDetector = vision.CascadeObjectDetector;
    faces = faceDetector(originalImg);

    if ~isempty(faces)
        out.prediction = "Rejected: Face detected (Not a mammogram)";
        return;
    end

    % -------------- 2. Grayscale Check ----------------
    if size(originalImg,3) == 3
        diffRG = mean2(abs(originalImg(:,:,1) - originalImg(:,:,2)));
        diffGB = mean2(abs(originalImg(:,:,2) - originalImg(:,:,3)));

        if diffRG > 5 || diffGB > 5
            out.prediction = "Rejected: Not grayscale (Not a mammogram)";
            return;
        end
    end

    % -------------- 3. Dark Mammogram Background Check ----------------
    grayImg = rgb2gray(originalImg);
    darkPixels = grayImg < 40;
    darkRatio = sum(darkPixels(:)) / numel(grayImg);

    if darkRatio < 0.50
        out.prediction = "Rejected: No mammogram-like dark background";
        return;
    end

    %% ============================================================
    %     Passed all filters → Accept and Classify
    %% ============================================================

    % Convert grayscale to RGB
    if size(img,3) == 1
        img = repmat(img,[1 1 3]);
    end

    % Resize for ResNet50
    img = imresize(img, [224 224]);

    % Predict
    predictedLabel = classify(net, img);

    %% -------- Output ONLY prediction --------
    out.prediction = string(predictedLabel);

end
