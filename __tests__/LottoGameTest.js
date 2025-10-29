import AutoLotto from "../src/domain/AutoLotto";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockDrawLottoNumber = (numbers) => {
	MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
	numbers.reduce((acc, curr) => {
		return acc.mockReturnValueOnce(curr);
	}, MissionUtils.Random.pickUniqueNumbersInRange);
};

const mockLottoNumbers = [
	[1, 2, 3, 4, 5, 10],
	[6, 7, 8, 9, 11, 12],
	[13, 14, 15, 16, 17, 18],
	[19, 24, 25, 26, 27, 28],
	[33, 34, 35, 36, 37, 38],
];

test("1에서 45사이의 중복이 없는 6자리의 난수로 이루어진 로또가 발행된다.", () => {
	jest.spyOn(MissionUtils.Random, "pickUniqueNumbersInRange").mockReturnValue([1, 2, 3, 4, 5, 10]);
	const lotto = AutoLotto.createLotto();

	expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(1, 45, 6);

	expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 10]);
});

test("사용자가 5개의 로또를 구입했을때 5개의 로또가 발행된다.", () => {
	mockDrawLottoNumber(mockLottoNumbers);
	const buyCount = 5;
	const tickets = AutoLotto.buyLotto(buyCount);

	expect(tickets.length).toBe(buyCount);

	tickets.forEach((ticket, idx) => {
		expect(ticket).toBeInstanceOf(AutoLotto);
		expect(ticket.numbers).toEqual(mockLottoNumbers[idx]);
	});
});
