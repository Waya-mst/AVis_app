import json
import networkx as nx
from community import community_louvain

# 1. raw データ読み込み
G = nx.read_edgelist(
    'data/raw/facebook_combined.txt', 
    nodetype=int, 
    data=False, 
    create_using=nx.Graph()
)

# （必要なら circles や feat ファイルも読み込んで属性追加）

# 2. コミュニティ検出（Louvain）
partition = community_louvain.best_partition(G)

# 3. JSON 出力
nodes = [
    {'id': n, 'group': partition.get(n, -1)}
    for n in G.nodes()
]
links = [
    {'source': u, 'target': v}
    for u, v in G.edges()
]
with open('data/processed/nodes.json','w') as f:
    json.dump(nodes, f, indent=2)
with open('data/processed/links.json','w') as f:
    json.dump(links, f, indent=2)
