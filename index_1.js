
let age = prompt("Привіт, скільки тобі років?");
    
let message = 
                  (age < 12) ? 'Ти ще маленький =)' :
                  (age < 18) ? 'Ти вже підліток =)' :
                  (age < 59) ? 'Ти вже дорослий =)' :
                  (60 < age) ?'Або ти вже пенсіонер =)':
                 'Ось і пройшов підлітковий вік, і ти увійшов у зросле життя.' ;
alert(message);