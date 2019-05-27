(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dictionaries-dictionaries-module"],{

/***/ "./src/app/dictionaries/components/elements/elements.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dictionaries/components/elements/elements.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height d-flex-row\" style=\"overflow: hidden\">\n  <div class=\"left-table\" style=\"overflow: auto;\">\n    <table mat-table *ngIf=\"source\" [dataSource]=\"dataSource\" matSort class=\"full-width table-container\">\n\n      <ng-container *ngFor=\"let cf of columnsFields\" [matColumnDef]=\"cf.name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>{{cf.title | timeUnit}}</th>\n        <td mat-cell *matCellDef=\"let row\">\n          <ng-container *ngIf=\"cf.type !== 'dict'\">{{row[cf.name]}}</ng-container>\n          <ng-container *ngIf=\"cf.type === 'dict'\">{{row[cf.name].name}}</ng-container>\n        </td>\n\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"columns; sticky: true\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: columns;\" (click)=\"selectRow(row)\"\n          style=\"cursor: pointer;\" [ngClass]=\"{'selected-row': row === selectedRow}\"></tr>\n\n    </table>\n  </div>\n  <div class=\"right-elem\" style=\"z-index: 150\">\n    <mat-card class=\"mat-elevation-z1\" *ngIf=\"!selectedRow\">\n      <mat-card-title>\n        Новый элемент\n      </mat-card-title>\n      <mat-card-content>\n        <div class=\"\" [formGroup]=\"form\">\n          <mat-form-field *ngFor=\"let field of desc.fields\" class=\"full-width\">\n            <input *ngIf=\"field.type === 'text'\" matInput\n                   [placeholder]=\"(field.title | timeUnit)\"\n                   type=\"text\"\n                   [formControlName]=\"field.name\">\n            <input *ngIf=\"field.type === 'number'\" matInput\n                   [placeholder]=\"(field.title | timeUnit)\"\n                   type=\"number\"\n                   [formControlName]=\"field.name\">\n            <mat-label *ngIf=\"field.type === 'select'\">{{field.title | timeUnit}}</mat-label>\n            <mat-select *ngIf=\"field.type === 'select'\" [formControlName]=\"field.name\" [placeholder]=\"(field.title | timeUnit)\">\n              <mat-option *ngFor=\"let o of field.options\" [value]=\"o\">\n                {{o}}\n              </mat-option>\n            </mat-select>\n            <mat-label *ngIf=\"field.type === 'dict'\">{{field.title | timeUnit}}</mat-label>\n            <mat-select *ngIf=\"field.type === 'dict'\" [formControlName]=\"field.name\" [placeholder]=\"(field.title | timeUnit)\">\n              <mat-option *ngFor=\"let o of ds.getDictVals(field.dict)\" [value]=\"o\">\n                {{o.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </mat-card-content>\n      <mat-card-footer class=\"d-flex-row justify-content-end\">\n        <button mat-button (click)=\"add()\">Добавить</button>\n      </mat-card-footer>\n    </mat-card>\n\n    <mat-card class=\"mat-elevation-z1\" *ngIf=\"selectedRow\">\n      <mat-card-title>\n        Редактирование элемента\n      </mat-card-title>\n      <mat-card-content>\n        <div class=\"\" [formGroup]=\"form\">\n          <mat-form-field *ngFor=\"let field of desc.fields\" class=\"full-width\">\n            <input *ngIf=\"field.type === 'text'\" matInput\n                   [placeholder]=\"(field.title | timeUnit)\"\n                   type=\"text\"\n                   [formControlName]=\"field.name\">\n            <input *ngIf=\"field.type === 'number'\" matInput\n                   [placeholder]=\"(field.title | timeUnit)\"\n                   type=\"number\"\n                   [formControlName]=\"field.name\">\n            <mat-label *ngIf=\"field.type === 'select'\">{{field.title | timeUnit}}</mat-label>\n            <mat-select *ngIf=\"field.type === 'select'\" [formControlName]=\"field.name\" [placeholder]=\"(field.title | timeUnit)\">\n              <mat-option *ngFor=\"let o of field.options\" [value]=\"o\">\n                {{o}}\n              </mat-option>\n            </mat-select>\n            <mat-label *ngIf=\"field.type === 'dict'\">{{field.title | timeUnit}}</mat-label>\n            <mat-select *ngIf=\"field.type === 'dict'\" [formControlName]=\"field.name\" [compareWith]=\"dictComape\" [placeholder]=\"(field.title | timeUnit)\">\n              <mat-option *ngFor=\"let o of ds.getDictVals(field.dict)\" [value]=\"o\">\n                {{o.name}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n        </div>\n      </mat-card-content>\n      <mat-card-footer class=\"d-flex-row justify-content-end\">\n        <button mat-button color=\"warn\" (click)=\"remove()\">Удалить</button>\n        <button mat-button (click)=\"edit()\">Изменить</button>\n      </mat-card-footer>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dictionaries/components/elements/elements.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dictionaries/components/elements/elements.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 1 auto;\n  overflow: hidden; }\n\n.left-table {\n  flex: 1 1 auto; }\n\n.right-elem {\n  flex: 0 0 450px; }\n\n.selected-row {\n  background-color: rgba(0, 255, 252, 0.33); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljdGlvbmFyaWVzL2NvbXBvbmVudHMvZWxlbWVudHMvQzpcXFdQXFxyZWRhY3Rvci9zcmNcXGFwcFxcZGljdGlvbmFyaWVzXFxjb21wb25lbnRzXFxlbGVtZW50c1xcZWxlbWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSx5Q0FBeUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RpY3Rpb25hcmllcy9jb21wb25lbnRzL2VsZW1lbnRzL2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5sZWZ0LXRhYmxlIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLnJpZ2h0LWVsZW0ge1xyXG4gIGZsZXg6IDAgMCA0NTBweDtcclxufVxyXG5cclxuLnNlbGVjdGVkLXJvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1MiwgMC4zMyk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dictionaries/components/elements/elements.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dictionaries/components/elements/elements.component.ts ***!
  \************************************************************************/
/*! exports provided: ElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementsComponent", function() { return ElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/dicts.service */ "./src/app/shared/services/dicts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var ElementsComponent = /** @class */ (function () {
    function ElementsComponent(ds, route, fb) {
        this.ds = ds;
        this.route = route;
        this.fb = fb;
    }
    ElementsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (p) {
            _this.selectedRow = null;
            _this.name = p.get('name');
            _this.desc = _this.ds.getDesc(_this.name);
            _this.source = _this.ds.dictionaryValues[_this.name].slice();
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.source);
            _this.columnsFields = _this.desc.fields.filter(function (f) { return f.column; });
            _this.columns = _this.columnsFields.map(function (f) { return f.name; });
            _this.genForm();
        });
    };
    ElementsComponent.prototype.selectRow = function (row) {
        if (row == this.selectedRow) {
            this.selectedRow = null;
            this.form.reset({});
        }
        else {
            this.selectedRow = row;
            this.form.reset(row);
        }
    };
    ElementsComponent.prototype.ngOnDestroy = function () {
    };
    ElementsComponent.prototype.genForm = function () {
        var formGen = {};
        this.desc.fields.forEach(function (el) {
            formGen[el.name] = null;
        });
        this.form = this.fb.group(formGen);
    };
    ElementsComponent.prototype.add = function () {
        this.ds.addToDict(this.name, this.form.value);
        this.selectedRow = null;
        this.form.reset({});
        this.source = this.ds.dictionaryValues[this.name].slice();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.source);
        this.dataSource.sort = this.sort;
    };
    ElementsComponent.prototype.edit = function () {
        this.ds.change(this.name, this.selectedRow, this.form.value);
        this.selectedRow = null;
        this.form.reset({});
        this.source = this.ds.dictionaryValues[this.name].slice();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.source);
        this.dataSource.sort = this.sort;
    };
    ElementsComponent.prototype.remove = function () {
        this.ds.remove(this.name, this.selectedRow);
        this.selectedRow = null;
        this.form.reset({});
        this.source = this.ds.dictionaryValues[this.name].slice();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.source);
        this.dataSource.sort = this.sort;
    };
    ElementsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    ElementsComponent.prototype.dictComape = function (a, b) {
        return a.name === b.name;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], ElementsComponent.prototype, "sort", void 0);
    ElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-elements',
            template: __webpack_require__(/*! ./elements.component.html */ "./src/app/dictionaries/components/elements/elements.component.html"),
            styles: [__webpack_require__(/*! ./elements.component.scss */ "./src/app/dictionaries/components/elements/elements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_2__["DictsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ElementsComponent);
    return ElementsComponent;
}());



