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

        let photo = document.createElement('img');
        photo.setAttribute('src', 'images/' + guides[i].picture);
        photo.setAttribute('alt', 'Picture of ' + guides[i].name);
        card.appendChild(photo);

        let info = document.createElement('section');
        card.appendChild(info);
        
        let name = document.createElement('h2');
        name.textContent = guides[i].name;
        info.appendChild(name);

        let cert = document.createElement('p');
        cert.textContent = guides[i].certLevel;
        info.appendChild(cert);

        let experience = document.createElement('p');
        experience.textContent = guides[i].experience;
        info.appendChild(experience);

        let address = document.createElement('p');
        address.textContent = guides[i].email;
        info.appendChild(address);

        let bio = document.createElement('p');
        bio.textContent = guides[i].bio;
        info.appendChild(bio);

        document.getElementById('guides').appendChild(card);


        row = row + 1;

    }


});