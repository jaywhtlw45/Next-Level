from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the NextLevel Workout App!"

@app.route('/workout', methods=['GET'])
def get_workout():
    workout_data = {
        "name": "Pushups",
        "sets": 3,
        "reps":15   
    }
    return jsonify(workout_data)

@app.route('/workout2', methods=['GET'])
def get_workout2():
    workout_data = {
        "name": "Pushups",
        "sets": 3,
        "reps":15   
    }
    return jsonify(workout_data)

def start_server():
    app.run(debug=True, host='0.0.0.0', port=8000)

if __name__ == '__main__':
    start_server()