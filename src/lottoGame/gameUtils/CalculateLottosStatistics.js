import GameConfig from "../../constants/GameConfig.js";

export default function calculateLottosStatistics(autoLottos, userLotto) {
    const rankCounts = Array.from({ length: GameConfig.AMOUNT_OF_NUMBERS }, () => 0);
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
    if (matchedCount === GameConfig.RankMatchCount.FIFTH) {
        return GameConfig.RankIndex.FIFTH;
    }
    if (matchedCount === GameConfig.RankMatchCount.FOURTH) {
        return GameConfig.RankIndex.FOURTH;
    }
    if (matchedCount === GameConfig.RankMatchCount.SECOND && isBonusMatched) {
        return GameConfig.RankIndex.SECOND;
    }
    if (matchedCount === GameConfig.RankMatchCount.THIRD) {
        return GameConfig.RankIndex.THIRD;
    }
    if (matchedCount === GameConfig.RankMatchCount.FIRST) {
        return GameConfig.RankIndex.FIRST;
    }
    return GameConfig.RankIndex.BLANK;
}
