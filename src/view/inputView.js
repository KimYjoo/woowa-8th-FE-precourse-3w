import { Console } from "@woowacourse/mission-utils";

export async function inputPayCash() {
	return Console.readLineAsync("구입금액을 입력해 주세요.\n");
}

export async function inputLotteryNumbers() {
	return Console.readLineAsync("당첨 번호를 입력해 주세요.\n");
}

export async function inputBonusNumber() {
	return Console.readLineAsync("보너스 번호를 입력해 주세요.\n");
}
