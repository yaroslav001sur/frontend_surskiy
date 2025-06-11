// Модуль 2, задание 2
// const cards = {
//     "card-1": {
//         title: "Expand Your Horizons",
//         description: "Learn how to showcase your unique skills and stand out in the competitive job market.",
//         image: "img/info-image-1.png"
//     },
//     "card-2": {
//         title: "Creative Portfolios Made Easy",
//         description: "We provide tools to make your portfolio shine and attract the right recruiters effortlessly.",
//         image: "img/info-image-2.png"
//     },
//     "card-3": {
//         title: "Achieve Your Goals",
//         description: "Take the next step in your career journey with Jobly's seamless job-matching platform.",
//         image: "img/info-image-3.png"
//     }
// };

// function createCardTemplate({ title, description, image }) {
//     return `
//         <div class="card">
//             <h3 class="card-title">${title}</h3>
//             <p class="card-description">${description}</p>
//             <img src="${image}" alt="${title}" class="card-image">
//         </div>
//     `;
// }

// function displayCard(cardData) {
//     const cardDisplay = document.querySelector('.card-display');
//     if (!cardDisplay) return;
//     cardDisplay.innerHTML = createCardTemplate(cardData);
// }

// function handleFeatureClicks() {
//     const features = document.querySelectorAll('.feature');

//     if (features.length > 0) {
//         features[0].classList.add('active');
//         displayCard(cards['card-1']);
//     }

//     features.forEach((feature, index) => {
//         feature.addEventListener('click', () => {
//             features.forEach(f => f.classList.remove('active'));
//             feature.classList.add('active');
//             const cardKey = `card-${index + 1}`;
//             if (cards[cardKey]) {
//                 displayCard(cards[cardKey]);
//             }
//         });
//     });
// }

// document.addEventListener("DOMContentLoaded", () => {
//     handleFeatureClicks();
// });


//Модуль 2, задание 2.1
document.addEventListener("DOMContentLoaded", () => {
    new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });




    //Модуль 2, задание 2.2
    const modalOverlay = document.querySelector('.modal-overlay');
    const cancelButtons = document.querySelectorAll('.cancel-button, .modal-overlay');

    document.querySelectorAll('.sign-up, .log-in').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            modalOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });

    cancelButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalOverlay.classList.add('hidden');
            document.body.style.overflow = '';
        });
    });

    document.querySelector('.modal').addEventListener('click', (e) => {
        e.stopPropagation();
    });
});


//Модуль 2, задание 2.3
window.addEventListener("load", () => {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1000);
});







/*Модуль 2, задание 3*/
// let cards = [];

fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
    .then(response => response.json())
    .then(json => {
        cards = json.map((item) => ({
            title: item.title,
            description: item.body,
            image: `img/info-image.png`
        }));
        if (cards.length > 0) {
            displayCard(cards[0]);
            const features = document.querySelectorAll('.info__feature');
            if (features.length > 0) {
                features[0].classList.add('info__feature--active');
            }
        }
    });

function createCardTemplate({ title, description, image }) {
    return `
     <div class="card">
        <h3 class="card__title">${title}</h3>
        <p class="card__description">${description}</p>
        <img src="${image}" alt="${title}" class="card__image">
    </div>
  `;
}

function displayCard(cardData) {
     const cardDisplay = document.querySelector('.info__card-display');
    if (!cardDisplay) return;
    cardDisplay.innerHTML = createCardTemplate(cardData);
}
function handleFeatureClicks() {
    const features = document.querySelectorAll('.info__feature');

    features.forEach((feature, index) => {
        feature.addEventListener('click', () => {
             features.forEach(f => f.classList.remove('info__feature--active'));
            feature.classList.add('info__feature--active');
            if (cards[index]) {
                displayCard(cards[index]);
            }
        });
    });
    };