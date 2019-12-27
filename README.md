# license-maker-cli

A simple command line tool to prepend license notices to the project files.

## Usage

```
npx license-maker-cli <Notice Text> <Project Directory>

Notice Text: The string to be prepended to the files.
Project Directory: The directory to look for files. Default value is ./
```

### Requirements

* Lated version of node which supports ES modules
* Tested on `node` version `v13.5.0`

### Upcoming

* Read license notice from a file
* Filter files using a pattern. Example `./*/*.js`
* Generate license notices for widely used licenses
* Generate the licenses file 
