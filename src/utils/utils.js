import { MissionUtils } from "@woowacourse/mission-utils";

function pickSortedUniqueRandomNumber(start, end, count) {
	return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count).sort((a, b) => a - b);
}

export { pickSortedUniqueRandomNumber };
