# Pandas
import pandas as pd

data = {
    "name": ["JetBrainsAI","gemini","chatgpt"],
    "license": ["paid","free/paid","free/paid"],
    "smartness": ["ultimate","basic","ultraUltimate"]
}

df = pd.DataFrame(data)

print(df)

# Transformers

from transformers import pipeline

sentiment_pipeline = pipeline(
    "sentiment-analysis",
    model="distilbert-base-uncased-finetuned-sst-2-english"
)

result = sentiment_pipeline("I love using Jetbrians Fleet code editor. It's amazing! , It's extraordinary!")

print(f"Sentiment: {result}")