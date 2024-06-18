# amcharts-nested-labels

[![Contributors](https://img.shields.io/github/contributors/adarshlilha/amcharts-nested-labels.svg)](https://github.com/adarshlilha/amcharts-nested-labels/graphs/contributors)
[![License](https://img.shields.io/github/license/adarshlilha/amcharts-nested-labels.svg)](https://github.com/adarshlilha/amcharts-nested-labels/blob/main/LICENSE)

Wrapper library to add nested labels to amcharts5 axes

[NPM lib](https://www.npmjs.com/package/amcharts-nested-labels)

### Independent labels

![independent label](https://raw.githubusercontent.com/adarshlilha/amcharts-nested-labels/main/public/simple-label.png)
ref source code - [codepen](https://codepen.io/adarshlilha/pen/jOoZWqo)

### Nested labels

![nested label](https://raw.githubusercontent.com/adarshlilha/amcharts-nested-labels/main/public/nested.png)
ref react source code - [codesandbox](https://codesandbox.io/p/sandbox/amcharts-nested-labels-ktr25j?file=%2Fsrc%2FApp.tsx%3A6%2C32&layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clwv74acs00063b6habop96mu%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clwv74acr00023b6h458zses3%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clwv74acr00033b6hxnbvh8zl%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clwv74acr00053b6h6ogep1vx%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B47.99091197511027%252C52.00908802488973%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clwv74acr00023b6h458zses3%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clwv74acr00013b6h1e4j5ss3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Fsrc%252Findex.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%252C%257B%2522id%2522%253A%2522clwv8im3t00023b6haf1d3vno%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522initialSelections%2522%253A%255B%257B%2522startLineNumber%2522%253A6%252C%2522startColumn%2522%253A32%252C%2522endLineNumber%2522%253A6%252C%2522endColumn%2522%253A32%257D%255D%252C%2522filepath%2522%253A%2522%252Fsrc%252FApp.tsx%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clwv74acr00023b6h458zses3%2522%252C%2522activeTabId%2522%253A%2522clwv8im3t00023b6haf1d3vno%2522%257D%252C%2522clwv74acr00053b6h6ogep1vx%2522%253A%257B%2522id%2522%253A%2522clwv74acr00053b6h6ogep1vx%2522%252C%2522activeTabId%2522%253A%2522clwv8ippx001i3b6hiqfqwfyc%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522id%2522%253A%2522clwv8ippx001i3b6hiqfqwfyc%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clwv74acr00033b6hxnbvh8zl%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522clwv74acr00033b6hxnbvh8zl%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A14.087009803921575%257D)

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
