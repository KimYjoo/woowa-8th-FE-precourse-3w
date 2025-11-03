import GameConfig from "../constants/GameConfig.js";

function calculatePayAmount(payPrice) {
    return Math.floor(payPrice / GameConfig.PRICE_UNIT);
}

function splitStringToNumberList(input) {
    return input.split(GameConfig.INPUT_DELIMITER).map((v) => Number(v.trim()));
}

function parseNumber(string) {
    return Number(string);
}

export { calculatePayAmount, splitStringToNumberList, parseNumber };
