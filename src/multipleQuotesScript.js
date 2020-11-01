// setup quote fragment arrays
const travelQuotes = [
    ['Travel ', 'Wander ', 'Adventure ', 'Explore ', 'Vacation '], 
    ['is something you do ', 'someplace ', 'leaves you speechless ', 'bring power and love ', 'needs no plan '],
    ['like breathing.', 'you have never been before.', 'turns you into a storyteller.', 'back to your life.', 'and no intent of arriving.']];

const learnQuotes = [
    ['People ', 'Society ', 'The team ', 'Community ', 'The group '], 
    ['can not be made to feel inferior ', 'needs to know itself ', 'failing ', 'measures intelligence ', 'should think before speaking '], 
    ['without their consent.', 'to begin its wisdom.', 'is the condiment that gives success its flavour.', 'by the ability to change.', 'and read before thinking.'], 
    ];

// setup DOM references
const switchButton = document.querySelector(".switch-button");
let quoteType = [];
let randomIndex;
const quotesContainer = document.querySelector('.custom-generator__quotes');


// initialize quote generator
function multipleInit(quoteCount) {
  removeQuotes()
  quoteRepeater(quoteCount);
}

// switch button function
function quoteTypeSwitch() {
    if (switchButton.checked == true) {
        quoteType = travelQuotes
    } else { 
      quoteType = learnQuotes
    } return quoteType; }

// remove quotes button
function removeQuotes() {
    quotesContainer.innerHTML = '';
}

// setup random number generator
function randomIndexGenerator () {
  quoteTypeSwitch()
  for (let i=0; i<quoteType.length; i+=1) 
  {randomIndex = Math.floor(Math.random() * quoteType[i].length);}
  return randomIndex;}

// setup quote paragraph generator
function createQuoteParagraph() {
  const quoteText = document.createElement("p");
  quotesContainer.appendChild(quoteText);
  quoteText.innerHTML = 
            "\""
             +quoteType[0][randomIndexGenerator()]
             +quoteType[1][randomIndexGenerator()]
             +quoteType[2][randomIndexGenerator()]
             +"\"";
  return quotesContainer;
}

// quote generator repeater
function quoteRepeater (times) {
  randomIndexGenerator();
  for (let i=1; i <= times; i+=1) {
    createQuoteParagraph();
  }
}
