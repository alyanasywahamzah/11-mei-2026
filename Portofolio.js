import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Web Portofolio Alya</h1>
        <p>Selamat datang di web portofolio saya</p>
    `);
});

app.get('/about', (req, res) => {
    res.json({
        status: 'ok',
        message: 'Tentang Saya',
        data: {
            nama: 'Alya Nasywa Hamzah',
            asal: 'German',
            profesi: 'Mahasiswa'
        }
    });
});

app.listen(5000, () => {
    console.info('Aplikasi jalan di http://localhost:5000')
});