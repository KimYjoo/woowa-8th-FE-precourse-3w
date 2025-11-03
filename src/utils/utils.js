import { MissionUtils } from "@woowacourse/mission-utils";
import GameConfig from "../constants/GameConfig.js";

function pickSortedUniqueRandomNumber(start, end, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count).sort((a, b) => a - b);
}

function hasValueInArray(array, value) {
    return array.some((number) => number === value);
}

function calculatePayAmount(payPrice) {
    return Math.floor(payPrice / GameConfig.PRICE_UNIT);
}

function splitStringToNumberList(input) {
    return input.split(GameConfig.INPUT_DELIMITER).map((v) => Number(v.trim()));
}

function parseNumber(string) {
    return Number(string);
}

export { pickSortedUniqueRandomNumber, hasValueInArray, calculatePayAmount, splitStringToNumberList, parseNumber };
