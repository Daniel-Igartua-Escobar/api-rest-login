const { Router } = require('express');
const router = Router();

const users = require('../mocks/users.json')

router.post('/', (req, res) => {
  const { email, password } = req.body;
  const currentUser = users.find( user => user.email === email);
  if (currentUser) {
    if (currentUser.password == password) {
      const lastConnection = currentUser.lastConnection;
      res.status(200).json({lastConnection});
    } else {
      res.status(302).json({error: 'password'});
    }
  } else {
    res.status(302).json({error: 'email'});
  }
})

router.put('/', (req, res) => {
  const { email, lastConnection } = req.body;
  if (email && lastConnection) {
    users.forEach((user, i) => {
      if (user.email === email) {
        user.lastConnection = lastConnection;
        res.status(200).json({message: 'updated'});
      }
    })
  } else {
    res.status(500).json({error: 'Wrong Request'});
  }
})

module.exports = router;