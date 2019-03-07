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
        instaURL: "https://www.instagram.com/",
        reviews: [
            {
                user: {
                    id: 4,
                    AvatarUrl: "https://images.unsplash.com/photo-1543229912-d69e86dc1dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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
        id: 1,
        fName: 'Arthur',
        lName: 'Smith',
        avatarURL: "https://images.unsplash.com/photo-1543246239-7ae3ded686ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        rating: 1.5,
        bio: "Arthur is the guy or 360degrees and pet pictures.",
        tags: ["pet pix", "360deg"],
        etd: 10,
        rate10: 120,
        rate5: 45,
        instaURL: "https://www.instagram.com/",
        reviews: [
            {
                user: {
                    id: 3,
                    AvatarUrl: "https://images.unsplash.com/photo-1543229912-d69e86dc1dc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    fName: 'John',
                    lName: 'Doe',
                },
                created_at: '20/02/2019',
                rating: 4.5,
                review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda rem esse sint animi quasi exercitationem quam cum facere natus nihil dolorem,"
            }
        ]

    },
]
const getPgs = () => photographers;

export default getPgs;