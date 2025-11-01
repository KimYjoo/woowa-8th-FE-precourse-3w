import AutoLotto from "../domain/AutoLotto.js";
import UserLotto from "../domain/UserLotto.js";

export default class LottoGame {
	#autoLottos;
	#userLotto;

	// 로또 구입 프로세스
	buyLotto({ count, numbers, bonus }) {
		this.#autoLottos = AutoLotto.generateLottos(count);
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
	// 구입한 모든 로또 결과 도출
	getResultAllAutoLottos() {
		return this.#autoLottos.reduce((acc, autoLotto) => {
			const { matchedCount, isBonusMatched } = this.#getResultSingleAutoLotto(autoLotto);
			const singleLottoRank = this.#getLottoRank({ matchedCount, isBonusMatched });
			acc.push(singleLottoRank);
			return acc;
		}, []);
	}

	getLottoResult(results) {
		const winByGrade = [0, 5000, 50000, 1500000, 30000000, 2000000000];
		const gameResult = results.reduce((acc, curr) => {
			acc += winByGrade[curr];
			return acc;
		}, 0);
		const ratio = ((gameResult / this.#getPurchasePrise()) * 100).toFixed(2);
		return ratio;
	}

	#getPurchasePrise() {
		return this.#autoLottos.length * 1000;
	}

	static generateLottoGame() {
		return new LottoGame();
	}
}
