const webpack = require("webpack");
const fs = require("fs");

var compiler = webpack(require("./production.config.js"));

compiler.run(function(err,stats){
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
          console.error(err.details);
        }
        return;
      }
    
      const info = stats.toJson();
    
      if (stats.hasErrors()) {
        console.error(info.errors);
      }
    
      if (stats.hasWarnings()) {
        console.warn(info.warnings);
      }

      console.log(stats.toString({
        chunks: false,
        colors: true
      }));

      if(fs.existsSync(__dirname+"/state.json")){
        fs.unlinkSync(__dirname+"/state.json");
      }
      fs.writeFileSync(__dirname+"/state.json",JSON.stringify(stats.toJson()));
      process.exit(0);
})