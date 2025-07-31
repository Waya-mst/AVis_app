import React from 'react';

type Props = {
  x: number;
  y: number;
  node: { id: number; group: number };
};

const Tooltip: React.FC<Props> = ({ x, y, node }) => (
  <div
    style={{
      position: 'absolute',
      top: y,
      left: x,
      background: 'white',
      padding: '4px 8px',
      border: '1px solid #ccc',
      pointerEvents: 'none'
    }}
  >
    <p><strong>ID:</strong> {node.id}</p>
    <p><strong>Group:</strong> {node.group}</p>
  </div>
);

export default Tooltip;
