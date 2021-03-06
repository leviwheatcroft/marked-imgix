# marked-imgix

![nodei.co](https://nodei.co/npm/marked-imgix.png?downloads=true&downloadRank=true&stars=true)

![npm](https://img.shields.io/npm/v/marked-imgix.svg)

![github-issues](https://img.shields.io/github/issues/leviwheatcroft/marked-imgix.svg)

![stars](https://img.shields.io/github/stars/leviwheatcroft/marked-imgix.svg)

![forks](https://img.shields.io/github/forks/leviwheatcroft/marked-imgix.svg)

[marked](https://www.npmjs.com/package/marked) / [imgix](http://imgix.com/)
renderer to generate imgix urls.

## install

`npm i --save marked-imgix`

## usage

```javascript
import markedimgix from 'marked-imgix'
import marked from 'marked'

const renderer = new marked.Renderer()
renderer.image = markedImgix({
  host: 'my-namespace.imgix.net'
  secureURLToken: 'cU7USDTYcSYXm54wCAFP4CCeYGWERH4s'
})

marked(
  '![image alt](images/cat.jpg "image title { w: 400, h: 300, fit: \'crop\'}")',
  { renderer }
)
// <img src="https://my-namespace.imgix.net/images/cat.jpg?w=400&h=300&fit=crop&ixlib=js-1.0.6&s=bc64e917bf149a05f6924405c879487e0" alt="image alt"> "image title"
```

## quotes

The example above shows a problem you run into if trying to declare strings in
js. The escaped quotes will work fine in this case.

In a markdown file, you can just use single quotes for string parameters.

## compatibility

`dist/index.js` should be fully compatible with node 6

## Author

Levi Wheatcroft <levi@wht.cr>

## Contributing

Contributions welcome; Please submit all pull requests against the master
branch.

## License

[MIT](http://opensource.org/licenses/MIT)
