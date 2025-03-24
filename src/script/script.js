const toggle = document.querySelector(".toggleButton");
const toggleIcon = document.querySelector(".toggleIcon");
const aside = document.querySelector("aside");
let isClicked = true;


//Toggle sidebar
toggle.addEventListener("click", ()=> {

    //Changing src path of image when clicked.
    toggleIcon.setAttribute("src",  (isClicked) ? "./Icons/Close.svg" : "./Icons/Hamburger.svg");
    toggleIcon.setAttribute("alt",  (isClicked) ? "Menu Icon" : "Close Icon");
    document.querySelector(".ListTitle").classList.toggle("hidden");
    document.querySelector(".sidebarTaskList").classList.toggle("hidden");
    
    isClicked = !isClicked;

    //Animation to close side bar
    aside.classList.toggle(`-translate-x-[16.25vw]`);
});


//Storing data to local Storage
const addItembtn = document.querySelector(".addItembtn");
const closeAddTaskIcon = document.querySelector(".closeAddTaskIcon");

addItembtn.addEventListener("click", () => {
    document.querySelector(".titleFormDiv").classList.remove("hidden");
});

closeAddTaskIcon.addEventListener("click", () => {
    document.querySelector(".titleFormDiv").classList.add("hidden");
});

const AddTitleItemInput =document.querySelector(".AddTitleItemInput");
const AddTitleItem = document.querySelector(".AddTitleItem");

AddTitleItem.addEventListener("click",() => {   
     
    if(!localStorage.getItem("AddTitleItemTasks")){
        let AddTitleItemTasks = [];
        AddTitleItemTasks.push(AddTitleItemInput.value);
        localStorage.setItem("AddTitleItemTasks", JSON.stringify(AddTitleItemTasks));
    }else{
        AddTitleItemTasks = JSON.parse(localStorage.getItem("AddTitleItemTasks") || []);
        AddTitleItemTasks.push(AddTitleItemInput.value);
        localStorage.setItem("AddTitleItemTasks", JSON.stringify(AddTitleItemTasks));
    }
    updateSideBarTasks();

    AddTitleItemInput.value = "";
    document.querySelector(".titleFormDiv").classList.add("hidden");
});


// Reading data from local Storage and adding list items.
const sidebarTaskList = document.querySelector(".sidebarTaskList");

function updateSideBarTasks(){
    sidebarTaskList.innerHTML = "";
    let AddTitleItemTasks = JSON.parse(localStorage.getItem("AddTitleItemTasks") || "[]");
    
    AddTitleItemTasks.forEach(element => {
        const sidebarTaskItem = document.createElement("li");
        sidebarTaskItem.classList.add("group", "hover:bg-gray-200", "px-4", "py-2", "hover:text-gray-500", "rounded-xl", "cursor-pointer" ,"sidebarTaskListLI", "relative");
    
        sidebarTaskItem.innerHTML = `<a href="" class="flex justify-between items-center">
                                    <p class="overflow-hidden truncate title">${element}</p>
                                    <button class="cursor-pointer moreOptions hidden group-hover:block ">
                                        <img src="./Icons/ellipsis.svg" alt="" class="w-4">
                                    </button>
                                </a>
                                <div class="absolute top-0 -right-20 hidden deleteDiv duration-500">
                                    <button class="text-blue-400 bg-gray-300 px-5 py-2 rounded-lg deleteBtn cursor-pointer">Delete</button>
                                </div>`;
        sidebarTaskList.appendChild(sidebarTaskItem);
    });
}

updateSideBarTasks();

const sidebarTaskItemMoreOptions = document.querySelectorAll(".moreOptions");
const deleteBtn = document.querySelectorAll(".deleteBtn");


sidebarTaskItemMoreOptions.forEach(button => {
    button.addEventListener("mouseenter", function(){
        this.closest("li").querySelector(".deleteDiv").classList.toggle("hidden");
    });
    
    button.addEventListener("mouseleave", function(){
        setTimeout(()=>{
            this.closest("li").querySelector(".deleteDiv").classList.toggle("hidden");
        }, 500);
    });
});

deleteBtn.forEach(button => {
    button.addEventListener("click", function(){
        let AddTitleItemTasks = JSON.parse(localStorage.getItem("AddTitleItemTasks") || "[]");
        let taskName = this.closest("li").querySelector("p").textContent.trim();
        AddTitleItemTasks = AddTitleItemTasks.filter((item) => item != taskName);
        localStorage.setItem("AddTitleItemTasks", JSON.stringify(AddTitleItemTasks));
        this.closest("li").remove();
    })
});
