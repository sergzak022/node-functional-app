exports.getParam = getParam;

function getParam( key, req ) {
  return req.params[key];
}
