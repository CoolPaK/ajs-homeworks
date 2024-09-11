import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './js/game';

const game = new Game();
game.start();