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

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container main\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<app-footer></app-footer>"

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
        this.title = 'word-cloud';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _services_word_cloud_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/word-cloud.service */ "./src/app/services/word-cloud.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_words_words_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/words/words.component */ "./src/app/components/words/words.component.ts");
/* harmony import */ var _components_words_admin_words_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/words-admin/words-admin.component */ "./src/app/components/words-admin/words-admin.component.ts");
/* harmony import */ var _components_share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/share/navbar/navbar.component */ "./src/app/components/share/navbar/navbar.component.ts");
/* harmony import */ var _components_remove_words_remove_words_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/remove-words/remove-words.component */ "./src/app/components/remove-words/remove-words.component.ts");
/* harmony import */ var _components_share_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/share/footer/footer.component */ "./src/app/components/share/footer/footer.component.ts");
/* harmony import */ var _pipes_filter_min_max_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/filter-min-max.pipe */ "./src/app/pipes/filter-min-max.pipe.ts");





// Rutas

// Firebase


// Servicios

// Componenetes







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_words_words_component__WEBPACK_IMPORTED_MODULE_10__["WordsComponent"],
                _components_words_admin_words_admin_component__WEBPACK_IMPORTED_MODULE_11__["WordsAdminComponent"],
                _components_share_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _components_remove_words_remove_words_component__WEBPACK_IMPORTED_MODULE_13__["RemoveWordsComponent"],
                _components_share_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _pipes_filter_min_max_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterMinMaxPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_5__["APP_ROUTING"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"]
            ],
            providers: [
                _services_word_cloud_service__WEBPACK_IMPORTED_MODULE_8__["WordCloudService"]
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_words_words_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/words/words.component */ "./src/app/components/words/words.component.ts");
/* harmony import */ var _components_words_admin_words_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/words-admin/words-admin.component */ "./src/app/components/words-admin/words-admin.component.ts");
/* harmony import */ var _components_remove_words_remove_words_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/remove-words/remove-words.component */ "./src/app/components/remove-words/remove-words.component.ts");




var APP_ROUTES = [
    {
        path: 'words',
        component: _components_words_words_component__WEBPACK_IMPORTED_MODULE_1__["WordsComponent"]
    },
    {
        path: 'admin-words',
        component: _components_words_admin_words_admin_component__WEBPACK_IMPORTED_MODULE_2__["WordsAdminComponent"]
    },
    {
        path: 'remove-words',
        component: _components_remove_words_remove_words_component__WEBPACK_IMPORTED_MODULE_3__["RemoveWordsComponent"]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'words'
    }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/components/remove-words/remove-words.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/remove-words/remove-words.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVtb3ZlLXdvcmRzL3JlbW92ZS13b3Jkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/remove-words/remove-words.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/remove-words/remove-words.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"clean()\" class=\"btn\">\r\n  Clean\r\n</button>"

/***/ }),

/***/ "./src/app/components/remove-words/remove-words.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/remove-words/remove-words.component.ts ***!
  \*******************************************************************/
/*! exports provided: RemoveWordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveWordsComponent", function() { return RemoveWordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_word_cloud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/word-cloud.service */ "./src/app/services/word-cloud.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var RemoveWordsComponent = /** @class */ (function () {
    function RemoveWordsComponent(afs, wordService) {
        this.afs = afs;
        this.wordService = wordService;
    }
    RemoveWordsComponent.prototype.loadKeys = function () {
        var _this = this;
        this.keysCollection = this.afs.collection('keys');
        this.keys = this.keysCollection.valueChanges();
        this.keys.subscribe(function (res) {
            _this.objKeys = res;
        });
    };
    RemoveWordsComponent.prototype.clean = function () {
        for (this.temp in this.objKeys) {
            var keys = this.objKeys[this.temp].res;
            this.afs.collection('ask').doc(keys).delete()
                .then(function (res) {
                // console.log(res);
            })
                .catch(function (error) {
                // console.error("Error removing document: ", error);
            });
        }
        this.MostrarMsg('Everything was cleaned successfully');
    };
    RemoveWordsComponent.prototype.MostrarMsg = function (msgSuccess) {
        var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            position: 'center',
            showConfirmButton: true
        });
        Toast.fire({
            type: 'success',
            title: msgSuccess
        });
    };
    RemoveWordsComponent.prototype.ngOnInit = function () {
        this.loadKeys();
    };
    RemoveWordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-remove-words',
            template: __webpack_require__(/*! ./remove-words.component.html */ "./src/app/components/remove-words/remove-words.component.html"),
            styles: [__webpack_require__(/*! ./remove-words.component.css */ "./src/app/components/remove-words/remove-words.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _services_word_cloud_service__WEBPACK_IMPORTED_MODULE_2__["WordCloudService"]])
    ], RemoveWordsComponent);
    return RemoveWordsComponent;
}());



