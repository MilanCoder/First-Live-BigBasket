(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-adminModule-admin-module"],{

/***/ "./src/app/globalmodel/listitem/category.ts":
/*!**************************************************!*\
  !*** ./src/app/globalmodel/listitem/category.ts ***!
  \**************************************************/
/*! exports provided: category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony import */ var _categorylist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categorylist */ "./src/app/globalmodel/listitem/categorylist.ts");

var category = /** @class */ (function () {
    function category(categoryId, categoryName, subcategoryId, subcategoryName, productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.subcategory = [];
        this.subcategory.push(new _categorylist__WEBPACK_IMPORTED_MODULE_0__["Subcategorylist"](subcategoryId, subcategoryName, productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray));
    }
    return category;
}());



/***/ }),

/***/ "./src/app/globalmodel/listitem/categorylist.ts":
/*!******************************************************!*\
  !*** ./src/app/globalmodel/listitem/categorylist.ts ***!
  \******************************************************/
/*! exports provided: Subcategorylist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subcategorylist", function() { return Subcategorylist; });
/* harmony import */ var _productList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productList */ "./src/app/globalmodel/listitem/productList.ts");

var Subcategorylist = /** @class */ (function () {
    function Subcategorylist(subcategoryId, subcategoryName, productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray) {
        this.subcategoryId = subcategoryId;
        this.subcategoryName = subcategoryName;
        this.products = [];
        this.products.push(new _productList__WEBPACK_IMPORTED_MODULE_0__["Productlist"](productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray));
    }
    return Subcategorylist;
}());



/***/ }),

/***/ "./src/app/globalmodel/listitem/productList.ts":
/*!*****************************************************!*\
  !*** ./src/app/globalmodel/listitem/productList.ts ***!
  \*****************************************************/
/*! exports provided: Productlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Productlist", function() { return Productlist; });
/* harmony import */ var _subProduct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subProduct */ "./src/app/globalmodel/listitem/subProduct.ts");

var Productlist = /** @class */ (function () {
    function Productlist(productId, productName, subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray) {
        this.productId = productId;
        this.productName = productName;
        this.subProducts = [];
        this.subProducts.push(new _subProduct__WEBPACK_IMPORTED_MODULE_0__["SubProduct"](subproductId, subproductName, description, benfitsAndUses, amount, suffix, price, discount, imageurlarray));
    }
    return Productlist;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\n    margin:1rem;\n    background-color:#fdd835; \n}\n\n.heading{\n    text-align: center;\n    background-color:#3F51B5;\n    color:white;\n    padding:1rem;\n\n\n\n}\n\n::ng-deep .mat-dialog-container{\npadding:0px !important;\n}\n\n#form{\n    margin-top:1rem;\ndisplay: flex;\njustify-content: center;    \n\n}\n\n#addDialogBox{\n   \n    text-align: center;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0FkZC9hZGQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTs7OztDQUloQjs7QUFDRDtBQUNBLHVCQUF1QjtDQUN0Qjs7QUFDRDtJQUNJLGdCQUFnQjtBQUNwQixjQUFjO0FBQ2Qsd0JBQXdCOztDQUV2Qjs7QUFFRDs7SUFFSSxtQkFBbUI7O0NBRXRCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0FkZC9hZGQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzdG9CdXR0b257XG4gICAgbWFyZ2luOjFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmRkODM1OyBcbn1cblxuLmhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzNGNTFCNTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjFyZW07XG5cblxuXG59XG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xucGFkZGluZzowcHggIWltcG9ydGFudDtcbn1cbiNmb3Jte1xuICAgIG1hcmdpbi10b3A6MXJlbTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXG5cbn1cblxuI2FkZERpYWxvZ0JveHtcbiAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDialogBox\">\r\n   \r\n<div class=\"heading\"><h1 >ADD NEW DATA</h1></div>\r\n<form id=\"form\" [formGroup]=\"demo\" (ngSubmit)=\"Add(demo.value)\">\r\n   <div>\r\n    <mat-form-field formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\r\n        <mat-label>{{key}}</mat-label>\r\n        <input matInput placeholder=\"\" [formControlName]=\"i\" >\r\n    \r\n      \r\n      </mat-form-field></div>\r\n      <div>\r\n      <button mat-raised-button  class=\"csstoButton\" [disabled]=\"!demo.valid\">Submit</button>\r\n      <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\r\n    </div>\r\n</form>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts ***!
  \*************************************************************************/
/*! exports provided: AddDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDialogComponent", function() { return AddDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var src_app_globalServices_Validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/globalServices/Validation */ "./src/app/globalServices/Validation.ts");






var AddDialogComponent = /** @class */ (function () {
    //private addarray:FormArray;
    function AddDialogComponent(object, dialogRef, dialogService, error_message) {
        this.object = object;
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.error_message = error_message;
        this.sessionkey = null;
        this.keyArray = [];
        this.resultArray = [];
        this.error_messages = this.error_message.geterror();
    }
    AddDialogComponent.prototype.checkTypeOfCategory = function (checkobject) {
        var checkkey = Object.keys(checkobject)[0];
        switch (checkkey) {
            case 'categoryId':
                this.sessionkey = 'category';
                break;
            case 'subcategoryId':
                this.sessionkey = "subcategory";
                break;
            case 'productId':
                this.sessionkey = 'products';
                // code block
                break;
            case 'subproductId':
                this.sessionkey = 'subProducts';
                break;
            default: this.sessionkey = null;
            // code block
        }
    };
    AddDialogComponent.prototype.ngOnInit = function () {
        this.demo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addarray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (var key in this.object) {
            if (this.objCheck(this.object[key])) {
                this.keyArray.push(key);
                this.demo.get('addarray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
            }
            else {
                this.resultArray.push(this.object[key]);
            }
        }
    };
    AddDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close(null);
    };
    AddDialogComponent.prototype.Add = function (form) {
        var _a;
        this.checkTypeOfCategory(this.object);
        if (this.sessionkey != null) {
            var obj = (_a = {},
                _a[this.sessionkey] = form,
                _a);
            this.dialogService.updateDataSource(obj);
        }
        this.dialogRef.close(this.resultArray);
        // sessionStorage.setItem('')
        //add form data to session storage to form object
    };
    AddDialogComponent.prototype.objCheck = function (value) {
        if (typeof (value) == "object") {
            return false;
        }
        else {
            return true;
        }
    };
    AddDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-dialog',
            template: __webpack_require__(/*! ./add-dialog.component.html */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-dialog.component.css */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_4__["DialogDataService"], src_app_globalServices_Validation__WEBPACK_IMPORTED_MODULE_5__["getErrorMessage"]])
    ], AddDialogComponent);
    return AddDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\n    margin:1rem;\n    background-color:#fdd835; \n}\n\n.heading{\n    text-align: center;\n    background-color:#3F51B5;\n    color:white;\n    padding:1rem;\n\n\n\n}\n\n::ng-deep .mat-dialog-container{\npadding:0px !important;\n}\n\n#form{\n    margin-top:1rem;\ndisplay: flex;\njustify-content: center;    \n\n}\n\n#addDialogBox{\n   \n    text-align: center;\n\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0RlbGV0ZS9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osYUFBYTs7OztDQUloQjs7QUFDRDtBQUNBLHVCQUF1QjtDQUN0Qjs7QUFDRDtJQUNJLGdCQUFnQjtBQUNwQixjQUFjO0FBQ2Qsd0JBQXdCOztDQUV2Qjs7QUFFRDs7SUFFSSxtQkFBbUI7O0NBRXRCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0RlbGV0ZS9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3NzdG9CdXR0b257XG4gICAgbWFyZ2luOjFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmRkODM1OyBcbn1cblxuLmhlYWRpbmd7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IzNGNTFCNTtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBwYWRkaW5nOjFyZW07XG5cblxuXG59XG46Om5nLWRlZXAgLm1hdC1kaWFsb2ctY29udGFpbmVye1xucGFkZGluZzowcHggIWltcG9ydGFudDtcbn1cbiNmb3Jte1xuICAgIG1hcmdpbi10b3A6MXJlbTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICAgXG5cbn1cblxuI2FkZERpYWxvZ0JveHtcbiAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDialogBox\">\r\n<div class=\"heading\"><h1 >DELETE THE DATA</h1></div>\r\n<div id=\"form\">\r\n<h2>Are you sure you want to delete this Entry</h2>\r\n</div>\r\n<div>\r\n        <button mat-raised-button  class=\"csstoButton\" (click)=\"Delete()\">Delete</button>\r\n        <button mat-raised-button  type=\"button\" class=\"csstoButton\" (click)=\"Cancel()\">Cancel</button>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DeleteDialogComponent = /** @class */ (function () {
    function DeleteDialogComponent(object, dialogRef) {
        this.object = object;
        this.dialogRef = dialogRef;
    }
    DeleteDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close(null);
    };
    DeleteDialogComponent.prototype.Delete = function () {
        this.dialogRef.close(true); //change later
        //manipulate the object here and fill it into result
    };
    DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'delete-dialog',
            template: __webpack_require__(/*! ./delete-dialog.component.html */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.html"),
            styles: [__webpack_require__(/*! ./delete-dialog.component.css */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DeleteDialogComponent);
    return DeleteDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".csstoButton{\n    margin:1rem;\n    background-color:#fdd835; \n}\n\n.heading{\n    text-align: center;\n    background-color:#3F51B5;\n    color:white;\n    padding:1rem;\n\n\n\n}\n\n::ng-deep .mat-dialog-container{\npadding:0px !important;\n}\n\n#form{\n    margin-top:1rem;\ndisplay: flex;\njustify-content: center;    \n\n}\n\n#addDialogBox{\n   \n    text-align: center;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9EaWFsb2dzL0VkaXQvZWRpdC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWix5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhOzs7O0NBSWhCOztBQUNEO0FBQ0EsdUJBQXVCO0NBQ3RCOztBQUNEO0lBQ0ksZ0JBQWdCO0FBQ3BCLGNBQWM7QUFDZCx3QkFBd0I7O0NBRXZCOztBQUVEOztJQUVJLG1CQUFtQjs7Q0FFdEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2FkbWluTW9kdWxlL0RpYWxvZ3MvRWRpdC9lZGl0LWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNzc3RvQnV0dG9ue1xuICAgIG1hcmdpbjoxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkZDgzNTsgXG59XG5cbi5oZWFkaW5ne1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzRjUxQjU7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgcGFkZGluZzoxcmVtO1xuXG5cblxufVxuOjpuZy1kZWVwIC5tYXQtZGlhbG9nLWNvbnRhaW5lcntcbnBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG59XG4jZm9ybXtcbiAgICBtYXJnaW4tdG9wOjFyZW07XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgIFxuXG59XG5cbiNhZGREaWFsb2dCb3h7XG4gICBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"addDialogBox\">\r\n   \r\n        <div class=\"heading\"><h1 >EDIT THE DATA</h1></div>\r\n<form id=\"form\" [formGroup]=\"demo\" (ngSubmit)=\"Edit(demo.value)\">\r\n   <div>\r\n    <mat-form-field formArrayName=\"addarray\" *ngFor=\"let key of keyArray; let i=index\">\r\n        <mat-label>{{key}}</mat-label>\r\n        <input matInput placeholder=\"\" [formControlName]=\"i\" [value]='inputArray[i]' >\r\n\r\n      </mat-form-field>\r\n      </div>\r\n      <div>\r\n      <button mat-raised-button class=\"csstoButton\" [disabled]='demo.invalid'>Submit</button>\r\n      <button mat-raised-button  class=\"csstoButton\" type=\"button\" (click)=\"Cancel()\">Cancel</button>\r\n    </div>\r\n    </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts ***!
  \***************************************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(object, dialogRef) {
        this.object = object;
        this.dialogRef = dialogRef;
        this.keyArray = [];
        this.resultArray = [];
    }
    EditDialogComponent.prototype.ngOnInit = function () {
        this.inputArray = Object.values(this.object);
        this.demo = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            addarray: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([])
        });
        for (var key in this.object) {
            if (this.objCheck(this.object[key])) { //creation of formarray and reactive form,validations
                this.keyArray.push(key); //based on object recieved
                this.demo.get('addarray').push(new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required));
            }
            else {
                this.resultArray.push(this.object[key]);
            }
        }
    };
    EditDialogComponent.prototype.Cancel = function () {
        this.dialogRef.close();
    };
    EditDialogComponent.prototype.Edit = function (newObject) {
        console.log(newObject); //create a better object and send it as result
        var i = 0;
        for (var key in this.object) {
            if (i < newObject.addarray.length) {
                this.object[key] = newObject.addarray[i]; //form values are transferred to object
            }
            i++;
        }
        this.dialogRef.close(this.object);
        //store in permanent obj as well
    };
    EditDialogComponent.prototype.objCheck = function (value) {
        if (typeof (value) == "object") {
            return false;
        }
        else {
            return true;
        }
    };
    EditDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'edit-dialog',
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.css */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/admin-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/adminModule/admin-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./productUpload/productUpload.component */ "./src/app/modules/adminModule/productUpload/productUpload.component.ts");
/* harmony import */ var _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoryCrud/categoryCrud */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/adminModule/login/login.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin.component */ "./src/app/modules/adminModule/admin.component.ts");








