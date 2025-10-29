import AutoLotto from "../src/domain/AutoLotto";
import { MissionUtils } from "@woowacourse/mission-utils";

test("사용자가 구입한 로또 개수만큼 로또가 발행된다.", () => {
	const buyCount = 5;
	const tickets = buyLotto(buyCount);

	expect(tickets.length).toBe(buyCount);
	tickets.forEach((ticket) => {
		expect(ticket).toBeInstanceOf(AutoLotto);
	});
});

test("1에서 45사이의 중복이 없는 6자리의 난수로 이루어진 로또가 발행된다.", () => {
	jest.spyOn(MissionUtils.Random, "pickUniqueNumbersInRange").mockReturnValue([1, 2, 3, 4, 5, 6]);
	const lotto = createLotto();

	expect(MissionUtils.Random.pickUniqueNumbersInRange).toHaveBeenCalledWith(1, 45, 6);

	expect(lotto.numbers).toEqual([1, 2, 3, 4, 5, 6]);
});
