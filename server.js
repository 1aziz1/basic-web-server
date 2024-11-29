const express = require ('express');
const path = require('path');

// initialize Express app

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));

//simple api route 

app.get('/api',(req, res)=>{

    res.json({message:"hello from the API!"});
})

//Root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

    app.listen(PORT, () => {

        console.log(`server is runing on http://localhost:${PORT}`);

    });
    