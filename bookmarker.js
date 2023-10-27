let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];
let newItem = {
    name: "",
    url: ""
}

let nameEl = document.getElementById("siteNameInput")
let urlEl = document.getElementById("siteUrlInput")
let nameErrMsg = document.getElementById("siteNameErrMsg")
let urlErrMsg = document.getElementById("siteUrlErrMsg")
let formElement = document.getElementById("bookmarkForm")
let listContainer = document.getElementById("bookmarksList");
nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsg.textContent = "Required *"
    } else {
        nameErrMsg.textContent = ""


    }
    newItem.name = event.target.value


})
urlEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        urlErrMsg.textContent = "Required *"
    } else {
        urlErrMsg.textContent = ""

    }
    newItem.url = event.target.value


})
let addToBookMark = function(item) {
    let listElement = document.createElement("li")
    listContainer.appendChild(listElement);
    listElement.classList.add("d-flex", "flex-row", "card3", "m-3", "p-3")
    let siteName = document.createElement("h1")
    siteName.textContent = item.name;
    listElement.appendChild(siteName)
    siteName.classList.add("heading3")
    let buttonContainer = document.createElement("div")
    buttonContainer.classList.add("button-container")
    listElement.appendChild(buttonContainer)
    let linkElement = document.createElement("a")
    linkElement.href = urlEl.value
    linkElement.target = "_blank"

    buttonContainer.appendChild(linkElement)

    let button1 = document.createElement("button")
    button1.classList.add("btn", "btn-primary")
    button1.textContent = "Visit";
    linkElement.appendChild(button1);





}

function validateItem(newItem) {
    let {
        name,
        url
    } = newItem


    if (name === "") {
        nameErrMsg.textContent = "required"
    }
    if (url === "") {
        urlErrMsg.textContent = "required"


    }







}
for (let item of bookmarks) {
    addToBookMark(item)
}

formElement.addEventListener("submit", function(event) {
    event.preventDefault()
    validateItem(newItem)
    addToBookMark(newItem)




})