import Lotto from "./Lotto";
import { pickSortedUniqueRandomNumber } from "../utils/utils";

export default class AutoLotto extends Lotto {
	#rank = null;
	#bonusMatched = false;
	#matchedCount = 0;

	constructor(numbers) {
		super(numbers);
	}

	get bonusMatched() {
		return this.#bonusMatched;
	}
	get matchedCount() {
		return this.#matchedCount;
	}

	compareLotto(userLotto) {
		const arrayCompare = (value) => userLotto.numbers.some((number) => number === value);
		this.#matchedCount = this.numbers.reduce((acc, curr) => {
			if (arrayCompare(curr)) acc++;
			return acc;
		}, 0);
		if (this.numbers.some((number) => number === userLotto.bonus)) this.#bonusMatched = true;

		return { bonusMatched: this.#bonusMatched, matchedCount: this.#matchedCount };
	}

	rankingLotto() {
		if (this.#matchedCount < 3) {
			this.#rank = 0;
			return 0;
		}
		if (this.#matchedCount === 3) {
			this.#rank = 1;
			return 1;
		}
		if (this.#matchedCount === 4) {
			this.#rank = 2;
			return 2;
		}
		if (this.#matchedCount === 5 && this.#bonusMatched) {
			this.#rank = 4;
			return 4;
		}
		if (this.#matchedCount === 5) {
			this.#rank = 3;
			return 3;
		}
		if (this.#matchedCount === 6) {
			this.#rank = 5;
			return 5;
		}
	}

	static createLotto() {
		const drawedLotteryNumbers = pickSortedUniqueRandomNumber(1, 45, 6);
		return new AutoLotto(drawedLotteryNumbers);
	}

	static buyLotto(buyCount) {
		return Array.from({ length: buyCount }, () => this.createLotto());
	}
}
