module.exports = function (babel) {
  const { types: t } = babel;
  
  return {
    name: "jsx-classname-transformer",
    visitor: {
      JSXAttribute(path) {
        if(t.isJSXIdentifier(path.node.name, { name: 'class' })) {
          path.node.name.name = 'className';
        }
      }
    }
  };
}

