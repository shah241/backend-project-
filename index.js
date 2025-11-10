require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/twitter',(req,res) =>{
    res.send('shahzeb')
});
//git a list of jokes
app.get('/jokes',(req,res) =>{
  const jokes = [
    {
      id:1,
      title:'A joke',
      content:'this is a joke'
    },
    {
      id:2,
      title:'Another joke',
      content:'this is another joke'
    },
    {
      id:2,
      title:'Another joke',
      content:'This is another joke'
    },
    {
      id:3,
      title:'A third joke',
      content:'this is third joke'
    },
  ];
  res.send(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`)
})

