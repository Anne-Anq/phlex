const photographers = [
    {
        id: 0,
        fName: 'Kate',
        lName: 'Bu',
        avatarURL: "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
        reviews: [
            {
                id: 0,
                user: {
                    id: 1,
                    avatarURL: "https://images.unsplash.com/photo-1543229912-d69e86dc1dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
        avatarURL: "https://images.unsplash.com/photo-1543246239-7ae3ded686ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
        reviews: [
            {
                id: 1,
                user: {
                    id: 3,
                    avatarURL: "https://images.unsplash.com/photo-1547200413-5f93d7e3673e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
                    avatarURL: "https://images.unsplash.com/photo-1551997476-7788a5dd3fca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
                    avatarURL: "https://images.unsplash.com/photo-1552056613-1f3710d175ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
        avatarURL: "https://images.unsplash.com/photo-1551847812-f815b31ae67c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
        reviews: [
            {
                id: 4,
                user: {
                    id: 3,
                    avatarURL: "https://images.unsplash.com/photo-1547200413-5f93d7e3673e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
                    avatarURL: "https://images.unsplash.com/photo-1551997476-7788a5dd3fca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
                    avatarURL: "https://images.unsplash.com/photo-1552056613-1f3710d175ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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