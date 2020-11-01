// setup quote fragment arrays
const quotes = [
    ["Win in silence", "Just smile", "Take a deep breath", "Be the best",
        "Be happy", "Just fly", "I'm not a second option", "Do not wait to be rich"
    ],
    [" and", " or", " along with", " also", " as well as", " furthermore", " including",
        " moreover"
    ],
    [" let them think.", " remember who.", " not be jealous.", " be happy.", " do it twice.", " for what you want.", " watch them succeed.", " happiness is free."]
];

// setup DOM references
const simpleQuoteText = document.querySelector('.simple-generator__quote');

// setup simple quote generator initializer
function simpleInit() {
    quoteGenerator();
}

//setup random index generator
function randomIndexGenerator() {
    let randomIndex;
    for (let i = 0; i < quotes.length; i += 1) {
        randomIndex = Math.floor(Math.random() * quotes[i].length);
    }
    return randomIndex;
}

//quote text generator
function quoteGenerator() {
    randomIndexGenerator();
    simpleQuoteText.innerHTML =
        "\"" +
        quotes[0][randomIndexGenerator()] +
        quotes[1][randomIndexGenerator()] +
        quotes[2][randomIndexGenerator()] +
        "\"";
}