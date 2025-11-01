import { MissionUtils } from "@woowacourse/mission-utils";
import AutoLotto from "../src/domain/AutoLotto.js";
import UserLotto from "../src/domain/UserLotto.js";
import LottoGame from "../src/application/lottoGame.js";

const mockDrawLottoNumber = (numbers) => {
	MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
	numbers.reduce((acc, curr) => {
		return acc.mockReturnValueOnce(curr);
	}, MissionUtils.Random.pickUniqueNumbersInRange);
};

const mockLottoNumbers = [
	[1, 2, 3, 4, 5, 10],
	[1, 2, 3, 5, 11, 12],
	[13, 14, 15, 16, 17, 18],
	[19, 24, 25, 26, 27, 28],
	[33, 34, 35, 36, 37, 38],
];

test("1에서 45사이의 중복이 없는 6자리의 난수로 이루어진 로또가 발행된다.", () => {
	jest.spyOn(MissionUtils.Random, "pickUniqueNumbersInRange").mockReturnValue([1, 2, 3, 4, 5, 10]);
	const lotto = AutoLotto.create();

	expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(1, 45, 6);

	expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 10]);
});

test("사용자가 5개의 로또를 구입했을때 5개의 로또가 발행된다.", () => {
	mockDrawLottoNumber(mockLottoNumbers);
	const buyCount = 5;
	const tickets = AutoLotto.generateLottos(buyCount);

	expect(tickets.length).toBe(buyCount);

	tickets.forEach((ticket, idx) => {
		expect(ticket).toBeInstanceOf(AutoLotto);
		expect(ticket.numbers).toEqual(mockLottoNumbers[idx]);
	});
});

test("발행된 로또와 사용자의 추첨 번호를 비교해서 일치하는 숫자의 개수를 구한다.", () => {
	jest.spyOn(MissionUtils.Random, "pickUniqueNumbersInRange").mockReturnValue([1, 2, 3, 4, 5, 10]);
	const autoLotto = AutoLotto.create();
	const userLotto = UserLotto.create([1, 2, 3, 11, 12, 13], 7);

	const matchedCount = autoLotto.compareLotto(userLotto.numbers);
	expect(matchedCount).toBe(3);
});

test("발행된 로또에서 보너스 번호의 일치 여부를 확인한다.", () => {
	jest.spyOn(MissionUtils.Random, "pickUniqueNumbersInRange").mockReturnValue([1, 2, 3, 4, 5, 10]);
	const autoLotto = AutoLotto.create();
	const userLotto = UserLotto.create([1, 2, 3, 11, 12, 13], 5);

	const bonusMatched = autoLotto.compareBonus(userLotto.bonus);
	expect(bonusMatched).toBe(true);
});

test("사용자가 구입한 모든 로또의 결과를 확인한다.", () => {
	const lottoGame = LottoGame.generateLottoGame();
	const count = 2;
	const numbers = [1, 2, 3, 11, 12, 13];
	const bonus = 5;
	mockDrawLottoNumber(mockLottoNumbers);
	lottoGame.buyLotto({ count, numbers, bonus });
	const allLottoRank = lottoGame.getResultAllAutoLottos();
	expect(allLottoRank).toEqual([1, 4]);
});
