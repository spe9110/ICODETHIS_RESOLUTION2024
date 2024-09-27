// Add JavaScript code here
const projectsContainer = document.querySelector(".projects-container");
const addBtn = document.querySelector(".add");
const addProjectContainer = document.querySelector(".add-project");
const addForm = addProjectContainer.querySelector(".add-form");
const projectInput = addForm.querySelector("input");
const overlay = document.querySelector(".overlay");

const colors = [
  "#FFB658",
    "#FF8158",
      "#58AEFF",
        "#B058FF",
          "#9AD045",
            "#FF589C"
            ];

            const generateProjects = () => {
              const projects = document.querySelectorAll(".projects>li");
                // Clear existing projects
                  clearChildrenExceptAddBtn(projectsContainer);

                    projects.forEach((project) => {
                        const projectName = project.textContent;
                            const color = window.getComputedStyle(project).getPropertyValue("--clr");
                                const Project = document.createElement("div");
                                    Project.className = "max-w-[7em]";
                                        Project.innerHTML = `
                                             <div class="w-28 h-28 rounded-2xl text-3xl grid place-items-center bg-[${color}] mb-2 font-black text-white shadow-lg shadow-[${color}90]">${projectName
                                                   .split(" ")
                                                         .filter(
                                                                 (word) =>
                                                                           !["a", "an", "and", "of", "the", "is", "for"].includes(
                                                                                       word.toLowerCase()
                                                                                                 )
                                                                                                       )
                                                                                                             .map((word) => word.charAt(0))
                                                                                                                   .join("")}</div>
                                                                                                                               <p class="text-xs font-medium text-center">${projectName}</p>
                                                                                                                                   `;

                                                                                                                                       projectsContainer.insertBefore(Project, addBtn);
                                                                                                                                         });
                                                                                                                                         };

                                                                                                                                         addBtn.addEventListener("click", () => {
                                                                                                                                           [addProjectContainer, overlay].forEach((t) => t.classList.add("active"));
                                                                                                                                           });

                                                                                                                                           document.querySelector(".close").addEventListener("click", () => {
                                                                                                                                             [addProjectContainer, overlay].forEach((t) => t.classList.remove("active"));
                                                                                                                                             });

                                                                                                                                             addForm.addEventListener("submit", (e) => {
                                                                                                                                               e.preventDefault();
                                                                                                                                                 const projectName = projectInput.value;
                                                                                                                                                   if (projectName === "" || projectName == null) return;

                                                                                                                                                     // Create a new project list item
                                                                                                                                                       const project = document.createElement("li");
                                                                                                                                                         project.style.setProperty(
                                                                                                                                                             "--clr",
                                                                                                                                                                 colors[Math.floor(Math.random() * colors.length)]
                                                                                                                                                                   );
                                                                                                                                                                     project.innerText = projectName;

                                                                                                                                                                       // Append the new project to the projects list
                                                                                                                                                                         document.querySelector(".projects").appendChild(project);
                                                                                                                                                                           generateProjects();
                                                                                                                                                                             // Clear form and generate updated projects
                                                                                                                                                                               [addProjectContainer, overlay].forEach((t) => t.classList.remove("active"));
                                                                                                                                                                                 projectInput.value = "";
                                                                                                                                                                                 });

                                                                                                                                                                                 function clearChildrenExceptAddBtn(container) {
                                                                                                                                                                                   // Iterate over children and remove them except addBtn
                                                                                                                                                                                     for (let i = container.children.length - 1; i >= 0; i--) {
                                                                                                                                                                                         const child = container.children[i];
                                                                                                                                                                                             if (child !== addBtn) {
                                                                                                                                                                                                      container.removeChild(child);
                                                                                                                                                                                                          }
                                                                                                                                                                                                            }
                                                                                                                                                                                                            }

generateProjects();
                                                                                                                                                                                                            