import {
  script,
  googleAnalytics,
} from 'html-dist';

export default {
  // where to write to 
  outputFile: 'dev/index.html',
  // minify the HTML 
  minify: false,
  head: {
    // in the <head>, remove any elements matching the 'script' CSS selector 
    remove: 'script'
  },
  body: {
    // append the following things to the body 
    appends: [
      script({
        src: 'app.min.js'
      })
    ]
  }
}