import React, { useState } from 'react';
import Graph from './components/Graph';
import Controls from './components/Controls';
import useGraphData from './hooks/useGraphData';

const App: React.FC = () => {
  // パラメータ state（例：ノード間反発力）
  const [repulsion, setRepulsion] = useState(400);
  // データ取得カスタムフック
  const { data, loading, error } = useGraphData();

  if (loading) {
    return <p>Loading graph data…</p>;
    }
    if (error) {
    return <p>Error: {error.message}</p>;
    }
    if (!data) {
    return <p>No data available</p>;
    }

  return (
  <Graph data={data} repulsion={repulsion} />
);

};

export default App;
