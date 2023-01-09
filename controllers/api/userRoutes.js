const router = require('express').Router();
const { User } = require('../../models');

// Creates new user
router.post('/', async (req, res) => {
  try {
    // creates object based on the request body and stores in database
    const userData = await User.create(req.body);

    // Set up sessions with a 'loggedIn' variable and 'userid variable 
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;