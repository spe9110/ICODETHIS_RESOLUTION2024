const chats = document.querySelectorAll('.chat');
const wrapper = document.querySelector('.wrapper');
const closeChat = document.querySelector('.status-2');
wrapper.addEventListener('click', open);
closeChat.addEventListener('click', close);


function close(event) {
    event.stopPropagation();
    wrapper.classList.remove("active");
}

function clickHandler(event) {
    if (wrapper.classList.contains("active"))
    {
        wrapper.classList.remove("active");
        setTimeout(() => {
            wrapper.classList.add("active");
        }, 500);
    }
    else {
        wrapper.classList.add("active");
    }

    chats.forEach(function (e) {
        e.classList.remove('current');
    });
    this.classList.add('current');
    var id = this.getAttribute("id");
    var alert = this.querySelector(".img-alert .alert");
    if (alert)
    {
        alert.classList.remove("alert");
    }
    var username = this.querySelector(".chat-data .name");
    var chatUser = document.getElementById("chat-title");
    chatUser.innerText = username.innerText;
    var pics = document.querySelectorAll(".chat-msg.away-chat .profile");
    pics.forEach(function (e) {
        e.setAttribute("src", "https://i.pravatar.cc/150?img=" + id);
    });
}

chats.forEach(function (element) {
    element.addEventListener('click', clickHandler);
});