import Lotto from "./Lotto.js";
import { ErrorMessage } from "../../constants/message/Error.js";
import GameConfig from "../../constants/GameConfig.js";
import { ValidationRuleError } from "../../error/ValidationErrors.js";

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
        if (bonus < GameConfig.NumberRange.START || bonus > GameConfig.NumberRange.END)
            throw new ValidationRuleError(ErrorMessage.ERROR_RULE_BONUS_RANGE);
        if (this.numbers.includes(bonus)) throw new ValidationRuleError(ErrorMessage.ERROR_RULE_BONUS_DUPLICATION);
    }

    static createWithInformation(numbers, bonus) {
        return new UserLotto(numbers, bonus);
    }
}
