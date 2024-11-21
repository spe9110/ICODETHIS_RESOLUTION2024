// Write your JavaScript code here
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const articalTagCon = document.getElementById('artical-tags');
const tagData = ["project", "remote", "teamwork", "productivity", "marketing"]

const articalData = [
    {
        title: "comman symbols and thre meanings", name: "susie russell", img: "https://images.pexels.com/photos/789555/pexels-photo-789555.jpeg?auto=compress&cs=tinysrgb&w=400", profimg:"https://images.pexels.com/photos/7790836/pexels-photo-7790836.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        title: "success steps for your business", name: "conner persons", img: "https://images.pexels.com/photos/6858624/pexels-photo-6858624.jpeg?auto=compress&cs=tinysrgb&w=400", profimg:"https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
        title: "the strength of your celief", name: "jhone yates", img: "https://images.pexels.com/photos/601174/pexels-photo-601174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", profimg: "https://images.pexels.com/photos/2748239/pexels-photo-2748239.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
    
];
const articalCon = document.getElementById('resent-articals')
articalTagCon.innerHTML = tagData.map(tag => {
    return `<li class="h-fit cursor-pointer hover:scale-95 transition-all px-4 py-1 bg-slate-100 rounded-2xl hover:shadow-inner font-light">${tag}</li>`
}).join("");


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menu.classList.replace('scale-0','scale-100')
});

articalCon.innerHTML = articalData.map(({ title, name, profimg, img }) => {
    return `
    <article class="flex w-full gap-4 p-2 hover:scale-95 tranition-all rounded-lg duration-300 hover:bg-slate-200 cursor-pointer">
        <img src="${img}" class="size-[180px] rounded-md" alt="" />
        <div class="space-y-4">
            <h2 class="text-3xl capitalize font-bold">${title}</h2>
            <div class="flex items-center gap-3">
                <img src="${profimg}" class="size-14 rounded-full" alt="" />
                <h3 class="text-xl capitalize font-thin">${name}</h3>
            </div>
        </div>
    </article>`
}).join("");