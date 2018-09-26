# Installation

## SmartTag script installation

First you will have to install your custom smart tag script (more details: [here](https://developers.atinternet-solutions.com/javascript-en/getting-started-javascript-en/tracker-initialisation-javascript-en/)).

> Before starting, please download our JavaScript library, or push it onto our CDN, from within the [Tag Composer](https://apps.atinternet-solutions.com/TagComposer/#/) interface.

> Once the library is set up, you must call it inside the ```<head>``` of your page.

```markup
<!-- Local file -->
<script src="smarttag.js"></script>
<!-- CDN file -->
<!-- File must be published on the TDN for this site within Tag Composer -->
<script src="//tag.aticdn.net/YOURSITEID/smarttag.js"></script>
```

## VueJs plugin installation

Open your project folder in a terminal an type:

```bash
npm i vue-atinternet-smarttag
```

or

```bash
yarn add vue-atinternet-smarttag
```

then in your main.js file:

```javascript
import smartTag from 'vue-atinternet-smarttag'

Vue.use(smartTag)
```
