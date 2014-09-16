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
      message: 'Where would you like to create this controller?',
      default: self.config.get('routeDirectory')
    },{
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
    done();
  }.bind(this));
};

Generator.prototype.createFiles = function createFiles() {
  ngUtil.copyTemplates(this, 'controller');
};
