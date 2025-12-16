const randomthingsElement = document.getElementById('randomwords');

var randomSentences = [
    "thanks for coming by!",
    "hope you're doing well!",
    "hang in there",
    "safety meeting? safety meeting.",
    "i have no idea what i'm doing!",
    "there's no rest for the wicked",
    "please pay attention - you will be happy to know you are victims of a robbery...",
    "feel free to suggest more things to add via robozardalpha on twitch",
    "it's a webpage!",
    "don't look at the code, it's not messy i promise :>"
]

function updateRandomSentence() {
    const randomSentence = randomSentences[Math.floor(Math.random() * randomSentences.length)];
    randomthingsElement.textContent = randomSentence;
}

updateRandomSentence();

