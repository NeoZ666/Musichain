import React from "react";

const tree = [
  {
    id: 1,
    src: "https://example.com/image1.jpg",
    children: [
      {
        id: 2,
        src: "https://example.com/image2.jpg",
        children: [
          {
            id: 3,
            src: "https://example.com/image3.jpg",
          },
          // ...
        ],
      },
      // ...
    ],
  },
  // ...
];

const TreeNode = ({ node }) => {
  return (
    <div className="p-4 border rounded shadow">
      <img src={node.src} alt="" className="w-full h-auto" />
      {node.children && node.children.map((child) => <TreeNode node={child} />)}
    </div>
  );
};

const TreeView = ({ tree }) => {
  return tree ? tree.map((node) => <TreeNode node={node} />) : null;
};

export default TreeView;
