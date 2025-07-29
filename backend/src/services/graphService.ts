import fs from 'fs/promises';
import path from 'path';
import { Node } from '../models/Node';
import { Link } from '../models/Link';

const DATA_DIR = path.resolve(__dirname, '../../data/processed');

export async function loadGraph(threshold: number): Promise<{
  nodes: Node[];
  links: Link[];
}> {
  // JSON 読み込み
  const [nodesRaw, linksRaw] = await Promise.all([
    fs.readFile(path.join(DATA_DIR, 'nodes.json'), 'utf8'),
    fs.readFile(path.join(DATA_DIR, 'links.json'), 'utf8'),
  ]);
  const nodes: Node[] = JSON.parse(nodesRaw);
  let links: Link[] = JSON.parse(linksRaw);

  // threshold に応じたフィルタ例（ここでは degree-based filtering の想定）
  if (threshold > 0) {
    const validIds = new Set(
      nodes.filter(n => n.group >= threshold).map(n => n.id)
    );
    links = links.filter(l => validIds.has(l.source) && validIds.has(l.target));
  }

  return { nodes, links };
}
