const requestURL = 'https://marieparker.github.io/final/data/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const guides = jsonObject['guides']; 

    for (let i = 1; i < guides.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('class', 'guide');

        let info = document.createElement('section');
        card.appendChild(info);
        
        let name = document.createAttributr('h2');
        name.textContent = guides[0].name;

    }


});