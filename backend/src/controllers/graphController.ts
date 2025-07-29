import { Request, Response } from 'express';
import { loadGraph } from '../services/graphService';

export async function getGraph(req: Request, res: Response) {
  try {
    // クエリパラメータを数値／デフォルト化
    const threshold = parseFloat(req.query.threshold as string) || 0;

    // ノード・リンクデータ取得
    const { nodes, links } = await loadGraph(threshold);

    // 正常応答
    res.json({ nodes, links });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
