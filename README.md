### Publication version of the [ahrakio/witty-webpack-declaration-files](https://github.com/ahrakio/witty-webpack-declaration-files) package with some fixes. [![Latest Published Version](https://img.shields.io/npm/v/@ns0m/witty-webpack-declaration-files)](https://www.npmjs.com/package/@ns0m/witty-webpack-declaration-files)

---

# witty-webpack-declaration-files
A webpack plugin for manipulating d.ts files

## Install via npm
```
npm i -D @ns0m/witty-webpack-declaration-files
```

## Typescript - tsconfig.json
```
{ ...
    declaration: true,
    ...
}
```

## Webpack.config.js
```
const DeclarationFilesPlugin = require("@ns0m/witty-webpack-declaration-files");
...
module.exports = {
    ...
    plugins: [
        ...
        new DeclarationFilesPlugin({
            // options goes here
            merge: true,
            exclude: ["server", "*Routes"],
            flatten: true
        })
    ]
}
```

### Note
The options are:
- `merge`: _boolean_ - default: _false_\
To merge the declaration files into one file.
- `include`: _string[]_ - default: _[]_\
Names of the files to be included in the final bundle (without filename extensions ; for _MyClass.ts_ mention _"MyClass"_).
- `exclude`: _string[]_ - default: _[]_\
Names of the files to be excluded from the final bundle. Add _"*PartialFileName"_ or _"PartialFileName*"_ to support dynamic filenames to exclude.
- `flatten`: _boolean_ - default: _false_\
To put all the declaration files in the root path of the dist folder.

Leaving `merge` as _false_, the plugin will generate only the files in the `include` array, or all the files which are not in the `exclude` array, according to the configuration - but will not merge them into one file.
