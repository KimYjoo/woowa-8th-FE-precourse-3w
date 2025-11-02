import Lotto from "./Lotto.js";
import { hasValueInArray, pickSortedUniqueRandomNumber } from "../../utils/utils.js";
import { LottoNumberLimit } from "../../constants/GameSetting.js";

export default class AutoLotto extends Lotto {
    constructor(numbers) {
        super(numbers);
    }

    compareLotto(userNumbers) {
        const matchedCount = this.numbers.filter((number) => hasValueInArray(userNumbers, number)).length;
        return matchedCount;
    }
    compareBonus(bonus) {
        return hasValueInArray(this.numbers, bonus);
    }

    static drawSingle() {
        return new AutoLotto(pickSortedUniqueRandomNumber(LottoNumberLimit.START, LottoNumberLimit.END, LottoNumberLimit.AMOUNT));
    }

    static drawMultiple(count) {
        return Array.from({ length: count }, () => this.drawSingle());
    }
}
