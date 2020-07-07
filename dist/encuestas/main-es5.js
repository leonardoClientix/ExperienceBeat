function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">\n    <img src=\"https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg\" width=\"30\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n    Experience<b>Beat</b>\n  </a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\" routerLinkActive=\"active\" >\n        <a class=\"nav-link\" [routerLink]=\"['config-questions']\">Nueva Encuesta</a>\n      </li>\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n         Encuestas\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item\" href=\"#\">Listado de encuestas</a>\n          <a class=\"dropdown-item\" href=\"#\">Reportes</a>\n        </div>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <button class=\"btn btn-outline-info my-2 my-sm-0\" type=\"submit\">Salir</button>\n    </form>\n  </div>\n</nav>\n<div class=\"container top-50\">\n  <router-outlet></router-outlet>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/config-questions/config-questions.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/config-questions/config-questions.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminConfigQuestionsConfigQuestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"cont-step animated bounceInRight\" *ngIf=\"step == 'configuration-questions'\">\n<h1>Parametros Básicos</h1>\n\n  <div class=\"row\">\n\n    <div class=\"col-md-6 mb-6\">\n\n        <form [formGroup]=\"form\" (ngSubmit)=\"save()\" class=\"needs-validation\" novalidate>\n\n            <div class=\"form-row\">\n              <div class=\"col-md-12 mb-3\">\n                <label for=\"validationServer01\">Nombre de la encuesta</label>\n                <input [(colorPicker)]=\"colorTitle\" class=\"rad-color\" [style.background]=\"colorTitle\"/>\n                <input type=\"text\" class=\"form-control form-control-lg \" id=\"validationServer01\" formControlName=\"nameQuestion\" required>\n              </div>\n              <div class=\"col-md-12 mb-3\">\n                <label for=\"validatedCustomFile\">Logo</label>\n                <div class=\"custom-file\">   \n                    <input type=\"file\" class=\"custom-file-input\" id=\"validatedCustomFile\" name=\"logo\"  required>\n                    <label class=\"custom-file-label form-control-lg \" for=\"validatedCustomFile\">Seleccionar archivo...</label>\n                </div>\n              </div>\n              <div class=\"col-md-12 mb-12\">\n                <h3>Colores de la encuesta</h3>\n              </div>\n              \n              <div class=\"col-md-4 mb-3\"> \n                <label for=\"validatedCustomFile\">Cabecera</label>\n                <input [(colorPicker)]=\"colorHeader\" class=\"rad-color\" [style.background]=\"colorHeader\"/>\n              </div>\n              <div class=\"col-md-4 mb-3\">\n                <label for=\"validatedCustomFile\">Fondo</label>\n                <input [(colorPicker)]=\"colorBackground\" class=\"rad-color\" [style.background]=\"colorBackground\" id=\"color-background\"/>\n              </div>\n              <div class=\"col-md-4 mb-3\">\n                <label for=\"validatedCustomFile\">Tarjeta Pregunta</label>\n                <input [(colorPicker)]=\"colorQuestion\" class=\"rad-color\" [style.background]=\"colorQuestion\" id=\"color-question\"/>\n              </div>\n              <div class=\"col-md-4 mb-3\">\n                <label for=\"validatedCustomFile\">Texto Pregunta</label>\n                <input [(colorPicker)]=\"TxtQuestion\" class=\"rad-color\" [style.background]=\"TxtQuestion\" id=\"color-question\"/>\n              </div>\n              <div class=\"col-md-4 mb-3\">\n                <label for=\"validatedCustomFile\">Opciones</label>\n                <input [(colorPicker)]=\"colorOption\" class=\"rad-color\" [style.background]=\"colorOption\" id=\"color-question\"/>\n              </div>\n              <div class=\"col-md-4 mb-3\">\n                <label for=\"validatedCustomFile\">Texto Opciones</label>\n                <input [(colorPicker)]=\"TxtOption\" class=\"rad-color\" [style.background]=\"TxtOption\" id=\"color-question\"/>\n              </div>\n            </div>\n        \n            \n        </form>\n\n    </div>\n\n    <div class=\"col-md-6 mb-6\">\n        <div class=\"box-preview col-md-12\" [style.background]=\"colorBackground\" >\n            <div class=\"header-preview col-md-12\" [style.background]=\"colorHeader\" [style.color]=\"colorTitle\">\n              {{form.controls['nameQuestion'].value}}\n            </div>\n            <div class=\"col-md-11 mb-11 box-cont\" [style.background]=\"colorQuestion\" [style.color]=\"TxtQuestion\"></div>\n            <div class=\"col-md-11 mb-11 box-cont\" [style.background]=\"colorQuestion\" [style.color]=\"TxtQuestion\"></div>\n            <div class=\"col-md-11 mb-11 box-cont\" [style.background]=\"colorQuestion\" [style.color]=\"TxtQuestion\"></div>\n            <div class=\"col-md-11 mb-11 box-cont\" [style.background]=\"colorQuestion\" [style.color]=\"TxtQuestion\"></div>\n        </div>\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"ctr-btns\">\n  <ul>\n    <li><fa-icon [icon]=\"faArrowAltCircleRight\" class=\"plus-question\"  title=\"Seguiente\" *ngIf=\"step == 'configuration-questions'\" (click)=\"steps('basic-parameters')\" ></fa-icon></li>\n  </ul>\n</div>\n\n<div class=\"cont-step animated bounceInRight\" *ngIf=\"step == 'basic-parameters'\">\n  <h1>Configuración de Preguntas</h1>\n\n  <ngx-sortable [items]=\"quiz.question\" [listStyle]=\"listStyle\" [showHeader]=\"false\" (listSorted)=\"listOrderChanged($event)\">\n    <ng-template let-item>\n\n        <div class=\"sortable-list-item\">\n      \n            <div class=\"row boxQuestion\" *ngIf=\"item.idQuestion == 1\">\n              <div class=\"col-md-11 mb-11 cont-itemquestion\" [style.background]=\"colorQuestion\" [style.background]=\"colorQuestionAlone0\">\n                <textarea class=\"cont-question\" [style.color]=\"TxtQuestion\" [style.color]=\"TxtQuestionAlone0\"></textarea>\n              </div>\n              <div class=\"col-md-1 mb-1\">\n                <ul class=\"confg-controls\">\n                  <li><div [colorPicker]=\"colorQuestionAlone0\" (colorPickerChange)=\"colorQuestionAlone0 = $event\" class=\"rad-color\" [style.background]=\"colorQuestion\" [style.background]=\"colorQuestionAlone0\" id=\"color-question\" title=\"Tarjeta Pregunta\"></div></li>\n                  <li><div [colorPicker]=\"TxtQuestionAlone0\" (colorPickerChange)=\"TxtQuestionAlone0 = $event\" class=\"rad-color\" [style.background]=\"TxtQuestionAlone0\" [style.background]=\"TxtQuestion\"id=\"color-question\" title=\"Texto Pregunta\"></div></li> \n                  <li> <fa-icon [icon]=\"faClone\" class=\"conf-icon\"  title=\"Clonar pregunta\" ></fa-icon></li>\n                  <li> <fa-icon [icon]=\"faEdit\" class=\"conf-icon\"  title=\"Editar pregunta\" ></fa-icon></li>    \n                </ul>\n              </div>\n            </div> \n\n            <div class=\"row boxQuestion\" *ngIf=\"item.idQuestion == 2\">\n              <div class=\"col-md-11 mb-11 cont-itemquestion\" [style.background]=\"colorQuestion\" [style.background]=\"colorQuestionAlone1\">\n                <textarea class=\"cont-question\" [style.color]=\"TxtQuestion\" [style.color]=\"TxtQuestionAlone1\"></textarea>\n        \n                  <div class=\"list-check\">\n                    <div class=\"form-check form-check-inline\" *ngFor=\"let idqs of item.itemOpt; let i = index\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"question_{{i}}\"  [value]=\"opt\"  id=\"inlineCheckbox_{{i}}\" #data>\n                      <label class=\"form-check-label\" for=\"inlineCheckbox_{{i}}\" ><span translate=\"no\"><input name=\"opnum\" class=\"input-opt\"  [style.color]=\"TxtQuestion\" [style.color]=\"TxtQuestionAlone1\"/></span></label>\n                      <div  class=\"min-icon\"  title=\"Eliminar Opción\" (click)=\"removeOpt(item.idQuestion,'itemOpt',i)\">-</div> \n                    </div>\n                  </div> \n\n              </div>\n              <div class=\"col-md-1 mb-1\">\n                <ul class=\"confg-controls\">\n                  <li><div [colorPicker]=\"colorQuestionAlone1\" (colorPickerChange)=\"colorQuestionAlone1 = $event\" class=\"rad-color\" [style.background]=\"colorQuestionAlone1\" [style.background]=\"colorQuestion\" id=\"color-question\" title=\"Tarjeta Pregunta\"></div></li>\n                  <li><div [colorPicker]=\"TxtQuestionAlone1\" (colorPickerChange)=\"TxtQuestionAlone1 = $event\" class=\"rad-color\" [style.background]=\"TxtQuestionAlone1\" [style.background]=\"TxtQuestion\"id=\"color-question\" title=\"Texto Pregunta\"></div></li> \n                  <li> <fa-icon [icon]=\"faClone\" class=\"conf-icon\" title=\"Clonar pregunta\" ></fa-icon></li>\n                  <li> <fa-icon [icon]=\"faEdit\" class=\"conf-icon\" title=\"Editar pregunta\" ></fa-icon></li>    \n                  <li> <fa-icon [icon]=\"faPlus\" class=\"conf-icon\" title=\"Agregar Opción\" (click)=\"addOpt(item.idQuestion,'itemOpt')\"></fa-icon></li>    \n                </ul>\n              </div>\n            </div> \n\n\n            <div class=\"row boxQuestion\" *ngIf=\"item.idQuestion == 3\">\n              <div class=\"col-md-11 mb-11 cont-itemquestion style-labels\" [style.background]=\"colorQuestion\" [style.background]=\"colorQuestionAlone2\">\n                <textarea class=\"cont-question\" [style.color]=\"TxtQuestion\" [style.color]=\"TxtQuestionAlone2\"></textarea>\n        \n                  <div class=\"list-check two-box\">\n                    <div class=\"form-check form-check-inline box-action \" [style.background]=\"colorOption\" *ngFor=\"let idqs of item.itemCubi; let i = index\">\n                      <input class=\"form-check-input inp-checkbox\" type=\"checkbox\" name=\"question_{{i}}\" [value]=\"opt\"  id=\"inlineCheckbox_{{i}}\" #data>\n                      <label class=\"form-check-label\" for=\"inlineCheckbox_{{i}}\" ><span translate=\"no\"><input name=\"opnum\" [style.color]=\"TxtOption\" class=\"input-opt\"  [style.color]=\"TxtQuestionAlone2\" style=\"\"/></span></label>\n                      <div  class=\"min-icon\"  title=\"Eliminar Opción\" (click)=\"removeOpt(item.idQuestion,'itemCubi',i)\">-</div> \n                    </div>\n                  </div>\n\n              </div>\n              <div class=\"col-md-1 mb-1\">\n                <ul class=\"confg-controls\">\n                  <li><div [colorPicker]=\"colorQuestionAlone2\" (colorPickerChange)=\"colorQuestionAlone2 = $event\" class=\"rad-color\" [style.background]=\"colorQuestionAlone2\" [style.background]=\"colorQuestion\" id=\"color-question\" title=\"Tarjeta Pregunta\"></div></li>\n                  <li><div [colorPicker]=\"TxtQuestionAlone2\" (colorPickerChange)=\"TxtQuestionAlone2 = $event\" class=\"rad-color\" [style.background]=\"TxtQuestionAlone2\" [style.background]=\"TxtQuestion\"id=\"color-question\" title=\"Texto Pregunta\"></div></li> \n                  <li> <fa-icon [icon]=\"faClone\" class=\"conf-icon\"  title=\"Clonar pregunta\" ></fa-icon></li>\n                  <li> <fa-icon [icon]=\"faEdit\" class=\"conf-icon\"  title=\"Editar pregunta\" ></fa-icon></li>    \n                  <li> <fa-icon [icon]=\"faPlus\" class=\"conf-icon\" title=\"Agregar Opción\" (click)=\"addOpt(item.idQuestion,'itemCubi')\"></fa-icon></li>  \n                </ul>\n              </div>\n            </div> \n\n\n            <div class=\"row boxQuestion\" *ngIf=\"item.idQuestion == 4\">\n              <div class=\"col-md-11 mb-11 cont-itemquestion\" [style.background]=\"colorQuestion\" [style.background]=\"colorQuestionAlone3\">\n                <textarea class=\"cont-question\" [style.color]=\"TxtQuestion\" [style.color]=\"TxtQuestionAlone3\"></textarea>\n       \n                  <div class=\"list-check\">\n                    <div class=\"row\">\n\n                    <div class=\"col-md-6\" *ngFor=\"let lab of item.itemCheckMult; let l = index\">\n\n                      <div class=\"row\">\n                          <div class=\"label-option col-md-3\">\n                            <input name=\"inp-item\" class=\"input-opt\" [style.color]=\"TxtOption\"  [style.color]=\"TxtQuestionAlone3\" />\n                          </div>\n                          <div class=\"items-options-list col-md-3\">\n                            <div class=\"form-check form-check-inline\" *ngFor=\"let idqs of item.itemCheckMult[l].options; let i = index\">\n                              <input class=\"form-check-input inp-checkbox\" type=\"radio\" name=\"question_{{i}}\" [value]=\"opt\"  id=\"inlineCheckbox_{{i}}\" #dataCkMensaje>\n                              <label class=\"form-check-label\" for=\"inlineCheckbox_{{i}}\" ><span translate=\"no\"><input name=\"opnum\" class=\"input-opt\" [style.color]=\"TxtOption\" [style.color]=\"TxtQuestionAlone3\" /></span></label>\n                              <div  class=\"min-icon\"  title=\"Eliminar Opción\" (click)=\"removeOpt(item.idQuestion,'itemCheckMult',i)\">-</div> \n                            </div>\n                            <ul class=\"confg-controls ind-cont\">\n                              <li><fa-icon [icon]=\"faPlus\" class=\"conf-icon\" title=\"Agregar Opción\" (click)=\"addOptLabel(item.idQuestion,'itemCheckMult',l)\"></fa-icon></li>\n                            </ul>\n                            \n                          </div>\n                      </div>\n\n                    </div>\n\n                    </div>\n                  </div>\n\n\n              </div>\n              <div class=\"col-md-1 mb-1\">\n                <ul class=\"confg-controls\">\n                  <li><div [colorPicker]=\"colorQuestionAlone3\" (colorPickerChange)=\"colorQuestionAlone3 = $event\" class=\"rad-color\" [style.background]=\"colorQuestionAlone3\" [style.background]=\"colorQuestion\" id=\"color-question\" title=\"Tarjeta Pregunta\"></div></li>\n                  <li><div [colorPicker]=\"TxtQuestionAlone3\" (colorPickerChange)=\"TxtQuestionAlone3 = $event\" class=\"rad-color\" [style.background]=\"TxtQuestionAlone3\" [style.background]=\"TxtQuestion\" id=\"color-question\" title=\"Texto Pregunta\"></div></li> \n                  <li> <fa-icon [icon]=\"faClone\" class=\"conf-icon\"  title=\"Clonar pregunta\" ></fa-icon></li>\n                  <li> <fa-icon [icon]=\"faEdit\" class=\"conf-icon\"  title=\"Editar pregunta\" ></fa-icon></li>    \n                  <li><fa-icon [icon]=\"faPlus\" class=\"conf-icon\" title=\"Agregar Opción\" (click)=\"addOpt(item.idQuestion,'itemCheckMult')\"></fa-icon></li>        \n                </ul>\n              </div>\n            </div> \n\n            <div class=\"row boxQuestion\" *ngIf=\"item.idQuestion == 5\">\n              <div class=\"col-md-11 mb-11 cont-itemquestion\" [style.background]=\"colorQuestion\" [style.background]=\"colorQuestionAlone4\">\n                <textarea class=\"cont-question\" [style.color]=\"TxtQuestion\" [style.color]=\"TxtQuestionAlone4\"></textarea>\n                <textarea class=\"cont-question-txt\"></textarea>\n              </div>\n              <div class=\"col-md-1 mb-1\">\n                <ul class=\"confg-controls\">\n                  <li><div [colorPicker]=\"colorQuestionAlone4\" (colorPickerChange)=\"colorQuestionAlone4 = $event\" class=\"rad-color\" [style.background]=\"colorQuestion\" [style.background]=\"colorQuestionAlone4\" id=\"color-question\" title=\"Tarjeta Pregunta\"></div></li>\n                  <li><div [colorPicker]=\"TxtQuestionAlone4\" (colorPickerChange)=\"TxtQuestionAlone4 = $event\" class=\"rad-color\" [style.background]=\"TxtQuestionAlone4\" [style.background]=\"TxtQuestion\"id=\"color-question\" title=\"Texto Pregunta\"></div></li> \n                  <li> <fa-icon [icon]=\"faClone\" class=\"conf-icon\"  title=\"Clonar pregunta\" ></fa-icon></li>\n                  <li> <fa-icon [icon]=\"faEdit\" class=\"conf-icon\"  title=\"Editar pregunta\" ></fa-icon></li>    \n                </ul>\n              </div>\n            </div> \n          \n            <div class=\"row boxQuestion style-table\" *ngIf=\"item.idQuestion == 6\">\n              <div class=\"col-md-11 mb-11 cont-itemquestion\" [style.background]=\"colorQuestion\" [style.background]=\"colorQuestionAlone5\">\n                <textarea class=\"cont-question\" [style.color]=\"TxtQuestion\" [style.color]=\"TxtQuestionAlone5\"></textarea>\n                <div class=\"row cont-table\">\n                  <div class=\"col-md-4 mb-4 box-fixed\">\n                    <div class=\"col-md-12 mb-12 tr head-table\"></div>\n                    <div *ngFor=\"let lab of item.itemTable; let l = index\">\n                      <div class=\"col-md-12 mb-12 tr head-table\"><input name=\"opnum\" class=\"input-opt w-full\" [style.color]=\"TxtOption\" [style.color]=\"TxtQuestionAlone5\" /></div>\n                    </div>\n                  </div>\n                  \n                  <div class=\"col-md-12 mb-12\">\n                    \n                    <div *ngFor=\"let lab of item.itemTable; let l = index\" class=\"free-fixed row\">\n\n                      <div *ngIf=\"l == 0\" class=\"w-full\">\n                        <ul class=\"confg-controls conf-int\">\n                          <li><fa-icon [icon]=\"faPlus\" class=\"conf-icon\" title=\"Agregar Opción\" (click)=\"addOptLabel(item.idQuestion,'itemTable',l)\"></fa-icon></li>\n                        </ul>\n                        <div  *ngFor=\"let idqs of item.itemTable[l].options; let i = index\" class=\"col-md-4 col-td\">\n                          <div class=\"row\" >\n                            <div class=\"col-md-12 mb-12 tr head-table\"><input name=\"opnum\" class=\"input-opt w-full\" [style.color]=\"TxtOption\" [style.color]=\"TxtQuestionAlone5\" /></div> \n                          </div>\n                          <div class=\"row\" *ngFor=\"let lab of item.itemTable; let d = index\">\n                            <div class=\"col-md-4 mb-4 td\"></div>\n                          </div>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-1 mb-1\">\n                <ul class=\"confg-controls\">\n                  <li><div [colorPicker]=\"colorQuestionAlone5\" (colorPickerChange)=\"colorQuestionAlone5 = $event\" class=\"rad-color\" [style.background]=\"colorQuestion\" [style.background]=\"colorQuestionAlone5\" id=\"color-question\" title=\"Tarjeta Pregunta\"></div></li>\n                  <li><div [colorPicker]=\"TxtQuestionAlone5\" (colorPickerChange)=\"TxtQuestionAlone5 = $event\" class=\"rad-color\" [style.background]=\"TxtQuestionAlone5\" [style.background]=\"TxtQuestion\"id=\"color-question\" title=\"Texto Pregunta\"></div></li> \n                  <li> <fa-icon [icon]=\"faClone\" class=\"conf-icon\"  title=\"Clonar pregunta\" ></fa-icon></li>\n                  <li> <fa-icon [icon]=\"faEdit\" class=\"conf-icon\"  title=\"Editar pregunta\" ></fa-icon></li>    \n                  <li><fa-icon [icon]=\"faPlus\" class=\"conf-icon\" title=\"Agregar Opción\" (click)=\"addOpt(item.idQuestion,'itemTable')\"></fa-icon></li>\n                </ul>\n              </div>\n            </div> \n\n        </div>\n\n    </ng-template>\n</ngx-sortable>\n\n</div>\n\n<div class=\"ctr-btns\">\n  <ul>\n    <li><fa-icon [icon]=\"faArrowAltCircleLeft\" class=\"plus-question\"  title=\"Atrás\" *ngIf=\"step == 'basic-parameters'\" (click)=\"steps('configuration-questions')\" ></fa-icon></li>\n    <li><fa-icon [icon]=\"faArrowAltCircleRight\" class=\"plus-question\"  title=\"Seguiente\" *ngIf=\"step == 'basic-parameters'\" (click)=\"steps('basic-parameters')\" ></fa-icon></li>\n    <li><fa-icon [icon]=\"faPlusCircle\" class=\"plus-question\"  title=\"Agregar Pregunta\" *ngIf=\"step == 'basic-parameters'\" (click)=\"steps('basic-parameters')\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"></fa-icon></li>\n  </ul>\n</div>\n\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n\n<form [formGroup]=\"formType\" (ngSubmit)=\"typeQuestion()\" class=\"needs-validation\" novalidate>\n\n  <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Nueva Pregunta</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n\n      <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n\n              <div class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"customRadio1\" name=\"typeQuestion\" class=\"custom-control-input\" formControlName=\"typeQuestion\">\n                <label class=\"custom-control-label\" for=\"customRadio1\">Pregunta Abierta</label>\n              </div>\n\n            </div>\n            <div class=\"col-md-6\">\n              <img src=\"https://i.pinimg.com/originals/da/c8/d4/dac8d4cb582558f281b6d0e1711c4838.gif\" class=\"img-quiestion-type\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n\n              <div class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"customRadio2\" name=\"typeQuestion\" class=\"custom-control-input\">\n                <label class=\"custom-control-label\" for=\"customRadio2\">Selección Multiple</label>\n              </div>\n\n            </div>\n            <div class=\"col-md-6\">\n              <img src=\"https://i.pinimg.com/originals/b9/83/17/b98317fb6a4557174555cd3330aba443.gif\" class=\"img-quiestion-type\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n\n              <div class=\"custom-control custom-radio\">\n                <input type=\"radio\" id=\"customRadio3\" name=\"typeQuestion\" class=\"custom-control-input\">\n                <label class=\"custom-control-label\" for=\"customRadio3\">Selección Multiple (tabla)</label>\n              </div>\n\n            </div>\n            <div class=\"col-md-6\">\n              <img src=\"https://i.pinimg.com/originals/9e/58/94/9e58940d4cafe94af5521b018e8a601e.gif\" class=\"img-quiestion-type\">\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar</button>\n      </div>\n    </div>\n  </div>\n\n</form>\n\n</div>\n\n\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n\n  <form [formGroup]=\"formType\" (ngSubmit)=\"typeQuestion()\" class=\"needs-validation\" novalidate>\n  \n    <div class=\"modal-dialog modal-lg modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Nueva Pregunta</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n  \n        <div class=\"modal-body\">\n          <div class=\"container-fluid\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n  \n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio1\" name=\"typeQuestion\" class=\"custom-control-input\" formControlName=\"typeQuestion\">\n                  <label class=\"custom-control-label\" for=\"customRadio1\">Pregunta Abierta</label>\n                </div>\n  \n              </div>\n              <div class=\"col-md-6\">\n                <img src=\"https://i.pinimg.com/originals/da/c8/d4/dac8d4cb582558f281b6d0e1711c4838.gif\" class=\"img-quiestion-type\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n  \n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio2\" name=\"typeQuestion\" class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"customRadio2\">Selección Multiple</label>\n                </div>\n  \n              </div>\n              <div class=\"col-md-6\">\n                <img src=\"https://i.pinimg.com/originals/b9/83/17/b98317fb6a4557174555cd3330aba443.gif\" class=\"img-quiestion-type\">\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n  \n                <div class=\"custom-control custom-radio\">\n                  <input type=\"radio\" id=\"customRadio3\" name=\"typeQuestion\" class=\"custom-control-input\">\n                  <label class=\"custom-control-label\" for=\"customRadio3\">Selección Multiple (tabla)</label>\n                </div>\n  \n              </div>\n              <div class=\"col-md-6\">\n                <img src=\"https://i.pinimg.com/originals/9e/58/94/9e58940d4cafe94af5521b018e8a601e.gif\" class=\"img-quiestion-type\">\n              </div>\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"modal-footer\">\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar</button>\n        </div>\n      </div>\n    </div>\n  \n  </form>\n  \n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/list-quiz/list-quiz.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/list-quiz/list-quiz.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminListQuizListQuizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"cont-step animated fadeIn\">\n    <h1>Encuestas</h1>\n</div>\n\n<div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\">\n  \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n  \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n      </ng-container>\n  \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/login/login.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/login/login.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card animated fadeInDown mens-data col-md-4\">\n    <div class=\"card-body\">\n        <form (ngSubmit)=\"getIn()\" #forma=\"ngForm\">\n            <div class=\"form-group \">\n              <label for=\"exampleInputEmail1\">Correo</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" [(ngModel)]=\"user.email\" name=\"email\" required>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Contraseña</label>\n              <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" [(ngModel)]=\"user.password\" name=\"password\" required>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\" >Entrar</button>\n          </form>\n\n    </div>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"msg\">\n        {{msg}}\n      </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questions/questions.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/questions/questions.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsQuestionsQuestionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- Carga de preguntas\n<input type=\"file\" #csvReaderQuestions name=\"Upload CSV\" id=\"txtFileUpload\" (change)=\"uploadListener($event,'questions')\" accept=\".csv\" />\nCarga de Usuarios\n<input type=\"file\" #csvReaderUsers name=\"Upload CSV\" id=\"txtFileUpload\" (change)=\"uploadListener($event,'users')\" accept=\".csv\" /> -->\n\n<div class=\"card animated fadeInDown mens-data\" *ngIf=\"showMessage\">\n  <div class=\"card-body cnt-message\">\n    <p class=\"card-text\" [innerHTML]=\"message\" translate=\"no\"></p>\n    <button type=\"button\" class=\"btn btn-primary bg-col\" (click)=\"openInputs()\">Continuar</button>\n  </div>\n</div>\n\n<div class=\"card animated fadeIn mens-data\" *ngIf=\"showInput\">\n  <div class=\"cnt-message\">\n    <div class=\"form-group\" *ngFor=\"let item of inputs\">\n      <input [type]=\"item.type\" class=\"form-control\" [id]=\"item.name\" aria-describedby=\"emailHelp\" [placeholder]=\"item.placeholder\" #camp>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary bg-col\" (click)=\"openQuiz()\">Enviar</button>\n  </div>\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"showValUser\">\n    Este usuario no existe\n  </div>\n</div>\n\n\n<form class=\"list-cont-questions\" *ngIf=\"showQuestions\" (ngSubmit)=\"send(forma)\" #forma novalidate>\n<ol>\n<div *ngFor=\"let item of questions; let pre = index\">\n\n  <div class=\"form-group animated bounceInUp fast\" [ngClass]=\"{'active': stateBox == 1,'valAct' : validRequired(item)}\"  *ngIf=\"item.id != '0.2' && validateQuestion(item.typeDesign,item.questions.option) == 0 \" >\n\n    <!--<label class=\"item-num\">{{ preNumber }}</label>-->\n     <li class=\"txt-question\" for=\"formGroupExampleInput\" [innerHTML]=\"item.questions.message\" translate=\"no\"></li>\n\n    <div class=\"list-check\" *ngIf=\"item.typeDesign == 'check'\">\n      <div class=\"form-check form-check-inline\" *ngFor=\"let opt of item.questions.option[0].options; let op = index\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"question{{ item.id }}\"  [value]=\"opt\"  id=\"inlineCheckbox{{ item.id }}-{{ op }}\" (change)=\"saveQuiz(item,data,item.questions.message,op,'check')\"   #data>\n        <label class=\"form-check-label\" for=\"inlineCheckbox{{ item.id }}-{{ op }}\"><span  translate=\"no\">{{ opt }}</span></label>\n      </div>\n    </div>\n\n    <div class=\"list-check\" *ngIf=\"item.typeDesign == 'check-mensaje'\">\n      <div class=\"row\">\n        <div *ngFor=\"let m of item.questions.option; let i = index\" >\n          <div *ngIf=\"conditional(m.conditional) == 0\" >\n              <div *ngIf=\"m.typeDesign == 'label'\" class=\"label-option\">\n                    {{ m.options }}\n              </div>\n              <div *ngIf=\"m.typeDesign == 'value'\"  class=\"items-options-list\">\n                <div class=\"form-check form-check-inline\" *ngFor=\"let opData of m.options; let idOpList = index\" >\n                 <input class=\"form-check-input\" type=\"radio\" name=\"question{{ m.id }}\"  id=\"inlineCheckbox{{ m.id }}-{{ idOpList }}\" value=\"{{ opData }}\" (change)=\"saveQuiz(m,dataCkMensaje,item.questions.message,idOpList,'check-mensaje',item.questions.option)\" #dataCkMensaje>\n                 <label class=\"form-check-label\" for=\"inlineCheckbox{{ m.id }}-{{ idOpList }}\" translate=\"no\">{{ opData }}</label>\n                </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"list-check-box two-box\"  *ngIf=\"item.typeDesign == 'tabla'\">\n      <div class=\"row\">\n      <div class=\"form-check box-action col-12 col-sm-3 databx0-{{ op }}-{{ item.id }}\" *ngFor=\"let opt of item.questions.option[0].options; let op = index\" [ngClass]=\"{'action': indexOfElement(  item, 'databx0-'+op+'-'+item.id, 'table' ) != -1 }\" >\n        <input class=\"form-check-input\" type=\"checkbox\" id=\"box{{ item.id }}-{{ op }}\" value=\"{{ opt }}\" (click)=\"saveQuiz(item,dataTable,item.questions.message,op,'table',0,0)\" #dataTable>\n        <label class=\"form-check-label\" for=\"box{{ item.id }}-{{ op }}\" translate=\"no\">{{ opt }}</label>\n      </div>\n      </div>\n    </div>\n\n    <div class=\"list-check-box two-box tb-mul\" *ngIf=\"item.typeDesign == 'tabla-multiple'\">\n\n      <div class=\"scroll-table\">\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-2\">\n          </div>\n\n          <div class=\"col-12 col-sm-8 head-box\">\n\n            <div *ngFor=\"let m of item.questions.option; let i = index\" >\n              <div *ngIf=\"m.id == '8.2' || m.id == '9.2' \">\n                <div class=\"form-check form-check-inline col-12 col-sm-1 min-tab\"  *ngFor=\"let opData of m.options; let idOpList = index\">\n                  <label class=\"form-check-label\" for=\"box1\" translate=\"no\">{{ opData }}</label>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"col-12 col-sm-4 data-box cont-left \">\n\n            <div *ngFor=\"let li of item.questions.option; let o = index\" [ngClass]=\"{'col-sm-12 head-left': li.typeDesign == 'label'}\" class=\"ali-box\"  >\n\n              <div *ngIf=\"li.typeDesign == 'label' && conditional(li.conditional) == 0\">\n                <div class=\"form-check form-check-inline col-12 col-sm-12\" >\n                  <label class=\"form-check-label\" [innerHTML]=\"li.options\" translate=\"no\"></label>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n          <div class=\"col-12 col-sm-10 opt-right\">\n\n            <div *ngFor=\"let li of item.questions.option; let o = index\" [ngClass]=\"{'col-sm-10': li.typeDesign == 'value'}\" class=\"ali-box\"  >\n\n                <div *ngIf=\"li.typeDesign == 'value' && conditional(li.conditional) == 0\" class=\"col-sm-12 cn-box \" >\n\n                  <div class=\"asc form-check form-check-inline col-12 col-sm-3 chl-bok databx{{ item.id }}-{{ da }}-{{ li.id }}\"  *ngFor=\"let opData of li.options; let da = index\"  >\n                  <div (click)=\"saveQuiz(li,opData,item.questions.message,da,'table-multiple',item.questions.option,item.id)\" class=\"event-cli\" [ngClass]=\"{'action': indexOfElement( li,'databx'+item.id+'-'+da+'-'+li.id, 'table-multiple' ) != -1 }\">\n                    <input class=\"form-check-input\" type=\"checkbox\" id=\"box{{ item.id }}-{{ da }}-{{ li.id }}\" value=\"{{ opData }}\"  #dataTableMulti>\n                    <label class=\"form-check-label\" for=\"box{{ item.id }}-{{ da }}-{{ li.id }}\"></label>\n                  </div>\n                  </div>\n\n                </div>\n\n            </div>\n\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n\n    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" *ngIf=\"item.typeDesign == 'textbox'\" rows=\"3\" (keyup)=\"saveQuiz(item,dataText,item.questions.message,'','text')\" #dataText></textarea>\n\n  </div>\n\n  </div>\n\n</ol>\n\n<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorValid\">\n  <h4 class=\"alert-heading text-center\"> Las preguntas resaltadas en rojo son oblgatorias  </h4>\n</div>\n<div class=\"alert alert-success\" role=\"alert\" *ngIf=\"sentTrue\">\n  <h4 class=\"alert-heading text-center\"> Encuesta enviada correctamente </h4>\n</div>\n\n  <button type=\"submit\" class=\"btn btn-primary btn-lg bg-col float-right\" >Enviar</button>\n\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsReportReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div (click)=\"exportTableToExcel('tblReporte','prueba')\">descargar</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-4\">\n      <h1>Reportes</h1>\n    </div>\n    <!--<div class=\"col-8\"  >\n      <canvas  baseChart *ngIf=\"doughnutChartData\" [data]=\"doughnutChartData\"  chart-labels=\"labels\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n    </div>-->\n    <div class=\"col\">\n\n     <!--<table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Nombre</th>\n            <th scope=\"col\">E-mail</th>\n            <th scope=\"col\">Macro Proceso</th>\n            <th scope=\"col\">Cargo</th>\n            <th scope=\"col\">N° preguntas contestadas</th>\n            <th scope=\"col\">Fecha</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of dataReport; let i = index\">\n            <th scope=\"row\">{{ i + 1}}</th>\n            <td>{{ item.name }}</td>\n            <td>{{ item.email }}</td>\n            <td>{{ item.macro_process}}</td>\n            <td>{{ item.rol}}</td>\n            <td  *ngIf=\"item.question\" >\n                <label *ngFor=\"let dt of item.question | keyArray; let i = index\">\n                  {{ numQuestion(item.question[dt].id) }}\n                </label>\n            </td>\n            <td *ngIf=\"item.question\">{{ item.question[0].date  | date:'d/M/yy - h:mm:ss a ' }}</td>\n          </tr>\n        </tbody>\n      </table>-->\n\n      <table class=\"table table-striped tb-report\" id=\"tblReporte\">\n         <thead>\n           <tr>\n             <th scope=\"col\">Nombre</th>\n             <th scope=\"col\">E-mail</th>\n             <th scope=\"col\">Macro Proceso</th>\n             <th scope=\"col\">Cargo</th>\n             <th scope=\"col\">Fecha</th>\n\n             <label *ngFor=\"let qt of dataQuestions\" class=\"cn-leb\">\n\n               <label *ngIf=\"qt.id > 5\" class=\"cn-leb\">\n              <!-- <label  class=\"cn-leb\">-->\n\n\n                <!-- <th class=\"msg\">{{ qt.questions.message }}</th>-->\n                 <label *ngFor=\"let op of qt.questions.option | keyArray; let o = index\" class=\"cn-leb\">\n                    <th class=\"id\" *ngIf=\"qt.questions.option[o].typeDesign == 'label'\">{{ qt.id }}</th>\n                   <th *ngIf=\"qt.questions.option[o].typeDesign == 'label'\" class=\"opt lab-text\">{{ qt.questions.option[o].options }}</th>\n\n                   <label *ngIf=\"qt.questions.option[o].typeDesign != 'label'\" class=\"cn-leb\">\n                     <label *ngFor=\"let tn of qt.questions.option[o].options | keyArray; let t = index\" class=\"cn-leb\">\n                       <th class=\"opt\">{{ qt.questions.option[o].options[t] }}</th>\n                     </label>\n                   </label>\n\n                 </label>\n\n                 </label>\n\n             </label>\n\n           </tr>\n         </thead>\n         <tbody>\n           <label  *ngFor=\"let item of dataReport; let con = index\" class=\"cn-leb\">\n           <!-- <tr *ngIf=\"con >= 260 && con <= 270\"> repo 2-->\n           <tr *ngIf=\"con >= 220 && con <= 230\">\n             <!--<label class=\"cn-leb\" *ngIf=\"con >= 320 && con <= 330\"> PRIMER BD-->\n             <label class=\"cn-leb\" >\n\n             <td>{{ item.name }}</td>\n             <td>{{ item.email }}</td>\n             <td>{{ item.macro_process}}</td>\n             <td>{{ item.rol }}</td>\n             <td *ngIf=\"item.question\">{{ item.question[0].date | date:'d/M/yy - h:mm:ss a ' }}</td>\n\n             <label *ngFor=\"let qt of dataQuestions\" class=\"cn-leb\">\n               <label *ngFor=\"let resp of item.question | keyArray; let r = index\" class=\"cn-leb\">\n\n                 <label  class=\"cn-leb\">\n\n                     <!--<label *ngIf=\"item.question[r].id == qt.id\" class=\"cn-leb\">\n                       <td class=\"id\">{{ qt.id }}</td>\n                       <td class=\"msg\">{{ qt.questions.message }}</td>\n                     </label>-->\n\n\n                     <label *ngFor=\"let op of qt.questions.option | keyArray; let o = index\" class=\"cn-leb\">\n                            <!-- <label *ngIf=\"item.question[r].id == qt.id\" class=\"cn-leb\">\n                               <label *ngIf=\"qt.questions.option[o].typeDesign != 'label'\" class=\"cn-leb\">\n                                 <label *ngFor=\"let tn of qt.questions.option[o].options | keyArray; let t = index\" class=\"cn-leb\">\n                                   <label *ngIf=\"item.question[r].options == qt.questions.option[o].options[t]\" class=\"cn-leb col-check\">\n                                     <td class=\"opt\">{{ item.question[r].options }}</td>\n                                   </label>\n                                   <td *ngIf=\"item.question[r].options != qt.questions.option[o].options[t]\" class=\"opt\"></td>\n                                 </label>\n                               </label>\n                             </label>-->\n\n                             <!-- PREGUNTAS DE LA 6 A LA 9 -->\n\n                            <label *ngIf=\"item.question[r].id == qt.questions.option[o].id\" class=\"cn-leb\">\n\n                               <label class=\"cn-leb\">\n                                 <td class=\"id\">{{ qt.id }}</td>\n                                <!-- <td class=\"msg\">{{ qt.questions.message }}</td>-->\n                               </label>\n\n                             </label>\n\n\n                             <label *ngIf=\"item.question[r].id == qt.questions.option[o].id\" class=\"cn-leb\">\n\n                                 <td class=\"opt lab-text\">{{ dataItem(item.question[r].option?.label) }}</td>\n\n                                 <label *ngIf=\"item.question[r].option.options\" class=\"cn-leb\">\n                                   <label *ngFor=\"let tn of qt.questions.option[o].options | keyArray; let t = index\" class=\"cn-leb\">\n                                     <label *ngIf=\"item.question[r].option.options == qt.questions.option[o].options[t]\" class=\"cn-leb col-check\">\n                                       <td class=\"opt\">{{ item.question[r].option.options }}</td>\n                                     </label>\n                                     <td *ngIf=\"item.question[r].option.options != qt.questions.option[o].options[t]\" class=\"opt\"></td>\n                                   </label>\n                                 </label>\n\n                             </label>\n\n                     </label> <!--Opciones de la estructura-->\n\n                 </label> <!-- fecha -->\n               </label> <!-- lista de respuestas -->\n             </label> <!-- Estructura -->\n\n\n             <!--<label *ngFor=\"let k of item.question | keyArray; let i = index\" class=\"cn-leb\">\n               <td>{{ item.question[i].id }}</td>\n               <td>{{ item.question[i].message }}</td>\n               <td *ngIf=\"item.question[i].options\">{{ item.question[i].options }}</td>\n               <td >{{ item.question[i].option?.label }}</td>\n               <td>{{ item.question[i].option?.options }}</td>\n             </label>-->\n\n             </label>\n\n           </tr>\n           </label>\n         </tbody>\n       </table>\n\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.ts":
  /*!********************************!*\
    !*** ./src/app/app-routing.ts ***!
    \********************************/

  /*! exports provided: APP_ROUTES */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function () {
      return APP_ROUTES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/questions/questions.component */
    "./src/app/components/questions/questions.component.ts");
    /* harmony import */


    var _components_report_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/report/report.component */
    "./src/app/components/report/report.component.ts");
    /* harmony import */


    var _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/admin/login/login.component */
    "./src/app/components/admin/login/login.component.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_sigout_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/sigout.service */
    "./src/app/services/sigout.service.ts");
    /* harmony import */


    var _components_admin_config_questions_config_questions_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/admin/config-questions/config-questions.component */
    "./src/app/components/admin/config-questions/config-questions.component.ts");
    /* harmony import */


    var _components_admin_list_quiz_list_quiz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/admin/list-quiz/list-quiz.component */
    "./src/app/components/admin/list-quiz/list-quiz.component.ts");

    var ROUTES = [{
      path: 'report',
      component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"]
    }, {
      path: 'login',
      component: _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
      canActivate: [_services_sigout_service__WEBPACK_IMPORTED_MODULE_6__["SigoutService"]]
    }, {
      path: 'list-quiz',
      component: _components_admin_list_quiz_list_quiz_component__WEBPACK_IMPORTED_MODULE_8__["ListQuizComponent"],
      canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    }, {
      path: 'config-questions',
      component: _components_admin_config_questions_config_questions_component__WEBPACK_IMPORTED_MODULE_7__["ConfigQuestionsComponent"],
      canActivate: [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    }, {
      path: '**',
      pathMatch: 'full',
      component: _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_2__["QuestionsComponent"]
    } // { path: '**', pathMatch: 'full' , redirectTo: 'preguntas'},
    ];

    var APP_ROUTES = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(ROUTES);
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'encuestas';
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/questions/questions.component */
    "./src/app/components/questions/questions.component.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing */
    "./src/app/app-routing.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _pipes_key_array_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pipes/key-array.pipe */
    "./src/app/pipes/key-array.pipe.ts");
    /* harmony import */


    var nl2br_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! nl2br-pipe */
    "./node_modules/nl2br-pipe/__ivy_ngcc__/fesm2015/nl2br-pipe.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _components_report_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/report/report.component */
    "./src/app/components/report/report.component.ts");
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/admin/login/login.component */
    "./src/app/components/admin/login/login.component.ts");
    /* harmony import */


    var _components_admin_config_questions_config_questions_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/admin/config-questions/config-questions.component */
    "./src/app/components/admin/config-questions/config-questions.component.ts");
    /* harmony import */


    var ngx_color_picker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ngx-color-picker */
    "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var ngx_sortable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-sortable */
    "./node_modules/ngx-sortable/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var _components_admin_list_quiz_list_quiz_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/admin/list-quiz/list-quiz.component */
    "./src/app/components/admin/list-quiz/list-quiz.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_questions_questions_component__WEBPACK_IMPORTED_MODULE_4__["QuestionsComponent"], _pipes_key_array_pipe__WEBPACK_IMPORTED_MODULE_9__["KeyArrayPipe"], _components_report_report_component__WEBPACK_IMPORTED_MODULE_12__["ReportComponent"], _components_admin_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _components_admin_config_questions_config_questions_component__WEBPACK_IMPORTED_MODULE_15__["ConfigQuestionsComponent"], _components_admin_list_quiz_list_quiz_component__WEBPACK_IMPORTED_MODULE_19__["ListQuizComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestoreModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["APP_ROUTES"], nl2br_pipe__WEBPACK_IMPORTED_MODULE_10__["Nl2BrPipeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_13__["ChartsModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_16__["ColorPickerModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"], ngx_sortable__WEBPACK_IMPORTED_MODULE_18__["NgxSortableModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_21__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/admin/config-questions/config-questions.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/components/admin/config-questions/config-questions.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminConfigQuestionsConfigQuestionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vY29uZmlnLXF1ZXN0aW9ucy9jb25maWctcXVlc3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/admin/config-questions/config-questions.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/admin/config-questions/config-questions.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ConfigQuestionsComponent */

  /***/
  function srcAppComponentsAdminConfigQuestionsConfigQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigQuestionsComponent", function () {
      return ConfigQuestionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

    var ConfigQuestionsComponent = /*#__PURE__*/function () {
      function ConfigQuestionsComponent() {
        _classCallCheck(this, ConfigQuestionsComponent);

        this.step = "configuration-questions";
        this.faClone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClone"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faEdit"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSave"];
        this.faArrowAltCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowAltCircleRight"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusCircle"];
        this.faSortDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSortDown"];
        this.faSortUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faSortUp"];
        this.faArrowAltCircleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowAltCircleLeft"];
        this.faAngleLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleLeft"];
        this.faAngleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAngleRight"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"];
        this.question = {
          logo: null
        };
        this.quiz = {
          id: 1,
          question: [{
            idQuestion: 1,
            description: 'Pregunta 1',
            typeQuestion: 'itemTxt'
          }, {
            idQuestion: 2,
            description: 'Pregunta 2',
            typeQuestion: 'itemOpt',
            itemOpt: [{
              name: ''
            }]
          }, {
            idQuestion: 3,
            description: 'Pregunta 3',
            typeQuestion: 'itemCubi',
            itemCubi: [{
              name: ''
            }]
          }, {
            idQuestion: 4,
            description: 'Pregunta 4',
            typeQuestion: 'itemCheckMult',
            itemCheckMult: [{
              label: '',
              options: [{
                name: ''
              }]
            }]
          }, {
            idQuestion: 5,
            description: 'Pregunta 5',
            typeQuestion: 'itemTxtFree'
          }, {
            idQuestion: 6,
            description: 'Pregunta 6',
            typeQuestion: 'itemTable',
            itemTable: [{
              label: 'Formación y Desarrollo',
              options: [{
                name: ''
              }]
            }]
          }]
        };
        this.listStyle = {
          width: '100%'
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'nameQuestion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.formType = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'typeQuestion': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }

      _createClass(ConfigQuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "steps",
        value: function steps(after) {
          // basic-parameters
          this.step = after;
          console.log(this.step);
        }
      }, {
        key: "typeQuestion",
        value: function typeQuestion() {
          console.log("dsd");
        }
      }, {
        key: "listOrderChanged",
        value: function listOrderChanged(data) {
          console.log('dat', data);
        }
      }, {
        key: "colorPicker",
        value: function colorPicker(txt, id) {
          console.log(txt, id);
          return txt + id;
        }
      }, {
        key: "addOptLabel",
        value: function addOptLabel(idQuestion, type, label) {
          console.log("idQuestion", idQuestion);
          console.log("type", type);
          console.log("label", label);
          idQuestion = idQuestion - 1;
          console.log("pregunta", this.quiz.question[idQuestion][type]);
          this.quiz.question[idQuestion][type][label].options.push({
            name: ''
          });
        }
      }, {
        key: "addOpt",
        value: function addOpt(idQuestion, type) {
          idQuestion = idQuestion - 1;

          if (type == 'itemCheckMult' || type == 'itemTable') {
            this.quiz.question[idQuestion][type].push({
              label: '',
              options: [{
                name: ''
              }]
            });
          } else {
            this.quiz.question[idQuestion][type].push({
              name: ''
            });
          }
        }
      }, {
        key: "removeOpt",
        value: function removeOpt(idQuestion, type, i) {
          idQuestion = idQuestion - 1;
          this.quiz.question[idQuestion][type].splice(i, 1);
        }
      }]);

      return ConfigQuestionsComponent;
    }();

    ConfigQuestionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-config-questions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./config-questions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/config-questions/config-questions.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./config-questions.component.css */
      "./src/app/components/admin/config-questions/config-questions.component.css"))["default"]]
    })], ConfigQuestionsComponent);
    /***/
  },

  /***/
  "./src/app/components/admin/list-quiz/list-quiz.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/admin/list-quiz/list-quiz.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminListQuizListQuizComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbGlzdC1xdWl6L2xpc3QtcXVpei5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/admin/list-quiz/list-quiz.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/admin/list-quiz/list-quiz.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ListQuizComponent */

  /***/
  function srcAppComponentsAdminListQuizListQuizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListQuizComponent", function () {
      return ListQuizComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");

    var ListQuizComponent = /*#__PURE__*/function () {
      function ListQuizComponent() {
        _classCallCheck(this, ListQuizComponent);

        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](ELEMENT_DATA);
      }

      _createClass(ListQuizComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.dataSource.paginator = this.paginator;
        }
      }]);

      return ListQuizComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    })], ListQuizComponent.prototype, "paginator", void 0);
    ListQuizComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-quiz',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-quiz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/list-quiz/list-quiz.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-quiz.component.css */
      "./src/app/components/admin/list-quiz/list-quiz.component.css"))["default"]]
    })], ListQuizComponent);
    var ELEMENT_DATA = [{
      position: 1,
      name: 'Hydrogen',
      weight: 1.0079,
      symbol: 'H'
    }, {
      position: 2,
      name: 'Helium',
      weight: 4.0026,
      symbol: 'He'
    }, {
      position: 3,
      name: 'Lithium',
      weight: 6.941,
      symbol: 'Li'
    }, {
      position: 4,
      name: 'Beryllium',
      weight: 9.0122,
      symbol: 'Be'
    }, {
      position: 5,
      name: 'Boron',
      weight: 10.811,
      symbol: 'B'
    }, {
      position: 6,
      name: 'Carbon',
      weight: 12.0107,
      symbol: 'C'
    }, {
      position: 7,
      name: 'Nitrogen',
      weight: 14.0067,
      symbol: 'N'
    }, {
      position: 8,
      name: 'Oxygen',
      weight: 15.9994,
      symbol: 'O'
    }, {
      position: 9,
      name: 'Fluorine',
      weight: 18.9984,
      symbol: 'F'
    }, {
      position: 10,
      name: 'Neon',
      weight: 20.1797,
      symbol: 'Ne'
    }, {
      position: 11,
      name: 'Sodium',
      weight: 22.9897,
      symbol: 'Na'
    }, {
      position: 12,
      name: 'Magnesium',
      weight: 24.305,
      symbol: 'Mg'
    }, {
      position: 13,
      name: 'Aluminum',
      weight: 26.9815,
      symbol: 'Al'
    }, {
      position: 14,
      name: 'Silicon',
      weight: 28.0855,
      symbol: 'Si'
    }, {
      position: 15,
      name: 'Phosphorus',
      weight: 30.9738,
      symbol: 'P'
    }, {
      position: 16,
      name: 'Sulfur',
      weight: 32.065,
      symbol: 'S'
    }, {
      position: 17,
      name: 'Chlorine',
      weight: 35.453,
      symbol: 'Cl'
    }, {
      position: 18,
      name: 'Argon',
      weight: 39.948,
      symbol: 'Ar'
    }, {
      position: 19,
      name: 'Potassium',
      weight: 39.0983,
      symbol: 'K'
    }, {
      position: 20,
      name: 'Calcium',
      weight: 40.078,
      symbol: 'Ca'
    }];
    /***/
  },

  /***/
  "./src/app/components/admin/login/login.component.css":
  /*!************************************************************!*\
    !*** ./src/app/components/admin/login/login.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAdminLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/admin/login/login.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/admin/login/login.component.ts ***!
    \***********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsAdminLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/login.service */
    "./src/app/services/login.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(_lgn, router) {
        _classCallCheck(this, LoginComponent);

        this._lgn = _lgn;
        this.router = router;
        this.msg = "";
        this.user = {
          email: "",
          password: ""
        };
      }

      _createClass(LoginComponent, [{
        key: "getIn",
        value: function getIn() {
          var _this = this;

          this._lgn.login(this.user).then(function (res) {
            localStorage.setItem("user", res.user.email);

            _this.router.navigate(['config-questions']);
          })["catch"](function (err) {
            console.log(err);

            if (err.code == "auth/user-not-found") {
              _this.msg = "Usuario incorrecto";
            } else if (err.code == "auth/wrong-password") {
              _this.msg = "Contraseña incorrecta";
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.css */
      "./src/app/components/admin/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/questions/questions.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/components/questions/questions.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsQuestionsQuestionsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcXVlc3Rpb25zL3F1ZXN0aW9ucy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/questions/questions.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/questions/questions.component.ts ***!
    \*************************************************************/

  /*! exports provided: QuestionsComponent */

  /***/
  function srcAppComponentsQuestionsQuestionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function () {
      return QuestionsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_models_questions_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/questions.module */
    "./src/app/models/questions.module.ts");
    /* harmony import */


    var src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/questions.service */
    "./src/app/services/questions.service.ts");
    /* harmony import */


    var src_app_models_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/models/user.module */
    "./src/app/models/user.module.ts");
    /* harmony import */


    var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/users.service */
    "./src/app/services/users.service.ts");
    /* harmony import */


    var src_app_services_response_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/response.service */
    "./src/app/services/response.service.ts");
    /* harmony import */


    var src_app_models_response_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/models/response.module */
    "./src/app/models/response.module.ts");

    var QuestionsComponent = /*#__PURE__*/function () {
      //@ViewChild('dcheck', { static: false })  dcheck:any;
      function QuestionsComponent(_questions, _users, _response, renderer) {
        var _this2 = this;

        _classCallCheck(this, QuestionsComponent);

        this._questions = _questions;
        this._users = _users;
        this._response = _response;
        this.renderer = renderer;
        this.showQuestions = false;
        this.showInput = false;
        this.showMessage = true;
        this.showValUser = false;
        this.listResponse = new src_app_models_response_module__WEBPACK_IMPORTED_MODULE_7__["ResponseModule"]();
        this.svQuestion = [];
        this.sentTrue = false;
        this.errorValid = false;
        this.contValcheck = [];
        this.contRepeat = [];
        this.preNumber = 1;
        this.headTop = 1;
        this.arrayAcum = [];
        this.ad = [];
        this.listIdQues = [];
        this.records = [];

        this._questions.getMessage().subscribe(function (res) {
          _this2.message = res[0].message;
          _this2.inputs = res[0].data;
        });

        this._questions.getQuestions().subscribe(function (data) {
          _this2.questions = data;
        });
      }

      _createClass(QuestionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "send",
        value: function send(forma) {
          this.listIdQues = [];
          var respOpti = this.listResponse.question;

          for (var i = 0; i < this.questions.length; i++) {
            if (this.questions[i].typeDesign == "textbox") {
              if (this.questions[i].mandatory == "true") {
                this.listIdQues.push(this.questions[i].id);
              }
            } else {
              var listOp = this.questions[i].questions.option;

              for (var d = 0; d < listOp.length; d++) {
                if (listOp[d].mandatory == "true") {
                  var daup = listOp[d].id.split(".");

                  if (daup[0]) {
                    this.listIdQues.push(Number(daup[0]));
                  } else {
                    this.listIdQues.push(listOp[d].id);
                  }
                }
              }
            }
          } // Cargar respuestas


          var dat;

          if (typeof respOpti !== 'undefined') {
            for (var r = 0; r < respOpti.length; r++) {
              try {
                var respSplit = respOpti[r].id.split(".");
                dat = this.listIdQues.indexOf(Number(respSplit[0]));
              } catch (error) {
                dat = this.listIdQues.indexOf(respOpti[r].id);
              }

              if (dat != -1) {
                this.listIdQues.splice(dat, 1);
              }
            }
          } else {
            this.errorValid = true;
          }

          if (this.listIdQues.length != 0) {
            this.errorValid = true;
          } else {
            this.errorValid = false;
            this.sentTrue = true;
          }
        }
      }, {
        key: "validRequired",
        value: function validRequired(item) {
          if (this.listIdQues.indexOf(item.id) != -1) {
            return true;
          }
        }
      }, {
        key: "saveQuiz",
        value: function saveQuiz(dataQuestion, options, question, idOp, typeQuestion, label, idtem) {
          var idQuestion = dataQuestion.id;
          var dataStruct;
          var calueOption = options.value;
          var datLabel;
          this.actBox = idtem + "-" + idOp + "-" + idQuestion;

          if (typeQuestion == "check-mensaje" || typeQuestion == "table-multiple") {
            var idQr = (idQuestion + "").split(".");
            var idLabel = parseFloat(idQr[1]) - 1;
            idLabel = idQr[0] + '.' + idLabel;

            for (var i = 0; i < label.length; i++) {
              if (label[i].id == idLabel) {
                if (label[i].typeDesign == 'label') {
                  datLabel = label[i].options;
                }
              }
            }
          }

          if (typeQuestion == "table" || typeQuestion == "check" || typeQuestion == "check-mensaje" || typeQuestion == "table-multiple") {
            if (typeQuestion == "check-mensaje" || typeQuestion == "table-multiple") {
              dataStruct = dataQuestion;
            } else {
              dataStruct = dataQuestion.questions;
            }

            if (typeQuestion == "table-multiple") {
              calueOption = options;
            } // AGREGAR O QUITAR SELECCION


            var valAction = dataStruct.valcheck.indexOf("databx" + idtem + '-' + idOp + '-' + idQuestion);

            if (valAction != -1) {
              // ELIMINAR LA SELECCION A LA QUE LE HAGO CLICK              
              dataStruct.valcheck.splice(valAction, 1);
              this.listResponse.question = this.pushQuestions(idQuestion, question, calueOption, new Date(), typeQuestion, datLabel, valAction);
            } else {
              // VALIDAR CANTIDAD DE OPCIONES POR PREGUNTA
              if (dataStruct.repeat > dataStruct.valcheck.length) {
                // AGREGA LA OPCION
                dataStruct.valcheck.push("databx" + idtem + '-' + idOp + '-' + idQuestion);
                this.listResponse.question = this.pushQuestions(idQuestion, question, calueOption, new Date(), typeQuestion, datLabel);
              } else {
                // SI SE PASA DE LA CANTIDAD DE OPCIONES PERMITIDAS , ELIMINA LA ULTIMA OPCION Y AGREGA LA NUEVA
                dataStruct.valcheck.splice(dataStruct.valcheck.length - 1, 1);
                dataStruct.valcheck.push("databx" + idtem + '-' + idOp + '-' + idQuestion);
                this.listResponse.question = this.pushQuestions(idQuestion, question, calueOption, new Date(), typeQuestion, datLabel, dataStruct.valcheck.length - 1);
              }
            } ////////////////////////////

          } else {
            this.listResponse.question = this.pushQuestions(idQuestion, question, calueOption, new Date(), typeQuestion, datLabel);
          }

          if (typeQuestion == "text") {
            this._response.updateResponsew(this.idDocumentFire, this.listResponse, 'add', '');
          } else {
            this._response.updateResponsew(this.idDocumentFire, this.listResponse, 'add', '');
          } //this.indexOfElement( dataQuestion,"databx"+idtem+'-'+idOp+'-'+idQuestion,typeQuestion );

        }
      }, {
        key: "pushQuestions",
        value: function pushQuestions(idQuestion, message, options, date, typeQuestion, label, idSplice) {
          var pass = true;
          var saveQuestion = {};

          if (typeQuestion == "table-multiple" || typeQuestion == "table" || typeQuestion == "check" || typeQuestion == "check-mensaje" || typeQuestion == "text") {
            for (var i = 0; i < this.svQuestion.length; i++) {
              if (this.svQuestion[i].id == idQuestion) {
                if (typeof idSplice !== 'undefined') {
                  if (typeQuestion == "check-mensaje" || typeQuestion == "table-multiple") {
                    this.svQuestion[i].option.options.splice(idSplice, 1);
                    this.svQuestion[i].option.options.push(options);
                  } else {
                    this.svQuestion[i].option.splice(idSplice, 1);
                    this.svQuestion[i].option.push(options);
                  }
                } else {
                  if (typeQuestion == "check-mensaje" || typeQuestion == "table-multiple") {
                    this.svQuestion[i].option.options.push(options);
                  } else if (typeQuestion == "text") {
                    this.svQuestion[i].text = options;
                  } else {
                    this.svQuestion[i].option.push(options);
                  }
                }

                pass = false;
              }
            }
          }

          if (pass == true) {
            if (typeQuestion == "check-mensaje" || typeQuestion == "table-multiple") {
              saveQuestion.id = idQuestion;
              saveQuestion.message = message;
              saveQuestion.option = {
                label: label,
                options: [options]
              };
              saveQuestion.date = date;
            } else if (typeQuestion == "table" || typeQuestion == "check") {
              saveQuestion.option = [options];
              saveQuestion.id = idQuestion;
              saveQuestion.message = message;
              saveQuestion.date = date;
            } else if (typeQuestion == "text") {
              saveQuestion.id = idQuestion;
              saveQuestion.message = message;
              saveQuestion.text = options;
              saveQuestion.date = date;
            } else {
              saveQuestion.id = idQuestion;
              saveQuestion.message = message;
              saveQuestion.options = options;
              saveQuestion.date = date;
            }

            this.svQuestion.push(saveQuestion);
          }

          return this.svQuestion;
        }
      }, {
        key: "openQuiz",
        value: function openQuiz() {
          var _this3 = this;

          var email = this.camp.nativeElement.value;

          this._users.getUser(email).subscribe(function (data) {
            if (data.length > 0) {
              data = data[0];
              localStorage.setItem("name", data.name);
              localStorage.setItem("email", data.email);
              localStorage.setItem("macro_process", data.macro_process);
              localStorage.setItem("rol", data.rol);
              localStorage.setItem("id", data.id);
              _this3.listResponse.name = localStorage.getItem("name");
              _this3.listResponse.email = localStorage.getItem("email");
              _this3.listResponse.rol = localStorage.getItem("rol");
              _this3.listResponse.macro_process = localStorage.getItem("macro_process");
              _this3.listResponse.state = 0;

              _this3._response.addResponse(_this3.listResponse).then(function (data) {
                _this3.idDocumentFire = data.id;
              });

              _this3.showQuestions = true;
              _this3.showInput = false;
              _this3.showValUser = false;
            } else {
              _this3.showValUser = true;
            }
          });
        }
      }, {
        key: "indexOfElement",
        value: function indexOfElement(data, element, typeQuestion) {
          data.topB = 0;

          if (typeQuestion != "table-multiple") {
            return data.questions.valcheck.indexOf(element);
          } else {
            return data.valcheck.indexOf(element);
          }
        }
      }, {
        key: "conditional",
        value: function conditional(data) {
          if (data != "") {
            var typeCondition = data.split('|');
            var optionsCondition = typeCondition[1].split('|');
            optionsCondition = optionsCondition[0].split(',');
            var validCondition;

            switch (typeCondition[0]) {
              case 'rol':
                {
                  validCondition = optionsCondition.indexOf(localStorage.getItem('rol'));
                  break;
                }
            }

            if (validCondition != -1) {
              validCondition = 0;
            }

            return validCondition;
          } else {
            return -1;
          }
        }
      }, {
        key: "openInputs",
        value: function openInputs() {
          this.showInput = true;
          this.showMessage = false;
        }
      }, {
        key: "uploadListener",
        value: function uploadListener($event, type) {
          var _this4 = this;

          var text = [];
          var files = $event.srcElement.files;

          if (this.isValidCSVFile(files[0])) {
            var input = $event.target;
            var reader = new FileReader();
            reader.readAsText(input.files[0], 'ISO-8859-1');

            reader.onload = function () {
              var csvData = reader.result;
              var csvRecordsArray = csvData.split(/\r\n|\n/);

              var headersRow = _this4.getHeaderArray(csvRecordsArray);

              if (type == "questions") {
                _this4.records = _this4.getDataQuestions(csvRecordsArray, headersRow.length);

                _this4._questions.addQuestion(_this4.records);
              }

              if (type == "users") {
                _this4.records = _this4.getDataUsers(csvRecordsArray, headersRow.length);

                _this4._users.addUsers(_this4.records);
              }
            };

            reader.onerror = function () {
              console.log('Ocurrio un error al leer el archivo!');
            };
          } else {
            alert("El archivo no es CSV");
            this.fileReset();
          }
        }
      }, {
        key: "getDataUsers",
        value: function getDataUsers(csvRecordsArray, headerLength) {
          var csvDataUser = [];

          for (var i = 1; i < csvRecordsArray.length; i++) {
            var curruntRecord = csvRecordsArray[i].split(';');
            var csvUsers = new src_app_models_user_module__WEBPACK_IMPORTED_MODULE_4__["UserModule"]();

            if (curruntRecord.length == headerLength) {
              csvUsers.id = Number(curruntRecord[0]);
              csvUsers.name = curruntRecord[1];
              csvUsers.email = curruntRecord[2];
              csvUsers.rol = curruntRecord[3];
              csvUsers.macro_process = curruntRecord[4];
              csvDataUser.push(csvUsers);
            }
          }

          return csvDataUser;
        }
      }, {
        key: "getDataQuestions",
        value: function getDataQuestions(csvRecordsArray, headerLength) {
          var csvArr = [];
          var csvMessage = {};
          var itemInput = [];
          var inputs = [];
          var list = [];
          var dataMessage = csvRecordsArray[1].split(';');
          var dataInput = csvRecordsArray[2].split(';');
          dataInput = dataInput[1].split('|');

          for (var w = 0; w < dataInput.length; w++) {
            itemInput = dataInput[w].split(',');
            inputs.push(itemInput);
          }

          for (var t = 0; t < inputs.length; t++) {
            list.push({
              name: inputs[t][0],
              type: inputs[t][1],
              placeholder: inputs[t][2]
            });
          }

          csvMessage.message = dataMessage[1];
          csvMessage.data = list; // agregar mensaje de bienvenida

          this._questions.addMessage(csvMessage);

          for (var i = 1; i < csvRecordsArray.length; i++) {
            var curruntRecord = csvRecordsArray[i].split(';');

            if (curruntRecord.length == headerLength) {
              var csvRecord = new src_app_models_questions_module__WEBPACK_IMPORTED_MODULE_2__["QuestionsModule"]();
              csvRecord.id = parseFloat(curruntRecord[0]);
              var listOption = curruntRecord[0].split('.'); // lista de preguntas

              if (listOption.length == 1) {
                // lista de opciones de cada pregunta
                var valueOption = this.getOptions(curruntRecord[0], csvRecordsArray, headerLength);
                csvRecord.questions = {
                  message: curruntRecord[1],
                  option: valueOption,
                  repeat: curruntRecord[4],
                  valcheck: []
                };
                csvRecord.mandatory = curruntRecord[2];
                csvRecord.typeDesign = curruntRecord[3];
                csvRecord.assets = curruntRecord[5];
                csvRecord.conditional = curruntRecord[6];
                csvRecord.variable = curruntRecord[7];
                csvRecord.multiple = curruntRecord[8];
                csvRecord.text = curruntRecord[9];
                csvRecord.rack = curruntRecord[10];
                csvRecord.order = curruntRecord[11];
                csvRecord.comparator = curruntRecord[12];
                csvRecord.check = curruntRecord[13];
                csvRecord.matriz = curruntRecord[14];
                csvRecord.miltiCheck = curruntRecord[15];
                csvRecord.alerts = curruntRecord[16];
                csvArr.push(csvRecord);
              }
            }
          }

          return csvArr;
        }
      }, {
        key: "getOptions",
        value: function getOptions(idQuestion, csvRecordsArray, headerLength) {
          var csvOption = [];

          for (var i = 1; i < csvRecordsArray.length; i++) {
            var curruntRecord = csvRecordsArray[i].split(';');

            if (curruntRecord.length == headerLength) {
              var csvRecord = new src_app_models_questions_module__WEBPACK_IMPORTED_MODULE_2__["QuestionsModule"]();
              var listOption = curruntRecord[0].split('.');

              if (listOption.length == 2 && idQuestion == listOption[0]) {
                csvRecord.id = curruntRecord[0];

                if (curruntRecord[3] == "value") {
                  csvRecord.options = curruntRecord[1].split(',');
                } else {
                  csvRecord.options = curruntRecord[1];
                }

                csvRecord.mandatory = curruntRecord[2];
                csvRecord.valcheck = [];
                csvRecord.repeat = curruntRecord[4];
                csvRecord.typeDesign = curruntRecord[3];
                csvRecord.assets = curruntRecord[5];
                csvRecord.conditional = curruntRecord[6];
                csvRecord.variable = curruntRecord[7];
                csvRecord.multiple = curruntRecord[8];
                csvRecord.text = curruntRecord[9];
                csvRecord.rack = curruntRecord[10];
                csvRecord.order = curruntRecord[11];
                csvRecord.comparator = curruntRecord[12];
                csvRecord.check = curruntRecord[13];
                csvRecord.matriz = curruntRecord[14];
                csvRecord.miltiCheck = curruntRecord[15];
                csvRecord.alerts = curruntRecord[16];
                csvOption.push(csvRecord);
              }
            }
          }

          return csvOption;
        }
      }, {
        key: "getHeaderArray",
        value: function getHeaderArray(csvRecordsArr) {
          var headers = csvRecordsArr[0].split(';');
          var headerArray = [];

          for (var j = 0; j < headers.length; j++) {
            headerArray.push(headers[j]);
          }

          return headerArray;
        }
      }, {
        key: "isValidCSVFile",
        value: function isValidCSVFile(file) {
          return file.name.endsWith(".csv");
        }
      }, {
        key: "fileReset",
        value: function fileReset() {
          this.csvReaderQuestions.nativeElement.value = "";
          this.csvReaderUsers.nativeElement.value = "";
          this.records = [];
        }
      }, {
        key: "validateQuestion",
        value: function validateQuestion(item, data) {
          if (item == 'check-mensaje' || item == 'tabla-multiple') {
            for (var i = 0; i < data.length; i++) {
              if (this.conditional(data[i].conditional) == 0) {
                return 0;
              }
            }
          } else {
            return 0;
          }
        }
      }]);

      return QuestionsComponent;
    }();

    QuestionsComponent.ctorParameters = function () {
      return [{
        type: src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }, {
        type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"]
      }, {
        type: src_app_services_response_service__WEBPACK_IMPORTED_MODULE_6__["ResponseService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('csvReaderQuestions', {
      "static": false
    })], QuestionsComponent.prototype, "csvReaderQuestions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('csvReaderUsers', {
      "static": false
    })], QuestionsComponent.prototype, "csvReaderUsers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('camp', {
      "static": false
    })], QuestionsComponent.prototype, "camp", void 0);
    QuestionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-questions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./questions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/questions/questions.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./questions.component.css */
      "./src/app/components/questions/questions.component.css"))["default"]]
    })], QuestionsComponent);
    /***/
  },

  /***/
  "./src/app/components/report/report.component.css":
  /*!********************************************************!*\
    !*** ./src/app/components/report/report.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsReportReportComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/report/report.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/report/report.component.ts ***!
    \*******************************************************/

  /*! exports provided: ReportComponent */

  /***/
  function srcAppComponentsReportReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportComponent", function () {
      return ReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/reports.service */
    "./src/app/services/reports.service.ts");
    /* harmony import */


    var src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/questions.service */
    "./src/app/services/questions.service.ts");

    var ReportComponent = /*#__PURE__*/function () {
      function ReportComponent(_report, _question) {
        var _this5 = this;

        _classCallCheck(this, ReportComponent);

        /*  this.countResponse = this._report.getData().subscribe( data => {
            let dataLoad = [];
            this.countResponse = data.size;
            dataLoad =  [655,this.countResponse]; //153
            this.doughnutChartLabels = ['Numero de Encuestas', 'Respondidas'];
            this.doughnutChartData = dataLoad;
            this.doughnutChartType = 'doughnut';
              this.loading = true;
          });*/
        this._report = _report;
        this._question = _question;
        this.loading = false;
        this.dataEnd = new Date('12-');

        this._report.getReports().subscribe(function (data) {
          // console.log(data);
          _this5.dataReport = data;
        });

        this._question.getQuestions().subscribe(function (data) {
          _this5.dataQuestions = data;
        });
      }

      _createClass(ReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "exportTableToExcel",
        value: function exportTableToExcel(tableID) {
          var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var downloadLink;
          var dataType = 'application/vnd.ms-excel';
          var tableSelect = document.getElementById(tableID);
          var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20'); // Specify file name

          filename = filename ? filename + '.xls' : 'excel_data.xls'; // Create download link element

          downloadLink = document.createElement("a");
          document.body.appendChild(downloadLink);

          if (navigator.msSaveOrOpenBlob) {
            var blob = new Blob(['ufeff', tableHTML], {
              type: dataType
            });
            navigator.msSaveOrOpenBlob(blob, filename);
          } else {
            // Create a link to the file
            downloadLink.href = 'data:' + dataType + ', ' + tableHTML; // Setting the file name

            downloadLink.download = filename; //triggering the function

            downloadLink.click();
          }
        }
      }, {
        key: "dataItem",
        value: function dataItem(question) {
          var dataQuestion = ['Análisis de negocios ', 'Planeación Estratégica', 'Modelo E (Medición, Análisis y mejora, normalización)', 'Investigación de mercados', 'Diseño y desarrollo de producto', 'Infraestructura', 'Bases de datos', 'Sistemas de Información', 'soluciones tecnológicas', 'Desarrollo', 'Mesa de ayuda (Soporte de servicios tecnológicos)', 'Planeación de TI (Proyectos)', 'Seguridad física', 'Seguridad de la información', 'Riesgos', 'Jurídico', 'Experiencia de cliente', 'CMI', 'Mercadeo', 'Ventas', 'Aseguramiento del Canal', 'Canal retail', 'Canal Corporativo', 'Operaciones', 'Tesorería administrativa', 'Tesorería operativa', 'Contabilidad', 'Compras', 'Recursos físicos', 'Planeación financiera', 'Control financiero (Presupuestos)', 'Cartera', 'Impuestos', 'Costos y multiprecio', 'Selección', 'Administración del Talento Humano', 'Formación y Desarrollo', 'Calidad de Vida', 'Seguridad y salud laboral', 'Gestión Ambiental', 'Comunicación Interna', 'Regional Norte', 'Regional Caribe', 'Regional Oriente', 'Regional Occidente', 'Regional Antioquia', 'Regional Sur', 'Regional Centro', 'Regional Bogotá', 'Regional Eje'];
          var res;
          var item = {};
          var qsArray = {};
          qsArray = question;

          if (dataQuestion.indexOf(question) != -1) {
            res = question;
          } else {
            for (var i = 0; i < dataQuestion.length; i++) {
              item = dataQuestion[i];

              if (question == item[0]) {
                res = dataQuestion[i];
              }
            }
          }

          return res;
        }
      }, {
        key: "response",
        value: function response(option, idQuestion, _response2) {
          console.log(option);
          console.log(idQuestion);

          if (_response2 !== undefined) {
            for (var i = 0; i < _response2.length; i++) {
              console.log(_response2[i]);
            }
          }
        }
      }, {
        key: "dataQuestion",
        value: function dataQuestion(questions, id) {
          console.log(questions);
          console.log(id); //return questions;
        }
      }, {
        key: "dateEnd",
        value: function dateEnd(dateBD, end) {
          console.log(dateBD);
          var start = new Date(dateBD);
          var endDate = new Date(end);
          console.log(start);
          console.log(start.getDate());
          console.log(start.getHours());

          if (start.getHours() == 10) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "numQuestion",
        value: function numQuestion(nums) {
          nums = "" + nums + "";
          nums = nums.split(".");
          return nums[0] + "|";
        } // events

      }, {
        key: "chartClicked",
        value: function chartClicked(e) {//  console.log(e);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {//  console.log(e);
        }
      }]);

      return ReportComponent;
    }();

    ReportComponent.ctorParameters = function () {
      return [{
        type: src_app_services_reports_service__WEBPACK_IMPORTED_MODULE_2__["ReportsService"]
      }, {
        type: src_app_services_questions_service__WEBPACK_IMPORTED_MODULE_3__["QuestionsService"]
      }];
    };

    ReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-report',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/report/report.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./report.component.css */
      "./src/app/components/report/report.component.css"))["default"]]
    })], ReportComponent);
    /***/
  },

  /***/
  "./src/app/models/questions.module.ts":
  /*!********************************************!*\
    !*** ./src/app/models/questions.module.ts ***!
    \********************************************/

  /*! exports provided: QuestionsModule */

  /***/
  function srcAppModelsQuestionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionsModule", function () {
      return QuestionsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var QuestionsModule = function QuestionsModule() {
      _classCallCheck(this, QuestionsModule);

      this.repeat = '';
    };

    QuestionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], QuestionsModule);
    /***/
  },

  /***/
  "./src/app/models/response.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/models/response.module.ts ***!
    \*******************************************/

  /*! exports provided: ResponseModule */

  /***/
  function srcAppModelsResponseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseModule", function () {
      return ResponseModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ResponseModule = function ResponseModule() {
      _classCallCheck(this, ResponseModule);
    };

    ResponseModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], ResponseModule);
    /***/
  },

  /***/
  "./src/app/models/user.module.ts":
  /*!***************************************!*\
    !*** ./src/app/models/user.module.ts ***!
    \***************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppModelsUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/app/pipes/key-array.pipe.ts":
  /*!*****************************************!*\
    !*** ./src/app/pipes/key-array.pipe.ts ***!
    \*****************************************/

  /*! exports provided: KeyArrayPipe */

  /***/
  function srcAppPipesKeyArrayPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyArrayPipe", function () {
      return KeyArrayPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var KeyArrayPipe = /*#__PURE__*/function () {
      function KeyArrayPipe() {
        _classCallCheck(this, KeyArrayPipe);
      }

      _createClass(KeyArrayPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var keys = [];

          for (var key in value) {
            keys.push(key);
          }

          return keys;
        }
      }]);

      return KeyArrayPipe;
    }();

    KeyArrayPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'keyArray'
    })], KeyArrayPipe);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afAuth, router) {
        _classCallCheck(this, AuthService);

        this.afAuth = afAuth;
        this.router = router;
      }

      _createClass(AuthService, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('user')) {
            // this.router.navigate(['config-questions']);
            return true;
          } else {
            this.router.navigate(['login']);
            return false;
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/login.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/login.service.ts ***!
    \*******************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppServicesLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginService = /*#__PURE__*/function () {
      function LoginService(afs, afAuth, router) {
        var _this6 = this;

        _classCallCheck(this, LoginService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.dataUser = {};
        this.afAuth.authState.subscribe(function (user) {
          if (!user) {
            return;
          } else {
            _this6.dataUser.name = user.displayName;
            _this6.dataUser.uId = user.uid;
          }
        });
      }

      _createClass(LoginService, [{
        key: "login",
        value: function login(data) {
          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().signInWithEmailAndPassword(data.email, data.password).then(function (userData) {
              return resolve(userData);
            }, function (error) {
              return reject(error);
            });
          });
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], LoginService);
    /***/
  },

  /***/
  "./src/app/services/questions.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/questions.service.ts ***!
    \***********************************************/

  /*! exports provided: QuestionsService */

  /***/
  function srcAppServicesQuestionsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionsService", function () {
      return QuestionsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var QuestionsService = /*#__PURE__*/function () {
      function QuestionsService(afs) {
        _classCallCheck(this, QuestionsService);

        this.afs = afs;
      }

      _createClass(QuestionsService, [{
        key: "addQuestion",
        value: function addQuestion(data) {
          for (var i = 0; i < data.length; i++) {
            var param = JSON.parse(JSON.stringify(data[i]));
            this.afs.collection("questions").add(param);
          }
        }
      }, {
        key: "getQuestions",
        value: function getQuestions() {
          this.itemsCollection = this.afs.collection("questions", function (ref) {
            return ref.orderBy('id', 'asc');
          });
          return this.itemsCollection.valueChanges();
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          this.itemsCollection = this.afs.collection("message", function (ref) {
            return ref;
          });
          return this.itemsCollection.valueChanges();
        }
      }, {
        key: "addMessage",
        value: function addMessage(data) {
          this.afs.collection("message").add(data);
        }
      }]);

      return QuestionsService;
    }();

    QuestionsService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    QuestionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuestionsService);
    /***/
  },

  /***/
  "./src/app/services/reports.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/reports.service.ts ***!
    \*********************************************/

  /*! exports provided: ReportsService */

  /***/
  function srcAppServicesReportsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsService", function () {
      return ReportsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var ReportsService = /*#__PURE__*/function () {
      function ReportsService(afs) {
        _classCallCheck(this, ReportsService);

        this.afs = afs;
        this.collection = "response";
      }

      _createClass(ReportsService, [{
        key: "getData",
        value: function getData() {
          return this.afs.collection(this.collection).get();
        }
      }, {
        key: "getReports",
        value: function getReports() {
          var start = new Date('2019-12-09');
          var end = new Date('2019-12-17');
          this.itemsCollection = this.afs.collection(this.collection, function (ref) {
            return ref;
          });
          return this.itemsCollection.valueChanges();
        }
      }]);

      return ReportsService;
    }();

    ReportsService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    ReportsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReportsService);
    /***/
  },

  /***/
  "./src/app/services/response.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/response.service.ts ***!
    \**********************************************/

  /*! exports provided: ResponseService */

  /***/
  function srcAppServicesResponseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseService", function () {
      return ResponseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var ResponseService = /*#__PURE__*/function () {
      function ResponseService(afs) {
        _classCallCheck(this, ResponseService);

        this.afs = afs;
        this.collection = "response_daniel";
        this.dataUpdate = [];
      }

      _createClass(ResponseService, [{
        key: "getResponse",
        value: function getResponse(idQuestion, idDocumentFire) {
          return this.afs.collection(this.collection).doc(idDocumentFire).valueChanges();
        }
      }, {
        key: "addResponse",
        value: function addResponse(data) {
          return this.afs.collection(this.collection).add(JSON.parse(JSON.stringify(data)));
        }
      }, {
        key: "updateResponsew",
        value: function updateResponsew(idDocumentFire, data, type, idQuestion) {
          console.log(idDocumentFire);

          if (type == "add") {
            return this.afs.collection(this.collection).doc(idDocumentFire).set(JSON.parse(JSON.stringify(data)));
          } else {
            this.dataUpdate[idQuestion] = data.question[idQuestion];
            return this.afs.collection(this.collection).doc(idDocumentFire).update({
              question: this.dataUpdate[idQuestion]
            }); //return this.afs.collection(this.collection , ref => ref.where('id', '==', idQuestion)).doc(idDocumentFire).update( JSON.parse(JSON.stringify(data)) );
          }
        }
      }]);

      return ResponseService;
    }();

    ResponseService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    ResponseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ResponseService);
    /***/
  },

  /***/
  "./src/app/services/sigout.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/sigout.service.ts ***!
    \********************************************/

  /*! exports provided: SigoutService */

  /***/
  function srcAppServicesSigoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigoutService", function () {
      return SigoutService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SigoutService = /*#__PURE__*/function () {
      function SigoutService(afs, afAuth, router) {
        _classCallCheck(this, SigoutService);

        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
      }

      _createClass(SigoutService, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('user')) {
            this.router.navigate(['config-questions']);
            return false;
          } else {
            return true;
          }
        }
      }]);

      return SigoutService;
    }();

    SigoutService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }, {
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    SigoutService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SigoutService);
    /***/
  },

  /***/
  "./src/app/services/users.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/users.service.ts ***!
    \*******************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

    var UsersService = /*#__PURE__*/function () {
      function UsersService(afs) {
        _classCallCheck(this, UsersService);

        this.afs = afs;
      }

      _createClass(UsersService, [{
        key: "addUsers",
        value: function addUsers(data) {
          for (var i = 1; i < data.length; i++) {
            var param = JSON.parse(JSON.stringify(data[i]));
            this.afs.collection("users").add(param);
          }
        }
      }, {
        key: "getUser",
        value: function getUser(email) {
          this.itemsCollection = this.afs.collection("users", function (ref) {
            return ref.where('email', '==', email);
          });
          return this.itemsCollection.valueChanges();
        }
      }]);

      return UsersService;
    }();

    UsersService.ctorParameters = function () {
      return [{
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
      }];
    };

    UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsersService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyBmEyOSY2atjD7SEcWDURpMBTdMKxS20l8",
        authDomain: "encuestas-a0bd4.firebaseapp.com",
        databaseURL: "https://encuestas-a0bd4.firebaseio.com",
        projectId: "encuestas-a0bd4",
        storageBucket: "encuestas-a0bd4.appspot.com",
        messagingSenderId: "568247986243",
        appId: "1:568247986243:web:22e0b7aa8739173ee74cf6",
        measurementId: "G-MTZXSJ78TK"
        /*apiKey: "AIzaSyA1PM5iboGgbXiQQLWtvZVG0V7clOVHcG4",
        authDomain: "encuesta2-8f4b7.firebaseapp.com",
        databaseURL: "https://encuesta2-8f4b7.firebaseio.com",
        projectId: "encuesta2-8f4b7",
        storageBucket: "encuesta2-8f4b7.appspot.com",
        messagingSenderId: "383615728839",
        appId: "1:383615728839:web:69d9e33e4e1dddfd1752e2",
        measurementId: "G-M28CZWSJ8C"*/

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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/leonardohernandez/Documents/Clientix/Desarrollos /encuestas/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map