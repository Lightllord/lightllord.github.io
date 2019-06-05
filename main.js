(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dictionaries/dictionaries.module": [
		"./src/app/dictionaries/dictionaries.module.ts",
		"dictionaries-dictionaries-module"
	],
	"./redactor/redactor.module": [
		"./src/app/redactor/redactor.module.ts",
		"redactor-redactor-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _core_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/main/main.component */ "./src/app/core/components/main/main.component.ts");




var routes = [
    {
        path: '',
        component: _core_components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            {
                path: '',
                redirectTo: 'redactor',
                pathMatch: 'full'
            },
            {
                path: 'redactor',
                loadChildren: './redactor/redactor.module#RedactorModule'
            },
            {
                path: 'dictionaries',
                loadChildren: './dictionaries/dictionaries.module#DictionariesModule'
            }
        ]
    }
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jointjs */ "./node_modules/jointjs/dist/joint.min.js");
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jointjs__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'redactor';
        var shapes = jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/components/main/main.component.html":
/*!**********************************************************!*\
  !*** ./src/app/core/components/main/main.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height-all d-flex-column\">\r\n  <nav mat-tab-nav-bar>\r\n    <a mat-tab-link\r\n       *ngFor=\"let link of navLinks\"\r\n       [routerLink]=\"link.path\"\r\n       routerLinkActive #rla=\"routerLinkActive\"\r\n       [active]=\"rla.isActive\">\r\n      {{link.label}}\r\n    </a>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/core/components/main/main.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/core/components/main/main.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/core/components/main/main.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/main/main.component.ts ***!
  \********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.navLinks = [
            {
                label: 'Редактор',
                path: ['/redactor']
            },
            {
                label: 'Справочники',
                path: ['/dictionaries']
            }
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/core/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/core/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/core/components/main/main.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            exports: [
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/dictionaries/pipes/time-unit.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/dictionaries/pipes/time-unit.pipe.ts ***!
  \******************************************************/
/*! exports provided: TimeUnitPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeUnitPipe", function() { return TimeUnitPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/parameters.service */ "./src/app/shared/services/parameters.service.ts");



var TimeUnitPipe = /** @class */ (function () {
    function TimeUnitPipe(ps) {
        this.ps = ps;
    }
    TimeUnitPipe.prototype.transform = function (value, args) {
        var str = value;
        var reg = /\{mtu\}/;
        return str.replace(reg, this.ps.parameters.modelTimeUnit.short);
    };
    TimeUnitPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'timeUnit'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_parameters_service__WEBPACK_IMPORTED_MODULE_2__["ParametersService"]])
    ], TimeUnitPipe);
    return TimeUnitPipe;
}());



/***/ }),

/***/ "./src/app/shared/services/blocks.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/blocks.service.ts ***!
  \***************************************************/
