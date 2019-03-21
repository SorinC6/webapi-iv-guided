const express = require('express');
const path = require('path');
const app = express();

const pathToBuildFolder = path.join(__dirname, 'build');
const pathToIndexHtml = path.join(pathToBuildFolder, 'index.html');

const PORT = process.env.PORT || 4000;

console.log(__dirname);
console.log(pathToIndexHtml);
console.log(pathToBuildFolder);

// 2- allow static assets to be served off of this folder (build)!!
app.use(express.static(pathToBuildFolder));

app.get('/', (req, res) => {
	// 1- res.sendFile
	res.sendFile(pathToIndexHtml);
});

app.listen(PORT, () => {
	console.log(`\n *** Server Running on http://localhost:${PORT} ***\n`);
});
