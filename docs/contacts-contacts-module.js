(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contacts-contacts-module"],{

/***/ "./src/app/contacts/contacts-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contacts/contacts-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsRoutingModule", function() { return ContactsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts/contacts.component.ts");




var routes = [
    {
        path: "",
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]
    }
];
var ContactsRoutingModule = /** @class */ (function () {
    function ContactsRoutingModule() {
    }
    ContactsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContactsRoutingModule);
    return ContactsRoutingModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts-routing.module */ "./src/app/contacts/contacts-routing.module.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts/contacts.component.ts");






var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _contacts_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts/contacts.component.html":
/*!***********************************************************!*\
  !*** ./src/app/contacts/contacts/contacts.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ header }}</h2>\n<p>{{ description | uppercase }}</p>\n<p>\n  You have\n  <mark [class]=\"counterClass\">{{ numContacts }}</mark>\n  contacts right now.\n</p>\n<input value=\"Show Form\" type=\"button\" (click)=\"formHidden = false\" />\n<input value=\"Hide Form\" type=\"button\" (click)=\"formHidden = true\" />\n<form [ngClass]=\"{ hidden: formHidden }\">\n  <fieldset>\n    <legend>Contact Form</legend>\n\n    <section>\n      <label for=\"name\">Name</label>\n      <input\n        name=\"name\"\n        type=\"text\"\n        [(ngModel)]=\"contact.name\"\n        placeholder=\"Contact\n   name\"\n      />\n    </section>\n    <section>\n      <label for=\"gender\">Gender</label>\n      <input\n        name=\"gender\"\n        value=\"male\"\n        type=\"radio\"\n        [(ngModel)]=\"contact.gender\"\n      />\n      <i>Male</i>\n      <input\n        name=\"gender\"\n        value=\"female\"\n        type=\"radio\"\n        [(ngModel)]=\"contact.gender\"\n      />\n      <i>Female</i>\n    </section>\n    <section>\n      <label for=\"isVIP\">Is V.I.P.</label>\n      <input name=\"isVIP\" type=\"checkbox\" [(ngModel)]=\"contact.isVIP\" />\n    </section>\n    <section>\n      <label for=\"workStatus\">Work Status</label>\n      <select name=\"workStatus\" [(ngModel)]=\"contact.workStatus\">\n        <option *ngFor=\"let wkSt of workStatuses\" [value]=\"wkSt.id\">\n          <span>{{ wkSt.description }}</span>\n        </option>\n      </select>\n    </section>\n    <section *ngIf=\"contact.workStatus == '3'; else education\">\n      <label for=\"company\">Company Name</label>\n      <input name=\"company\" type=\"text\" [(ngModel)]=\"contact.company\" />\n    </section>\n    <ng-template #education>\n      <label for=\"education\">Education</label>\n      <input name=\"education\" type=\"text\" [(ngModel)]=\"contact.education\" />\n    </ng-template>\n  </fieldset>\n  <input value=\"Save\" type=\"submit\" (click)=\"saveContact()\" />\n  <ul *ngIf=\"contacts.length > 0; else empty\">\n    <li *ngFor=\"let contact of contacts\">\n      <span>{{ contact.name }}</span>\n      <input value=\"Delete\" type=\"button\" (click)=\"deleteContact(contact)\" />\n    </li>\n  </ul>\n  <ng-template #empty> <i>No data yet</i> </ng-template>\n</form>\n<pre>{{ contact | json }}</pre>\n"

/***/ }),

/***/ "./src/app/contacts/contacts/contacts.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/contacts/contacts/contacts.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.header = "Contacts";
        this.description = "Manage your contact list";
        this.numContacts = 0;
        this.counterClass = "tag secondary";
        this.formHidden = true;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        this.workStatuses = [
            { id: 0, description: "unknow" },
            { id: 1, description: "student" },
            { id: 2, description: "unemployed" },
            { id: 3, description: "employed" }
        ];
        this.contact = {
            name: "",
            isVIP: false,
            gender: "",
            workStatus: "0",
            company: "",
            education: ""
        };
        this.contacts = [];
    };
    ContactsComponent.prototype.saveContact = function () {
        this.contacts.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.contact));
        this.numContacts = this.contacts.length;
    };
    ContactsComponent.prototype.deleteContact = function (contact) {
        this.contacts = this.contacts.filter(function (c) { return c.name !== contact.name; });
        this.numContacts = this.contacts.length;
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-contacts",
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts/contacts.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=contacts-contacts-module.js.map