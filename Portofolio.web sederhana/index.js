import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = 5000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// baca folder public
app.use(express.static('public'))

// halaman utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

// endpoint about
app.get('/about', (req, res) => {
    res.json({
        status: 'success',
        message: 'Tentang Saya',
        data: {
            nama: 'Alya',
            profesi: 'Mahasiswa',
            belajar: 'Express.js'
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`)
})