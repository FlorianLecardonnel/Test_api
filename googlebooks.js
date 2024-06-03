const query = 'Harry Potter';
const maxResults = 20;
const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxResults}`;

function fetchBooks() {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => data.items || [])
        .catch(error => {
            console.error(error);
            return [];
        });
}

function displayBooks(books) {
    const booksListElement = document.getElementById('listeLivres');
    booksListElement.innerHTML = books.map(book => {
        const { title = 'No title', authors = ['No authors'], publishedDate = 'No date', description = 'No description', imageLinks } = book.volumeInfo || {};
        const thumbnail = imageLinks?.thumbnail || '';
        return `
            <div class="book">
                ${thumbnail ? `<img src="${thumbnail}" alt="${title} cover image">` : ''}
                <h2>${title}</h2>
                <p>Authors: ${authors.join(', ')}</p>
                <p>Published Date: ${publishedDate}</p>
                <p>Description: ${description}</p>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    fetchBooks().then(books => displayBooks(books));
});


