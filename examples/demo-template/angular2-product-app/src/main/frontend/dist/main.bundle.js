webpackJsonp([1,4],{

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeycloakService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeycloakService = (function () {
    function KeycloakService() {
    }
    KeycloakService.init = function () {
        var keycloakAuth = Keycloak({
            url: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].keykloakBaseUrl,
            realm: 'demo',
            clientId: 'angular2-product',
        });
        KeycloakService.auth.loggedIn = false;
        return new Promise(function (resolve, reject) {
            keycloakAuth.init({ onLoad: 'login-required' })
                .success(function () {
                KeycloakService.auth.loggedIn = true;
                KeycloakService.auth.authz = keycloakAuth;
                KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl
                    + '/realms/demo/protocol/openid-connect/logout?redirect_uri='
                    + document.baseURI;
                resolve();
            })
                .error(function () {
                reject();
            });
        });
    };
    KeycloakService.prototype.logout = function () {
        console.log('*** LOGOUT');
        KeycloakService.auth.loggedIn = false;
        KeycloakService.auth.authz = null;
        window.location.href = KeycloakService.auth.logoutUrl;
    };
    KeycloakService.prototype.getToken = function () {
        return new Promise(function (resolve, reject) {
            if (KeycloakService.auth.authz.token) {
                KeycloakService.auth.authz
                    .updateToken(5)
                    .success(function () {
                    resolve(KeycloakService.auth.authz.token);
                })
                    .error(function () {
                    reject('Failed to refresh token');
                });
            }
            else {
                reject('Not loggen in');
            }
        });
    };
    KeycloakService.auth = {};
    KeycloakService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], KeycloakService);
    return KeycloakService;
}());
//# sourceMappingURL=/home/zschwarzova/IdeaProjects/keycloak/examples/demo-template/angular2-product-app/src/main/frontend/src/keycloak.service.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    keykloakBaseUrl: '/auth',
    serviceBaseUrl: '/database'
};
//# sourceMappingURL=/home/zschwarzova/IdeaProjects/keycloak/examples/demo-template/angular2-product-app/src/main/frontend/src/environment.js.map

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 351;


/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_keycloak_keycloak_service__ = __webpack_require__(133);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__WEBPACK_IMPORTED_MODULE_4__app_keycloak_keycloak_service__["a" /* KeycloakService */].init()
    .then(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]); })
    .catch(function (e) { return window.location.reload(); });
//# sourceMappingURL=/home/zschwarzova/IdeaProjects/keycloak/examples/demo-template/angular2-product-app/src/main/frontend/src/main.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keycloak_keycloak_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(201);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(http, kc) {
        this.http = http;
        this.kc = kc;
        this.title = 'Angular2 Product';
        this.products = [];
    }
    AppComponent.prototype.logout = function () {
        this.kc.logout();
    };
    AppComponent.prototype.reloadData = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceBaseUrl + '/products')
            .map(function (res) { return res.json(); })
            .subscribe(function (prods) { return _this.products = prods; }, function (error) { return console.log(error); });
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(517),
            styles: [__webpack_require__(515)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__keycloak_keycloak_service__["a" /* KeycloakService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__keycloak_keycloak_service__["a" /* KeycloakService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/zschwarzova/IdeaProjects/keycloak/examples/demo-template/angular2-product-app/src/main/frontend/src/app.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__keycloak_keycloak_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__keycloak_keycloak_http__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(459);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__keycloak_keycloak_service__["a" /* KeycloakService */],
                __WEBPACK_IMPORTED_MODULE_5__keycloak_keycloak_http__["a" /* KEYCLOAK_HTTP_PROVIDER */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/zschwarzova/IdeaProjects/keycloak/examples/demo-template/angular2-product-app/src/main/frontend/src/app.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keycloak_service__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* unused harmony export KeycloakHttp */
/* unused harmony export keycloakHttpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KEYCLOAK_HTTP_PROVIDER; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * This provides a wrapper over the ng2 Http class that insures tokens are refreshed on each request.
 */
var KeycloakHttp = (function (_super) {
    __extends(KeycloakHttp, _super);
    function KeycloakHttp(_backend, _defaultOptions, _keycloakService) {
        _super.call(this, _backend, _defaultOptions);
        this._keycloakService = _keycloakService;
    }
    KeycloakHttp.prototype.request = function (url, options) {
        var _this = this;
        var tokenPromise = this._keycloakService.getToken();
        var tokenObservable = __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].fromPromise(tokenPromise);
        if (typeof url === 'string') {
            return tokenObservable.map(function (token) {
                var authOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': 'Bearer ' + token }) });
                return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]().merge(options).merge(authOptions);
            }).concatMap(function (opts) { return _super.prototype.request.call(_this, url, opts); });
        }
        else if (url instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */]) {
            return tokenObservable.map(function (token) {
                url.headers.set('Authorization', 'Bearer ' + token);
                return url;
            }).concatMap(function (request) { return _super.prototype.request.call(_this, request); });
        }
    };
    KeycloakHttp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__keycloak_service__["a" /* KeycloakService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__keycloak_service__["a" /* KeycloakService */]) === 'function' && _c) || Object])
    ], KeycloakHttp);
    return KeycloakHttp;
    var _a, _b, _c;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */]));
function keycloakHttpFactory(backend, defaultOptions, keycloakService) {
    return new KeycloakHttp(backend, defaultOptions, keycloakService);
}
var KEYCLOAK_HTTP_PROVIDER = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Http */],
    useFactory: keycloakHttpFactory,
    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_2__keycloak_service__["a" /* KeycloakService */]]
};
//# sourceMappingURL=/home/zschwarzova/IdeaProjects/keycloak/examples/demo-template/angular2-product-app/src/main/frontend/src/keycloak.http.js.map

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(218)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<div id=\"content-area\" class=\"col-md-9\" role=\"main\">\n  <div id=\"content\">\n    <h1>{{title}}</h1>\n    <h2><span>Products</span></h2>\n    <button type=\"button\" (click)=\"logout()\">Sign Out</button>\n    <button type=\"button\" id=\"reload-data\" (click)=\"reloadData()\">Reload</button>\n    <table class=\"table\" [hidden]=\"!products.length\">\n      <thead>\n      <tr>\n        <th>Product Listing</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let p of products\">\n        <td>{{p}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(352);


/***/ })

},[792]);
//# sourceMappingURL=main.bundle.js.map