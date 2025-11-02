import Lotto from "./lotto/Lotto.js";

export default class UserLotto extends Lotto {
	#bonus;

	constructor(numbers, bonus) {
		super(numbers);
		this.#bonus = bonus;
	}

	get bonus() {
		return this.#bonus;
	}

	static create(numbers, bonus) {
		return new UserLotto(numbers, bonus);
	}
}
