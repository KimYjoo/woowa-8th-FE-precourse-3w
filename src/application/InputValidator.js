import { ErrorMessage } from "../constants/message/Error.js";
import { InputValidationRegex } from "../constants/Reg.js";
import GameConfig from "../constants/GameConfig.js";
import { ValidationFormError } from "../error/ValidationErrors.js";

export function validateNoneInput(input) {
    if (!input) throw new ValidationFormError(ErrorMessage.ERROR_NONE_INPUT);
}

export function validatePriceInput(input) {
    validateNoneInput(input);
    const numberedInput = Number(input);
    if (!Number.isFinite(numberedInput)) throw new ValidationFormError(ErrorMessage.ERROR_INPUT_PRICE_NAN);
    if (!Number.isInteger(numberedInput)) throw new ValidationFormError(ErrorMessage.ERROR_INPUT_PRICE_DECIMAL);
    if (numberedInput <= 0) throw new ValidationFormError(ErrorMessage.ERROR_INPUT_PRICE_NEGATIVE);
    if (numberedInput % GameConfig.PRICE_UNIT !== 0) throw new ValidationFormError(ErrorMessage.ERROR_INPUT_PRICE_UNIT);
}

export function validateNumbersInput(input) {
    validateNoneInput(input);
    if (InputValidationRegex.EXCEPTION_INPUT_FORM.test(input)) {
        throw new ValidationFormError(ErrorMessage.ERROR_INPUT_NUMBERS_FORM);
    }
}

export function validateBonusInput(input) {
    validateNoneInput(input);
    const numberedInput = Number(input);
    if (!Number.isFinite(numberedInput)) throw new ValidationFormError(ErrorMessage.ERROR_INPUT_BONUS_NAN);
    if (!Number.isInteger(numberedInput)) throw new ValidationFormError(ErrorMessage.ERROR_INPUT_BONUS_DECIMAL);
    if (numberedInput <= 0) throw new ValidationFormError(ErrorMessage.ERROR_INPUT_BONUS_NEGATIVE);
}
