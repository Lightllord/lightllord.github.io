(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redactor-redactor-module"],{

/***/ "./src/app/redactor/components/block-info/block-info.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/redactor/components/block-info/block-info.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height\" *ngIf=\"block\">\r\n  <mat-card class=\"full-height d-flex-column\">\r\n    <mat-card-title>\r\n      <ng-container [ngSwitch]=\"block.classId\">\r\n        <h1 *ngSwitchCase=\"1\">Вокзал</h1>\r\n        <h1 *ngSwitchCase=\"2\">Поставщик</h1>\r\n        <h1 *ngSwitchCase=\"3\">Аэропорт</h1>\r\n        <h1 *ngSwitchCase=\"4\">Порт</h1>\r\n        <h1 *ngSwitchCase=\"5\">Производитель</h1>\r\n        <h1 *ngSwitchCase=\"6\">Потребитель</h1>\r\n        <h1 *ngSwitchCase=\"7\">Дистрибьютор</h1>\r\n      </ng-container>\r\n      <mat-form-field class=\"full-width name\" [formGroup]=\"formGroup\">\r\n        <input matInput placeholder=\"Наименование\" name=\"Наименование\" formControlName=\"name\">\r\n      </mat-form-field>\r\n\r\n    </mat-card-title>\r\n\r\n    <!-- ПОСТАВЩИК -->\r\n    <mat-card-content *ngIf=\"block.classId === 2\" class=\"card-content f-stretching d-flex-column\">\r\n      <mat-card class=\"small-card\" [formGroup]=\"formGroup\">\r\n        <mat-card-title>Обслуживание</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-form-field class=\"mr-2\">\r\n            <input matInput placeholder=\"Стоимость\" formControlName=\"costService\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Срок\" formControlName=\"serviceTime\">\r\n          </mat-form-field>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <div class=\"title\">Товары для реализации</div>\r\n      <app-sender-goods-table [source]=\"block.info.goodsOut\"\r\n                              (dataChanged)=\"goodsOutChanges($event)\"></app-sender-goods-table>\r\n      <div class=\"title\">Погрузчики</div>\r\n      <app-loaders [info]=\"block.info\"></app-loaders>\r\n      <mat-card>\r\n        <mat-card-title style=\"font-size: 19px\">Контейнеры</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-list>\r\n            <mat-list-item style=\"font-size: 12px\" *ngFor=\"let c of containers; let ind = index\">\r\n              <b>{{c.container.name}}</b>, кол-во: {{c.count}}\r\n              <button mat-button color=\"warn\" (click)=\"delContainer(ind)\"><i class=\"material-icons\">clear</i></button>\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n        <mat-card-footer class=\"d-flex-row justify-content-end\">\r\n          <button mat-button (click)=\"addContainer()\">+</button>\r\n        </mat-card-footer>\r\n      </mat-card>\r\n    </mat-card-content>\r\n\r\n    <!-- ПОТРЕБИТЕЛЬ -->\r\n    <mat-card-content *ngIf=\"block.classId === 6\" class=\"card-content f-stretching d-flex-column\">\r\n      <div class=\"\" [formGroup]=\"formGroup\">\r\n        <!--<mat-form-field class=\"full-width\">-->\r\n        <!--<input matInput placeholder=\"Наименование\" name=\"Наименование\" formControlName=\"name\">-->\r\n        <!--</mat-form-field>-->\r\n        <mat-card class=\"small-card\">\r\n          <mat-card-title>Обслуживание</mat-card-title>\r\n          <mat-card-content>\r\n            <mat-form-field class=\"mr-2\">\r\n              <input matInput placeholder=\"Стоимость\" formControlName=\"costService\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Срок\" formControlName=\"serviceTime\">\r\n            </mat-form-field>\r\n          </mat-card-content>\r\n        </mat-card>\r\n        <mat-card class=\"small-card\">\r\n          <mat-card-title>Параметры</mat-card-title>\r\n          <mat-card-content>\r\n            <mat-form-field class=\"full-width\">\r\n              <input matInput placeholder=\"Точка заказа (%)\" name=\"Точка заказа\" type=\"number\" formControlName=\"rop\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"mr-2\">\r\n              <input matInput placeholder=\"Спрос (мат. ожидание)\" name=\"Мат. ожидание\" formControlName=\"mat\">\r\n            </mat-form-field>\r\n            <mat-form-field class=\"mr-2\">\r\n              <input matInput placeholder=\"Спрос (дисперсия)\" name=\"Дисперсия\" formControlName=\"disp\">\r\n            </mat-form-field>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"title\">Товары на заказ</div>\r\n      <app-goods-table [source]=\"block.info.goodsIn\" (dataChanged)=\"goodsInChanges($event)\"\r\n                       class=\"\"></app-goods-table>\r\n      <div class=\"title\">Погрузчики</div>\r\n      <app-loaders [info]=\"block.info\"></app-loaders>\r\n    </mat-card-content>\r\n\r\n    <!-- ПРОИЗВОДИТЕЛЬ -->\r\n    <mat-card-content *ngIf=\"block.classId === 5\" class=\"card-content f-stretching d-flex-column\">\r\n      <mat-card class=\"small-card\" [formGroup]=\"formGroup\">\r\n        <mat-card-title>Обслуживание</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-form-field class=\"mr-2\">\r\n            <input matInput placeholder=\"Стоимость\" formControlName=\"costService\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Срок\" formControlName=\"serviceTime\">\r\n          </mat-form-field>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <div class=\"title\">Погрузчики</div>\r\n      <app-loaders [info]=\"block.info\"></app-loaders>\r\n      <mat-card class=\"small-card\" [formGroup]=\"formGroup\">\r\n        <mat-card-title>Производство</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-form-field class=\"full-width\">\r\n            <mat-label>Тип</mat-label>\r\n            <mat-select formControlName=\"workType\" placeholder=\"Тип\">\r\n              <mat-option *ngFor=\"let t of workTypes\" [value]=\"t\">\r\n                {{t}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <mat-form-field class=\"mr-2\">\r\n            <input matInput [placeholder]=\"('Длительность операции ({mtu})' | timeUnit)\" formControlName=\"workDuration\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"mr-2\">\r\n            <input matInput placeholder=\"Стоимоть операции (р)\" formControlName=\"workCost\">\r\n          </mat-form-field>\r\n          <mat-form-field class=\"mr-2\" *ngIf=\"formGroup.value && formGroup.value.workType === 'Прерываемое'\">\r\n            <input matInput [placeholder]=\"('Длительность перезапуска ({mtu})' | timeUnit)\"\r\n                   formControlName=\"workDurationRestart\">\r\n          </mat-form-field>\r\n          <mat-form-field  class=\"mr-2\" *ngIf=\"formGroup.value && formGroup.value.workType === 'Прерываемое'\">\r\n            <input matInput formControlName=\"workCostRestart\" placeholder=\"Стоимоть перезапуска (р)\">\r\n          </mat-form-field>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <div class=\"title\">Входной поток</div>\r\n      <app-goods-table [source]=\"block.info.goodsIn\" (dataChanged)=\"goodsInChanges($event)\"\r\n                       class=\"\"></app-goods-table>\r\n      <div class=\"title\">Выходной поток</div>\r\n      <app-goods-table [source]=\"block.info.goodsOut\" (dataChanged)=\"goodsOutChanges($event)\"\r\n                       class=\"\"></app-goods-table>\r\n    </mat-card-content>\r\n\r\n    <!-- ДИСТРИБЬЮТЕР -->\r\n    <mat-card-content *ngIf=\"block.classId === 7\" class=\"card-content f-stretching d-flex-column\">\r\n      <mat-card class=\"small-card\" [formGroup]=\"formGroup\">\r\n        <mat-card-title>Обслуживание</mat-card-title>\r\n        <mat-card-content>\r\n          <mat-form-field class=\"mr-2\">\r\n            <input matInput placeholder=\"Стоимость\" formControlName=\"costService\">\r\n          </mat-form-field>\r\n          <mat-form-field>\r\n            <input matInput placeholder=\"Срок\" formControlName=\"serviceTime\">\r\n          </mat-form-field>\r\n        </mat-card-content>\r\n      </mat-card>\r\n      <div class=\"title\">Погрузчики</div>\r\n      <app-loaders [info]=\"block.info\"></app-loaders>\r\n      <div class=\"title\">Товары</div>\r\n      <app-dist-goods-table [source]=\"block.info.goodsOut\"\r\n                            (dataChanged)=\"goodsOutChanges($event)\"></app-dist-goods-table>\r\n    </mat-card-content>\r\n\r\n    <!-- УЗЛЫ -->\r\n    <mat-card-content *ngIf=\"block.classId === 1 || block.classId === 3 || block.classId === 4\"\r\n                      class=\"card-content f-stretching d-flex-column\">\r\n      <div class=\"\" [formGroup]=\"formGroup\">\r\n        <ng-container *ngIf=\"schedules && schedules.controls && schedules.controls.length\">\r\n          <h1 style=\"margin: 2px 0; font-size: 20px\">Расписание</h1>\r\n          <ng-container formArrayName=\"schedules\">\r\n            <ng-container *ngFor=\"let sch of schedules.controls; let i = index;\">\r\n              <mat-card [formGroupName]=\"i\">\r\n                <mat-card-title style=\"font-size: 20px\" *ngIf=\"sch.value.blockTo.classId === 1\">Вокзал\r\n                  {{(sch.value.blockTo.info && sch.value.blockTo.info.name) ? '[' + sch.value.blockTo.info.name + ']' : ''}}\r\n                </mat-card-title>\r\n                <mat-card-title style=\"font-size: 20px\" *ngIf=\"sch.value.blockTo.classId === 3\">Аэропорт\r\n                  {{(sch.value.blockTo.info && sch.value.blockTo.info.name) ? '[' + sch.value.blockTo.info.name + ']' : ''}}\r\n                </mat-card-title>\r\n                <mat-card-title style=\"font-size: 20px\" *ngIf=\"sch.value.blockTo.classId === 4\">Порт\r\n                  {{(sch.value.blockTo.info && sch.value.blockTo.info.name) ? '[' + sch.value.blockTo.info.name + ']' : ''}}\r\n                </mat-card-title>\r\n                <mat-card-content>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input matInput [placeholder]=\"('Время отправления ({mtu})' | timeUnit)\" formControlName=\"timeFrom\">\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"full-width\">\r\n                    <input matInput [placeholder]=\"('Периодичность ({mtu})' | timeUnit)\" formControlName=\"period\">\r\n                  </mat-form-field>\r\n                </mat-card-content>\r\n\r\n                <mat-card>\r\n                  <mat-card-title style=\"font-size: 19px\">Контейнеры</mat-card-title>\r\n                  <mat-card-content>\r\n                    <mat-list *ngIf=\"schedules.get('' + i) && schedules.get('' + i).value &&\r\n                    schedules.get('' + i).value.containers\">\r\n                      <mat-list-item style=\"font-size: 12px\"\r\n                                     *ngFor=\"let c of schedules.get('' + i).value.containers; let ind = index\">\r\n                        <b>{{c.container.name}}</b>, кол-во: {{c.count}}, стоимость: {{c.price}}\r\n                        <button mat-button color=\"warn\" (click)=\"delPack(i, ind)\"><i class=\"material-icons\">clear</i>\r\n                        </button>\r\n                      </mat-list-item>\r\n                    </mat-list>\r\n                  </mat-card-content>\r\n                  <mat-card-footer class=\"d-flex-row justify-content-end\">\r\n                    <button mat-button (click)=\"addPack(i)\">+</button>\r\n                  </mat-card-footer>\r\n                </mat-card>\r\n\r\n              </mat-card>\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </mat-card-content>\r\n    <mat-card-footer class=\"d-flex-row justify-content-end\">\r\n      <button mat-button (click)=\"save()\">Сохранить</button>\r\n    </mat-card-footer>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/redactor/components/block-info/block-info.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/redactor/components/block-info/block-info.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-content {\n  overflow: auto; }\n\n.title {\n  flex: 0 0 auto;\n  font-weight: 500;\n  font-size: 17px; }\n\n.small-card {\n  padding: 6px;\n  margin-bottom: 8px; }\n\n.small-card .mat-card-title {\n    font-size: 17px;\n    margin-bottom: 2px; }\n\nh1 {\n  font-size: 20px;\n  margin: 4px 0; }\n\n.name /deep/ {\n  font-size: 17px; }\n\n.name /deep/ .mat-form-field-wrapper {\n    padding-bottom: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkYWN0b3IvY29tcG9uZW50cy9ibG9jay1pbmZvL0M6XFxXUFxccmVkYWN0b3Ivc3JjXFxhcHBcXHJlZGFjdG9yXFxjb21wb25lbnRzXFxibG9jay1pbmZvXFxibG9jay1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFGcEI7SUFJSSxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUE7O0FBS3RCO0VBQ0UsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWUsRUFBQTs7QUFEakI7SUFHSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL2NvbXBvbmVudHMvYmxvY2staW5mby9ibG9jay1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtY29udGVudCB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5zbWFsbC1jYXJkIHtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIC5tYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDRweCAwO1xyXG59XHJcblxyXG4ubmFtZSAvZGVlcC8ge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _shared_services_blocks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/blocks.service */ "./src/app/shared/services/blocks.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _container_dialog_container_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../container-dialog/container-dialog.component */ "./src/app/redactor/components/container-dialog/container-dialog.component.ts");
/* harmony import */ var _sender_container_dialog_sender_container_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../sender-container-dialog/sender-container-dialog.component */ "./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.ts");








