import buble from 'rollup-plugin-buble'
import { uglify } from 'rollup-plugin-uglify'
import node from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.min.js',
    format: 'umd',
    name: 'smarttag'
  },
  plugins: [
    node(),
    buble(),
    uglify()
  ]
}
