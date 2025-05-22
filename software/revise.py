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

