import { Console } from "@woowacourse/mission-utils";
import { InputMessage } from "../constants/message/Input.js";

export async function inputPayCash() {
    return Console.readLineAsync(InputMessage.PAY_CASH);
}

export async function inputLotteryNumbers() {
    return Console.readLineAsync(InputMessage.LOTTERY_NUMBERS);
}

export async function inputBonusNumber() {
    return Console.readLineAsync(InputMessage.BONUS_NUMBER);
}
