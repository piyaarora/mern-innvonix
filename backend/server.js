const express = require('express');
const connectDB = require('./config/db')
const path = require('path')

const app = express();

// connect to database
connectDB();

// init middleware
app.use(express.json({extended:false}))


app.get( '/',(req,res)=>res.json({
    msg:"working"
}) );

app.get("/images/:id", (req, res) => {
    const { id } = req.params;
    res.sendFile(path.join(__dirname, `./uploads/${id}`));
});

app.use('/api/users', require('./routes/users')) 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/event'))


const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});