/*! exports provided: BlocksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlocksService", function() { return BlocksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// <ng-container *ngSwitchCase="1">Вокзал</ng-container>
// <ng-container *ngSwitchCase="2">Поставщик</ng-container>
// <ng-container *ngSwitchCase="3">Аэропорт</ng-container>
// <ng-container *ngSwitchCase="4">Порт</ng-container>
// <ng-container *ngSwitchCase="5">Посрденик</ng-container>
// <ng-container *ngSwitchCase="6">Потребитель</ng-container>
var BlocksService = /** @class */ (function () {
    // blocks: IBlock[] = [
    //   {
    //     id: 0,
    //     classId: 2,
    //     cell: null,
    //     x: 120,
    //     y: 220,
    //     info: {
    //       goodsOut: [
    //         {
    //           product: {name: 'Вкусняхи'},
    //           pack: {name: 'Крутая'}
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     id: 1,
    //     classId: 5,
    //     cell: null,
    //     x: 520,
    //     y: 220,
    //     info: {
    //       goodsIn: [
    //         {
    //           product: {name: 'Вкусняхи'},
    //           count: 100
    //         }
    //       ],
    //       goodsOut: [
    //         {
    //           product: {name: 'Вкусняхи'},
    //           count: 100
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     id: 2,
    //     classId: 3,
    //     cell: null,
    //     x: 320,
    //     y: 240,
    //   },
    //   {
    //     id: 3,
    //     classId: 6,
    //     cell: null,
    //     x: 870,
    //     y: 130,
    //     info: {
    //       goodsIn: [
    //         {
    //           product: {name: 'Вкусняхи'},
    //           count: 70
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     id: 4,
    //     classId: 6,
    //     cell: null,
    //     x: 870,
    //     y: 290,
    //     info: {
    //       goodsIn: [
    //         {
    //           product: {name: 'Вкусняхи'},
    //           count: 30
    //         }
    //       ]
    //     }
    //   },
    //   {
    //     id: 5,
    //     classId: 3,
    //     cell: null,
    //     x: 520,
    //     y: 100,
    //     info: {
    //       name: 'Гондольерский'
    //     }
    //   }
    // ];
    // links: ILink[] = [
    //   {
    //     id: 0,
    //     from: 0,
    //     to: 2,
    //     cell: null,
    //   },
    //   {
    //     id: 1,
    //     from: 2,
    //     to: 1,
    //     cell: null
    //   },
    //   {
    //     id: 2,
    //     from: 1,
    //     to: 3,
    //     cell: null
    //   },
    //   {
    //     id: 3,
    //     from: 1,
    //     to: 4,
    //     cell: null
    //   },
    //   {
    //     id: 4,
    //     from: 2,
    //     to: 5,
    //     cell: null
    //   }
    // ];
    function BlocksService() {
        this.data = {
            "blocks": [{
                    "cell": null,
                    "classId": 3,
                    "html": null,
                    "id": 5,
                    "info": {
                        "costService": null,
                        "disp": null,
                        "mat": null,
                        "name": "Гаити",
                        "rop": null,
                        "schedules": [{
                                "blockTo": {
                                    "id": 6
                                },
                                "containers": [],
                                "period": "3",
                                "timeFrom": "16"
                            }, {
                                "blockTo": {
                                    "id": 7
                                },
                                "containers": [],
                                "period": "2",
                                "timeFrom": "24"
                            }
                        ],
                        "serviceTime": null,
                        "workCost": null,
                        "workCostRestart": null,
                        "workDuration": null,
                        "workDurationRestart": null,
                        "workType": null
                    },
                    "x": 190,
                    "y": 340
                }, {
                    "cell": null,
                    "classId": 3,
                    "html": null,
                    "id": 6,
                    "info": {
                        "costService": null,
                        "disp": null,
                        "mat": null,
                        "name": "Таити",
                        "rop": null,
                        "schedules": [{
                                "blockTo": {
                                    "id": 5
                                },
                                "containers": [{
                                        "container": {
                                            "duration": null,
                                            "height": null,
                                            "length": null,
                                            "name": "Капсуль",
                                            "type": {
                                                "fuel": null,
                                                "name": "ФлайТесла",
                                                "price": null,
                                                "speed": "9999",
                                                "type": "Авивперевозки"
                                            },
                                            "weight": null,
                                            "width": null
                                        },
                                        "count": 12,
                                        "price": "1"
                                    }
                                ],
                                "period": "2",
                                "timeFrom": "12"
                            }
                        ],
                        "serviceTime": null,
                        "workCost": null,
                        "workCostRestart": null,
                        "workDuration": null,
                        "workDurationRestart": null,
                        "workType": null
                    },
                    "x": 190,
                    "y": 280
                }, {
                    "cell": null,
                    "classId": 3,
                    "html": null,
                    "id": 7,
                    "info": {
                        "costService": null,
                        "disp": null,
                        "mat": null,
                        "name": "Пипити",
                        "rop": null,
                        "schedules": [{
                                "blockTo": {
                                    "id": 5
                                },
                                "containers": [],
                                "period": "4",
                                "timeFrom": "15"
                            }
                        ],
                        "serviceTime": null,
                        "workCost": null,
                        "workCostRestart": null,
                        "workDuration": null,
                        "workDurationRestart": null,
                        "workType": null
                    },
                    "x": 190,
                    "y": 400
                }, {
                    "cell": null,
                    "classId": 2,
                    "html": null,
                    "id": 8,
                    "info": {
                        "costService": null,
                        "disp": null,
                        "goodsOut": [{
                                "pack": {
                                    "count": 10,
                                    "height": null,
                                    "length": null,
                                    "name": "Десяток",
                                    "width": null
                                },
                                "product": {
                                    "expiring": 1000,
                                    "height": null,
                                    "length": null,
                                    "name": "Яйца",
                                    "packs": [{
                                            "count": 10,
                                            "height": null,
                                            "length": null,
                                            "name": "Десяток",
                                            "width": null
                                        }, {
                                            "count": 8,
                                            "height": null,
                                            "length": null,
                                            "name": "Восьмерок",
                                            "width": null
                                        }
                                    ],
                                    "price": 7,
                                    "weight": 0.1,
                                    "width": null
                                }
                            }
                        ],
                        "loaders": {
                            "avia": null,
                            "avto": null,
                            "sudo": null,
                            "zd": null
                        },
                        "mat": null,
                        "name": "Найсовый",
                        "rop": null,
                        "serviceTime": null,
                        "workCost": null,
                        "workCostRestart": null,
                        "workDuration": null,
                        "workDurationRestart": null,
                        "workType": null
                    },
                    "x": 110,
                    "y": 160
                }, {
                    "cell": null,
                    "classId": 5,
                    "html": null,
                    "id": 9,
                    "info": {
                        "costService": null,
                        "disp": null,
                        "goodsIn": [{
                                "count": "100",
                                "name": "Яйца",
                                "product": {
                                    "expiring": 100,
                                    "height": null,
                                    "length": null,
                                    "name": "Яйца",
                                    "packs": [{
                                            "count": 10,
                                            "height": "15",
                                            "length": "35",
                                            "name": "Десяток",
                                            "width": "20"
                                        }
                                    ],
                                    "price": 10,
                                    "weight": null,
                                    "width": null
                                }
                            }
                        ],
                        "goodsOut": [{
                                "count": "50",
                                "product": {
                                    "expiring": 1000,
                                    "height": null,
                                    "length": null,
                                    "name": "Мазик",
                                    "packs": [{
                                            "count": 1,
                                            "height": "15",
                                            "length": "10",
                                            "name": "Пачка",
                                            "width": "10"
                                        }
                                    ],
                                    "price": 40,
                                    "weight": 200,
                                    "width": null
                                }
                            }
                        ],
                        "loaders": {
                            "avia": null,
                            "avto": null,
                            "sudo": null,
                            "zd": null
                        },
                        "mat": null,
                        "name": "Переработчик",
                        "rop": null,
                        "schedules": [{
                                "blockTo": null,
                                "containers": null,
                                "period": null,
                                "timeFrom": null
                            }
                        ],
                        "serviceTime": null,
                        "workCost": "15",
                        "workCostRestart": "15",
                        "workDuration": "2",
                        "workDurationRestart": "2",
                        "workType": "Прерываемое"
                    },
                    "x": 380,
                    "y": 320
                }, {
                    "cell": null,
                    "classId": 7,
                    "html": null,
                    "id": 10,
                    "info": {
                        "costService": null,
                        "disp": null,
                        "goodsOut": [{
                                "pack": {
                                    "count": 1,
                                    "height": "15",
                                    "length": "10",
                                    "name": "Пачка",
                                    "width": "10"
                                },
                                "product": {
                                    "expiring": 1000,
                                    "height": null,
                                    "length": null,
                                    "name": "Мазик",
                                    "packs": [{
                                            "count": 1,
                                            "height": "15",
                                            "length": "10",
                                            "name": "Пачка",
                                            "width": "10"
                                        }
                                    ],
                                    "price": 40,
                                    "weight": 200,
                                    "width": null
                                },
                                "rop": "22"
                            }
                        ],
                        "loaders": {
                            "avia": null,
                            "avto": null,
                            "sudo": null,
                            "zd": null
                        },
                        "mat": null,
                        "name": "Дистурбет",
                        "rop": null,
                        "schedules": [{
                                "blockTo": null,
                                "containers": null,
                                "period": null,
                                "timeFrom": null
                            }
                        ],
                        "serviceTime": null,
                        "workCost": null,
                        "workCostRestart": null,
                        "workDuration": null,
                        "workDurationRestart": null,
                        "workType": null
                    },
                    "x": 640,
                    "y": 320
                }, {
                    "cell": null,
                    "classId": 6,
                    "html": null,
                    "id": 11,
                    "info": {
                        "costService": null,
                        "disp": null,
                        "goodsIn": [{
                                "count": "3",
                                "product": {
                                    "expiring": 1000,
                                    "height": null,
                                    "length": null,
                                    "name": "Мазик",
                                    "packs": [{
                                            "count": 1,
                                            "height": "15",
                                            "length": "10",
                                            "name": "Пачка",
                                            "width": "10"
                                        }
                                    ],
                                    "price": 40,
                                    "weight": 200,
                                    "width": null
                                }
                            }
                        ],
                        "loaders": {
                            "avia": null,
                            "avto": null,
                            "sudo": null,
                            "zd": null
                        },
                        "mat": null,
                        "name": "Жироед",
                        "rop": null,
                        "schedules": [{
                                "blockTo": null,
                                "containers": null,
                                "period": null,
                                "timeFrom": null
                            }
                        ],
                        "serviceTime": null,
                        "workCost": null,
                        "workCostRestart": null,
                        "workDuration": null,
                        "workDurationRestart": null,
                        "workType": null
                    },
                    "x": 580,
                    "y": 450
                }, {
                    "cell": null,
                    "classId": 6,
                    "html": null,
                    "id": 12,
                    "info": {
                        "costService": null,
                        "disp": null,
                        "loaders": {
                            "avia": null,
                            "avto": null,
                            "sudo": null,
                            "zd": null
                        },
                        "mat": null,
                        "name": "Ничегошер",
                        "rop": null,
                        "schedules": [{
                                "blockTo": null,
                                "containers": null,
                                "period": null,
                                "timeFrom": null
                            }
                        ],
                        "serviceTime": null,
                        "workCost": null,
                        "workCostRestart": null,
                        "workDuration": null,
                        "workDurationRestart": null,
                        "workType": null
                    },
                    "x": 720,
                    "y": 450
                }
            ],
            "links": [{
                    "cell": {
                        "attrs": {
                            "line": {
                                "sourceMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                },
                                "stroke": "#444444",
                                "targetMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                }
                            }
                        },
                        "connector": {
                            "name": "rounded"
                        },
                        "id": "a98b8a75-7f11-4f67-ad75-60e82a49c7a9",
                        "router": {
                            "name": "manhattan"
                        },
                        "source": {
                            "id": "7892c89c-4101-449e-bfcf-743d745e34c1"
                        },
                        "target": {
                            "id": "fef02110-1908-4ef4-b6f5-5b7a7f65217d"
                        },
                        "type": "standard.Link",
                        "z": 9
                    },
                    "from": 6,
                    "id": 0,
                    "info": {
                        "paths": [{
                                "type": "Ж/Д"
                            }
                        ]
                    },
                    "to": 5
                }, {
                    "cell": {
                        "attrs": {
                            "line": {
                                "sourceMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                },
                                "stroke": "#444444",
                                "targetMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                }
                            }
                        },
                        "connector": {
                            "name": "rounded"
                        },
                        "id": "c031c099-2831-4b1d-8cb4-a927f07afb85",
                        "router": {
                            "name": "manhattan"
                        },
                        "source": {
                            "id": "fef02110-1908-4ef4-b6f5-5b7a7f65217d"
                        },
                        "target": {
                            "id": "306c68e4-b322-4ac6-9c17-fe3e850ca2ba"
                        },
                        "type": "standard.Link",
                        "z": 10
                    },
                    "from": 5,
                    "id": 1,
                    "info": {
                        "paths": [{
                                "type": "Ж/Д"
                            }
                        ]
                    },
                    "to": 7
                }, {
                    "cell": {
                        "attrs": {
                            "line": {
                                "sourceMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                },
                                "stroke": "#444444",
                                "targetMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                }
                            }
                        },
                        "connector": {
                            "name": "rounded"
                        },
                        "id": "ff885bae-e850-46ec-8754-009030f78815",
                        "router": {
                            "name": "manhattan"
                        },
                        "source": {
                            "id": "b0f85a6c-7974-4516-807c-bb1c1bf7a3fd"
                        },
                        "target": {
                            "id": "7892c89c-4101-449e-bfcf-743d745e34c1"
                        },
                        "type": "standard.Link",
                        "z": 11
                    },
                    "from": 8,
                    "id": 2,
                    "info": {
                        "paths": [{
                                "type": "Ж/Д"
                            }
                        ]
                    },
                    "to": 6
                }, {
                    "cell": {
                        "attrs": {
                            "line": {
                                "sourceMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                },
                                "stroke": "#444444",
                                "targetMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                }
                            }
                        },
                        "connector": {
                            "name": "rounded"
                        },
                        "id": "476e1f91-7a8d-4804-bde5-cd13a654c8c6",
                        "router": {
                            "name": "manhattan"
                        },
                        "source": {
                            "id": "306c68e4-b322-4ac6-9c17-fe3e850ca2ba"
                        },
                        "target": {
                            "id": "30e59e32-78bc-45f8-9579-c4df40111dbc"
                        },
                        "type": "standard.Link",
                        "z": 12
                    },
                    "from": 7,
                    "id": 3,
                    "info": {
                        "paths": [{
                                "type": "Ж/Д"
                            }
                        ]
                    },
                    "to": 9
                }, {
                    "cell": {
                        "attrs": {
                            "line": {
                                "sourceMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                },
                                "stroke": "#444444",
                                "targetMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                }
                            }
                        },
                        "connector": {
                            "name": "rounded"
                        },
                        "id": "047c4108-6159-4f27-8529-3633288ca6f4",
                        "router": {
                            "name": "manhattan"
                        },
                        "source": {
                            "id": "30e59e32-78bc-45f8-9579-c4df40111dbc"
                        },
                        "target": {
                            "id": "703203ed-6edd-4ebf-b528-be4b564bbf8b"
                        },
                        "type": "standard.Link",
                        "z": 13
                    },
                    "from": 9,
                    "id": 4,
                    "info": {
                        "paths": [{
                                "type": "Ж/Д"
                            }
                        ]
                    },
                    "to": 10
                }, {
                    "cell": {
                        "attrs": {
                            "line": {
                                "sourceMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                },
                                "stroke": "#444444",
                                "targetMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                }
                            }
                        },
                        "connector": {
                            "name": "rounded"
                        },
                        "id": "147c8080-55e5-4691-8864-7422e5a24542",
                        "router": {
                            "name": "manhattan"
                        },
                        "source": {
                            "id": "703203ed-6edd-4ebf-b528-be4b564bbf8b"
                        },
                        "target": {
                            "id": "30d39120-1b59-499f-9466-c649e7935391"
                        },
                        "type": "standard.Link",
                        "z": 14
                    },
                    "from": 10,
                    "id": 5,
                    "info": {
                        "paths": [{
                                "type": "Ж/Д"
                            }
                        ]
                    },
                    "to": 11
                }, {
                    "cell": {
                        "attrs": {
                            "line": {
                                "sourceMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                },
                                "stroke": "#444444",
                                "targetMarker": {
                                    "cx": 1,
                                    "fill": "#666",
                                    "r": 2,
                                    "stroke": "#333",
                                    "type": "circle"
                                }
                            }
                        },
                        "connector": {
                            "name": "rounded"
                        },
                        "id": "c45a1c76-2236-4b96-a8f8-a01ee19e0afa",
                        "router": {
                            "name": "manhattan"
                        },
                        "source": {
                            "id": "703203ed-6edd-4ebf-b528-be4b564bbf8b"
                        },
                        "target": {
                            "id": "c2f43bac-58df-48e0-9575-d7cf36525e73"
                        },
                        "type": "standard.Link",
                        "z": 15
                    },
                    "from": 10,
                    "id": 6,
                    "info": {
                        "paths": [{
                                "type": "Ж/Д"
                            }
                        ]
                    },
                    "to": 12
                }
            ]
        };
        this.blocks = [];
        this.links = [];
        this.blocks = this.data.blocks;
        this.links = this.data.links;
    }
    BlocksService.prototype.save = function (bs, ls) {
        this.blocks = bs.map(function (b) {
            if (b.cell && b.cell.attributes && b.cell.attributes.position) {
                b.x = b.cell.attributes.position.x;
                b.y = b.cell.attributes.position.y;
            }
            b.cell = null;
            b.html = null;
            return b;
        });
        this.links = ls.map(function (l) {
            l.cell = null;
            return l;
        });
    };
    BlocksService.prototype.download = function () {
        // this.save(this.blocks, this.links);
        var content = {
            blocks: this.blocks,
            links: this.links
        };
        content.blocks.forEach(function (b) {
            b.html = null;
            b.cell = null;
            if (b.info && b.info.schedules) {
                b.info.schedules.forEach(function (s) {
                    if (s.blockTo && s.blockTo.info) {
                        s.blockTo = { id: s.blockTo.id };
                    }
                });
            }
        });
        var a = document.createElement('a');
        var file = new Blob([JSON.stringify(content)], { type: 'application/json' });
        a.href = URL.createObjectURL(file);
        a.download = 'scheme.json';
        a.click();
        this.blocks = this.blocks.slice();
        this.links = this.links.slice();
    };
    BlocksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlocksService);
    return BlocksService;
}());



