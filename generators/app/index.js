(function (){
  "use strict";

  var Generator = require('yeoman-generator');
  var projectName = '';

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
          message : 'Project name',
          default : this.appname
        },
        {
          type    : 'input',
          name    : 'packageName',
          message : 'package name',
          default : this.appname.toLowerCase()
        },
        {
          type    : 'input',
          name    : 'version',
          message : 'Project version',
          default : '0.0.0'
        },
        {
          type    : 'input',
          name    : 'description',
          message : 'Project description',
          default : ''
        },
        {
          type    : 'input',
          name    : 'keywords',
          message : 'Comma seperated keywords',
          default : ''
        },
        {
          type    : 'input',
          name    : 'repoUrl',
          message : 'Repositoy url',
          default : ''
        },
        {
          type    : 'input',
          name    : 'homepage',
          message : 'Project homepage',
          default : ''
        },
        {
          type    : 'input',
          name    : 'author',
          message : 'Author info',
          default : ''
        }
      ]).then(function (answers) {

        projectName = answers.projectName;
        _this.log('answers', JSON.stringify(answers, null, 4));

        _this.fs.copyTpl(
          _this.templatePath('.'),
          _this.destinationPath('./' + answers.projectName),
          {
            projectName: answers.projectName,
            packageName: answers.packageName.toLowerCase(),
            version: answers.version,
            description: answers.description,
            keywords: answers.keywords,
            repoUrl: answers.repoUrl,
            homepage: answers.homepage,
            author: answers.author
          },
          {}, //template options
          { globOptions: { dot: true } }
        );
      });
    }

    install () {
      process.chdir(this.destinationPath('./' + projectName));
      this.npmInstall();
    }
  };

}());
