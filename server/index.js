const cors = require('cors');
const express = require('express');
const connectDB = require('./config/database')
const { graphqlHTTP } = require('express-graphql');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const colors = require('colors');
const schema = require('./schema/schema');

// Connect to Database
connectDB();

// Handle cors
app.use(cors());

// Set up graphQL
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV === 'development',
}));

app.listen(port, console.log(`Server listening on port ${port}`))