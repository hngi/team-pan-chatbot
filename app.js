const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
let paragraph = document.createElement('p');
let container = document.querySelector('.text-box');
container.appendChild(paragraph);


const greetings = 
[
      'Hi, I am Pan, I can tell you all about HNG6.0'
]

const intern = 
[
    'HNG internship is a 3 months remote internship designed to find and develop the most talented software developers.'
]

const intern1 =
[
        'Yes, this programme is for you. There is a pre-internship to prepare the newbies. if you are dedicated you will be able to do well. To know more visit: hng.tech/, about'
]

const intern2 = 
[
    'its an easy process. Join hng.tech/, become-intern'
]

const intern3 =
[
    'Yes, The HNG internship is completely free.'
]

const intern4 =
[
        'You will need the following to do this internship successfully: A Laptop, Internet, Time and Electricity.'
]

const intern5 = 
[
    'Yes, if you complete the internship successfully, there will be job oppurtunities. We will also prepare you for interviews and help you with how to build a work profile.'
]

const intern6=
[
    'You are welcome. Have a great day'
]

const webkitSpeechRecognition =  window.webkitSpeechRecognition;
const mySpeechRecognition = new webkitSpeechRecognition();

mySpeechRecognition.onstart = function()
{
    console.log ("Voice Recognition Activated");
};

mySpeechRecognition.onresult = function(event)
{
  
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};


btn.addEventListener('click', () =>
{
    mySpeechRecognition.start();
});

function readOutLoud(message)
{
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I didnt get your message';
  
    if(message.includes('hello'))
    {
        const finalText = 
        greetings [Math.floor(Math.random()*greetings.length)];
     speech.text = finalText;
   
    };
  
    if (message.includes('hng')) {
        const finalText =
            intern [Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    };

    if (message.includes('newbie' || 'experience')) {
        const finalText =
            intern1[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    };

    if (message.includes('join')) {
        const finalText =
            intern2[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    };

    if (message.includes('free')) {
        const finalText =
            intern3[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    };

    if (message.includes('need' || 'started')) {
        const finalText =
            intern4[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    };

    if (message.includes('job')) {
        const finalText =
            intern5[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    };

    if (message.includes('thank you')) {
        const finalText =
            intern6[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    };

   
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

