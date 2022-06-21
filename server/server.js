const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) =>{
  return res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.listen(PORT, ()=>{
  console.log(`Server on listening on port: ${PORT}`);
})