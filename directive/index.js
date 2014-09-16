'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');
var util = require('util');
var ngUtil = require('../util');
var ScriptBase = require('../script-base.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.askFor = function askFor() {
  var self = this;
  var done = this.async();

  var prompts = [
    {
      name: 'dir',
      message: 'Where would you like to create this directive?',
      default: self.config.get('directiveDirectory')
    },
    {
      type:'confirm',
      name: 'complex',
      message: 'Does this directive need an external html file?',
      default: true
    },
    {
      name: 'providers',
      message: 'What dependencies woud you like to add?',
      default: '$scope'
    }
  ];

  this.prompt(prompts, function (props) {
    this.providers = props.providers.split(' ')
    this.injected = [];
    for (var i = 0; i < this.providers.length; i++) {
      this.injected.push("'"+this.providers[i]+"'");
    };
    this.dir = path.join(props.dir, this.name);
    this.complex = props.complex;
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  var configName = 'directiveSimpleTemplates';
  var templateDir = path.join(this.sourceRoot(), 'directiveSimple');
  if (this.complex) {
    configName = 'directiveComplexTemplates';
    templateDir = path.join(this.sourceRoot(), 'directiveComplex');
  }

  var basePath = this.config.get('basePath') || '';
  this.htmlUrl = ngUtil.relativeUrl(basePath, path.join(this.dir, this.name + '.html'));
  ngUtil.copyTemplates(this, 'directive', templateDir, configName);
};
