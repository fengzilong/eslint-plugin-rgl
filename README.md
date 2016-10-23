# eslint-plugin-rgl

eslint plugin for rgl component files (I mean, `.rgl` files).

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-rgl`:

```
$ npm install eslint-plugin-rgl --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-rgl` globally.

## Usage

Add `rgl` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "rgl"
    ]
}
```

## License

MIT
