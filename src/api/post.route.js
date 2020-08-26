const express = require('express');
const postRoutes = express.Router();

// Require Post model in our routes module
let Post = require('./post.model');
const e = require('express');

// define store route
postRoutes.route('/add').post(function (req, res) {
    let post = new Post(req.body)
    post.save().then(() => {
        res.status(200).json({'business' : 'business added succesfully!'})
    })
    .catch(() => {
        res.status(400).send('unable to save to database')
    })
})

//define get data index or listing route
postRoutes.route('/').get(function (req, res) {
    Post.find(function(err, posts){
        if(err) {
            res.json(err)
        } else {
            res.json(posts)
        }
    })
})

//defined edit rotue
postRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id
    Post.findById(id, function (err, post) {
        if(err) {
            res.json(err)
        }
        res.json(post)
    })
})

//define update function
postRoutes.route('/update/:id').post(function (req, res) {
    let id = req.params.id
    Post.findById(id, function(err, post) {
        if(!post) {
            res.status(404).send("data not found!");
        } else {
            post.title = req.body.title
            post.body = req.body.body
            post.save().then(() => {
                res.json('post updated!')
            })
            .catch(() => {
                res.status(400).send('unable to update post')
            })
        }
    })
})

//define delete, remove or destroy
postRoutes.route('/delete/:id').delete(function (req, res) {
    Post.findByIdAndRemove({_id: req.params.id}, function(err) {
        if(err) res.json(err)
        else res.json('Succesfully removed!');
    })
})

module.exports = postRoutes;