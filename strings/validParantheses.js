// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true

var isValid = function (s) {

  //! DELETION
  //   let instanceFound = true;

  //    while (s.length) {
  //      instanceFound = false;

  //      for (let i = 0; i < s.length; i++) {
  //        if ((s[i] === '[' && s[i + 1] === ']') || (s[i] === '(' && s[i + 1] === ')') || (s[i] === '{' && s[i + 1] === '}')) {
  //          s = s.slice(0,i) + s.slice(i + 2);
  //          i -= 2;
  //          instanceFound = true;
  //        }
  //      }
  //      if (!instanceFound) return false;
  //    }

  //   return true;

  //! STACKS

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!!s[i].match(/[(/{/[/]/)) stack.push(s[i]);
    else if (s[i] === ')' && stack.pop() !== '(') return false;
    else if (s[i] === ']' && stack.pop() !== '[') return false;
    else if (s[i] === '}' && stack.pop() !== '{') return false;
  }

  return stack.length ? false : true;
};
