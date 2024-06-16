from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array, load_img
import numpy as np
import io
from PIL import Image

app = FastAPI()

# Load the model
print("Loading model...")
model = load_model('vgg19_softmax_classifier.h5')
print("Model loaded successfully!")

@app.post("/predict/")
async def predict_image(file: UploadFile = File(...)):
    try:
        print("Reading uploaded image file...")
        image = Image.open(io.BytesIO(await file.read()))
        print("Image file read successfully!")
        
        # Preprocess the image
        print("Preprocessing the image...")
        image = image.resize((150, 150))  # Resize the image to match the input shape expected by the model
        image = img_to_array(image)
        image = np.expand_dims(image, axis=0)
        image /= 255.0  # Normalize the image
        print("Image preprocessing completed.")

        # Make prediction
        print("Making prediction...")
        prediction = model.predict(image)
        predicted_class = np.argmax(prediction, axis=1)[0]
        print(f"Prediction completed. Predicted class: {predicted_class}")
        
        # Determine the class label
        label = 'healthy' if predicted_class == 0 else 'unhealthy'
        print(f"Determined class label: {label}")

        return JSONResponse(content={"label": label})
    except Exception as e:
        print(f"Error occurred: {str(e)}")
        return JSONResponse(content={"error": str(e)}, status_code=500)

# Run the app with: uvicorn fast_api_meat_quality:app --reload
