(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/offers/offers.component */ "./src/app/components/offers/offers.component.ts");
/* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
/* harmony import */ var _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/list-books/list-books.component */ "./src/app/components/admin/list-books/list-books.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");











var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'offers', component: _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_4__["OffersComponent"] },
    { path: 'book:/id', component: _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_5__["DetailsBookComponent"] },
    { path: 'admin/list-books', component: _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_6__["ListBooksComponent"] },
    { path: 'user/login', component: _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'user/register', component: _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: 'user/profile', component: _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
    { path: '**', component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bookStore';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/list-books/list-books.component */ "./src/app/components/admin/list-books/list-books.component.ts");
/* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/offers/offers.component */ "./src/app/components/offers/offers.component.ts");
/* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
/* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
/* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__["ListBooksComponent"],
                _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailsBookComponent"],
                _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__["OffersComponent"],
                _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__["Page404Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"]
            ],
            providers: [
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuth"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/list-books/list-books.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin/list-books/list-books.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbGlzdC1ib29rcy9saXN0LWJvb2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/admin/list-books/list-books.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/list-books/list-books.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  list-books works!\n</p>\n<p>\n  list-books works!\n</p>\n<p>\n  list-books works!\n</p>\n<p>\n  list-books works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/admin/list-books/list-books.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin/list-books/list-books.component.ts ***!
  \*********************************************************************/
/*! exports provided: ListBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBooksComponent", function() { return ListBooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListBooksComponent = /** @class */ (function () {
    function ListBooksComponent() {
    }
    ListBooksComponent.prototype.ngOnInit = function () {
    };
    ListBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-books',
            template: __webpack_require__(/*! ./list-books.component.html */ "./src/app/components/admin/list-books/list-books.component.html"),
            styles: [__webpack_require__(/*! ./list-books.component.css */ "./src/app/components/admin/list-books/list-books.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListBooksComponent);
    return ListBooksComponent;
}());



/***/ }),

/***/ "./src/app/components/details-book/details-book.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/details-book/details-book.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy1ib29rL2RldGFpbHMtYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/details-book/details-book.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/details-book/details-book.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  details-book works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/details-book/details-book.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/details-book/details-book.component.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsBookComponent", function() { return DetailsBookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsBookComponent = /** @class */ (function () {
    function DetailsBookComponent() {
    }
    DetailsBookComponent.prototype.ngOnInit = function () {
    };
    DetailsBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-book',
            template: __webpack_require__(/*! ./details-book.component.html */ "./src/app/components/details-book/details-book.component.html"),
            styles: [__webpack_require__(/*! ./details-book.component.css */ "./src/app/components/details-book/details-book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsBookComponent);
    return DetailsBookComponent;
}());



/***/ }),

/***/ "./src/app/components/hero/hero.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/hero/hero.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/hero/hero.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/hero/hero.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main jumbotron for a primary marketing message or call to action -->\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1 class=\"display-3\">Hello, world!</h1>\n    <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and\n      three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n    <p>\n      <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more &raquo;</a>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/hero/hero.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/components/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/components/hero/hero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"books\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\n        <div class=\"card_book\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <p>\n                <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n              </p>\n              <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\n              <p class=\"card-text\">\n                {{book.descripcion}}\n              </p>\n              <div class=\"container-precio-idioma\">\n                <p class=\"badge badge-info\">\n                  {{book.precio}}€\n                </p>\n                <p class=\"badge badge-info\">\n                  {{book.idioma}}\n                </p>\n              </div>\n              <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/modal/modal.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  modal works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\n  <a class=\"navbar-brand\" routerLink=\"/\">{{app_name}}</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbar\" aria-controls=\"mainNavbar\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"mainNavbar\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/offers\">Offers\n        </a>\n      </li>\n      LOGGED: {{isLogged}}\n    </ul>\n    <ul class=\"navbar-nav ml-auto\">\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/register\">Register\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a class=\"nav-link\" routerLink=\"/admin/list-books\">List Books</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!isLogged\">\n        <a class=\"nav-link\" routerLink=\"/user/login\">Login\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isLogged\">\n        <a href=\"#\" class=\"nav-link\" (click)=\"onLogout()\">Logout\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, afsAuth) {
        this.authService = authService;
        this.afsAuth = afsAuth;
        this.app_name = 'BookStore';
        this.isLogged = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.getCurrentUser();
    };
    NavbarComponent.prototype.getCurrentUser = function () {
        var _this = this;
        this.authService.isAuth().subscribe(function (auth) {
            if (auth) {
                console.log('user logged');
                _this.isLogged = true;
            }
            else {
                console.log('user not logged');
                _this.isLogged = false;
            }
        });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.afsAuth.auth.signOut();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/offers/offers.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/offers/offers.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/offers/offers.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/offers/offers.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"books\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\n        <div class=\"card_book\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <p>\n                <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n              </p>\n              <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\n              <p class=\"card-text\">\n                {{book.descripcion}}\n              </p>\n              <div class=\"container-precio-idioma\">\n                <p class=\"badge badge-info\">\n                  {{book.precio}}€\n                </p>\n                <p class=\"badge badge-info\">\n                  {{book.idioma}}\n                </p>\n              </div>\n              <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/offers/offers.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/offers/offers.component.ts ***!
  \*******************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OffersComponent = /** @class */ (function () {
    function OffersComponent() {
    }
    OffersComponent.prototype.ngOnInit = function () {
    };
    OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/components/offers/offers.component.html"),
            styles: [__webpack_require__(/*! ./offers.component.css */ "./src/app/components/offers/offers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/components/page404/page404.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/page404/page404.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/page404/page404.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/page404/page404.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page404 works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page404',
            template: __webpack_require__(/*! ./page404.component.html */ "./src/app/components/page404/page404.component.html"),
            styles: [__webpack_require__(/*! ./page404.component.css */ "./src/app/components/page404/page404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/components/users/login/login.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/users/login/login.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\r\n  border: 0 solid #fff !important;\r\n}\r\n\r\n.btn-social{\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tcolor: #fff;\r\n\tborder-color: rgba(0,0,0,0.2);\r\n}\r\n\r\n.btn-facebook{\r\n\tbackground: #3b5998;\r\n}\r\n\r\n.btn-google{\r\n\tbackground: #dd4b39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcclxuICBib3JkZXI6IDAgc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXNvY2lhbHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9va3tcclxuXHRiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG59XHJcblxyXG4uYnRuLWdvb2dsZXtcclxuXHRiYWNrZ3JvdW5kOiAjZGQ0YjM5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/users/login/login.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/users/login/login.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"login\" class=\"mb-5 mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n        <div class=\"card_login\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <form #formLogin=\"ngForm\" (ngSubmit)=\"onLogin()\">\n                <h1 class=\"h3 mb-3 font-weight-normal\" *ngIf=\"!isError\">Login</h1>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                  Something is wrong!\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"form-control\" placeholder=\"Email\"  required>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"Password\" \n                    required>\n                </div>\n                <div class=\"form-group\">\n                  <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" (click)=\"onLogin()\">LOGIN</button>\n                  <a routerLink=\"/user/register\" class=\"form-control login-user\">Are you new ?</a>\n                </div>\n                <div class=\"form-group\">\n                  <button target=\"_blank\" class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\"><span class=\"fa fa-facebook\"> Facebook</span></button>\n                  <button target=\"_blank\" class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\"><span class=\"fa fa-google\"> Google</span></button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/users/login/login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/users/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(afAuth, router, authService) {
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.authService.loginEmailUser(this.email, this.password)
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    LoginComponent.prototype.onLogout = function () {
        this.authService.logoutUser();
    };
    LoginComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['admin/list-books']);
    };
    LoginComponent.prototype.onCatchError = function (err) {
        console.log('err', err.message);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/users/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/users/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/users/profile/profile.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-section {\r\n  border: 1px solid #007bff;\r\n  background: #fff;\r\n}\r\n.profile-header {\r\n  background: #007bff;\r\n  height: 150px;\r\n}\r\n.user-detail {\r\n  margin: -50px 0 30px 0;\r\n}\r\nimg {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n.user-details h5 {\r\n  margin: 15px 0 5px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNlY3Rpb24ge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4ucHJvZmlsZS1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG4udXNlci1kZXRhaWwge1xyXG4gIG1hcmdpbjogLTUwcHggMCAzMHB4IDA7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuLnVzZXItZGV0YWlscyBoNSB7XHJcbiAgbWFyZ2luOiAxNXB4IDAgNXB4IDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"profile\" class=\"container\">\n  <div class=\"row mt-5\">\n    <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\n      </div>\n      <div class=\"row user-details\">\n        <div class=\"col-12\">\n          <img src=\"../../../../assets/check-user.png\" class=\"rounded-circle img-thumbnail\" alt=\"profile\">\n          <h5>{{user.name}}</h5>\n          <p>\n            {{user.email}}\n          </p>\n\n          <hr>\n          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores suscipit itaque minima quae.</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/users/profile/profile.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/users/profile/profile.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/users/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/users/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/users/register/register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.login-user {\r\n  border: 0px solid #fff !important;\r\n}\r\n\r\n.btn-social{\r\n\tposition: relative;\r\n\ttext-align: center;\r\n\twhite-space: nowrap;\r\n\toverflow: hidden;\r\n\ttext-overflow: ellipsis;\r\n\tcolor: #fff;\r\n\tborder-color: rgba(0,0,0,0.2);\r\n}\r\n\r\n.btn-facebook{\r\n\tbackground: #3b5998;\r\n}\r\n\r\n.btn-google{\r\n\tbackground: #dd4b39;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QixXQUFXO0NBQ1gsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY29udHJvbC5sb2dpbi11c2VyIHtcclxuICBib3JkZXI6IDBweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tc29jaWFse1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjIpO1xyXG59XHJcblxyXG4uYnRuLWZhY2Vib29re1xyXG5cdGJhY2tncm91bmQ6ICMzYjU5OTg7XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xle1xyXG5cdGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/users/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section id=\"register\" class=\"mb-5 mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n        <div class=\"card_register\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <form #formRegister=\"ngForm\" (ngSubmit)=\"onAddUser()\">\n                <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                  {{msgError}}\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\" required\n                    minlength=\"8\">\n                </div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\n                  <div *ngIf=\"email.errors.required\">Email is required</div>\n                  <div *ngIf=\"email.errors.minlength\">Email must be at least 8 characters</div>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\"\n                    required minlength=\"5\" maxlength=\"10\">\n                </div>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"password.touched && !password.valid\">\n                  <div *ngIf=\"password.errors.required\">Password is required</div>\n                  <div *ngIf=\"password.errors.minlength\">Password must be at least 5 characters</div>\n                </div>\n                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Register</button>\n                <div class=\"form-group\">\n                  <a routerLink=\"/user/login\" class=\"form-control login-user\">Do you have account?</a>\n                </div>\n                <div class=\"form-group\">\n                  <button target=\"_blank\" class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\"><span class=\"fa fa-facebook\"> Facebook</span></button>\n                  <button target=\"_blank\" class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\"><span class=\"fa fa-google\"> Google</span></button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/users/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, authService) {
        this.router = router;
        this.authService = authService;
        this.email = '';
        this.password = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onAddUser = function () {
        var _this = this;
        this.authService.registerUser(this.email, this.password)
            .then(function (res) {
            _this.router.navigate(['/admin/list-books']);
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    RegisterComponent.prototype.onLoginGoogle = function () {
        var _this = this;
        this.authService.loginGoogleUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    RegisterComponent.prototype.onLoginFacebook = function () {
        var _this = this;
        this.authService.loginFacebookUser()
            .then(function (res) {
            _this.onLoginRedirect();
        }).catch(function (err) { return _this.onCatchError(err); });
    };
    RegisterComponent.prototype.onLoginRedirect = function () {
        this.router.navigate(['admin/list-books']);
    };
    RegisterComponent.prototype.onCatchError = function (err) {
        console.log('err', err.message);
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/users/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(afsAuth) {
        this.afsAuth = afsAuth;
    }
    AuthService.prototype.registerUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginEmailUser = function (email, pass) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
        });
    };
    AuthService.prototype.loginFacebookUser = function () {
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.loginGoogleUser = function () {
        return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.logoutUser = function () {
        this.afsAuth.auth.signOut();
    };
    AuthService.prototype.isAuth = function () {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBmp2zQCNZZ-vo6q30a7SI4ifcH5FJX8Cc",
        authDomain: "bookstore-e4647.firebaseapp.com",
        databaseURL: "https://bookstore-e4647.firebaseio.com",
        projectId: "bookstore-e4647",
        storageBucket: "bookstore-e4647.appspot.com",
        messagingSenderId: "139313675064"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\wamp64\www\angular7_firebase\bookStore\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map