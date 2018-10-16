const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Blockchain = require('./simpleChain')
const Block = require('./block')
const chain = new Blockchain();

// App setup
const app = express();

// Logging incoming requests
app.use(morgan('combined'));

// Parse incoming requests
app.use(bodyParser.json({type: '*/*'}));

// Routes
app.get('/block/:blockheight', async (req, res) => {
  try {
    const response = await chain.getBlock(req.params.height)
    res.send(response)
  } catch (error) {
    res.status(404).json({
      "status": 404,
      "message": "Block not found"
    })
  }
})

app.post('/block', async (req, res) => {
  if (req.body.body === '' || req.body.body === undefined) {
    res.status(400).json({
      "status": 400,
      message: "Fill the body parameter"
    })
  }

  await chain.addBlock(new Block(req.body.body))
  const height = await chain.getBlockHeight()
  const response = await chain.getBlock(height)

  res.status(201).send(response)
});


// Server setup
const port = process.env.PORT || 8000;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on port ", port);