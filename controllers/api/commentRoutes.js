const router = require('express').Router();
const { Comment, User, Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      // Get all comments and JOIN with user data
      const commentData = await Comment.findAll({
        include: [{ model: User }, { model: Post }],
      });
  
      //template can read data
      const comments = commentData.map((comment) => comment.get({ plain: true }));
      console.log(comments);
      res.status(200);
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.post('/', withAuth, async (req, res) => {
    try {
        
        const newComment = await Comment.create({
          ...req.body,
          user_id: req.session.user_id, 
        }
  });

  router.delete('/:id', withAuth, async (req, res) => {
    try { 

    },
}); 