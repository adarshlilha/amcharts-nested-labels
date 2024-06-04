import { GetLabelWidthType, LabelProps, NestedLabel, RangeType } from "./types";

const VERTICAL_LABEL_DELTA = 35;

// calculate width of new label
function getLabelWidth({ xAxis, series, dataItem }: GetLabelWidthType): number {
  const categoryWidth = xAxis.getDataItemCoordinateX(dataItem, "category");
  const endCategoryWidth = xAxis.getDataItemCoordinateX(
    dataItem,
    "endCategory"
  );
  const barWidth = series.columns.values[0]?.width();
  let labelWidth = endCategoryWidth - categoryWidth + 70;

  if (barWidth > labelWidth) labelWidth = barWidth;
  return labelWidth;
}

function createRange({ xAxis, series, start, end, label, dy }: RangeType) {
  const dataItem = xAxis.makeDataItem({
    category: start,
    endCategory: end,
  });
  const labelWidth = getLabelWidth({ xAxis, series, dataItem });
  const yDelta = typeof dy === "function" ? dy(VERTICAL_LABEL_DELTA) : dy;

  const labelConfig: NestedLabel = {
    dy: yDelta || VERTICAL_LABEL_DELTA,
    oversizedBehavior: "trucate",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "left",
    html: `
          <div style="width: ${labelWidth}px; display: flex; position: relative; padding: 10px 0">
            <span style="left: -1px; position: absolute; top: -7px; color: #BABBBE">|</span>
            <p style="display: inline-block;margin-top: 0;border-top: 1px solid #BABBBE;width: 100%;text-align: center;color: #515357;font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">${label}</p>
            <span style="right: -1px; position: absolute; top: -7px; color: #BABBBE">|</span>
          </div>`,
  };

  const range = xAxis.createAxisRange(dataItem);
  range.get("label").setAll({
    text: "",
  });
  dataItem.get("label").setAll(labelConfig);

  return range;
}

export function createLabel({
  xAxis,
  series,
  startEndLabels,
  label,
  dy,
}: LabelProps) {
  return setTimeout(() => {
    createRange({
      xAxis: xAxis.current ? xAxis.current : xAxis,
      series: series.current ? series.current : series,
      start: startEndLabels[0],
      end: startEndLabels[startEndLabels.length - 1],
      label,
      dy,
    });
  }, 1000);
}
