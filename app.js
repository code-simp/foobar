const Express = require('express');
const app = Express();

app.get('/', (req, res) => {
    const a = 2;
    res.send(`${a}`);
});

app.listen(3001, () => {
    console.log('Server started on port 3001');
});