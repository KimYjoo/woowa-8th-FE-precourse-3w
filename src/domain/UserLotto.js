import Lotto from "./Lotto";

export default class UserLotto extends Lotto {
	#bonus;

	constructor(numbers, bonus) {
		super(numbers);
		this.#bonus = bonus;
	}

	get bonus() {
		return this.#bonus;
	}

	static createLotto(numbers, bonus) {
		return new UserLotto(numbers, bonus);
	}
}
