# vue-atinternet-smarttag

AtInternet SmartTag implementation as a VueJs plugin and click tracking directive.

## Install

```javascript
import smartTag from 'vue-atinternet-smarttag'

Vue.use(smartTag)
```

## Use

### In a component

```javascript
export default {
  name: 'myComponent',
  methods: {
    trackMyPage () {
      this.$smartTag.sendPage({
        name: 'Page name/label',
        chapter1: 'First chapter level'
      })
    },
    trackMyClick () {
      this.$smartTag.sendClick({
        elem: 'Tagged DOM element',
        name: 'Click label/name'
      })
    }
  }
}
```

### with Vue instance

```javascript
import Vue from 'vue'

Vue.smartTag.sendPage({
  name: 'Page name/label',
  chapter1: 'First chapter level'
})
```

### In vue-router (automatic page view)

Add an "atInternet" meta in your route with the data you want to send to at internet when arriving on the page.

In this example, "smartTag" meta can be an object or a function returning an object.

```javascript
import Router from 'vue-router'
import myFirstRouteComp from './components/myFirstRouteComp.vue'
import mySecondRouteComp from './components/mySecondRouteComp.vue'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'myFirstRoute',
      component: myFirstRouteComp,
      meta: {
        smartTag: {
          name: 'Page name/label',
          chapter1: 'First chapter level'
        }
      }
    },
    {
      name: 'mySecondRoute',
      component: mySecondRouteComp,
      meta: {
        smartTag () {
          return {
            name: 'Page name/label',
            chapter1: 'First chapter level'
          }
        }
      }
    }
  ]
})

// At Internet Tagging, "to.meta.atInternet" can be an object or a function returning an object
router.afterEach((to, from) => {
  if (to.meta.atInternet) {
    Vue.smartTag.sendPage(typeof to.meta.smartTag === 'function' ? to.meta.smartTag() : to.meta.smartTag)
  }
})

export router
```

### As a directive for click tracking

Use the "v-at-track-click" directive to automatically track clicks on dom object with the provided data.

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


## Todo

* [x] Add Bundler (rollup)
* [x] Add Tests framework (Jest & Vue-test-utils)
* [ ] Add a test case for vue-router auto page view
* [ ] Doc website (vuepress)
