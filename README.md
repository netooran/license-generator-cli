# license-maker-cli

A simple command line tool to prepend license notices to the project files.

## Usage

```
npx license-maker-cli <options>

Options
    --program-description
        One line to give the program's name and a brief idea of what it does.
        Default value is empty

    --author
        Author of the program. This value is used in the license notice.
        Default value is os username.

    --year
        Year of copyright. Default value is current year

    --dir
        The program directory to add license notices.
        Default value is current directory
            
    --license
        The license type to apply. This defaulted to AGPL and can not change at the moment.
```

### Requirements

* Lated version of node which supports ES modules
* Tested on `node` version `v13.5.0`

### Supported Files

All files except the ones listed below will be ignored. We are working hard to support more file types.
Feel free to contribute.

* Ruby `.rb`
* Javascript `.js`

### Upcoming

* Read license notice from a file
* Filter files using a pattern. Example `./*/*.js`
* Generate license notices for widely used licenses
* Generate the licenses file 