var routes = [
    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["adminloginComponent"] },
            { path: 'categorycrud', component: _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_5__["categoryCrud"] },
            { path: 'productUpload', component: _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_4__["productUploadComponent"] },
        ] },
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());

var routingComponents = [_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"], _categoryCrud_categoryCrud__WEBPACK_IMPORTED_MODULE_5__["categoryCrud"], _productUpload_productUpload_component__WEBPACK_IMPORTED_MODULE_4__["productUploadComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_6__["adminloginComponent"]];


/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvYWRtaW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modules/adminModule/admin.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/adminModule/admin.component.ts ***!
  \********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/modules/adminModule/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/modules/adminModule/admin.component.css")]
        })
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/admin.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/adminModule/admin.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.component */ "./src/app/modules/adminModule/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/modules/adminModule/admin-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dialogs/Add/add-dialog.component */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts");
/* harmony import */ var _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Dialogs/Delete/delete-dialog.component */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts");
/* harmony import */ var _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Dialogs/Edit/edit-dialog.component */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table/table.component */ "./src/app/modules/adminModule/table/table.component.ts");
/* harmony import */ var _productUpload_services_imageCrud__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productUpload/services/imageCrud */ "./src/app/modules/adminModule/productUpload/services/imageCrud.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _importMats_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../importMats.module */ "./src/app/importMats.module.ts");
/* harmony import */ var _globalServices_jsonretreiver__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../globalServices/jsonretreiver */ "./src/app/globalServices/jsonretreiver.ts");
/* harmony import */ var _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../globalServices/categorylistjson */ "./src/app/globalServices/categorylistjson.ts");
/* harmony import */ var _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sharedModule/sharedModule */ "./src/app/modules/sharedModule/sharedModule.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/header.component */ "./src/app/modules/adminModule/header/header.component.ts");
/* harmony import */ var _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./moduleServices/AuthInterceptor */ "./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_service_dologin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/service/dologin */ "./src/app/modules/adminModule/login/service/dologin.ts");
/* harmony import */ var _subproducts_data_subproducts_data_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./subproducts-data/subproducts-data.component */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts");
/* harmony import */ var _subproducts_data_services_uploadform__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./subproducts-data/services/uploadform */ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts");
/* harmony import */ var _table_services_pushobject__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./table/services/pushobject */ "./src/app/modules/adminModule/table/services/pushobject.ts");
/* harmony import */ var _productUpload_services_excelUpload__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./productUpload/services/excelUpload */ "./src/app/modules/adminModule/productUpload/services/excelUpload.ts");






























