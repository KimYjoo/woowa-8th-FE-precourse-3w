import { ErrorMessage } from "../../constants/message/Error.js";
import GameConfig from "../../constants/GameConfig.js";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    get numbers() {
        return this.#numbers;
    }

    #validate(numbers) {
        if (numbers.length !== GameConfig.AMOUNT_OF_NUMBERS) {
            throw new Error(ErrorMessage.ERROR_RULE_NUMBERS_AMOUNT);
        }
        const isNumberInvalid = numbers.some((value) => value < GameConfig.NumberRange.START || value > GameConfig.NumberRange.END);
        if (isNumberInvalid) throw new Error(ErrorMessage.ERROR_RULE_NUMBERS_RANGE);
        const numberSet = new Set(numbers);
        if (numbers.length !== numberSet.size) {
            throw new Error(ErrorMessage.ERROR_RULE_NUMBERS_DUPLICATION);
        }
    }
}

export default Lotto;
