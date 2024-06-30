function buildTree(items) {
    const tree = []; // 树形数组
    const lookup = {}; // 映射表

    // 构建映射表
    items.forEach(item => {
        lookup[item.id] = {
            children: [],
            ...item
        };
    });
    console.log("🚀 -- 》》 ~ lookup:", lookup)

    // 遍历数组，将每个项添加到其父项的children数组中
    items.forEach(item => {
        if (item.parent_id) {
            if (!lookup[item.parent_id].children) {
                lookup[item.parent_id].children = [];
            }
            lookup[item.parent_id].children.push(lookup[item.id]);
        } else {
            tree.push(lookup[item.id]);
        }
    });

    return tree;
}

// 示例数据
const items = [
    { id: 1, parent_id: null, name: "节点1" },
    { id: 2, parent_id: 1, name: "节点1.1" },
    { id: 3, parent_id: 1, name: "节点1.2" },
    { id: 4, parent_id: 2, name: "节点1.1.1" },
    { id: 5, parent_id: 3, name: "节点1.2.1" }
];

const tree = buildTree(items);
console.log(tree);
