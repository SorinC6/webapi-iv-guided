const server = require('./api/server.js');
const PORT = process.env.PORT || 8000;

server.listen(PORT || 4000, () => {
	console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
