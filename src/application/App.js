import { printErrorMessage } from "../view/outputView.js";
import { getValidInputs } from "./InputHandler.js";
import LottoGame from "../lottoGame/LottoGame.js";
import { printResults } from "./OutputHandler.js";

class App {
    #lottoGame;

    async run() {
        try {
            this.#lottoGame = LottoGame.generateLottoGame();
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
