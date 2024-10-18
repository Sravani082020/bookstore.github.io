function searchBooks() {
    const input = document.getElementById('searchBar');
    const filter = input.value.toLowerCase();
    const books = document.querySelectorAll('.book');

    books.forEach(book => {
        const title = book.querySelector('h3').innerText.toLowerCase();
        const author = book.querySelector('p').innerText.toLowerCase();
        if (title.includes(filter) || author.includes(filter)) {
            book.style.display = '';
        } else {
            book.style.display = 'none';
        }
    });
}
