const temples = [
    {
        templeName: 'Aba Nigeria',
        location: 'Aba, Nigeria',
        dedicated: '2005, August, 7',
        area: 11500,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
    },
    {
        templeName: 'Manti Utah',
        location: 'Manti, Utah, United States',
        dedicated: '1888, May, 21',
        area: 74792,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
    },
    {
        templeName: 'Payson Utah',
        location: 'Payson, Utah, United States',
        dedicated: '2015, June, 7',
        area: 96630,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg',
    },
    {
        templeName: 'Yigo Guam',
        location: 'Yigo, Guam',
        dedicated: '2020, May, 2',
        area: 6861,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
    },
    {
        templeName: 'Washington D.C.',
        location: 'Kensington, Maryland, United States',
        dedicated: '1974, November, 19',
        area: 156558,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
    },
    {
        templeName: 'Lima Perú',
        location: 'Lima, Perú',
        dedicated: '1986, January, 10',
        area: 9600,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
    },
    {
        templeName: 'Mexico City Mexico',
        location: 'Mexico City, Mexico',
        dedicated: '1983, December, 2',
        area: 116642,
        imageUrl:
            'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
    },
    // Add more temple objects here...
];
const albumSection = window.document.querySelector('.album');
const oldAlbumButton = window.document.querySelector('.old-album');
const largeTemplesButton = window.document.querySelector('.large-temples');
const recentTemplesButton = window.document.querySelector('.recent-temples');
const smallTemplesButton = window.document.querySelector('.small-temples');

function createTempleCard(temple) {
    const card = window.document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="card-content">
    <h3>${temple.templeName}</h3>
    <p>Location: <span>${temple.location}</span></p>
    <p>Dedicated: <span>${temple.dedicated}</span></p>
    <p>Size: <span>${temple.area.toLocaleString()} Sq ft</span></p>
    </div>
    <figure class="card-image"><img src="${temple.imageUrl}" alt="${
        temple.templeName
    }" loading="lazy" width="400" height="250">
    <figcaption>${temple.templeName}</figcaption>
    </figure>
    `;
    return card;
}
console.log(largeTemplesButton);
oldAlbumButton.addEventListener('click', (event) => {
    albumSection.innerHTML = '';
    filterTemplesByAge(1900).forEach((temple) => {
        albumSection.appendChild(createTempleCard(temple));
    });
});

largeTemplesButton.addEventListener('click', (event) => {
    albumSection.innerHTML = '';
    filterTemplesBySize(90000).forEach((temple) => {
        albumSection.appendChild(createTempleCard(temple));
    });
});

recentTemplesButton.addEventListener('click', (event) => {
    albumSection.innerHTML = '';
    filterTemplesByAge(2000).forEach((temple) => {
        albumSection.appendChild(createTempleCard(temple));
    });
});

smallTemplesButton.addEventListener('click', (event) => {
    albumSection.innerHTML = '';
    smallTemples(10000).forEach((temple) => {
        albumSection.appendChild(createTempleCard(temple));
    });
});

temples.forEach((temple) => {
    albumSection.appendChild(createTempleCard(temple));
});

function filterTemplesBySize(size) {
    return temples.filter((temple) => temple.area >= size);
}

function filterTemplesByAge(age) {
    return temples.filter((temple) => parseInt(temple.dedicated.split(',')[0]) >= age);
}

function smallTemples(size) {
    return temples.filter((temple) => temple.area < size);
}
