import ImgixClient from 'imgix-core-js'
import { parse } from 'hjson'
import unescape from 'lodash.unescape'

/**
 * ## Anonymous default export
 * A wrapper around the renderer to allow instantiation.
 *
 * @param {Object|String} opts
 */
export default function (opts) {
  const client = new ImgixClient(opts)
  return (href, title, alt) => {
    let params = /\{.*\}/.exec(title)
    if (params) {
      title = title.replace(/\{.*\}/, '')
      params = params[0]
      // see https://github.com/hjson/hjson-js/issues/13
      params = unescape(params).replace(/'/g, '"')
      href = client.buildURL(href, parse(params))
    }
    title = title ? ` &quot;${title}&quot;` : ''
    return `<img src="${href}" alt="${alt}">${title}`
  }
}
