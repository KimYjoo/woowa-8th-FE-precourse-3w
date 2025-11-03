import { PRICE_UNIT, PRIZE_BY_RANK, DECIMAL_POINT_LIMIT } from "../../constants/GameSetting.js";

export default function calculateProfitRatio(rankCounts, purchasePrice) {
    const profit = calculateProfit(rankCounts);
    return calculateRatio(profit, purchasePrice);
}

function calculateProfit(rankCounts) {
    return rankCounts.reduce((acc, curr, index) => {
        acc += PRIZE_BY_RANK[index] * curr;
        return acc;
    }, 0);
}

function calculateRatio(winningPrice, purchaseAmount) {
    return Number(((winningPrice / (purchaseAmount * PRICE_UNIT)) * 100).toFixed(DECIMAL_POINT_LIMIT));
}
