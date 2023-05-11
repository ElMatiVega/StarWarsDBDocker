const server = require("./src/server");

const PORT=8002;
server.listen(PORT, () => {
  console.log(`Films Server listening on port ${PORT}`);
});
