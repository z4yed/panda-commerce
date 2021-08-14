const firstHeadings = document.getElementsByTagName('h1')

for (const heading of firstHeadings){
    heading.style.color = 'steelblue';
}

const cards = document.getElementsByClassName('card');

for (const card of cards){
    card.style.borderRadius = '25px';
}

const buyButtons = document.getElementsByClassName('buy-now-button');

for (const button of buyButtons){
    button.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    });
}

const emailField = document.getElementById('email-field');
emailField.addEventListener('keyup', function(event){
    
    const submitButton = document.getElementById('form-submit-btn');
    
    if (event.target.value == 'email'){
        submitButton.classList.add('submit-button');
        submitButton.removeAttribute('disabled');
    }
    else {
        submitButton.classList.remove('submit-button');
        submitButton.setAttribute('disabled', true);
    }
});


const cardImages = document.getElementsByClassName('card-images');

for (const image of cardImages){
    image.addEventListener('mouseover', function(event){
        event.target.src = 'images/categories/watch.png';
    });
}

document.getElementById('subscribe').addEventListener('dblclick', function(event){
    const bgColors = ['steelblue', 'green', 'coral', 'salmon', 'Chocolate', 'DarkOliveGreen', 'DarkSlateGrey', 'red'];
    const randomIndex = Math.floor(Math.random()* bgColors.length);
    event.target.style.backgroundColor = bgColors[randomIndex];
});