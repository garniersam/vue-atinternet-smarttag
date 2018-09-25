export default {
  install (Vue, options = { secure: true }) {
    // Service
    const atInternet = {}

    atInternet.newTag = () => {
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
    atInternet.tag = atInternet.newTag()

    // Docs: https://developers.atinternet-solutions.com/javascript-fr/contenus-javascript-fr/pages-javascript-fr/
    atInternet.sendPage = info => {
      atInternet.tag.page.set(info)
      atInternet.tag.dispatch()
    }

    // Docs: https://developers.atinternet-solutions.com/javascript-fr/contenus-javascript-fr/clics-javascript-fr/
    atInternet.sendClick = info => {
      atInternet.tag.click.send(info)
    }

    Vue.atInternet = atInternet
    Vue.prototype.$atInternet = atInternet

    // Directive v-at-track-click="{ myData: 'myValue' }"
    Vue.directive('at-track-click', {
      bind (el, binding, vnode, oldVnode) {
        el.addEventListener('click', () => {
          Vue.atInternet.sendClick(binding.value)
        })
      }
    })
  }
}
