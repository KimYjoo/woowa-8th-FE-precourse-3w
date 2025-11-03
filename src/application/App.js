import { printErrorMessage } from "../view/outputView.js";
import { getValidInputs } from "./InputHandler.js";
import LottoGame from "../lottoGame/LottoGame.js";
import { printResults } from "./OutputHandler.js";

class App {
    #lottoGame;

    constructor() {
        this.#lottoGame = LottoGame.generateLottoGame();
    }

    async run() {
        try {
            const validInput = await getValidInputs();

            this.#lottoGame.processGame(validInput);

            printResults(this.#lottoGame);
        } catch (error) {
            printErrorMessage(error);
        }
    }
}

export default App;
