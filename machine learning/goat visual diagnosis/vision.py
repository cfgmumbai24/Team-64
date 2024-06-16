# Q&A Chatbot
#from langchain.llms import OpenAI

from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

import streamlit as st
import os
import pathlib
import textwrap
from PIL import Image


import google.generativeai as genai


# os.getenv("GOOGLE_API_KEY")
genai.configure(api_key="")

## Function to load OpenAI model and get respones

def get_gemini_response(input,image):
    model = genai.GenerativeModel('gemini-pro-vision')
    if input!="":
       response = model.generate_content([input,image])
    else:
       response = model.generate_content(image)
    return response.text

##initialize our streamlit app

st.set_page_config(page_title="Goat Health Diagnosis")

st.header("Goat Health Diagnosis")
uploaded_file = st.file_uploader("Choose an image...", type=["jpg", "jpeg", "png"])
image=""   
if uploaded_file is not None:
    image = Image.open(uploaded_file)
    st.image(image, caption="Uploaded Image.", width=100)


submit=st.button("Diagnose")

## If ask button is clicked

if submit:
    input_prompt = "Identify if the goat is healthy or unhealthy. If unhealthy, mention possible health diagnosis"
    response=get_gemini_response(input_prompt,image)
    st.subheader("The Response is")
    st.write(response)
