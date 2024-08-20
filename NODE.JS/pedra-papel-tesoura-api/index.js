const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const gameRoutes = require('./routes/game');
app.use('/api/game', gameRoutes);
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

