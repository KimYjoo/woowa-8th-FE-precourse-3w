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
            const { payAmount, userNumbers, bonusNumber } = await getValidInputs();

            this.#lottoGame.drawAmountOfLottos(payAmount);
            this.#lottoGame.enterUserLottoInformation(userNumbers, bonusNumber);
            this.#lottoGame.calculateResultOfLottos();

            printResults(this.#lottoGame);
        } catch (error) {
            printErrorMessage(error);
            // throw error;
        }
    }
}

export default App;
