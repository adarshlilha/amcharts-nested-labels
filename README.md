# amcharts-nested-labels

[![Contributors](https://img.shields.io/github/contributors/adarshlilha/amcharts-nested-labels.svg)](https://github.com/adarshlilha/amcharts-nested-labels/graphs/contributors)
[![License](https://img.shields.io/github/license/adarshlilha/amcharts-nested-labels.svg)](https://github.com/adarshlilha/amcharts-nested-labels/blob/main/LICENSE)

Wrapper library to add nested labels to amcharts5 axes

[NPM lib](https://www.npmjs.com/package/amcharts-nested-labels)

### Non-overflowing text

![normal label](https://github-production-user-asset-6210df.s3.amazonaws.com/13575704/336601510-4a6137bb-3f05-4ab8-8ed3-7ff64e5ff594.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240604T204135Z&X-Amz-Expires=300&X-Amz-Signature=c708ce8087ea04bbce8c38f84742ca932b67523b9ddcccb03a863dabfa3b8f47&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=0)

### Overflowing text

![overflowing label](https://github-production-user-asset-6210df.s3.amazonaws.com/13575704/336601250-aa742dd9-4784-405a-ae4c-deac9369e9b9.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240604T204209Z&X-Amz-Expires=300&X-Amz-Signature=3b4ddda455bb1819fafbdd274c142e9898e9fae2f053244a6104c5d39f8eae2e&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=0)

## Prerequisites

- this library is meant to be used on data vizualization with axes created using amcharts5

## Usage

This library helps you to inject html in amcharts5 axes in a nested tree format as depicted in the sample image above

invoke `createLabel` with the required parameters to get nested axes labels

```js
    import { createLabel } from 'amcharts-nested-labels'

    createLabel({
        xAxisRef, // instance of amcharts axes
        seriesRef, // instance of amcharts series created
        // Array containing all leaf node labels where arr[0]=first label & arr[end] = last label
        startEndLabels: string[],
        // string label to be used for new nested label,
        label: string,
        // pass delta Y to alter Y position of the new label
        dy?: (number) => number,
    });
```

**NOTE** - labels passed in `startEndLabels` must be individual bars in the chart plot, else labels will not be placed correctly

## Motivation

I faced a challenge to create a similar label vizualization.
Initially thought was to get x position of each bar and plot a label with html content(border)

Next challenge was calculating the html content width?

- should it stick to bar width?
- should it show the whole text content?
  - what if the text overflows the bar and take too much space?
- finding x pos for each bar is expensive, can it be optimized?

Exploring solutions to the above, led me to axes range in a data viz libraries - [amcharts axes](https://www.amcharts.com/docs/v4/concepts/axes/axis-ranges/)

**axes range** - a range of values in the chart, can be a subset of the whole set of values

found a nifty answer to create nested labels using range and this library is product of the same!

## Contributing

found the lib useful?

please create an [issue](https://github.com/adarshlilha/amcharts-nested-labels/issues) to get the discussion started on any open bugs/feature requests
