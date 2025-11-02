import { inputPayCash, inputBonusNumber, inputLotteryNumbers } from "../view/inputView.js";
import { printNumberOfPurchases, printPayedAutoLottos, printAutoLottosRank, printWinningRatio, printErrorMessage } from "../view/outputView.js";
import { calculatePayAmount, splitStringToNumberList, parseNumber } from "../utils/utils.js";
import { validatePriceInput, validateNumbersInput, validateBonusInput } from "./InputValidator.js";
import LottoGame from "../lottoGame/LottoGame.js";

class App {
    #lottoGame;

    async run() {
        try {
            this.#lottoGame = LottoGame.generateLottoGame();
            const payAmount = await this.#inputValidateHandler(this.#handlePurchaseCashInput);
            const userNumbers = await this.#inputValidateHandler(this.#handleLottoNumbersInput);
            const bonusNumber = await this.#inputValidateHandler(this.#handleBonusNumberInput);

            this.#lottoGame.drawAmountOfLottos(payAmount);
            this.#lottoGame.enterUserLottoInformation(userNumbers, bonusNumber);
            this.#lottoGame.calculateResultOfLottos();

            this.#printResults();
        } catch (error) {
            printErrorMessage(error);
            // throw error;
        }
    }
    async #inputValidateHandler(inputHandler) {
        try {
            const input = await inputHandler();
            return input;
        } catch (error) {
            printErrorMessage(error);
            return this.#inputValidateHandler(inputHandler);
        }
    }
    async #handlePurchaseCashInput() {
        const payCash = await inputPayCash();
        validatePriceInput(payCash);
        return calculatePayAmount(payCash);
    }
    async #handleLottoNumbersInput() {
        const lotteryNumbers = await inputLotteryNumbers();
        validateNumbersInput(lotteryNumbers);
        return splitStringToNumberList(lotteryNumbers);
    }
    async #handleBonusNumberInput() {
        const bonusNumber = await inputBonusNumber();
        validateBonusInput(bonusNumber);
        return parseNumber(bonusNumber);
    }
    async #printResults() {
        printNumberOfPurchases(this.#lottoGame.purchaseAmount);
        printPayedAutoLottos(this.#lottoGame.getPurchaseLottoNumbers());
        printAutoLottosRank(this.#lottoGame.resultRankCounts);
        printWinningRatio(this.#lottoGame.resultProfitRatio);
    }
}

export default App;
