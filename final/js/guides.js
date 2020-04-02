const requestURL = 'https://marieparker.github.io/final/data/guides.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const guides = jsonObject['guides']; 

    let row = 1;

    for (let i = 0; i < guides.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('class', 'guide');
        card.setAttribute('id', 'row' + row)

        let info = document.createElement('section');
        card.appendChild(info);
        
        let name = document.createElement('h2');
        name.textContent = guides[i].name;
        card.appendChild(name);

        let cert = document.createElement('p');
        cert.textContent = guides[i].certLevel;
        card.appendChild(cert);

        let experience = document.createElement('p');
        experience.textContent = guides[i].experience;
        card.appendChild(experience);

        let address = document.createElement('p');
        address = guides[i].address;
        card.appendChild(address);

        let bio = document.createElement('p');
        bio = guides[i].bio;
        card.appendChild(bio);

        let photo = document.createElement('img');
        photo.setAttribute('src', 'images/' + guides[i].picture);
        photo.setAttribute('alt', 'Picture of ' + guides[i].name);

        document.getElementById('guides').appendChild(photo);
        document.getElementById('guides').appendChild(card);


        row = row + 1;

    }


});