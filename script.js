let generateBtn = document.querySelector('.generate');
let autoBtn = document.querySelector('.auto');
let stopBtn = document.querySelector('.stop');
let quoteDiv = document.querySelector('.quote-display');
let quoteId = document.querySelector('.quote-id');
let autoStatus = document.querySelector('.auto-status');
let intervalId;

document.addEventListener('DOMContentLoaded', generateQuote);
generateBtn.addEventListener('click', generateQuote);
autoBtn.addEventListener('click', startAutoPlay);
stopBtn.addEventListener('click', stopAutoPlay);


async function getQuote() {
    const response = await fetch('quotes.json');
    const data = await response.json();
    return data;
}


async function generateQuote() {
    const quotes = await getQuote();
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDiv.innerHTML = quote.text;
    quoteId.innerHTML = quote.id;
}
function startAutoPlay() {
    intervalId = setInterval(generateQuote, 3000);
    autoStatus.innerHTML = 'Auto Play is ON';
    
}
function stopAutoPlay() {
    clearInterval(intervalId);
    autoStatus.innerHTML = '';
}