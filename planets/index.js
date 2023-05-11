const server = require("./src/server");

const PORT=8003;
server.listen(PORT, () => {
  console.log(`Planets Server listening on port ${PORT}`);
});
