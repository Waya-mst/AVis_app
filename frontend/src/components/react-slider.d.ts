
declare module 'react-slider' {
  // any でも良いですが、props 型を少しでも拾いたいなら下記のように
  import { ComponentType } from 'react';

  interface ReactSliderProps {
    // 必要に応じて型情報を追加
    min?: number;
    max?: number;
    value?: number | number[];
    onChange?: (value: number | number[]) => void;
    onBeforeChange?: (value: number | number[]) => void;
    onAfterChange?: (value: number | number[]) => void;
    // …その他の props
  }

  const ReactSlider: ComponentType<ReactSliderProps>;
  export default ReactSlider;
}
