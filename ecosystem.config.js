module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application


    // Second application
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'deploy',
      host : '',
      ref  : 'origin/master',
      repo : '',
      path : '',
      'post-deploy' : 'echo ok'
    }
  }
};
