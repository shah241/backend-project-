require('dotenv').config()
const express = require('express')
const app = express()

const Githubdata = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://hitesh.ai",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 115,
  "public_gists": 5,
  "followers": 51588,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2025-10-11T17:17:56Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get('/twitter',(req,res) =>{
    res.send('shahzeb')
});
app.get('/Github',(req,res) =>{
    res.json(Githubdata)
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

