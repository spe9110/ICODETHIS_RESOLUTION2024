const DATA = [
    //movies
    {
        id: 101,
        contentCategory: 'movies',
        title: 'Fight Club',
        imgURL: 'https://i.imgur.com/kkYTzKW.png', 
        usersProgress: 33,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['popular', 'highest rated'],
        description: 'An insomniac office worker forms an underground fight club with a soap salesman.',
        releaseYear: 1999,
        duration: 139 // Duration in minutes
    },
    {
        id: 102,
        contentCategory: 'movies',
        title: 'Girl, Interrupted',
        imgURL: 'https://i.imgur.com/yvpJYdW.png', 
        usersProgress: 90,
        timeFilters: ['now', 'today'],
        ratingFilters: ['highest rated'],
        description: 'A young woman is admitted to a mental health facility where she befriends other patients.',
        releaseYear: 1999,
        duration: 127 // Duration in minutes
    },
    {
        id: 103,
        contentCategory: 'movies',
        title: 'The Shawshank Redemption',
        imgURL: 'https://i.imgur.com/2AKtvi9.jpeg',
        usersProgress: 90,
        timeFilters: ['now', 'today'],
        ratingFilters: ['highest rated'],
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        releaseYear: 1994,
        duration: 142
    },
    {
        id: 104,
        contentCategory: 'movies',
        title: 'Pulp Fiction',
        imgURL: 'https://i.imgur.com/onToy8K.png',
        usersProgress: 60,
        timeFilters: ['now'],
        ratingFilters: ['popular'],
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        releaseYear: 1994,
        duration: 154
    },
    {
        id: 105,
        contentCategory: 'movies',
        title: 'The Godfather',
        imgURL: 'https://i.imgur.com/8wgQGQN.jpeg',
        usersProgress: 80,
        timeFilters: ['tonight'],
        ratingFilters: ['highest rated'],
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        releaseYear: 1972,
        duration: 175
    },
    {
        id: 106,
        contentCategory: 'movies',
        title: 'Snatch',
        imgURL: 'https://i.imgur.com/3i6BpvK.jpeg',
        usersProgress: 50,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['popular', 'highest rated'],
        description: 'A diamond heist gone wrong leads to consequences for a colorful cast of characters.',
        releaseYear: 2000,
        duration: 104
    },

    // Series
    {
        id: 201,
        contentCategory: 'series',
        title: 'Breaking Bad',
        imgURL: 'https://i.imgur.com/DfN5tt0.jpeg',
        usersProgress: 95,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['highest rated'],
        description: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student.",
        releaseYear: 2008,
        seasons: 5,
        duration: 60,
    },
    {
        id: 202,
        contentCategory: 'series',
        title: 'Game of Thrones',
        imgURL: 'https://i.imgur.com/qLE3Esz.jpeg',
        usersProgress: 88,
        timeFilters: ['now', 'today'],
        ratingFilters: ['popular'],
        description: "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns.",
        releaseYear: 2011,
        seasons: 8,
        duration: 60,
    },
    {
        id: 203,
        contentCategory: 'series',
        title: 'Stranger Things',
        imgURL: 'https://i.imgur.com/NHcL1RY.png',
        usersProgress: 70,
        timeFilters: ['coming up'],
        ratingFilters: ['popular', 'new'],
        description: "When a young boy disappears, his mother, a police chief, and his friends must confront terrifying forces in order to get him back.",
        releaseYear: 2016,
        seasons: 4,
        duration: 60,
    },
    {
        id: 204,
        contentCategory: 'series',
        title: 'The Crown',
        imgURL: 'https://i.imgur.com/4EGr4CM.jpeg',
        usersProgress: 65,
        timeFilters: ['now'],
        ratingFilters: ['highest rated'],
        description: "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
        releaseYear: 2016,
        seasons: 5,
        duration: 60,
    },
    {
        id: 205,
        contentCategory: 'series',
        title: 'The Gentlemen',
        imgURL: 'https://i.imgur.com/VOz8rfI.png',
        usersProgress: 20,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['popular', 'new'],
        description: "A spin-off of Guy Ritchie's film where Eddie Horniman inherits a weed empire and must navigate the criminal underworld.",
        releaseYear: 2024,
        seasons: 1,
        duration: 60,
    },
    {
        id: 206,
        contentCategory: 'series',
        title: "It's Always Sunny in Philadelphia",
        imgURL: 'https://i.imgur.com/Pgc8HW6.png',
        usersProgress: 85,
        timeFilters: ['now', 'today'],
        ratingFilters: ['popular', 'highest rated'],
        description: "Five egocentric friends who run a neighborhood Irish pub in Philadelphia try to find their way through the adult world of work and relationships.",
        releaseYear: 2005,
        seasons: 15,
        duration: 60,
    },

    // Music
    {
        id: 301,
        contentCategory: 'music',
        title: 'The Kills - Black Balloon',
        imgURL: 'https://i.imgur.com/hNj8UzO.png',
        usersProgress: 80,
        timeFilters: ['now'],
        ratingFilters: ['popular', 'highest rated'],
        description: "A haunting indie rock track featuring The Kills' signature blend of raw guitar and hypnotic vocals.",
        releaseYear: 2008,
        duration: 229,
    },
    {
        id: 302,
        contentCategory: 'music',
        title: 'The Dead Weather - Cut Like a Buffalo',
        imgURL: 'https://i.imgur.com/1HS69IY.png',
        usersProgress: 75,
        timeFilters: ['tonight'],
        ratingFilters: ['popular'],
        description: "A gritty, blues-rock song showcasing Jack White's drumming and Alison Mosshart's powerful vocals.",
        releaseYear: 2009,
        duration: 208,
    },
    {
        id: 303,
        contentCategory: 'music',
        title: 'A Tribe Called Quest - Check The Rhime',
        imgURL: 'https://i.imgur.com/VVCEjKY.png',
        usersProgress: 90,
        timeFilters: ['now', 'today'],
        ratingFilters: ['popular', 'highest rated'],
        description: "A classic hip-hop track known for its jazz-infused beat and the interplay between Q-Tip and Phife Dawg's lyrics.",
        releaseYear: 1991,
        duration: 217,
    },
    {
        id: 304,
        contentCategory: 'music',
        title: 'Sleigh Bells - End of the Line',
        imgURL: 'https://i.imgur.com/saJrKfX.png',
        usersProgress: 65,
        timeFilters: ['coming up'],
        ratingFilters: ['new'],
        description: "An energetic noise pop song combining heavy guitar riffs with melodic vocals, characteristic of Sleigh Bells' unique sound.",
        releaseYear: 2021,
        duration: 172,
    },
    {
        id: 305,
        contentCategory: 'music',
        title: 'Metric - All Comes Crashing',
        imgURL: 'https://i.imgur.com/L4LgB8K.png',
        usersProgress: 70,
        timeFilters: ['now'],
        ratingFilters: ['popular', 'new'],
        description: "An anthemic indie rock song featuring Emily Haines' distinctive vocals and the band's signature synth-rock sound.",
        releaseYear: 2022,
        duration: 213,
    },
    {
        id: 306,
        contentCategory: 'music',
        title: 'MF DOOM - Figaro',
        imgURL: 'https://i.imgur.com/ocYaH2t.png',
        usersProgress: 85,
        timeFilters: ['tonight', 'today'],
        ratingFilters: ['highest rated'],
        description: "A masterclass in wordplay and rhyme schemes, showcasing MF DOOM's unparalleled lyricism over a jazzy, sample-heavy beat.",
        releaseYear: 2004,
        duration: 145,
    },

    // Live
    {
        id: 401,
        contentCategory: 'live',
        title: 'NBA Finals Game 7',
        imgURL: 'https://i.imgur.com/lWmZ0BQ.png',
        usersProgress: 80,
        timeFilters: ['coming up'],
        ratingFilters: ['popular'],
        description: "The decisive game of the NBA championship series.",
        startTime: '9:00 PM EST',
        duration: 180 // Estimated duration in minutes
    },
    {
        id: 402,
        contentCategory: 'live',
        title: 'Coachella Music Festival',
        imgURL: 'https://i.imgur.com/eSqNcFF.png',
        usersProgress: 30,
        timeFilters: ['now'],
        ratingFilters: ['popular', 'new'],
        description: 'Live stream of the annual music and arts festival held in Indio, California.',
        startTime: 'Ongoing',
        duration: 720 // Estimated duration in minutes (12 hours)
    },
    {
        id: 403,
        contentCategory: 'live',
        title: 'Presidential Debate',
        imgURL: 'https://i.imgur.com/lA3D9e5.png',
        usersProgress: 17,
        timeFilters: ['tonight'],
        ratingFilters: ['new'],
        description: 'Live coverage of the presidential candidates debating key issues.',
        startTime: '8:00 PM EST',
        duration: 120 // Estimated duration in minutes
    },
    {
        id: 404,
        contentCategory: 'live',
        title: 'SpaceX Rocket Launch',
        imgURL: 'https://i.imgur.com/alhCYrA.png',
        usersProgress: 20,
        timeFilters: ['coming up'],
        ratingFilters: ['popular'],
        description: 'Live stream of SpaceX\'s latest rocket launch and landing attempt.',
        startTime: '3:30 PM EST',
        duration: 90 // Estimated duration in minutes
    },
    {
        id: 405,
        contentCategory: 'live',
        title: 'Grammy Awards Ceremony',
        imgURL: 'https://i.imgur.com/WONFlFi.png',
        usersProgress: 50,
        timeFilters: ['now'],
        ratingFilters: ['popular'],
        description: 'Live broadcast of the annual Grammy Awards, honoring achievements in the music industry.',
        startTime: '8:00 PM EST',
        duration: 240 // Estimated duration in minutes
    },
    {
        id: 406,
        contentCategory: 'live',
        title: 'World Cup Final',
        imgURL: 'https://i.imgur.com/pUueRzP.png',
        usersProgress: 43,
        timeFilters: ['coming up'],
        ratingFilters: ['popular', 'new'],
        description: 'Live coverage of the FIFA World Cup final match.',
        startTime: '2:00 PM EST',
        duration: 150 // Estimated duration in minutes
    },

    // Science
    {
        id: 501,
        contentCategory: 'science',
        title: 'Cosmos: A Spacetime Odyssey',
        imgURL: 'https://i.imgur.com/deTP4O5.png',
        usersProgress: 80,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['highest rated'],
        description: 'An exploration of our discovery of the laws of nature and coordinates in space and time.',
        releaseYear: 2014,
        episodes: 13,
        duration: 60 // Average episode duration in minutes
    },
    {
        id: 502,
        contentCategory: 'science',
        title: 'Planet Earth II',
        imgURL: 'https://i.imgur.com/Im519xZ.png',
        usersProgress: 75,
        timeFilters: ['now', 'today'],
        ratingFilters: ['popular', 'highest rated'],
        description: 'David Attenborough returns with a new wildlife documentary that shows life in a variety of habitats.',
        releaseYear: 2016,
        episodes: 6,
        duration: 60 // Average episode duration in minutes
    },
    {
        id: 503,
        contentCategory: 'science',
        title: 'The Brain with David Eagleman',
        imgURL: 'https://i.imgur.com/HhTmIAr.png',
        usersProgress: 60,
        timeFilters: ['coming up'],
        ratingFilters: ['new'],
        description: 'Neuroscientist David Eagleman explores the human brain in an epic series that reveals the ultimate story of us.',
        releaseYear: 2015,
        episodes: 6,
        duration: 60 // Average episode duration in minutes
    },
    {
        id: 504,
        contentCategory: 'science',
        title: 'Chasing Coral',
        imgURL: 'https://i.imgur.com/s7i2E3B.png',
        usersProgress: 40,
        timeFilters: ['now'],
        ratingFilters: ['highest rated'],
        description: 'Divers, photographers and scientists set out to reveal the underwater mystery to the world.',
        releaseYear: 2017,
        duration: 93 // Duration in minutes
    },
    {
        id: 505,
        contentCategory: 'science',
        title: 'The Social Dilemma',
        imgURL: 'https://i.imgur.com/yc6VQTc.png',
        usersProgress: 90,
        timeFilters: ['tonight', 'today'],
        ratingFilters: ['popular', 'new'],
        description: 'Explores the dangerous human impact of social networking, with tech experts sounding the alarm on their own creations.',
        releaseYear: 2020,
        duration: 94 // Duration in minutes
    },
    {
        id: 506,
        contentCategory: 'science',
        title: 'The Year Earth Changed',
        imgURL: 'https://i.imgur.com/vdo8sbe.png',
        usersProgress: 55,
        timeFilters: ['now'],
        ratingFilters: ['new'],
        description: 'A fresh new approach to the global lockdown and the uplifting stories that have come out of it.',
        releaseYear: 2021,
        duration: 48 // Duration in minutes
    },
    // Sports
    {
        id: 601,
        contentCategory: 'sports',
        title: 'Formula 1: Drive to Survive',
        imgURL: 'https://i.imgur.com/fESEy19.png',
        usersProgress: 70,
        timeFilters: ['now', 'today'],
        ratingFilters: ['popular', 'new'],
        description: 'Drivers, managers and team owners live life in the fast lane — both on and off the track.',
        releaseYear: 2019,
        seasons: 5,
        duration: 40 // Average episode duration in minutes
    },
    {
        id: 602,
        contentCategory: 'sports',
        title: 'The Last Dance',
        imgURL: 'https://i.imgur.com/S93Yweq.png',
        usersProgress: 90,
        timeFilters: ['now'],
        ratingFilters: ['highest rated'],
        description: 'A documentary miniseries about the career of Michael Jordan, with particular focus on his last season with the Chicago Bulls.',
        releaseYear: 2020,
        episodes: 10,
        duration: 50 // Average episode duration in minutes
    },
    {
        id: 603,
        contentCategory: 'sports',
        title: 'All or Nothing: Manchester City',
        imgURL: 'https://i.imgur.com/DoFPApJ.png',
        usersProgress: 60,
        timeFilters: ['coming up'],
        ratingFilters: ['popular'],
        description: "A behind-the-scenes look at Manchester City's Premier League winning 2017-18 season.",
        releaseYear: 2018,
        episodes: 8,
        duration: 45 // Average episode duration in minutes
    },
    {
        id: 604,
        contentCategory: 'sports',
        title: 'Icarus',
        imgURL: 'https://i.imgur.com/hBtO5fn.png',
        usersProgress: 85,
        timeFilters: ['tonight'],
        ratingFilters: ['highest rated'],
        description: 'An American cyclist plunges into a vast doping scandal involving a Russian scientist.',
        releaseYear: 2017,
        duration: 121 // Duration in minutes
    },
    {
        id: 605,
        contentCategory: 'sports',
        title: 'Free Solo',
        imgURL: 'https://i.imgur.com/sp4VJPZ.png',
        usersProgress: 75,
        timeFilters: ['now', 'today'],
        ratingFilters: ['highest rated'],
        description: "Follow Alex Honnold as he becomes the first person to ever free solo climb Yosemite's 3,000ft high El Capitan Wall.",
        releaseYear: 2018,
        duration: 100 // Duration in minutes
    },
    {
        id: 606,
        contentCategory: 'sports',
        title: "Sunderland 'Til I Die",
        imgURL: 'https://i.imgur.com/mT3Lhyh.png',
        usersProgress: 50,
        timeFilters: ['coming up'],
        ratingFilters: ['popular'],
        description: 'The passion and drama of Sunderland Association Football Club, as they try to bounce back after relegation from the Premier League.',
        releaseYear: 2018,
        seasons: 2,
        duration: 40 // Average episode duration in minutes
    },

    // News
    {
        id: 701,
        contentCategory: 'news',
        title: 'Global News Roundup',
        imgURL: 'https://i.imgur.com/2bm7GT2.png',
        usersProgress: 20,
        timeFilters: ['now', 'today'],
        ratingFilters: ['new'],
        description: "A comprehensive look at the day's top news stories from around the world.",
        updateFrequency: 'Hourly',
        duration: 30 // Estimated duration in minutes
    },
    {
        id: 702,
        contentCategory: 'news',
        title: 'Tech Today',
        imgURL: 'https://i.imgur.com/v2FnoAN.png',
        usersProgress: 30,
        timeFilters: ['now'],
        ratingFilters: ['popular'],
        description: 'The latest updates and breakthroughs in the world of technology.',
        updateFrequency: 'Daily',
        duration: 15 // Estimated duration in minutes
    },
    {
        id: 703,
        contentCategory: 'news',
        title: 'Climate Watch',
        imgURL: 'https://i.imgur.com/wzCqp7g.png',
        usersProgress: 40,
        timeFilters: ['coming up'],
        ratingFilters: ['new', 'highest rated'],
        description: 'In-depth coverage of climate change and its global impacts.',
        updateFrequency: 'Weekly',
        duration: 45 // Estimated duration in minutes
    },
    {
        id: 704,
        contentCategory: 'news',
        title: 'Financial Insights',
        imgURL: 'https://i.imgur.com/J3kXUPl.png',
        usersProgress: 50,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['popular'],
        description: 'Analysis of the latest trends and developments in global finance and economics.',
        updateFrequency: 'Daily',
        duration: 20 // Estimated duration in minutes
    },
    {
        id: 705,
        contentCategory: 'news',
        title: 'Health Matters',
        imgURL: 'https://i.imgur.com/qu0drEa.png',
        usersProgress: 33,
        timeFilters: ['today'],
        ratingFilters: ['new'],
        description: 'The latest medical breakthroughs and health advice from experts.',
        updateFrequency: 'Weekly',
        duration: 30 // Estimated duration in minutes
    },
    {
        id: 706,
        contentCategory: 'news',
        title: 'Sports Center',
        imgURL: 'https://i.imgur.com/uEJBFOp.png',
        usersProgress: 20,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['popular'],
        description: 'Comprehensive coverage of sports events and news from around the globe.',
        updateFrequency: 'Daily',
        duration: 60 // Estimated duration in minutes
    },

    // Kids
    // Kids
    {
        id: 801,
        contentCategory: 'kids',
        title: 'Peppa Pig',
        imgURL: 'https://i.imgur.com/m51PkeV.png',
        usersProgress: 60,
        timeFilters: ['now', 'today'],
        ratingFilters: ['popular'],
        description: 'Follow the adventures of Peppa, a loveable little piggy, and her family and friends.',
        releaseYear: 2004,
        seasons: 7,
        duration: 5 // Average episode duration in minutes
    },
    {
        id: 802,
        contentCategory: 'kids',
        title: 'PAW Patrol',
        imgURL: 'https://i.imgur.com/oI1Ah62.png',
        usersProgress: 40,
        timeFilters: ['now', 'coming up'],
        ratingFilters: ['popular', 'new'],
        description: 'A team of heroic puppies work together to protect their community.',
        releaseYear: 2013,
        seasons: 8,
        duration: 22 // Average episode duration in minutes
    },
    {
        id: 803,
        contentCategory: 'kids',
        title: 'SpongeBob SquarePants',
        imgURL: 'https://i.imgur.com/SOwIyPS.png',
        usersProgress: 80,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['highest rated'],
        description: 'The aquatic misadventures of a talking sea sponge who works at a fast food restaurant.',
        releaseYear: 1999,
        seasons: 13,
        duration: 22 // Average episode duration in minutes
    },
    {
        id: 804,
        contentCategory: 'kids',
        title: 'Bluey',
        imgURL: 'https://i.imgur.com/OVKJ1TB.png',
        usersProgress: 70,
        timeFilters: ['now', 'today'],
        ratingFilters: ['popular', 'highest rated'],
        description: 'The slice-of-life adventures of an Australian Blue Heeler Cattle Dog puppy and her family.',
        releaseYear: 2018,
        seasons: 3,
        duration: 7 // Average episode duration in minutes
    },
    {
        id: 805,
        contentCategory: 'kids',
        title: 'Cocomelon',
        imgURL: 'https://i.imgur.com/tIZlHPz.png',
        usersProgress: 30,
        timeFilters: ['now', 'coming up'],
        ratingFilters: ['popular'],
        description: 'Learn letters, numbers, animal sounds and more with J.J. in this musical series.',
        releaseYear: 2006,
        seasons: 6,
        duration: 3 // Average episode duration in minutes
    },
    {
        id: 806,
        contentCategory: 'kids',
        title: 'The Loud House',
        imgURL: 'https://i.imgur.com/qEvH1fC.png',
        usersProgress: 50,
        timeFilters: ['tonight', 'today'],
        ratingFilters: ['new'],
        description: 'The adventures of Lincoln Loud, an 11-year-old boy living with ten sisters.',
        releaseYear: 2016,
        seasons: 5,
        duration: 22 // Average episode duration in minutes
    },

    // Lifestyle
    {
        id: 901,
        contentCategory: 'lifestyle',
        title: 'Queer Eye',
        imgURL: 'https://i.imgur.com/JOXWrCq.png',
        usersProgress: 75,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['popular', 'highest rated'],
        description: 'The Fab Five help transform the lives of individuals, offering advice on fashion, grooming, food, culture, and design.',
        releaseYear: 2018,
        seasons: 6,
        duration: 45 // Average episode duration in minutes
    },
    {
        id: 902,
        contentCategory: 'lifestyle',
        title: 'Tidying Up with Marie Kondo',
        imgURL: 'https://i.imgur.com/elWOjAz.png',
        usersProgress: 60,
        timeFilters: ['now', 'today'],
        ratingFilters: ['popular'],
        description: 'Marie Kondo helps people tackle the clutter in their homes and transform their lives.',
        releaseYear: 2019,
        episodes: 8,
        duration: 40 // Average episode duration in minutes
    },
    {
        id: 903,
        contentCategory: 'lifestyle',
        title: "Chef's Table",
        imgURL: 'https://i.imgur.com/o01JI0z.png',
        usersProgress: 80,
        timeFilters: ['now'],
        ratingFilters: ['highest rated'],
        description: 'A documentary series that profiles renowned chefs from around the world.',
        releaseYear: 2015,
        seasons: 6,
        duration: 50 // Average episode duration in minutes
    },
    {
        id: 904,
        contentCategory: 'lifestyle',
        title: 'Tiny House Nation',
        imgURL: 'https://i.imgur.com/P5QP0vf.png',
        usersProgress: 40,
        timeFilters: ['coming up'],
        ratingFilters: ['popular'],
        description: 'Follows renovation experts as they help families design and construct tiny dream homes.',
        releaseYear: 2014,
        seasons: 5,
        duration: 42 // Average episode duration in minutes
    },
    {
        id: 905,
        contentCategory: 'lifestyle',
        title: 'Nailed It!',
        imgURL: 'https://i.imgur.com/XRA6gWW.png',
        usersProgress: 70,
        timeFilters: ['now', 'tonight'],
        ratingFilters: ['popular', 'new'],
        description: 'Home bakers with a terrible track record take a shot at re-creating edible masterpieces for a $10,000 prize.',
        releaseYear: 2018,
        seasons: 6,
        duration: 35 // Average episode duration in minutes
    },
    {
        id: 906,
        contentCategory: 'lifestyle',
        title: "The World's Most Amazing Vacation Rentals",
        imgURL: 'https://i.imgur.com/2898It6.png',
        usersProgress: 55,
        timeFilters: ['today'],
        ratingFilters: ['new'],
        description: 'Three travelers visit vacation rentals around the globe and share their expert tips and tricks.',
        releaseYear: 2021,
        seasons: 2,
        duration: 40 // Average episode duration in minutes
    }
];
// DOM Elements
const contentWrapper = document.getElementById('content-wrapper');
const contentTemplate = document.getElementById('content-item-template');
const singleItemTemplate = document.getElementById('single-item-template');
const btnItems = document.querySelectorAll('.btn-item');