/***/ }),

/***/ "./src/app/dictionaries/components/list/list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dictionaries/components/list/list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height-f d-flex-column\">\n  <nav mat-tab-nav-bar>\n    <a mat-tab-link\n       *ngFor=\"let d of ds.descs\"\n       [routerLink]=\"d.name\"\n       routerLinkActive #rla=\"routerLinkActive\"\n       [active]=\"rla.isActive\">\n      {{d.title}}\n    </a>\n  </nav>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/dictionaries/components/list/list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dictionaries/components/list/list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 1 auto;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGljdGlvbmFyaWVzL2NvbXBvbmVudHMvbGlzdC9DOlxcV1BcXHJlZGFjdG9yL3NyY1xcYXBwXFxkaWN0aW9uYXJpZXNcXGNvbXBvbmVudHNcXGxpc3RcXGxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kaWN0aW9uYXJpZXMvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/dictionaries/components/list/list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dictionaries/components/list/list.component.ts ***!
  \****************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/dicts.service */ "./src/app/shared/services/dicts.service.ts");



var ListComponent = /** @class */ (function () {
    function ListComponent(ds) {
        this.ds = ds;
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/dictionaries/components/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/dictionaries/components/list/list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_2__["DictsService"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/dictionaries/dictionaries-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dictionaries/dictionaries-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DictionariesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionariesRoutingModule", function() { return DictionariesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/dictionaries/components/list/list.component.ts");
/* harmony import */ var _components_elements_elements_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/elements/elements.component */ "./src/app/dictionaries/components/elements/elements.component.ts");





var routes = [
    {
        path: '',
        component: _components_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
        children: [
            {
                path: ':name',
                component: _components_elements_elements_component__WEBPACK_IMPORTED_MODULE_4__["ElementsComponent"]
            }
        ]
    }
];
var DictionariesRoutingModule = /** @class */ (function () {
    function DictionariesRoutingModule() {
    }
    DictionariesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DictionariesRoutingModule);
    return DictionariesRoutingModule;
}());



/***/ }),

/***/ "./src/app/dictionaries/dictionaries.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/dictionaries/dictionaries.module.ts ***!
  \*****************************************************/
/*! exports provided: DictionariesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictionariesModule", function() { return DictionariesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/list/list.component */ "./src/app/dictionaries/components/list/list.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dictionaries_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dictionaries-routing.module */ "./src/app/dictionaries/dictionaries-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_elements_elements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/elements/elements.component */ "./src/app/dictionaries/components/elements/elements.component.ts");
/* harmony import */ var _pipes_time_unit_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/time-unit.pipe */ "./src/app/dictionaries/pipes/time-unit.pipe.ts");









var DictionariesModule = /** @class */ (function () {
    function DictionariesModule() {
    }
    DictionariesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"],
                _components_elements_elements_component__WEBPACK_IMPORTED_MODULE_7__["ElementsComponent"],
                _pipes_time_unit_pipe__WEBPACK_IMPORTED_MODULE_8__["TimeUnitPipe"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _dictionaries_routing_module__WEBPACK_IMPORTED_MODULE_4__["DictionariesRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ]
        })
    ], DictionariesModule);
    return DictionariesModule;
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



/***/ })

}]);
//# sourceMappingURL=dictionaries-dictionaries-module.js.map