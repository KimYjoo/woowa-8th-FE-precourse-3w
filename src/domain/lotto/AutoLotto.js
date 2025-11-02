import Lotto from "./Lotto.js";
import { hasValueInArray, pickSortedUniqueRandomNumber } from "../../utils/utils.js";

export default class AutoLotto extends Lotto {
	constructor(numbers) {
		super(numbers);
	}

	compareLotto(userNumbers) {
		const matchedCount = this.numbers.reduce((acc, curr) => {
			if (hasValueInArray(userNumbers, curr)) acc++;
			return acc;
		}, 0);
		return matchedCount;
	}
	compareBonus(bonus) {
		return hasValueInArray(this.numbers, bonus);
	}

	static create() {
		return new AutoLotto(pickSortedUniqueRandomNumber(1, 45, 6));
	}

	static generateLottos(count) {
		return Array.from({ length: count }, () => this.create());
	}
}