var BlockInfoComponent = /** @class */ (function () {
    function BlockInfoComponent(fb, bs, dialog) {
        this.fb = fb;
        this.bs = bs;
        this.dialog = dialog;
        this.blockChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.containers = [];
        this.workTypes = ['Постоянное', 'Прерываемое'];
        this.formGroup = this.fb.group({
            name: null,
            mat: null,
            disp: null,
            rop: null,
            costService: null,
            serviceTime: null,
            workType: null,
            workDuration: null,
            workCost: null,
            workCostRestart: null,
            workDurationRestart: null
        });
        //this.block.info.containers
    }
    Object.defineProperty(BlockInfoComponent.prototype, "schedules", {
        get: function () {
            return this.formGroup.get('schedules');
        },
        enumerable: true,
        configurable: true
    });
    BlockInfoComponent.prototype.ngOnChanges = function (changes) {
        if (this.lookChange) {
            this.lookChange.unsubscribe();
        }
        if (changes.block && this.block) {
            if (!this.block.info) {
                this.block.info = {};
            }
            if (this.block.info.containers) {
                this.containers = this.block.info.containers;
            }
            this.formGroup.reset(this.block.info);
            if (this.block.classId === 1 || this.block.classId === 3 || this.block.classId === 4) {
                this.makeSchedule();
            }
        }
    };
    BlockInfoComponent.prototype.goodsInChanges = function (e) {
        this.block.info.goodsIn = e;
        this.blockChanged.next(this.block);
    };
    BlockInfoComponent.prototype.goodsOutChanges = function (e) {
        this.block.info.goodsOut = e;
        this.blockChanged.next(this.block);
    };
    BlockInfoComponent.prototype.save = function () {
        Object.assign(this.block.info, this.formGroup.value);
        this.blockChanged.next(this.block);
    };
    BlockInfoComponent.prototype.makeSchedule = function () {
        var _this = this;
        var existed = this.block.info.schedules || [];
        var connected = [];
        this.bs.links.forEach(function (l) {
            if (l.from === _this.block.id) {
                var blc = _this.bs.blocks.find(function (b) { return b.id === l.to; });
                if (blc.classId === 1 || blc.classId === 3 || blc.classId === 4) {
                    connected.push(blc);
                }
            }
            if (l.to === _this.block.id) {
                var blc = _this.bs.blocks.find(function (b) { return b.id === l.from; });
                if (blc.classId === 1 || blc.classId === 3 || blc.classId === 4) {
                    connected.push(blc);
                }
            }
        });
        existed = existed.filter(function (sh) {
            return !!connected.find(function (c) { return c.id === sh.blockTo.id; });
        });
        connected.filter(function (c) { return !existed.find(function (e) { return e.blockTo.id === c.id; }); }).forEach(function (c) {
            existed.push({
                blockTo: c,
                timeFrom: null,
                period: null,
                containers: []
            });
        });
        this.formGroup.setControl('schedules', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"](existed.map(function (e) {
            var gr = _this.fb.group({
                blockTo: e.blockTo,
                timeFrom: e.timeFrom,
                period: e.period,
                containers: e.containers
            });
            gr.get('containers').setValue(e.containers);
            return gr;
        })));
        // this.formGroup.get('name').setValue(this.block.info.name);
        Object.assign(this.block.info, this.formGroup.value);
        // this.block.info = this.formGroup.value;
        this.blockChanged.next(this.block);
    };
    BlockInfoComponent.prototype.delPack = function (schId, packId) {
        var vls = this.schedules.controls[schId].value;
        var cont = vls.containers;
        cont.splice(packId, 1);
        vls.containers = cont;
        this.schedules.get("" + schId).setValue(vls);
    };
    BlockInfoComponent.prototype.addPack = function (schId) {
        var _this = this;
        this.dialog.open(_container_dialog_container_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ContainerDialogComponent"], {
            width: '300px'
        }).afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (res) {
            if (res && res.container && res.count && res.price) {
                var vls = _this.schedules.get("" + schId).value;
                var cont = vls.containers;
                if (cont && cont.length) {
                    cont.push(res);
                    vls.containers = cont;
                    _this.schedules.get("" + schId).setValue(vls);
                }
                else {
                    vls.containers = [res];
                    _this.schedules.get("" + schId).setValue(vls);
                }
            }
        });
    };
    BlockInfoComponent.prototype.delContainer = function (ind) {
        this.containers.splice(ind, 1);
        this.containers = this.containers.slice();
    };
    BlockInfoComponent.prototype.addContainer = function () {
        var _this = this;
        this.dialog.open(_sender_container_dialog_sender_container_dialog_component__WEBPACK_IMPORTED_MODULE_7__["SenderContainerDialogComponent"], {
            width: '300px'
        }).afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (res) {
            if (res && res.container && res.count) {
                _this.containers.push(res);
                _this.containers = _this.containers.slice();
            }
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_blocks_service__WEBPACK_IMPORTED_MODULE_2__["BlocksService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], BlockInfoComponent);
    return BlockInfoComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/container-dialog/container-dialog.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/redactor/components/container-dialog/container-dialog.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Добавить контейнер</h1>\r\n<div mat-dialog-content>\r\n  <div class=\"\" [formGroup]=\"group\">\r\n    <mat-form-field class=\"full-width\">\r\n      <mat-select [formControlName]=\"'container'\" [compareWith]=\"contComp\"\r\n                  [placeholder]=\"'Контейнер'\">\r\n        <mat-option *ngFor=\"let o of ds.getDictVals('containers')\" [value]=\"o\">\r\n          {{o.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput [placeholder]=\"'Количество'\" type=\"number\" formControlName=\"count\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput [placeholder]=\"'Цена за единицу (р)'\" type=\"text\" formControlName=\"price\">\r\n    </mat-form-field>\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"cancel()\">Отменить</button>\r\n  <button mat-button (click)=\"save()\" cdkFocusInitial>Сохранить</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/redactor/components/container-dialog/container-dialog.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/redactor/components/container-dialog/container-dialog.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL2NvbXBvbmVudHMvY29udGFpbmVyLWRpYWxvZy9jb250YWluZXItZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/redactor/components/container-dialog/container-dialog.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/redactor/components/container-dialog/container-dialog.component.ts ***!
  \************************************************************************************/
/*! exports provided: ContainerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerDialogComponent", function() { return ContainerDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dicts.service */ "./src/app/shared/services/dicts.service.ts");





var ContainerDialogComponent = /** @class */ (function () {
    function ContainerDialogComponent(fb, dialog, ds, dialogRef) {
        this.fb = fb;
        this.dialog = dialog;
        this.ds = ds;
        this.dialogRef = dialogRef;
        this.group = this.fb.group({ container: null, count: null, price: null });
    }
    ContainerDialogComponent.prototype.ngOnInit = function () {
    };
    ContainerDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    ContainerDialogComponent.prototype.save = function () {
        this.dialogRef.close(this.group.value);
    };
    ContainerDialogComponent.prototype.contComp = function (c1, c2) {
        if (c1 && c2) {
            return c1.name === c2.name;
        }
        else {
            return false;
        }
    };
    ContainerDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-container-dialog',
            template: __webpack_require__(/*! ./container-dialog.component.html */ "./src/app/redactor/components/container-dialog/container-dialog.component.html"),
            styles: [__webpack_require__(/*! ./container-dialog.component.scss */ "./src/app/redactor/components/container-dialog/container-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_4__["DictsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ContainerDialogComponent);
    return ContainerDialogComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/dist-goods-table/dist-goods-table.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/redactor/components/dist-goods-table/dist-goods-table.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"source\" class=\"mat-elevation-z1 full-width table-container\">\n\n  <!-- Name column -->\n  <ng-container matColumnDef=\"product\">\n    <th mat-header-cell *matHeaderCellDef>Товар</th>\n    <td mat-cell *matCellDef=\"let row\"> {{row.product.name}} </td>\n  </ng-container>\n\n  <!-- Count column -->\n  <ng-container matColumnDef=\"pack\">\n    <th mat-header-cell *matHeaderCellDef>Упаковка</th>\n    <td mat-cell *matCellDef=\"let row\"> {{row.pack.name}} </td>\n  </ng-container>\n\n  <!-- Name column -->\n  <ng-container matColumnDef=\"rop\">\n    <th mat-header-cell *matHeaderCellDef>Товар</th>\n    <td mat-cell *matCellDef=\"let row\"> {{row.rop}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"\n      style=\"cursor: pointer;\" [ngClass]=\"{'selected-row': row === selectedRow}\"></tr>\n\n</table>\n\n<mat-card *ngIf=\"!selectedRow\" class=\"small-card\" [formGroup]=\"form\">\n  <mat-card-content>\n    <mat-form-field class=\"full-width\">\n      <mat-label>Товар</mat-label>\n      <mat-select formControlName=\"product\" placeholder=\"Товар\" [compareWith]=\"compareSelect\">\n        <mat-option *ngFor=\"let g of goods\" [value]=\"g\">\n          {{g.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <mat-label>Упаковка</mat-label>\n      <mat-select formControlName=\"pack\" placeholder=\"Упаковка\" [compareWith]=\"compareSelect\">\n        <mat-option *ngFor=\"let p of getPacks()\" [value]=\"p\">\n          {{p.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"ROP\" formControlName=\"rop\">\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-footer class=\"d-flex-row justify-content-end\">\n    <button mat-button (click)=\"addRow()\">+</button>\n  </mat-card-footer>\n</mat-card>\n\n<mat-card *ngIf=\"selectedRow\" class=\"small-card\" [formGroup]=\"form\">\n  <mat-card-content>\n    <mat-form-field class=\"full-width\">\n      <mat-label>Товар</mat-label>\n      <mat-select formControlName=\"product\" placeholder=\"Товар\" [compareWith]=\"compareSelect\">\n        <mat-option *ngFor=\"let g of goods\" [value]=\"g\">\n          {{g.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <mat-label>Упаковка</mat-label>\n      <mat-select formControlName=\"pack\" placeholder=\"Упаковка\" [compareWith]=\"compareSelect\">\n        <mat-option *ngFor=\"let p of getPacks()\" [value]=\"p\">\n          {{p.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"ROP\" formControlName=\"rop\">\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-footer class=\"d-flex-row justify-content-end\">\n    <button mat-button (click)=\"deleteRow()\">Удалить</button>\n    <button mat-button (click)=\"changeRow()\">Изменить</button>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/redactor/components/dist-goods-table/dist-goods-table.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/redactor/components/dist-goods-table/dist-goods-table.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL2NvbXBvbmVudHMvZGlzdC1nb29kcy10YWJsZS9kaXN0LWdvb2RzLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/redactor/components/dist-goods-table/dist-goods-table.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/redactor/components/dist-goods-table/dist-goods-table.component.ts ***!
  \************************************************************************************/
/*! exports provided: DistGoodsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistGoodsTableComponent", function() { return DistGoodsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/dicts.service */ "./src/app/shared/services/dicts.service.ts");




var DistGoodsTableComponent = /** @class */ (function () {
    function DistGoodsTableComponent(fb, ds) {
        this.fb = fb;
        this.ds = ds;
        this.dataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.count = null;
        this.selectedRow = null;
        this.displayedColumns = ['product', 'pack', 'rop'];
        this.compareSelect = function (a, b) {
            if (a && b) {
                return a.name === b.name;
            }
            else {
                return false;
            }
        };
    }
    DistGoodsTableComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            product: null,
            pack: null,
            rop: null
        });
        this.goods = this.ds.getDictVals('goods');
    };
    DistGoodsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.source && !this.source) {
            this.source = [];
            if (this.form) {
                this.form.reset({});
            }
        }
    };
    DistGoodsTableComponent.prototype.selectRow = function (e) {
        if (this.selectedRow === e) {
            this.selectedRow = null;
            this.form.reset({});
        }
        else {
            this.selectedRow = e;
            this.form.reset(this.selectedRow);
        }
    };
    DistGoodsTableComponent.prototype.getPacks = function () {
        var vals = this.form.get('product').value;
        if (vals && vals.packs) {
            return vals.packs;
        }
        else {
            return [];
        }
    };
    DistGoodsTableComponent.prototype.addRow = function () {
        if (this.form.value && this.form.value.product && this.form.value.pack) {
            this.source.push(this.form.value);
            this.form.reset({});
            this.source = this.source.slice();
            this.dataChanged.next(this.source);
        }
    };
    DistGoodsTableComponent.prototype.changeRow = function () {
        if (this.form.value && this.form.value.product && this.form.value.pack) {
            Object.assign(this.selectedRow, this.form.value);
            this.form.reset({});
            this.selectedRow = null;
            this.source = this.source.slice();
            this.dataChanged.next(this.source);
        }
    };
    DistGoodsTableComponent.prototype.deleteRow = function () {
        var _this = this;
        var foundInd = this.source.findIndex(function (s) { return s === _this.selectedRow; });
        this.source.splice(foundInd, 1);
        this.form.reset({});
        this.selectedRow = null;
        this.source = this.source.slice();
        this.dataChanged.next(this.source);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DistGoodsTableComponent.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DistGoodsTableComponent.prototype, "dataChanged", void 0);
    DistGoodsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dist-goods-table',
            template: __webpack_require__(/*! ./dist-goods-table.component.html */ "./src/app/redactor/components/dist-goods-table/dist-goods-table.component.html"),
            styles: [__webpack_require__(/*! ./dist-goods-table.component.scss */ "./src/app/redactor/components/dist-goods-table/dist-goods-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_3__["DictsService"]])
    ], DistGoodsTableComponent);
    return DistGoodsTableComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/goods-table/goods-table.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/redactor/components/goods-table/goods-table.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"source\" class=\"mat-elevation-z1 full-width table-container\">\r\n\r\n  <!-- Name column -->\r\n  <ng-container matColumnDef=\"product\">\r\n    <th mat-header-cell *matHeaderCellDef> Товар</th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.product.name}} </td>\r\n  </ng-container>\r\n\r\n  <!-- Name column -->\r\n<!--  <ng-container matColumnDef=\"name\">-->\r\n<!--    <th mat-header-cell *matHeaderCellDef> Наименование</th>-->\r\n<!--    <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>-->\r\n<!--  </ng-container>-->\r\n\r\n  <!-- Count column -->\r\n  <ng-container matColumnDef=\"count\">\r\n    <th mat-header-cell *matHeaderCellDef> Количество</th>\r\n    <td mat-cell *matCellDef=\"let row\"> {{row.count}} </td>\r\n  </ng-container>\r\n\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"\r\n      style=\"cursor: pointer;\" [ngClass]=\"{'selected-row': row === selectedRow}\"></tr>\r\n\r\n</table>\r\n\r\n\r\n<div class=\"\" *ngIf=\"!selectedRow\">\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-label>Товар</mat-label>\r\n    <mat-select [(ngModel)]=\"product\" placeholder=\"Товар\" name=\"Товар\">\r\n      <mat-option *ngFor=\"let g of goods\" [value]=\"g\">\r\n        {{g.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput placeholder=\"Количество\" name=\"count\" [(ngModel)]=\"count\">\r\n  </mat-form-field>\r\n\r\n  <div class=\"d-flex-row justify-content-end\">\r\n    <button mat-button (click)=\"add()\">+</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"\" *ngIf=\"selectedRow\">\r\n  <mat-form-field class=\"full-width\">\r\n    <mat-label>Товар</mat-label>\r\n    <mat-select [(ngModel)]=\"product\" placeholder=\"Товар\" name=\"Товар\">\r\n      <mat-option *ngFor=\"let g of goods\" [value]=\"g\">\r\n        {{g.name}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field class=\"full-width\">\r\n    <input matInput placeholder=\"Количество\" name=\"count\" [(ngModel)]=\"count\">\r\n  </mat-form-field>\r\n\r\n  <div class=\"d-flex-row justify-content-end\">\r\n    <button mat-button (click)=\"del()\">Удалить</button>\r\n    <button mat-button (click)=\"change()\">Изменить</button>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/dicts.service */ "./src/app/shared/services/dicts.service.ts");



var GoodsTableComponent = /** @class */ (function () {
    function GoodsTableComponent(ds) {
        this.ds = ds;
        this.dataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.product = null;
        this.name = null;
        this.count = null;
        this.selectedRow = null;
        this.displayedColumns = ['product', 'count'];
    }
    GoodsTableComponent.prototype.ngOnInit = function () {
        this.goods = this.ds.getDictVals('goods');
    };
    GoodsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.source && !this.source) {
            this.source = [];
        }
    };
    GoodsTableComponent.prototype.add = function () {
        if (this.product && this.count) {
            this.source.push({
                product: this.product,
                count: this.count
            });
            this.product = null;
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
            this.selectedRow.product = this.product;
            this.selectedRow.count = this.count;
            this.source = this.source.slice();
            this.name = null;
            this.count = null;
            this.selectedRow = null;
            this.dataChanged.next(this.source);
        }
    };
    GoodsTableComponent.prototype.del = function () {
        var _this = this;
        var foundInd = this.source.findIndex(function (s) { return s === _this.selectedRow; });
        this.source.splice(foundInd, 1);
        this.selectedRow = null;
        this.name = null;
        this.count = null;
        this.source = this.source.slice();
        this.dataChanged.next(this.source);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_2__["DictsService"]])
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

