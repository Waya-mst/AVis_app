export interface Node {
  /** ノードの一意識別子 */
  id: number;
  /** コミュニティ／グループ ID */
  group: number;
  /** （必要なら）追加属性もここに定義 */
  // label?: string;
  // size?: number;
}
