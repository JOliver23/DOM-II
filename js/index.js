// Your code goes here
const logo = document.querySelector('.logo-heading');
console.log(logo)
logo.addEventListener('mouseenter', (event) => {
    event.target.style.backgroundColor = '#B9DBE5';
    event.target.style.border = '.1rem inset #F7B84C';
    event.target.style.borderRadius = '100%';
    event.target.style.padding = '2rem';
})
logo.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '#ffffff';
    event.target.style.border = '.1rem dashed double none #F7B84C';
    event.target.style.borderRadius = '4%';
    event.target.style.padding = '.8rem';    
})