var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponents"],
                _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddDialogComponent"],
                _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"],
                _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditDialogComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_19__["adminheaderComponent"],
                _subproducts_data_subproducts_data_component__WEBPACK_IMPORTED_MODULE_23__["SubproductsDataComponent"]
            ],
            exports: [],
            providers: [_globalServices_jsonretreiver__WEBPACK_IMPORTED_MODULE_12__["Jsonretriever"], _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_13__["CategoryJsonretriever"], _productUpload_services_imageCrud__WEBPACK_IMPORTED_MODULE_9__["ImageCrud"], _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_15__["DataService"],
                _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_16__["DialogDataService"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_18__["Data"], _login_service_dologin__WEBPACK_IMPORTED_MODULE_22__["Dologin"], _subproducts_data_services_uploadform__WEBPACK_IMPORTED_MODULE_24__["UploadService"], _table_services_pushobject__WEBPACK_IMPORTED_MODULE_25__["PushChanges"], _productUpload_services_excelUpload__WEBPACK_IMPORTED_MODULE_26__["excelUpload"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HTTP_INTERCEPTORS"],
                    useClass: _moduleServices_AuthInterceptor__WEBPACK_IMPORTED_MODULE_20__["AuthInterceptor"],
                    multi: true
                }],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _sharedModule_sharedModule__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _importMats_module__WEBPACK_IMPORTED_MODULE_11__["MyOwnCustomMaterialModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]
            ],
            entryComponents: [_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddDialogComponent"],
                _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DeleteDialogComponent"],
                _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditDialogComponent"],
                _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_17__["SuccessComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide{\n    display: none;\n}\n\n.show{\n    display: show;\n}\n\n.data_section{\n    text-align: center !important;\n   \n\n\n\n}\n\n#category_container{\n    width: 60%;\n    \nmargin:0rem 1rem;\n}\n\n.flexcontainer{\n    padding:1rem;\n display: flex;\n}\n\n#categorylist{\n    margin:1rem;\n   width:100%;\n    position: relative;\n   \n    \n\n}\n\n.table_content{\nwidth:40%;\n}\n\n.parentNode{\n    position: absolute;\n    left:0%;\n    top:0%;\n    width:20%;\n}\n\n.final_data{\nfont-size:1rem;\nmargin:0.2rem 0px 0rem 2.5rem;\n}\n\n::ng-deep .material-icons{\nfont-size: 1rem !important;\n    \n}\n\n::ng-deep #categorylist .mat-form-field-appearance-legacy .mat-form-field-underline{\ndisplay:none;}\n\n::ng-deep #categorylist .mat-form-field-appearance-legacy .mat-form-field-wrapper{\n    padding-bottom:0px !important;\n}\n\n.dataEntry{\n   \n    width:100%;\n}\n\n.firstNodeItem{\n\nposition: absolute;\n\nwidth:100%;\nleft:165px;\ntop:0%;\n\n}\n\n.secondNodeItem{\n   \n    position: absolute;\n   \n    width:100%;\n    left:200px;\n    top:0%;\n    margin-left:1rem;\n    }\n\n.thirdNodeItem{\n   \n        position: absolute;\n        width:100%;\n        left:205px;\n        top:0%;\n        margin-left:1rem;\n        \n        }\n\n.csssetting:hover{\n        background-color:lightskyblue;\n    }\n\n.csssetting{\n    \n    border-bottom:1px solid darkgrey;\n    border-radius:3%;\n    color:grey;\n    font-weight: 300;\n    \n  \n}\n\n.node_container{\n    height:200px;\n   width:200px;\n    overflow: scroll;\n}\n\n#heading{\n    color:white;\n    background-color: #3F51B5;\n        text-align: center;\n    \n}\n\n   \n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9jYXRlZ29yeUNydWQvY2F0ZWdvcnlDcnVkLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUdEO0lBQ0ksOEJBQThCOzs7OztDQUtqQzs7QUFFRDtJQUNJLFdBQVc7O0FBRWYsaUJBQWlCO0NBQ2hCOztBQUNEO0lBQ0ksYUFBYTtDQUNoQixjQUFjO0NBQ2Q7O0FBRUQ7SUFDSSxZQUFZO0dBQ2IsV0FBVztJQUNWLG1CQUFtQjs7OztDQUl0Qjs7QUFFRDtBQUNBLFVBQVU7Q0FDVDs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsT0FBTztJQUNQLFVBQVU7Q0FDYjs7QUFHRDtBQUNBLGVBQWU7QUFDZiw4QkFBOEI7Q0FDN0I7O0FBRUQ7QUFDQSwyQkFBMkI7O0NBRTFCOztBQUdEO0FBQ0EsYUFBYSxDQUFDOztBQUdkO0lBQ0ksOEJBQThCO0NBQ2pDOztBQUNEOztJQUVJLFdBQVc7Q0FDZDs7QUFHRDs7QUFFQSxtQkFBbUI7O0FBRW5CLFdBQVc7QUFDWCxXQUFXO0FBQ1gsT0FBTzs7Q0FFTjs7QUFHRDs7SUFFSSxtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsT0FBTztJQUNQLGlCQUFpQjtLQUNoQjs7QUFFRDs7UUFFSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLFdBQVc7UUFDWCxPQUFPO1FBQ1AsaUJBQWlCOztTQUVoQjs7QUFHTDtRQUNJLDhCQUE4QjtLQUNqQzs7QUFDTDs7SUFFSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxpQkFBaUI7OztDQUdwQjs7QUFDRDtJQUNJLGFBQWE7R0FDZCxZQUFZO0lBQ1gsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksWUFBWTtJQUNaLDBCQUEwQjtRQUN0QixtQkFBbUI7O0NBRTFCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9jYXRlZ29yeUNydWQvY2F0ZWdvcnlDcnVkLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5zaG93e1xuICAgIGRpc3BsYXk6IHNob3c7XG59XG5cblxuLmRhdGFfc2VjdGlvbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgIFxuXG5cblxufVxuXG4jY2F0ZWdvcnlfY29udGFpbmVye1xuICAgIHdpZHRoOiA2MCU7XG4gICAgXG5tYXJnaW46MHJlbSAxcmVtO1xufVxuLmZsZXhjb250YWluZXJ7XG4gICAgcGFkZGluZzoxcmVtO1xuIGRpc3BsYXk6IGZsZXg7XG59XG5cbiNjYXRlZ29yeWxpc3R7XG4gICAgbWFyZ2luOjFyZW07XG4gICB3aWR0aDoxMDAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgIFxuICAgIFxuXG59XG5cbi50YWJsZV9jb250ZW50e1xud2lkdGg6NDAlO1xufVxuXG4ucGFyZW50Tm9kZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDowJTtcbiAgICB0b3A6MCU7XG4gICAgd2lkdGg6MjAlO1xufVxuXG5cbi5maW5hbF9kYXRhe1xuZm9udC1zaXplOjFyZW07XG5tYXJnaW46MC4ycmVtIDBweCAwcmVtIDIuNXJlbTtcbn1cblxuOjpuZy1kZWVwIC5tYXRlcmlhbC1pY29uc3tcbmZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICAgIFxufVxuXG5cbjo6bmctZGVlcCAjY2F0ZWdvcnlsaXN0IC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5le1xuZGlzcGxheTpub25lO31cblxuXG46Om5nLWRlZXAgI2NhdGVnb3J5bGlzdCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXJ7XG4gICAgcGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7XG59XG4uZGF0YUVudHJ5e1xuICAgXG4gICAgd2lkdGg6MTAwJTtcbn1cblxuXG4uZmlyc3ROb2RlSXRlbXtcblxucG9zaXRpb246IGFic29sdXRlO1xuXG53aWR0aDoxMDAlO1xubGVmdDoxNjVweDtcbnRvcDowJTtcblxufVxuXG5cbi5zZWNvbmROb2RlSXRlbXtcbiAgIFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgIFxuICAgIHdpZHRoOjEwMCU7XG4gICAgbGVmdDoyMDBweDtcbiAgICB0b3A6MCU7XG4gICAgbWFyZ2luLWxlZnQ6MXJlbTtcbiAgICB9XG5cbiAgICAudGhpcmROb2RlSXRlbXtcbiAgIFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGxlZnQ6MjA1cHg7XG4gICAgICAgIHRvcDowJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MXJlbTtcbiAgICAgICAgXG4gICAgICAgIH1cblxuXG4gICAgLmNzc3NldHRpbmc6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRza3libHVlO1xuICAgIH1cbi5jc3NzZXR0aW5ne1xuICAgIFxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGRhcmtncmV5O1xuICAgIGJvcmRlci1yYWRpdXM6MyU7XG4gICAgY29sb3I6Z3JleTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIFxuICBcbn1cbi5ub2RlX2NvbnRhaW5lcntcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICB3aWR0aDoyMDBweDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4jaGVhZGluZ3tcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbiAgIFxuICAgICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<adminheader></adminheader>\n\n<div class=\"flexcontainer\">\n    <div id=\"category_container\">\n    <div id=\"heading\">CATEGORY LIST</div>  \n            <div id=\"categorylist\">\n<div class=\"parentNode\">\n                <div  *ngFor=\"let categorylist of category ; let i=index\">\n                        <div class=\"data_section\">\n                              \n                                <button mat-button class=\"csssetting\" (click)=editorAdd(category) blockShow>{{categorylist.categoryName}}</button>\n                         <div class=\"hide firstNodeItem\">\n                                <div class=\"node_container\" >\n                    <div  *ngFor=\"let subcategory of categorylist.subcategory\" >\n                 <div class=\"data_section\">\n                        \n                            <button mat-button class=\"dataEntry csssetting\" (click)=editorAdd(categorylist.subcategory) blockShow>{{subcategory.subcategoryName}}</button> \n                           \n                            <div class=\"hide secondNodeItem\" >\n                                <div class=\"node_container\">\n                  <div *ngFor=\"let products of subcategory.products\">\n                        <div class=\"data_section\">\n                               \n                            <button mat-button (click)=editorAdd(subcategory.products) class=\"dataEntry csssetting\" blockShow>{{products.productName}}</button>\n                            <div class=\"hide thirdNodeItem\" >\n                                    <div class=\"node_container\">\n                      <div *ngFor=\"let subproduct of products.subProducts\">\n                            <div class=\"data_section\">\n                                   \n                                <button mat-button (click)=editorAdd(products.subProducts) class=\"dataEntry csssetting\" toggle>{{subproduct.subproductName}}</button>\n                            </div>\n                          </div>\n                        </div>\n                    </div>\n                        </div>\n                      </div>\n                    </div>\n                </div>\n               \n                </div>\n                </div>\n                </div>\n                </div>\n                </div>\n                </div>\n         \n        </div>\n        </div>\n    </div>\n\n        <div class=\"table_content\">\n        <tablehere></tablehere>\n    </div>\n    </div>\n        \n\n"

/***/ }),

/***/ "./src/app/modules/adminModule/categoryCrud/categoryCrud.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/categoryCrud/categoryCrud.ts ***!
  \******************************************************************/
/*! exports provided: categoryCrud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryCrud", function() { return categoryCrud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../moduleServices/categoryDatabase */ "./src/app/modules/adminModule/moduleServices/categoryDatabase.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../globalmodel/listitem/category */ "./src/app/globalmodel/listitem/category.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var categoryCrud = /** @class */ (function () {
    function categoryCrud(categoryDatabase, fb, dataSource, dialogData, router) {
        this.categoryDatabase = categoryDatabase;
        this.fb = fb;
        this.dataSource = dataSource;
        this.dialogData = dialogData;
        this.router = router;
        this.isDone = false;
        this.checkkey = null;
        console.log(localStorage.getItem('id_token') == null);
        if (localStorage.getItem('id_token') == '-1' || localStorage.getItem('id_token') == null) {
            this.router.navigate(['/admin/login']);
        }
        this.newPushObject = new _globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_4__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
    categoryCrud.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryDatabase.dataChange.subscribe(function (data) {
            _this.category = data;
        });
    };
    categoryCrud.prototype.editorAdd = function (object) {
        this.dataSource.updateDataSource(object);
    };
    categoryCrud = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'categoryCrud',
            template: __webpack_require__(/*! ./categoryCrud.html */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.html"),
            providers: [_moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__["CategoryDatabase"]],
            styles: [__webpack_require__(/*! ./categoryCrud.css */ "./src/app/modules/adminModule/categoryCrud/categoryCrud.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_2__["CategoryDatabase"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_5__["DataService"], _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_6__["DialogDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], categoryCrud);
    return categoryCrud;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/header/header.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/adminModule/header/header.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space{\nflex: 1 0.5 auto;\n}\n\n.small_text{\n    color:white;\n    font-size: 1rem;\nbackground-color:#92a8d1;\n}\n\n.smallspace{\n    position: relative;\n    margin-left:1rem;\n}\n\n#addressDetails{\n    position: absolute;\n    margin-left:1rem;\n    width:13rem;\n    right:1rem;\n   \n}\n\n#titlebar{\n    background-color:#034f84;\n    color:white;\n}\n\na{\n    color:white;\n}\n\n#details{\n   background-color:white;\n\n\n}\n\nmat-select{\n    background-color: inherit;\n}\n\n::ng-deep  #details .mat-select-arrow-wrapper {\n    display: table-cell;\n    vertical-align: middle;\n    padding-left: 100px !important;\n}\n\n.mat-select-placeholder {\n    color: rgba(0,0,0,.42);\n}\n\n.material-icons{\n    font-size:20px !important;\n}\n\n.mat-icon{\n      background-color:#FF007B;\n     padding:2px 5px 2px; \n      border-radius:35px;\n      width:29px;\n      \n  }\n\n::ng-deep #header_container .mat-form-field-infix{\n      font-size: 1rem;\n      width:auto !important;\n  }\n\n.box{\n      width:24px;\n      padding:2px;\n  }\n\n.mat-form-field-appearance-outline .mat-form-field-outline {\n      top:2rem !important;\n  }\n\n#header_container .mat-input-wrapper{\n    width:400px !important;\n  }\n\n.example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n.example-full-width {\n    width: 100%;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxpQkFBaUI7Q0FDaEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCLHlCQUF5QjtDQUN4Qjs7QUFDRDtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXOztDQUVkOztBQUVEO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFHRDtHQUNHLHVCQUF1Qjs7O0NBR3pCOztBQUNEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QiwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBR0Q7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUM7TUFDSSx5QkFBeUI7S0FDMUIsb0JBQW9CO01BQ25CLG1CQUFtQjtNQUNuQixXQUFXOztHQUVkOztBQUlEO01BQ0ksZ0JBQWdCO01BQ2hCLHNCQUFzQjtHQUN6Qjs7QUFDRDtNQUNJLFdBQVc7TUFDWCxZQUFZO0dBQ2Y7O0FBR0g7TUFDTSxvQkFBb0I7R0FDdkI7O0FBRUQ7SUFDRSx1QkFBdUI7R0FDeEI7O0FBRUQ7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7R0FDYjs7QUFFRDtJQUNFLFlBQVksQ0FBQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNle1xuZmxleDogMSAwLjUgYXV0bztcbn1cblxuLnNtYWxsX3RleHR7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuYmFja2dyb3VuZC1jb2xvcjojOTJhOGQxO1xufVxuLnNtYWxsc3BhY2V7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OjFyZW07XG59XG5cbiNhZGRyZXNzRGV0YWlsc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLWxlZnQ6MXJlbTtcbiAgICB3aWR0aDoxM3JlbTtcbiAgICByaWdodDoxcmVtO1xuICAgXG59XG5cbiN0aXRsZWJhcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMzRmODQ7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbmF7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cblxuI2RldGFpbHN7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuXG5cbn1cbm1hdC1zZWxlY3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbn1cblxuOjpuZy1kZWVwICAjZGV0YWlscyAubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjQyKTtcbn1cblxuXG4ubWF0ZXJpYWwtaWNvbnN7XG4gICAgZm9udC1zaXplOjIwcHggIWltcG9ydGFudDtcbn1cblxuICAubWF0LWljb257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRjAwN0I7XG4gICAgIHBhZGRpbmc6MnB4IDVweCAycHg7IFxuICAgICAgYm9yZGVyLXJhZGl1czozNXB4O1xuICAgICAgd2lkdGg6MjlweDtcbiAgICAgIFxuICB9XG5cbiBcblxuICA6Om5nLWRlZXAgI2hlYWRlcl9jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWluZml4e1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgd2lkdGg6YXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5ib3h7XG4gICAgICB3aWR0aDoyNHB4O1xuICAgICAgcGFkZGluZzoycHg7XG4gIH1cblxuICBcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgdG9wOjJyZW0gIWltcG9ydGFudDtcbiAgfVxuXG4gICNoZWFkZXJfY29udGFpbmVyIC5tYXQtaW5wdXQtd3JhcHBlcntcbiAgICB3aWR0aDo0MDBweCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICAuZXhhbXBsZS1mb3JtIHtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO30iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/header/header.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/header/header.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header_container\" >\n  <mat-toolbar class=\"small_text\">\n    <span class=\"space\"></span>\n    <span><mat-icon>phone</mat-icon>1800-678-449</span>\n  \n    \n        \n   \n  </mat-toolbar>  \n  <mat-toolbar id=\"titlebar\" >  \n        <mat-toolbar-row>\n          \n          <span class=\"space\"></span>\n\n          <span class=\"space\"></span>\n        \n          <span *ngIf=\"tokenid!='-1'\">\n            <button mat-raised-button type='button' (click)='signOut()'>Sign Out</button>\n          </span>\n            <span *ngIf=\"tokenid=='-1'\">\n             <a routerLink='/userPlan'>\n              <mat-icon>person</mat-icon>\n            </a> </span>\n        \n        </mat-toolbar-row>\n      \n     \n      </mat-toolbar>\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/header/header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/header/header.component.ts ***!
  \****************************************************************/
/*! exports provided: adminheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminheaderComponent", function() { return adminheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var adminheaderComponent = /** @class */ (function () {
    function adminheaderComponent(route) {
        this.route = route;
        this.tokenid = '-1';
    }
    adminheaderComponent.prototype.signOut = function () {
        localStorage.setItem('id_token', '-1');
        this.tokenid = '-1';
        this.route.navigate(['/admin/login']);
    };
    adminheaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('id_token') != '-1' && localStorage.getItem('id_token') != null) {
            this.tokenid = localStorage.getItem('id_token');
            this.route.navigate(['/admin/categorycrud']);
        }
        this.display = false;
    };
    adminheaderComponent.prototype.displayblock = function () {
        if (this.display == false)
            this.display = true;
        else
            this.display = false;
    };
    adminheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'adminheader',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/adminModule/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/modules/adminModule/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], adminheaderComponent);
    return adminheaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/login/login.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/adminModule/login/login.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n    display:block;\n}\n\n.signin{\n    margin:1rem;\n}\n\n.flexcontainer{\n    display:flex;\n    justify-content: center;\n    margin-top:1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztDQUNqQjs7QUFFRDtJQUNJLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XG4gICAgZGlzcGxheTpibG9jaztcbn1cblxuLnNpZ25pbntcbiAgICBtYXJnaW46MXJlbTtcbn1cblxuLmZsZXhjb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6MXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/login/login.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/login/login.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<adminheader></adminheader>\n<div class=\"flexcontainer\">\n<mat-card id=\"login_container\">\n      <mat-card-header>Sign In</mat-card-header>\n    <mat-card-content>\n    <div>\n\n        <form [formGroup]=\"loginDetails\" (ngSubmit)=\"onLogin(loginDetails.value)\" class=\"signin\">\n                <mat-form-field appearance=\"outline\">\n                        <mat-label>Id</mat-label>\n                  <input matInput placeholder=\"Username\" formControlName=\"id\">\n                  <mat-error *ngFor=\"let validation of error_messages.id\">\n                        <mat-error class=\"error-message\" *ngIf=\"loginDetails.get('id').hasError(validation.type) && \n                        (loginDetails.get('id').dirty || \n                        loginDetails.get('id').touched)\">{{validation.message}}</mat-error>\n                         </mat-error>\n                </mat-form-field>\n           \n            <mat-form-field appearance=\"outline\">\n                     <mat-label>Name</mat-label>\n               <input matInput placeholder=\"Username\" formControlName=\"name\">\n               <mat-error *ngFor=\"let validation of error_messages.name\">\n                     <mat-error class=\"error-message\" *ngIf=\"loginDetails.get('name').hasError(validation.type) && \n                     (loginDetails.get('name').dirty || \n                     loginDetails.get('name').touched)\">{{validation.message}}</mat-error>\n                      </mat-error>\n             </mat-form-field>\n           \n             <mat-form-field appearance =\"outline\">\n                 <mat-label>Password</mat-label>\n               <input matInput placeholder=\"Password\" formControlName=\"password\">\n               <mat-error *ngFor=\"let validation of error_messages.pwd\">\n                     <mat-error class=\"error-message\" *ngIf=\"loginDetails.get('password').hasError(validation.type) && \n                     (loginDetails.get('password').dirty || \n                     loginDetails.get('password').touched)\">{{validation.message}}</mat-error>\n                      </mat-error>\n               \n             </mat-form-field>\n     \n             <button mat-raised-button [disabled]=\"loginDetails.invalid\" color=\"accent\">Sign In</button>\n         </form>\n             \n           </div>\n           </mat-card-content>\n           </mat-card>\n           </div>"

/***/ }),

/***/ "./src/app/modules/adminModule/login/login.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/adminModule/login/login.component.ts ***!
  \**************************************************************/
/*! exports provided: adminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminloginComponent", function() { return adminloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globalServices_Validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../globalServices/Validation */ "./src/app/globalServices/Validation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_dologin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/dologin */ "./src/app/modules/adminModule/login/service/dologin.ts");






var adminloginComponent = /** @class */ (function () {
    function adminloginComponent(geterrormessage, router, dologin) {
        this.geterrormessage = geterrormessage;
        this.router = router;
        this.dologin = dologin;
        this.error_messages = this.geterrormessage.geterror();
    }
    adminloginComponent.prototype.ngOnInit = function () {
        this.loginDetails = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(?=.*[0-9])/)])
        });
    };
    adminloginComponent.prototype.onLogin = function (form) {
        var _this = this;
        this.dologin.login(form).subscribe(function (data) {
            if (data) {
                console.log(data.token);
                localStorage.setItem('id_token', data.token);
                _this.router.navigate(['admin/categorycrud']);
            }
        }, function (err) {
            alert(err);
        });
    };
    adminloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'adminlogin',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/adminModule/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/adminModule/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globalServices_Validation__WEBPACK_IMPORTED_MODULE_3__["getErrorMessage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _service_dologin__WEBPACK_IMPORTED_MODULE_5__["Dologin"]])
    ], adminloginComponent);
    return adminloginComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/login/service/dologin.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/adminModule/login/service/dologin.ts ***!
  \**************************************************************/
