module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
      name      : 'node-funtional-app',
      script    : 'index.js',
    }
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-34-207-91-69.compute-1.amazonaws.com',
      ref  : 'origin/master',
      repo : 'https://github.com/sergzak022/node-functional-app.git',
      path : '/home/ubuntu/node-funtional-app',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};
