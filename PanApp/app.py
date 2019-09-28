from flask import Flask, render_template, request
import random
import time


app = Flask(__name__)



greetings = ['hola', 'hello', 'hi', 'hey!', 'Hello', 'Hi']
questions = ['How are you?', 'How are you doing?']
responses = ['Okay', 'I am fine']
validations = ['yes', 'yeah', 'yea', 'no', 'No', 'Nah', 'nah']
verifications = ['Are you sure?', 'You sure?', 'you sure?', 'sure?', "Sure?"]


@app.route('/')
def home():
   return render_template("home.html")

@app.route('/chatbot')
def chatbot():
   return render_template('chatbot.html')   


@app.route("/get")
def get_bot_response():
   userText = request.args.get('msg')
   userInput = userText

   while True:
      if userInput in /[a-z]/:
         return "Welcome %s, How may I help you?" %userInput

      elif userInput in greetings:
         random_greeting = random.choice(greetings)
         time.sleep(.5)
         return random_greeting

      elif userInput in questions:
         random_response = random.choice(responses)
         time.sleep(.5)
         return random_response
            
      elif userInput in verifications:
         random_response = random.choice(validations)
         time.sleep(.5)
         return random_response

      elif 'sure' in userInput:
         response = "Sure about what?"
         time.sleep(.5)
         return response
      else:
         advice = "I don't understand you! Please refer to the terms of use to ask me the right questions"
         time.sleep(.5)
         return advice

if __name__ == "__main__":
   app.run(debug=True)
