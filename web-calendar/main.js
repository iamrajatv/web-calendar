(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jarvis/Desktop/Workspace/test/upwork/web-calendar/src/main.ts */"zUnb");


/***/ }),

/***/ "5aow":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function EventsComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_div_6_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const event_r2 = ctx_r7.$implicit; const i_r3 = ctx_r7.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editEvent(event_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u270E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_div_6_div_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const event_r2 = ctx_r10.$implicit; const i_r3 = ctx_r10.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteEvent(event_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r3 = ctx_r11.index;
    const event_r2 = ctx_r11.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r3 + 1, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](event_r2.title);
} }
function EventsComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventsComponent_div_6_div_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return event_r2.title = $event; })("keyup.enter", function EventsComponent_div_6_div_2_Template_input_keyup_enter_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const event_r2 = ctx_r16.$implicit; const i_r3 = ctx_r16.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.updateEvent(event_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_div_6_div_2_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const event_r2 = ctx_r18.$implicit; const i_r3 = ctx_r18.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.updateEvent(event_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_div_6_div_2_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const event_r2 = ctx_r20.$implicit; const i_r3 = ctx_r20.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.cancelEdit(event_r2, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", event_r2.title);
} }
function EventsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventsComponent_div_6_div_1_Template, 11, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventsComponent_div_6_div_2_Template, 8, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !event_r2.edit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", event_r2.edit);
} }
function EventsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No Events here! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EventsComponent {
    constructor(appService) {
        this.appService = appService;
        this.selectedDate = new Date();
        this.allEvents = new Map();
        this.selectedDateEvents = [];
        this.inputEvent = {};
    }
    ngOnInit() {
        this.subs = this.appService.getData().subscribe((data) => {
            console.info('events: date change detected', data);
            if (data.date) {
                this.selectedDate = new Date(data.date);
                this.setDateEvents(this.selectedDate);
                // console.info('selectedDate', this.selectedDate);
            }
            else {
                console.error('Invalid date passed!');
            }
        });
    }
    getUniqueId(date) {
        let d = new Date(date);
        return d.getFullYear() + '' + (d.getMonth() + 1) + '' + d.getDate();
    }
    getUniqueEventId() {
        return Date.now();
    }
    // getEvents(): any {
    // 	return this.selectedDateEvents;
    // }
    setEvents(events) {
        if (Array.isArray(events)) {
            this.selectedDateEvents = events;
            console.info('All events set!');
        }
        else {
            this.selectedDateEvents = [];
        }
    }
    addEvent(event) {
        if (event && event.title) {
            event.id = this.getUniqueEventId();
            this.selectedDateEvents.push(event);
            console.info('Event added!');
            this.allEvents.set(this.getUniqueId(this.selectedDate), this.selectedDateEvents);
            this.inputEvent = {};
            this.printEvents();
        }
    }
    editEvent(event, index) {
        if (event && event.id) {
            event.edit = true;
        }
    }
    cancelEdit(event, index) {
        if (event && event.id) {
            event.edit = false;
        }
    }
    updateEvent(event, index) {
        if (event && event.id) {
            event.edit = false;
            console.info('Event updated!');
            this.allEvents.set(this.getUniqueId(this.selectedDate), this.selectedDateEvents);
            this.inputEvent = {};
            this.printEvents();
        }
    }
    deleteEvent(event, index) {
        if (event && event.id) {
            this.selectedDateEvents.splice(index, 1);
            console.info('Event deleted!');
            this.allEvents.set(this.getUniqueId(this.selectedDate), this.selectedDateEvents);
            this.inputEvent = {};
            this.printEvents();
        }
    }
    printEvents() {
        console.info('Total Events', this.allEvents);
        console.info('Selected Events', this.selectedDateEvents);
        // api call to save all added or modified events
    }
    setDateEvents(date) {
        let uId = this.getUniqueId(date);
        let eventExist = this.allEvents.get(uId);
        if (eventExist && eventExist.length) {
            this.setEvents(eventExist);
        }
        else {
            this.selectedDateEvents = [];
        }
    }
}
EventsComponent.ɵfac = function EventsComponent_Factory(t) { return new (t || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsComponent, selectors: [["app-events"]], decls: 12, vars: 3, consts: [[1, "events-header"], [1, "events-content"], [1, "events-list"], ["class", "event", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "event-footer"], ["type", "text", "name", "title", 3, "ngModel", "ngModelChange", "keyup.enter"], [3, "click"], [1, "event"], ["class", "event-body", 4, "ngIf"], [1, "event-body"], [1, "event-title"], [1, "event-actions"], [1, "edit-action", 3, "click"], [1, "delete-action", 3, "click"], [1, "event-input"], ["type", "text", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function EventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Events List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EventsComponent_div_6_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EventsComponent_div_7_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EventsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.inputEvent.title = $event; })("keyup.enter", function EventsComponent_Template_input_keyup_enter_9_listener() { return ctx.addEvent(ctx.inputEvent); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventsComponent_Template_button_click_10_listener() { return ctx.addEvent(ctx.inputEvent); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Add Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedDateEvents);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedDateEvents.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputEvent.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: [".event-body[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.event-footer[_ngcontent-%COMP%] {\n\tmargin-top: 6%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.edit-action[_ngcontent-%COMP%] {\n\tmargin-right: 10px;\n}\n\n.delete-action[_ngcontent-%COMP%] {\n\tmargin-right: 10px;\n}\n\n.events-list[_ngcontent-%COMP%]   .event[_ngcontent-%COMP%] {\n\tmargin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsOEJBQThCO0FBQy9COztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztBQUNmIiwiZmlsZSI6ImV2ZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50LWJvZHkge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ldmVudC1mb290ZXIge1xuXHRtYXJnaW4tdG9wOiA2JTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZWRpdC1hY3Rpb24ge1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5kZWxldGUtYWN0aW9uIHtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZXZlbnRzLWxpc3QgLmV2ZW50IHtcblx0bWFyZ2luOiAxMHB4IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-events',
                templateUrl: './events.component.html',
                styleUrls: ['./events.component.css']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    maxData: 5,
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

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class AppService {
    constructor() {
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ date: new Date() });
        this.data = this.dataChange.asObservable();
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.dataChange.next(data);
        return true;
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KH8e":
/*!************************************************!*\
  !*** ./src/app/calender/calender.component.ts ***!
  \************************************************/
/*! exports provided: CalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderComponent", function() { return CalenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "Ng8J");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./body/body.component */ "MMBx");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "QsvC");






class CalenderComponent {
    constructor(appService) {
        this.appService = appService;
        this.selectedDate = new Date();
    }
    ngOnInit() {
    }
}
CalenderComponent.ɵfac = function CalenderComponent_Factory(t) { return new (t || CalenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
CalenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CalenderComponent, selectors: [["app-calender"]], decls: 4, vars: 0, consts: [[1, "calender-container"]], template: function CalenderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _body_body_component__WEBPACK_IMPORTED_MODULE_3__["BodyComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRyIsImZpbGUiOiJjYWxlbmRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmNhbGVuZGVyLWNvbnRhaW5lciB7XG5cdHdpZHRoOiAyNDBweDtcblx0bWF4LXdpZHRoOiAyNDBweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CalenderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-calender',
                templateUrl: './calender.component.html',
                styleUrls: ['./calender.component.css']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "MMBx":
/*!*************************************************!*\
  !*** ./src/app/calender/body/body.component.ts ***!
  \*************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BodyComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r2.name);
} }
function BodyComponent_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BodyComponent_tr_6_td_1_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const data_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.selectDate(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("current-date", data_r5.currentDate)("invalid", data_r5.invalid)("valid", !data_r5.invalid)("selected", data_r5.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r5.date);
} }
function BodyComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BodyComponent_tr_6_td_1_Template, 3, 9, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const week_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", week_r3);
} }
class BodyComponent {
    constructor(appService) {
        this.appService = appService;
        this.weekDays = [];
        this.allDates = [];
        this.currentDate = new Date();
        this.selectedDate = new Date();
    }
    ngOnInit() {
        this.selectedDate = new Date();
        this.weekDays = [
            {
                name: 'Sun',
                value: 0,
            },
            {
                name: 'Mon',
                value: 1,
            },
            {
                name: 'Tue',
                value: 2,
            },
            {
                name: 'Wed',
                value: 3,
            },
            {
                name: 'Thu',
                value: 4,
            },
            {
                name: 'Fri',
                value: 5,
            },
            {
                name: 'Sat',
                value: 6,
            }
        ];
        this.setDates(new Date());
        this.subs = this.appService.getData().subscribe((data) => {
            console.info('body: date change detected', data);
            if (data.date) {
                this.selectedDate = new Date(data.date);
                this.setDates(this.selectedDate);
            }
            else {
                console.error('Invalid date passed!');
            }
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    setDates(date) {
        const selectedDate = new Date(date);
        const calendar = [];
        this.allDates = [];
        // get all year dates with other data
        // // mm-yy-dddd
        // const firstDayOfYear = new Date('01-01-' + selectedDate.getFullYear());
        // const firstDayOfNextYear = new Date('01-01-' + (selectedDate.getFullYear() + 1));
        // console.info('firstDayOfYear', firstDayOfYear);
        // console.info('firstDayOfNextYear', firstDayOfNextYear);
        // while (firstDayOfYear.getFullYear() < firstDayOfNextYear.getFullYear()) {
        // 	const date = {
        // 		day: firstDayOfYear.getDay(), // 0-6 = sun-sat
        // 		date: firstDayOfYear.getDate(), // 1-31
        // 		month: firstDayOfYear.getMonth(), // 0-11 = jan-dec
        // 		year: firstDayOfYear.getFullYear(), // 2022,2023...
        // 	};
        // 	calendar.push(date);
        // 	// console.info('date added', calendar);
        // 	firstDayOfYear.setDate(firstDayOfYear.getDate() + 1);
        // }
        const selectedMonth = selectedDate.getMonth();
        const dateSelected = selectedDate.getDate();
        let temp = new Date(selectedDate);
        let temp2 = new Date(temp);
        temp2.setMonth(temp2.getMonth() + 1);
        temp2.setDate(1);
        temp.setDate(1);
        let week = 1;
        // while (temp < temp2) {
        while ((temp.getFullYear() == temp2.getFullYear()) ? temp.getMonth() < temp2.getMonth() : (temp.getFullYear() < temp2.getFullYear()) ? temp < temp2 : false) {
            const dateData = {
                day: temp.getDay(),
                date: temp.getDate(),
                month: temp.getMonth(),
                year: temp.getFullYear(),
                actualDate: new Date(temp),
                week,
                currentDate: (temp.getDate() == this.currentDate.getDate() && temp.getMonth() == this.currentDate.getMonth() && temp.getFullYear() == this.currentDate.getFullYear()),
                selected: (temp.getDate() == selectedDate.getDate() && temp.getMonth() == selectedDate.getMonth() && temp.getFullYear() == selectedDate.getFullYear())
            };
            if (dateData.day == 6) {
                week++;
            }
            calendar.push(dateData);
            temp.setDate(temp.getDate() + 1);
        }
        console.info('calendar set', calendar);
        // split by week
        let weekDates = [];
        calendar.forEach((e, i) => {
            if (weekDates[(e.week - 1)]) {
                weekDates[(e.week - 1)].push(e);
            }
            else {
                weekDates[(e.week - 1)] = [];
                weekDates[(e.week - 1)].push(e);
            }
        });
        console.info('weekDates', weekDates);
        weekDates.forEach((w, i) => {
            this.weekDays.forEach((w1, j) => {
                const index = w.findIndex((d, k) => {
                    return d.day === w1.value;
                });
                if (index === -1) {
                    if (i === 0) {
                        w.unshift({
                            day: w1.value,
                            date: '-',
                            invalid: true
                        });
                    }
                    else {
                        w.push({
                            day: w1.value,
                            date: '-',
                            invalid: true
                        });
                    }
                }
            });
        });
        this.allDates = weekDates;
        console.info('allDates', this.allDates);
        // this.setEvents();
    }
    selectDate(data) {
        console.info('selectDate called', data);
        if (!data.invalid) {
            this.selectedDate = new Date(data.actualDate);
            // this.setDates(this.selectedDate);
            this.appService.setData({
                date: this.selectedDate
            });
        }
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["app-body"]], decls: 7, vars: 2, consts: [[1, "calender-body"], ["class", "week-days", 4, "ngFor", "ngForOf"], ["class", "week-row", 4, "ngFor", "ngForOf"], [1, "week-days"], [1, "week-row"], ["class", "week-col dates", 3, "current-date", "invalid", "valid", "selected", "click", 4, "ngFor", "ngForOf"], [1, "week-col", "dates", 3, "click"]], template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BodyComponent_th_4_Template, 3, 1, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BodyComponent_tr_6_Template, 2, 1, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weekDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.allDates);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".calender-body[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n\twidth: 100%;\n}\n\ntd.week-col.dates.current-date[_ngcontent-%COMP%] {\n\tbackground: #a8d3f3;\n\tcolor: white;\n\tborder-radius: 10px;\n}\n\ntd.week-col.dates.selected[_ngcontent-%COMP%] {\n\tbackground: #5aaae7;\n\tcolor: white;\n\tborder-radius: 10px;\n}\n\ntd.week-col.dates[_ngcontent-%COMP%] {\n\ttext-align: center;\n\tpadding: 6px;\n\ttransition: all ease-in-out 0.3s;\n}\n\n.dates.valid[_ngcontent-%COMP%] {\n\tcursor: pointer;\n}\n\n.dates.valid[_ngcontent-%COMP%]:hover {\n\tbackground-color: #cecece;\n}\n\n.dates.invalid[_ngcontent-%COMP%] {\n\tcursor: default\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvZHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQztBQUNEIiwiZmlsZSI6ImJvZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRlci1ib2R5IHRhYmxlIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbnRkLndlZWstY29sLmRhdGVzLmN1cnJlbnQtZGF0ZSB7XG5cdGJhY2tncm91bmQ6ICNhOGQzZjM7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcbn1cbnRkLndlZWstY29sLmRhdGVzLnNlbGVjdGVkIHtcblx0YmFja2dyb3VuZDogIzVhYWFlNztcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG50ZC53ZWVrLWNvbC5kYXRlcyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzogNnB4O1xuXHR0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMC4zcztcbn1cblxuLmRhdGVzLnZhbGlkIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGF0ZXMudmFsaWQ6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xufVxuXG4uZGF0ZXMuaW52YWxpZCB7XG5cdGN1cnNvcjogZGVmYXVsdFxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-body',
                templateUrl: './body.component.html',
                styleUrls: ['./body.component.css']
            }]
    }], function () { return [{ type: src_app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "Ng8J":
/*!*****************************************************!*\
  !*** ./src/app/calender/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "F5nt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





class HeaderComponent {
    constructor(appService) {
        this.appService = appService;
        this.selectedDate = new Date();
    }
    ngOnInit() {
        this.selectedDate = new Date();
        // set min max year
        let temp = new Date();
        temp.setFullYear(temp.getFullYear() - src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].maxData);
        this.minYear = new Date(temp);
        temp = new Date();
        temp.setFullYear(temp.getFullYear() + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].maxData);
        this.maxYear = new Date(temp);
        this.subs = this.appService.getData().subscribe((data) => {
            console.info('header: date change detected', data);
            if (data.date) {
                this.selectedDate = new Date(data.date);
                // console.info('selectedDate', this.selectedDate);
            }
            else {
                console.error('Invalid date passed!');
            }
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    prev(type) {
        // console.info('prev ', type, ':', this.selectedDate.getDate(), ' ', this.selectedDate.getMonth(), ' ', this.selectedDate.getFullYear());
        let dateChange = false;
        switch (type) {
            case 'month':
                if (this.selectedDate.getMonth() == this.minYear.getMonth()) {
                    if (this.selectedDate.getFullYear() == this.minYear.getFullYear()) {
                    }
                    else {
                        this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
                        dateChange = true;
                    }
                }
                else {
                    this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
                    dateChange = true;
                }
                break;
            case 'year':
                if (this.selectedDate.getFullYear() !== this.minYear.getFullYear()) {
                    this.selectedDate.setFullYear(this.selectedDate.getFullYear() - 1);
                    dateChange = true;
                }
                break;
            default:
                break;
        }
        if (dateChange) {
            this.appService.setData({
                date: this.selectedDate
            });
        }
    }
    next(type) {
        // console.info('next ', type, ':', this.selectedDate.getDate(), ' ', this.selectedDate.getMonth(), ' ', this.selectedDate.getFullYear());
        let dateChange = false;
        switch (type) {
            case 'month':
                if (this.selectedDate.getMonth() == this.maxYear.getMonth()) {
                    if (this.selectedDate.getFullYear() == this.maxYear.getFullYear()) {
                    }
                    else {
                        this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
                        dateChange = true;
                    }
                }
                else {
                    this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
                    dateChange = true;
                }
                break;
            case 'year':
                if (this.selectedDate.getFullYear() !== this.maxYear.getFullYear()) {
                    this.selectedDate.setFullYear(this.selectedDate.getFullYear() + 1);
                    dateChange = true;
                }
                break;
            default:
                break;
        }
        if (dateChange) {
            this.appService.setData({
                date: this.selectedDate
            });
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 17, vars: 4, consts: [[1, "calender-header"], ["title", "Prev Month", 3, "click"], ["title", "Prev Date", 3, "click"], ["title", "Next Date", 3, "click"], ["title", "Next Month", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.prev("year"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() { return ctx.prev("month"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u2039");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_12_listener() { return ctx.next("month"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_15_listener() { return ctx.next("year"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 1, ctx.selectedDate, "dd MMM, YYYY"));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".calender-header[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRlci1oZWFkZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, null); })();


/***/ }),

/***/ "QsvC":
/*!*****************************************************!*\
  !*** ./src/app/calender/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.service */ "F5nt");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function FooterComponent_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", year_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](year_r2.name);
} }
function FooterComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const month_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", month_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](month_r3.name);
} }
class FooterComponent {
    constructor(appService) {
        this.appService = appService;
        this.years = [];
        this.months = [];
        this.selectedDate = new Date();
    }
    ngOnInit() {
        this.selectedDate = new Date();
        this.selectedYear = this.selectedDate.getFullYear();
        this.selectedMonth = this.selectedDate.getMonth();
        console.info('selectedYear', this.selectedYear);
        console.info('selectedMonth', this.selectedMonth);
        let firstYear = this.selectedDate.getFullYear() - src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].maxData;
        let lastYear = this.selectedDate.getFullYear() + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].maxData;
        for (let i = firstYear; i <= lastYear; i++) {
            this.years.push({
                name: i,
                value: i
            });
        }
        this.months = [
            {
                name: 'January',
                shortName: 'Jan',
                value: 0
            },
            {
                name: 'February',
                shortName: 'Feb',
                value: 1
            },
            {
                name: 'March',
                shortName: 'Mar',
                value: 2
            },
            {
                name: 'April',
                shortName: 'Apr',
                value: 3
            },
            {
                name: 'May',
                shortName: 'May',
                value: 4
            },
            {
                name: 'June',
                shortName: 'Jun',
                value: 5
            },
            {
                name: 'July',
                shortName: 'Jul',
                value: 6
            },
            {
                name: 'August',
                shortName: 'Aug',
                value: 7
            },
            {
                name: 'September',
                shortName: 'Sep',
                value: 8
            },
            {
                name: 'October',
                shortName: 'Oct',
                value: 9
            },
            {
                name: 'November',
                shortName: 'Nov',
                value: 10
            },
            {
                name: 'December',
                shortName: 'Dec',
                value: 11
            },
        ];
        this.subs = this.appService.getData().subscribe((data) => {
            console.info('footer: date change detected', data);
            if (data.date) {
                this.selectedDate = new Date(data.date);
                this.selectedYear = this.selectedDate.getFullYear();
                this.selectedMonth = this.selectedDate.getMonth();
            }
            else {
                console.error('Invalid date passed!');
            }
        });
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
    selectToday() {
        console.info('selectToday', this.selectedDate);
        this.selectedDate = new Date();
        this.appService.setData({
            date: this.selectedDate
        });
    }
    selectYear() {
        console.info('selected year', this.selectedYear);
        this.selectedDate.setFullYear(this.selectedYear);
        this.appService.setData({
            date: this.selectedDate
        });
    }
    selectMonth() {
        console.info('selected month', this.selectedMonth);
        this.selectedDate.setMonth(this.selectedMonth);
        this.appService.setData({
            date: this.selectedDate
        });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 4, consts: [[1, "calender-foooter"], ["name", "year-list", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["name", "month-list", 3, "ngModel", "change", "ngModelChange"], [3, "click"], [3, "value"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FooterComponent_Template_select_change_2_listener() { return ctx.selectYear(); })("ngModelChange", function FooterComponent_Template_select_ngModelChange_2_listener($event) { return ctx.selectedYear = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FooterComponent_option_3_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FooterComponent_Template_select_change_5_listener() { return ctx.selectMonth(); })("ngModelChange", function FooterComponent_Template_select_ngModelChange_5_listener($event) { return ctx.selectedMonth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FooterComponent_option_6_Template, 2, 2, "option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_8_listener() { return ctx.selectToday(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedYear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.years);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedMonth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.months);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], styles: [".calender-foooter[_ngcontent-%COMP%] {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxlbmRlci1mb29vdGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: src_app_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "F5nt");
/* harmony import */ var _calender_calender_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calender/calender.component */ "KH8e");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/events.component */ "5aow");





class AppComponent {
    constructor(appService) {
        this.appService = appService;
        this.title = 'web-calendar';
        this.selectedDate = new Date();
    }
    ngOnInit() {
        this.subs = this.appService.getData().subscribe((data) => {
            console.info('app: date change detected', data);
            if (data.date) {
                this.selectedDate = new Date(data.date);
                // console.info('selectedDate', this.selectedDate);
            }
            else {
                console.error('Invalid date passed!');
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "app-title"], [1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Web Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-calender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_calender_calender_component__WEBPACK_IMPORTED_MODULE_2__["CalenderComponent"], _events_events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"]], styles: [".app-container[_ngcontent-%COMP%] {\n\twidth: 240px;\n\tmax-width: 240px;\n\tdisplay: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWNvbnRhaW5lciB7XG5cdHdpZHRoOiAyNDBweDtcblx0bWF4LXdpZHRoOiAyNDBweDtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _calender_calender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calender/calender.component */ "KH8e");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events/events.component */ "5aow");
/* harmony import */ var _calender_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calender/header/header.component */ "Ng8J");
/* harmony import */ var _calender_body_body_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calender/body/body.component */ "MMBx");
/* harmony import */ var _calender_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./calender/footer/footer.component */ "QsvC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _calender_calender_component__WEBPACK_IMPORTED_MODULE_3__["CalenderComponent"],
        _events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"],
        _calender_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _calender_body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
        _calender_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _calender_calender_component__WEBPACK_IMPORTED_MODULE_3__["CalenderComponent"],
                    _events_events_component__WEBPACK_IMPORTED_MODULE_4__["EventsComponent"],
                    _calender_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _calender_body_body_component__WEBPACK_IMPORTED_MODULE_6__["BodyComponent"],
                    _calender_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    console.info = function () { };
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map