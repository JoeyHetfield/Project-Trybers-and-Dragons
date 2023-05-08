import Character from './Character';
import Monster from './Monster';
import Dragon from './Dragon';
import PVP from './Battle/PVP';
import PVE from './Battle/PVE';

const player1 = new Character('Naruto');
const player2 = new Character('Tenshinhan');
const player3 = new Character('Zoro');

for (let i = 0; i < 16; i += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player1, player2);

const pve = new PVE(player1, [monster1, monster2]);

export { player1, player2, player3, monster1, monster2, pvp, pve };