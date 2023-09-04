const returningUserDisplay = document.querySelector('#returning-user')!
const userNameDisplay = document.querySelector('#user')!
const reviewTotalDisplay = document.querySelector('#reviews')!

let isOpen: boolean

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


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)


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
    img:'',
    title: 'Home Away',
    price: 300,
    address1: '456 HomeAway St.',
    town: "Boston",
    postcode: 897890,
    country: 'usa',
    contact: '6174595959',
    AvailableToRent: true,
    },
    {
    img:'',
    title: 'Home Away',
    price: 300,
    address1: '456 HomeAway St.',
    town: "Boston",
    postcode: 897890,
    country: 'usa',
    contact: '6174595959',
    AvailableToRent: true,
    }
]


console.log(you.userName)

function populateUser(isReturning : boolean, name: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = name
}

populateUser(!!you.isReturning, you.userName.firstName)

