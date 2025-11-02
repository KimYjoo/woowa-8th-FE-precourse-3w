import { inputPayCash, inputBonusNumber, inputLotteryNumbers } from "../view/inputView.js";
import { printNumberOfPurchases, printPayedAutoLottos, printAutoLottosRank, printWinningRatio } from "../view/outputView.js";
import { calculatePayAmount, splitStringToNumberList, parseNumber } from "../utils/utils.js";
import LottoGame from "./lottoGame.js";

class App {
	async run() {
		const lottoGame = LottoGame.generateLottoGame();

		const payCash = await inputPayCash();
		const payAmount = calculatePayAmount(payCash);

		const lotteryNumbers = await inputLotteryNumbers();
		const splittedNumber = splitStringToNumberList(lotteryNumbers);

		const bonusNumber = await inputBonusNumber();
		const parsedBonus = parseNumber(bonusNumber);

		lottoGame.buyLotto({ count: payAmount, numbers: splittedNumber, bonus: parsedBonus });
		const lottoResult = lottoGame.getResultAllAutoLottos();
		const resultRatio = lottoGame.getLottoResult(lottoResult);
		printAutoLottosRank(lottoResult);
		printNumberOfPurchases(payAmount);
		printPayedAutoLottos(lottoGame.getAutoLottoNumberList());
		printWinningRatio(resultRatio);
	}
}

export default App;
