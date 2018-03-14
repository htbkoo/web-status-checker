var mv = require("mv");

var source = './ui/build';
var dest = './public/ui';
mv(source, dest, {mkdirp: true}, function (err) {
    // done. it first created all the necessary directories, and then
    // tried fs.rename, then falls back to using ncp to copy the dir
    // to dest and then rimraf to remove the source dir
    if (err) {
        console.log(JSON.stringify(err));
    } else {
        console.log('Moved from "' + source + '" to "' + dest + '"');
    }
});