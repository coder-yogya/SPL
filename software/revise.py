# Pandas

import pandas as pd

data = {
    "name": ["JetBrainsAI","gemini","chatgpt"],
    "license": ["paid","free/paid","free/paid"],
    "smartness": ["ultimate","basic","ultraUltimate"],
    "familierness": ["some","no","extreme ❤️"]
}

df = pd.DataFrame(data)

print(f"DataFrame: \n {df}")

# Transformers
"""
from transformers import pipeline

sentiment = pipeline('sentiment-analysis')
text = "hello from here!"

result = sentiment(text)
print(result)
"""

# Numpy

import numpy as np

matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])


vector = np.array([1, 0, 1])
result = np.dot(matrix, vector)
elementwise = matrix * 2


mean_val = np.mean(matrix)
std_val = np.std(matrix)

print("Original Matrix:\n", matrix)
print("Vector:\n", vector)
print("Matrix-Vector Product:\n", result)
print("Matrix after element-wise multiplication by 2:\n", elementwise)
print(f"Mean of matrix elements: {mean_val:.2f}")
print(f"Standard deviation of matrix elements: {std_val:.2f}")