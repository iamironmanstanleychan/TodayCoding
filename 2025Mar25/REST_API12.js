/*
Key Notes:
Mock Data: This example uses in-memory arrays (books, authors, categories, reviews) to store data. In a real-world application, you would use a database.
Validation: Add proper validation for incoming requests using libraries like Joi or express-validator.
Error Handling: Enhance error handling for better user feedback.
Relationships: The example includes relationships like linking reviews to books.
You can run this code by installing express using npm install express and then executing the file with node REST_API12.js.
*/

const express = require('express');
const app = express();
app.use(express.json());

// Mock data
let books = [];
let authors = [];
let categories = [];
let reviews = [];

// Books Endpoints
// Create a new book
app.post('/api/books', (req, res) => {
    const book = { id: books.length + 1, ...req.body };
    books.push(book);
    res.status(201).send(book);
});

// Get all books
app.get('/api/books', (req, res) => {
    res.send(books);
});

// Get a specific book by ID
app.get('/api/books/:bookId', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.bookId));
    if (!book) return res.status(404).send('Book not found');
    res.send(book);
});

// Update a book by ID
app.put('/api/books/:bookId', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.bookId));
    if (!book) return res.status(404).send('Book not found');
    Object.assign(book, req.body);
    res.send(book);
});

// Delete a book by ID
app.delete('/api/books/:bookId', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.bookId));
    if (bookIndex === -1) return res.status(404).send('Book not found');
    books.splice(bookIndex, 1);
    res.status(204).send();
});

// Authors Endpoints
// Create a new author
app.post('/api/authors', (req, res) => {
    const author = { id: authors.length + 1, ...req.body };
    authors.push(author);
    res.status(201).send(author);
});

// Get all authors
app.get('/api/authors', (req, res) => {
    res.send(authors);
});

// Get a specific author by ID
app.get('/api/authors/:authorId', (req, res) => {
    const author = authors.find(a => a.id === parseInt(req.params.authorId));
    if (!author) return res.status(404).send('Author not found');
    res.send(author);
});

// Update an author by ID
app.put('/api/authors/:authorId', (req, res) => {
    const author = authors.find(a => a.id === parseInt(req.params.authorId));
    if (!author) return res.status(404).send('Author not found');
    Object.assign(author, req.body);
    res.send(author);
});

// Delete an author by ID
app.delete('/api/authors/:authorId', (req, res) => {
    const authorIndex = authors.findIndex(a => a.id === parseInt(req.params.authorId));
    if (authorIndex === -1) return res.status(404).send('Author not found');
    authors.splice(authorIndex, 1);
    res.status(204).send();
});

// Categories Endpoints
// Create a new category
app.post('/api/categories', (req, res) => {
    const category = { id: categories.length + 1, ...req.body };
    categories.push(category);
    res.status(201).send(category);
});

// Get all categories
app.get('/api/categories', (req, res) => {
    res.send(categories);
});

// Get a specific category by ID
app.get('/api/categories/:categoryId', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.categoryId));
    if (!category) return res.status(404).send('Category not found');
    res.send(category);
});

// Update a category by ID
app.put('/api/categories/:categoryId', (req, res) => {
    const category = categories.find(c => c.id === parseInt(req.params.categoryId));
    if (!category) return res.status(404).send('Category not found');
    Object.assign(category, req.body);
    res.send(category);
});

// Delete a category by ID
app.delete('/api/categories/:categoryId', (req, res) => {
    const categoryIndex = categories.findIndex(c => c.id === parseInt(req.params.categoryId));
    if (categoryIndex === -1) return res.status(404).send('Category not found');
    categories.splice(categoryIndex, 1);
    res.status(204).send();
});

// Reviews Endpoints
// Create a new review for a book
app.post('/api/books/:bookId/reviews', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.bookId));
    if (!book) return res.status(404).send('Book not found');
    const review = { id: reviews.length + 1, bookId: book.id, ...req.body };
    reviews.push(review);
    res.status(201).send(review);
});

// Get all reviews for a book
app.get('/api/books/:bookId/reviews', (req, res) => {
    const bookReviews = reviews.filter(r => r.bookId === parseInt(req.params.bookId));
    res.send(bookReviews);
});

// Get a specific review by ID
app.get('/api/reviews/:reviewId', (req, res) => {
    const review = reviews.find(r => r.id === parseInt(req.params.reviewId));
    if (!review) return res.status(404).send('Review not found');
    res.send(review);
});

// Update a review by ID
app.put('/api/reviews/:reviewId', (req, res) => {
    const review = reviews.find(r => r.id === parseInt(req.params.reviewId));
    if (!review) return res.status(404).send('Review not found');
    Object.assign(review, req.body);
    res.send(review);
});

// Delete a review by ID
app.delete('/api/reviews/:reviewId', (req, res) => {
    const reviewIndex = reviews.findIndex(r => r.id === parseInt(req.params.reviewId));
    if (reviewIndex === -1) return res.status(404).send('Review not found');
    reviews.splice(reviewIndex, 1);
    res.status(204).send();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

