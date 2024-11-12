const users = [
    {
        id: 1,
        name: "Mariane Poppins",
        image: "https://randomuser.me/api/portraits/women/9.jpg",
        lastMessage: "Definitely! We should go together....",
        time: "13:42 pm",
        unread: 2
    },
    {
        id: 2,
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        lastMessage: "Just relaxing and maybe binge-watching...",
        time: "10:37 am",
        unread: 0
    },
    {
        id: 3,
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        lastMessage: "You’re the best! Thanks for brightening...",
        time: "09:10 am",
        unread: 3
    },
    {
        id: 4,
        name: "James Johnson",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        lastMessage: "Deal! I’ll bring the coffee, you bring...",
        time: "14:00 pm",
        unread: 1
    },
    {
        id: 5,
        name: "Emily Watson",
        image: "https://randomuser.me/api/portraits/women/25.jpg",
        lastMessage: "Thanks for sharing the laugh! Have a great...",
        time: "08:42 am",
        unread: 5
    },
    {
        id: 6,
        name: "Michael Brown",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        lastMessage: "Good luck! If they give you any tips...",
        time: "16:30 pm",
        unread: 0
    }
];



const chats = {
    1: [
        { sender: "Mariane Poppins", message: "Hey! Did you hear about the new cafe that opened downtown? They have the most amazing cupcakes!", time: "13:40 pm" },
        { sender: "You", message: "Cupcakes? You know the way to my heart! 😄", time: "13:41 pm" },
        { sender: "Mariane Poppins", message: "Definitely! We should go together. Let’s make it a cupcake adventure!", time: "13:42 pm" },
        { sender: "You", message: "Great! Sounds like a deal to me. Lets do it! Meet me tomorrow at Starbucks... Or something 🥴", time: "13:44 pm" }
    ],
    2: [
        { sender: "John Doe", message: "If you were a vegetable, you’d be a cute-cumber. 😜", time: "10:30 am" },
        { sender: "You", message: "Haha, nice one! If you were a fruit, you’d be a fine-apple!", time: "10:35 am" },
        { sender: "John Doe", message: "Touché! 😂 Got any plans this weekend?", time: "10:37 am" },
        { sender: "You", message: "Just relaxing and maybe binge-watching some shows. What about you?", time: "10:40 am" }
    ],
    3: [
        { sender: "Jane Smith", message: "Just found a cat meme that had me laughing for 10 minutes straight. Ever seen a cat in a shark costume?", time: "09:00 am" },
        { sender: "You", message: "No way! I need to see this. 😂", time: "09:05 am" },
        { sender: "Jane Smith", message: "I’ll send it over. You won’t be disappointed!", time: "09:10 am" },
        { sender: "You", message: "You’re the best! Thanks for brightening my morning.", time: "09:12 am" }
    ],
    4: [
        { sender: "James Johnson", message: "Had a dream that I was a superhero. What’s your superpower?", time: "13:50 pm" },
        { sender: "You", message: "Probably the power to make great coffee. ☕️", time: "13:55 pm" },
        { sender: "James Johnson", message: "That’s a superpower I need! We should have a coffee date sometime.", time: "14:00 pm" },
        { sender: "You", message: "Deal! I’ll bring the coffee, you bring the superhero skills.", time: "14:05 pm" }
    ],
    5: [
        { sender: "Emily Watson", message: "Just saw a dog in a hot dog costume. Best thing I’ve seen all week!", time: "08:30 am" },
        { sender: "You", message: "That sounds amazing! I need to see this. Send me the pic?", time: "08:35 am" },
        { sender: "Emily Watson", message: "Totally! It was the highlight of my morning. 😂", time: "08:40 am" },
        { sender: "You", message: "Thanks for sharing the laugh! Have a great day!", time: "08:42 am" }
    ],
    6: [
        { sender: "Michael Brown", message: "Have you ever tried to talk to your plants? They’re surprisingly good listeners.", time: "16:15 pm" },
        { sender: "You", message: "Only when I need advice on my next home improvement project. 😆", time: "16:20 pm" },
        { sender: "Michael Brown", message: "I should try that. Maybe my plants can help me with my cooking skills!", time: "16:25 pm" },
        { sender: "You", message: "Good luck! If they give you any tips, let me know. I could use some cooking advice myself.", time: "16:30 pm" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const chatList = document.getElementById('chatList');
    const panelAside = document.getElementById('panelAside');
    const chatMain = document.querySelector('.chat-main');
    let currentOpenChat = null;

    const responses = {
        "lol": "That is funny! Indeed! 😂😂",
        "hello": "Oh, hello there! How nice of you to drop by... 😊",
        "cupcake": "I love cupcakes too! What's your favorite flavor?",
        "cafe": "Oh, I heard the new cafe is fantastic. Have you tried their specialty?",
        "weekend": "Got any exciting plans for the weekend?",
        "cat": "Cats are amazing! Do you have any pets?",
        "superhero": "Everyone loves superheroes! Which one is your favorite?",
        "coffee": "Coffee is the best! How do you like your coffee?",
        "dog": "Dogs are adorable! What's the funniest thing you've seen a dog do?",
        "movie": "Movies are great! What’s the last movie you watched?",
        "book": "I love books! What’s your favorite genre?",
        "travel": "Traveling is so exciting! Where’s the best place you’ve visited?",
        "music": "Music can be so uplifting. What kind of music do you enjoy?",
        "sports": "Sports are fun! Do you have a favorite team or sport?",
        "food": "Food is a big part of life. What’s your go-to comfort food?",
        "exercise": "Exercise is important. Do you have a favorite workout routine?",
        "holiday": "Holidays are always fun! What’s your favorite holiday and why?",
        "weather": "The weather can really affect our mood. How’s the weather where you are?",
        "technology": "Technology is ever-evolving. What’s the coolest tech you’ve seen recently?",
        "art": "Art is amazing! Do you have a favorite artist or art style?",
        "pets": "Pets can be wonderful companions. What pets do you have or want to have?",
        "video game": "Video games can be so immersive. What’s your favorite game to play?",
        "fashion": "Fashion is a great form of self-expression. Do you have a favorite fashion trend?",
        "history": "History is fascinating! Is there a particular historical event you find interesting?",
        "testing": "Ah, testing! I see you’re checking my witty responses. Well, I must say, you're doing a fantastic job at it! 😂",
        "test": "Ah, test! I see you’re checking my code. Well, I must say, testing is a fantastic thing, isnt it? 😂"
    };

    function createChatItem(user) {
        return `
        <div class="chat-item" data-user-id="${user.id}">
            <div class="chat-user">
                <img src="${user.image}" alt="${user.name} profile picture">
            </div>
            <div class="user-message">
                <div class="username">${user.name}</div>
                <div class="short-message">
                    <p>${user.lastMessage}</p>
                </div>
                ${user.unread ? `<div class="notice">${user.unread}</div>` : ''}
            </div>
            <div class="time">
                <p>${user.time}</p>
            </div>
        </div>
        `;
    }

    function renderChatList() {
        chatList.innerHTML = users.map(createChatItem).join('');
    }
    function filterUsers() {
        const searchInput = document.getElementById('searchInput');
        const searchValue = searchInput.value.toLowerCase();

        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchValue) ||
            user.lastMessage.toLowerCase().includes(searchValue)
        );

        renderChatList(filteredUsers);

        if (currentOpenChat) {
            const currentChatMessages = chats[currentOpenChat];
            if (currentChatMessages) {
                filterChatMessages(currentChatMessages, searchValue);
            }
        }
    }

    function filterChatMessages(messages, searchValue) {
        const filteredMessages = messages.filter(msg =>
            msg.message.toLowerCase().includes(searchValue)
        );

        renderChatMessages(filteredMessages);
    }

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', filterUsers);

    function renderChatList(filteredUsers = users) {
        chatList.innerHTML = filteredUsers.map(createChatItem).join('');
    }

    function showChat(userId) {
        const user = users.find(u => u.id === userId);
        const chatMessages = chats[userId] || [];
        const myImage = 'https://randomuser.me/api/portraits/men/10.jpg';

        let chatHTML = `<h2>Chat with ${user.name}</h2>`;
        chatHTML += `<div class="messages-wrapper">`;

        chatMessages.forEach(msg => {
            chatHTML += `
            <div class="message ${msg.sender === 'You' ? 'sent' : 'received'}">
                ${msg.sender !== 'You' ? `<img src="${user.image}" alt="${user.name}">` : ''}
                <div class="chat-bubble">
                    <p>${msg.message}</p>
                    <span class="time">${msg.time}</span>
                </div>
                ${msg.sender === 'You' ? `<img src="${myImage}" alt="Your profile picture">` : ''}
            </div>
            `;
        });

        chatHTML += `</div>`;

        chatHTML += `
        <div class="close-chat">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <circle cx="12" cy="12" r="9" />
            <path d="m14 10l-4 4m0-4l4 4" />
          </g>
        </svg>
      </div>
         <div id="typingIndicator" class="typing-indicator" style="display: none;">
        <div class="dot"></div>
        <p>User is typing...</p>
         </div>
        <div class="send-message">
            <div class="input-chat">
                <input type="text" id="messageInput" placeholder="Type a message...">
            </div>
            <div class="send-button" id="sendButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1792 1792">
                    <path fill="currentColor"
                        d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11" />
                </svg>
            </div>
        </div>
        `;

        panelAside.innerHTML = chatHTML;


        const closeChatButton = document.querySelector('.close-chat');
        if (closeChatButton) {
            closeChatButton.addEventListener('click', () => {
                const chatMain = document.querySelector('.chat-main');
                const panelAside = document.getElementById('panelAside');

                chatMain.classList.remove('expanded');
                panelAside.classList.remove('expanded');

                currentOpenChat = null;
            });
        } else {
            console.error('.close-chat element not found');
        }


        const newSendButton = document.getElementById('sendButton');
        if (newSendButton) {
            newSendButton.addEventListener('click', () => sendMessage(user));
        } else {
            console.error('Send button not found after updating chat');
        }

        const messagesWrapper = panelAside.querySelector('.messages-wrapper');
        if (messagesWrapper) {
            messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
        }
    }

    function getResponse(userInput) {
        const lowerInput = userInput.toLowerCase();

        for (const key in responses) {
            if (lowerInput.includes(key)) {
                return responses[key];
            }
        }

        return "That's interesting! Tell me more.";
    }


    function showTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.style.display = 'flex';
        }
    }

    function hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.style.display = 'none';
        }
    }

    function sendMessage() {
        const messageInput = document.getElementById('messageInput');
        if (!messageInput) {
            console.error('Message input element not found');
            return;
        }

        const messageText = messageInput.value.trim();
        if (messageText && currentOpenChat) {
            console.log("Sending message:", messageText);

            const currentChat = chats[currentOpenChat] || [];
            const now = new Date();
            const time = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()} ${now.getHours() >= 12 ? 'pm' : 'am'}`;

            chats[currentOpenChat] = [...currentChat, { sender: 'You', message: messageText, time }];

            showChat(currentOpenChat);

            messageInput.value = '';

            showTypingIndicator();

            setTimeout(() => {
                hideTypingIndicator();
                const response = getResponse(messageText);
                const now = new Date();
                const time = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()} ${now.getHours() >= 12 ? 'pm' : 'am'}`;
                chats[currentOpenChat] = [...chats[currentOpenChat], { sender: 'Bot', message: response, time }];
                showChat(currentOpenChat);
            }, 2000);
        } else {
            console.log("Message text is empty or no chat selected.");
        }
    }

    function togglePanel(userId) {
        if (currentOpenChat === userId) {
            panelAside.classList.remove('expanded');
            chatMain.classList.remove('expanded');
            currentOpenChat = null;
        } else {
            if (currentOpenChat !== null) {
                panelAside.classList.remove('expanded');
                chatMain.classList.remove('expanded');
            }
            showChat(userId);
            setTimeout(() => {
                panelAside.classList.add('expanded');
                chatMain.classList.add('expanded');
            }, 500);
            currentOpenChat = userId;
        }
    }

    renderChatList();

    chatList.addEventListener('click', (event) => {
        const chatItem = event.target.closest('.chat-item');
        if (chatItem) {
            const userId = parseInt(chatItem.dataset.userId, 10);
            togglePanel(userId);
        }
    });
});