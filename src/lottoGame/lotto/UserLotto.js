import Lotto from "./Lotto.js";
import { ErrorMessage } from "../../constants/message/Error.js";
import { LottoNumberLimit } from "../../constants/GameSetting.js";
export default class UserLotto extends Lotto {
    #bonus;

    constructor(numbers, bonus) {
        super(numbers);
        this.#validate(bonus);
        this.#bonus = bonus;
    }

    get bonus() {
        return this.#bonus;
    }

    #validate(bonus) {
        if (bonus < LottoNumberLimit.START || bonus > LottoNumberLimit.END) throw new Error(ErrorMessage.ERROR_RULE_BONUS_RANGE);
        if (this.numbers.includes(bonus)) throw new Error(ErrorMessage.ERROR_RULE_BONUS_DUPLICATION);
    }

    static createWithInformation(numbers, bonus) {
        return new UserLotto(numbers, bonus);
    }
}
