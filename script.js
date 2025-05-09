const input = document.getElementById("input"); // the input field

input.addEventListener("keyup", (event) => { // eventListener to check if user press "Enter"
    if(event.key == "Enter") {
        call(); // then call the function for the program
        input.value = "";
    }
});

const randomTasks = [
    "Eat a raw fish",
    "Do 50 pushups",
    "Go to the store and buy milk",
    "Play a game of chess",
    "Read a book",
    "Go fishing",
    "Explore the nearest forest",
    "Chop down a tree",
    "Drink some water",
    "Eat something",
    "Go out in the woods looking for a snake"
]

document.getElementById("randomTaskBtn").onclick = function() {
    main.innerHTML = `<div class="container">${randomTasks[Math.floor(Math.random() * randomTasks.length)]}</div>`;
}

function call() { // main function for the program
    const main = document.getElementById("main");
    if(input.value.toLowerCase() === "/clear") { // /clear command to remove every task
        while(main.firstChild) {
            main.removeChild(main.lastChild);
            input.value = "";
        }
        main.removeChild(main.lastChild);
    }

    const div = document.createElement("div"); // create a div
    div.innerHTML = input.value;
    div.className = "z container m10"; // z-index of 100, container (centered), margin-top 10px
    div.onclick = del; // click on the div to delete it via del() function
    main.appendChild(div); // display everything
}

function del() {main.removeChild(this);} // function to delete a task

// to open/close the help menu
document.getElementById("helpBtn").addEventListener("click", function () {
    const helpMenu = document.getElementById("help");
    if(helpMenu.style.display === "block") {  
       helpMenu.style.display = "none";
    } else {
       helpMenu.style.display = "block";
    }
});