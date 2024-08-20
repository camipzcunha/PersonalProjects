const express = require('express');
const router = express.Router();

function determineWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 'Empate';
    }
    switch (playerChoice){
        case 'pedra':
            return computerChoice === 'tesoura' ? 'Você venceu' : 'Você perdeu';
        case 'papel':
            return computerChoice === 'pedra' ? 'Você venceu' : 'Você perdeu';
        case 'tesoura':
            return computerChoice === 'papel' ? 'Você venceu' : 'Você perdeu';
        default:
            return 'Escolha inválida';
    }

}

function getComputerChoice(){
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

router.post('/play', (req, res) => {
    const { playerChoice } = req.body;
    const validChoices = ['pedra', 'papel', 'tesoura'];

    if(!validChoices.includes(playerChoice)){
        return res.status(400).json({ message: 'Escolha inválida' });
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    res.json({
        playerChoice,
        computerChoice,
        result
    });
});

module.exports = router;
