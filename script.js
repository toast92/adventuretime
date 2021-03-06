function showQuestions(){
    document.getElementById('questions').classList.remove('hidden');
    document.getElementById('intro').classList.add('hidden');
}

//created a function that calculates the highest number of answers checked and returns the name of the character with the highest number of answers checked.//

function countAnswer(){
    
    let answers = {};
    let highestScore = 0;
    let yourCharacter = '';

    //create an object to store all the characters' pictures.
    let pictures = {
        Finn: document.getElementById("scoreFinn"),
        Jake: document.getElementById("scoreJake"),
        PB: document.getElementById("scorePB"),
        LG: document.getElementById("scoreLG"),
        noScoreYet: document.getElementById("notEnoughAnswers"),
        noScore: document.getElementById("noAnswers")
    };

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

    //The variable yourCharacter is used in displaying the result of the quiz.

            yourCharacter = key;
        };
    });
    
    //Hide the questions as they are no longer needed.
    const questionContainer = document.getElementById('questions');
    questionContainer.classList.add('hidden');

    document.body.scrollTop = document.documentElement.scrollTop = 0;
    //Show the result.
    if(highestScore > 0 && radios.length == 7){
        document.getElementById("result").innerHTML =`Congrats! Your character is <span class="highlight">${yourCharacter}</span> with a score of <span class="highlight">${highestScore}</span>`; 
        pictures[yourCharacter].classList.remove("hidden");
    }
    else if(highestScore > 0 && radios.length > 0 && radios.length < 7){
        document.getElementById("result").innerHTML = 'Secret! But once you fill in all of the answers it shall be revealed *low bow*';
        pictures.noScoreYet.classList.remove("hidden");
    }

    else{
        document.getElementById("result").innerHTML = 'We dont know who your character is as you did not fill in any of the answers :( please click on the button below to get back to the start.';
        pictures.noScore.classList.remove("hidden");
    }

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('retakeQuiz').classList.remove('hidden');
};




