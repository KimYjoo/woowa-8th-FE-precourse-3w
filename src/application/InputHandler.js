import { inputPayCash, inputBonusNumber, inputLotteryNumbers } from "../view/inputView.js";
import { calculatePayAmount, splitStringToNumberList, parseNumber } from "../utils/InputProcess.js";
import { validatePriceInput, validateNumbersInput, validateBonusInput } from "./InputValidator.js";
import { printErrorMessage } from "../view/outputView.js";

export { getValidInputs };

async function getValidInputs() {
    const payAmount = await inputValidateHandler(handlePurchaseCashInput);
    const userNumbers = await inputValidateHandler(handleLottoNumbersInput);
    const bonusNumber = await inputValidateHandler(handleBonusNumberInput);
    return { payAmount, userNumbers, bonusNumber };
}
async function inputValidateHandler(inputHandler) {
    try {
        const input = await inputHandler();
        return input;
    } catch (error) {
        printErrorMessage(error);
        return inputValidateHandler(inputHandler);
    }
}
async function handlePurchaseCashInput() {
    const payCash = await inputPayCash();
    validatePriceInput(payCash);
    return calculatePayAmount(payCash);
}
async function handleLottoNumbersInput() {
    const lotteryNumbers = await inputLotteryNumbers();
    validateNumbersInput(lotteryNumbers);
    return splitStringToNumberList(lotteryNumbers);
}
async function handleBonusNumberInput() {
    const bonusNumber = await inputBonusNumber();
    validateBonusInput(bonusNumber);
    return parseNumber(bonusNumber);
}
