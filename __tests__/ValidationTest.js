import { validateNoneInput, validatePriceInput, validateNumbersInput, validateBonusInput } from "../src/application/InputValidator";
import { MissionUtils } from "@woowacourse/mission-utils";

const getLogSpy = () => {
	const logSpy = jest.spyOn(MissionUtils.Console, "print");
	logSpy.mockClear();
	return logSpy;
};

const runException = (input, validateInput) => {
	expect(() => validateInput(input)).toThrow("[ERROR]");
};

test("(공통) 입력이 없을 경우", () => {
	const input = "";
	runException(input, validateNoneInput);
});

describe("구입 금액 입력 형식 유효성 검사", () => {
	test("숫자가 아닐 경우", () => {
		const input = "1000j";
		runException(input, validatePriceInput);
	});
	test("1000 단위로 나누어 떨어지지 않는 경우", () => {
		const input = "1001";
		runException(input, validatePriceInput);
	});
});

describe("당첨 번호 입력 형식 유효성 검사", () => {
	test("쉼표 `,`와 숫자 외의 문자가 있을 경우", () => {
		const input = "1,2,3,4,5,?6";
		runException(input, validateNumbersInput);
	});
	test("구분자의 사용이 잘못되었을 경우", () => {
		const input1 = "1,,2,3,4,5,6";
		runException(input1, validateNumbersInput);
		const input2 = "1,2,3,4,5,6,";
		runException(input2, validateNumbersInput);
	});
});

describe("보너스 번호 입력 형식 유효성 검사", () => {
	test("숫자가 아닐 경우", () => {
		const input = "1j";
		runException(input, validateBonusInput);
	});
	test("정수가 아닐 경우", () => {
		const input = "1.1";
		runException(input, validateBonusInput);
	});
});
