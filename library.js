'use strict';

function filterConfigGet(config, callback) {
  config.showNestedReplies = true;
  callback(null, config);
}

module.exports = {
  filterConfigGet
};