/***/ }),

/***/ "./src/app/shared/services/dicts.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/dicts.service.ts ***!
  \**************************************************/
/*! exports provided: DictDescField, DictDesc, DictsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictDescField", function() { return DictDescField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictDesc", function() { return DictDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictsService", function() { return DictsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DictDescField = /** @class */ (function () {
    function DictDescField(desc) {
        this.title = desc.title;
        this.name = desc.name;
        this.type = desc.type || 'text';
        this.dict = desc.dict;
        this.fields = desc.fields;
        this.options = desc.options;
        this.column = desc.column;
    }
    return DictDescField;
}());

var DictDesc = /** @class */ (function () {
    function DictDesc(desc) {
        this.name = desc.name;
        this.title = desc.title;
        this.fields = desc.fields;
    }
    return DictDesc;
}());

var DictsService = /** @class */ (function () {
    function DictsService() {
        var _this = this;
        this.descs = [
            new DictDesc({
                name: 'goods', title: 'Товары', fields: [
                    new DictDescField({ name: 'name', title: 'Наименование', column: true }),
                    new DictDescField({ name: 'expiring', title: 'Срок годности ({mtu})', type: 'number', column: true }),
                    new DictDescField({ name: 'length', title: 'Длина (м)', type: 'number' }),
                    new DictDescField({ name: 'width', title: 'Ширина (м)', type: 'number' }),
                    new DictDescField({ name: 'height', title: 'Высота (м)', type: 'number' }),
                    new DictDescField({ name: 'weight', title: 'Вес (кг)', type: 'number' }),
                    new DictDescField({ name: 'price', title: 'Цена (р)', type: 'number', column: true }),
                    new DictDescField({ name: 'packs', title: 'Упаковки', type: 'custom' })
                ]
            }),
            new DictDesc({
                name: 'transports', title: 'Транспорт', fields: [
                    new DictDescField({ name: 'name', title: 'Наименование', column: true }),
                    new DictDescField({
                        name: 'type',
                        title: 'Тип',
                        type: 'select',
                        options: ['Автоперевозки', 'Ж/Д перевозки', 'Авивперевозки', 'Судоперевозки'],
                        column: true
                    }),
                    new DictDescField({ name: 'speed', title: 'Скорость транспорта  (м/{mtu})' }),
                    new DictDescField({ name: 'fuel', title: 'Расход топлива на 100км' }),
                    new DictDescField({ name: 'price', title: 'Стоимость обслуживания (р)', column: true }),
                ]
            }),
            new DictDesc({
                name: 'containers', title: 'Контейнеры', fields: [
                    new DictDescField({ name: 'name', title: 'Наименование', column: true }),
                    new DictDescField({
                        name: 'type',
                        title: 'Тип',
                        type: 'dict',
                        dict: 'transports',
                        column: true
                    }),
                    new DictDescField({ name: 'length', title: 'Длина (м)', type: 'number' }),
                    new DictDescField({ name: 'width', title: 'Ширина (м)', type: 'number' }),
                    new DictDescField({ name: 'height', title: 'Высота (м)', type: 'number' }),
                    new DictDescField({ name: 'weight', title: 'Вес (кг)', type: 'number' }),
                    new DictDescField({ name: 'duration', title: 'Длительность загрузки/разгруки {mtu}', type: 'number' }),
                ]
            })
        ];
        this.dictionaryValues = {
            transports: [],
            containers: [],
            goods: []
        };
        this.dictionaries = ['transports', 'containers', 'goods'];
        this.dictionaries.forEach(function (d) {
            var fl = localStorage.getItem('dict-' + d);
            if (fl) {
                _this.dictionaryValues[d] = JSON.parse(fl);
            }
        });
    }
    DictsService.prototype.addToDict = function (name, el) {
        this.dictionaryValues[name].push(el);
        localStorage.removeItem('dict-' + name);
        localStorage.setItem('dict-' + name, JSON.stringify(this.dictionaryValues[name]));
    };
    DictsService.prototype.change = function (name, el, val) {
        var found = this.dictionaryValues[name].find(function (dv) { return dv === el; });
        if (found) {
            Object.assign(found, val);
            localStorage.removeItem('dict-' + name);
            localStorage.setItem('dict-' + name, JSON.stringify(this.dictionaryValues[name]));
        }
    };
    DictsService.prototype.remove = function (name, el) {
        var foundIndex = this.dictionaryValues[name].findIndex(function (dv) { return dv === el; });
        if (foundIndex > -1) {
            this.dictionaryValues[name].splice(foundIndex, 1);
            localStorage.removeItem('dict-' + name);
            localStorage.setItem('dict-' + name, JSON.stringify(this.dictionaryValues[name]));
        }
    };
    DictsService.prototype.getDesc = function (name) {
        return this.descs.find(function (el) { return el.name === name; });
    };
    DictsService.prototype.getDictVals = function (name) {
        return this.dictionaryValues[name];
    };
    DictsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DictsService);
    return DictsService;
}());