const btnFilters = document.querySelectorAll('.nav-filters button');
const btnMobileMenu = document.querySelector('[aria-label="Settings Menu"]');
const btnCategories = document.querySelectorAll('.nav-sidebar-list a');

// Add click event listeners to all filter buttons
btnFilters.forEach(button => {
    button.addEventListener('click', function () {
        updatePressedFilter(this);
        applyFilters();
    });
});

// Add click event listeners to all sidebar navigation items
btnCategories.forEach(tab => {
    tab.addEventListener('click', function (event) {
        event.preventDefault();
        updateSelectedTab(tab)
    });
});

// Event listener for settings menu toggle
btnMobileMenu.addEventListener('click', () => {
    document.querySelector('.nav-filters').classList.toggle('show');
})

// Function to update the pressed state of filter buttons
function updatePressedFilter(selectedButton) {
    // Set all buttons in the same group to not pressed
    selectedButton.closest('ul').querySelectorAll('button').forEach(button => {
        button.setAttribute('aria-pressed', 'false');
    });

    // Set the selected button to pressed
    selectedButton.setAttribute('aria-pressed', 'true');
}

// Function to apply filters to the content
function applyFilters() {
    const selectedCategory = document.querySelector('.nav-sidebar-list a[aria-current="page"]').id;
    let filteredObjects = DATA.filter(item => item.contentCategory === selectedCategory);

    // Get active time filters
    const activeTimeFilters = Array.from(document.querySelectorAll('.nav-filter-time-list button[aria-pressed="true"]'))
        .map(button => button.getAttribute('data-timefilter'));

    // Get active rating filters
    const activeRatingFilters = Array.from(document.querySelectorAll('.nav-filter-rating-list button[aria-pressed="true"]'))
        .map(button => button.getAttribute('data-ratingfilter'));

    // Apply filters to objects
    filteredObjects = filteredObjects.filter(item => {
        const matchesTimeFilter = activeTimeFilters.length === 0 ||
            activeTimeFilters.some(filter => item.timeFilters.includes(filter));

        const matchesRatingFilter = activeRatingFilters.length === 0 ||
            activeRatingFilters.some(filter => item.ratingFilters.includes(filter));

        return matchesTimeFilter && matchesRatingFilter;
    });

    // Display results or no results message
    if (filteredObjects.length === 0) {
        displayNoResultsMessage();
    } else {
        contentWrapper.replaceChildren(...filteredObjects.map(item => itemHTML(item)));
    }
}

