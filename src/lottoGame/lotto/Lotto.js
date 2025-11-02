import { Console } from "@woowacourse/mission-utils";

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
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
        numbers.forEach((value) => {
            if (value < 1 || value > 45) throw new Error("[ERROR] 로또 번호가 1에서 45 사이의 숫자여야 합니다.");
        });
        const numberSet = new Set(numbers);
        if (numbers.length !== numberSet.size) {
            throw new Error("[ERROR] 중복된 숫자가 있습니다.");
        }
    }
}

export default Lotto;
