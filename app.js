const Express = require('express');
const app = Express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const a = 2;
    res.json({ a });
});

// app.listen(3001, () => {
//     console.log('Server started on port 3001');
// });

module.exports = app;