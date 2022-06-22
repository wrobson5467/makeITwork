const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

/**
 * handle parsing request body
 */
app.use(express.json());

const userRouter = require('./routes/user.js');


const applicationRouter = require('./routes/application.js');

app.use('/user', userRouter);
app.use('/app', applicationRouter);


app.get('/', (req, res) =>{
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});



app.use((req, res) => res.sendStatus(400));


//error handle
app.use((err, req, res, next) =>{
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: {err: 'An error occured'}
  }
  const errorObj = Object.assign(defaultErr, err);
  console.log('error log is: ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});



app.listen(PORT, ()=>{
  console.log(`Server on listening on port: ${PORT}`);
})