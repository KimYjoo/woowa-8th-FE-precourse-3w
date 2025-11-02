import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_DELIMITER, PRICE_UNIT } from "../constants/GameSetting.js";
function pickSortedUniqueRandomNumber(start, end, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count).sort((a, b) => a - b);
}

function hasValueInArray(array, value) {
    return array.some((number) => number === value);
}

function calculatePayAmount(payPrice) {
    return Math.floor(payPrice / PRICE_UNIT);
}

function splitStringToNumberList(input) {
    return input.split(INPUT_DELIMITER).map((v) => Number(v.trim()));
}

function parseNumber(string) {
    return Number(string);
}

export { pickSortedUniqueRandomNumber, hasValueInArray, calculatePayAmount, splitStringToNumberList, parseNumber };
