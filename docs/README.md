# vue-atinternet-smarttag

"vue-atinternet-smarttag" is a VueJS Plugin implementation of [At Internet Smartag solution](https://www.atinternet.com/produits/smarttag/)

__This plugin will add to your VueJs project:__

* a ```v-smarttag-click``` directive to easily track clicks on dom objects
* an access to your tracking tag in every component via ```this.$smartTag```
* an access to your tracking tag via ```Vue.smartTag``` (to be used in your routing scripts or vuex actions)

You'll be able to track page and clicks (only clicks with the directive).

__At Internet SmartTag docs:__

* [Pages tracking](https://developers.atinternet-solutions.com/javascript-en/content-javascript-en/pages-javascript-en/)
* [Clicks tracking](https://developers.atinternet-solutions.com/javascript-en/content-javascript-en/clicks-javascript-en/)

## Todo

* [x] Add Bundler (rollup)
* [x] Add Tests framework (Jest & Vue-test-utils)
* [ ] Add a test case for vue-router auto page view
* [x] Doc website (vuepress)
