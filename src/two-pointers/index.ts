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
