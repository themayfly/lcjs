/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) {
    return root;
  }
  let result = [];
  function preorder(node) {
    if (!node) {
      result.push(null);
      return;
    }
    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
  }
  preorder(root);
  return result;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (!data || data.length === 0) {
    return data;
  }
  function build() {
    let cur = data.shift();
    if (cur === null) {
      return null;
    }
    let node = new TreeNode(cur);
    node.left = build();
    node.right = build();
    return node;
  }
  return build();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function deserialize(data) {
  function go() {
    if (data.length === 0) return;
    const val = data.shift();
    if (val == null) return null;
    const node = new TreeNode(val);
    node.left = go();
    node.right = go();
    return node;
  }
  return go();
}




function serialize(root) {
  return serializeDFS(root);
}
function deserialize(data) {
  return deserializeDFS(data);
}

function serializeBFS(root) {
  let q = [];
  let data = [];

  if (root) q.push(root);
  while (q.length) {
    root = q.shift();

    if (root != null) {
      data.push(root.val);

      q.push(root.left || null);
      q.push(root.right || null);
    } else {
      data.push(null);
    }
  }
  return data;
};

function deserializeBFS(data) {
  if (!data.length) return null;

  const root = new TreeNode(data.shift());
  const q = [root];

  while (q.length) {
    const node = q.shift();

    let val = data.shift();
    node.left = val !== null ? new TreeNode(val) : null;

    val = data.shift();
    node.right = val !== null ? new TreeNode(val) : null;

    if (node.left != null) q.push(node.left);
    if (node.right != null) q.push(node.right);
  }

  return root;
};

function serializeDFS(root) {
  let data = [];

  function go(node) {
    if (node == null) {
      data.push(null);
      return;
    }

    data.push(node.val);
    go(node.left);
    go(node.right);
  }

  go(root);
  return data;
}

function deserializeDFS(data) {
  function go() {
    if (data.length === 0) return;

    const val = data.shift();
    if (val == null) return null;

    const node = new TreeNode(val);
    node.left = go();
    node.right = go();
    return node;
  }

  return go();
}
