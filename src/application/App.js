import { inputPayCash, inputBonusNumber, inputLotteryNumbers } from "../view/inputView.js";
import { printNumberOfPurchases, printPayedAutoLottos, printAutoLottosRank, printWinningRatio } from "../view/outputView.js";
import { calculatePayAmount, splitStringToNumberList, parseNumber } from "../utils/utils.js";
import LottoGame from "../lottoGame/LottoGame.js";

class App {
	#lottoGame;

	async run() {
		this.#lottoGame = LottoGame.generateLottoGame();

		const payAmount = await this.#handlePurchaseCashInput();
		const userNumbers = await this.#handleLottoNumbersInput();
		const bonusNumber = await this.#handleBonusNumberInput();

		this.#lottoGame.drawAmountOfLottos(payAmount);
		this.#lottoGame.enterUserLottoInformation(userNumbers, bonusNumber);
		this.#lottoGame.calculateResultOfLottos();

		this.#printResults();
	}

	async #handlePurchaseCashInput() {
		const payCash = await inputPayCash();
		return calculatePayAmount(payCash);
	}
	async #handleLottoNumbersInput() {
		const lotteryNumbers = await inputLotteryNumbers();
		return splitStringToNumberList(lotteryNumbers);
	}
	async #handleBonusNumberInput() {
		const bonusNumber = await inputBonusNumber();
		return parseNumber(bonusNumber);
	}
	async #printResults() {
		printWinningRatio(this.#lottoGame.resultProfitRatio);
		printNumberOfPurchases(this.#lottoGame.purchaseAmount);
		printPayedAutoLottos(this.#lottoGame.getPurchaseLottoNumbers());
		printAutoLottosRank(this.#lottoGame.resultRankCounts);
	}
}

export default App;
