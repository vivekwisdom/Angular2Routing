/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES, RouterLink} from 'angular2/router';
import {Http} from 'angular2/http';
import {FORM_PROVIDERS} from 'angular2/common';

import {XLarge} from './directives/x-large';
import {Home} from './home/home';
import {Folders} from './folders/folders';
import {Files} from './files/files';
import {FileDescription} from './filedes/filedes';

/*
 * App Component
 * Top Level Component
 */
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'app', // <app></app>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [...FORM_PROVIDERS],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [...ROUTER_DIRECTIVES, XLarge,RouterLink],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [require('./app.css')],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./app.html')
  // template: '<h1>Hello {{title.value}}</h1>'
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' },
  { path: '/folders', component: Folders, name: 'Folders' },
  { path: '/files/:folder', component: Files, name: 'Files' },
  { path: '/filedes/:folder/:file', component: FileDescription, name: 'FileDescription' }
])
export class App {
  constructor(public router:Router) { }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 * or via chat on Gitter at https://gitter.im/AngularClass/angular2-webpack-starter
 */
