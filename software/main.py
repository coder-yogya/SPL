from transformers import pipeline

classifier = pipeline("sentiment-analysis")

# Analyzing sentiments . (test)
print(classifier("I love this movie so so so so much"))
print(classifier("I hate this movie"))
print(classifier("I am happy"))
print(classifier("I am sad"))

