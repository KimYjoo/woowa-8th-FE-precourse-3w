import { PRICE_UNIT, LottoNumberLimit, PRIZE_BY_RANK, INDEX_BY_RANK, MATCH_COUNT_BY_RANK, DECIMAL_POINT_LIMIT } from "../constants/GameSetting.js";

export function calculateProfitRatio(rankCounts, purchasePrice) {
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

export function calculateLottosStatistics(autoLottos, userLotto) {
    const rankCounts = Array.from({ length: LottoNumberLimit.AMOUNT }, () => 0);
    autoLottos.forEach((autoLotto) => {
        const { matchedCount, isBonusMatched } = getResultAutoLotto(autoLotto, userLotto.numbers, userLotto.bonus);
        const singleLottoRank = calculateLottoRank({ matchedCount, isBonusMatched });
        rankCounts[singleLottoRank]++;
    });
    return rankCounts;
}
function getResultAutoLotto(autoLotto, userNumbers, userBonus) {
    const matchedCount = autoLotto.compareLotto(userNumbers);
    const isBonusMatched = autoLotto.compareBonus(userBonus);
    return { matchedCount, isBonusMatched };
}
function calculateLottoRank({ matchedCount, isBonusMatched }) {
    if (matchedCount === MATCH_COUNT_BY_RANK.FIFTH) {
        return INDEX_BY_RANK.FIFTH;
    }
    if (matchedCount === MATCH_COUNT_BY_RANK.FOURTH) {
        return INDEX_BY_RANK.FOURTH;
    }
    if (matchedCount === MATCH_COUNT_BY_RANK.SECOND && isBonusMatched) {
        return INDEX_BY_RANK.SECOND;
    }
    if (matchedCount === MATCH_COUNT_BY_RANK.THIRD) {
        return INDEX_BY_RANK.THIRD;
    }
    if (matchedCount === MATCH_COUNT_BY_RANK.FIRST) {
        return INDEX_BY_RANK.FIRST;
    }
    return INDEX_BY_RANK.BLANK;
}
