module.exports = (app) => {
    const post = require('../controllers/postController');

    // Create a new post
    app.post('/post', post.create);

    // Retrieve all post
    app.get('/post', post.findAll);

    // Retrieve a single post with postId
    app.get('/post/:postId', post.findOne);

    // Update a post with postId
    app.put('/post/:postId', post.update);

    // Delete a post with postId
    app.delete('/post/:postId', post.delete);
}