const BinarySearchTree = require('./BinarySearchTree');

function main() {
  const BST = new BinarySearchTree();
  BST.insert(3);
  BST.insert(1);
  BST.insert(4);
  BST.insert(6);
  BST.insert(9);
  BST.insert(2);
  BST.insert(5);
  BST.insert(7);

  return BST;
}

function easyQuestion() {
    const BST = new BinarySearchTree();
    BST.insert('E');
    BST.insert('A');
    BST.insert('S');
    BST.insert('Y');
    BST.insert('Q');
    BST.insert('U');
    BST.insert('E');
    BST.insert('S');
    BST.insert('T');
    BST.insert('I');
    BST.insert('O');
    BST.insert('N');
  
    return BST;
  }

function height(tree, counter = 0) {
  if (!tree) {
    return 0;
  }
  counter++;
  let left = counter;
  let right = counter;
  if (tree.left) {
    left = height(tree.left, counter);
  }
  if (tree.right) {
    right = height(tree.right, counter);
  }
  return left > right ? left : right;
}

console.log(main());
console.log(easyQuestion());
console.log(height(easyQuestion()));
console.log(height(main()));