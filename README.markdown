[![Build Status](https://travis-ci.org/claudiopro/binary-tree-neighbors.svg?branch=master)](https://travis-ci.org/claudiopro/binary-tree-neighbors)

# binary-tree-neighbors

Label nodes of a binary tree with nearest right-hand neighbor

Given a structure like the following:

```
         O
        / \
       O   O
      /   / \
     O   O   O
    /       / \
   O       O   O
  / \
 O   O
```

The program will label the tree with the nearest right-hand neighbor as follows:

```
         O-->null
        / \
       O-->O-->null
      /   / \
     O-->O-->O-->null
    /       / \
   O------>O-->O-->null
  / \
 O-->O-->null
```

# License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Claudio Procida
