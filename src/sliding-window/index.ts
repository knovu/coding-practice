function maxProfit(prices: number[]): number {
  let profit = 0;
  let left = 0;
  let right = 1;

  // Complexity O(n)
  while (right < prices.length) {
    if (prices[left]! < prices[right]!) {
      const diff = prices[right]! - prices[left]!;
      profit = Math.max(profit, diff);
    } else {
      left = right;
    }

    right++;
  }

  return profit;
}

function lengthOfLongestSubstring(s: string): number {
  let l = 0,
    r = 0;
  const set = new Set<string>();

  // Complexity: O(n)
  while (r < s.length) {
    const val = s[r]!;

    if (set.has(val)) {
      set.delete(s[l]!);
      l++;
    } else {
      set.add(val);
      r++;
    }
  }

  return set.size;
}
