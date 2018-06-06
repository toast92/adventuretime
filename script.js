// create function that counts how many answers are for a character and returns the highest result (max)
let answers = {};

function countAnswer(){
    
    let highestScore = 0;
    let yourCharacter = 'We dont know :(';

    answers = {
        Finn: 0,
        Jake: 0,
        PB: 0,
        LG: 0
    };

    let radios = document.querySelectorAll('input[type=radio]:checked');

    radios.forEach(function(radioButton){
        answers[radioButton.className]++;
    });

    Object.keys(answers).forEach(function(key){
        if(answers[key] > highestScore){
            highestScore = answers[key];
            yourCharacter = key;
        };
    });

    document.getElementById("result").innerHTML =`Your character is ${yourCharacter} with a score of ${highestScore}`;

    let arr=Object.values(answers);
    let max=Math.max()
    
};

//do a max operation to establish the class with the highest score

/*let container = document.querySelector(".questions");
       let answers = container.querySelectorAll(".Finn");
       return answers;*/