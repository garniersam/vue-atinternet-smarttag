# "v-smarttag-click" directive

Use the "v-smarttag-click" directive to automatically track clicks on dom object with the provided data.

```javascript
export default {
  template: `
    <div>
      <button v-smarttag-click="trackingData">My button</button>
    </div>
  `,
  data () {
    return {
      trackingData: {
        elem: 'Tagged DOM element',
        name: 'Click label/name'
      }
    }
  }
}
```
