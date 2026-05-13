import express from 'express';

const app =express();

app.get('/service',(req,res) =>{
    //Request
    const ip = req.ip;
    console.info(ip);
    //response
    res.json({
        status: 'ok',
        message: "aplikasi service jalan",
        data:{
            timestamp:new Date (Date.now())
        }
    });
});
app.get('/home' , (req, res) =>{
    res.send('<button>click me</buttton');
});


app.listen(3000, () => {
    console.info('aplikasi jalan di http://localhost:3000');
});