import { MissionUtils } from "@woowacourse/mission-utils";

function pickSortedUniqueRandomNumber(start, end, count) {
	return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count).sort((a, b) => a - b);
}

function hasValueInArray(array, value) {
	return array.some((number) => number === value);
}

function calculatePayAmount(payPrice) {
	return Math.floor(payPrice / 1000);
}

function splitString(input) {
	return input.split(",").map((v) => v.trim());
}

export { pickSortedUniqueRandomNumber, hasValueInArray };
