
//event shortcuts
const mouseIn = event => {
    event.target.style.transform = 'scale(1.2)';
    event.target.style.transition = 'all .3s';
};
const mouseOut = event => event.target.style.transform = 'scale(1)';
const glowUp = event => {
    event.target.style.animation = 'glow .7s ease-in-out infinite alternate';
    //event.target.preventDefault();
}
const glowUp2 = event => {
    event.target.style.animation = 'glow2 .7s ease-in-out infinite alternate';
    event.target.style.color = 'papayawhip';
    };

// Your code goes here

const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = '#B9DBE5';
    event.target.style.border = '.1rem inset #F7B84C';
    event.target.style.borderRadius = '100%';
    event.target.style.padding = '2rem';  
})

logo.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = 'papayawhip';
    event.target.style.border = '.1rem solid #F7B84C';
    event.target.style.borderRadius = '4%';
    event.target.style.padding = '.8rem';    
});

const navLink = document.querySelectorAll('.nav .nav-link');

navLink.forEach(link => {
    link.addEventListener('mouseover', glowUp);
})


const intro = document.querySelector('.intro h2');

intro.addEventListener('click', (event) => {
    event.target.style.color = '#F7B84C';
    event.target.style.animation = 'glow 1s ease-in-out infinite alternate';
})

const contentImg = document.querySelectorAll('.img-content');

contentImg.forEach(img => {
    img.addEventListener('mouseenter', mouseIn)
    img.addEventListener('mouseleave', mouseOut)
})

const subHeader = document.querySelectorAll('.text-content h2');

subHeader.forEach(sub => {
    sub.addEventListener('mouseenter', glowUp2);
})

const conatiner = document.querySelectorAll('.home');

conatiner.forEach(el => {
    el.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundImage = 'linear-gradient(90deg, #B9DBE5, #F7B84C, #B9DBE5)';
        //event.target.style.color = 'papayawhip';
        event.target.style.transition = "all .2s";
        
    })
})

const destinationKey = document.querySelectorAll('.destination h4');

destinationKey.forEach(key => {
    key.addEventListener('mouseenter', glowUp2);
    key.addEventListener('mouseleave', () => {
    key.style.color = 'black';
    })
})

const picker = document.querySelectorAll('.content-destination');

picker.forEach(tag => {
    tag.addEventListener('mouseenter', mouseIn);
    tag.addEventListener('mouseleave', mouseOut);
})