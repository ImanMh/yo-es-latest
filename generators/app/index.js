(function (){
  "use strict";

  var Generator = require('yeoman-generator');

  module.exports = class extends Generator {
    constructor(args, opts) {
      super(args, opts);
      this.option('babel');
    }


    prompting () {
      console.log('Are you ready to turn this directory into a es6 environment?');
      var _this = this;
      return this.prompt([
        {
          type    : 'input',
          name    : 'projectName',
          message : 'Your project name',
          default : this.appname
        },
        {
          type    : 'input',
          name    : 'version',
          message : 'Your project version',
          default : '0.0.0'
        }
      ]).then(function (answers) {
        _this.log('app name', answers.name);
        _this.log('cool feature', answers.cool);
        _this.fs.copyTpl(
          _this.templatePath('.'),
          _this.destinationPath(''),
          {
            projectName: answers.projectName,
            version: answers.version
          }
        );
      });
    }

  };
}());
