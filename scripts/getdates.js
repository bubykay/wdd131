const date = new Date();
const currentYear = date.getFullYear();
const yearElement = document.querySelector('#currentyear');
const lastModifiedElement = document.getElementById('lastModified');
yearElement.innerText = currentYear;
lastModifiedElement.innerHTML = 'Last modified on ' + document.lastModified;
