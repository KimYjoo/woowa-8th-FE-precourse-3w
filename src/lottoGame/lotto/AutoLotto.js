import Lotto from "./Lotto.js";
import { hasValueInArray, pickSortedUniqueRandomNumber } from "../../utils/Common.js";
import GameConfig from "../../constants/GameConfig.js";

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
        return new AutoLotto(pickSortedUniqueRandomNumber(GameConfig.NumberRange.START, GameConfig.NumberRange.END, GameConfig.AMOUNT_OF_NUMBERS));
    }

    static drawMultiple(count) {
        return Array.from({ length: count }, () => this.drawSingle());
    }
}
