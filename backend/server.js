const express = require('express');
const connectDB = require('./config/db')

const app = express();

// connect to database
connectDB();

// init middleware
app.use(express.json({extended:false}))


app.get( '/',(req,res)=>res.json({
    msg:"working"
}) );


app.use('/api/users', require('./routes/users')) 
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/event'))


const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});