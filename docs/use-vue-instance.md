# Use outside components

You can use  ```vue-atinternet-smarttag``` in any javascript file outside components by using ```Vue.smartTag.sendPage()``` and  ```Vue.smartTag.sendClick()``` (don't forget to import ```Vue``` in your file).

## Track a page

To track a page, use ```Vue.smartTag.sendPage()``` with your desired data as argument.

More infos on page tracking expected data: [here](https://developers.atinternet-solutions.com/javascript-en/content-javascript-en/pages-javascript-en/)

```javascript
import Vue from 'vue'

Vue.smartTag.sendPage({
  name: 'Page name/label',
  chapter1: 'First chapter level'
})
```

## Track a click

To track a click, use ```Vue.smartTag.sendClick()``` with your desired data as argument.

More infos on click tracking expected data: [here](https://developers.atinternet-solutions.com/javascript-en/content-javascript-en/clicks-javascript-en/)

```javascript
import Vue from 'vue'

Vue.smartTag.sendClick({
  name: 'Page name/label',
  chapter1: 'First chapter level'
})
```
