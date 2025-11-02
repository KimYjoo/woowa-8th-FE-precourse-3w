import { ErrorMessage } from "../../constants/message/Error.js";
import { LottoNumberLimit } from "../../constants/GameSetting.js";

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
        if (numbers.length !== LottoNumberLimit.AMOUNT) {
            throw new Error(ErrorMessage.ERROR_RULE_NUMBERS_AMOUNT);
        }
        const isNumberInvalid = numbers.some((value) => value < LottoNumberLimit.START || value > LottoNumberLimit.END);
        if (isNumberInvalid) throw new Error(ErrorMessage.ERROR_RULE_NUMBERS_RANGE);
        const numberSet = new Set(numbers);
        if (numbers.length !== numberSet.size) {
            throw new Error(ErrorMessage.ERROR_RULE_NUMBERS_DUPLICATION);
        }
    }
}

export default Lotto;
