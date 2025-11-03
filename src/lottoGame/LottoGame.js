import AutoLotto from "./lotto/AutoLotto.js";
import UserLotto from "./lotto/UserLotto.js";
import calculateProfitRatio from "./gameUtils/CalculateProfitRatio.js";
import calculateLottosStatistics from "./gameUtils/CalculateLottosStatistics.js";
import GameConfig from "../constants/GameConfig.js";

export default class LottoGame {
    #purchaseAmount;
    #autoLottos;
    #userLotto;
    #resultRankCounts;
    #resultProfitRatio;

    constructor() {
        this.#resultRankCounts = Array.from({ length: GameConfig.AMOUNT_OF_NUMBERS }, () => 0);
        this.#resultProfitRatio = 0;
    }

    get purchaseAmount() {
        return this.#purchaseAmount;
    }

    get resultRankCounts() {
        return this.#resultRankCounts;
    }

    get resultProfitRatio() {
        return this.#resultProfitRatio;
    }

    getPurchaseLottoNumbers() {
        return this.#autoLottos.map((value) => value.numbers);
    }

    // 구입 로또 생성
    drawAmountOfLottos(amount) {
        this.#purchaseAmount = amount;
        this.#autoLottos = AutoLotto.drawMultiple(amount);
    }
    // 사용자 로또 정보 입력
    enterUserLottoInformation(numbers, bonus) {
        this.#userLotto = UserLotto.createWithInformation(numbers, bonus);
    }
    // 로또 결과 산출
    // 로또 결과 산출 메서드 간 시간적 결합
    calculateResultOfLottos() {
        this.#resultRankCounts = calculateLottosStatistics(this.#autoLottos, this.#userLotto);
        this.#resultProfitRatio = calculateProfitRatio(this.#resultRankCounts, this.#purchaseAmount);
    }

    static generateLottoGame() {
        return new LottoGame();
    }
}
