// DATA
const users = [
    {
        id: 1,
        name: 'Florin Pop',
        img: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/b31bde00-b6db-48e5-9798-1c0f053360d4.jpg',
    }, {
        id: 2,
        name: 'Chris Boss',
        img: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/888e7b16-fa69-4576-9a45-d8f4fe6f6687.png',
    }, {
        id: 3,
        name: 'iMuhammad',
        img: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/a20a421f-fc09-4773-96e1-91ae719edb2b.jpg',
    }, {
        id: 4,
        name: 'Adrian Lica',
        img: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/6d9761f7-21fd-49dc-b8d6-f7e17c2b6234.jpg',
    }, {
        id: 5,
        name: 'Prince Opoku',
        img: 'https://avatars.githubusercontent.com/u/25393224?v=4',
    }, {
        id: 6,
        name: 'Mirza UIUX',
        img: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/5c07fc1c-4e73-4951-9157-a07e88fa6807.jpeg',
    }, {
        id: 7,
        name: 'Vlad NN',
        img: 'https://shismqklzntzxworibfn.supabase.co/storage/v1/object/public/avatars/dd657f72-a453-4eab-b5c7-e05362ed4467.jpg',
    }
];

// This is me, bruh!
const myUserId = 1;
let activeConversationId = undefined;

const conversations = [
    {
        id: 1,
        userId: 2,
        messages: [{
            userId: 2,
            message: 'Hey yo!!! YO YO YO!',
            time: new Date(),
        }, {
            userId: 1,
            message: 'Love ya!',
            time: new Date(),
        }]
    }, {
        id: 2,
        userId: 3,
        messages: [{
            userId: 3,
            message: 'Hi',
            time: new Date(),
        }]
    }, {
        id: 3,
        userId: 4,
        messages: [{
            userId: 4,
            message: 'Ho',
            time: new Date(),
        }, {
            userId: 1,
            message: 'Love ya!',
            time: new Date(),
        }]
    }, {
        id: 4,
        userId: 5,
        messages: [{
            userId: 5,
            message: 'He',
            time: new Date(),
        }]
    }, {
        id: 5,
        userId: 6,
        messages: [{
            userId: 6,
            message: 'He',
            time: new Date(),
        }]
    }, {
        id: 6,
        userId: 7,
        messages: [{
            userId: 7,
            message: 'I love iCodeThis',
            time: new Date(),
        }]
    }
]

// DOM Setup
const conversationsWrapper = document.getElementById('conversations-wrapper');
const messagesWrapper = document.getElementById('messages-wrapper');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

// Initial load
conversations.forEach(conv => {
    const lastMessage = conv.messages[conv.messages.length - 1];
    const user = getUserById(conv.userId);

    const convLi = document.createElement('li');
    convLi.className = 'flex gap-4 justify-between py-4 px-8 cursor-pointer hover:bg-purple-800';

    convLi.addEventListener('click', () => {
        messagesWrapper.parentNode.classList.remove('hidden');
        loadMessages(conv.id);
        activeConversationId = conv.id;
    });

    convLi.innerHTML = `
        <img class="w-20 h-20 object-cover rounded-full border-4 border-purple-500" src="${user.img}" alt="${user.name}" />
        <div class="flex-1">
            <h3 class="text-2xl font-semibold">${user.name}</h3>
            <p>${lastMessage.message}</p>
        </div>
        <time class="text-purple-200 text-lg" datetime="${lastMessage.time}">${formatTime(lastMessage.time)}</time>
    `;

    conversationsWrapper.appendChild(convLi);
});

// Event Listeners
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;

    const conversation = getConversationById(activeConversationId);

    if (message) {
        conversation.messages.push({
            userId: myUserId,
            message,
            time: new Date(),
        });

        messageInput.value = '';
    }

    loadMessages(activeConversationId);
});



// Fancy Functions
function getUserById(userId) {
    return users.find(user => user.id === userId);
}

function loadMessages(conversationId) {
    // clear messagesWrapper
    messagesWrapper.innerHTML = '';

    const { messages } = getConversationById(conversationId);

    messages.forEach(message => {
        const messLi = document.createElement('li');
        messLi.className = 'flex gap-4 justify-between py-4 px-8';

        const user = getUserById(message.userId);

        if (user.id === myUserId) {
            messLi.classList.add('flex-row-reverse');
        }

        messLi.innerHTML = `
            <img class="w-20 h-20 object-cover rounded-full border-4 border-white" src="${user.img}" alt="${user.name}" />
            <p class="bg-white shadow-sm w-full p-4">${message.message}</p>
        `;

        messagesWrapper.appendChild(messLi);
    });
}

function getConversationById(conversationId) {
    return conversations.find(conv => conv.id === conversationId);
}

function formatTime(date) {
    return new Intl.DateTimeFormat('en-US', {timeStyle: 'short'}).format(date);
}

// TODO:
// 1. build chat list UI (no search & no new message for now) ✅
// 2. build chat UI ✅
// 3. JS dynamic data ✅
//    a. array of conversations ✅
//    b. array of messages in conversation ✅
// 4. convert UI to use JS data ✅
// 5. Send messages functionality ✅
//    a. store new messages in the data ✅
// 6. connect chat list UI with chat UI (when clicking on a tab, open the coresponding chat) ✅
// BONUS: search/filter functionality
// BONUS: New message functionality
// BONUS: Animation