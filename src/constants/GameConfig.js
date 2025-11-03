const GameConfig = Object.freeze({
    PRICE_UNIT: 1000,
    NumberRange: Object.freeze({
        START: 1,
        END: 45,
    }),
    AMOUNT_OF_NUMBERS: 6,
    PRIZE_BY_RANK: [0, 5000, 50000, 1500000, 30000000, 2000000000],
    RankIndex: Object.freeze({
        BLANK: 0,
        FIFTH: 1,
        FOURTH: 2,
        THIRD: 3,
        SECOND: 4,
        FIRST: 5,
    }),
    RankMatchCount: Object.freeze({
        FIFTH: 3,
        FOURTH: 4,
        THIRD: 5,
        SECOND: 5,
        FIRST: 6,
    }),
    DECIMAL_POINT_LIMIT: 2,
    INPUT_DELIMITER: ",",
});
export default GameConfig;
