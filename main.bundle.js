webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas id=\"c\" width=\"950\" height=\"450\" style=\"border:1px solid #aaa\"></canvas>\n\n\n\n<div style=\"display: inline-block; margin-left: 10px\">\n\n    <button id=\"addmore\" class=\"btn btn-info\" (click)=\"addShape()\">Add more shapes</button><br>\n\n    <p></p>\n\n    <button id=\"addmore\" class=\"btn btn-info\" (click)=\"save()\">Save </button><br>\n\n    <p></p>\n\n    <button id=\"addmore\" class=\"btn btn-info\" (click)=\"load()\">Load </button><br>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.title = 'app';
        this.__canvas = null;
        this.canvas = null;
        setTimeout(function () {
            _this.init();
        }, 500);
    }
    AppComponent.prototype.add = function () {
        var red = new fabric.Rect({
            top: 100, left: 0, width: 80, height: 50, fill: 'red'
        });
        var blue = new fabric.Rect({
            top: 0, left: 100, width: 50, height: 70, fill: 'blue'
        });
        var green = new fabric.Rect({
            top: 100, left: 100, width: 60, height: 60, fill: 'green'
        });
        this.canvas.add(red, blue, green);
    };
    AppComponent.prototype.init = function () {
        this.canvas = this.__canvas = new fabric.Canvas('c');
        // var red = new fabric.Rect({
        //   top: 100, left: 0, width: 80, height: 50, fill: 'red'
        // });
        // var blue = new fabric.Rect({
        //   top: 0, left: 100, width: 50, height: 70, fill: 'blue'
        // });
        // var green = new fabric.Rect({
        //   top: 100, left: 100, width: 60, height: 60, fill: 'green'
        // });
        fabric.Object.prototype.transparentCorners = false;
        //  this.canvas.add(red, blue, green);
        // lam mo`
        this.canvas.on({
            'object:moving': function (e) {
                console.log('object:moving :', e);
                e.target.opacity = 0.5;
            },
            'object:modified': function (e) {
                console.log('object:modified :', e);
            },
            'mouse:up': function (e) {
                console.log('mouse:up :', e);
            },
            'mouse:down': function (e) {
                console.log('mouse:down :', e);
            },
            'mouse:move': function (e) {
                console.log('mouse:move :', e);
            },
            'mouse:dblclick': function (e) {
                console.log('mouse:dblclick :', e);
            }
        });
        this.addShape();
    };
    AppComponent.prototype.addShape = function () {
        var circle = new fabric.Circle({
            // left: 80,
            // top: 50,
            strokeWidth: 5,
            radius: 50,
            fill: '#fff',
            stroke: '#666',
            originX: 'center',
            originY: 'center'
        });
        var text = new fabric.Text('9', {
            fontSize: 30,
            originX: 'center',
            originY: 'center'
        });
        var listItem = [circle, text,
        ];
        var items = 6;
        for (var i = 0; i < items; i++) {
            var x0 = -25, y0 = -25, r = 100;
            var x = x0 + r * Math.cos(2 * Math.PI * i / items);
            var y = y0 + r * Math.sin(2 * Math.PI * i / items);
            var child1 = new fabric.Circle({
                left: x,
                top: y,
                strokeWidth: 5,
                radius: 25,
                fill: '#fff',
                stroke: '#666'
            });
            var ix = i + 1 + '';
            var text1 = new fabric.Text(ix, {
                fontSize: 30,
                left: x + 15,
                top: y + 15
            });
            listItem.push(child1);
            listItem.push(text1);
        }
        var group = new fabric.Group(listItem, {
            left: 150,
            top: 100,
            angle: -10
        });
        this.canvas.add(group);
    };
    AppComponent.prototype.save = function () {
        var data = JSON.stringify(this.canvas);
        console.log('json data : ', data);
        localStorage.setItem('data', data);
    };
    AppComponent.prototype.load = function () {
        var data = JSON.parse(localStorage.getItem('data'));
        this.canvas.loadFromJSON(data);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map