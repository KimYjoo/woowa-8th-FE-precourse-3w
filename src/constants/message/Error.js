const ErrorMessagePrefix = "[ERROR]";
export const ErrorMessage = Object.freeze({
    ERROR_NONE_INPUT: `${ErrorMessagePrefix} 입력값이 없습니다.`,
    ERROR_INPUT_PRICE_NAN: `${ErrorMessagePrefix} 입력된 구매 금액이 숫자가 아닙니다.`,
    ERROR_INPUT_PRICE_DECIMAL: `${ErrorMessagePrefix} 구매 금액에 소수가 입력됐습니다.`,
    ERROR_INPUT_PRICE_NEGATIVE: `${ErrorMessagePrefix} 구매 금액은 양의 정수여야 합니다.`,
    ERROR_INPUT_PRICE_UNIT: `${ErrorMessagePrefix} 구매 금액은 1000원 단위로 입력해야 합니다.`,
    ERROR_INPUT_NUMBERS_FORM: `${ErrorMessagePrefix} 입력한 당첨 번호의 형식에 오류가 있습니다.`,
    ERROR_INPUT_BONUS_NAN: `${ErrorMessagePrefix} 입력된 보너스 번호가 숫자가 아닙니다.`,
    ERROR_INPUT_BONUS_DECIMAL: `${ErrorMessagePrefix} 보너스 번호에 소수가 입력됐습니다.`,
    ERROR_INPUT_BONUS_NEGATIVE: `${ErrorMessagePrefix} 보너스 번호는 양의 정수여야 합니다.`,
    ERROR_RULE_NUMBERS_AMOUNT: `${ErrorMessagePrefix} 로또 번호는 6개여야 합니다.`,
    ERROR_RULE_NUMBERS_RANGE: `${ErrorMessagePrefix} 로또 번호가 1에서 45 사이의 숫자여야 합니다.`,
    ERROR_RULE_NUMBERS_DUPLICATION: `${ErrorMessagePrefix} 중복된 숫자가 있습니다.`,
    ERROR_RULE_BONUS_RANGE: `${ErrorMessagePrefix} 보너스 번호가 1에서 45 사이의 숫자여야 합니다.`,
    ERROR_RULE_BONUS_DUPLICATION: `${ErrorMessagePrefix} 보너스 번호가 중복된 숫자입니다.`,
});
