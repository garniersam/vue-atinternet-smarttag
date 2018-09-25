export default {
  install (Vue, options = { secure: true }) {
    // Service
    const smartTag = {}

    smartTag.newTag = () => {
      try {
        return new window.ATInternet.Tracker.Tag(options)
      } catch (ex) {
        return {
          dispatch: () => ({}),
          page: {
            set: () => ({})
          },
          click: {
            send: () => ({})
          }
        }
      }
    }
    smartTag.tag = smartTag.newTag()

    // Docs: https://developers.atinternet-solutions.com/javascript-fr/contenus-javascript-fr/pages-javascript-fr/
    smartTag.sendPage = info => {
      smartTag.tag.page.set(info)
      smartTag.tag.dispatch()
    }

    // Docs: https://developers.atinternet-solutions.com/javascript-fr/contenus-javascript-fr/clics-javascript-fr/
    smartTag.sendClick = info => {
      smartTag.tag.click.send(info)
    }

    Vue.smartTag = smartTag
    Vue.prototype.$smartTag = smartTag

    // Directive v-smarttag-click="{ myData: 'myValue' }"
    Vue.directive('smarttag-click', {
      bind (el, binding, vnode, oldVnode) {
        el.addEventListener('click', () => {
          Vue.smartTag.sendClick(binding.value)
        })
      }
    })
  }
}
