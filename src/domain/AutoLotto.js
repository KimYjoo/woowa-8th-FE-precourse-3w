import Lotto from "./Lotto";
import { pickSortedUniqueRandomNumber } from "../utils/utils";

export default class AutoLotto extends Lotto {
	#rank = null;
	#bonusMatched = false;

	constructor(numbers) {
		super(numbers);
	}

	static createLotto() {
		const drawedLotteryNumbers = pickSortedUniqueRandomNumber(1, 45, 6);
		return new AutoLotto(drawedLotteryNumbers);
	}

	static buyLotto(buyCount) {
		return Array.from({ length: buyCount }, () => this.createLotto());
	}
}
