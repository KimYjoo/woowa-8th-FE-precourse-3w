test("입력한 구입 금액을 1000원 단위로 나누어 구입 개수를 반환한다.", () => {
	const payPrice = 330000;
	const payAmount = calculatePayAmount(payPrice);
	expect(payAmount).toBe(330);
});

test("사용자의 추첨번호 입력값을 쉼표 , 기준으로 구분하여 숫자로 저장한다.", () => {
	const userInput = "1,2 ,3,4, 5,6 ";
	const splittedInput = splitString(userInput);
	expect(splittedInput).toEqual([1, 2, 3, 4, 5, 6]);
});
