from transformers import pipeline
from typing import List, Optional


def analyze_sentiments(
        texts: List[str],
        model_name: Optional[str] = None,
        min_confidence: float = 0.0
):
    # Initialize the sentiment classifier
    classifier = pipeline("sentiment-analysis", model=model_name) if model_name else pipeline("sentiment-analysis")

    results = classifier(texts)

    # Prepare and return formatted results
    final_results = []
    for text, result in zip(texts, results):
        label = result['label']
        score = result['score']
        if score >= min_confidence:
            final_results.append({
                'text': text,
                'sentiment': label,
                'confidence': f"{score:.2f}"
            })
        else:
            final_results.append({
                'text': text,
                'sentiment': 'Uncertain',
                'confidence': f"{score:.2f}"
            })
    return final_results


# Usage
test_inputs = [
    "I love this movie so so so so much",
    "I hate this movie",
    "I am happy",
    "I am sad",
    "This is okay I guess",
    ""
]

results = analyze_sentiments(test_inputs, min_confidence=0.6)

# Display results
for result in results:
    print(f"\nText: {result['text']}\nSentiment: {result['sentiment']}\nConfidence: {result['confidence']}")