/***/ }),

/***/ "./src/app/components/share/footer/footer.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/share/footer/footer.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/share/footer/footer.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/share/footer/footer.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n  Welcome 😁\r\n</footer>"

/***/ }),

/***/ "./src/app/components/share/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/share/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/share/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/share/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/share/navbar/navbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/share/navbar/navbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmUvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/share/navbar/navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/share/navbar/navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <a [routerLink]=\"['/words']\" class=\"brand-logo center\">\r\n    Word Cloud\r\n  </a>\r\n\r\n  <a [routerLink]=\"['/admin-words']\" class=\"brand-logo center\">\r\n    Admin Words\r\n  </a>\r\n\r\n  <a [routerLink]=\"['/remove-words']\" class=\"brand-logo center\">\r\n    Remove Words\r\n  </a>\r\n</header>"

/***/ }),

/***/ "./src/app/components/share/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/share/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/share/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/share/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/words-admin/words-admin.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/words-admin/words-admin.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#chartdiv {\r\n  margin-top: 3rem;\r\n  min-width: 900px;\r\n  min-height: 600px;\r\n  -webkit-transform: scale(0.7);\r\n          transform: scale(0.7);\r\n}\r\n\r\n.list-item {\r\n  position: absolute;\r\n  top: 70px;\r\n  left: 0;\r\n  height: calc(100vh - 70px);\r\n  background-color: #cdcdcd;\r\n  padding: 1em;\r\n}\r\n\r\n.list-item i {\r\n  color: #ff5555;\r\n}\r\n\r\n@media screen and (max-width: 901px) {\r\n  #chartdiv {\r\n    min-width: 90%;\r\n    min-height: 500px;\r\n    padding-left: 4em;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93b3Jkcy1hZG1pbi93b3Jkcy1hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkJBQXFCO1VBQXJCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29yZHMtYWRtaW4vd29yZHMtYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjaGFydGRpdiB7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxuICBtaW4td2lkdGg6IDkwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxufVxyXG5cclxuLmxpc3QtaXRlbSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzBweDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZGNkY2Q7XHJcbiAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4ubGlzdC1pdGVtIGkge1xyXG4gIGNvbG9yOiAjZmY1NTU1O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDFweCkge1xyXG4gICNjaGFydGRpdiB7XHJcbiAgICBtaW4td2lkdGg6IDkwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/words-admin/words-admin.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/words-admin/words-admin.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"res === false\">\r\n  <h3 class=\"center\">\r\n    There are no words\r\n  </h3>\r\n</div>\r\n\r\n<div *ngIf=\"res === true\">\r\n  <h4 style=\"position: absolute; left: 50%; transform: translateX(-50%); top: 5rem;\">\r\n    Favorite Color?\r\n  </h4>\r\n\r\n  <div id=\"chartdiv\"></div>\r\n\r\n  <div class=\"list-item\">\r\n    <div *ngFor=\"let item of obj | filterMinMax\">\r\n      <div [style.font-size.px]=\"8 + item.weight\">\r\n        <span>{{ item.tag }}</span>\r\n        <span> - </span>\r\n        <span style=\"text-shadow: 0 0 0 #000000;\" [style.color]=\"item ? item.tag : '#000000'\"> {{ item.weight }} </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/words-admin/words-admin.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/words-admin/words-admin.component.ts ***!
  \*****************************************************************/
