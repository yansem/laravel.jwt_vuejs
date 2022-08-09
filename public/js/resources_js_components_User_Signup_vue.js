"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_User_Signup_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Signup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Signup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Signup",
  data: function data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  },
  methods: {
    store: function store() {
      var _this = this;

      axios.post('/api/users', {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(function (res) {
        localStorage.setItem('access_token', res.data.access_token);

        _this.$router.push({
          name: 'user.personal'
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/User/Signup.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/User/Signup.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Signup_vue_vue_type_template_id_b0a1b63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Signup.vue?vue&type=template&id=b0a1b63e&scoped=true& */ "./resources/js/components/User/Signup.vue?vue&type=template&id=b0a1b63e&scoped=true&");
/* harmony import */ var _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup.vue?vue&type=script&lang=js& */ "./resources/js/components/User/Signup.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Signup_vue_vue_type_template_id_b0a1b63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Signup_vue_vue_type_template_id_b0a1b63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b0a1b63e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/User/Signup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/User/Signup.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/User/Signup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Signup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/User/Signup.vue?vue&type=template&id=b0a1b63e&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/User/Signup.vue?vue&type=template&id=b0a1b63e&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_b0a1b63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_b0a1b63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_template_id_b0a1b63e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Signup.vue?vue&type=template&id=b0a1b63e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Signup.vue?vue&type=template&id=b0a1b63e&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Signup.vue?vue&type=template&id=b0a1b63e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/User/Signup.vue?vue&type=template&id=b0a1b63e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "w-25" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.name,
            expression: "name",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "name" },
        domProps: { value: _vm.name },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.name = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.email,
            expression: "email",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "email" },
        domProps: { value: _vm.email },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.email = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.password,
            expression: "password",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "password", placeholder: "password" },
        domProps: { value: _vm.password },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.password = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.password_confirmation,
            expression: "password_confirmation",
          },
        ],
        staticClass: "form-control",
        attrs: { type: "password", placeholder: "password confirm" },
        domProps: { value: _vm.password_confirmation },
        on: {
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.password_confirmation = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _c("input", {
        staticClass: "btn btn-primary",
        attrs: { type: "submit", value: "Signup" },
        on: {
          click: function ($event) {
            $event.preventDefault()
            return _vm.store.apply(null, arguments)
          },
        },
      }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);