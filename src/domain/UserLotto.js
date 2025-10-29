import Lotto from "./Lotto";

class UserLotto extends Lotto {
	#bonus;
	constructor(numbers, bonus) {
		super(numbers);
		this.#bonus = bonus;
	}
}
