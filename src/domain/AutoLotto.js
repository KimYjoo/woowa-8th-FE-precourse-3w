import Lotto from "./Lotto";

class AutoLotto extends Lotto {
	#rank = null;
	#bonusMatched = false;
	constructor(numbers) {
		super(numbers);
	}
}
