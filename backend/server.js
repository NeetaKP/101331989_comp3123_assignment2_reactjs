const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');
const employeeRoutes = require('./routes/employees');
const mongoose = require('mongoose');
const auth = require("./middleware/auth");

const app = express();
const SERVER_PORT = 8084;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const DATABASE_CONN = "mongodb+srv://neetukoirala:SNQpRlXPGg2piEgO@cluster0.thpsb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DATABASE_CONN, {
    useNewUrlParser:true,
    useUnifiedTopology:true
})

app.route('/').get((req, res) => {
    res.send('<h1>COMP3123 - Assignment1</h1>');
})

app.use('/api/v1/emp', employeeRoutes, auth);
app.use('/api/v1/user', userRoutes);

app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`);
})