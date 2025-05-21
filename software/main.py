from huggingface_hub import snapshot_download

snapshot_download("tatsu-lab/alpaca")

# chat with the model:

from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("tatsu-lab/alpaca")
tokenizer = AutoTokenizer.from_pretrained("tatsu-lab/alpaca")

inputs = tokenizer("Tell me a joke.", return_tensors="pt")
outputs = model.generate(**inputs)