const User = require('../models/user');

exports.getTopicByUser = function(req, res, next) {
  const user = req.params.user;

  if (!user) {
    return res.status(422).send({ error: 'Invalid username' });
  }

  User.findOne({ email: user }, function(err, existingUser) {
    if (err) {
      return next(err);
    }
    if (existingUser) {
      res.json({ email: existingUser.email, topic: existingUser.topic });
    }
  });
};
