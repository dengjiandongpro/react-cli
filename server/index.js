const fs = require('fs');
const path = require('path');
const express = require('express');
const template = fs.readFileSync(path.join(__dirname, '../dist/index.cshtml'), 'utf-8');

const server = (port) => {
    const app = express();

    app.use(express.static(path.join(__dirname, '../dist')));
    app.get('*', (req, res) => {
        const html = template;
        res.status(200).send(html);
    });

    app.listen(port, () => {
        console.log('Server is running on port:' + port);
    });
};

server(process.env.PORT || 3001);
