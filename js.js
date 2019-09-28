// Javascript code for the bot ui of team-pan

var botui = new BotUI('pan-bot-ui');
        botui.message.add({
            delay: 1000,
            loading: true,
            content: 'Hello, My name is Pan. I will be your user friendly bot for today!'
        }).then(function() {
            botui.message.add({ // show a message
                delay: 1000,
                loading: true,
                content: 'Whats your name?'
            }).then(function() { // wait till its shown
                return botui.action.text({ // show 'text' action
                    action: {
                        placeholder: 'Your name'
                    }
                });
            }).then(function(res) { // get the result
                botui.message.add({
                    content: 'Hello ' + res.value + ', ' +
                        'How can I help you today?'
                });
            })
            
            
            .then(function() { // The questions the bot can answer, set 1
                return botui.action.button({
                    delay: 1000,
                    loading: true,
                    action: [{
                        text: 'What is HNG?',
                        value: 'hng'
                    }, {
                        text: 'I am a newbie and have no experience, is the programme for me?',
                        value: 'newbie'
                    }, {
                        text: 'How do I join HNG?',
                        value: 'join'
                    }, {
                        text: 'Is the Internship free?',
                        value: 'free'
                    }, {
                        text: 'Will the internship pay the interns or support me?',
                        value: 'support'
                    }, {
                        text: 'What do I need to get started?',
                        value: 'need'
                    }, {
                        text: 'What programmes will I learn or do in the internship?',
                        value: 'programmes'
                    }, {
                        text: 'Will I get a job from the internship?',
                        value: 'job'
                    }]
                });
            })
            
            
            .then(function(res) { //the answer to bot questions
                var message;

                if (res.value === "hng") {
                    message =
                        'HNG internship is a 3 months remote internship designed to find and develop the most ' +
                        'talented software developers.';
                } else if (res.value == "newbie") {
                    message =
                        'Yes, this programme is for you. There is a pre-internship to prepare the newbies.<br>' +
                        ' If you are dedicated, you will be able to do well.' +
                        ' To know more visit <a href="https://hng.tech/about">HNG</a>';
                } else if (res.value === "join") {
                    message =
                        'Follow the link and join. its an easy process. ' +
                        '<a href="https://hng.tech/become-intern">Join</a>';
                } else if (res.value === "free") {
                    message =
                        'Yes, The HNG internship is completely free.';
                } else if (res.value === "support") {
                    message =
                        'In the past, we have paid interns a monthly stipends, but because of the large number of ' +
                        'interns we take in yearly, we do not pay the interns except in some circumstance.';
                } else if (res.value === "need") {
                    message =
                        'You will need the following to do this internship successfully:' +
                        '<br> A Laptop <br>' +
                        'Internet<br>Time<br>Electricity.';
                } else if (res.value === "programmes") {
                    message =
                        'You will have the opportunity to learn ' +
                        '<br> Design <br> Frontend Development <br>' +
                        'Backend Development <br> Machine Learning' +
                        '<br>Digital Marketing <br>Android Development' +
                        '<br> Sale Engineering';
                } else if (res.value === "job") {
                    message =
                        'Yes, if you complete the internship successfully, there will be job oppurtunities. ' +
                        'We will also prepare you for interviews and help you with how to build a work profile. ' +
                        'Take a look at our past interns <br>' +
                        '<a href="https://hng.tech/interns">HNG INTERNS</a>';
                }
                return botui.message.add({
                    type: 'html',
                    delay: 1000,
                    loading: true,
                    content: message
                });
            })

            
            .then(function() { // The questions the bot can answer, set 2
               return botui.action.button({
                   delay: 1000,
                   loading: true,
                   action: [{
                       text: 'What is HNG?',
                       value: 'hng'
                   }, {
                       text: 'I am a newbie and have no experience, is the programme for me?',
                       value: 'newbie'
                   }, {
                       text: 'How do I join HNG?',
                       value: 'join'
                   }, {
                       text: 'Is the Internship free?',
                       value: 'free'
                   }, {
                       text: 'Will the internship pay the interns or support me?',
                       value: 'support'
                   }, {
                       text: 'What do I need to get started?',
                       value: 'need'
                   }, {
                       text: 'What programmes will I learn or do in the internship?',
                       value: 'programmes'
                   }, {
                       text: 'Will I get a job from the internship?',
                       value: 'job'
                   }]
               });
           }).then(function(res) {
               var message;

               if (res.value === "hng") {
                   message =
                       'HNG internship is a 3 months remote internship designed to find and develop the most ' +
                       'talented software developers.';
               } else if (res.value == "newbie") {
                   message =
                       'Yes, this programme is for you. There is a pre-internship to prepare the newbies.<br>' +
                       ' If you are dedicated, you will be able to do well.' +
                       ' To know more visit <a href="https://hng.tech/about">HNG</a>';
               } else if (res.value === "join") {
                   message =
                       'Follow the link and join. its an easy process. ' +
                       '<a href="https://hng.tech/become-intern">Join</a>';
               } else if (res.value === "free") {
                   message =
                       'Yes, The HNG internship is completely free.';
               } else if (res.value === "support") {
                   message =
                       'In the past, we have paid interns a monthly stipends, but because of the large number of ' +
                       'interns we take in yearly, we do not pay the interns except in some circumstance.';
               } else if (res.value === "need") {
                   message =
                       'You will need the following to do this internship successfully:' +
                       '<br> A Laptop <br>' +
                       'Internet<br>Time<br>Electricity.';
               } else if (res.value === "programmes") {
                   message =
                       'You will have the opportunity to learn ' +
                       '<br> Design <br> Frontend Development <br>' +
                       'Backend Development <br> Machine Learning' +
                       '<br>Digital Marketing <br>Android Development' +
                       '<br> Sale Engineering';
               } else if (res.value === "job") {
                   message =
                       'Yes, if you complete the internship successfully, there will be job oppurtunities. ' +
                       'We will also prepare you for interviews and help you with how to build a work profile. ' +
                       'Take a look at our past interns <br>' +
                       '<a href="https://hng.tech/interns">HNG INTERNS</a>';
               }
               return botui.message.add({
                   type: 'html',
                   delay: 1000,
                   loading: true,
                   content: message
               });
           })
           
           .then(function() { // The questions the bot can answer, set 3
            return botui.action.button({
                delay: 1000,
                loading: true,
                action: [{
                    text: 'What is HNG?',
                    value: 'hng'
                }, {
                    text: 'I am a newbie and have no experience, is the programme for me?',
                    value: 'newbie'
                }, {
                    text: 'How do I join HNG?',
                    value: 'join'
                }, {
                    text: 'Is the Internship free?',
                    value: 'free'
                }, {
                    text: 'Will the internship pay the interns or support me?',
                    value: 'support'
                }, {
                    text: 'What do I need to get started?',
                    value: 'need'
                }, {
                    text: 'What programmes will I learn or do in the internship?',
                    value: 'programmes'
                }, {
                    text: 'Will I get a job from the internship?',
                    value: 'job'
                }]
            });
        }).then(function(res) {
            var message;

            if (res.value === "hng") {
                message =
                    'HNG internship is a 3 months remote internship designed to find and develop the most ' +
                    'talented software developers.';
            } else if (res.value == "newbie") {
                message =
                    'Yes, this programme is for you. There is a pre-internship to prepare the newbies.<br>' +
                    ' If you are dedicated, you will be able to do well.' +
                    ' To know more visit <a href="https://hng.tech/about">HNG</a>';
            } else if (res.value === "join") {
                message =
                    'Follow the link and join. its an easy process. ' +
                    '<a href="https://hng.tech/become-intern">Join</a>';
            } else if (res.value === "free") {
                message =
                    'Yes, The HNG internship is completely free.';
            } else if (res.value === "support") {
                message =
                    'In the past, we have paid interns a monthly stipends, but because of the large number of ' +
                    'interns we take in yearly, we do not pay the interns except in some circumstance.';
            } else if (res.value === "need") {
                message =
                    'You will need the following to do this internship successfully:' +
                    '<br> A Laptop <br>' +
                    'Internet<br>Time<br>Electricity.';
            } else if (res.value === "programmes") {
                message =
                    'You will have the opportunity to learn ' +
                    '<br> Design <br> Frontend Development <br>' +
                    'Backend Development <br> Machine Learning' +
                    '<br>Digital Marketing <br>Android Development' +
                    '<br> Sale Engineering';
            } else if (res.value === "job") {
                message =
                    'Yes, if you complete the internship successfully, there will be job oppurtunities. ' +
                    'We will also prepare you for interviews and help you with how to build a work profile. ' +
                    'Take a look at our past interns <br>' +
                    '<a href="https://hng.tech/interns">HNG INTERNS</a>';
            }
            return botui.message.add({
                type: 'html',
                delay: 1000,
                loading: true,
                content: message
            });
        })
        
        .then(function() { // The questions the bot can answer, set 4
         return botui.action.button({
             delay: 1000,
             loading: true,
             action: [{
                 text: 'What is HNG?',
                 value: 'hng'
             }, {
                 text: 'I am a newbie and have no experience, is the programme for me?',
                 value: 'newbie'
             }, {
                 text: 'How do I join HNG?',
                 value: 'join'
             }, {
                 text: 'Is the Internship free?',
                 value: 'free'
             }, {
                 text: 'Will the internship pay the interns or support me?',
                 value: 'support'
             }, {
                 text: 'What do I need to get started?',
                 value: 'need'
             }, {
                 text: 'What programmes will I learn or do in the internship?',
                 value: 'programmes'
             }, {
                 text: 'Will I get a job from the internship?',
                 value: 'job'
             }]
         });
     }).then(function(res) {
         var message;

         if (res.value === "hng") {
             message =
                 'HNG internship is a 3 months remote internship designed to find and develop the most ' +
                 'talented software developers.';
         } else if (res.value == "newbie") {
             message =
                 'Yes, this programme is for you. There is a pre-internship to prepare the newbies.<br>' +
                 ' If you are dedicated, you will be able to do well.' +
                 ' To know more visit <a href="https://hng.tech/about">HNG</a>';
         } else if (res.value === "join") {
             message =
                 'Follow the link and join. its an easy process. ' +
                 '<a href="https://hng.tech/become-intern">Join</a>';
         } else if (res.value === "free") {
             message =
                 'Yes, The HNG internship is completely free.';
         } else if (res.value === "support") {
             message =
                 'In the past, we have paid interns a monthly stipends, but because of the large number of ' +
                 'interns we take in yearly, we do not pay the interns except in some circumstance.';
         } else if (res.value === "need") {
             message =
                 'You will need the following to do this internship successfully:' +
                 '<br> A Laptop <br>' +
                 'Internet<br>Time<br>Electricity.';
         } else if (res.value === "programmes") {
             message =
                 'You will have the opportunity to learn ' +
                 '<br> Design <br> Frontend Development <br>' +
                 'Backend Development <br> Machine Learning' +
                 '<br>Digital Marketing <br>Android Development' +
                 '<br> Sale Engineering';
         } else if (res.value === "job") {
             message =
                 'Yes, if you complete the internship successfully, there will be job oppurtunities. ' +
                 'We will also prepare you for interviews and help you with how to build a work profile. ' +
                 'Take a look at our past interns <br>' +
                 '<a href="https://hng.tech/interns">HNG INTERNS</a>';
         }
         return botui.message.add({
             type: 'html',
             delay: 1000,
             loading: true,
             content: message
         });
     })
     
     .then(function() { // The questions the bot can answer, set 5
      return botui.action.button({
          delay: 1000,
          loading: true,
          action: [{
              text: 'What is HNG?',
              value: 'hng'
          }, {
              text: 'I am a newbie and have no experience, is the programme for me?',
              value: 'newbie'
          }, {
              text: 'How do I join HNG?',
              value: 'join'
          }, {
              text: 'Is the Internship free?',
              value: 'free'
          }, {
              text: 'Will the internship pay the interns or support me?',
              value: 'support'
          }, {
              text: 'What do I need to get started?',
              value: 'need'
          }, {
              text: 'What programmes will I learn or do in the internship?',
              value: 'programmes'
          }, {
              text: 'Will I get a job from the internship?',
              value: 'job'
          }]
      });
  }).then(function(res) {
      var message;

      if (res.value === "hng") {
          message =
              'HNG internship is a 3 months remote internship designed to find and develop the most ' +
              'talented software developers.';
      } else if (res.value == "newbie") {
          message =
              'Yes, this programme is for you. There is a pre-internship to prepare the newbies.<br>' +
              ' If you are dedicated, you will be able to do well.' +
              ' To know more visit <a href="https://hng.tech/about">HNG</a>';
      } else if (res.value === "join") {
          message =
              'Follow the link and join. its an easy process. ' +
              '<a href="https://hng.tech/become-intern">Join</a>';
      } else if (res.value === "free") {
          message =
              'Yes, The HNG internship is completely free.';
      } else if (res.value === "support") {
          message =
              'In the past, we have paid interns a monthly stipends, but because of the large number of ' +
              'interns we take in yearly, we do not pay the interns except in some circumstance.';
      } else if (res.value === "need") {
          message =
              'You will need the following to do this internship successfully:' +
              '<br> A Laptop <br>' +
              'Internet<br>Time<br>Electricity.';
      } else if (res.value === "programmes") {
          message =
              'You will have the opportunity to learn ' +
              '<br> Design <br> Frontend Development <br>' +
              'Backend Development <br> Machine Learning' +
              '<br>Digital Marketing <br>Android Development' +
              '<br> Sale Engineering';
      } else if (res.value === "job") {
          message =
              'Yes, if you complete the internship successfully, there will be job oppurtunities. ' +
              'We will also prepare you for interviews and help you with how to build a work profile. ' +
              'Take a look at our past interns <br>' +
              '<a href="https://hng.tech/interns">HNG INTERNS</a>';
      }
      return botui.message.add({
          type: 'html',
          delay: 1000,
          loading: true,
          content: message
      });
  })
            
  .then(function() { // The questions the bot can answer, set 6
   return botui.action.button({
       delay: 1000,
       loading: true,
       action: [{
           text: 'What is HNG?',
           value: 'hng'
       }, {
           text: 'I am a newbie and have no experience, is the programme for me?',
           value: 'newbie'
       }, {
           text: 'How do I join HNG?',
           value: 'join'
       }, {
           text: 'Is the Internship free?',
           value: 'free'
       }, {
           text: 'Will the internship pay the interns or support me?',
           value: 'support'
       }, {
           text: 'What do I need to get started?',
           value: 'need'
       }, {
           text: 'What programmes will I learn or do in the internship?',
           value: 'programmes'
       }, {
           text: 'Will I get a job from the internship?',
           value: 'job'
       }]
   });
}).then(function(res) {
   var message;

   if (res.value === "hng") {
       message =
           'HNG internship is a 3 months remote internship designed to find and develop the most ' +
           'talented software developers.';
   } else if (res.value == "newbie") {
       message =
           'Yes, this programme is for you. There is a pre-internship to prepare the newbies.<br>' +
           ' If you are dedicated, you will be able to do well.' +
           ' To know more visit <a href="https://hng.tech/about">HNG</a>';
   } else if (res.value === "join") {
       message =
           'Follow the link and join. its an easy process. ' +
           '<a href="https://hng.tech/become-intern">Join</a>';
   } else if (res.value === "free") {
       message =
           'Yes, The HNG internship is completely free.';
   } else if (res.value === "support") {
       message =
           'In the past, we have paid interns a monthly stipends, but because of the large number of ' +
           'interns we take in yearly, we do not pay the interns except in some circumstance.';
   } else if (res.value === "need") {
       message =
           'You will need the following to do this internship successfully:' +
           '<br> A Laptop <br>' +
           'Internet<br>Time<br>Electricity.';
   } else if (res.value === "programmes") {
       message =
           'You will have the opportunity to learn ' +
           '<br> Design <br> Frontend Development <br>' +
           'Backend Development <br> Machine Learning' +
           '<br>Digital Marketing <br>Android Development' +
           '<br> Sale Engineering';
   } else if (res.value === "job") {
       message =
           'Yes, if you complete the internship successfully, there will be job oppurtunities. ' +
           'We will also prepare you for interviews and help you with how to build a work profile. ' +
           'Take a look at our past interns <br>' +
           '<a href="https://hng.tech/interns">HNG INTERNS</a>';
   }
   return botui.message.add({
       type: 'html',
       delay: 1000,
       loading: true,
       content: message
   });
})   
.then(function() {
   botui.message.add({ // show a message
       delay: 1000,
       loading: true,
       content: 'Do you have more questions?'
   })

})


            .then(function() { //confirm if user has more questions
               return botui.action.button({
                   delay: 1000,
                   loading: true,
                   action: [{
                       text: "No! I don't have any more questions?",
                       value: 'noquestion'
                   }, {
                       text: 'Yes! I have more questions?',
                       value: 'question'
                   }]
               });
           })
           
           
           
           
           
           .then(function(res) { // responses to question confirmation
               var message;

               if (res.value === "noquestion") {
                   message =
                       'I wish you all the best as you start the life changing journey with HNG!';
               } else if (res.value === "question") {
                   message =
                       'For more questions, please visit the faq section of HNG Internship' +
                       '<a href="https://slack-redir.net/link?url=https%3A%2F%2Fsites.google.com%2Fhotels.ng%2Finternship%2Ffaq-frequently-asked-questions">here</a>';
               }
               return botui.message.add({
                   type: 'html',
                   delay: 1000,
                   loading: true,
                   content: message
               });
           }).then(function(res) { //farewell button
                return botui.action.button({
                    action: [{
                        delay: 3000,
                        loading: true,
                        text: 'This is has been very enlightening, thank you!',
                        value: 'cool'
                    }]
                });
            }).then(function(index) {
                return botui.message.add({
                    delay: 2000,
                    loading: true,
                    content: 'You are welcome'
                });
            }).then(function(index) {
                return botui.action.button({
                    action: [{
                        delay: 1000,
                        loading: true,
                        text: 'Goodbye',
                        value: 'bye'
                    }]
                });
            }).then(function(index) { //closing message
                return botui.message.add({
                    delay: 1000,
                    loading: true,
                    content: 'Bye, hope to see you again.'
                });
            });

        });