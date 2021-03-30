/*
Homework 9.1 due via github Monday before 10PM.

xTask 1: Implement all possible Animal objects
Task 2: Capitalize object constructor names.
Task 3: fix close button so it is below the image, not next to it.
Task 4: Limit the numebr of times add can be clicked to be the number of possibel animals (5)
*/

'use strict';
//GLOBALS
const possibleAnimals = ['lion', 'bear', 'roadrunner', 'tiger','toto','turtle'];
const animalObjects = []

document.addEventListener("DOMContentLoaded", () => {
    //in the future this data comes from a website or database
    
    document.getElementById('add').addEventListener('click', () =>{
        const animG = new animalGroup();
        animG.display();
    });
    
    const lion_image = new animal_image('lion.jpg');//, size=100);    
    const lion = new animal(lion_image,
                            'lion',
                            'king of the jungle',
                            'https://en.wikipedia.org/wiki/Lion');
    animalObjects.push(lion);
    
    const bear_image = new animal_image('bear.jpg');//, size=100);    
    const bear = new animal(bear_image,
                            'bear',
                            'Big fluffly teddy bear',
                            'https://en.wikipedia.org/wiki/bear');
    animalObjects.push(bear);
    
    const roadrunner_image = new animal_image('roadrunner.jpg');//, size=100);  
    const roadrunner = new animal(roadrunner_image,
                            'roadrunner',
                            'Not as fast as speedy gonzales',
                            'https://en.wikipedia.org/wiki/roadrunner');
    animalObjects.push(roadrunner);
    
    const tiger_image = new animal_image('tiger.jpg');//, size=100);    
    const tiger = new animal(tiger_image,
                            'tiger',
                            'Biggest cat',
                            'https://en.wikipedia.org/wiki/tiger');
    animalObjects.push(tiger);
    
    const toto_image = new animal_image('toto.jpg');//, size=100);    
    const toto = new animal(toto_image,
                            'toto',
                            'what is a toto?',
                            'https://en.wikipedia.org/wiki/toto');
    animalObjects.push(toto);
    
    const turtle_image = new animal_image('turtle.jpg');//, size=100);    
    const turtle = new animal(turtle_image,
                            'turtle',
                            'A reptile ',
                            'https://en.wikipedia.org/wiki/turtle');
    animalObjects.push(turtle);
    
    
});

