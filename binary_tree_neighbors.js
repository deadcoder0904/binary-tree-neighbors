/**
 *  Associates the neighbors of nodes in a binary tree as the picture below suggests:
 * 
 *             a-->null
 *            / \
 *           b-->c-->null
 *          /   / \
 *         d-->e-->f-->null
 *        /       / \
 *       g------>h-->i-->null
 *      / \
 *     j-->k-->null
 */

/** 
 *  @param {node} node
 *  @param {node} leftmost
 *  @return {void}
 */

function traverse(node, leftmost) {
  if (node.children[0] && node.children[1]) {
    node.children[0].neighbor = node.children[1];
    node.children[1].neighbor = leftmost;
    // Nodes must be traversed in opposite order
    traverse(node.children[1], get_closest_neighbor_child(leftmost));
    traverse(node.children[0], get_closest_neighbor_child(node.children[1]));
    // Must return here
    return;
  }

  var child = node.children[0] || node.children[1];
  if (child) {
    child.neighbor = leftmost;
    traverse(child, get_closest_neighbor_child(leftmost));
  }
  // no-op if no children
}

/** 
 *  @param {node} node
 *  @return {node}
 */

function get_closest_neighbor_child(node) {
  // node can be undefined if called to prime a node
  if (node === null || node === undefined) {
    return null;
  }
  return node.children[0] || node.children[1] || get_closest_neighbor_child(node.neighbor);
}

if (typeof exports !== 'undefined') {
  if (typeof module !== 'undefined' && module.exports) {
    exports = module.exports = traverse;
  }
  exports.traverse = traverse;
}