let answers = {};

//created a function that calculates the highest number of answers checked and returns the name of the character with the highest number of answers checked.//

function countAnswer(){
    
    let highestScore = 0;
    let yourCharacter = 'We dont know :(';

    //create an object to store all the characters and their scores.
    answers = {
        Finn: 0,
        Jake: 0,
        PB: 0,
        LG: 0
    };
    
    //variable to hold all the checked radio buttons so we can loop over them.
    let radios = document.querySelectorAll('input[type=radio]:checked');
    
    //All the selected answers are being stored and the forEach function returns all these elements (with the input type radio who are also checked) and then it executes the function with a parameter of radioButton for each of them => 

    radios.forEach(function(radioButton){

    // what the function does is add +1 to the value of a key of the object answers depending on the className of the checked button.

    answers[radioButton.className]++;
    });
    
    //Now we have the object {answers} with its final values. We loop over the keys, then we execute the function for each of them. //  

    Object.keys(answers).forEach(function(key){
    
    // We will now compare the keys of the {answers} object to highestScore. If the value of the key is higher, then highestScore will retain its value and then be compared to the rest of the keys => finally storing the highest value.//

        if(answers[key] > highestScore){
            highestScore = answers[key];

    //The variable yourCharacter is used in displaying the result of the quiz.//

            yourCharacter = key;
        };
    });

    //with this line we make sure the result of this function is displayed where we want.
    
    document.getElementById("result").innerHTML =`Congrats! Your character is ${yourCharacter} with a score of ${highestScore}`;
    
};


