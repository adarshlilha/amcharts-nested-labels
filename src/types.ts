export interface LabelProps {
  xAxis: any;
  series: any;
  startEndLabels: string[];
  label: string;
  dy?: number | ((delta: number) => number);
}

export interface NestedLabel {
  dy: number;
  oversizedBehavior: string;
  fontWeight?: string;
  fontSize?: number;
  textAlign: string;
  html?: string;
}

export interface GetLabelWidthType {
  xAxis: any;
  series: any;
  dataItem: any;
}

export interface RangeType {
  xAxis: any;
  series: any;
  start: string;
  end: string;
  label: string;
  dy?: number | ((delta: number) => number);
}
