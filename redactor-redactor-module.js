(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redactor-redactor-module"],{

/***/ "./src/app/redactor/components/block-info/block-info.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/redactor/components/block-info/block-info.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height\" *ngIf=\"block\">\n  <mat-card class=\"full-height d-flex-column\">\n    <mat-card-title>\n      <ng-container [ngSwitch]=\"block.classId\">\n        <ng-container *ngSwitchCase=\"1\">Вокзал </ng-container>\n        <ng-container *ngSwitchCase=\"2\">Поставщик </ng-container>\n        <ng-container *ngSwitchCase=\"3\">Аэропорт </ng-container>\n        <ng-container *ngSwitchCase=\"4\">Порт </ng-container>\n        <ng-container *ngSwitchCase=\"5\">Посрденик </ng-container>\n        <ng-container *ngSwitchCase=\"6\">Потребитель </ng-container>\n        - {{block.id}}\n      </ng-container>\n    </mat-card-title>\n    <mat-card-content *ngIf=\"block.classId === 2\" class=\"card-content f-stretching d-flex-column\">\n      <div class=\"title\">Товары на продажу</div>\n      <app-goods-table [source]=\"block.info.goodsOut\" (dataChanged)=\"goodsOutChanges($event)\"\n                       class=\"f-stretching\"></app-goods-table>\n    </mat-card-content>\n    <mat-card-content *ngIf=\"block.classId === 6\" class=\"card-content f-stretching d-flex-column\">\n      <div class=\"title\">Товары на заказ</div>\n      <app-goods-table [source]=\"block.info.goodsIn\" (dataChanged)=\"goodsInChanges($event)\"\n                       class=\"f-stretching\"></app-goods-table>\n    </mat-card-content>\n    <mat-card-content *ngIf=\"block.classId === 5\" class=\"card-content f-stretching d-flex-column\">\n      <div class=\"title\">Товары на заказ</div>\n      <app-goods-table [source]=\"block.info.goodsIn\" (dataChanged)=\"goodsInChanges($event)\"\n                       class=\"f-stretching\"></app-goods-table>\n      <div class=\"title\">Товары на продажу</div>\n      <app-goods-table [source]=\"block.info.goodsOut\" (dataChanged)=\"goodsOutChanges($event)\"\n                       class=\"f-stretching\"></app-goods-table>\n    </mat-card-content>\n    <mat-card-content *ngIf=\"block.classId === 1 || block.classId === 3 || block.classId === 4\"\n                      class=\"card-content f-stretching d-flex-column\">\n      <div class=\"title\">Контейнеры</div>\n      <div class=\"\" [formGroup]=\"formGroup\">\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Количество\" name=\"Количество\" formControlName=\"containerCount\">\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Габариты\" name=\"Габариты\" formControlName=\"containerVal\">\n        </mat-form-field>\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Вес\" name=\"Вес\" formControlName=\"containerWeight\">\n        </mat-form-field>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/redactor/components/block-info/block-info.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/redactor/components/block-info/block-info.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-content {\n  overflow: auto; }\n\n.title {\n  flex: 0 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkYWN0b3IvY29tcG9uZW50cy9ibG9jay1pbmZvL0M6XFxXUFxccmVkYWN0b3Ivc3JjXFxhcHBcXHJlZGFjdG9yXFxjb21wb25lbnRzXFxibG9jay1pbmZvXFxibG9jay1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL2NvbXBvbmVudHMvYmxvY2staW5mby9ibG9jay1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/redactor/components/block-info/block-info.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/redactor/components/block-info/block-info.component.ts ***!
  \************************************************************************/
/*! exports provided: BlockInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInfoComponent", function() { return BlockInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var BlockInfoComponent = /** @class */ (function () {
    function BlockInfoComponent(fb) {
        this.fb = fb;
        this.blockChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formGroup = this.fb.group({
            containerCount: null,
            containerVal: null,
            containerWeight: null
        });
    }
    BlockInfoComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.lookChange) {
            this.lookChange.unsubscribe();
        }
        if (changes.block && this.block && !this.block.info) {
            this.block.info = {};
        }
        this.formGroup.reset(this.block.info);
        this.lookChange = this.formGroup.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(350)).subscribe(function (res) {
            _this.block.info = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.block.info, res);
            _this.blockChanged.next(_this.block);
        });
    };
    BlockInfoComponent.prototype.goodsInChanges = function (e) {
        this.block.info.goodsIn = e;
        this.blockChanged.next(this.block);
    };
    BlockInfoComponent.prototype.goodsOutChanges = function (e) {
        this.block.info.goodsOut = e;
        this.blockChanged.next(this.block);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockInfoComponent.prototype, "block", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BlockInfoComponent.prototype, "blockChanged", void 0);
    BlockInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-block-info',
            template: __webpack_require__(/*! ./block-info.component.html */ "./src/app/redactor/components/block-info/block-info.component.html"),
            styles: [__webpack_require__(/*! ./block-info.component.scss */ "./src/app/redactor/components/block-info/block-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], BlockInfoComponent);
    return BlockInfoComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/goods-table/goods-table.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/redactor/components/goods-table/goods-table.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"source\" class=\"mat-elevation-z1 full-width table-container\">\n\n  <!-- Name column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Наименование</th>\n    <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n  </ng-container>\n\n  <!-- Count column -->\n  <ng-container matColumnDef=\"count\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Количество</th>\n    <td mat-cell *matCellDef=\"let row\"> {{row.count}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"\n      style=\"cursor: pointer;\" [ngClass]=\"{'selected-row': row === selectedRow}\"></tr>\n\n</table>\n\n\n<div class=\"\" *ngIf=\"!selectedRow\">\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Наименование\" name=\"name\" [(ngModel)]=\"name\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Количество\" name=\"count\" [(ngModel)]=\"count\">\n  </mat-form-field>\n\n  <div class=\"d-flex-row justify-content-end\">\n    <button mat-button (click)=\"add()\">Добавить</button>\n  </div>\n</div>\n\n<div class=\"\" *ngIf=\"selectedRow\">\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Наименование\" name=\"name\" [(ngModel)]=\"name\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Количество\" name=\"count\" [(ngModel)]=\"count\">\n  </mat-form-field>\n\n  <div class=\"d-flex-row justify-content-end\">\n    <button mat-button (click)=\"change()\">Изменить</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/redactor/components/goods-table/goods-table.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/redactor/components/goods-table/goods-table.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\n  overflow: auto;\n  margin: 3px 0; }\n\n.selected-row {\n  background-color: rgba(0, 255, 252, 0.33); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkYWN0b3IvY29tcG9uZW50cy9nb29kcy10YWJsZS9DOlxcV1BcXHJlZGFjdG9yL3NyY1xcYXBwXFxyZWRhY3RvclxcY29tcG9uZW50c1xcZ29vZHMtdGFibGVcXGdvb2RzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHlDQUF5QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVkYWN0b3IvY29tcG9uZW50cy9nb29kcy10YWJsZS9nb29kcy10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1hcmdpbjogM3B4IDA7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1yb3cge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTIsIDAuMzMpO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/redactor/components/goods-table/goods-table.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/redactor/components/goods-table/goods-table.component.ts ***!
  \**************************************************************************/
/*! exports provided: GoodsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsTableComponent", function() { return GoodsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoodsTableComponent = /** @class */ (function () {
    function GoodsTableComponent() {
        this.dataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.name = null;
        this.count = null;
        this.selectedRow = null;
        this.displayedColumns = ['name', 'count'];
    }
    GoodsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.source && !this.source) {
            this.source = [];
        }
    };
    GoodsTableComponent.prototype.add = function () {
        if (this.name && this.count) {
            this.source.push({
                name: this.name,
                count: this.count
            });
            this.name = null;
            this.count = null;
            this.source = this.source.slice();
            this.dataChanged.next(this.source);
        }
    };
    GoodsTableComponent.prototype.selectRow = function (e) {
        if (this.selectedRow === e) {
            this.selectedRow = null;
            this.name = null;
            this.count = null;
        }
        else {
            this.selectedRow = e;
            this.name = e.name;
            this.count = e.count;
        }
    };
    GoodsTableComponent.prototype.change = function () {
        if (this.name && this.count) {
            this.selectedRow.name = this.name;
            this.selectedRow.count = this.count;
            this.source = this.source.slice();
            this.name = null;
            this.count = null;
            this.selectedRow = null;
            this.dataChanged.next(this.source);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GoodsTableComponent.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GoodsTableComponent.prototype, "dataChanged", void 0);
    GoodsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-goods-table',
            template: __webpack_require__(/*! ./goods-table.component.html */ "./src/app/redactor/components/goods-table/goods-table.component.html"),
            styles: [__webpack_require__(/*! ./goods-table.component.scss */ "./src/app/redactor/components/goods-table/goods-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GoodsTableComponent);
    return GoodsTableComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/link-info/link-info.component.html":
/*!************************************************************************!*\
  !*** ./src/app/redactor/components/link-info/link-info.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height\" *ngIf=\"link\">\n  <mat-card class=\"full-height d-flex-column\">\n    <mat-card-title>Путь - {{link.id}}</mat-card-title>\n    <mat-card-content class=\"card-content f-stretching d-flex-column\">\n      <div class=\"\" [formGroup]=\"form\">\n        <mat-form-field class=\"full-width\">\n          <mat-label>Тип</mat-label>\n          <mat-select formControlName=\"type\">\n            <mat-option *ngFor=\"let type of types\" [value]=\"type\">\n              {{type}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <!--<mat-form-field class=\"full-width\">-->\n          <!--<input matInput placeholder=\"Тип\" name=\"Тип\" formControlName=\"type\">-->\n        <!--</mat-form-field>-->\n        <mat-form-field class=\"full-width\">\n          <input matInput placeholder=\"Расстояние\" name=\"Расстояние\" formControlName=\"path\">\n        </mat-form-field>\n      </div>\n    </mat-card-content>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/redactor/components/link-info/link-info.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/redactor/components/link-info/link-info.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL2NvbXBvbmVudHMvbGluay1pbmZvL2xpbmstaW5mby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/redactor/components/link-info/link-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/redactor/components/link-info/link-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: LinkInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkInfoComponent", function() { return LinkInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LinkInfoComponent = /** @class */ (function () {
    function LinkInfoComponent(fb) {
        this.fb = fb;
        this.types = ['Вода', 'Воздух', 'Земля'];
        this.form = this.fb.group({
            type: null,
            path: null
        });
    }
    LinkInfoComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.sub) {
            this.sub.unsubscribe();
            this.sub = null;
        }
        this.form.reset(this.link.info);
        this.sub = this.form.valueChanges.subscribe(function (res) {
            _this.link.info = res;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LinkInfoComponent.prototype, "link", void 0);
    LinkInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-link-info',
            template: __webpack_require__(/*! ./link-info.component.html */ "./src/app/redactor/components/link-info/link-info.component.html"),
            styles: [__webpack_require__(/*! ./link-info.component.scss */ "./src/app/redactor/components/link-info/link-info.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LinkInfoComponent);
    return LinkInfoComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/redactor/redactor.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/redactor/components/redactor/redactor.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height d-flex-row\">\n  <div class=\"left-toolbar full-height d-flex-column\">\n    <mat-card>\n      <mat-card-title>\n        Блоки\n      </mat-card-title>\n      <mat-card-content>\n        <button mat-stroked-button class=\"toolbar-wide-button postavshik\" (click)=\"addBlock(2)\">\n          + Поставщик\n        </button>\n        <button mat-stroked-button class=\"toolbar-wide-button vokzal\" (click)=\"addBlock(1)\">\n          + Вокзал\n        </button>\n        <button mat-stroked-button class=\"toolbar-wide-button aeroport\" (click)=\"addBlock(3)\">\n          + Аэропорт\n        </button>\n        <button mat-stroked-button class=\"toolbar-wide-button port\" (click)=\"addBlock(4)\">\n          + Порт\n        </button>\n        <button mat-stroked-button class=\"toolbar-wide-button posrednik\" (click)=\"addBlock(5)\">\n          + Посредник\n        </button>\n        <button mat-stroked-button class=\"toolbar-wide-button potrebitel\" (click)=\"addBlock(6)\">\n          + Потребитель\n        </button>\n      </mat-card-content>\n      <mat-card-footer class=\"d-flex-row justify-content-end\">\n        <button mat-button><i class=\"material-icons\" (click)=\"save()\">save</i></button>\n      </mat-card-footer>\n    </mat-card>\n  </div>\n  <div class=\"paper-container full-height d-flex-row\">\n    <div class=\"paper-view\" #paperView></div>\n  </div>\n  <div class=\"right-toolbar full-height\">\n    <app-block-info *ngIf=\"selectedBlock\" [block]=\"selectedBlock\" (blockChanged)=\"blockChange($event)\"></app-block-info>\n    <app-link-info *ngIf=\"selectedLink\" [link]=\"selectedLink\"></app-link-info>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/redactor/components/redactor/redactor.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/redactor/components/redactor/redactor.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 1 auto;\n  min-height: 0; }\n\n.left-toolbar {\n  flex: 0 0 300px; }\n\n.right-toolbar {\n  flex: 0 0 450px; }\n\n.paper-container {\n  flex: 1 1 auto;\n  justify-content: center;\n  align-content: center;\n  overflow: auto; }\n\n.paper-view /deep/ {\n  min-width: 1024px;\n  min-height: 800px;\n  flex: 0 0 auto; }\n\n.toolbar-wide-button {\n  width: 100%;\n  margin-bottom: 4px; }\n\n.vokzal {\n  background-color: rgba(0, 0, 0, 0.35); }\n\n.postavshik {\n  background-color: rgba(255, 0, 0, 0.35); }\n\n.aeroport {\n  background-color: rgba(0, 0, 255, 0.35); }\n\n.port {\n  background-color: rgba(0, 255, 255, 0.35); }\n\n.posrednik {\n  background-color: rgba(255, 0, 255, 0.35); }\n\n.potrebitel {\n  background-color: rgba(255, 255, 0, 0.35); }\n\n.goods-one {\n  width: 115px;\n  height: 58px;\n  padding: 2px;\n  font-size: 11px;\n  position: absolute;\n  overflow-y: auto; }\n\n.goods-one .row {\n    border-top: 1px dotted black; }\n\n.goods-two {\n  width: 230px;\n  height: 58px;\n  font-size: 11px;\n  position: absolute;\n  display: inline-flex; }\n\n.goods-two .left {\n    width: 50%;\n    padding: 2px;\n    height: 100%; }\n\n.goods-two .right {\n    width: 50%;\n    padding: 2px;\n    height: 100%; }\n\n.goods-two .row {\n    border-top: 1px dotted black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkYWN0b3IvY29tcG9uZW50cy9yZWRhY3Rvci9DOlxcV1BcXHJlZGFjdG9yL3NyY1xcYXBwXFxyZWRhY3RvclxcY29tcG9uZW50c1xccmVkYWN0b3JcXHJlZGFjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRSx1Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx1Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFFWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQVBsQjtJQVNJLDRCQUE0QixFQUFBOztBQUloQztFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUVmLGtCQUFrQjtFQUNsQixvQkFBb0IsRUFBQTs7QUFOdEI7SUFRSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVksRUFBQTs7QUFWaEI7SUFhSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVksRUFBQTs7QUFmaEI7SUFrQkksNEJBQTRCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWRhY3Rvci9jb21wb25lbnRzL3JlZGFjdG9yL3JlZGFjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5sZWZ0LXRvb2xiYXIge1xyXG4gIGZsZXg6IDAgMCAzMDBweDtcclxufVxyXG5cclxuLnJpZ2h0LXRvb2xiYXIge1xyXG4gIGZsZXg6IDAgMCA0NTBweDtcclxufVxyXG5cclxuLnBhcGVyLWNvbnRhaW5lciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ucGFwZXItdmlldyAvZGVlcC8ge1xyXG4gIG1pbi13aWR0aDogMTAyNHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG59XHJcblxyXG4udG9vbGJhci13aWRlLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4udm9remFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xyXG59XHJcblxyXG4ucG9zdGF2c2hpayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzUpO1xyXG59XHJcblxyXG4uYWVyb3BvcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjM1KTtcclxufVxyXG5cclxuLnBvcnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMjU1LCAyNTUsIDAuMzUpO1xyXG59XHJcblxyXG4ucG9zcmVkbmlrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMjU1LCAwLjM1KTtcclxufVxyXG5cclxuLnBvdHJlYml0ZWwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDAsIDAuMzUpO1xyXG59XHJcblxyXG4uZ29vZHMtb25lIHtcclxuICB3aWR0aDogMTE1cHg7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICAvL3otaW5kZXg6IC0xO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICAucm93IHtcclxuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4uZ29vZHMtdHdvIHtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICAvL3otaW5kZXg6IC0xO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/redactor/components/redactor/redactor.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/redactor/components/redactor/redactor.component.ts ***!
  \********************************************************************/
/*! exports provided: RedactorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorComponent", function() { return RedactorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jointjs */ "./node_modules/jointjs/dist/joint.min.js");
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jointjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_services_blocks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/blocks.service */ "./src/app/shared/services/blocks.service.ts");




var LinkView = jointjs__WEBPACK_IMPORTED_MODULE_2__["dia"].LinkView;

var RedactorComponent = /** @class */ (function () {
    function RedactorComponent(bs, renderer) {
        this.bs = bs;
        this.renderer = renderer;
        this.ctrlDownedYet = false;
        this.blocks = [];
        this.links = [];
        this.linkingStarted = false;
        this.startCell = null;
        this.endCell = null;
    }
    RedactorComponent_1 = RedactorComponent;
    RedactorComponent.attrByClassId = function (block) {
        block.cell.resize(115, 47);
        if (block.classId === 1) {
            block.cell.attr({
                body: {
                    fill: 'rgba(0,0,0,0.35)'
                },
                label: {
                    text: 'Вокзал - ' + block.id,
                    fill: 'black'
                }
            });
        }
        if (block.classId === 2) {
            block.cell.resize(115, 88);
            block.cell.attr({
                body: {
                    fill: 'rgba(255,0,0,0.35)',
                },
                label: {
                    text: 'Поставщик - ' + block.id,
                    fill: 'black',
                    transform: 'matrix(1, 0, 0, 1, 0, -25)'
                }
            });
        }
        if (block.classId === 3) {
            block.cell.attr({
                body: {
                    fill: 'rgba(0,0,255,0.35)'
                },
                label: {
                    text: 'Аэропорт - ' + block.id,
                    fill: 'black'
                }
            });
        }
        if (block.classId === 4) {
            block.cell.attr({
                body: {
                    fill: 'rgba(0,255,255,0.35)'
                },
                label: {
                    text: 'Порт - ' + block.id,
                    fill: 'black'
                }
            });
        }
        if (block.classId === 5) {
            block.cell.resize(230, 88);
            block.cell.attr({
                body: {
                    fill: 'rgba(255,0,255,0.35)'
                },
                label: {
                    text: 'Посредник - ' + block.id,
                    fill: 'black',
                    transform: 'matrix(1, 0, 0, 1, 0, -25)'
                }
            });
        }
        if (block.classId === 6) {
            block.cell.resize(115, 88);
            block.cell.attr({
                body: {
                    fill: 'rgba(255,255,0,0.35)'
                },
                label: {
                    text: 'Потребитель - ' + block.id,
                    fill: 'black',
                    transform: 'matrix(1, 0, 0, 1, 0, -25)'
                }
            });
        }
    };
    RedactorComponent.prototype.ngOnInit = function () {
        this.blocks = this.bs.blocks.slice();
        this.links = this.bs.links.slice();
    };
    RedactorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // создаем граф и лист для него
        this.graph = new jointjs__WEBPACK_IMPORTED_MODULE_2__["dia"].Graph();
        this.paper = new jointjs__WEBPACK_IMPORTED_MODULE_2__["dia"].Paper({
            el: this.paperView.nativeElement,
            model: this.graph,
            width: 1024,
            height: 800,
            gridSize: 10,
            className: 'paper',
            drawGrid: true,
            validateConnection: function (cellViewS, magnetS, cellViewT, magnetT, end) {
                var view = (end === 'target' ? cellViewT : cellViewS);
                return !view.model.isLink();
            },
            interactive: function (cellView, method) {
                // разрешаем интерактивность только с линкблоками пока зажат контрол
                return !_this.ctrlDownedYet || cellView instanceof LinkView;
            }
            // embeddingMode: true
        });
        // прогоняем массивы
        this.processAllBlocks();
        this.processAllLinks();
        this.startWatch();
    };
    RedactorComponent.prototype.startWatch = function () {
        var _this = this;
        // при изменении позиции чего-либо
        this.graph.on('change:position', function (cell) {
            // if (obstacles.indexOf(cell) > -1) this.paper.findViewByModel(link).update();
            // находим умные пути для всех дорог
            _this.links.forEach(function (l) {
                _this.paper.findViewByModel(l.cell).update();
            });
        });
        // изменяем позицbb
        this.graph.on('change:position', function (element, position) {
            var blck = _this.blocks.find(function (b) { return b.cell === element; });
            blck.x = position.x;
            blck.y = position.y;
            if (blck.html) {
                _this.changePosition(blck);
            }
        });
        this.linking();
        this.deleting();
        // выбор элемента
        this.paper.on('cell:pointerclick', function (cell) {
            if (!_this.ctrlDownedYet) {
                if (cell instanceof LinkView) {
                    _this.selectedBlock = null;
                    _this.selectedLink = _this.links.find(function (l) { return l.cell === cell.model; });
                }
                else {
                    _this.selectedLink = null;
                    _this.selectedBlock = _this.blocks.find(function (b) { return b.cell === cell.model; });
                }
            }
        });
    };
    RedactorComponent.prototype.linking = function () {
        var _this = this;
        this.paper.on('cell:pointerclick', function (cell) {
            if (_this.ctrlDownedYet && !(cell instanceof LinkView) && !_this.linkingStarted) {
                _this.linkingStarted = true;
                _this.startCell = cell;
                return;
            }
            if (_this.ctrlDownedYet && !(cell instanceof LinkView) && _this.linkingStarted) {
                _this.linkingStarted = false;
                _this.endCell = cell;
                if (_this.endCell !== _this.startCell) {
                    var startBlock_1 = _this.blocks.find(function (b) { return b.cell === _this.startCell.model; });
                    var endBlock_1 = _this.blocks.find(function (b) { return b.cell === _this.endCell.model; });
                    var existingLink = _this.links.find(function (l) {
                        return l.from === startBlock_1.id && l.to === endBlock_1.id || l.to === startBlock_1.id && l.from === endBlock_1.id;
                    });
                    if (!existingLink) {
                        _this.addLink(startBlock_1.id, endBlock_1.id);
                    }
                }
                _this.startCell = null;
                _this.endCell = null;
                return;
            }
        });
    };
    RedactorComponent.prototype.deleting = function () {
        var _this = this;
        this.paper.on('cell:contextmenu', function (cell) {
            if (cell instanceof LinkView) {
                var fli = _this.links.findIndex(function (l) { return l.cell === cell.model; });
                if (fli > -1) {
                    _this.links.splice(fli, 1);
                    cell.remove();
                }
            }
            else {
                var fb_1 = _this.blocks.find(function (b) { return b.cell === cell.model; });
                if (fb_1) {
                    var stayingLinks_1 = [];
                    var deletingLinks_1 = [];
                    _this.links.forEach(function (l) {
                        if (l.to === fb_1.id || l.from === fb_1.id) {
                            deletingLinks_1.push(l);
                        }
                        else {
                            stayingLinks_1.push(l);
                        }
                    });
                    _this.links = stayingLinks_1;
                    deletingLinks_1.forEach(function (l) { return l.cell.remove(); });
                    var fbi = _this.blocks.findIndex(function (b) { return b === fb_1; });
                    _this.blocks.splice(fbi, 1);
                    if (fb_1.html) {
                        _this.renderer.removeChild(_this.paperView, fb_1.html);
                    }
                    fb_1.cell.remove();
                }
            }
        });
    };
    RedactorComponent.prototype.processBlock = function (block) {
        block.cell = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].standard.Rectangle();
        block.cell.position(block.x, block.y);
        RedactorComponent_1.attrByClassId(block);
        this.graph.addCell(block.cell);
    };
    RedactorComponent.prototype.processAllBlocks = function () {
        var _this = this;
        if (this.blocks && this.blocks.length) {
            this.blocks.forEach(function (b) {
                _this.processBlock(b);
                if (b.info && b.info.goodsIn && b.info.goodsOut) {
                    _this.addGoodAllTable(b);
                    return;
                }
                if (b.info && b.info.goodsOut) {
                    _this.addGoodsOutTable(b);
                }
                if (b.info && b.info.goodsIn) {
                    _this.addGoodInTable(b);
                }
            });
        }
    };
    RedactorComponent.prototype.processLink = function (link) {
        var sourceId = this.blocks.find(function (b) { return b.id === link.from; }).cell.id;
        var targetId = this.blocks.find(function (b) { return b.id === link.to; }).cell.id;
        link.cell = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].standard.Link({
            source: { id: sourceId },
            target: { id: targetId },
            router: { name: 'manhattan' },
            connector: { name: 'rounded' },
            attrs: {
                line: {
                    stroke: '#444444',
                    strokeWidth: 2
                }
            }
        });
        link.cell.attr('line/targetMarker', {
            type: 'circle',
            fill: '#666',
            stroke: '#333',
            r: 2,
            cx: 1 // move the centre of the circle 5 pixels from the end of the path
        });
        link.cell.attr('line/sourceMarker', {
            type: 'circle',
            fill: '#666',
            stroke: '#333',
            r: 2,
            cx: 1 // move the centre of the circle 5 pixels from the end of the path
        });
        if (!link.info || !link.info.type) {
            link.info = { type: 'Земля' };
        }
        this.graph.addCell(link.cell);
    };
    RedactorComponent.prototype.processAllLinks = function () {
        var _this = this;
        if (this.links && this.links.length) {
            this.links.forEach(function (l) {
                _this.processLink(l);
            });
        }
    };
    RedactorComponent.prototype.addLink = function (from, to) {
        var id = 0;
        this.links.forEach(function (b) {
            if (b.id >= id) {
                id = b.id;
                id++;
            }
        });
        var link = {
            id: id,
            from: from,
            to: to
        };
        this.links.push(link);
        this.processLink(link);
        console.log('link added', link);
    };
    RedactorComponent.prototype.addBlock = function (classId) {
        var id = 0;
        this.blocks.forEach(function (b) {
            if (b.id >= id) {
                id = b.id;
                id++;
            }
        });
        var block = {
            id: id,
            classId: classId,
            cell: null,
            x: 100,
            y: 100
        };
        this.blocks.push(block);
        this.processBlock(block);
        console.log('block added', block);
    };
    RedactorComponent.prototype.keyEventUp = function (event) {
        if (event.key === 'Control') {
            this.ctrlDownedYet = false;
            this.blocks.forEach(function (b) {
                b.cell.attr({ rect: { cursor: 'move' } });
            });
            // принудительно заканчиваем создание линки
            this.linkingStarted = false;
            this.startCell = false;
            this.endCell = false;
        }
    };
    RedactorComponent.prototype.ctrlDown = function (event) {
        if (event.key === 'Control') {
            if (!this.ctrlDownedYet) {
                this.ctrlDownedYet = true;
                this.blocks.forEach(function (b) {
                    b.cell.attr({ rect: { cursor: 'pointer' } });
                });
            }
        }
    };
    RedactorComponent.prototype.save = function () {
        this.graph.clear();
        this.bs.save(this.blocks, this.links);
        this.blocks = this.bs.blocks;
        this.links = this.bs.links;
        this.processAllBlocks();
        this.processAllLinks();
    };
    RedactorComponent.prototype.blockChange = function (e) {
        if (e.html) {
            this.renderer.removeChild(this.paperView.nativeElement, e.html);
            e.html = null;
        }
        if (e.classId === 2) {
            this.addGoodsOutTable(e);
        }
        if (e.classId === 6) {
            this.addGoodInTable(e);
        }
        if (e.classId === 5) {
            this.addGoodAllTable(e);
        }
    };
    RedactorComponent.prototype.addGoodsOutTable = function (b) {
        var _this = this;
        if (!b.html && b.info.goodsOut) {
            var data_1 = this.renderer.createElement('div');
            this.renderer.addClass(data_1, 'goods-one');
            this.renderer.setStyle(data_1, 'left', b.x + "px");
            this.renderer.setStyle(data_1, 'top', b.y + 30 + "px");
            this.renderer.setAttribute(data_1, 'id', "back" + b.id);
            b.info.goodsOut.forEach(function (g) {
                var row = _this.renderer.createElement('div');
                _this.renderer.appendChild(data_1, row);
                _this.renderer.addClass(row, 'row');
                var text = _this.renderer.createText(g.name + " - " + g.count);
                _this.renderer.appendChild(row, text);
            });
            b.html = data_1;
            this.renderer.appendChild(this.paperView.nativeElement, data_1);
        }
    };
    RedactorComponent.prototype.addGoodInTable = function (b) {
        var _this = this;
        if (!b.html && b.info.goodsIn) {
            var data_2 = this.renderer.createElement('div');
            this.renderer.addClass(data_2, 'goods-one');
            this.renderer.setStyle(data_2, 'left', b.x + "px");
            this.renderer.setStyle(data_2, 'top', b.y + 30 + "px");
            this.renderer.setAttribute(data_2, 'id', "back" + b.id);
            b.info.goodsIn.forEach(function (g) {
                var row = _this.renderer.createElement('div');
                _this.renderer.appendChild(data_2, row);
                _this.renderer.addClass(row, 'row');
                var text = _this.renderer.createText(g.name + " - " + g.count);
                _this.renderer.appendChild(row, text);
            });
            b.html = data_2;
            this.renderer.appendChild(this.paperView.nativeElement, data_2);
        }
    };
    RedactorComponent.prototype.addGoodAllTable = function (b) {
        var _this = this;
        if (!b.html && (b.info.goodsIn || b.info.goodsOut)) {
            var data = this.renderer.createElement('div');
            this.renderer.addClass(data, 'goods-two');
            this.renderer.setStyle(data, 'left', b.x + "px");
            this.renderer.setStyle(data, 'top', b.y + 30 + "px");
            this.renderer.setAttribute(data, 'id', "back" + b.id);
            var left_1 = this.renderer.createElement('div');
            this.renderer.addClass(left_1, 'left');
            var right_1 = this.renderer.createElement('div');
            this.renderer.addClass(right_1, 'right');
            this.renderer.appendChild(data, left_1);
            this.renderer.appendChild(data, right_1);
            if (b.info.goodsIn) {
                b.info.goodsIn.forEach(function (g) {
                    var row = _this.renderer.createElement('div');
                    _this.renderer.appendChild(left_1, row);
                    _this.renderer.addClass(row, 'row');
                    var text = _this.renderer.createText(g.name + " - " + g.count);
                    _this.renderer.appendChild(left_1, text);
                });
            }
            if (b.info.goodsOut) {
                b.info.goodsOut.forEach(function (g) {
                    var row = _this.renderer.createElement('div');
                    _this.renderer.appendChild(right_1, row);
                    _this.renderer.addClass(row, 'row');
                    var text = _this.renderer.createText(g.name + " - " + g.count);
                    _this.renderer.appendChild(right_1, text);
                });
            }
            b.html = data;
            this.renderer.appendChild(this.paperView.nativeElement, data);
        }
    };
    RedactorComponent.prototype.changePosition = function (b) {
        if (b.classId === 2 || b.classId === 5 || b.classId === 6) {
            this.renderer.setStyle(b.html, 'left', b.x + "px");
            this.renderer.setStyle(b.html, 'top', b.y + 30 + "px");
        }
    };
    var RedactorComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('paperView'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RedactorComponent.prototype, "paperView", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RedactorComponent.prototype, "keyEventUp", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], RedactorComponent.prototype, "ctrlDown", null);
    RedactorComponent = RedactorComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redactor',
            template: __webpack_require__(/*! ./redactor.component.html */ "./src/app/redactor/components/redactor/redactor.component.html"),
            styles: [__webpack_require__(/*! ./redactor.component.scss */ "./src/app/redactor/components/redactor/redactor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_blocks_service__WEBPACK_IMPORTED_MODULE_3__["BlocksService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], RedactorComponent);
    return RedactorComponent;
}());



/***/ }),

/***/ "./src/app/redactor/redactor-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/redactor/redactor-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: RedactorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorRoutingModule", function() { return RedactorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_redactor_redactor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/redactor/redactor.component */ "./src/app/redactor/components/redactor/redactor.component.ts");




var routes = [
    {
        path: '',
        component: _components_redactor_redactor_component__WEBPACK_IMPORTED_MODULE_3__["RedactorComponent"]
    }
];
var RedactorRoutingModule = /** @class */ (function () {
    function RedactorRoutingModule() {
    }
    RedactorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RedactorRoutingModule);
    return RedactorRoutingModule;
}());



