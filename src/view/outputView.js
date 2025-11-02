import { Console } from "@woowacourse/mission-utils";

function printNumberOfPurchases(numberOfPurchases) {
    Console.print(`${numberOfPurchases}개를 구매했습니다.`);
}

function printPayedAutoLottos(autoLottoNumberList) {
    autoLottoNumberList.forEach((autoLottoNumbers) => {
        Console.print(`[${autoLottoNumbers.join(", ")}]`);
    });
}

function printAutoLottosRank(autoLottosResult) {
    const RewardList = [
        "",
        `3개 일치 (5,000원)`,
        `4개 일치 (50,000원)`,
        `5개 일치 (1,500,000원)`,
        `5개 일치, 보너스 볼 일치 (30,000,000원)`,
        `6개 일치 (2,000,000,000원)`,
    ];
    RewardList.forEach((value, index) => {
        if (index === 0) return;
        Console.print(`${value} - ${autoLottosResult[index]}개`);
    });
}

function printWinningRatio(winningRatio) {
    Console.print(`총 수익률은 ${winningRatio}%입니다.`);
}

function printErrorMessage(error) {
    Console.print(error.message);
}

export { printNumberOfPurchases, printPayedAutoLottos, printAutoLottosRank, printWinningRatio, printErrorMessage };
