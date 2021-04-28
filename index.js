const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/', async (req, res) => { 
    try {
        const { data } =  await axios('http://jsonplaceholder.typicode.com/users')    
    
        return res.json(data)        
    } catch (error) {
        console.error(error)
    }
})


app.listen(60179, () => {
    console.log('working!!')
})
