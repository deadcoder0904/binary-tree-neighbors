describe('the traverse utility', function() {

  // Reference tree

/*
        O-->null
       / \
      O-->O-->null
     /   / \
    O-->O-->O-->null
   /       / \
  O------>O-->O-->null
 / \
O-->O-->null
*/

  it('correctly sets the neighbors in reference tree', function() {
    var root = {
      neighbor: null,
      children: [
        {
          children: [
            {
              children: [
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                },
                null
              ]
            },
            null
          ]
        },
        {
          children: [
            {
              children: [
                null,
                null
              ]
            },
            {
              children: [
                {
                  children: [
                    null,
                    null
                  ]
                },
                {
                  children: [
                    null,
                    null
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    traverse(root, null);

    expect(root.children[0].neighbor).toEqual(root.children[1]);
    expect(root.children[1].neighbor).toBeNull();

    expect(root.children[0].children[0].neighbor).toEqual(root.children[1].children[0]);
    expect(root.children[1].children[0].neighbor).toEqual(root.children[1].children[1]);
    expect(root.children[1].children[1].neighbor).toBeNull();

    expect(root.children[0].children[0].children[0].neighbor).toEqual(root.children[1].children[1].children[0]);
    expect(root.children[1].children[1].children[0].neighbor).toEqual(root.children[1].children[1].children[1]);
    expect(root.children[1].children[1].children[1].neighbor).toBeNull();

    expect(root.children[0].children[0].children[0].children[0].neighbor).toEqual(root.children[0].children[0].children[0].children[1]);
    expect(root.children[0].children[0].children[0].children[1].neighbor).toBeNull();
  });

  // Perfectly balanced tree

/*
                                                O-->null
                                               / \
                                              /   \
                                             /     \
                                            /       \
                                           /         \
                                          /           \
                                         /             \
                                        /               \
                                       /                 \
                                      /                   \
                                     /                     \
                                    /                       \
                                   /                         \
                                  /                           \
                                 /                             \
                                /                               \
                               /                                 \
                              /                                   \
                             /                                     \
                            /                                       \
                           /                                         \
                          /                                           \
                         /                                             \
                        /                                               \
                       /                                                 \
                      O-------------------------------------------------->O-->null
                     / \                                                 / \
                    /   \                                               /   \
                   /     \                                             /     \
                  /       \                                           /       \
                 /         \                                         /         \
                /           \                                       /           \
               /             \                                     /             \
              /               \                                   /               \
             /                 \                                 /                 \
            /                   \                               /                   \
           /                     \                             /                     \
          /                       \                           /                       \
         O------------------------>O------------------------>O------------------------>O-->null
        / \                       / \                       / \                       / \
       /   \                     /   \                     /   \                     /   \
      /     \                   /     \                   /     \                   /     \
     /       \                 /       \                 /       \                 /       \
    /         \               /         \               /         \               /         \
   /           \             /           \             /           \             /           \
  O----------->O----------->O----------->O----------->O----------->O----------->O----------->O-->null
 / \          / \          / \          / \          / \          / \          / \          / \
O-->O-->null O-->O-->null O-->O-->null O-->O-->null O-->O-->null O-->O-->null O-->O-->null O-->O-->null
*/

  it('correctly sets the neighbors in a fully balanced tree', function() {
    var root = {
      neighbor: null,
      children: [
        {
          children: [
            {
              children: [
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                },
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                }
              ]
            },
            {
              children: [
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                },
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          children: [
            {
              children: [
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                },
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                }
              ]
            },
            {
              children: [
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                },
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    traverse(root, null);

    expect(root.children[0].neighbor).toEqual(root.children[1]);
    expect(root.children[1].neighbor).toBeNull();

    expect(root.children[0].children[0].neighbor).toEqual(root.children[0].children[1]);
    expect(root.children[0].children[1].neighbor).toEqual(root.children[1].children[0]);
    expect(root.children[1].children[0].neighbor).toEqual(root.children[1].children[1]);
    expect(root.children[1].children[1].neighbor).toBeNull();

    expect(root.children[0].children[0].children[0].neighbor).toEqual(root.children[0].children[0].children[1]);
    expect(root.children[0].children[0].children[1].neighbor).toEqual(root.children[0].children[1].children[0]);
    expect(root.children[0].children[1].children[0].neighbor).toEqual(root.children[0].children[1].children[1]);
    expect(root.children[0].children[1].children[1].neighbor).toEqual(root.children[1].children[0].children[0]);
    expect(root.children[1].children[0].children[0].neighbor).toEqual(root.children[1].children[0].children[1]);
    expect(root.children[1].children[0].children[1].neighbor).toEqual(root.children[1].children[1].children[0]);
    expect(root.children[1].children[1].children[0].neighbor).toEqual(root.children[1].children[1].children[1]);
    expect(root.children[1].children[1].children[1].neighbor).toBeNull();

    expect(root.children[0].children[0].children[0].children[0].neighbor).toEqual(root.children[0].children[0].children[0].children[1]);
    expect(root.children[0].children[0].children[0].children[1].neighbor).toEqual(root.children[0].children[0].children[1].children[0]);
    expect(root.children[0].children[0].children[1].children[0].neighbor).toEqual(root.children[0].children[0].children[1].children[1]);
    expect(root.children[0].children[0].children[1].children[1].neighbor).toEqual(root.children[0].children[1].children[0].children[0]);
    expect(root.children[0].children[1].children[0].children[0].neighbor).toEqual(root.children[0].children[1].children[0].children[1]);
    expect(root.children[0].children[1].children[0].children[1].neighbor).toEqual(root.children[0].children[1].children[1].children[0]);
    expect(root.children[0].children[1].children[1].children[0].neighbor).toEqual(root.children[0].children[1].children[1].children[1]);
    expect(root.children[0].children[1].children[1].children[1].neighbor).toEqual(root.children[1].children[0].children[0].children[0]);
    expect(root.children[1].children[0].children[0].children[0].neighbor).toEqual(root.children[1].children[0].children[0].children[1]);
    expect(root.children[1].children[0].children[0].children[1].neighbor).toEqual(root.children[1].children[0].children[1].children[0]);
    expect(root.children[1].children[0].children[1].children[0].neighbor).toEqual(root.children[1].children[0].children[1].children[1]);
    expect(root.children[1].children[0].children[1].children[1].neighbor).toEqual(root.children[1].children[1].children[0].children[0]);
    expect(root.children[1].children[1].children[0].children[0].neighbor).toEqual(root.children[1].children[1].children[0].children[1]);
    expect(root.children[1].children[1].children[0].children[1].neighbor).toEqual(root.children[1].children[1].children[1].children[0]);
    expect(root.children[1].children[1].children[1].children[0].neighbor).toEqual(root.children[1].children[1].children[1].children[1]);
    expect(root.children[1].children[1].children[1].children[1].neighbor).toBeNull();
  });

  // Unbalanced trees

/*
        O-->null
       / \
      O-->O-->null
     /     \
    O------>O-->null
   /         \
  O---------->O-->null
 /             \
O-------------->O-->null
*/

  it('correctly sets the neighbors in unbalanced tree #1', function() {
    var root = {
      neighbor: null,
      children: [
        {
          children: [
            {
              children: [
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    null
                  ]
                },
                null
              ]
            },
            null
          ]
        },
        {
          children: [
            null,
            {
              children: [
                null,
                {
                  children: [
                    null,
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    traverse(root, null);

    expect(root.children[0].neighbor).toEqual(root.children[1]);
    expect(root.children[1].neighbor).toBeNull();

    expect(root.children[0].children[0].neighbor).toEqual(root.children[1].children[1]);
    expect(root.children[1].children[1].neighbor).toBeNull();

    expect(root.children[0].children[0].children[0].neighbor).toEqual(root.children[1].children[1].children[1]);
    expect(root.children[1].children[1].children[1].neighbor).toBeNull();

    expect(root.children[0].children[0].children[0].children[0].neighbor).toEqual(root.children[1].children[1].children[1].children[1]);
    expect(root.children[1].children[1].children[1].children[1].neighbor).toBeNull();
  });

/*
        O-->null
       /
      O-->null
     /
    O-->null
   /
  O-->null
 /
O-->null
*/

  it('correctly sets the neighbors in unbalanced tree #2', function() {
    var root = {
      neighbor: null,
      children: [
        {
          children: [
            {
              children: [
                {
                  children: [
                    {
                      children: [
                        null,
                        null
                      ]
                    },
                    null
                  ]
                },
                null
              ]
            },
            null
          ]
        },
        null
      ]
    };

    traverse(root, null);

    expect(root.children[0].neighbor).toBeNull();

    expect(root.children[0].children[0].neighbor).toBeNull();

    expect(root.children[0].children[0].children[0].neighbor).toBeNull();

    expect(root.children[0].children[0].children[0].children[0].neighbor).toBeNull();
  });

/*
        O-->null
         \
          O-->null
           \
            O-->null
             \
              O-->null
               \
                O-->null
*/

  it('correctly sets the neighbors in unbalanced tree #3', function() {
    var root = {
      neighbor: null,
      children: [
        null,
        {
          children: [
            null,
            {
              children: [
                null,
                {
                  children: [
                    null,
                    {
                      children: [
                        null,
                        null
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };

    traverse(root, null);

    expect(root.children[1].neighbor).toBeNull();

    expect(root.children[1].children[1].neighbor).toBeNull();

    expect(root.children[1].children[1].children[1].neighbor).toBeNull();

    expect(root.children[1].children[1].children[1].children[1].neighbor).toBeNull();
  });
});
