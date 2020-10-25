//Modules
const express = require('express');


const app = express();

//setting
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
app.use('/api/user', require('./routes/users'));

//starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
})