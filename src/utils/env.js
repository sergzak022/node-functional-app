const PRODUCTION = 'production';
const DEVELOPMENT = 'development';

exports.isDevelopment = function () {
  return process.env.NODE_ENV === DEVELOPMENT;
}

exports.isProduction = function () {
  return process.env.NODE_ENV === PRODUCTION;
}

exports.forceProduction = function () {
  process.env.NODE_ENV = PRODUCTION;
}


exports.forceDevelopment = function () {
  process.env.NODE_ENV = DEVELOPMENT;
}
