import Lotto from "./Lotto.js";

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
        if (bonus < 1 || bonus > 45) throw new Error("[ERROR] 보너스 번호가 1에서 45 사이의 숫자여야 합니다.");
        if (this.numbers.includes(bonus)) throw new Error("[ERROR] 보너스 번호가 중복된 숫자입니다.");
    }

    static createWithInformation(numbers, bonus) {
        return new UserLotto(numbers, bonus);
    }
}
