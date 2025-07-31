import React, { useEffect, useRef } from 'react';
import ForceGraph2D, { ForceGraphMethods } from 'react-force-graph-2d';

type Node = { id: number; group: number };
type Link = { source: number; target: number };

type Props = {
  data: { nodes: Node[]; links: Link[] };
  repulsion: number;
};

const Graph: React.FC<Props> = ({ data, repulsion }) => {
  const fgRef = useRef<ForceGraphMethods | undefined>(undefined);

  useEffect(() => {
    // repulsion 値を更新
    fgRef.current?.d3Force('charge')?.strength(-repulsion);
  }, [repulsion]);

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={data}
      nodeAutoColorBy="group"
      linkDirectionalParticles={2}
      width={window.innerWidth - 256}
      height={window.innerHeight}
    />
  );
};

export default Graph;
