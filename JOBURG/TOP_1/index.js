// Write your JavaScript code here
const data = [
    {
        image_url: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        name: 'Ithan gin',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        name: 'Moris watkins',
        review_text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        name: 'Mary Jane Watson',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        name: 'Jian beab',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1712847331947-9460dd2f264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NDF8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        name: 'dori mats',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1611695434398-4f4b330623e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        name: 'Ken paul',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1553514029-1318c9127859?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        name: 'jesinta kael',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        name: 'Mark bros',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        name: 'Mary Jane Watson',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1509868918748-a554ad25f858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        name: 'Mary Jane Watson',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE4fHxmYWNlfGVufDB8fDB8fHww",
        name: 'David maqueen',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        name: 'lin pear',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
        name: 'Kate weis',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM1fHxmYWNlfGVufDB8fDB8fHww",
        name: 'Jonathan walton',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
    {
        image_url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHxmYWNlfGVufDB8fDB8fHww",
        name: 'Noris walder',
        review_text: "Lorem Ipsum is simply dummy text of the printing and tdustry's r including  Lorem Ipsum."
    },
];

const reviewContainer = document.getElementById('reviews');

data?.forEach((value, index) => {
    const closetIDiv = document.createElement('div')
    const card1 = document.createElement('div')
    card1.classList.add('card-1')
    const card1img = document.createElement('img')
    card1img.src = value?.image_url
    card1img.classList.add('img-5')
    card1.appendChild(card1img)
    closetIDiv.appendChild(card1)
    const card2 = document.createElement('div')
    card2.classList.add('card-2')
    closetIDiv.appendChild(card2)
    closetIDiv.classList.add('closet-1')
    reviewContainer.appendChild(closetIDiv)
    const nameH1 = document.createElement('h1')
    nameH1.innerText = value.name
    card2.appendChild(nameH1)
    const nameH3 = document.createElement('h3')
    nameH3.innerText = value.review_text
    card2.appendChild(nameH3)
});

const holder = document.querySelector('.holder');

const careers = ['Life is short to eat just salads ⭐ Life is short  to eat just salads ⭐ life is short  to eat just salad'];

let CareerIndex = 0;

let characterIndex = 0;
UpdateText()

function UpdateText() {
    characterIndex++
    holder.innerHTML = `
<h1>${careers[CareerIndex].slice(0, 1) === 'I', ''} ${careers[CareerIndex].slice(0, characterIndex)}</h1>
`;
    if (characterIndex === careers[CareerIndex].length) {
        characterIndex = 0;
        CareerIndex++
    }
    setTimeout(UpdateText, 150);
}

