const express = require('express')
const http = require('http')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const allUsers = [
  {
    id: 1,
    name: 'Felipe'
  },
  {
    id: 2,
    name: 'Davi'
  }
]

const allPosts = [
  {
    id: 1,
    userId: 1,
    title: 'post 1'
  },
  {
    id: 2,
    userId: 1,
    title: 'post 2 for user 1'
  },
  {
    id: 3,
    userId: 1,
    title: 'post 3 for user 1'
  },
  {
    id: 4,
    userId: 2,
    title: 'post 1 for user 2'
  }
]

app.get('/users', (req, res) => {
  res.send(allUsers)
})

app.get('/posts', (req, res) => {
  const userId = req.body.id
  res.send(allPosts)
})

app.post('/posts', (req, res) => {
  const { id, userId, title } = req.body
  allPosts.push(
    {
      id,
      userId,
      title
    }
  )
  res.status(201).send(allPosts)
})

const server = http.createServer(app)
const port = 3000
server.listen(port)
console.log(`Running on http://localhost:${port}`)