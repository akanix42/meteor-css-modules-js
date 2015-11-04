# [CSS Modules](https://github.com/css-modules/css-modules) for Meteor

##CSS Modules JS compiler

Standalone build plugin for converting **import ... from** statements to the **CssModule.import()** syntax used by [nathantreid:css-modules-mss](https://github.com/nathantreid/meteor-css-modules-mss).

The main module, which includes the compilers for both JS and MSS, can be found here: [nathantreid:css-modules](https://github.com/nathantreid/meteor-css-modules).

## Installation

Install using Meteor's package management system:

```bash
meteor add nathantreid:css-modules-js
```

##Usage

***hello.js***
``` js
import * as styles from "{}/hello.mss";

Template.hello.helpers({
    styles: styles
});
```

will be converted to

***hello.js***
``` js
var styles = CssModules.import("{}/hello.mss");

Template.hello.helpers({
    styles: styles
});
```
