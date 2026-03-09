const myLibrary = [];



function Book (title, author, pages, read) {
    if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = self.crypto.randomUUID();
    this.info = function () {
        if (read === true){
            return `${title} by ${author}, ${pages} pages, read.`
        } else {
            return `${title} by ${author}, ${pages} pages, not read yet.`
        }
    }
}

function addToLibrary(title, author, pages, read) {
    const book = new Book(title,author,pages,read);
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());
console.log(theHobbit.id);

addToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)
addToLibrary("The Old Man and the Sea", "Ernest Hemingway", 112, true)
addToLibrary("Narnia", "C.S. Lewis", 816, false)
addToLibrary("A Grief Observed", "C.S. Lewis", 76, true)
addToLibrary("The Karamazov brothers", "Fiódor Dostoyevski", 1056, true)
addToLibrary("Twilight", "Stephanie Meyer", 549, false)
addToLibrary("El Camino", "Miguel Delibes", 208, true)
addToLibrary("La Impaciencia del Corazón", "Stefan Zweig", 472, true)
addToLibrary("La Voz a Ti Debida", "Pedro Salinas", 127, false)
console.log(myLibrary);

const cardContainer = document.querySelector(".cards");

myLibrary.forEach((element) => {
    const card = document.createElement("div");
    card.classList = "card";
    const name = document.createElement("p");
    const namePrint = document.createElement("span");
    const author = document.createElement("p");
    const authorPrint = document.createElement("span");
    const pages = document.createElement("p");
    const pagesPrint = document.createElement("span");
    const read = document.createElement("p");
    const readPrint = document.createElement("span");
    const removeButton = document.createElement("button");
    removeButton.classList = "remove";
    cardContainer.appendChild(card);
    card.appendChild(name);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeButton);
    name.textContent = `Title: `;
    name.appendChild(namePrint)
    namePrint.textContent = element.title;
    author.textContent = `Author: `;
    author.appendChild(authorPrint);
    authorPrint.textContent = element.author;
    pages.textContent = `Number of pages: `;
    pages.appendChild(pagesPrint)
    pagesPrint.textContent = element.pages;
    read.textContent = "Read: ";
    read.appendChild(readPrint);
    readPrint.textContent = element.read === true ? "Yes" : "No";
    removeButton.textContent = "Remove"
})

const newBook = document.querySelector(".add");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close");

newBook.addEventListener("click", () => {
    dialog.showModal();
})

closeButton.addEventListener("click", () => {
    closeButton.parentElement.close();
})

const submit = document.querySelector(".submit");

const subName = document.querySelector("#title")
const subAuthor = document.querySelector("#author")
const subPages = document.querySelector("#pages")
const subRead = document.querySelector("#read")
console.log(subName.value)
console.log(subRead.checked)


submit.addEventListener("click", (event) => {
    console.log(subName.value)
    console.log(subRead.checked)
    addToLibrary(subName.value, subAuthor.value, subPages.value, subRead.checked);
    event.preventDefault();
})
