function isSubsequences(s, t): Boolean {
  let si = 0;
  let ti = 0;
  const sl = s.length;
  const tl = t.length;
  for (ti; ti < tl && si < sl; ti++) {
    if (t[ti] === s[si]) {
      si++;
    }
  }

  return si === sl;
}
module.exports = isSubsequences;