/***/ }),

/***/ "./src/app/redactor/redactor.module.ts":
/*!*********************************************!*\
  !*** ./src/app/redactor/redactor.module.ts ***!
  \*********************************************/
/*! exports provided: RedactorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedactorModule", function() { return RedactorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_redactor_redactor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/redactor/redactor.component */ "./src/app/redactor/components/redactor/redactor.component.ts");
/* harmony import */ var _redactor_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redactor-routing.module */ "./src/app/redactor/redactor-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_block_info_block_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/block-info/block-info.component */ "./src/app/redactor/components/block-info/block-info.component.ts");
/* harmony import */ var _components_goods_table_goods_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/goods-table/goods-table.component */ "./src/app/redactor/components/goods-table/goods-table.component.ts");
/* harmony import */ var _components_link_info_link_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/link-info/link-info.component */ "./src/app/redactor/components/link-info/link-info.component.ts");









var RedactorModule = /** @class */ (function () {
    function RedactorModule() {
    }
    RedactorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_redactor_redactor_component__WEBPACK_IMPORTED_MODULE_3__["RedactorComponent"], _components_block_info_block_info_component__WEBPACK_IMPORTED_MODULE_6__["BlockInfoComponent"], _components_goods_table_goods_table_component__WEBPACK_IMPORTED_MODULE_7__["GoodsTableComponent"], _components_link_info_link_info_component__WEBPACK_IMPORTED_MODULE_8__["LinkInfoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _redactor_routing_module__WEBPACK_IMPORTED_MODULE_4__["RedactorRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ]
        })
    ], RedactorModule);
    return RedactorModule;
}());



/***/ })

}]);
//# sourceMappingURL=redactor-redactor-module.js.map