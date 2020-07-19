var isValidBST = function(root) {
  function traverse(node, min, max) {
    if (!node) {
      return true;
    }
    const { left, right, val } = node;
    if (val <= min || val >= max) {
      return false;
    }
    return traverse(left, min, val) && traverse(right, val, max);
  }
  return traverse(root, -Infinity, Infinity);
};