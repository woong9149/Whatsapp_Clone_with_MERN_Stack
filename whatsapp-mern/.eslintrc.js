module.exports ={
    env : {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended','prettier/react','airbnb', 'plugin:prettier/recommended'],
    rules:{
        'react/jsx-filename-extension':
        ['error',
         { 'extensions': [".js", ".jsx"] }
        ]
      }
};