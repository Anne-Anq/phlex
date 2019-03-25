const photographers = [
    {
        id: 0,
        fName: 'Kate',
        lName: 'Bu',
        avatarURL: "/pictures/kate.jpg",
        rating: 3.5,
        bio: "Kate has a passion for taking food pictures, she has been taking pictures all around the world for 5years.",
        tags: ["food pix", "vibrant colors"],
        etd: 7,
        rate10: 140,
        rate5: 30,
        notAvailable: [
            {
                id: 0,
                from: "2019-03-24",
                to: "2019-03-26",
            },
            {
                id: 1,
                from: "2019-03-28",
                to: "2019-03-30",
            },
        ],
        instaURL: "https://www.instagram.com/",
        portfolio: [
            { id: 10, picURL: "/pictures/food1.jpg", alt: "food1" },
            { id: 11, picURL: "/pictures/food2.jpg", alt: "food2" },
            { id: 12, picURL: "/pictures/food3.jpg", alt: "food3" },
            { id: 13, picURL: "/pictures/food4.jpg", alt: "food4" },
            { id: 14, picURL: "/pictures/food5.jpg", alt: "food5" },
            { id: 15, picURL: "/pictures/food6.jpg", alt: "food6" },
        ],
        reviews: [
            {
                id: 0,
                user: {
                    id: 1,
                    avatarURL: "/pictures/john.jpg",
                    fName: 'John',
                    lName: 'Doe',
                },
                created_at: '20/02/2019',
                rating: 4.5,
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem esse sint animi quasi exercitationem quam cum facere natus nihil dolorem,"
            }
        ]

    },
    {
        id: 2,
        fName: 'Arthur',
        lName: 'Smith',
        avatarURL: "/pictures/arthur.jpg",
        rating: 1.5,
        bio: "Arthur is the guy for 360degrees and pet pictures.",
        tags: ["pet pix", "360deg"],
        etd: 10,
        rate10: 120,
        rate5: 45,
        notAvailable: [
            {
                id: 2,
                from: "2019-03-25",
                to: "2019-03-25",
            },
            {
                id: 3,
                from: "2019-03-31",
                to: "2019-04-04",
            },
            {
                id: 4,
                from: "2019-03-25",
                to: "2019-04-09",
            },
            {
                id: 5,
                from: "2019-04-15",
                to: "2019-04-15",
            },
        ],
        instaURL: "https://www.instagram.com/",
        portfolio: [
            { id: 20, picURL: "/pictures/pet1.jpg", alt: "pet1" },
            { id: 21, picURL: "/pictures/pet2.jpg", alt: "pet2" },
            { id: 22, picURL: "/pictures/pet3.jpg", alt: "pet3" },
            { id: 23, picURL: "/pictures/pet4.jpg", alt: "pet4" },
            { id: 24, picURL: "/pictures/pet5.jpg", alt: "pet5" },
            { id: 25, picURL: "/pictures/pet6.jpg", alt: "pet6" },
        ],
        reviews: [
            {
                id: 1,
                user: {
                    id: 3,
                    avatarURL: "/pictures/maria.jpg",
                    fName: 'Maria',
                    lName: 'DaSilva',
                },
                created_at: '07/03/2019',
                rating: 4,
                review: "Arthur was so nice to the puppies when he came to take pictures for the instagram of my doggie day care. "
            },
            {
                id: 2,
                user: {
                    id: 4,
                    avatarURL: "/pictures/grace.jpg",
                    fName: 'Grace',
                    lName: 'Goodrich',
                },
                created_at: '09/03/2019',
                rating: 1,
                review: "Good pictures but sketchy man. "
            },
            {
                id: 3,
                user: {
                    id: 5,
                    avatarURL: "/pictures/jason.jpg",
                    fName: 'Jason',
                    lName: 'Blake',
                },
                created_at: '10/03/2019',
                rating: 4,
                review: "I definitely recommend Arthur for  your 360deg picture, it add tons of value to my facebook and insta feed! "
            }
        ]

    },
    {
        id: 6,
        fName: 'Romeo',
        lName: 'Escondido',
        avatarURL: "/pictures/romeo.jpg",
        rating: 4.5,
        bio: "Romeo is your guy for crisp Black and White.",
        tags: ["Black & White"],
        etd: 11,
        rate10: 130,
        rate5: 25,
        notAvailable: [
            {
                id: 6,
                from: "2019-03-10",
                to: "2019-03-21",
            },
        ],
        instaURL: "https://www.instagram.com/",
        portfolio: [
            { id: 30, picURL: "/pictures/BW1.jpg", alt: "BW1" },
            { id: 31, picURL: "/pictures/BW2.jpg", alt: "BW2" },
            { id: 32, picURL: "/pictures/BW3.jpg", alt: "BW3" },
            { id: 33, picURL: "/pictures/BW4.jpg", alt: "BW4" },
            { id: 34, picURL: "/pictures/BW5.jpg", alt: "BW5" },
            { id: 35, picURL: "/pictures/BW6.jpg", alt: "BW6" },
        ],
        reviews: [
            {
                id: 4,
                user: {
                    id: 3,
                    avatarURL: "/pictures/maria.jpg",
                    fName: 'Maria',
                    lName: 'DaSilva',
                },
                created_at: '07/03/2019',
                rating: 5,
                review: "I am loving this guy, that's what one calls art. "
            },
            {
                id: 5,
                user: {
                    id: 4,
                    avatarURL: "/pictures/grace.jpg",
                    fName: 'Grace',
                    lName: 'Goodrich',
                },
                created_at: '09/03/2019',
                rating: 5,
                review: "Yess, bring it. "
            },
            {
                id: 6,
                user: {
                    id: 5,
                    avatarURL: "/pictures/jason.jpg",
                    fName: 'Jason',
                    lName: 'Blake',
                },
                created_at: '10/03/2019',
                rating: 3.5,
                review: "Not too bad! "
            }
        ]

    }
]
const getPgs = () => photographers;

export default getPgs;