/*! exports provided: Dologin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dologin", function() { return Dologin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var Dologin = /** @class */ (function () {
    function Dologin(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].locallogin;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
    }
    Dologin.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = 'Front End Error';
        }
        else {
            // server-side error
            errorMessage = 'BackEnd Error';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    ;
    Dologin.prototype.login = function (details) {
        return this.http.post(this.url, details, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    Dologin = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Dologin);
    return Dologin;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/AuthInterceptor.ts ***!
  \***********************************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var idToken = localStorage.getItem('id_token');
        console.log(idToken);
        if (idToken) {
            var clonereq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + idToken)
            });
            return next.handle(clonereq);
        }
        else {
            return next.handle(req);
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/categoryDatabase.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/categoryDatabase.ts ***!
  \************************************************************************/
/*! exports provided: CategoryDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDatabase", function() { return CategoryDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../globalServices/categorylistjson */ "./src/app/globalServices/categorylistjson.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CategoryDatabase = /** @class */ (function () {
    function CategoryDatabase(categoryjson) {
        var _this = this;
        this.categoryjson = categoryjson;
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.categoryjson.jsonretrieve().subscribe(function (data) {
            _this.dataChange.next(data);
        });
    }
    CategoryDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_globalServices_categorylistjson__WEBPACK_IMPORTED_MODULE_2__["CategoryJsonretriever"]])
    ], CategoryDatabase);
    return CategoryDatabase;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/dataService.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/dataService.ts ***!
  \*******************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DataService = /** @class */ (function () {
    function DataService() {
        this.dataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    DataService.prototype.updateDataSource = function (obj) {
        this.dataSource.next(obj);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/dataStorage.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/dataStorage.ts ***!
  \*******************************************************************/
/*! exports provided: Data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Data", function() { return Data; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Data = /** @class */ (function () {
    function Data() {
    }
    Data = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Data);
    return Data;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/moduleServices/dialogDataService.ts ***!
  \*************************************************************************/
/*! exports provided: DialogDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataService", function() { return DialogDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DialogDataService = /** @class */ (function () {
    function DialogDataService() {
        this.dialogdataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        this.pushdata = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
    }
    DialogDataService.prototype.updateDataSource = function (obj) {
        console.log(obj);
        this.dialogdataSource.next(obj);
    };
    DialogDataService.prototype.updatePushObj = function (obj) {
        this.pushdata.next(obj);
    };
    DialogDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DialogDataService);
    return DialogDataService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/model/imageObject.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/model/imageObject.ts ***!
  \************************************************************************/
/*! exports provided: ImageObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageObj", function() { return ImageObj; });
var ImageObj = /** @class */ (function () {
    function ImageObj() {
    }
    return ImageObj;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\n    display: flex;\n\n}\n#image_container img{\n    width:100%;\n    height:100%;\n}\n#imageSection{\n    width:100%;\n}\n.container{\n    margin:2rem auto;\n    width:80%;\n}\n.activeImageCard{\n    width:99%;\n}\n#upload_container\n{\n    width:95%;\n}\n.imageUploadSection .mat-card{\n    padding:0px !important;\n}\n.imageUploadSection .csssetting .mat-icon{\n    border-radius: 35px;\n\n    background-color:white ;\n}\n.imageUploadSection .csssetting .mat-card .material-icons{\n    font-size: 20px;\n}\n.card_title{\nbackground-color: #3F51B5;\ncolor:white;\n}\n.custom-file-upload {\n  \n    display: inline-block;\n    padding: 6px 12px;\n    text-align: center;\n    background-color:#FF007B;\n    border-radius: 5px;\n    cursor: pointer;\n    color:white;\n  }\ninput[type=\"file\"]{\n    display:none;\n}\n.csssetting{\n    min-width: 170px;\n    max-width: 1700px;\n    flex-basis: auto; /* default value */\nwidth: 170px;\nmargin: 1rem 2% 0px 0px;\nposition: relative;\n\n\n}\n.active{\n    background-color:lightblue;\n}\n#imageList{\n    width:100%;\n}\n#imagelist_container{\n    display:flex;\n    flex-wrap: nowrap;\n    justify-content: flex-start;\n    overflow:scroll;\n}\n#imagelist_container img{\nwidth:100%;\n\n}\n.image{\n    width:100%;\n    margin:0.3rem;\n\n\n}\n.clear{\n    position: absolute;\n    left: 76%;\n    top: 10%;\n    z-index: 2;\n    cursor: pointer;\n}\n.image img{\n   \nwidth:100%;\n\n\n}\n#subproductData{\nmargin:0px auto;\n    width:95%;\n    overflow: scroll;\n    height:350px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9wcm9kdWN0VXBsb2FkL3Byb2R1Y3RVcGxvYWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7O0NBRWpCO0FBQ0Q7SUFDSSxXQUFXO0lBQ1gsWUFBWTtDQUNmO0FBRUQ7SUFDSSxXQUFXO0NBQ2Q7QUFDRDtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0NBQ2I7QUFDRDtJQUNJLFVBQVU7Q0FDYjtBQUNEOztJQUVJLFVBQVU7Q0FDYjtBQUNEO0lBQ0ksdUJBQXVCO0NBQzFCO0FBRUQ7SUFDSSxvQkFBb0I7O0lBRXBCLHdCQUF3QjtDQUMzQjtBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CO0FBRUQ7QUFDQSwwQkFBMEI7QUFDMUIsWUFBWTtDQUNYO0FBQ0Q7O0lBRUksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxhQUFhO0NBQ2hCO0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQixDQUFDLG1CQUFtQjtBQUN6QyxhQUFhO0FBQ2Isd0JBQXdCO0FBQ3hCLG1CQUFtQjs7O0NBR2xCO0FBQ0Q7SUFDSSwyQkFBMkI7Q0FDOUI7QUFFRDtJQUNJLFdBQVc7Q0FDZDtBQUNEO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsZ0JBQWdCO0NBQ25CO0FBRUQ7QUFDQSxXQUFXOztDQUVWO0FBSUQ7SUFDSSxXQUFXO0lBQ1gsY0FBYzs7O0NBR2pCO0FBSUQ7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CO0FBRUQ7O0FBRUEsV0FBVzs7O0NBR1Y7QUFHRDtBQUNBLGdCQUFnQjtJQUNaLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvcHJvZHVjdFVwbG9hZC9wcm9kdWN0VXBsb2FkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59XG4jaW1hZ2VfY29udGFpbmVyIGltZ3tcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDoxMDAlO1xufVxuXG4jaW1hZ2VTZWN0aW9ue1xuICAgIHdpZHRoOjEwMCU7XG59XG4uY29udGFpbmVye1xuICAgIG1hcmdpbjoycmVtIGF1dG87XG4gICAgd2lkdGg6ODAlO1xufVxuLmFjdGl2ZUltYWdlQ2FyZHtcbiAgICB3aWR0aDo5OSU7XG59XG4jdXBsb2FkX2NvbnRhaW5lclxue1xuICAgIHdpZHRoOjk1JTtcbn1cbi5pbWFnZVVwbG9hZFNlY3Rpb24gLm1hdC1jYXJke1xuICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZVVwbG9hZFNlY3Rpb24gLmNzc3NldHRpbmcgLm1hdC1pY29ue1xuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlIDtcbn1cblxuLmltYWdlVXBsb2FkU2VjdGlvbiAuY3Nzc2V0dGluZyAubWF0LWNhcmQgLm1hdGVyaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmNhcmRfdGl0bGV7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xuY29sb3I6d2hpdGU7XG59XG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNGRjAwN0I7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXXtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG5cbi5jc3NzZXR0aW5ne1xuICAgIG1pbi13aWR0aDogMTcwcHg7XG4gICAgbWF4LXdpZHRoOiAxNzAwcHg7XG4gICAgZmxleC1iYXNpczogYXV0bzsgLyogZGVmYXVsdCB2YWx1ZSAqL1xud2lkdGg6IDE3MHB4O1xubWFyZ2luOiAxcmVtIDIlIDBweCAwcHg7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5cblxufVxuLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmxpZ2h0Ymx1ZTtcbn1cblxuI2ltYWdlTGlzdHtcbiAgICB3aWR0aDoxMDAlO1xufVxuI2ltYWdlbGlzdF9jb250YWluZXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBvdmVyZmxvdzpzY3JvbGw7XG59XG5cbiNpbWFnZWxpc3RfY29udGFpbmVyIGltZ3tcbndpZHRoOjEwMCU7XG5cbn1cblxuXG5cbi5pbWFnZXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbjowLjNyZW07XG5cblxufVxuXG5cblxuLmNsZWFye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA3NiU7XG4gICAgdG9wOiAxMCU7XG4gICAgei1pbmRleDogMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZSBpbWd7XG4gICBcbndpZHRoOjEwMCU7XG5cblxufVxuXG5cbiNzdWJwcm9kdWN0RGF0YXtcbm1hcmdpbjowcHggYXV0bztcbiAgICB3aWR0aDo5NSU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICBoZWlnaHQ6MzUwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<adminheader></adminheader>\n\n<mat-tab-group mat-align-tabs=\"center\">\n    <mat-tab label=\"SINGLE UPLOAD\"> \n      <div id='stackTrace'>\n        <span *ngFor='let id of parentTrace;let i =index;'>\n          {{id}}<span *ngIf=\"parentTrace[i+1]\">-></span>\n        </span>\n        </div>\n      \n      <div class=\"flexcontainer\">\n        <div class=\"container\"> \n      <div class=\"imageUploadSection\">\n          <mat-grid-list cols=\"8\" rowHeight=\"2:1\">\n              <mat-grid-tile colspan='4' rowspan='6'>\n             \n                <mat-card *ngIf=\"  activeImageObj!=null && activeImageObj.uri!=null \" class=\"activeImageCard\">\n                    <mat-card-header>\n                        {{subproductFullData.subproductName}}\n                      </mat-card-header>\n                  <div id=\"imageSection\">\n                  <span *ngIf='activeImageObj!=null'>{{activeImageObj.index}}</span>\n                   <div id=\"image_container\">\n                      <img *ngIf='activeImageObj.uri!=null' [src]=\"activeImageObj.uri\" >\n      \n                       </div>\n                </div>\n                </mat-card>\n              </mat-grid-tile>\n              <mat-grid-tile colspan ='4' rowspan='2'>\n                <div id=\"upload_container\">\n                <mat-card class=\"file_upload\">\n                      <mat-card-header class=\"card_title\">\n                      \n                        <mat-card-title >Upload Image</mat-card-title>\n                        \n                      </mat-card-header>\n                      <mat-card-actions>\n                          <label class=\"custom-file-upload\">\n                              Upload Image<input type=\"file\" name=\"uploadImage\" \n                              accept=\".jpg,.jpeg,.png\" (change)=\"imageUpload(uploadImage)\" #uploadImage ></label>\n                      </mat-card-actions>\n                    </mat-card>\n                  </div>\n        \n              </mat-grid-tile> \n              <mat-grid-tile colspan ='4' rowspan='6'>\n      \n                  <app-subproducts-data id=\"subproductData\"></app-subproducts-data>\n                        </mat-grid-tile> \n                    \n      \n      \n              <mat-grid-tile colspan='4' rowspan='1'> \n      <div id=\"imageList\">\n        \n        <div *ngIf=\"imageList!=null\"  id=\"imagelist_container\">\n         <div *ngFor='let imageObj of imageList' class=\"csssetting\">\n           <button mat-button *ngIf='activeImageObj!=null' [ngClass]=\"{'active': activeImageObj.selected==true }\" class='image' (click)=\"selectImage(imageObj)\">\n        \n            <img *ngIf='imageObj.uri!=null' [src]='imageObj.uri' alt=\"Product List\">\n           \n           </button>\n           <span (click)=\"removeThisImage(imageObj.index)\" class=\"clear\"><mat-icon>clear</mat-icon></span> \n      \n         </div>\n        </div>\n        \n      </div>\n      \n              </mat-grid-tile>\n            \n            </mat-grid-list>\n      </div>\n      </div>\n      </div></mat-tab>\n      <mat-tab label=\"ADD BULK LIST\">\n\n          <div>\n                  <label class=\"custom-file-upload dropdown\">\n                  Excel File<input type=\"file\" name=\"productupload\" accept=\".xlsx, .xls, .csv\" (change)=\"OnChange(productupload)\" #productupload >\n                  </label> \n                  </div> \n                  <button mat-raised-button class=\"uploadButton\" type=\"button\" [disabled]=\"!isSelected\" \n                  (click)=\"uploadExcel()\">Upload All</button>\n                           \n  \n      \n  \n  </mat-tab>\n   \n  </mat-tab-group>\n"

/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/productUpload.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/productUpload.component.ts ***!
  \******************************************************************************/
/*! exports provided: productUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productUploadComponent", function() { return productUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/imageDatabase */ "./src/app/modules/adminModule/productUpload/services/imageDatabase.ts");
/* harmony import */ var _model_imageObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/imageObject */ "./src/app/modules/adminModule/productUpload/model/imageObject.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_excelUpload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/excelUpload */ "./src/app/modules/adminModule/productUpload/services/excelUpload.ts");









var productUploadComponent = /** @class */ (function () {
    function productUploadComponent(excelUpload, imageDatabase, snackBar, dataStorage, router) {
        this.excelUpload = excelUpload;
        this.imageDatabase = imageDatabase;
        this.snackBar = snackBar;
        this.dataStorage = dataStorage;
        this.router = router;
        this.isSelected = false;
        this.parentTrace = [];
        this.index = 0;
        this.form = new FormData();
        this.imageList = [];
        this.activeImageObj = new _model_imageObject__WEBPACK_IMPORTED_MODULE_3__["ImageObj"]();
        if (localStorage.getItem('id_token') == '-1' && localStorage.getItem('id_token') == null || typeof (dataStorage.storage) == 'undefined') {
            this.router.navigate(['/admin/login']);
        }
        this.parentTrace = dataStorage.storage.stackTrace;
        this.subproductFullData = dataStorage.storage.otherInfo;
        console.log(this.parentTrace);
        if (dataStorage.storage.initialImage) {
            for (var _i = 0, _a = dataStorage.storage.initialImage; _i < _a.length; _i++) {
                var obj = _a[_i];
                this.index++;
                console.log(this.index);
                obj.index = this.index;
                this.imageList.push(obj);
            }
            this.selectImage(this.imageList[0]);
        }
    }
    productUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formdata = new FormData();
        this.formdata.set('idToken', localStorage.getItem('id_token'));
        this.categoryId = this.parentTrace[0];
        this.subcategoryId = this.parentTrace[1];
        this.productId = this.parentTrace[2];
        this.subproductId = this.parentTrace[3];
        this.activeSrc = "";
        this.form.set('idToken', localStorage.getItem('id_token'));
        this.form.set('categoryId', this.categoryId);
        this.form.set('subcategoryId', this.subcategoryId);
        this.form.set('productId', this.productId);
        this.form.set('subproductId', this.subproductId);
        this.imageDatabase.getimageObj().subscribe(function (data) {
            if (data != null) {
                _this.openSnackBar();
                _this.index++;
                data.index = _this.index;
                _this.imageList.push(data);
            }
        });
    };
    productUploadComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_5__["SuccessComponent"], {
            duration: 1500,
        });
    };
    productUploadComponent.prototype.deleteFromBackend = function (element, index) {
    };
    productUploadComponent.prototype.selectImage = function (imageObj) {
        this.imageList.forEach(function (obj) {
            if (obj != null) {
                obj.selected = false;
            }
        });
        if (imageObj) {
            imageObj.selected = true;
            console.log(imageObj);
            this.activeImageObj.index = imageObj.index;
            this.activeImageObj.uri = imageObj.uri;
        }
    };
    productUploadComponent.prototype.uploadImage = function (form) {
        this.imageDatabase.uploadFile(form);
    };
    productUploadComponent.prototype.removeThisImage = function (index) {
        var i;
        for (i = 0; i < this.imageList.length; i++) {
            var element = this.imageList[i];
            if (element.index == index) {
                this.deleteFromBackend(element, index);
                this.imageList.splice(i, 1);
                if (this.imageList[i + 1] != null) {
                    this.activeImageObj = this.imageList[i + 1];
                }
                else if (this.imageList[i - 1] != null) {
                    this.activeImageObj = this.imageList[i - 1];
                }
                else {
                    this.activeImageObj.uri = null;
                    this.activeImageObj.index = null;
                }
            }
        }
        ;
    };
    productUploadComponent.prototype.imageUpload = function (inputFile) {
        this.form.set('index', (this.index + 1).toString());
        if (inputFile.files.length != 0) {
            this.form.set('myImage', inputFile.files[0]);
            this.uploadImage(this.form);
        }
    };
    productUploadComponent.prototype.OnChange = function (inputParam) {
        if (inputParam.files.length != 0) {
            this.formdata.set(inputParam.getAttribute("name"), inputParam.files[0]);
            console.log(this.formdata.get(inputParam.getAttribute("name")));
            this.isSelected = true;
        }
    };
    productUploadComponent.prototype.uploadExcel = function () {
        var _this = this;
        this.excelUpload.exceluploader(this.formdata).subscribe(function (res) {
            if (res) {
                _this.openSnackBar();
            }
        }, function (err) {
            alert(err);
        });
    };
    productUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'productUpload',
            template: __webpack_require__(/*! ./productUpload.component.html */ "./src/app/modules/adminModule/productUpload/productUpload.component.html"),
            providers: [_services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__["ImageDatabase"]],
            styles: [__webpack_require__(/*! ./productUpload.component.css */ "./src/app/modules/adminModule/productUpload/productUpload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_excelUpload__WEBPACK_IMPORTED_MODULE_8__["excelUpload"], _services_imageDatabase__WEBPACK_IMPORTED_MODULE_2__["ImageDatabase"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_6__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], productUploadComponent);
    return productUploadComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/services/excelUpload.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/services/excelUpload.ts ***!
  \***************************************************************************/
/*! exports provided: excelUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "excelUpload", function() { return excelUpload; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");






var excelUpload = /** @class */ (function () {
    function excelUpload(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_5__["url"].localExceluri;
    }
    excelUpload.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    ;
    excelUpload.prototype.exceluploader = function (form) {
        return this.http.post(this.url, form).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    excelUpload = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], excelUpload);
    return excelUpload;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/services/imageCrud.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/services/imageCrud.ts ***!
  \*************************************************************************/
/*! exports provided: ImageCrud */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCrud", function() { return ImageCrud; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ImageCrud = /** @class */ (function () {
    function ImageCrud(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_4__["url"].localImageuri;
    }
    ImageCrud.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
    };
    ;
    ImageCrud.prototype.uploadFile = function (details) {
        return this.http.post(this.url, details).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    ImageCrud = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImageCrud);
    return ImageCrud;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/productUpload/services/imageDatabase.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/productUpload/services/imageDatabase.ts ***!
  \*****************************************************************************/
/*! exports provided: ImageDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDatabase", function() { return ImageDatabase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _imageCrud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageCrud */ "./src/app/modules/adminModule/productUpload/services/imageCrud.ts");




var ImageDatabase = /** @class */ (function () {
    function ImageDatabase(imageCrud) {
        this.imageCrud = imageCrud;
        this.isDone = false;
        this.imageChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    ImageDatabase.prototype.setimageObj = function () {
    };
    ImageDatabase.prototype.getimageObj = function () {
        return this.imageChange;
    };
    ImageDatabase.prototype.uploadFile = function (form) {
        var _this = this;
        this.imageCrud.uploadFile(form).subscribe(function (data) {
            console.log(data);
            _this.imageChange.next(data);
            _this.isDone = true;
        }, function (err) {
            alert('Failure In Upload');
            _this.isDone = false;
        });
        return this.isDone;
    };
    ImageDatabase = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_imageCrud__WEBPACK_IMPORTED_MODULE_3__["ImageCrud"]])
    ], ImageDatabase);
    return ImageDatabase;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/services/uploadform.ts ***!
  \*****************************************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_2__["url"].localEditProducts;
    }
    UploadService.prototype.handleError = function (error) {
        var err = '';
        if (error.error instanceof ErrorEvent) {
            err = 'FrontEnd Error';
        }
        else {
            err = 'BackendError';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
    };
    ;
    UploadService.prototype.uploadForm = function (details) {
        return this.http.post(this.url, details, _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    ;
    UploadService.prototype.register = function (form) {
        return this.http.post(this.url, form, _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_5__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
    };
    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flexcontainer{\n    display: flex;\n    justify-content: space-between;\n}\n.flexcontainer div{\n    margin:0.1rem;\n}\n.flexcontainer .mat-form-field{\n    width:100%;\n    \n}\n#dataEntry{\n    overflow:scroll;\n}\n#description{\n    margin-right:1rem;\n    width:40%;\n}\n#benefitsAndUses{\n    width:40%;\n    margin-right: 1rem;\n}\n.amount{\n    width:23%;\n}\n.suffix{\n    width:20%;\n\n}\n.price{\n    width:18%;\n}\n.discount{\n     width:18%;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS9zdWJwcm9kdWN0cy1kYXRhL3N1YnByb2R1Y3RzLWRhdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCwrQkFBK0I7Q0FDbEM7QUFDRDtJQUNJLGNBQWM7Q0FDakI7QUFFRDtJQUNJLFdBQVc7O0NBRWQ7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7Q0FDYjtBQUVEO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtDQUN0QjtBQUlEO0lBQ0ksVUFBVTtDQUNiO0FBRUQ7SUFDSSxVQUFVOztDQUViO0FBRUQ7SUFDSSxVQUFVO0NBQ2I7QUFDQTtLQUNJLFVBQVU7RUFDYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW5Nb2R1bGUvc3VicHJvZHVjdHMtZGF0YS9zdWJwcm9kdWN0cy1kYXRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mbGV4Y29udGFpbmVyIGRpdntcbiAgICBtYXJnaW46MC4xcmVtO1xufVxuXG4uZmxleGNvbnRhaW5lciAubWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBcbn1cblxuI2RhdGFFbnRyeXtcbiAgICBvdmVyZmxvdzpzY3JvbGw7XG59XG5cbiNkZXNjcmlwdGlvbntcbiAgICBtYXJnaW4tcmlnaHQ6MXJlbTtcbiAgICB3aWR0aDo0MCU7XG59XG5cbiNiZW5lZml0c0FuZFVzZXN7XG4gICAgd2lkdGg6NDAlO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuXG5cbi5hbW91bnR7XG4gICAgd2lkdGg6MjMlO1xufVxuXG4uc3VmZml4e1xuICAgIHdpZHRoOjIwJTtcblxufVxuXG4ucHJpY2V7XG4gICAgd2lkdGg6MTglO1xufVxuIC5kaXNjb3VudHtcbiAgICAgd2lkdGg6MTglO1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id =\"dataEntry\">\n\n  <form [formGroup]=\"dataForm\" id=\"form\"  (ngSubmit)='onSubmit(dataForm.value)'>\n    <div>\n    <mat-form-field id =\"description\">\n       <mat-label>Description</mat-label>\n        <textarea matInput formControlName='description' ></textarea>\n      </mat-form-field>\n      <mat-form-field id =\"benefitsAndUses\">\n        <mat-label>Benefits And Uses</mat-label>\n          <textarea matInput formControlName='benefitsAndUses' ></textarea>\n        </mat-form-field>\n    </div>\n        <div formArrayName=\"priceAndAmount\" *ngFor =\"let priceObj of dataForm.controls.priceAndAmount.controls; let i = index;\">\n          <div class=\"flexcontainer\" formGroupName ='{{i}}'> \n         <div class=\"amount\">\n            <mat-form-field >\n              <mat-label>Amount</mat-label>\n            <input matInput formControlName='amount' >\n          \n          </mat-form-field>\n          </div>\n          <div class=\"suffix\">\n          <mat-form-field > \n            <mat-label>Suffix</mat-label>\n              <input matInput formControlName='suffix'>\n            \n            </mat-form-field>\n            </div>\n            <div class=\"price\">\n            <mat-form-field>\n              <mat-label>Price</mat-label>\n                <input matInput formControlName='price' >\n              \n              </mat-form-field>\n              </div>\n              <div class=\"discount\">\n              <mat-form-field>\n                <mat-label>Discount</mat-label>\n                  <input matInput formControlName='discount' >\n                \n                </mat-form-field>\n                </div>\n                <div>\n                  <button mat-raised-button type=\"button\" color='accent' (click)='deleteThisIndex(i)'>Delete</button>\n                </div>\n              </div>\n        </div>\n\n        <button mat-raised-button color='accent' type='button' (click)='addOptions()'>Add</button>\n        \n        <button mat-raised-button color='primary' [disabled]='dataForm.invalid'>\nSubmit\n        </button>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/adminModule/subproducts-data/subproducts-data.component.ts ***!
  \************************************************************************************/
/*! exports provided: SubproductsDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubproductsDataComponent", function() { return SubproductsDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _services_uploadform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/uploadform */ "./src/app/modules/adminModule/subproducts-data/services/uploadform.ts");





var SubproductsDataComponent = /** @class */ (function () {
    function SubproductsDataComponent(fb, data, uploadform) {
        this.fb = fb;
        this.data = data;
        this.uploadform = uploadform;
        this.arr = [];
        this.info = data.storage.otherInfo.info;
        console.log(this.info);
        this.initialPriceAndAmount();
    }
    SubproductsDataComponent.prototype.initialPriceAndAmount = function () {
        for (var _i = 0, _a = this.info.priceAndAmount; _i < _a.length; _i++) {
            var obj = _a[_i];
            this.arr.push(this.createPriceAmount(obj));
        }
    };
    SubproductsDataComponent.prototype.deleteThisIndex = function (index) {
        this.arr.splice(index, 1);
        this.createForm();
    };
    SubproductsDataComponent.prototype.addOptions = function () {
        this.arr.push(this.createPriceAmount('-1'));
        console.log(this.arr);
        this.createForm();
    };
    SubproductsDataComponent.prototype.createPriceAmount = function (obj) {
        if (obj != '-1') {
            return this.fb.group({
                amount: [obj.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                suffix: [obj.suffix, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: [obj.price, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: [obj.discount, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
        else {
            return this.fb.group({
                amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                suffix: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                discount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
        }
    };
    SubproductsDataComponent.prototype.createForm = function () {
        this.dataForm = this.fb.group({
            description: [this.info.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            benefitsAndUses: [this.info.benefitsAndUses, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            priceAndAmount: this.fb.array(this.arr)
        });
    };
    SubproductsDataComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    SubproductsDataComponent.prototype.onSubmit = function (form) {
        form['stackTrace'] = this.data.storage.stackTrace;
        console.log(form);
        this.uploadform.uploadForm(form).subscribe(function (data) {
            if (data) {
                alert('success');
            }
        }, function (err) {
            alert(err);
        });
    };
    SubproductsDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subproducts-data',
            template: __webpack_require__(/*! ./subproducts-data.component.html */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.html"),
            styles: [__webpack_require__(/*! ./subproducts-data.component.css */ "./src/app/modules/adminModule/subproducts-data/subproducts-data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_3__["Data"], _services_uploadform__WEBPACK_IMPORTED_MODULE_4__["UploadService"]])
    ], SubproductsDataComponent);
    return SubproductsDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/table/services/pushobject.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/adminModule/table/services/pushobject.ts ***!
  \******************************************************************/
/*! exports provided: PushChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushChanges", function() { return PushChanges; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../globalmodel/url */ "./src/app/globalmodel/url.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../globalmodel/headerDetails */ "./src/app/globalmodel/headerDetails.ts");







var PushChanges = /** @class */ (function () {
    function PushChanges(http) {
        this.http = http;
        this.url = _globalmodel_url__WEBPACK_IMPORTED_MODULE_3__["url"].localCategorylist;
    }
    PushChanges.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = 'FrontEnd Error';
        }
        else {
            // server-side error
            errorMessage = 'BackEnd Error';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    };
    ;
    PushChanges.prototype.pushChanges = function (details) {
        return this.http.post(this.url, { 'categorylist': details }, _globalmodel_headerDetails__WEBPACK_IMPORTED_MODULE_6__["httpOptions"].jsonHeaders).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    PushChanges = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PushChanges);
    return PushChanges;
}());



/***/ }),

/***/ "./src/app/modules/adminModule/table/table.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/adminModule/table/table.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#heading{\n    display: flex;\n    text-align: center;\n    \n}\n\n.headingData{\n    width:20%;\n    margin:0.5rem auto;\n\n}\n\n::ng-deep .mat-toolbar-single-row{\n    height:inherit !important;\n}\n\n.example-container {\n    overflow-x: scroll;\n  }\n\n.example-container {\n    height: 300px;\n    overflow: auto;\n  }\n\n.mat-cell, .mat-footer-cell, .mat-header-cell{\n    justify-content: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjs7Q0FFdEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsbUJBQW1COztDQUV0Qjs7QUFFRDtJQUNJLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLG1CQUFtQjtHQUNwQjs7QUFFRDtJQUNFLGNBQWM7SUFDZCxlQUFlO0dBQ2hCOztBQUdEO0lBQ0Usd0JBQXdCO0dBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hZG1pbk1vZHVsZS90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRpbmd7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG59XG5cbi5oZWFkaW5nRGF0YXtcbiAgICB3aWR0aDoyMCU7XG4gICAgbWFyZ2luOjAuNXJlbSBhdXRvO1xuXG59XG5cbjo6bmctZGVlcCAubWF0LXRvb2xiYXItc2luZ2xlLXJvd3tcbiAgICBoZWlnaHQ6aW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgfVxuXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwsIC5tYXQtaGVhZGVyLWNlbGx7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/modules/adminModule/table/table.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/adminModule/table/table.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"heading\" color=\"primary\">\r\n  <span class='headingData'>DATA TABLE\r\n    </span>\r\n\r\n    <button  mat-raised-button type=\"button\" color='accent' (click)='pushChanges()'>Push Changes</button>\r\n\r\n  \r\n</mat-toolbar>\r\n\r\n\r\n\r\n<div style=\"width: 100\" class=\"example-container mat-elevation-z8\">\r\n\r\n\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort class=\"mat-cell\">\r\n\r\n    <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n\r\n    <!-- ID Column -->\r\n    <ng-container *ngFor=\"let col of columns\" matColumnDef={{col}}>\r\n  \r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>{{col}}</mat-header-cell>\r\n      <mat-cell  *matCellDef=\"let row\" ><button mat-raised-button (click)=\"redirectToImageUpload(row,row['imageUrls'])\" [color]=\"primary\" *ngIf=\"col=='Other Data'\">Manage Data</button> <p *ngIf=\"col!='Other Data'\">{{row[col]}}</p></mat-cell>\r\n    \r\n    </ng-container>\r\n    \r\n    <ng-container matColumnDef=\"actions\">\r\n      <mat-header-cell *matHeaderCellDef>\r\n        <button mat-icon-button color=\"primary\" (click)=\"addNew(dataSource)\">\r\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\r\n        </button>\r\n      </mat-header-cell>\r\n\r\n      <mat-cell *matCellDef=\"let row; let i=index;\">\r\n        <button mat-icon-button color=\"accent\" (click)=\"startEdit(row,i,dataSource)\">\r\n          <mat-icon aria-label=\"Edit\">edit</mat-icon>\r\n        </button>\r\n\r\n        <button mat-icon-button color=\"accent\" (click)=\"deleteItem(row,i,dataSource)\">\r\n          <mat-icon aria-label=\"Delete\">delete</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns;sticky: true\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n  <div class=\"no-results\" [style.display]=\"dataSource.length == 0 ? '' : 'none'\">\r\n    No results\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/modules/adminModule/table/table.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/adminModule/table/table.component.ts ***!
  \**************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Dialogs/Add/add-dialog.component */ "./src/app/modules/adminModule/Dialogs/Add/add-dialog.component.ts");
/* harmony import */ var _Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dialogs/Edit/edit-dialog.component */ "./src/app/modules/adminModule/Dialogs/Edit/edit-dialog.component.ts");
/* harmony import */ var _Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Dialogs/Delete/delete-dialog.component */ "./src/app/modules/adminModule/Dialogs/Delete/delete-dialog.component.ts");
/* harmony import */ var _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../moduleServices/dataService */ "./src/app/modules/adminModule/moduleServices/dataService.ts");
/* harmony import */ var src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/globalmodel/listitem/category */ "./src/app/globalmodel/listitem/category.ts");
/* harmony import */ var _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../moduleServices/dialogDataService */ "./src/app/modules/adminModule/moduleServices/dialogDataService.ts");
/* harmony import */ var _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../moduleServices/categoryDatabase */ "./src/app/modules/adminModule/moduleServices/categoryDatabase.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../moduleServices/dataStorage */ "./src/app/modules/adminModule/moduleServices/dataStorage.ts");
/* harmony import */ var _services_pushobject__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/pushobject */ "./src/app/modules/adminModule/table/services/pushobject.ts");
/* harmony import */ var _sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../sharedModule/successSnackbar */ "./src/app/modules/sharedModule/successSnackbar.ts");














var TableComponent = /** @class */ (function () {
    function TableComponent(pushobject, dataStorage, router, snackBar, dialog, dataObj, dialogData, categoryDatabase) {
        this.pushobject = pushobject;
        this.dataStorage = dataStorage;
        this.router = router;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.dataObj = dataObj;
        this.dialogData = dialogData;
        this.categoryDatabase = categoryDatabase;
        this.columns = [];
        this.stackArray = [];
        this.isNull = false;
        this.isCompleted = false;
        this.displayedColumns = [];
        this.checkArray = [];
        this.noMore = false;
        this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
    }
    TableComponent.prototype.openSnackBar = function () {
        this.snackBar.openFromComponent(_sharedModule_successSnackbar__WEBPACK_IMPORTED_MODULE_13__["SuccessComponent"], {
            duration: 1500,
        });
    };
    TableComponent.prototype.pushChanges = function () {
        var _this = this;
        console.log(this.mainDataSource);
        this.pushobject.pushChanges(this.mainDataSource).subscribe(function (data) {
            _this.openSnackBar();
        }, function (err) {
            alert('Error Ocurred');
        });
    };
    TableComponent.prototype.deletethisObject = function (mainarray, object, index) {
        mainarray.splice(index, 1);
    };
    TableComponent.prototype.editDataObject = function (mainarray, result, index) {
        mainarray.splice(index, 1, result);
    };
    TableComponent.prototype.pushObject = function (array, obj) {
        array.push(obj);
    };
    TableComponent.prototype.trimPushObject = function (pushObj) {
        console.log(this.isNull);
        if (this.isNull == false) {
            console.log('i m in', pushObj);
            for (var key in pushObj) {
                if (pushObj[key] != null) {
                    console.log(typeof (pushObj[key]));
                    if (typeof (pushObj[key]) != 'object') {
                        console.log(pushObj);
                        this.newPushObject = pushObj;
                        this.isNull = true;
                        console.log(this.newPushObject);
                        return;
                    }
                }
                if (pushObj[key] != null && typeof (pushObj[key]) == 'object') {
                    this.trimPushObject(pushObj[key][0]);
                }
            }
        }
        else {
            this.isNull = false;
            return;
        }
    };
    TableComponent.prototype.recursiveFinder = function (mainarray, checkData, functionCall, pushData, index) {
        var _this = this;
        if (!this.isCompleted) {
            mainarray.forEach(function (mainobj) {
                if (Object.keys(mainobj)[0] == Object.keys(checkData[0])[0]) {
                    if (Object.values(mainobj)[0] == Object.values(checkData[0])[0]) {
                        console.log(functionCall);
                        functionCall(mainarray, pushData, index);
                        _this.isCompleted = true;
                    }
                }
                for (var mainkey in mainobj) {
                    if (typeof (mainobj[mainkey]) == 'object' && Array.isArray(mainobj[mainkey])) {
                        _this.recursiveFinder(mainobj[mainkey], checkData, functionCall, pushData, index);
                    }
                }
            });
        }
        else {
            return;
        }
    };
    TableComponent.prototype.setDataSource = function (nodeCheck, functionCall, data, index) {
        this.isCompleted = false;
        this.recursiveFinder(this.mainDataSource, nodeCheck, functionCall, data, index);
        this.categoryDatabase.dataChange.next(this.mainDataSource);
    };
    TableComponent.prototype.iterativeDialogMaker = function (data) {
        var _this = this;
        if (Object.keys(data)) {
            if (Object.keys(data)[0] != 'uri') {
                var dialogRef = this.dialog.open(_Dialogs_Add_add_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddDialogComponent"], {
                    height: '300px',
                    width: '400px',
                    data: data,
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                    if (result != null) {
                        var newData = null;
                        newData = result[0];
                        console.log(newData);
                        if (newData != null && Array.isArray(newData)) {
                            _this.iterativeDialogMaker(newData[0]);
                        }
                    }
                });
            }
        }
    };
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataObj.dataSource.subscribe(function (data) {
            data.forEach(function (element) {
            });
            _this.dataSource = data;
            if (_this.mainDataSource == null || _this.mainDataSource.length == 0) {
                _this.mainDataSource = _this.dataSource.slice();
            }
            _this.makeColoumns();
        });
        this.dialogData.dialogdataSource.subscribe(function (data) {
            switch (Object.keys(data)[0]) {
                case 'category':
                    if (_this.newPushObject != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    }
                    for (var key in data) {
                        _this.newPushObject.categoryId = data[key].addarray[0];
                        _this.newPushObject.categoryName = data[key].addarray[1];
                    }
                    break;
                case 'subcategory':
                    if (_this.newPushObject != null && _this.newPushObject.subcategory != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    }
                    for (var key in data) {
                        _this.newPushObject.subcategory[0].subcategoryId = data[key].addarray[0];
                        _this.newPushObject.subcategory[0].subcategoryName = data[key].addarray[1];
                    }
                    break;
                case 'products':
                    if (_this.newPushObject != null && _this.newPushObject.subcategory != null && _this.newPushObject.subcategory[0].products != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    }
                    for (var key in data) {
                        _this.newPushObject.subcategory[0].products[0].productId = data[key].addarray[0];
                        _this.newPushObject.subcategory[0].products[0].productName = data[key].addarray[1];
                    }
                    // code block
                    break;
                case 'subProducts':
                    if (_this.newPushObject.subcategory != null && _this.newPushObject.subcategory[0].products != null && _this.newPushObject.subcategory[0].products[0].subProducts != null) {
                    }
                    else {
                        _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    }
                    for (var key in data) {
                        _this.newPushObject.subcategory[0].products[0].subProducts[0].subproductId = data[key].addarray[0];
                        _this.newPushObject.subcategory[0].products[0].subProducts[0].subproductName = data[key].addarray[1];
                    }
                    console.log(_this.newPushObject);
                    _this.isNull = false;
                    _this.trimPushObject(_this.newPushObject);
                    _this.setDataSource(_this.parentCheckNode, _this.pushObject, _this.newPushObject, 0);
                    _this.newPushObject = new src_app_globalmodel_listitem_category__WEBPACK_IMPORTED_MODULE_7__["category"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);
                    break;
                default:
                // code block
            }
        });
    };
    TableComponent.prototype.objCheck = function (value) {
        if (typeof (value) == "object") {
            return false;
        }
        else {
            return true;
        }
    };
    TableComponent.prototype.addNew = function (data) {
        this.parentCheckNode = data;
        this.iterativeDialogMaker(data[0]);
    };
    TableComponent.prototype.startEdit = function (row, index, dataSource) {
        var _this = this;
        var dialogRef = this.dialog.open(_Dialogs_Edit_edit_dialog_component__WEBPACK_IMPORTED_MODULE_4__["EditDialogComponent"], {
            height: '300px',
            width: '400px',
            data: row,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                _this.setDataSource(dataSource, _this.editDataObject, result, index);
            }
        });
    };
    TableComponent.prototype.deleteItem = function (row, index, dataSource) {
        var _this = this;
        var dialogRef = this.dialog.open(_Dialogs_Delete_delete_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteDialogComponent"], {
            height: '300px',
            width: '400px',
            data: row,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                console.log(index);
                var clone = _this.dataSource.slice();
                clone.splice(index, 1);
                _this.dataSource = clone;
                _this.setDataSource(dataSource, _this.deletethisObject, result, index);
            }
        });
    };
    TableComponent.prototype.makeColoumns = function () {
        this.columns.splice(0, this.columns.length); //used to draw columns of table
        var object = this.dataSource[0];
        console.log(object);
        for (var key in object) {
            if (this.objCheck(object[key])) {
                console.log(key);
                this.columns.push(key);
            }
            if (key == "imageUrls") {
                this.columns.push("Other Data");
            }
        }
        this.displayedColumns = this.columns.concat(['actions']);
    };
    TableComponent.prototype.parentStackTrace = function (obj) {
        var noMore = false;
        var categoryid;
        var subcategoryid;
        var productid;
        for (var _i = 0, _a = this.mainDataSource; _i < _a.length; _i++) {
            var category_1 = _a[_i];
            if (!noMore) {
                categoryid = category_1.categoryId;
                for (var _b = 0, _c = category_1.subcategory; _b < _c.length; _b++) {
                    var subcategory = _c[_b];
                    if (!noMore) {
                        subcategoryid = subcategory.subcategoryId;
                        for (var _d = 0, _e = subcategory.products; _d < _e.length; _d++) {
                            var products = _e[_d];
                            if (!noMore) {
                                productid = products.productId;
                                for (var _f = 0, _g = products.subProducts; _f < _g.length; _f++) {
                                    var subProduct = _g[_f];
                                    if (!noMore) {
                                        if (subProduct.subproductId == obj.subproductId) {
                                            this.stackArray.push(categoryid, subcategoryid, productid, subProduct.subproductId);
                                            noMore = true;
                                            return;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    TableComponent.prototype.redirectToImageUpload = function (data, initialData) {
        this.stackArray = [];
        console.log(initialData);
        this.parentStackTrace(data);
        this.dataStorage.storage = {
            'stackTrace': this.stackArray,
            'initialImage': initialData,
            'otherInfo': data
        };
        this.dataSource = null;
        this.router.navigate(["admin/productUpload"]);
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tablehere',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/modules/adminModule/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.css */ "./src/app/modules/adminModule/table/table.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pushobject__WEBPACK_IMPORTED_MODULE_12__["PushChanges"], _moduleServices_dataStorage__WEBPACK_IMPORTED_MODULE_11__["Data"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _moduleServices_dataService__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            _moduleServices_dialogDataService__WEBPACK_IMPORTED_MODULE_8__["DialogDataService"], _moduleServices_categoryDatabase__WEBPACK_IMPORTED_MODULE_9__["CategoryDatabase"]])
    ], TableComponent);
    return TableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=modules-adminModule-admin-module.js.map