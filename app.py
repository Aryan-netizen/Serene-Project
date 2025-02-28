from flask import Flask, request, jsonify,render_template


app = Flask(__name__)

# Serene's introduction
introduction = (
    "Hi! I'm Serene, your virtual friend. I'm here to chat with you, listen to your thoughts, "
    "and help you feel better. You can talk to me about anything, and I'll do my best to support you. "
    "How are you feeling today?"
)

# Chatbot responses
responses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "what is your name": "I'm Serene, your virtual friend!",
    "what can you do": "I can chat with you, listen to your thoughts, and help you feel better.",
    "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
    "what is the weather today": "I'm not sure, but you can check a weather app for real-time updates!",
    "who created you": "I was created by a developer using Python, Flask, and a lot of love!",
    "what is python": "Python is a high-level programming language known for its simplicity and readability.",
    "what is your favorite color": "I don't have eyes, but I think blue is a nice color!",
    "how old are you": "I'm just a program, so I don't have an age!",
    "what is the meaning of life": "That's a deep question! Some say 42, others say it's what you make of it.",
    "do you like humans": "Of course! Humans are fascinating and creative.",
    "what is your favorite food": "I don't eat, but I hear pizza is a popular choice!",
    "goodbye": "Goodbye! It was nice talking to you. Have a great day!",
    # Mental health-related questions and responses
    "how are you feeling": "I'm here to listen. How are you feeling today?",
    "i feel sad": "I'm sorry to hear that. It's okay to feel sad sometimes. Would you like to talk about it?",
    "i feel anxious": "Anxiety can be tough. Try taking deep breaths or focusing on something calming. I'm here if you need to talk.",
    "i feel stressed": "Stress is hard to deal with. Maybe take a break, go for a walk, or do something you enjoy. How can I help?",
    "i feel lonely": "You're not alone. I'm here for you. Is there someone you can reach out to?",
    "i feel happy": "That's wonderful to hear! I'm glad you're feeling happy. What made you feel this way?",
    "i feel tired": "It's important to rest when you're tired. Make sure you're taking care of yourself. How can I support you?",
    "i feel overwhelmed": "Feeling overwhelmed is tough. Try breaking tasks into smaller steps. I'm here to listen if you need to vent.",
}
@app.route('/')
def home():
    return render_template("index.html")
@app.route('/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message', '').lower()
    response = responses.get(user_message, "I'm not sure how to answer that. Can you ask something else?")
    return jsonify({'response': response})

@app.route('/introduce', methods=['GET'])
def introduce():
    return jsonify({'response': introduction})

if __name__ == '__main__':
    app.run(debug=True)