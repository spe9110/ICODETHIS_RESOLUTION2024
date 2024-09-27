// Add JavaScript code here

const links = document.querySelectorAll('a');
const menuIcon = document.querySelector('.menu-icon');
const mainNav = document.querySelector('.main-nav');
const mainContainer = document.querySelector('main');
const viewBtn = document.querySelector('.view-btn');
const projectsList = document.querySelector('.projects-list');
const projectItems = document.querySelectorAll('.project-item');
const mainProjectItems = document.querySelectorAll('.main-project-item');
const addBtn = document.querySelector('.add-btn');
const closeBtn = document.querySelector('.close-btn');
const modalAddNew = document.querySelector('.modal-add-new');
const addNewForm = document.querySelector('.add-new-form');
const newInput = document.querySelector('#new-input');
const addProjectItem = document.querySelector('.add-project-item');

// Store the id of the last elem
let id = 6;
// For adjust MaxHeight of asides projects container;
let maxHeight = 12.7;
// Counter for added projects;
let addedProjects = 0;


// Prevent links default behaviour
const overrideLinks = () => {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
}

// Prevent links default behaviour
const toggleProjectsList = () => {
    viewBtn.addEventListener('click', (e) => {
        if (projectsList.classList.contains('projects--expand')) {
            projectsList.classList.remove('projects--expand')
            projectsList.style.maxHeight = '7.8rem';
            viewBtn.querySelector('p').textContent = 'View all';
            viewBtn.querySelector('svg').style.transform = 'rotate(0deg)';

        } else {
            projectsList.classList.add('projects--expand')
            projectsList.style.maxHeight = maxHeight.toFixed(1) + 'rem';
            viewBtn.querySelector('p').textContent = 'View less';
            viewBtn.querySelector('svg').style.transform = 'rotate(180deg)';
        }
    });
}

// Handles link between project items on the asida and project items on main right container on hovering
// I could refactor these two functins, but i leave them this way for clarity
const controlProjectItems = () => {
    const projectItems = document.querySelectorAll('.project-item');
    const mainProjectItems = document.querySelectorAll('.main-project-item');
    projectItems.forEach((projectItem) => {
        projectItem.addEventListener('mouseenter', (e) => {

            const projectId = projectItem.dataset.projectId;
            mainProjectItems.forEach((mainProjectItem) => {
                if (mainProjectItem.dataset.mainProjectId == projectId) {
                    mainProjectItem.classList.add('mainProject--active');
                }
            });
        });

        projectItem.addEventListener('mouseleave', (e) => {
            mainProjectItems.forEach((mainProjectItem) => {
                mainProjectItem.classList.remove('mainProject--active');
            });
        });
    });
}

// Handles link between project items on main right Container and project items on aside when hovering
const controlMainProjectItems = () => {
    const projectItems = document.querySelectorAll('.project-item');
    const mainProjectItems = document.querySelectorAll('.main-project-item');
    mainProjectItems.forEach((mainProjectItem) => {
        mainProjectItem.addEventListener('mouseenter', (e) => {

            const mainProjectId = mainProjectItem.dataset.mainProjectId;
            projectItems.forEach((projectItem) => {
                if (projectItem.dataset.projectId == mainProjectId) {
                    projectItem.classList.add('project--active');
                }
            });
        });

        mainProjectItem.addEventListener('mouseleave', (e) => {
            projectItems.forEach((projectItem) => {
                projectItem.classList.remove('project--active');
            });
        });
    });
}


/* Hamburger menu toggle */
menuIcon.addEventListener('click', () => {
    mainNav.classList.toggle('nav--active');
    if (mainNav.classList.contains('nav--active')) {
        menuIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>`;
    } else {
        menuIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>`;
    };
});


// Handles Add new category modal
const addNewProject = () => {

    // Open Modal
    addBtn.addEventListener('click', () => {
        modalAddNew.showModal();
        modalAddNew.classList.add('dialog--animation');
    });

    addNewForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newProjectName = newInput.value.trim();
        const firstLetter = Array.from(newProjectName)[0];
        newInput.value = '';
        const newMainProjectItem = `<li class="main-project-item" data-main-project-id="${++id}">
                            <a href="javascript:void(0)">
                                <div>${firstLetter}</div>
                                <p>${newProjectName}</p>
                            </a>
                        </li>`;

        const newProjectItem = `<li class="project-item" data-project-id="${id}">${newProjectName}</li>`
        // Set new maxHeight for Aside projects
        maxHeight += 5.2;

        // Close the modal;
        modalAddNew.classList.remove('dialog--animation');
        setTimeout(() => {
            modalAddNew.close();
        }, 400);

        // Set addeventlistener to new created projects items
        controlProjectItems();
        controlMainProjectItems();

        // Max new projects are 2. When this happens, it deletes add-btn;
        addBtn.disabled = true;
        setTimeout(() => {

            addProjectItem.insertAdjacentHTML('beforebegin', newMainProjectItem);
            projectsList.insertAdjacentHTML('beforeend', newProjectItem);

            addedProjects += 1;
            if (addedProjects == 2) {
                addBtn.classList.add('scale-0');
                setTimeout(() => {
                    addBtn.remove();
                }, 500)
            }
        }, 600);

    });

    // Handles close modal with Close Button
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modalAddNew.classList.remove('dialog--animation');
        setTimeout(() => {
            modalAddNew.close();
            addNewForm.reset();
        }, 400);

    });
}


window.addEventListener('DOMContentLoaded', () => {
    overrideLinks();
    toggleProjectsList();
    addNewProject();
    controlProjectItems();
    controlMainProjectItems();
});
