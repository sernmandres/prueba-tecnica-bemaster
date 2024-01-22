const express = require('express')
require('dotenv').config()
const axios = require('axios')
const performance = require('performance-now') //  Para revisar tiempo de respuesta que se toma capturar los 10 primeros repositorios
const app = express()
const PORT = 3000
const API_KEY = process.env.API_KEY_GITHUB

app.get('/google-top-ten-repositories', async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')
    const start = performance()

    const response = await axios.get('https://api.github.com/search/repositories', {
      params: {
        q: 'user:google',
        sort: 'stars',
        order: 'desc'
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`
      }
    })

    const end = performance()
    const elapsedTime = end - start
    console.log('total repositories: ', response.data.total_count)
    console.log(`response time: ', ${elapsedTime.toFixed(2)} ms `)
    const googleTopTenRepositories = response.data.items.slice(0, 10)
    res.send(JSON.stringify({
      googleTopTenRepositories
    }, null, 2))
  } catch (error) {
    console.error('Error to get the repositories', error.message)
    res.status(500).send('Internal server Error')
  }
})

app.listen(PORT, () => {
  console.log(`Server on: http://localhost:${PORT}`)
})
