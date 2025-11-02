export function calculateProfitRatio(rankCounts, purchasePrice) {
	const profit = calculateProfit(rankCounts);
	return calculateRatio(profit, purchasePrice);
}

function calculateProfit(rankCounts) {
	const winByGrade = [0, 5000, 50000, 1500000, 30000000, 2000000000];
	return rankCounts.reduce((acc, curr, index) => {
		acc += winByGrade[index] * curr;
		return acc;
	}, 0);
}

function calculateRatio(winningPrice, purchaseAmount) {
	return Number(((winningPrice / (purchaseAmount * 1000)) * 100).toFixed(2));
}

export function calculateLottosStatistics(autoLottos, userLotto) {
	return autoLottos.reduce(
		(acc, autoLotto) => {
			const { matchedCount, isBonusMatched } = getResultAutoLotto(autoLotto, userLotto.numbers, userLotto.bonus);
			const singleLottoRank = calculateLottoRank({ matchedCount, isBonusMatched });
			acc[singleLottoRank]++;
			return acc;
		},
		[0, 0, 0, 0, 0, 0]
	);
}
function getResultAutoLotto(autoLotto, userNumbers, userBonus) {
	const matchedCount = autoLotto.compareLotto(userNumbers);
	const isBonusMatched = autoLotto.compareBonus(userBonus);
	return { matchedCount, isBonusMatched };
}
function calculateLottoRank({ matchedCount, isBonusMatched }) {
	if (matchedCount === 3) {
		return 1;
	}
	if (matchedCount === 4) {
		return 2;
	}
	if (matchedCount === 5 && isBonusMatched) {
		return 4;
	}
	if (matchedCount === 5) {
		return 3;
	}
	if (matchedCount === 6) {
		return 5;
	}
	return 0;
}
