describe('the traverse utility', function() {
  it('correctly sets the neighbors of the first level', function() {
    var root = {
      neighbor: null,
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
    };

    traverse(root, null);

    expect(root.children[0].neighbor).toEqual(root.children[1]);
    expect(root.children[1].neighbor).toBeNull();
  });

  it('correctly sets the neighbors of the second level', function() {
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

    expect(root.children[0].children[0].neighbor).toEqual(root.children[1].children[0]);
    expect(root.children[1].children[0].neighbor).toEqual(root.children[1].children[1]);
    expect(root.children[1].children[1].neighbor).toBeNull();
  });

  it('correctly sets the neighbors of the third level', function() {
    var root = {
      id: 'a',
      neighbor: null,
      children: [
        {
          id: 'b',
          children: [
            {
              id: 'd',
              children: [
                {
                  id: 'g',
                  children: [
                    {
                      id: 'j',
                      children: [
                        null,
                        null
                      ]
                    },
                    {
                      id: 'k',
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

    expect(root.children[0].children[0].children[0].neighbor).toEqual(root.children[1].children[1].children[0]);
    expect(root.children[1].children[1].children[0].neighbor).toEqual(root.children[1].children[1].children[1]);
    expect(root.children[1].children[1].children[1].neighbor).toBeNull();
  });

  it('correctly sets the neighbors of the fourth level', function() {
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

    expect(root.children[0].children[0].children[0].children[0].neighbor).toEqual(root.children[0].children[0].children[0].children[1]);
    expect(root.children[0].children[0].children[0].children[1].neighbor).toBeNull();
  });
});
