function twoSum(nums: number[], target: number): number[] {
  const arr: number[] = [];

  // O(n^2)
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = nums.length - 1; j > i; j--) {
      const left = nums[i] as number;
      const right = nums[j] as number;

      const sum = left + right;

      if (sum === target) {
        arr.push(i, j);
        break;
      }

      if (left >= target) {
        i++;
      }

      if (right >= target) {
        j--;
      }
    }
  }

  return arr;
}

function twoSumOptimized(nums: number[], target: number): number[] {
  const arr: number[] = [];
  const seen = new Map<number, number>();

  // Iterate through the list adding it to the seen hash map
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    const diff = target - num;

    if (seen.has(diff)) {
      return [seen.get(diff)!, i];
    }

    seen.set(num, i);
  }

  return [];
}

function isAnagram(s: string, t: string): boolean {
  // Complexity: O(n * log(n))
  const sortedS = s.split('').sort().join('');

  // Complexity: O(n * log(n))
  const sortedT = t.split('').sort().join('');

  // Complexity: O(n)
  for (let i = 0; i < sortedS.length; i++) {
    if (sortedS[i] !== sortedT[i]) {
      return false;
    }
  }

  return true;
}

function isAnagramOptimized(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const count = new Map<string, number>();

  for (const char of s) {
    count.set(char, (count.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    if (!count.has(char)) return false;
    count.set(char, count.get(char)! - 1);
    if (count.get(char)! < 0) return false;
  }

  return true;
}

function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();

  // Complexity O(n) | Space O(n)
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;

    if (set.has(num)) {
      return true;
    } else {
      set.add(num);
    }
  }

  return false;
}

function isPalindrome(s: string): boolean {
  //  Helper functions
  const isAlphanumeric = (char: string): boolean => /[a-z0-9]/.test(char.toLowerCase());

  let leftPtr = 0;
  let rightPtr = s.length - 1;

  // Complexity O(n)
  while (leftPtr < rightPtr) {
    const left = s[leftPtr]!.toLowerCase();
    const right = s[rightPtr]!.toLowerCase();

    const leftIsValid = isAlphanumeric(left);
    const rightIsValid = isAlphanumeric(right);

    if (!leftIsValid) {
      leftPtr++;
      continue;
    }

    if (!rightIsValid) {
      rightPtr--;
      continue;
    }

    if (left === right) {
      leftPtr++;
      rightPtr--;
    } else {
      return false;
    }
  }

  return true;
}
