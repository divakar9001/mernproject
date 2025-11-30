const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
require('./database/mydb')
const app = express();     // <-- THIS IS THE PRIORITY (CORRECT PLACE)

app.use(express.json());
app.use(cors());

app.use(require('./routing/approuting'));

const port = process.env.PORT || 7700;
app.listen(port, () => {
    console.log('Server running on port', port);
});
