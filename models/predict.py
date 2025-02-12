import joblib
import sys
import numpy as np
import os  

# Get the absolute path to the directory containing predict.py
dir_path = os.path.dirname(os.path.realpath(__file__))

# Loading the model
model_path = os.path.join(dir_path, 'hyper_model1.pkl')
# Example with an absolute path
# model_path = 'D:/AI_MODEL_JS/models/new.pkl'
model = joblib.load(model_path)
# if not os.path.exists(model_path):
#     print(f"Error: Model file not found at {model_path}")
#     sys.exit(1)

# Extracting features from command-line arguments
features = [float(arg) for arg in sys.argv[1:22]]
# print("Features Array:", features)
# Performing prediction
prediction = model.predict(np.array(features).reshape(1, -1))[0]
# print("Command-Line Arguments:", sys.argv)
# Printing or returning the prediction 
# print(prediction)