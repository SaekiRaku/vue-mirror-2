var p = require("path");

__root = p.resolve(__dirname,"../../");
source = p.resolve(__root,"source");
document = p.resolve(__root,"document");
dist = p.resolve(__root,"dist");

module.exports = {
    root:__root,
    source,
    document,
    dist
}