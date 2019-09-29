// new intro for the bot 





var botui = new BotUI('pan-bot-ui');
        botui.message.add({
            delay: 1000,
            loading: true,
            content: 'Hello, My name is Pan.  I am here to assist you. How are you?'





// additional response and questions for the bot 


.then(function() {
                 botui.message.add({ // show a message
                 delay: 1000,
                 loading: true,
                 content: 'Dont like my suggestions? ok ! ask a personal question..'
             })

          })
            .then(function(res) { // responses to question 
               var message;

               if (res.value === "ok") {
                   message =
                       'ok! feel free to ask';
               } else if (res.value === "question") {
                   message =
                       'ok thats a more personal Question. drop your mail here, and i will send the information across';
               }
              .then(function() {
                 botui.message.add({ // show a message
                 delay: 1000,
                 loading: true,
                 content: 'You can still pick from my suggestions..'