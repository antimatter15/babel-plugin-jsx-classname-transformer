# babel-plugin-jsx-classname-transformer

A simple babel plugin that lets you use "class" instead of "className". Saves a bit of typing and makes it easier to read and to copy from HTML.

The existing solutions [jsx-html-class](https://www.npmjs.com/package/babel-plugin-jsx-class), and [babel-plugin-jsx-class](https://www.npmjs.com/package/babel-plugin-jsx-class) are broken as of 2018. 

```
npm install --save-dev babel-plugin-jsx-classname-transformer
```

Add this to your `.babelrc`

```
{
  "plugins": ["jsx-classname-transformer"]
}
```