/*! exports provided: WordsAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsAdminComponent", function() { return WordsAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_word_cloud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/word-cloud.service */ "./src/app/services/word-cloud.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "./node_modules/@amcharts/amcharts4/core.js");
/* harmony import */ var _amcharts_amcharts4_plugins_wordCloud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts4/plugins/wordCloud */ "./node_modules/@amcharts/amcharts4/plugins/wordCloud.js");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "./node_modules/@amcharts/amcharts4/themes/animated.js");
/* harmony import */ var _amcharts_amcharts4_themes_dark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @amcharts/amcharts4/themes/dark */ "./node_modules/@amcharts/amcharts4/themes/dark.js");








var WordsAdminComponent = /** @class */ (function () {
    function WordsAdminComponent(afs, wordService) {
        this.afs = afs;
        this.wordService = wordService;
        this.arr = [];
        this.arrTemp = [];
        this.res = false;
    }
    WordsAdminComponent.prototype.compressArray = function (original) {
        var compressed = [];
        var copy = original.slice(0);
        for (var i = 0; i < original.length; i++) {
            var myCount = 0;
            for (var w = 0; w < copy.length; w++) {
                if (original[i] == copy[w]) {
                    myCount++;
                    delete copy[w];
                }
            }
            if (myCount > 0) {
                var newObject = {
                    tag: '',
                    weight: 0
                };
                newObject.tag = original[i];
                newObject.weight = myCount;
                compressed.push(newObject);
            }
        }
        return compressed;
    };
    WordsAdminComponent.prototype.loadWorks = function () {
        var _this = this;
        this.itemsCollection = this.afs.collection('ask');
        this.items = this.itemsCollection.valueChanges();
        this.items.subscribe(function (res) {
            _this.arr = [];
            _this.arrTemp = res;
            _this.arrTemp.forEach(function (el) {
                var color = el.forma.color;
                _this.arr.push(color);
                _this.obj = _this.compressArray(_this.arr);
            });
            _this.cloudWords();
        });
    };
    WordsAdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.afs.collection('ask').valueChanges().subscribe(function (res) {
            if (res.length == 0) {
                _this.res = false;
            }
            else {
                _this.res = true;
            }
            if (_this.res === false) {
                return;
            }
            else {
                _this.loadWorks();
            }
        })) {
        }
    };
    WordsAdminComponent.prototype.cloudWords = function () {
        var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]("chartdiv", _amcharts_amcharts4_plugins_wordCloud__WEBPACK_IMPORTED_MODULE_5__["WordCloud"]);
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_6__["default"]);
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["useTheme"](_amcharts_amcharts4_themes_dark__WEBPACK_IMPORTED_MODULE_7__["default"]);
        var series = chart.series.push(new _amcharts_amcharts4_plugins_wordCloud__WEBPACK_IMPORTED_MODULE_5__["WordCloudSeries"]());
        series.randomness = 0.1;
        series.rotationThreshold = 0.5;
        series.data = this.obj;
        series.dataFields.word = "tag";
        series.dataFields.value = "weight";
        series.heatRules.push({
            "target": series.labels.template,
            "property": "fill",
            "min": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#ff5555"),
            "max": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#595959"),
            "dataField": "value"
        });
        var hoverState = series.labels.template.states.create("hover");
        hoverState.properties.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#000000");
        series.labels.template.tooltipText = "{tag}:\n[bold]{value}";
        document.getElementById('id-36-title').parentElement.remove();
    };
    WordsAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-words-admin',
            template: __webpack_require__(/*! ./words-admin.component.html */ "./src/app/components/words-admin/words-admin.component.html"),
            styles: [__webpack_require__(/*! ./words-admin.component.css */ "./src/app/components/words-admin/words-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _services_word_cloud_service__WEBPACK_IMPORTED_MODULE_2__["WordCloudService"]])
    ], WordsAdminComponent);
    return WordsAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/words/words.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/words/words.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd29yZHMvd29yZHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/words/words.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/words/words.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 class=\"center title-form\">\r\n  Answer the question and submit it.\r\n</h4>\r\n\r\n<form (ngSubmit)=\"enviar()\" #forma=\"ngForm\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"color\">\r\n      What is your favorite color?\r\n    </label>\r\n    \r\n    <i class=\"fa fa-pencil\"></i>\r\n    <input type=\"text\" name=\"color\" id=\"color\" class=\"form-control\" required=\"required\" [(ngModel)]=\"ask.color\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <button type=\"submit\" class=\"btn btn-outline-primary puntero\" [disabled]=\"!forma.valid\">\r\n      Send\r\n    </button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/components/words/words.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/words/words.component.ts ***!
  \*****************************************************/
