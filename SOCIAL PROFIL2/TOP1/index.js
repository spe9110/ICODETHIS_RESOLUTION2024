const posts = [
    {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1432251407527-504a6b4174a2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1510673209043-af92bcbee205?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1594760467013-64ac2b80b7d3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1486673748761-a8d18475c757?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1573157726810-b51b782f3bfd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1532028205213-4c4fa81306d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        type: 'photo',
        src: 'https://images.unsplash.com/photo-1603039548092-fff996c2441c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        type: 'video',
        src: 'https://i.imgur.com/7e4unsd.mp4',
    },
    {
        type: 'video',
        src: 'https://i.imgur.com/lxWZlKf.mp4',
    },
    {
        type: 'video',
        src: 'https://i.imgur.com/adDzjGh.mp4',
    },
    {
        type: 'video',
        src: 'https://i.imgur.com/t1qcdTr.mp4',
    },
    {
        type: 'video',
        src: 'https://i.imgur.com/XmdzipE.mp4',
    },
    {
        type: 'video',
        src: 'https://i.imgur.com/MMyfrkx.mp4',
    },
    {
        type: 'video',
        src: 'https://i.imgur.com/bSEtwe4.mp4',
    },
    {
        type: 'video',
        src: 'https://i.imgur.com/FRZDTX9.mp4',
    },
    {
        type: 'video',
        src: 'https://i.imgur.com/GIFs5lv.mp4',
    },
]

// tab buttons to filter 
const tabBtnWrapper = document.querySelector('.tab-btns');
// posts grid 
const postsGridEl = document.querySelector('.posts-grid');
// each post(box) on page
const postBtns = document.querySelectorAll('[data-post]');
// lightbox modal 
const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalVideo = modal.querySelector('video');
const btnCloseModal = modal.querySelector('[btn-close]');


//event listeners
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-tab')) {
        const targetTab = e.target.closest('.btn-tab');
        const targetGrid = targetTab.getAttribute('aria-controls');
        tabBtnWrapper.querySelectorAll('.btn-tab').forEach((btn) => {
            btn.setAttribute('aria-selected', false);
        })
        targetTab.setAttribute('aria-selected', true);
        if (targetGrid == 'photos-posts') {
            populatePosts(true, false);
        } else if (targetGrid == 'videos-posts') {
            populatePosts(false, true);
        } else {
            populatePosts(true, true);
        }
    } else if (e.target.closest('[data-post]')) {
        const btn = e.target.closest('[data-post]');
        let postSrc = '';
        // check if video or img
        const type = btn.dataset.post;
        if (type == 'photo') {
            postSrc = btn.querySelector('img').src;
            modalImg.src = postSrc;
            modalImg.setAttribute('data-modal-image', true);         
            modalVideo.setAttribute('data-modal-video', false);
        } else if (type == 'video') {
            postSrc = btn.querySelector('video').src;
            modalVideo.src = postSrc;
            modalVideo.setAttribute('data-modal-video', true);
            modalImg.setAttribute('data-modal-image', false);
            modalVideo.play();
            console.log(postSrc)
        }
        modal.showModal();
    } else if (e.target.closest('[btn-close]')) {
        modalVideo.pause();
        modal.close();
    }
})

function populatePosts(photos = false, videos = false) {
    let photoStr = '';
    let videoStr = '';

    posts.forEach((post) => {
        if (post.type == 'photo' && photos) {
            photoStr += postsHTML(post)
        } if (post.type == 'video' && videos) {
            videoStr += postsHTML(post)
        }
    })
    let html = photoStr + videoStr;
    postsGridEl.innerHTML = html;
}

populatePosts(true, false)

function postsHTML(item) {
    if (item.type === 'photo') {
        return `
            <li class="post"><button data-post="photo"><img src="${item.src}" alt=""></button></li>
        `;        
    } else if (item.type === 'video') {
        return `
            <li class="post"><button data-post="video"><video src="${item.src}">></button></li>
        `
    }
}



