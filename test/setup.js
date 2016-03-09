import { jsdom } from 'jsdom'
import hook from 'css-modules-require-hook'
import sass from 'node-sass'

global.document = jsdom('<!doctype html><html><body></body></html>')
global.window = document.defaultView
global.navigator = global.window.navigator

// Handle SCSS Imports
hook({
  extensions: [ '.scss' ],
  preprocessCss: data => sass.renderSync({ data }).css
})