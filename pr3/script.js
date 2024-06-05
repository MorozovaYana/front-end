document.addEventListener("DOMContentLoaded", function() {
    var sayHiValue = document.querySelector('[data-say-hi]').getAttribute('data-say-hi');
    console.log(sayHiValue);
    var yanchiElement = document.querySelector('ul li:nth-of-type(2)');
console.log(yanchiElement);
var likeElements = document.querySelectorAll('.like');
console.log(likeElements);
const lists = document.querySelectorAll('ul'); // Select all <ul> elements
lists.forEach(function(list) { // Loop through each <ul> element
    list.insertAdjacentHTML('beforeend', '<li>Text</li>'); // Insert HTML content into each <ul> element
});
});