/***/ }),

/***/ "./src/app/shared/services/parameters.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/parameters.service.ts ***!
  \*******************************************************/
/*! exports provided: ParametersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersService", function() { return ParametersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ParametersService = /** @class */ (function () {
    function ParametersService() {
        this.timeUnits = [
            {
                name: 'Миллисекунда',
                short: 'мс'
            },
            {
                name: 'Секунда',
                short: 'с'
            },
            {
                name: 'Минута',
                short: 'мин'
            },
            {
                name: 'Час',
                short: 'ч'
            },
            {
                name: 'День',
                short: 'д'
            }
        ];
        this.parameters = {
            modelTimeUnit: this.timeUnits[0],
            simulationDuration: 1
        };
    }
    ParametersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParametersService);
    return ParametersService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_blocks_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/blocks.service */ "./src/app/shared/services/blocks.service.ts");
/* harmony import */ var _services_parameters_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/parameters.service */ "./src/app/shared/services/parameters.service.ts");
/* harmony import */ var _services_dicts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/dicts.service */ "./src/app/shared/services/dicts.service.ts");
/* harmony import */ var _dictionaries_pipes_time_unit_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dictionaries/pipes/time-unit.pipe */ "./src/app/dictionaries/pipes/time-unit.pipe.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [_services_blocks_service__WEBPACK_IMPORTED_MODULE_5__["BlocksService"], _services_parameters_service__WEBPACK_IMPORTED_MODULE_6__["ParametersService"], _services_dicts_service__WEBPACK_IMPORTED_MODULE_7__["DictsService"]]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _dictionaries_pipes_time_unit_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeUnitPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _dictionaries_pipes_time_unit_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeUnitPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\WP\redactor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map