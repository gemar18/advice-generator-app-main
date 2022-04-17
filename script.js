dice.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        const adviceIdd = adviceData.slip.id;
        const advice = adviceData.slip.advice;
        numberadvice.textContent = adviceIdd;
        text.innerHTML = `<p>${advice}</p>`;
    }).catch(error => {
        console.log(error);
    })
  
});