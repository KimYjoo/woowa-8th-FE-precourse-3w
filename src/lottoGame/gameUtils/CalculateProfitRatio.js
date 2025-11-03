import GameConfig from "../../constants/GameConfig.js";

export default function calculateProfitRatio(rankCounts, purchasePrice) {
    const profit = calculateProfit(rankCounts);
    return calculateRatio(profit, purchasePrice);
}

function calculateProfit(rankCounts) {
    return rankCounts.reduce((acc, curr, index) => {
        acc += GameConfig.PRIZE_BY_RANK[index] * curr;
        return acc;
    }, 0);
}

function calculateRatio(winningPrice, purchaseAmount) {
    return Number(((winningPrice / (purchaseAmount * GameConfig.PRICE_UNIT)) * 100).toFixed(GameConfig.DECIMAL_POINT_LIMIT));
}
