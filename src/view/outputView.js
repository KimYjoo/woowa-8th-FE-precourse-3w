import { Console } from "@woowacourse/mission-utils";
import { REWARD_LIST, OutputMessage } from "../constants/message/Output.js";

function printNumberOfPurchases(numberOfPurchases) {
    Console.print(`${numberOfPurchases}개를 구매했습니다.`);
}

function printPayedAutoLottos(autoLottoNumberList) {
    autoLottoNumberList.forEach((autoLottoNumbers) => {
        Console.print(
            `${OutputMessage.AUTO_LOTTO_PREFIX}${autoLottoNumbers.join(OutputMessage.AUTO_LOTTO_DELIMITER)}${OutputMessage.AUTO_LOTTO_SUFFIX}`
        );
    });
}

function printAutoLottosRank(autoLottosResult) {
    REWARD_LIST.forEach((value, index) => {
        if (index === 0) return;
        Console.print(`${value}${OutputMessage.RANK_MESSAGE_DELIMITER}${autoLottosResult[index]}${OutputMessage.RANK_MESSAGE_SUFFIX}`);
    });
}

function printWinningRatio(winningRatio) {
    Console.print(`${OutputMessage.RATIO_MESSAGE_PREFIX}${winningRatio}${OutputMessage.RATIO_MESSAGE_SUFFIX}`);
}

function printErrorMessage(error) {
    Console.print(error.message);
}

export { printNumberOfPurchases, printPayedAutoLottos, printAutoLottosRank, printWinningRatio, printErrorMessage };
