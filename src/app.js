import 'reflect-metadata';
import { bla } from './testclass';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

bla();

@Component({
  selector: 'app',
  template: '<p>{{ message }}</p>'
})
class egghead{
  constructor() {
    this.message = 'cba';
  }
}

bootstrap(egghead);