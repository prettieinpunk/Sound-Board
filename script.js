//create an array of the sounds
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

//for each sound make a button, add a class 'btn', update the text, append to DOM
sounds.forEach((sound) => {
//create a button
    const btn = document.createElement('button');
//add a class of button to the button element
    btn.classList.add('btn');
//set the button label text to b the same as string value in the sounds array
    btn.innerText = sound;
//add the button to the DOM
    document.getElementById('buttons').appendChild(btn);
});