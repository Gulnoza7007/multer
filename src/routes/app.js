import { Router } from 'express'

const app = Router()

app.get('/', async (req, res) => {
    const success = req.query.success === '1'
    res.render('index', { success })
})
app.get('/uploads', async (req, res) => {
    res.render('uploads')
})

export default app