module.exports = "<div class=\"full-height d-flex-column justify-content-between\" *ngIf=\"link\">\r\n  <mat-card class=\"list d-flex-column\">\r\n    <mat-card-title>Пути ({{link.id}})</mat-card-title>\r\n    <mat-card-content class=\"card-cont\">\r\n      <mat-card class=\"row\" (click)=\"select(p)\" *ngFor=\"let p of link.info.paths; let ind = index\">\r\n        <mat-card-header class=\"d-flex-row justify-content-between\">\r\n          <mat-card-title>Путь {{ind + 1}}</mat-card-title>\r\n          <button mat-button (click)=\"delet(ind)\"><i class=\"material-icons\">delete</i></button>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <mat-list>\r\n            <mat-list-item><b style=\"padding-right: 7px;\">Тип перевозок:</b>{{p.type}}</mat-list-item>\r\n            <mat-list-item *ngIf=\"p.path\"><b style=\"padding-right: 7px;\">Расстояние (км): </b>{{p.path}}\r\n            </mat-list-item>\r\n          </mat-list>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <div class=\"adding\" *ngIf=\"selectedRow\">\r\n    <mat-form-field class=\"full-width\">\r\n      <mat-label>Тип</mat-label>\r\n      <mat-select [(ngModel)]=\"type\" placeholder=\"Тип\" name=\"Тип\">\r\n        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n          {{type}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Расстояние (км)\" name=\"Расстояние (км)\" [(ngModel)]=\"path\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"d-flex-row justify-content-end\">\r\n      <button mat-button (click)=\"change()\">Изменить</button>\r\n    </div>\r\n  </div>\r\n  <div class=\"adding\" *ngIf=\"!selectedRow\">\r\n    <mat-form-field class=\"full-width\">\r\n      <mat-label>Тип</mat-label>\r\n      <mat-select [(ngModel)]=\"type\" placeholder=\"Тип\" name=\"Тип\">\r\n        <mat-option *ngFor=\"let type of types\" [value]=\"type\">\r\n          {{type}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width\">\r\n      <input matInput placeholder=\"Расстояние (км)\" name=\"Расстояние (км)\" [(ngModel)]=\"path\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"d-flex-row justify-content-end\">\r\n      <button mat-button (click)=\"add()\">Добавить</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/redactor/components/link-info/link-info.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/redactor/components/link-info/link-info.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adding {\n  flex: 0 0 auto;\n  padding: 10px; }\n\n.list {\n  flex: 1 1 auto; }\n\n.card-cont /deep/ {\n  flex: 1 1 auto;\n  overflow: auto;\n  height: 100px; }\n\n.row {\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkYWN0b3IvY29tcG9uZW50cy9saW5rLWluZm8vQzpcXFdQXFxyZWRhY3Rvci9zcmNcXGFwcFxccmVkYWN0b3JcXGNvbXBvbmVudHNcXGxpbmstaW5mb1xcbGluay1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL2NvbXBvbmVudHMvbGluay1pbmZvL2xpbmstaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRpbmcge1xyXG4gIGZsZXg6IDAgMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5saXN0IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLmNhcmQtY29udCAvZGVlcC8ge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5yb3cge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

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
        this.types = ['Ж/Д', 'Авиаперевозки', 'Судоперевозки'];
        this.form = this.fb.group({
            type: null,
            path: null
        });
    }
    LinkInfoComponent.prototype.ngOnChanges = function (changes) {
        if (this.sub) {
            this.sub.unsubscribe();
            this.sub = null;
        }
    };
    LinkInfoComponent.prototype.add = function () {
        if (this.type) {
            this.link.info.paths.push({ type: this.type, path: this.path });
            this.selectedRow = null;
            this.type = null;
            this.path = null;
        }
    };
    LinkInfoComponent.prototype.change = function () {
        if (this.type) {
            this.selectedRow.type = this.type;
            this.selectedRow.path = this.path;
            this.selectedRow = null;
            this.path = null;
            this.type = null;
        }
    };
    LinkInfoComponent.prototype.delet = function (i) {
        this.link.info.paths.splice(i, 1);
        this.selectedRow = null;
        this.type = null;
        this.path = null;
    };
    LinkInfoComponent.prototype.select = function (row) {
        if (this.selectedRow === row) {
            this.selectedRow = null;
            this.path = null;
            this.type = null;
        }
        else {
            this.selectedRow = row;
            this.path = this.selectedRow.path;
            this.type = this.selectedRow.type;
        }
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

/***/ "./src/app/redactor/components/loaders/loaders.component.html":
/*!********************************************************************!*\
  !*** ./src/app/redactor/components/loaders/loaders.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"mr-2\">\n  <input matInput placeholder=\"Кол-во для авиаперевозок\" name=\"avia\" type=\"number\"\n         [(ngModel)]=\"info.loaders.avia\">\n</mat-form-field>\n<mat-form-field  class=\"mr-2\">\n  <input matInput placeholder=\"Кол-во для жд перевозок\" name=\"zd\" type=\"number\"\n         [(ngModel)]=\"info.loaders.zd\">\n</mat-form-field>\n<mat-form-field class=\"mr-2\">\n  <input matInput placeholder=\"Кол-во автоперевозок\" name=\"avto\" type=\"number\"\n         [(ngModel)]=\"info.loaders.avto\">\n</mat-form-field>\n<mat-form-field class=\"mr-2\">\n  <input matInput placeholder=\"Кол-во для судоперевозок\" name=\"sudo\" type=\"number\"\n         [(ngModel)]=\"info.loaders.sudo\">\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/redactor/components/loaders/loaders.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/redactor/components/loaders/loaders.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL2NvbXBvbmVudHMvbG9hZGVycy9sb2FkZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/redactor/components/loaders/loaders.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/redactor/components/loaders/loaders.component.ts ***!
  \******************************************************************/
/*! exports provided: LoadersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadersComponent", function() { return LoadersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadersComponent = /** @class */ (function () {
    function LoadersComponent() {
    }
    LoadersComponent.prototype.ngOnChanges = function (changes) {
        if (!this.info.loaders) {
            this.info.loaders = {
                avia: null,
                zd: null,
                avto: null,
                sudo: null
            };
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoadersComponent.prototype, "info", void 0);
    LoadersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loaders',
            template: __webpack_require__(/*! ./loaders.component.html */ "./src/app/redactor/components/loaders/loaders.component.html"),
            styles: [__webpack_require__(/*! ./loaders.component.scss */ "./src/app/redactor/components/loaders/loaders.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadersComponent);
    return LoadersComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/parameters-dialog/parameters-dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/redactor/components/parameters-dialog/parameters-dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Конфигурация модели</h1>\n<div mat-dialog-content>\n  <div class=\"\" [formGroup]=\"group\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Единица модельного времени</mat-label>\n      <mat-select formControlName=\"modelTimeUnit\" [placeholder]=\"'Единица'\">\n        <mat-option *ngFor=\"let u of ps.timeUnits\" [value]=\"u\">\n          {{u.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <input matInput [placeholder]=\"'Длительность симуляции (' + group.value.modelTimeUnit.short + ')'\" type=\"number\"\n             formControlName=\"simulationDuration\">\n    </mat-form-field>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"cancel()\">Отменить</button>\n  <button mat-button (click)=\"save()\" cdkFocusInitial>Сохранить</button>\n</div>\n"

/***/ }),

/***/ "./src/app/redactor/components/parameters-dialog/parameters-dialog.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/redactor/components/parameters-dialog/parameters-dialog.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL2NvbXBvbmVudHMvcGFyYW1ldGVycy1kaWFsb2cvcGFyYW1ldGVycy1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/redactor/components/parameters-dialog/parameters-dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/redactor/components/parameters-dialog/parameters-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ParametersDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParametersDialogComponent", function() { return ParametersDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_parameters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/parameters.service */ "./src/app/shared/services/parameters.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ParametersDialogComponent = /** @class */ (function () {
    function ParametersDialogComponent(ps, fb, dialogRef) {
        this.ps = ps;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.group = this.fb.group({ modelTimeUnit: null, simulationDuration: null });
    }
    ParametersDialogComponent.prototype.ngOnInit = function () {
        this.group.reset(this.ps.parameters);
    };
    ParametersDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    ParametersDialogComponent.prototype.save = function () {
        this.ps.parameters = this.group.value;
        if (!this.ps.parameters.simulationDuration) {
            this.ps.parameters.simulationDuration = 1;
        }
        this.dialogRef.close(this.ps.parameters);
    };
    ParametersDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parameters-dialog',
            template: __webpack_require__(/*! ./parameters-dialog.component.html */ "./src/app/redactor/components/parameters-dialog/parameters-dialog.component.html"),
            styles: [__webpack_require__(/*! ./parameters-dialog.component.scss */ "./src/app/redactor/components/parameters-dialog/parameters-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_parameters_service__WEBPACK_IMPORTED_MODULE_2__["ParametersService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], ParametersDialogComponent);
    return ParametersDialogComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/redactor/redactor.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/redactor/components/redactor/redactor.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height d-flex-row all\">\r\n  <div class=\"left-toolbar full-height d-flex-column\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Блоки\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <button mat-stroked-button class=\"toolbar-wide-button postavshik\" (click)=\"addBlock(2)\">\r\n          + Поставщик\r\n        </button>\r\n        <button mat-stroked-button class=\"toolbar-wide-button vokzal\" (click)=\"addBlock(1)\">\r\n          + Вокзал\r\n        </button>\r\n        <button mat-stroked-button class=\"toolbar-wide-button aeroport\" (click)=\"addBlock(3)\">\r\n          + Аэропорт\r\n        </button>\r\n        <button mat-stroked-button class=\"toolbar-wide-button port\" (click)=\"addBlock(4)\">\r\n          + Порт\r\n        </button>\r\n        <button mat-stroked-button class=\"toolbar-wide-button proizvoditel\" (click)=\"addBlock(5)\">\r\n          + Производитель\r\n        </button>\r\n        <button mat-stroked-button class=\"toolbar-wide-button distributer\" (click)=\"addBlock(7)\">\r\n          + Дистрибьютор\r\n        </button>\r\n        <button mat-stroked-button class=\"toolbar-wide-button potrebitel\" (click)=\"addBlock(6)\">\r\n          + Потребитель\r\n        </button>\r\n      </mat-card-content>\r\n      <mat-card-footer class=\"d-flex-row justify-content-end\">\r\n        <button mat-button (click)=\"downloadScheme()\">JSON</button>\r\n        <button mat-button (click)=\"settings()\"><i class=\"material-icons\">settings</i></button>\r\n        <button mat-button (click)=\"save()\"><i class=\"material-icons\">save</i></button>\r\n      </mat-card-footer>\r\n    </mat-card>\r\n  </div>\r\n  <div class=\"paper-container full-height d-flex-row\">\r\n    <div class=\"paper-view\" #paperView></div>\r\n  </div>\r\n  <div class=\"right-toolbar full-height\">\r\n    <app-block-info *ngIf=\"selectedBlock\" [block]=\"selectedBlock\" (blockChanged)=\"blockChange($event)\"></app-block-info>\r\n    <app-link-info *ngIf=\"selectedLink\" [link]=\"selectedLink\"></app-link-info>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/redactor/components/redactor/redactor.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/redactor/components/redactor/redactor.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex: 1 1 auto;\n  min-height: 0; }\n\n.left-toolbar {\n  flex: 0 0 300px; }\n\n.right-toolbar {\n  flex: 0 0 450px; }\n\n.paper-container {\n  flex: 1 1 auto;\n  justify-content: center;\n  align-content: center;\n  overflow: auto; }\n\n.paper-view /deep/ {\n  min-width: 1024px;\n  min-height: 800px;\n  flex: 0 0 auto; }\n\n.toolbar-wide-button {\n  width: 100%;\n  margin-bottom: 4px; }\n\n.vokzal {\n  background-color: rgba(0, 0, 0, 0.35); }\n\n.postavshik {\n  background-color: rgba(255, 0, 0, 0.35); }\n\n.aeroport {\n  background-color: rgba(0, 0, 255, 0.35); }\n\n.port {\n  background-color: rgba(0, 255, 255, 0.35); }\n\n.proizvoditel {\n  background-color: rgba(255, 0, 255, 0.35); }\n\n.potrebitel {\n  background-color: rgba(255, 255, 0, 0.35); }\n\n.distributer {\n  background-color: rgba(255, 255, 255, 0.35); }\n\n.goods-one {\n  width: 115px;\n  height: 58px;\n  font-size: 11px;\n  position: absolute; }\n\n.goods-one .tab {\n    padding: 0 2px;\n    overflow-y: auto;\n    height: 41px; }\n\n.goods-one .row {\n    border-top: 1px dotted black; }\n\n.goods-one .name-in {\n    width: 115px;\n    height: 17px;\n    padding: 2px;\n    font-size: 12px;\n    text-align: center;\n    font-weight: 600; }\n\n.goods-rop {\n  width: 130px;\n  height: 58px;\n  font-size: 11px;\n  position: absolute; }\n\n.goods-rop .tab {\n    padding: 0 2px;\n    overflow-y: auto;\n    height: 41px; }\n\n.goods-rop .row {\n    border-top: 1px dotted black; }\n\n.goods-rop .name-in {\n    width: 130px;\n    height: 17px;\n    padding: 2px;\n    font-size: 12px;\n    text-align: center;\n    font-weight: 600; }\n\n.name {\n  width: 115px;\n  height: 17px;\n  padding: 2px;\n  font-size: 12px;\n  position: absolute;\n  text-align: center;\n  font-weight: 600; }\n\n.goods-two {\n  width: 230px;\n  height: 41px;\n  font-size: 11px;\n  position: absolute;\n  display: inline-flex;\n  flex-wrap: wrap; }\n\n.goods-two .name-in {\n    width: 230px;\n    height: 17px;\n    padding: 2px;\n    font-size: 12px;\n    text-align: center;\n    font-weight: 600; }\n\n.goods-two .left {\n    width: 50%;\n    padding: 0 2px;\n    height: 100%;\n    overflow-y: auto; }\n\n.goods-two .right {\n    width: 50%;\n    padding: 0 2px;\n    height: 100%;\n    overflow-y: auto; }\n\n.goods-two .row {\n    border-top: 1px dotted black; }\n\n.all {\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkYWN0b3IvY29tcG9uZW50cy9yZWRhY3Rvci9DOlxcV1BcXHJlZGFjdG9yL3NyY1xcYXBwXFxyZWRhY3RvclxcY29tcG9uZW50c1xccmVkYWN0b3JcXHJlZGFjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxxQ0FBcUMsRUFBQTs7QUFHdkM7RUFDRSx1Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx1Q0FBdUMsRUFBQTs7QUFHekM7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSx5Q0FBeUMsRUFBQTs7QUFHM0M7RUFDRSwyQ0FBMkMsRUFBQTs7QUFHN0M7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFKcEI7SUFNSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVksRUFBQTs7QUFSaEI7SUFXSSw0QkFBNEIsRUFBQTs7QUFYaEM7SUFjSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBOztBQUlwQjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUpwQjtJQU1JLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBOztBQVJoQjtJQVdJLDRCQUE0QixFQUFBOztBQVhoQztJQWNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBRWYsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixlQUFlLEVBQUE7O0FBUGpCO0lBU0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTs7QUFkcEI7SUFpQkksVUFBVTtJQUNWLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7O0FBcEJwQjtJQXVCSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixnQkFBZ0IsRUFBQTs7QUExQnBCO0lBNkJJLDRCQUE0QixFQUFBOztBQUloQztFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVkYWN0b3IvY29tcG9uZW50cy9yZWRhY3Rvci9yZWRhY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBtaW4taGVpZ2h0OiAwO1xyXG59XHJcblxyXG4ubGVmdC10b29sYmFyIHtcclxuICBmbGV4OiAwIDAgMzAwcHg7XHJcbn1cclxuXHJcbi5yaWdodC10b29sYmFyIHtcclxuICBmbGV4OiAwIDAgNDUwcHg7XHJcbn1cclxuXHJcbi5wYXBlci1jb250YWluZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLnBhcGVyLXZpZXcgL2RlZXAvIHtcclxuICBtaW4td2lkdGg6IDEwMjRweDtcclxuICBtaW4taGVpZ2h0OiA4MDBweDtcclxuICBmbGV4OiAwIDAgYXV0bztcclxufVxyXG5cclxuLnRvb2xiYXItd2lkZS1idXR0b24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuLnZva3phbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxufVxyXG5cclxuLnBvc3RhdnNoaWsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjM1KTtcclxufVxyXG5cclxuLmFlcm9wb3J0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC4zNSk7XHJcbn1cclxuXHJcbi5wb3J0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjM1KTtcclxufVxyXG5cclxuLnByb2l6dm9kaXRlbCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDI1NSwgMC4zNSk7XHJcbn1cclxuXHJcbi5wb3RyZWJpdGVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjM1KTtcclxufVxyXG5cclxuLmRpc3RyaWJ1dGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xyXG59XHJcblxyXG4uZ29vZHMtb25lIHtcclxuICB3aWR0aDogMTE1cHg7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLnRhYiB7XHJcbiAgICBwYWRkaW5nOiAwIDJweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgfVxyXG4gIC5yb3cge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCBibGFjaztcclxuICB9XHJcbiAgLm5hbWUtaW4ge1xyXG4gICAgd2lkdGg6IDExNXB4O1xyXG4gICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbi5nb29kcy1yb3Age1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDU4cHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAudGFiIHtcclxuICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGhlaWdodDogNDFweDtcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gIH1cclxuICAubmFtZS1pbiB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLm5hbWUge1xyXG4gIHdpZHRoOiAxMTVweDtcclxuICBoZWlnaHQ6IDE3cHg7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5nb29kcy10d28ge1xyXG4gIHdpZHRoOiAyMzBweDtcclxuICBoZWlnaHQ6IDQxcHg7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIC8vei1pbmRleDogLTE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAubmFtZS1pbiB7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcGFkZGluZzogMCAycHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIH1cclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbiAgLnJvdyB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkIGJsYWNrO1xyXG4gIH1cclxufVxyXG5cclxuLmFsbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var _parameters_dialog_parameters_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parameters-dialog/parameters-dialog.component */ "./src/app/redactor/components/parameters-dialog/parameters-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var LinkView = jointjs__WEBPACK_IMPORTED_MODULE_2__["dia"].LinkView;



var RedactorComponent = /** @class */ (function () {
    function RedactorComponent(bs, renderer, dialog) {
        this.bs = bs;
        this.renderer = renderer;
        this.dialog = dialog;
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
                    text: 'Вокзал',
                    fill: 'black',
                    transform: 'matrix(1, 0, 0, 1, 0, -5)'
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
                    text: 'Поставщик',
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
                    text: 'Аэропорт',
                    fill: 'black',
                    transform: 'matrix(1, 0, 0, 1, 0, -5)'
                }
            });
        }
        if (block.classId === 4) {
            block.cell.attr({
                body: {
                    fill: 'rgba(0,255,255,0.35)'
                },
                label: {
                    text: 'Порт',
                    fill: 'black',
                    transform: 'matrix(1, 0, 0, 1, 0, -5)'
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
                    text: 'Производитель',
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
                    text: 'Потребитель',
                    fill: 'black',
                    transform: 'matrix(1, 0, 0, 1, 0, -25)'
                }
            });
        }
        if (block.classId === 7) {
            block.cell.resize(130, 88);
            block.cell.attr({
                body: {
                    fill: 'rgba(255,255,255,0.35)'
                },
                label: {
                    text: 'Дистрибьютор',
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
    RedactorComponent.prototype.ngOnDestroy = function () {
        this.bs.save(this.blocks, this.links);
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
                if ((b.classId === 1 || b.classId === 3 || b.classId === 4) && b.info) {
                    _this.addName(b);
                    return;
                }
                if (b.info && b.classId === 7) {
                    _this.addGoodsOutTableRop(b);
                    return;
                }
                if (b.info && b.classId === 5) {
                    _this.addGoodAllTable(b);
                    return;
                }
                if (b.info && b.classId === 2) {
                    _this.addGoodsOutTable(b);
                }
                if (b.info && b.classId === 6) {
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
        if (!link.info || !link.info.paths) {
            link.info = { paths: [{ type: 'Ж/Д' }] };
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
        var _this = this;
        this.selectedLink = null;
        this.selectedBlock = null;
        this.graph.clear();
        this.blocks.forEach(function (b) {
            if (b.html) {
                _this.renderer.removeChild(_this.paperView.nativeElement, b.html);
            }
        });
        this.bs.save(this.blocks, this.links);
        this.blocks = this.bs.blocks;
        this.links = this.bs.links;
        this.processAllBlocks();
        this.processAllLinks();
    };
    RedactorComponent.prototype.settings = function () {
        var dialogRef = this.dialog.open(_parameters_dialog_parameters_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ParametersDialogComponent"], {
            width: '300px'
        });
    };
    RedactorComponent.prototype.blockChange = function (e) {
        if (e.html) {
            this.renderer.removeChild(this.paperView.nativeElement, e.html);
            e.html = null;
        }
        if (e.classId === 1 || e.classId === 3 || e.classId === 4) {
            this.addName(e);
        }
        if (e.classId === 2) {
            this.addGoodsOutTable(e);
        }
        if (e.classId === 7) {
            this.addGoodsOutTableRop(e);
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
        if (!b.html) {
            var data = this.renderer.createElement('div');
            this.renderer.addClass(data, 'goods-one');
            this.renderer.setStyle(data, 'left', b.x + "px");
            this.renderer.setStyle(data, 'top', b.y + 30 + "px");
            this.renderer.setAttribute(data, 'id', "back" + b.id);
            if (b.info.name) {
                var name_1 = this.renderer.createElement('div');
                this.renderer.addClass(name_1, 'name-in');
                var text = this.renderer.createText("" + b.info.name);
                this.renderer.appendChild(name_1, text);
                this.renderer.appendChild(data, name_1);
            }
            if (b.info.goodsOut) {
                var tab_1 = this.renderer.createElement('div');
                this.renderer.addClass(tab_1, 'tab');
                b.info.goodsOut.forEach(function (g) {
                    var row = _this.renderer.createElement('div');
                    _this.renderer.appendChild(tab_1, row);
                    _this.renderer.addClass(row, 'row');
                    var text = _this.renderer.createText(g.product.name + " - " + g.pack.name);
                    _this.renderer.appendChild(row, text);
                });
                this.renderer.appendChild(data, tab_1);
            }
            if (b.info.name || b.info.goodsOut) {
                this.renderer.appendChild(this.paperView.nativeElement, data);
                b.html = data;
            }
        }
    };
    RedactorComponent.prototype.addGoodsOutTableRop = function (b) {
        var _this = this;
        if (!b.html) {
            var data = this.renderer.createElement('div');
            this.renderer.addClass(data, 'goods-rop');
            this.renderer.setStyle(data, 'left', b.x + "px");
            this.renderer.setStyle(data, 'top', b.y + 30 + "px");
            this.renderer.setAttribute(data, 'id', "back" + b.id);
            if (b.info.name) {
                var name_2 = this.renderer.createElement('div');
                this.renderer.addClass(name_2, 'name-in');
                var text = this.renderer.createText("" + b.info.name);
                this.renderer.appendChild(name_2, text);
                this.renderer.appendChild(data, name_2);
            }
            if (b.info.goodsOut) {
                var tab_2 = this.renderer.createElement('div');
                this.renderer.addClass(tab_2, 'tab');
                b.info.goodsOut.forEach(function (g) {
                    var row = _this.renderer.createElement('div');
                    _this.renderer.appendChild(tab_2, row);
                    _this.renderer.addClass(row, 'row');
                    var text = _this.renderer.createText(g.product.name + " - " + g.pack.name + " - " + g.rop);
                    _this.renderer.appendChild(row, text);
                });
                this.renderer.appendChild(data, tab_2);
            }
            if (b.info.name || b.info.goodsOut) {
                this.renderer.appendChild(this.paperView.nativeElement, data);
                b.html = data;
            }
        }
    };
    RedactorComponent.prototype.addGoodInTable = function (b) {
        var _this = this;
        if (!b.html) {
            var data = this.renderer.createElement('div');
            this.renderer.addClass(data, 'goods-one');
            this.renderer.setStyle(data, 'left', b.x + "px");
            this.renderer.setStyle(data, 'top', b.y + 30 + "px");
            this.renderer.setAttribute(data, 'id', "back" + b.id);
            if (b.info.name) {
                var name_3 = this.renderer.createElement('div');
                this.renderer.addClass(name_3, 'name-in');
                var text = this.renderer.createText("" + b.info.name);
                this.renderer.appendChild(name_3, text);
                this.renderer.appendChild(data, name_3);
            }
            if (b.info.goodsIn) {
                var tab_3 = this.renderer.createElement('div');
                this.renderer.addClass(tab_3, 'tab');
                b.info.goodsIn.forEach(function (g) {
                    var row = _this.renderer.createElement('div');
                    _this.renderer.appendChild(tab_3, row);
                    _this.renderer.addClass(row, 'row');
                    var text = _this.renderer.createText(g.product.name + " - " + g.count);
                    _this.renderer.appendChild(row, text);
                });
                this.renderer.appendChild(data, tab_3);
            }
            if (b.info.name || b.info.goodsIn) {
                this.renderer.appendChild(this.paperView.nativeElement, data);
                b.html = data;
            }
        }
    };
    RedactorComponent.prototype.addGoodAllTable = function (b) {
        var _this = this;
        if (!b.html) {
            var data = this.renderer.createElement('div');
            this.renderer.addClass(data, 'goods-two');
            this.renderer.setStyle(data, 'left', b.x + "px");
            this.renderer.setStyle(data, 'top', b.y + 30 + "px");
            this.renderer.setAttribute(data, 'id', "back" + b.id);
            if (b.info.name) {
                var name_4 = this.renderer.createElement('div');
                this.renderer.addClass(name_4, 'name-in');
                var text = this.renderer.createText("" + b.info.name);
                this.renderer.appendChild(name_4, text);
                this.renderer.appendChild(data, name_4);
            }
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
                    var text = _this.renderer.createText(g.product.name + " - " + g.count);
                    _this.renderer.appendChild(left_1, text);
                });
            }
            if (b.info.goodsOut) {
                b.info.goodsOut.forEach(function (g) {
                    var row = _this.renderer.createElement('div');
                    _this.renderer.appendChild(right_1, row);
                    _this.renderer.addClass(row, 'row');
                    var text = _this.renderer.createText(g.product.name + " - " + g.count);
                    _this.renderer.appendChild(right_1, text);
                });
            }
            b.html = data;
            this.renderer.appendChild(this.paperView.nativeElement, data);
        }
    };
    RedactorComponent.prototype.addName = function (b) {
        if (!b.html && b.info.name) {
            var data = this.renderer.createElement('div');
            this.renderer.addClass(data, 'name');
            var text = this.renderer.createText("" + b.info.name);
            this.renderer.appendChild(data, text);
            this.renderer.setStyle(data, 'left', b.x + "px");
            this.renderer.setStyle(data, 'top', b.y + 30 + "px");
            this.renderer.appendChild(this.paperView.nativeElement, data);
            b.html = data;
        }
    };
    RedactorComponent.prototype.changePosition = function (b) {
        if (b.html) {
            this.renderer.setStyle(b.html, 'left', b.x + "px");
            this.renderer.setStyle(b.html, 'top', b.y + 30 + "px");
        }
    };
    RedactorComponent.prototype.downloadScheme = function () {
        var _this = this;
        this.selectedLink = null;
        this.selectedBlock = null;
        this.graph.clear();
        this.blocks.forEach(function (b) {
            if (b.html) {
                _this.renderer.removeChild(_this.paperView.nativeElement, b.html);
            }
        });
        this.bs.download();
        this.blocks = this.bs.blocks;
        this.links = this.bs.links;
        this.processAllBlocks();
        this.processAllLinks();
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_blocks_service__WEBPACK_IMPORTED_MODULE_3__["BlocksService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], RedactorComponent);
    return RedactorComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Добавить контейнер</h1>\n<div mat-dialog-content>\n  <div class=\"\" [formGroup]=\"group\">\n    <mat-form-field class=\"full-width\">\n      <mat-select [formControlName]=\"'container'\" [compareWith]=\"contComp\"\n                  [placeholder]=\"'Контейнер'\">\n        <mat-option *ngFor=\"let o of ds.getDictVals('containers')\" [value]=\"o\">\n          {{o.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <input matInput [placeholder]=\"'Количество'\" type=\"number\" formControlName=\"count\">\n    </mat-form-field>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"cancel()\">Отменить</button>\n  <button mat-button (click)=\"save()\" cdkFocusInitial>Сохранить</button>\n</div>\n"

/***/ }),

/***/ "./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZGFjdG9yL2NvbXBvbmVudHMvc2VuZGVyLWNvbnRhaW5lci1kaWFsb2cvc2VuZGVyLWNvbnRhaW5lci1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: SenderContainerDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenderContainerDialogComponent", function() { return SenderContainerDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/dicts.service */ "./src/app/shared/services/dicts.service.ts");





var SenderContainerDialogComponent = /** @class */ (function () {
    function SenderContainerDialogComponent(fb, dialog, ds, dialogRef) {
        this.fb = fb;
        this.dialog = dialog;
        this.ds = ds;
        this.dialogRef = dialogRef;
        this.group = this.fb.group({ container: null, count: null });
    }
    SenderContainerDialogComponent.prototype.ngOnInit = function () {
    };
    SenderContainerDialogComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    SenderContainerDialogComponent.prototype.save = function () {
        this.dialogRef.close(this.group.value);
    };
    SenderContainerDialogComponent.prototype.contComp = function (c1, c2) {
        if (c1 && c2) {
            return c1.name === c2.name;
        }
        else {
            return false;
        }
    };
    SenderContainerDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sender-container-dialog',
            template: __webpack_require__(/*! ./sender-container-dialog.component.html */ "./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.html"),
            styles: [__webpack_require__(/*! ./sender-container-dialog.component.scss */ "./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_4__["DictsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], SenderContainerDialogComponent);
    return SenderContainerDialogComponent;
}());



/***/ }),

/***/ "./src/app/redactor/components/sender-goods-table/sender-goods-table.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/redactor/components/sender-goods-table/sender-goods-table.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table mat-table [dataSource]=\"source\" class=\"mat-elevation-z1 full-width table-container\">\n\n  <!-- Name column -->\n  <ng-container matColumnDef=\"product\">\n    <th mat-header-cell *matHeaderCellDef>Товар</th>\n    <td mat-cell *matCellDef=\"let row\"> {{row.product.name}} </td>\n  </ng-container>\n\n  <!-- Count column -->\n  <ng-container matColumnDef=\"pack\">\n    <th mat-header-cell *matHeaderCellDef>Упаковка</th>\n    <td mat-cell *matCellDef=\"let row\"> {{row.pack.name}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" (click)=\"selectRow(row)\"\n      style=\"cursor: pointer;\" [ngClass]=\"{'selected-row': row === selectedRow}\"></tr>\n\n</table>\n\n<mat-card *ngIf=\"!selectedRow\" class=\"small-card\" [formGroup]=\"form\">\n    <mat-card-content>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Товар</mat-label>\n        <mat-select formControlName=\"product\" placeholder=\"Товар\" [compareWith]=\"compareSelect\">\n          <mat-option *ngFor=\"let g of goods\" [value]=\"g\">\n            {{g.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <mat-label>Упаковка</mat-label>\n        <mat-select formControlName=\"pack\" placeholder=\"Упаковка\" [compareWith]=\"compareSelect\">\n          <mat-option *ngFor=\"let p of getPacks()\" [value]=\"p\">\n            {{p.name}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </mat-card-content>\n  <mat-card-footer class=\"d-flex-row justify-content-end\">\n    <button mat-button (click)=\"addRow()\">+</button>\n  </mat-card-footer>\n</mat-card>\n\n<mat-card *ngIf=\"selectedRow\" class=\"small-card\" [formGroup]=\"form\">\n  <mat-card-content>\n    <mat-form-field class=\"full-width\">\n      <mat-label>Товар</mat-label>\n      <mat-select formControlName=\"product\" placeholder=\"Товар\" [compareWith]=\"compareSelect\">\n        <mat-option *ngFor=\"let g of goods\" [value]=\"g\">\n          {{g.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <mat-label>Упаковка</mat-label>\n      <mat-select formControlName=\"pack\" placeholder=\"Упаковка\" [compareWith]=\"compareSelect\">\n        <mat-option *ngFor=\"let p of getPacks()\" [value]=\"p\">\n          {{p.name}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </mat-card-content>\n  <mat-card-footer class=\"d-flex-row justify-content-end\">\n    <button mat-button (click)=\"deleteRow()\">Удалить</button>\n    <button mat-button (click)=\"changeRow()\">Изменить</button>\n  </mat-card-footer>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/redactor/components/sender-goods-table/sender-goods-table.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/redactor/components/sender-goods-table/sender-goods-table.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-row {\n  background-color: rgba(0, 255, 252, 0.33); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkYWN0b3IvY29tcG9uZW50cy9zZW5kZXItZ29vZHMtdGFibGUvQzpcXFdQXFxyZWRhY3Rvci9zcmNcXGFwcFxccmVkYWN0b3JcXGNvbXBvbmVudHNcXHNlbmRlci1nb29kcy10YWJsZVxcc2VuZGVyLWdvb2RzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUNBQXlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWRhY3Rvci9jb21wb25lbnRzL3NlbmRlci1nb29kcy10YWJsZS9zZW5kZXItZ29vZHMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0ZWQtcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjUyLCAwLjMzKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/redactor/components/sender-goods-table/sender-goods-table.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/redactor/components/sender-goods-table/sender-goods-table.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SenderGoodsTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SenderGoodsTableComponent", function() { return SenderGoodsTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/dicts.service */ "./src/app/shared/services/dicts.service.ts");




var SenderGoodsTableComponent = /** @class */ (function () {
    function SenderGoodsTableComponent(fb, ds) {
        this.fb = fb;
        this.ds = ds;
        this.dataChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.count = null;
        this.selectedRow = null;
        this.displayedColumns = ['product', 'pack'];
        this.compareSelect = function (a, b) {
            if (a && b) {
                return a.name === b.name;
            }
            else {
                return false;
            }
        };
    }
    SenderGoodsTableComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            product: null,
            pack: null
        });
        this.goods = this.ds.getDictVals('goods');
    };
    SenderGoodsTableComponent.prototype.ngOnChanges = function (changes) {
        if (changes.source && !this.source) {
            this.source = [];
            if (this.form) {
                this.form.reset({});
            }
        }
    };
    SenderGoodsTableComponent.prototype.selectRow = function (e) {
        if (this.selectedRow === e) {
            this.selectedRow = null;
            this.form.reset({});
        }
        else {
            this.selectedRow = e;
            this.form.reset(this.selectedRow);
        }
    };
    SenderGoodsTableComponent.prototype.getPacks = function () {
        var vals = this.form.get('product').value;
        if (vals && vals.packs) {
            return vals.packs;
        }
        else {
            return [];
        }
    };
    SenderGoodsTableComponent.prototype.addRow = function () {
        if (this.form.value && this.form.value.product && this.form.value.pack) {
            this.source.push(this.form.value);
            this.form.reset({});
            this.source = this.source.slice();
            this.dataChanged.next(this.source);
        }
    };
    SenderGoodsTableComponent.prototype.changeRow = function () {
        if (this.form.value && this.form.value.product && this.form.value.pack) {
            Object.assign(this.selectedRow, this.form.value);
            this.form.reset({});
            this.selectedRow = null;
            this.source = this.source.slice();
            this.dataChanged.next(this.source);
        }
    };
    SenderGoodsTableComponent.prototype.deleteRow = function () {
        var _this = this;
        var foundInd = this.source.findIndex(function (s) { return s === _this.selectedRow; });
        this.source.splice(foundInd, 1);
        this.form.reset({});
        this.selectedRow = null;
        this.source = this.source.slice();
        this.dataChanged.next(this.source);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SenderGoodsTableComponent.prototype, "source", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SenderGoodsTableComponent.prototype, "dataChanged", void 0);
    SenderGoodsTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sender-goods-table',
            template: __webpack_require__(/*! ./sender-goods-table.component.html */ "./src/app/redactor/components/sender-goods-table/sender-goods-table.component.html"),
            styles: [__webpack_require__(/*! ./sender-goods-table.component.scss */ "./src/app/redactor/components/sender-goods-table/sender-goods-table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_dicts_service__WEBPACK_IMPORTED_MODULE_3__["DictsService"]])
    ], SenderGoodsTableComponent);
    return SenderGoodsTableComponent;
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
/* harmony import */ var _components_parameters_dialog_parameters_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/parameters-dialog/parameters-dialog.component */ "./src/app/redactor/components/parameters-dialog/parameters-dialog.component.ts");
/* harmony import */ var _components_container_dialog_container_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/container-dialog/container-dialog.component */ "./src/app/redactor/components/container-dialog/container-dialog.component.ts");
/* harmony import */ var _components_loaders_loaders_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/loaders/loaders.component */ "./src/app/redactor/components/loaders/loaders.component.ts");
/* harmony import */ var _components_sender_goods_table_sender_goods_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sender-goods-table/sender-goods-table.component */ "./src/app/redactor/components/sender-goods-table/sender-goods-table.component.ts");
/* harmony import */ var _components_sender_container_dialog_sender_container_dialog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sender-container-dialog/sender-container-dialog.component */ "./src/app/redactor/components/sender-container-dialog/sender-container-dialog.component.ts");
/* harmony import */ var _components_dist_goods_table_dist_goods_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/dist-goods-table/dist-goods-table.component */ "./src/app/redactor/components/dist-goods-table/dist-goods-table.component.ts");















