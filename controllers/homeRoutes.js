const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all the posts and JOIN with user data
      const postData = await Post.findAll({
        include: [{ model: User }],
      });
      
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('homepage', {
        posts,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: User }, { model: Comment }],
      });
  
      const post = postData.get({ plain: true });

      let match = false;
      if (req.session.user_id == post.user_id) {
        match = true;
      }
  
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in,
        match
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  let match = false;
  if (req.session.user_id == post.user_id) {
 router.get('/dashboard', withAuth, async (req, res) => {
  // Find the logged in user based on the session ID
  const userData = await User.findByPk(req.session.user_id, {
    attributes: { exclude: ['password'] },
    include: [{ model: Post },],
  });

  const user = userData.get({ plain: true });
}
};
