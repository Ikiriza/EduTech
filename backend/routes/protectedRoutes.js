// routes/protectedRoutes.js
const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.use(authMiddleware.authenticateToken);

router.get('/protected', (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
