export function validateNoneInput(input) {
    if (!input) throw Error("[ERROR] 입력값이 없습니다.");
}

export function validatePriceInput(input) {
    validateNoneInput(input);
    const numberedInput = Number(input);
    if (!Number.isFinite(numberedInput)) throw new Error("[ERROR] 입력된 구매 금액이 숫자가 아닙니다.");
    if (!Number.isInteger(numberedInput)) throw new Error("[ERROR] 구매 금액에 실수가 입력됐습니다.");
    if (numberedInput <= 0) throw new Error("[ERROR] 구매 금액은 양의 정수여야 합니다.");
    if (numberedInput % 1000 !== 0) throw new Error("[ERROR] 구매 금액은 1000원 단위로 입력해야 합니다.");
}

export function validateNumbersInput(input) {
    validateNoneInput(input);
    const regexExceptionInputForm = /,\s*,|^,|,$|[^\d,]/g;
    if (regexExceptionInputForm.test(input)) throw new Error("[ERROR] 입력한 당첨 번호의 형식에 오류가 있습니다.");
}

export function validateBonusInput(input) {
    validateNoneInput(input);
    const numberedInput = Number(input);
    if (!Number.isFinite(numberedInput)) throw new Error("[ERROR] 입력된 보너스 번호가 숫자가 아닙니다.");
    if (!Number.isInteger(numberedInput)) throw new Error("[ERROR] 보너스 번호에 실수가 입력됐습니다.");
    if (numberedInput <= 0) throw new Error("[ERROR] 보너스 번호는 양의 정수여야 합니다.");
}
