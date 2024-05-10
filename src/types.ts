export interface LabelProps {
  xAxisRef: any;
  seriesRef: any;
  startEndLabels: string[];
  rangeLabel: string;
  rangeArr: any;
  isGrandParent: boolean;
}

export interface NestedLabel {
  dy: number;
  oversizedBehavior: string;
  fontWeight?: string;
  fontSize?: number;
  textAlign: string;
  html?: string;
}
