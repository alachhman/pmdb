module.exports = {
    guides: [
        {
            title: "Reroll Guide",
            src: "reroll-guide",
            description: "New to the game? Read this guide to figure out what the best starting pairs are!",
        }
    ],
    reRollGuideData: {
        currentRelevantBanners: [
            {
                banner: 'Cynthia Spotlight Scout',
                score: 'Great',
                time: '1/1/2020 - 1/22/2020',
                notes: "Doesn't include Lance.",
                img: '/assets/bannerImages/cynthia.jpg'
            },
            {
                banner: 'Lance Spotlight Scout',
                score: 'Average',
                time: '12/26/2019 - 1/22/2020',
                notes: "Doesn't include Cynthia.",
                img: '/assets/bannerImages/lance.jpg'
            },
        ],
        primaryRolls: [
            {
                name: 'Olivia',
                role: 'strikerPHY',
                rate: '0.61%',
                score: 'Highest',
                image: '/assets/rolesIcons/olivia.png'
            },
            {
                name: 'Phoebe',
                role: 'support',
                rate: '0.61%',
                score: 'Highest',
                image: '/assets/rolesIcons/phoebe.png'
            },
            {
                name: 'Brendan',
                role: 'strikerPHY',
                rate: '0.61%',
                score: 'High',
                image: '/assets/rolesIcons/brenden.png'
            }
        ],
        secondaryRolls: [
            {
                name: 'Hilbert',
                role: 'support',
                rate: '0.61%',
                score: 'High',
                image: '/assets/rolesIcons/hilbert.png'
            },
            {
                name: 'Blue',
                role: 'strikerSPE',
                rate: '0.61%',
                score: 'High',
                image: '/assets/rolesIcons/blue.png'
            },
            {
                name: 'Karen',
                role: 'strikerSPE',
                rate: '0.61%',
                score: 'Medium',
                image: '/assets/rolesIcons/karen.png'
            },
            {
                name: 'Kris',
                role: 'strikerPHY',
                rate: '0.61%',
                score: 'Medium',
                image: '/assets/rolesIcons/kriskross.png'
            },
            {
                name: 'Will',
                role: 'tech',
                rate: '0.61%',
                score: 'Low',
                image: '/assets/rolesIcons/will.png'
            }
        ]
    }
};
