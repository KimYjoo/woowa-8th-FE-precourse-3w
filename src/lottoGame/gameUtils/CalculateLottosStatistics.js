import { LottoNumberLimit, INDEX_BY_RANK, MATCH_COUNT_BY_RANK } from "../../constants/GameSetting.js";

export default function calculateLottosStatistics(autoLottos, userLotto) {
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
