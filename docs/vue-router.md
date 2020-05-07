# Integration with vue-router

Here is an example using this plugin to automatically track pages with vue-router

Add an "smartTag" meta in your route with the data you want to send to at internet when arriving on the page (in this example, it can be an object or a function returning an object).

After each transition ```Vue.smartTag.sendPage()``` is called with the corresponding smartTag meta as an argument.

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
  if (to.meta.smartTag) {
    Vue.smartTag.sendPage(typeof to.meta.smartTag === 'function' ? to.meta.smartTag() : to.meta.smartTag)
  }
})

export router
```
