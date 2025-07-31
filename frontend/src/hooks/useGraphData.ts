import { useState, useEffect } from 'react';
import { fetchGraph } from '../utils/api';

export type Node = { id: number; group: number };
export type Link = { source: number; target: number };

export default function useGraphData() {
  const [data, setData] = useState<{nodes:Node[];links:Link[]}>({
    nodes: [],
    links: []
    });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  console.log("hello");

  useEffect(() => {
  fetchGraph()
    .then(d => setData(d))
    .catch(e => setError(e))
    .finally(() => setLoading(false))
}, []);
  console.log("world");

  return { data, loading, error };
}
