const requestURL = 'https://marieparker.github.io/final/data/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const guides = jsonObject['guides']; 

    for (let i = 0; i < guides.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('class', 'guide');

        let info = document.createElement('section');
        card.appendChild(info);
        
        let name = document.createElement('h2');
        name.textContent = guides[0].name;
        card.appendChild(name);

        let cert = document.createElement('p');
        cert.textContent = guides[0].certLevel + guides[0].experience;
        card.appendChild(cert);
        console.log(cert);

        /*let experience = document.createElement('p');
        experience.textContent = guides[0].experience;
        card.appendChild(experience);*/

        document.getElementById('guides').appendChild(card);

    }


});