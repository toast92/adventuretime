# Adventure time
In order to improve my Javascript skills I am creating a quiz. This ReadMe describes the process.

## Storyboard
![Adventure Time storyboard](/advtimestoryboard.jpg)

## Conceptual description
This is a quiz to find out what character from the series "Adventure Time" you are most similar to. The quiz is comprised of 7 questions with each 4 answers. Each answer is linked to a character so based on your answers we can tell you which character you match best with.

## Technical process
First I created a few dummy questions with just HTML. The questions were made with checkboxes, but after figuring out that I only want the user to be able to select 1 answer I switched to radio buttons.

Then my quest became to find out how to get the selected answers. A few hours of googling and trying to make things work with javascript I found a much simpler and elegant solution: the querySelectorAll function accepts any valid CSS selector, and there is a CSS selector to get only checked input elements! Problem solved.

Now I finally had an array of elements (the selected radio buttons) but I needed to somehow store them. After fiddling around with god knows what, my boyfriend pushed me into the direction of using objects. I read the chapter on objects in Eloquent Javascript and with a little bit more help I got the solution I have now: an object containing all characters as keys and their score as the values.

These values are updated by looping over the array of selected radio buttons, resulting in an object like this:

```
    answers{
        Finn: 3,
        Jake: 1,
        PB: 0,
        LG: 2,
    }
```
 
 The last challenge now was to find the property (character) with the highest score (answers). Once again Google helped me with this and I found the solution of keeping a variable with the higest score and name, which allowed me to update it while looping over all answers.