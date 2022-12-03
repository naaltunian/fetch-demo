const router = require('express').Router()
const axios = require('axios')

router.get('/data/:username', async (req, res) => {
    const response = await axios.get(`https://api.github.com/users/${req.params.username}`)
    res.json(response.data)
})

let people = ['brad', 'john', 'hannah', 'bill']
router.get('/people', (req, res) => {
    res.json({ payload: people })
})

router.post('/people/add', (req, res) => {
    const { name } = req.body
    people.push(name)
    res.json({ payload: name })
})

module.exports = router