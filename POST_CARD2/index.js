const articleContent = [
    {
        img: 'https://www.shutterstock.com/image-photo/digital-background-perfect-tech-processes-600nw-2496403005.jpg',
        title: 'The Future of AI: What Lies Ahead',
        author: 'Jane Doe',
        date: 'November 21, 2024',
        desc: 'Explore the rapidly evolving world of AI and its potential impact on various industries in the coming decade.',
        likes: '120',
        comments: '45',
    },
    {
        img: 'https://t4.ftcdn.net/jpg/04/96/72/57/360_F_496725738_rLoyzy9qGeTUkqCVn5D7pW7ZA5ONiyiC.jpg',
        title: 'The Rise of Electric Vehicles',
        author: 'John Smith',
        date: 'November 20, 2024',
        desc: 'How electric vehicles are revolutionizing the auto industry and contributing to a greener future.',
        likes: '90',
        comments: '30',
    },
    {
        img: 'https://png.pngtree.com/background/20231030/original/pngtree-d-rendering-of-a-home-office-and-work-station-for-remote-picture-image_5787270.jpg',
        title: '10 Tips for Remote Work Success',
        author: 'Alice Johnson',
        date: 'November 19, 2024',
        desc: 'Effective strategies for staying productive and maintaining work-life balance while working remotely.',
        likes: '200',
        comments: '75',
    },
    {
        img: 'https://img.freepik.com/premium-photo/mockup-ecofriendly-sustainable-fashion-background-image_1142322-4668.jpg',
        title: 'Sustainable Fashion: Trends to Watch',
        author: 'Emily Davis',
        date: 'November 18, 2024',
        desc: 'An in-depth look at how the fashion industry is moving toward sustainability and eco-friendly practices.',
        likes: '150',
        comments: '40',
    },
    {
        img: 'https://zerocap.com/wp-content/uploads/2024/02/DALL%C2%B7E-2024-02-27-14.00.41-A-widescreen-image-titled-The-Origins-of-Blockchain-Technology-depicting-the-evolution-of-blockchain-technology-from-its-early-conceptualization-to-.webp',
        title: 'Breaking Down Blockchain Technology',
        author: 'Michael Brown',
        date: 'November 17, 2024',
        desc: 'Understanding the fundamentals of blockchain and its potential applications beyond cryptocurrency.',
        likes: '180',
        comments: '55',
    },
    {
        img: 'https://img.freepik.com/premium-photo/abstract-meditation-enlightenment-background-mindful-spiritual-concept_200360-1152.jpg',
        title: 'A Guide to Mindfulness Meditation',
        author: 'Sophia Lee',
        date: 'November 16, 2024',
        desc: 'How practicing mindfulness can help reduce stress, increase focus, and improve overall well-being.',
        likes: '300',
        comments: '100',
    },
    {
        img: 'https://wallpapers.com/images/hd/cybersecurity-background-ivw0x95q3z99nt00.jpg',
        title: 'The Importance of Cybersecurity in 2024',
        author: 'James White',
        date: 'November 15, 2024',
        desc: 'An overview of the most common cybersecurity threats in today’s digital world and how to protect against them.',
        likes: '250',
        comments: '60',
    },
    {
        img: 'https://media.licdn.com/dms/image/D4D12AQGwQAXU4l-3Yw/article-cover_image-shrink_720_1280/0/1711540472514?e=2147483647&v=beta&t=uSAT1eFXRcNfwtI1LjiaLcM7VQ3v0zKWu0glj5nz3Xs',
        title: 'Exploring the Metaverse: A New Digital Frontier',
        author: 'Olivia Green',
        date: 'November 14, 2024',
        desc: 'What the Metaverse is, how it’s shaping the future of the internet, and the potential it holds for entertainment and business.',
        likes: '170',
        comments: '50',
    },
    {
        img: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/keto-atkins-still-life-salmon-healthy-1296x728-header.jpg?w=1155&h=1528',
        title: 'Healthy Eating Habits for a Balanced Life',
        author: 'Liam Harris',
        date: 'November 13, 2024',
        desc: 'Tips on how to maintain a balanced diet that supports both physical and mental health.',
        likes: '220',
        comments: '80',
    },
    {
        img: 'https://agogs.sk/wp-content/uploads/2024/10/compressed_img-XukocwnL8SjlQP2MVqr3J1Qv.png',
        title: 'Space Exploration: What’s Next?',
        author: 'Lucas Martinez',
        date: 'November 12, 2024',
        desc: 'A look at the future of space exploration, with new missions planned to the Moon, Mars, and beyond.',
        likes: '160',
        comments: '45',
    }
];


const articleCard = (img, title, author, date, likes, desc, comments) => {
    return `
        <article class="slider-item">
            <div class="slider-body">
                <img src="${img}" alt="" class="slider-img">

                <h3 class="slider-title">${title}</h3>
                <p class="slider-author">by <span>${author}</span></p>
                <p class="slider-tag">${date}</p>

                <p class="slider-info">${desc}</p>
            </div>
            <div class="slider-social">
                <p class="heart-icon">
                    <i class="fa fa-heart"></i>
                    <span>${likes}</span> Likes
                </p>
                <p class="comment-icon">
                    <i class="fa fa-comment"></i>
                    <span>${comments}</span> Comments
                </p>
                <p class="share-icon">
                    <i class="fa fa-share"></i>
                    Share
                </p>
            </div>
        </article>
    `;
}

const sliderWrapper = document.getElementById("slider-wrapper");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

articleContent.forEach(item => {
    sliderWrapper.innerHTML += articleCard(item.img, item.title, item.author, item.date, item.likes, item.desc, item.comments);
});

let scrollPosition = 0;
const sliderWidth = sliderWrapper.clientWidth;
const totalSliderWidth = sliderWrapper.scrollWidth;

let currentIndex = 0;

const showNext = () => {
    if (scrollPosition + sliderWidth < totalSliderWidth) {
        scrollPosition += sliderWidth;
        currentIndex = Math.floor(scrollPosition / sliderWidth);
    } else {
        scrollPosition = 0;
        currentIndex = 0;
    }

    sliderWrapper.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });

    if (articleContent[currentIndex] && articleContent[currentIndex].img) {
        document.body.style.backgroundImage = `url(${articleContent[currentIndex].img})`;
    }
};

const showPrev = () => {
    if (scrollPosition - sliderWidth >= 0) {
        scrollPosition -= sliderWidth;
        currentIndex = Math.floor(scrollPosition / sliderWidth);
    } else {
        scrollPosition = totalSliderWidth - sliderWidth;
        currentIndex = Math.floor(scrollPosition / sliderWidth);
    }

    sliderWrapper.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });

    if (articleContent[currentIndex] && articleContent[currentIndex].img) {
        document.body.style.backgroundImage = `url(${articleContent[currentIndex].img})`;
    }
};

nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);
