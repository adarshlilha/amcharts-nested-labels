import { LabelProps, NestedLabel } from "./types";

function createRange({
  xAxisRef,
  seriesRef,
  start,
  end,
  label,
  isGrandParent = false,
}) {
  const rangeDataItem = xAxisRef.current.makeDataItem({
    category: start,
    endCategory: end,
  });

  const range = xAxisRef.current.createAxisRange(rangeDataItem);

  const labelConfig: NestedLabel = {
    dy: isGrandParent ? 80 : 35,
    oversizedBehavior: "trucate",
    fontWeight: "400",
    fontSize: 14,
    textAlign: "left",
  };

  const categoryWidth = xAxisRef.current.getDataItemCoordinateX(
    rangeDataItem,
    "category"
  );
  const endCategoryWidth = xAxisRef.current.getDataItemCoordinateX(
    rangeDataItem,
    "endCategory"
  );
  const barWidth = seriesRef.current.columns.values[0]?.width();
  let labelWidth = endCategoryWidth - categoryWidth + 70;

  if (barWidth > labelWidth) labelWidth = barWidth;

  range.get("label").setAll({
    text: "",
  });

  labelConfig.html = `
        <div style="width: ${labelWidth}px; display: flex; position: relative; padding: 10px 0">
          <span style="left: -1px; position: absolute; top: -4px; color: #BABBBE">|</span>
          <p style="display: inline-block;margin-top: 0;border-top: 1px solid #BABBBE;width: 100%;text-align: center;color: #515357;font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap">${label}</p>
          <span style="right: -1px; position: absolute; top: -4px; color: #BABBBE">|</span>
        </div>`;
  rangeDataItem.get("label").setAll(labelConfig);
  return range;
}

export function createLabel({
  xAxisRef,
  seriesRef,
  startEndLabels,
  rangeLabel,
  rangeArr = [],
  isGrandParent = false,
}: LabelProps) {
  setTimeout(() => {
    const rangeElem = createRange({
      xAxisRef,
      seriesRef,
      start: startEndLabels[0],
      end: startEndLabels[startEndLabels.length - 1],
      label: rangeLabel,
      isGrandParent,
    });
    if (rangeElem) {
      rangeArr.push(rangeElem);
    }
  }, 1000);
}
