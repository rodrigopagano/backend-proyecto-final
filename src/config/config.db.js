const { MONGODBURL }= require('./config');
const {mongoose} = require('mongoose');
const { logger } = require('./config.winston');

mongoose.set("strictQuery", false);
mongoose.connect(MONGODBURL, (err,req,res) => {
  if (err) {
    logger.debug("Error:" + err);
  } else {
    
    logger.debug("conectado a MongoDB");
  }
});

module.exports = mongoose