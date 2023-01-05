const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{model: User }, { model: Comment}],
       
    });
}});

    const post = postData.get({ plain: true });


    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
    