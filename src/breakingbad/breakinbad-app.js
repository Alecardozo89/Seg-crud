/**
 * @returns {Promise<Object>} quote information
 */

const fetchPetit = async () =>{
    const responce = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await responce.json();
    console.log(data);
    return data;
}


/**
 * 
 * @param {HTMLDivElement} element 
 */

export const breakingBadApp = async(element) =>{
    document.querySelector('#app-title').innerHTML= 'BREAKING BAD APP';
    element.innerHTML = 'Loading...';

    //await fetchPetit()
    
    const quoteLabel = document.createElement('blockQuote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) =>{
        quoteLabel.innerHTML = data.quoteLabel;
        authoLabel.innerHTML = data.authoLabel;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
    }   

    nextQuoteButton.addEventListener('click', async() =>{
        element.innerHTML = 'Loading...';
        const quote = await fetchPetit()
        renderQuote(quote)
    })

    fetchPetit()
        .then(renderQuote)
}