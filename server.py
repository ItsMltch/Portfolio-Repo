from flask import Flask, request, render_template
from datetime import datetime

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def init():
    return render_template('index.html')

@app.route('/chat', methods=['POST'])
def handle_message():
    data = request.get_json()
    username = data.get('username')
    message = data.get('message')
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    response = {
        'username': username,
        'message': message,
        'timestamp': timestamp
    }
    return response

def run_server():
    app.run(debug=True)

if __name__ == "__main__":
    run_server()