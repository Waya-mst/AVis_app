import React from 'react';
import Slider from 'react-slider';

type Props = {
  repulsion: number;
  onRepulsionChange: (v: number) => void;
};

const Controls: React.FC<Props> = ({ repulsion, onRepulsionChange }) => (
  <div className="space-y-4">
    <div>
      <label className="block mb-1">Node Repulsion</label>
      <Slider
        min={0}
        max={1000}
        value={repulsion}
        onChange={v => onRepulsionChange(v as number)}
      />
      <div>{repulsion}</div>
    </div>
    {/* 他のスライダー・ドロップダウンもここに追加 */}
  </div>
);

export default Controls;
