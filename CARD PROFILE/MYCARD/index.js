const btnDynamic = document.querySelector("button");

// active Link color
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Dynamic button following

btnDynamic.addEventListener('click', followingButton)

function followingButton(){
    btnDynamic.classList.toggle('Unfollow')
    if(btnDynamic.classList.contains('Unfollow')){
        btnDynamic.innerHTML = 'Unfollow'
    } else{
        btnDynamic.innerHTML = `
        <svg width="24" height="24"xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
        Follow`
    }
}

