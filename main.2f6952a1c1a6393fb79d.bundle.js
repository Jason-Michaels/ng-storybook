(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(module,exports){function webpackEmptyAsyncContext(req){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e})}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,module.exports=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id=196},215:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return AppComponent});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),AppComponent=function(){function AppComponent(){this.title="Quick Angular Dev, using Storybook"}return AppComponent=tslib__WEBPACK_IMPORTED_MODULE_0__.b([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"app-root",template:__webpack_require__(466),styles:[__webpack_require__(467)]})],AppComponent)}()},219:function(module,exports,__webpack_require__){__webpack_require__(220),__webpack_require__(298),__webpack_require__(299),module.exports=__webpack_require__(468)},299:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(32),__webpack_require__(34),__webpack_require__(40);var _storybook_angular__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(43),req=__webpack_require__(381);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_3__.configure)(function loadStories(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(166)(module))},381:function(module,exports,__webpack_require__){var map={"./index.stories.ts":382};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=381},382:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(43),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(213),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(214),_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(62),_app_app_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(215);Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Welcome",module).add("to Storybook",function(){return{component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_3__.Welcome,props:{}}}),Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("AppComponent",module).add("Varaint 1",function(){return{component:_app_app_component__WEBPACK_IMPORTED_MODULE_4__.a,props:{}}}),Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Button",module).add("with text",function(){return{component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_3__.Button,props:{text:"Hello Button"}}}).add("with some emoji",function(){return{component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_3__.Button,props:{text:"😀 😎 👍 💯"}}},{notes:"My notes on a button with emojis"}).add("with some emoji and action",function(){return{component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_3__.Button,props:{text:"😀 😎 👍 💯",onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("This was clicked OMG")}}},{notes:"My notes on a button with emojis"}),Object(_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.storiesOf)("Another Button",module).add("button with link to another story",function(){return{component:_storybook_angular_demo__WEBPACK_IMPORTED_MODULE_3__.Button,props:{text:"Go to Welcome Story",onClick:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__.linkTo)("Welcome")}}})}.call(this,__webpack_require__(166)(module))},466:function(module,exports){module.exports='\x3c!--The content below is only a placeholder and can be replaced.--\x3e\n<div style="text-align:center">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">\n</div>\n<h2>Here are some links to help you start??: </h2>\n<ul>\n  <li>\n    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>\n  </li>\n</ul>\n\n'},467:function(module,exports){module.exports=""},468:function(module,exports,__webpack_require__){var content=__webpack_require__(469);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(470)(content,options);content.locals&&(module.exports=content.locals)},469:function(module,exports){module.exports=[[module.i,"/* You can add global styles to this file, and also import other style files */\n","",""]]}},[[219,1,2]]]);
//# sourceMappingURL=main.2f6952a1c1a6393fb79d.bundle.js.map