var RedactorModule = /** @class */ (function () {
    function RedactorModule() {
    }
    RedactorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_redactor_redactor_component__WEBPACK_IMPORTED_MODULE_3__["RedactorComponent"],
                _components_block_info_block_info_component__WEBPACK_IMPORTED_MODULE_6__["BlockInfoComponent"],
                _components_goods_table_goods_table_component__WEBPACK_IMPORTED_MODULE_7__["GoodsTableComponent"],
                _components_link_info_link_info_component__WEBPACK_IMPORTED_MODULE_8__["LinkInfoComponent"],
                _components_parameters_dialog_parameters_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ParametersDialogComponent"],
                _components_container_dialog_container_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ContainerDialogComponent"],
                _components_loaders_loaders_component__WEBPACK_IMPORTED_MODULE_11__["LoadersComponent"],
                _components_sender_goods_table_sender_goods_table_component__WEBPACK_IMPORTED_MODULE_12__["SenderGoodsTableComponent"],
                _components_sender_container_dialog_sender_container_dialog_component__WEBPACK_IMPORTED_MODULE_13__["SenderContainerDialogComponent"],
                _components_dist_goods_table_dist_goods_table_component__WEBPACK_IMPORTED_MODULE_14__["DistGoodsTableComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _redactor_routing_module__WEBPACK_IMPORTED_MODULE_4__["RedactorRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            entryComponents: [
                _components_parameters_dialog_parameters_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ParametersDialogComponent"],
                _components_container_dialog_container_dialog_component__WEBPACK_IMPORTED_MODULE_10__["ContainerDialogComponent"],
                _components_sender_container_dialog_sender_container_dialog_component__WEBPACK_IMPORTED_MODULE_13__["SenderContainerDialogComponent"]
            ]
        })
    ], RedactorModule);
    return RedactorModule;
}());



/***/ })

}]);
//# sourceMappingURL=redactor-redactor-module.js.map