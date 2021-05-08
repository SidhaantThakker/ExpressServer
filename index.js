const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();



// Init Middleware
// app.use(logger);

// Set Static Folder
app.use(express.static(path.join(__dirname,'public')));

// Members API Routes
app.use('/api/members',require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started on port", PORT);
})