/*! exports provided: WordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsComponent", function() { return WordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_word_cloud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/word-cloud.service */ "./src/app/services/word-cloud.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var WordsComponent = /** @class */ (function () {
    function WordsComponent(wordService) {
        this.wordService = wordService;
        this.ask = {
            color: '',
        };
    }
    WordsComponent.prototype.ngOnInit = function () {
    };
    WordsComponent.prototype.MostrarMsg = function (msgSuccess) {
        var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            position: 'center',
            showConfirmButton: true
        });
        Toast.fire({
            type: 'success',
            title: msgSuccess
        });
    };
    WordsComponent.prototype.enviar = function () {
        for (this.temp in this.ask) {
            this.ask[this.temp] = this.ask[this.temp].toUpperCase().trim();
        }
        this.wordService.getWords(this.ask);
        this.ask = {
            color: '',
        };
        this.MostrarMsg('Sent Successfully');
    };
    WordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-words',
            template: __webpack_require__(/*! ./words.component.html */ "./src/app/components/words/words.component.html"),
            styles: [__webpack_require__(/*! ./words.component.css */ "./src/app/components/words/words.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_word_cloud_service__WEBPACK_IMPORTED_MODULE_2__["WordCloudService"]])
    ], WordsComponent);
    return WordsComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter-min-max.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/filter-min-max.pipe.ts ***!
  \**********************************************/
/*! exports provided: FilterMinMaxPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterMinMaxPipe", function() { return FilterMinMaxPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterMinMaxPipe = /** @class */ (function () {
    function FilterMinMaxPipe() {
    }
    FilterMinMaxPipe.prototype.transform = function (obj) {
        if (obj)
            // Filter is greater than 5 and then order from minor to greater
            return obj.filter(function (el) { return el.weight >= 5; }).sort(function (a, b) { return a.weight - b.weight; });
    };
    FilterMinMaxPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterMinMax'
        })
    ], FilterMinMaxPipe);
    return FilterMinMaxPipe;
}());



/***/ }),

/***/ "./src/app/services/word-cloud.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/word-cloud.service.ts ***!
  \************************************************/
/*! exports provided: WordCloudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordCloudService", function() { return WordCloudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");



var WordCloudService = /** @class */ (function () {
    function WordCloudService(db) {
        this.db = db;
    }
    WordCloudService.prototype.getWords = function (forma) {
        var _this = this;
        this.db.collection('ask').add({
            forma: forma
        })
            .then(function (res) {
            // console.log("Document written with ID: ", res.id);
            _this.db.collection('keys').add({
                res: res.id
            });
        })
            .catch(function (error) {
            console.error("Error: ", error);
        });
    };
    WordCloudService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], WordCloudService);
    return WordCloudService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: 'AIzaSyBQqEcnFbAshVxs-IA2Yq74eOc8nhcX_WU',
        authDomain: 'word-cloud-5116a.firebaseapp.com',
        databaseURL: 'https://word-cloud-5116a.firebaseio.com',
        projectId: 'word-cloud-5116a',
        storageBucket: 'word-cloud-5116a.appspot.com',
        messagingSenderId: '131921918070',
    }
};


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
    production: true
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

module.exports = __webpack_require__(/*! C:\Users\crian\Downloads\my-projects\word-cloud\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map