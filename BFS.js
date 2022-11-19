const mainTree = [
  {
    key: "obj_1",
    children: [
      {
        key: "obj_1_1",
        children: null
      },
      {
        key: "obj_1_2",
        children: [
          {
            key: "obj1_2_1",
            children: null
          }
        ]
      }
    ]
  },
  {
    key: "obj_2",
    children: [
      {
        key: "obj_2_1",
        children: [
          {
            key: "obj_2_1_1",
            children: null
          },
          {
            key: "obj_2_1_2",
            children: null
          }
        ]
      }
    ]
  }
]

function BFS(tree, queue) {
  // when tree is array iterate 
  for (let obj of tree) {
      // when find has child the call BFS iterate with nested array
      if (obj.children) {
        queue.push({
          hasChild: true,
          key: obj.key
        })
        BFS(obj.children, queue)
      }else {
        queue.push({
          hasChild: false,
          key: obj.key
        })
      }
    }
  // return queue that has flatted object
  return queue
}

const queue = [];
const traversed = BFS(mainTree, queue);
console.log(traversed);
