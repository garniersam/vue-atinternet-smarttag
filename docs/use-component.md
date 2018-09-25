# Use in a component

## Track a page

To track a page, use ```this.$smartTag.sendPage()``` with your desired data as argument.

More infos on page tracking expected data: [here](https://developers.atinternet-solutions.com/javascript-en/content-javascript-en/pages-javascript-en/)

```javascript
export default {
  name: 'myComponent',
  methods: {
    trackMyPage () {
      this.$smartTag.sendPage({
        name: 'Page name/label',
        chapter1: 'First chapter level'
      })
    }
  }
}
```

## Track a click

To track a click, use ```this.$smartTag.sendClick()``` with your desired data as argument (or use the ```v-smarttag-click``` directive).

More infos on click tracking expected data: [here](https://developers.atinternet-solutions.com/javascript-en/content-javascript-en/clicks-javascript-en/)

```javascript
export default {
  name: 'myComponent',
  methods: {
    trackMyClick () {
      this.$smartTag.sendClick({
        elem: 'Tagged DOM element',
        name: 'Click label/name'
      })
    }
  }
}
```
