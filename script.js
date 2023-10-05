// Initialize the library array
const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Function to display books
function displayBooks() {
    const libraryElement = document.getElementById('library');
    libraryElement.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button class="remove" data-index="${index}">Remove</button>
            <button class="toggle-read" data-index="${index}">Toggle Read</button>
        `;
        libraryElement.appendChild(bookCard);
    });

    // Add event listeners to remove and toggle read buttons
    const removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            myLibrary.splice(index, 1);
            displayBooks();
        });
    });

    const toggleReadButtons = document.querySelectorAll('.toggle-read');
    toggleReadButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = button.dataset.index;
            myLibrary[index].read = !myLibrary[index].read;
            displayBooks();
        });
    });
}

// Function to handle form submission
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    addBookToLibrary(title, author, pages, read);
    displayBooks();
    document.getElementById('modal').style.display = 'none';
});

// Function to show the form modal
document.getElementById('newBook').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'block';
});

// Function to close the form modal
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Initial manual book entries (optional)
addBookToLibrary('Book 1', 'Author 1', 300, true);
addBookToLibrary('Book 2', 'Author 2', 200, false);

// Display initial books
displayBooks();