// Function to update selected category tab
function updateSelectedTab(selectedTab) {
    // Remove aria-selected and aria-current from all tabs
    document.querySelectorAll('.nav-sidebar-list a').forEach(tab => {
        tab.setAttribute('aria-selected', 'false');
        tab.removeAttribute('aria-current');
    });

    // Set aria-selected and aria-current for the selected tab
    selectedTab.setAttribute('aria-selected', 'true');
    selectedTab.setAttribute('aria-current', 'page');

    // Reset all header buttons
    document.querySelectorAll('.header li button').forEach(btn => btn.setAttribute('aria-pressed', false));

    // Update content for the selected category
    const category = selectedTab.id;
    contentWrapper.replaceChildren(...selectCategory(category));
}

// Function to select all items for a given category
function selectCategory(category) {
    return DATA
        .filter(item => item.contentCategory === category)
        .map(item => itemHTML(item));
}

// Function to create HTML for each item
function itemHTML(item) {
    const clone = contentTemplate.content.cloneNode(true);
    clone.querySelector('li').style.setProperty('--_bg-img', `url(${item.imgURL})`);
    clone.querySelector('[data-id]').setAttribute('data-id', item.id);
    clone.querySelector('[data-title]').textContent = item.title;
    clone.querySelector('progress').value = item.usersProgress;
    item.contentCategory === 'series' ? clone.querySelector('[data-details]').textContent = `Season ${item.seasons}` : '';
    item.contentCategory === 'live' ? clone.querySelector('[data-details]').textContent = `${item.startTime}` : '';
    clone.querySelector('.content-details').setAttribute('title', item.description);

    const remainingTimeData = calculateRemainingTime(item);
    clone.querySelector('[data-timeremaining]').textContent = formatRemainingTime(remainingTimeData);

    return clone;
}

