import AutoLotto from "./lotto/AutoLotto.js";
import UserLotto from "../domain/UserLotto.js";

export default class LottoGame {
	#autoLottos;
	#userLotto;
	#resultRankCounts;
	#resultProfitRatio;

	constructor() {
		this.#resultRankCounts = [0, 0, 0, 0, 0, 0];
		this.#resultProfitRatio = 0;
	}

	get resultRankCounts() {
		return this.#resultRankCounts;
	}

	get resultProfitRatio() {
		return this.#resultProfitRatio;
	}

	// 구입 로또 생성
	drawAmountOfLottos(amount) {
		this.#autoLottos = AutoLotto.generateLottos(amount);
	}
	// 사용자 로또 정보 입력
	enterUserLottoInformation(numbers, bonus) {
		this.#userLotto = UserLotto.create(numbers, bonus);
	}

	// 하나의 로또 결과 반환
	#getResultSingleAutoLotto(autoLotto) {
		const matchedCount = autoLotto.compareLotto(this.#userLotto.numbers);
		const isBonusMatched = autoLotto.compareBonus(this.#userLotto.bonus);
		return { matchedCount, isBonusMatched };
	}
	// 로또의 등급 계산
	#getLottoRank({ matchedCount, isBonusMatched }) {
		if (matchedCount === 3) {
			return 1;
		}
		if (matchedCount === 4) {
			return 2;
		}
		if (matchedCount === 5 && isBonusMatched) {
			return 4;
		}
		if (matchedCount === 5) {
			return 3;
		}
		if (matchedCount === 6) {
			return 5;
		}
		return 0;
	}
	// 로또 결과 산출
	// 로또 결과 산출 메서드 간 시간적 결합
	calculateResultOfLottos() {
		this.#calculateStatistics();
		this.#calculateProfitRatio();
	}
	// 구입한 모든 로또 결과 도출
	#calculateStatistics() {
		this.#resultRankCounts = this.#autoLottos.reduce(
			(acc, autoLotto) => {
				const { matchedCount, isBonusMatched } = this.#getResultSingleAutoLotto(autoLotto);
				const singleLottoRank = this.#getLottoRank({ matchedCount, isBonusMatched });
				acc[singleLottoRank]++;
				return acc;
			},
			[0, 0, 0, 0, 0, 0]
		);
	}

	#getPurchasePrise() {
		return this.#autoLottos.length * 1000;
	}
	// 구입한 금액 대비 수익률 계산
	#calculateProfitRatio() {
		const winByGrade = [0, 5000, 50000, 1500000, 30000000, 2000000000];
		const gameResult = this.#resultRankCounts.reduce((acc, curr, index) => {
			acc += winByGrade[index] * curr;
			return acc;
		}, 0);
		this.#resultProfitRatio = Number(((gameResult / this.#getPurchasePrise()) * 100).toFixed(2));
	}

	getPurchaseLottoNumbers() {
		return this.#autoLottos.map((value) => value.numbers);
	}

	static generateLottoGame() {
		return new LottoGame();
	}
}
