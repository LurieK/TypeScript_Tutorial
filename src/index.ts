
import { showReviewTotal, populateUser } from './utils'



const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

const you: {
    userName : {firstName: string, lastName: string};
    isReturning: boolean;
    age: number;
    stayedAt: string[];
} = {
   userName: {firstName: 'Bobby', lastName: "Smith"},
   isReturning: true,
   age: 26,
   stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

const properties: {
    img: string;
    title: string;
    price: number;
    address1: string;
    town: string;
    postcode: number;
    country: string;
    contact: string;
    AvailableToRent: boolean;
    
}[]=[
    {
        img:'./src/img/london-property.jpg',
        title: 'Home Away',
        price: 300,
        address1: '456 HomeAway St.',
        town: 'London',
        postcode: 897890,
        country: 'United Kingdom',
        contact: 'home@away.com',
        AvailableToRent: true,
    },
    {
        img:'./src/img/colombia-property.jpg',
        title: 'Home Today',
        price: 300,
        address1: '890 Developer Rd.',
        town: "London",
        postcode: 34567,
        country: 'UK',
        contact: 'hometoday@home.com',
        AvailableToRent: true,
        },
    {
        img:'./src/img/poland-property.jpg',
        title: 'Paradise',
        price: 300,
        address1: '24 Paradise Way',
        town: 'Gdansk',
        postcode: 45628,
        country: 'Poland',
        contact: 'paradise@paradise.com',
        AvailableToRent: false,
    },
]


showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(!!you.isReturning, you.userName.firstName)

const propertyContainer = document.querySelector('.properties')!

for (let i=0; i< properties.length; i++){
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].img)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}