// Function to create HTML for a single item view
function singleItemHTML(id) {
    const obj = DATA.find(item => item.id === parseInt(id));
    const clone = singleItemTemplate.content.cloneNode(true);
    clone.querySelector('[data-title]').textContent = obj.title;
    clone.querySelector('[data-description]').textContent = obj.description;
    clone.querySelector('img').src = obj.imgURL;

    return clone;
}

// Function to display a message when no results are found
function displayNoResultsMessage() {
    const noResultsMessage = document.createElement('div');
    noResultsMessage.className = 'no-results-message';
    noResultsMessage.textContent = 'No items match the selected filters. Please try a different combination.';
    contentWrapper.replaceChildren(noResultsMessage);
}

// Function to calculate remaining time for content
function calculateRemainingTime(content) {
    const totalTime = content.duration;
    const isInSeconds = content.contentCategory === 'music';

    const watchedTime = Math.round(totalTime * (content.usersProgress / 100));
    const remainingTime = totalTime - watchedTime;

    return { remainingTime, isInSeconds };
}

// Function to format remaining time
function formatRemainingTime({ remainingTime, isInSeconds }) {
    if (isInSeconds) {
        // For music
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}s left`;
    } else {
        // For other content
        const hours = Math.floor(remainingTime / 60);
        const minutes = remainingTime % 60;
        if (hours > 0) {
            return `${hours}h ${minutes} min left`;
        } else {
            return `${minutes} min left`;
        }
    }
}


// Commented out event listener for single item view
// document.addEventListener('click', (e) => {
//     if (e.target.closest('.btn-item')) {
//         const id = e.target.closest('.btn-item').parentElement.dataset.id;
//         contentWrapper.replaceChildren(singleItemHTML(id))
//     }
// })

// Function to initialize the page
function init() {
    const currentCat = document.querySelector('[aria-current=page]').getAttribute('id');
    contentWrapper.replaceChildren(...selectCategory(currentCat));
}

// Initialize the page
init()