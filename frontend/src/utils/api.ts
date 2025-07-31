import axios from 'axios';
import type { Node, Link } from '../hooks/useGraphData';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

export async function fetchGraph() {
  const resp = await axios.get<{nodes:Node[];links:Link[]}>('/api/graph', {
    headers: { 'Cache-Control': 'no-cache' }
  });
  return resp.data;
}