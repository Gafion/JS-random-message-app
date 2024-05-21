// Define an array of message parts
const messagePartsOne = [
    "Hello",
    "Bonjour",
    "Hej",
    "Hola",
    "Ciao",
    "Hallo",
    "Olá",
    "Namaste",
    "Konnichiwa",
    "Guten Tag",
    "Shalom",
    "Merhaba",
    "Salaam",
    "Jambo",
    "Zdravstvuyte",
    "Aloha"
];

const messagePartsTwo = [
    "Mate",
    "Dude",
    "Buddy",
    "Pal",
    "Friend",
    "Amigo",
    "Comrade",
    "Chum",
    "Fella",
    "Homie",
    "Mister",
    "Sis",
    "Bro",
    "Lady",
    "Gentleman",
    "Colleague"
];

const messagePartsThree = [
    "How's your day?",
    "How are you?",
    "What's up?",
    "How are you doing?",
    "How's it going?",
    "How's everything?",
    "How's life?",
    "How's your day going?",
    "How's your day been?",
    "How's your day so far?",
    "What are you up to?",
    "What's new?",
    "What's happening?",
    "What's going on?",
    "What's good?"
];

// Generate a random index to select a message part
const randomIndexOne = Math.floor(Math.random() * messagePartsOne.length);
const randomIndexTwo = Math.floor(Math.random() * messagePartsTwo.length);
const randomIndexThree = Math.floor(Math.random() * messagePartsThree.length);

// Get the random message part
const randomMessagePartOne = messagePartsOne[randomIndexOne];
const randomMessagePartTwo = messagePartsTwo[randomIndexTwo];
const randomMessagePartThree = messagePartsThree[randomIndexThree];

// Print the random message
console.log(randomMessagePartOne + " " + randomMessagePartTwo + ", " + randomMessagePartThree);