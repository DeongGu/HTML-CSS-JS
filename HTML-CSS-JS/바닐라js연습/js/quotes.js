const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "And no one will listen to us until we listen to ourselves.",
        author: "Mariannee Williamson.",
    },
    {
        quote: "Those who trust us teach us.",
        author: "George Eliot",
    },
    {
        quote: "Don't be too timid and squeamish about your actions. All life is an experiment. The more experiments you make the better.",  
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "The first step to accepting yourself is to stop comparing yourself to others.",
        author: "Joe Duncan",
    },
    {
        quote: "Make the most of yourself, for that is all there is of you.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Awareness is the greatest agent for change.",
        author: "Eckhart Tolle",
    },
    {
        quote: "Always remember you are braver than you believe, stronger than you seem, and smarter than you think.",
        author: "A.A. Milne",
    },
    {
        quote: "To escape critism : do nothing, say nothing, be nothing.",
        author: "Elbert Hubbard",
    },
    {
        quote: "Whether you think you can or you think you can't, you are right!",
        author: "Henry Ford",
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;