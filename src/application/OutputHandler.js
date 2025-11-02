import { printNumberOfPurchases, printPayedAutoLottos, printAutoLottosRank, printWinningRatio } from "../view/outputView.js";
export function printResults(lottoGame) {
    printNumberOfPurchases(lottoGame.purchaseAmount);
    printPayedAutoLottos(lottoGame.getPurchaseLottoNumbers());
    printAutoLottosRank(lottoGame.resultRankCounts);
    printWinningRatio(lottoGame.resultProfitRatio);
}
