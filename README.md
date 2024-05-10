# amcharts-nested-labels

[![Contributors](https://img.shields.io/github/contributors/adarshlilha/amcharts-nested-labels.svg)](https://github.com/adarshlilha/amcharts-nested-labels/graphs/contributors)
[![License](https://img.shields.io/github/license/adarshlilha/amcharts-nested-labels.svg)](https://github.com/adarshlilha/amcharts-nested-labels/blob/main/LICENSE)

Wrapper library to add nested labels to amcharts5 axes

![alt text](https://i.imgur.com/HHdvh3O.png)

## Prerequisites

- this library is meant to be used on data vizualization with axes created using amcharts5

## Usage

This library helps you to inject html in amcharts5 axes in a nested tree format as depicted in the sample image above

invoke `createLabel` with the required parameters to get nested axes labels

```js
    import { createLabel } from 'amcharts-nested-labels'

    createLabel({
        xAxisRef: <reference to amcharts axes>,
        seriesRef: <reference to amcharts series created>,

        <Array containing all leaf node labels where arr[0]=first label & arr[end] = last label>
        startEndLabels: string[]

        rangeLabel: string <string label to be used for new parent label>,
        rangeArr: [] <array to hold to new axes range to be created>
        isGrandParent: boolean <true|false> - used to appropriately place the new label
    })
```
