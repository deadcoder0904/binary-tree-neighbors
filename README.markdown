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

## Installation

`npm install binary-tree-neighbors --save`

## Usage

### Example

```
    0
   /
  0
 /
0

```

### Code

```js

var traverse = require('binary-tree-neighbors');

var root = {
  neighbor: null,
  children: [
          {
          children: [
                          null,
                          null
                    ]
        },
        null
      ]
}

console.log("Before\n");

console.log(JSON.stringify(root));

traverse(root, null);

console.log("After\n");

console.log(JSON.stringify(root));

```

## Output

```

Before

{
    "children": [
        {
            "children": [
                null,
                null
            ]
        },
        null
    ],
    "neighbor": null
}

After

{
    "children": [
        {
            "children": [
                null,
                null
            ],
            "neighbor": null
        },
        null
    ],
    "neighbor": null
}

```

# License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015 Claudio Procida
