import Lotto from "./Lotto.js";

export default class UserLotto extends Lotto {
	#bonus;

	constructor(numbers, bonus) {
		super(numbers);
		this.#bonus = bonus;
	}

	get bonus() {
		return this.#bonus;
	}

	static createWithInformation(numbers, bonus) {
		return new UserLotto(numbers, bonus);
	}
}
