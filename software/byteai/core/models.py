"""
© 2025 ByteAI INC. ALL RIGHTS RESERVED.

-----------------------------------------------------------
Byte.ai Model Integration & Architecture Overview
-----------------------------------------------------------

We will utilize approximately 9 to 10 high-performance models
sourced from HuggingFace Hub (huggingface.co), leveraging the
`transformers` module for integration.

Key Steps:

1. Load models using `transformers.pipeline`.
2. Download model weights via `snapshot_download`.
3. Apply TensorFlow quantization techniques to optimize
model sizes and performance for Apple Silicon (M2 chip).
4. Architect a dedicated Python class for each model.
- Each class will encapsulate specific functions
according to the model’s structure and capabilities.
5. Assign models based on task specialization:
- Summarization: `Qwen2`
- Image Generation: `DALL·E` (via api as we cannot install it locally m2 is not a powerhouse)
- Text Generation: `GPT-2`
- more...

These classes will be modularly imported and invoked in `main.py` and first been loaded in `load.py`.

-----------------------------------------------------------
Use Case:
> BYTE.AI powers the core AI infrastructure for the
Sangharsh Premier League (SPL), enabling intelligent
generation, summarization, and automation at scale.
-----------------------------------------------------------
"""


# Imports
from transformers import pipeline, AutoTokenizer, AutoModelForCausalLM
from huggingface_hub import snapshot_download
import os

# Classes

class Qwen2:
    def __init__(self):
        model_id = "Qwen/Qwen1.5-7B-Chat"
        local_dir = "models/qwen2"
        if not os.path.exists(local_dir):
            snapshot_download(repo_id=model_id, local_dir=local_dir, local_dir_use_symlinks=False)
        self.tokenizer = AutoTokenizer.from_pretrained(local_dir)
        self.model = AutoModelForCausalLM.from_pretrained(local_dir)
        self.chat = pipeline("text-generation", model=self.model, tokenizer=self.tokenizer)

    def summarize(self, prompt: str):
        response = self.chat(prompt, max_new_tokens=100, do_sample=True)
        return response[0]['generated_text']

class GPT2:
    def __init__(self):
        model_id = "gpt2"
        local_dir = "models/gpt2"
        if not os.path.exists(local_dir):
            snapshot_download(repo_id=model_id, local_dir=local_dir, local_dir_use_symlinks=False)
        self.tokenizer = AutoTokenizer.from_pretrained(local_dir)
        self.model = AutoModelForCausalLM.from_pretrained(local_dir)
        self.generator = pipeline("text-generation", model=self.model, tokenizer=self.tokenizer)

    def generate_text(self, prompt: str):
        response = self.generator(prompt, max_new_tokens=100, do_sample=True)
        return response[0]['generated_text']

class Core:
    def __init__(self):
        self.flan_pipe = pipeline("text2text-generation", model="google/flan-t5-large")
        self.llama_tokenizer = AutoTokenizer.from_pretrained("meta-llama/Llama-2-7b-chat-hf")
        self.llama_model = AutoModelForCausalLM.from_pretrained("meta-llama/Llama-2-7b-chat-hf")
        self.llama_pipe = pipeline("text-generation", model=self.llama_model, tokenizer=self.llama_tokenizer)

    def instruct(self, prompt: str):
        return self.flan_pipe(prompt, max_new_tokens=100)[0]["generated_text"]

    def generate(self, prompt: str):
        return self.llama_pipe(prompt, max_new_tokens=150)[0]["generated_text"]

class ToneAnalyzer:
    def __init__(self):
        self.classifier = pipeline("sentiment-analysis", model="distilbert-base-uncased-finetuned-sst-2-english")

    def analyze_tone(self, text: str):
        result = self.classifier(text)[0]
        tone = result["label"]
        score = result["score"]
        return {"tone": tone, "confidence": round(score, 2)}

    @staticmethod
    def is_task_oriented(text: str):
        task_keywords = ["create", "build", "write", "generate", "fix", "update", "design", "implement"]
        return any(keyword in text.lower() for keyword in task_keywords)

class BlenderBot:
    def __init__(self):
        model_id = "facebook/blenderbot-1B-distill"
        local_dir = "models/blenderbot-1b-distill"

        if not os.path.exists(local_dir):
            snapshot_download(repo_id=model_id, local_dir=local_dir, local_dir_use_symlinks=False)

        self.chatbot = pipeline("conversational", model=local_dir)

    def analyze_trend(self, media_text: str) -> str:
        """
        Analyze media content or social chatter to extract trends, sentiments,
        or insightful commentary using BlenderBot's conversational abilities.

        Args:
        media_text (str): Input text representing media or social content.

        Returns:
        str: Generated analysis or response about the media trend.
        """
        response = self.chatbot(media_text)
        return response[0]['generated_text'] if 'generated_text' in response[0] else str(response[0])