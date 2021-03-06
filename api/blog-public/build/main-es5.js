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
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_blog_add_comments_blog_add_comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/blog-add-comments/blog-add-comments.component */
    "./src/app/components/blog-add-comments/blog-add-comments.component.ts");
    /* harmony import */


    var _components_blog_favourites_blog_favourites_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/blog-favourites/blog-favourites.component */
    "./src/app/components/blog-favourites/blog-favourites.component.ts");
    /* harmony import */


    var _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/blog-list/blog-list.component */
    "./src/app/components/blog-list/blog-list.component.ts");
    /* harmony import */


    var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/blog-details/blog-details.component */
    "./src/app/components/blog-details/blog-details.component.ts");
    /* harmony import */


    var _components_blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/blog-create/blog-create.component */
    "./src/app/components/blog-create/blog-create.component.ts");
    /* harmony import */


    var _components_blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/blog-update/blog-update.component */
    "./src/app/components/blog-update/blog-update.component.ts");
    /* harmony import */


    var _components_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/index/index.component */
    "./src/app/components/index/index.component.ts");
    /* harmony import */


    var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/log-in/log-in.component */
    "./src/app/components/log-in/log-in.component.ts");
    /* harmony import */


    var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/register-page/register-page.component */
    "./src/app/components/register-page/register-page.component.ts");
    /* harmony import */


    var _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/update-profile/update-profile.component */
    "./src/app/components/update-profile/update-profile.component.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var routes = [//user
    {
      path: '',
      component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"]
    }, {
      path: 'register',
      component: _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_10__["RegisterPageComponent"]
    }, {
      path: 'update/:userid',
      component: _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_11__["UpdateProfileComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'login',
      component: _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_9__["LogInComponent"]
    }, //blog
    {
      path: 'blogs',
      component: _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogListComponent"]
    }, {
      path: 'blogs/favourites',
      component: _components_blog_favourites_blog_favourites_component__WEBPACK_IMPORTED_MODULE_3__["BlogFavouritesComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'blogs/:blogid/comments/new',
      component: _components_blog_add_comments_blog_add_comments_component__WEBPACK_IMPORTED_MODULE_2__["BlogAddCommentsComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'update-blog/:blogid',
      component: _components_blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_7__["BlogUpdateComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'blogs/new',
      component: _components_blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_6__["BlogCreateComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"]]
    }, {
      path: 'blogs/:blogid',
      component: _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_5__["BlogDetailsComponent"]
    }, // { path: 'blogs/edit/:blogid', component: BlogCreateComponent },
    {
      path: '**',
      pathMatch: 'full',
      redirectTo: '/'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
    /* harmony import */


    var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/progressbar */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm2015/ngx-bootstrap-progressbar.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/pagination */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
    /* harmony import */


    var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/alert */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm2015/ngx-bootstrap-alert.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! jw-bootstrap-switch-ng2 */
    "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm2015/jw-bootstrap-switch-ng2.js");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var _components_index_index_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/index/index.component */
    "./src/app/components/index/index.component.ts");
    /* harmony import */


    var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _components_framework_framework_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/framework/framework.component */
    "./src/app/components/framework/framework.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/blog-list/blog-list.component */
    "./src/app/components/blog-list/blog-list.component.ts");
    /* harmony import */


    var _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/register-page/register-page.component */
    "./src/app/components/register-page/register-page.component.ts");
    /* harmony import */


    var _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/update-profile/update-profile.component */
    "./src/app/components/update-profile/update-profile.component.ts");
    /* harmony import */


    var _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/log-in/log-in.component */
    "./src/app/components/log-in/log-in.component.ts");
    /* harmony import */


    var _components_blog_favourites_blog_favourites_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/blog-favourites/blog-favourites.component */
    "./src/app/components/blog-favourites/blog-favourites.component.ts");
    /* harmony import */


    var _components_blog_add_comments_blog_add_comments_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/blog-add-comments/blog-add-comments.component */
    "./src/app/components/blog-add-comments/blog-add-comments.component.ts");
    /* harmony import */


    var _search_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./search.pipe */
    "./src/app/search.pipe.ts");
    /* harmony import */


    var _components_blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/blog-create/blog-create.component */
    "./src/app/components/blog-create/blog-create.component.ts");
    /* harmony import */


    var _components_blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/blog-update/blog-update.component */
    "./src/app/components/blog-update/blog-update.component.ts");
    /* harmony import */


    var _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/blog-details/blog-details.component */
    "./src/app/components/blog-details/blog-details.component.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_components_framework_framework_component__WEBPACK_IMPORTED_MODULE_22__["FrameworkComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"],
        useValue: '/'
      }, // UserService,
      _auth_auth_service__WEBPACK_IMPORTED_MODULE_35__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
      imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(), jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__["JwBootstrapSwitchNg2Module"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AppModule, {
        declarations: [_components_framework_framework_component__WEBPACK_IMPORTED_MODULE_22__["FrameworkComponent"], _components_index_index_component__WEBPACK_IMPORTED_MODULE_18__["IndexComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_21__["SearchComponent"], _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_25__["BlogListComponent"], _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_26__["RegisterPageComponent"], _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_27__["UpdateProfileComponent"], _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_28__["LogInComponent"], _components_blog_favourites_blog_favourites_component__WEBPACK_IMPORTED_MODULE_29__["BlogFavouritesComponent"], _components_blog_add_comments_blog_add_comments_component__WEBPACK_IMPORTED_MODULE_30__["BlogAddCommentsComponent"], _search_pipe__WEBPACK_IMPORTED_MODULE_31__["SearchPipe"], _components_blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_32__["BlogCreateComponent"], _components_blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_33__["BlogUpdateComponent"], _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_34__["BlogDetailsComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__["JwBootstrapSwitchNg2Module"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_components_framework_framework_component__WEBPACK_IMPORTED_MODULE_22__["FrameworkComponent"], _components_index_index_component__WEBPACK_IMPORTED_MODULE_18__["IndexComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_19__["NavComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_21__["SearchComponent"], _components_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_25__["BlogListComponent"], _components_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_26__["RegisterPageComponent"], _components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_27__["UpdateProfileComponent"], _components_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_28__["LogInComponent"], _components_blog_favourites_blog_favourites_component__WEBPACK_IMPORTED_MODULE_29__["BlogFavouritesComponent"], _components_blog_add_comments_blog_add_comments_component__WEBPACK_IMPORTED_MODULE_30__["BlogAddCommentsComponent"], _search_pipe__WEBPACK_IMPORTED_MODULE_31__["SearchPipe"], _components_blog_create_blog_create_component__WEBPACK_IMPORTED_MODULE_32__["BlogCreateComponent"], _components_blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_33__["BlogUpdateComponent"], _components_blog_details_blog_details_component__WEBPACK_IMPORTED_MODULE_34__["BlogDetailsComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(), ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_17__["PopoverModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(), jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_16__["JwBootstrapSwitchNg2Module"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(), ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(), ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(), ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot()],
          providers: [{
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_1__["APP_BASE_HREF"],
            useValue: '/'
          }, // UserService,
          _auth_auth_service__WEBPACK_IMPORTED_MODULE_35__["AuthService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
          bootstrap: [_components_framework_framework_component__WEBPACK_IMPORTED_MODULE_22__["FrameworkComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(authService, router) {
        _classCallCheck(this, AuthGuard);

        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this = this;

          return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (isLoggedIn) {
            if (!isLoggedIn) {
              _this.router.navigate(['/login']);

              return false;
            }

            return true;
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.??fac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router, userService) {
        _classCallCheck(this, AuthService);

        this.router = router;
        this.userService = userService; // private loggedIn = new BehaviorSubject<boolean>(false);

        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.tokenAvailable());
      }

      _createClass(AuthService, [{
        key: "tokenAvailable",
        value: function tokenAvailable() {
          return !!localStorage.getItem('token');
        }
      }, {
        key: "login",
        value: function login(newUser) {
          var _this2 = this;

          this.userService.login(newUser).then(function (res) {
            if (res) {
              if (res.status === "ok") {
                localStorage.setItem('token', res.data.token);

                _this2.loggedIn.next(true);

                _this2.router.navigate(["/"]);
              } else if (res.status === "error") {
                return res.error;
              }
            } else {
              return 'Ops, something went wrong. Please, try later!';
            }
          });
          return null;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.loggedIn.next(false);
          localStorage.removeItem('token');
          this.router.navigate(['/login']);
        } // get current logged in user id

      }, {
        key: "getCurrentUserId",
        value: function getCurrentUserId() {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            var token = localStorage.getItem("token");

            if (token) {
              _this3.userService.getUser(token).then(function (user) {
                if (user) {
                  resolve(user.data._id);
                }
              })["catch"](function (res) {
                reject(res);
                return;
              });
            }
          });
        }
      }, {
        key: "isLoggedIn",
        get: function get() {
          return this.loggedIn.asObservable();
        }
      }]);

      return AuthService;
    }();

    AuthService.??fac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]));
    };

    AuthService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthService,
      factory: AuthService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/blog.service.ts":
  /*!*********************************!*\
    !*** ./src/app/blog.service.ts ***!
    \*********************************/

  /*! exports provided: BlogService */

  /***/
  function srcAppBlogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogService", function () {
      return BlogService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global */
    "./src/app/global.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BlogService =
    /*#__PURE__*/
    function () {
      function BlogService(http) {
        _classCallCheck(this, BlogService);

        this.http = http;
      }

      _createClass(BlogService, [{
        key: "getBlogs",
        value: function getBlogs() {
          return this.http.get(_global__WEBPACK_IMPORTED_MODULE_1__["BLOGS_URL"]).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "getSingleBlog",
        value: function getSingleBlog(blogId) {
          return this.http.get(_global__WEBPACK_IMPORTED_MODULE_1__["BLOGS_URL"] + '/' + blogId).toPromise().then(function (res) {
            return res;
          })["catch"](this.handleError);
        }
      }, {
        key: "createBlog",
        value: function createBlog(newBlog) {
          return this.http.post(_global__WEBPACK_IMPORTED_MODULE_1__["BLOGS_URL"], newBlog).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "updateBlog",
        value: function updateBlog(blogId, newBlog) {
          return this.http.put(_global__WEBPACK_IMPORTED_MODULE_1__["BLOGS_URL"] + '/' + blogId, newBlog).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "postComment",
        value: function postComment(blogId, comment) {
          return this.http.post(_global__WEBPACK_IMPORTED_MODULE_1__["BLOGS_URL"] + '/' + blogId + '/comment', {
            comment: comment
          }).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "deleteBlog",
        value: function deleteBlog(blogId) {
          return this.http["delete"](_global__WEBPACK_IMPORTED_MODULE_1__["BLOGS_URL"] + '/' + blogId);
        } // addFavourites(blogId : string, newBlog: Blog): Promise<void | Blog>{
        //   return this.http.put(BLOGS_URL + '/' + blogId + '/fav', newBlog)
        //   .toPromise()
        //   .then(response => response as Blog)
        //     .catch(this.handleError);
        // }

      }, {
        key: "createBlogFavourites",
        value: function createBlogFavourites(newBlog) {
          return this.http.post(_global__WEBPACK_IMPORTED_MODULE_1__["BLOGS_URL"] + '/favourites', newBlog).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "addToFavourites",
        value: function addToFavourites(userid, blogid) {
          var data = {
            userid: userid,
            blogid: blogid
          };
          return this.http.post(_global__WEBPACK_IMPORTED_MODULE_1__["USERS_URL"] + '/favourites', data).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "getFavourites",
        value: function getFavourites(userid) {
          return this.http.get(_global__WEBPACK_IMPORTED_MODULE_1__["USERS_URL"] + '/favourites/' + userid).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "removeFromFavourites",
        value: function removeFromFavourites(userid, blogid) {// const data = {
          //   userid, blogid
          // }
          // return this.http.delete(USERS_URL+'/favourites', data)
          // .toPromise()
          //   .then(response => response as any)
          //   .catch(this.handleError);
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log(error);
        }
      }]);

      return BlogService;
    }();

    BlogService.??fac = function BlogService_Factory(t) {
      return new (t || BlogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    BlogService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: BlogService,
      factory: BlogService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/blog-add-comments/blog-add-comments.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/blog-add-comments/blog-add-comments.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: BlogAddCommentsComponent */

  /***/
  function srcAppComponentsBlogAddCommentsBlogAddCommentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogAddCommentsComponent", function () {
      return BlogAddCommentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BlogAddCommentsComponent =
    /*#__PURE__*/
    function () {
      function BlogAddCommentsComponent() {
        _classCallCheck(this, BlogAddCommentsComponent);
      }

      _createClass(BlogAddCommentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogAddCommentsComponent;
    }();

    BlogAddCommentsComponent.??fac = function BlogAddCommentsComponent_Factory(t) {
      return new (t || BlogAddCommentsComponent)();
    };

    BlogAddCommentsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BlogAddCommentsComponent,
      selectors: [["app-blog-add-comments"]],
      decls: 7,
      vars: 0,
      consts: [[1, "section"], [1, "container"], [1, "row", "justify-content-between", "section", "section-examples"], [1, "col-md-12"], [1, "row", "justify-content-between", "align-items-center"]],
      template: function BlogAddCommentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Add comments");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1hZGQtY29tbWVudHMvYmxvZy1hZGQtY29tbWVudHMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogAddCommentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-add-comments',
          templateUrl: './blog-add-comments.component.html',
          styleUrls: ['./blog-add-comments.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/blog-create/blog-create.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/blog-create/blog-create.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BlogCreateComponent */

  /***/
  function srcAppComponentsBlogCreateBlogCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogCreateComponent", function () {
      return BlogCreateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _models_blog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../models/blog */
    "./src/app/models/blog.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BlogCreateComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r40.formError);
      }
    }

    function BlogCreateComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enter all details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var BlogCreateComponent =
    /*#__PURE__*/
    function () {
      function BlogCreateComponent(blogservice, router) {
        _classCallCheck(this, BlogCreateComponent);

        this.blogservice = blogservice;
        this.router = router;
      }

      _createClass(BlogCreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.newBlog = new _models_blog__WEBPACK_IMPORTED_MODULE_2__["Blog"]();
        }
      }, {
        key: "createBlog",
        value: function createBlog(newBlog) {
          this.blogservice.createBlog(newBlog);
        }
      }, {
        key: "formIsValid",
        value: function formIsValid() {
          if (this.newBlog.author && this.newBlog.name && this.newBlog.images) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onReviewSubmit",
        value: function onReviewSubmit() {
          this.formError = '';

          if (this.formIsValid()) {
            this.formError = "Data Submitted Succesfully";
            this.router.navigate(["/"]);
          } else {
            this.formError = 'All fields are required, Please try again';
          }
        }
      }]);

      return BlogCreateComponent;
    }();

    BlogCreateComponent.??fac = function BlogCreateComponent_Factory(t) {
      return new (t || BlogCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    BlogCreateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BlogCreateComponent,
      selectors: [["app-blog-create"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])],
      decls: 29,
      vars: 6,
      consts: [[1, "section"], [1, "container"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "placeholder", "Ex. Javascript", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "author"], ["type", "text", "id", "author", "placeholder", "Ex. Sai Ganesh", "name", "author", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "description"], ["id", "description", "rows", "5", "placeholder", "Blog Description", "name", "description", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "images"], ["type", "text", "id", "images", "placeholder", "Image Url", "name", "images", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-info", "role", "alert", 4, "ngIf", "ngIfElse"], ["notshow", ""], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary"], ["role", "alert", 1, "alert", "alert-info"]],
      template: function BlogCreateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function BlogCreateComponent_Template_form_ngSubmit_3_listener() {
            ctx.createBlog(ctx.newBlog);
            return ctx.onReviewSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Blog Topic Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BlogCreateComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.newBlog.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BlogCreateComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.newBlog.author = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BlogCreateComponent_Template_textarea_ngModelChange_17_listener($event) {
            return ctx.newBlog.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Image URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BlogCreateComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.newBlog.images = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, BlogCreateComponent_div_23_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, BlogCreateComponent_ng_template_24_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newBlog.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newBlog.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newBlog.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newBlog.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.formError)("ngIfElse", _r41);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1jcmVhdGUvYmxvZy1jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-create',
          templateUrl: './blog-create.component.html',
          styleUrls: ['./blog-create.component.css'],
          providers: [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]]
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/blog-details/blog-details.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/blog-details/blog-details.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BlogDetailsComponent */

  /***/
  function srcAppComponentsBlogDetailsBlogDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogDetailsComponent", function () {
      return BlogDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var _models_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/blog */
    "./src/app/models/blog.ts");
    /* harmony import */


    var _blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../blog-update/blog-update.component */
    "./src/app/components/blog-update/blog-update.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function BlogDetailsComponent_slide_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var blogImage_r32 = ctx.$implicit;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", ctx_r29.newBlog.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", blogImage_r32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);
      }
    }

    function BlogDetailsComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](11, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "small");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17, " Like \xA0 \xA0 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Share");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var comment_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](comment_r33.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate2"]("", comment_r33.author, " commented this at ", comment_r33.date, " ");
      }
    }

    function BlogDetailsComponent_div_38_span_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "label", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Post Commment");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "textarea", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BlogDetailsComponent_div_38_span_1_Template_textarea_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r38.newComment = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx_r37.newComment);
      }
    }

    function BlogDetailsComponent_div_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BlogDetailsComponent_div_38_span_1_Template, 4, 1, "span", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var isLast_r36 = ctx.first;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", isLast_r36);
      }
    } //import { DatePipe } from '@angular/common';


    var BlogDetailsComponent =
    /*#__PURE__*/
    function () {
      function BlogDetailsComponent(blogService, route, router) {
        _classCallCheck(this, BlogDetailsComponent);

        this.blogService = blogService;
        this.route = route;
        this.router = router;
      }

      _createClass(BlogDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.newBlog = new _models_blog__WEBPACK_IMPORTED_MODULE_3__["Blog"]();
          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
            return _this4.blogService.getSingleBlog(params.blogid);
          })).subscribe(function (newBlog) {
            _this4.newBlog = newBlog;
          });
        }
      }, {
        key: "updateBlog",
        value: function updateBlog(blogid) {
          this.router.navigate(["update-blog", blogid]);
        }
      }, {
        key: "postComment",
        value: function postComment() {
          var _this5 = this;

          var date = new Date();
          this.blogService.postComment(this.newBlog._id, this.newComment).then(function (response) {
            _this5.newBlog.comments.push({
              _id: '',
              date: date.toString(),
              description: _this5.newComment,
              author: "Anonymous"
            });

            _this5.newComment = '';
          });
        }
      }, {
        key: "deleteBlog",
        value: function deleteBlog(blogid) {
          var _this6 = this;

          this.blogService.deleteBlog(blogid).subscribe(function (response) {
            _this6.router.navigate(["/"]);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return BlogDetailsComponent;
    }();

    BlogDetailsComponent.??fac = function BlogDetailsComponent_Factory(t) {
      return new (t || BlogDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    BlogDetailsComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BlogDetailsComponent,
      selectors: [["app-blog-details"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_4__["BlogUpdateComponent"]])],
      decls: 44,
      vars: 7,
      consts: [[1, "section"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "blog-post", "shadow"], [3, "showIndicators"], [4, "ngFor", "ngForOf"], [1, "blog-post-content"], [1, "col-lg-6"], [1, "col-lg-4"], [1, "btn-wrapper", "pt-3"], [1, "btn", "btn-simple", "btn-danger", "mr-1", 3, "click"], [1, "tim-icons", "icon-pencil"], [1, "btn", "btn-simple", "btn-info", 3, "click"], [1, "tim-icons", "icon-trash-simple"], [1, "col-md-8"], [1, "pull-right"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "d-block", 3, "alt", "src"], [1, "comments-list"], [1, "media"], ["href", "#", 1, "media-left"], [1, "media-body", "card", "card-stats", 2, "padding", "10px"], [1, "media-heading", "user_name", "text-muted"], [1, "tim-icons", "icon-single-02"], [1, "tim-icons", "icon-heart-2"], [1, "tim-icons", "icon-attach-87"], [1, "form-group"], [4, "ngIf"], ["for", "comdescription"], ["id", "newComment", "rows", "2", "placeholder", "Comment here", "name", "newComment", 1, "form-control", 3, "ngModel", "ngModelChange"]],
      template: function BlogDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "carousel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, BlogDetailsComponent_slide_10_Template, 2, 2, "slide", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BlogDetailsComponent_Template_button_click_22_listener() {
            return ctx.updateBlog(ctx.newBlog._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Update Blog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BlogDetailsComponent_Template_button_click_25_listener() {
            return ctx.deleteBlog(ctx.newBlog._id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, " Delete Blog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, " Comments ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, BlogDetailsComponent_div_36_Template, 20, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](38, BlogDetailsComponent_div_38_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BlogDetailsComponent_Template_button_click_41_listener() {
            return ctx.postComment();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](43, " Post A Comment ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.newBlog.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showIndicators", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.newBlog.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.newBlog.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.newBlog.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.newBlog.comments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.newBlog.comments);
        }
      },
      directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["SlideComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1kZXRhaWxzL2Jsb2ctZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-details',
          templateUrl: './blog-details.component.html',
          styleUrls: ['./blog-details.component.css'],
          providers: [_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"], _blog_update_blog_update_component__WEBPACK_IMPORTED_MODULE_4__["BlogUpdateComponent"]]
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/blog-favourites/blog-favourites.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/blog-favourites/blog-favourites.component.ts ***!
    \*************************************************************************/

  /*! exports provided: BlogFavouritesComponent */

  /***/
  function srcAppComponentsBlogFavouritesBlogFavouritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogFavouritesComponent", function () {
      return BlogFavouritesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function BlogFavouritesComponent_div_6_slide_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var blogImage_r12 = ctx.$implicit;

        var blog_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/blogs/", blog_r10._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", blog_r10.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", blogImage_r12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blog_r10.name);
      }
    }

    function BlogFavouritesComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "carousel", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, BlogFavouritesComponent_div_6_slide_4_Template, 6, 4, "slide", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "footer", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Author: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "cite", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var blog_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showIndicators", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", blog_r10.images);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/blogs/", blog_r10._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blog_r10.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", blog_r10.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blog_r10.author);
      }
    }

    var BlogFavouritesComponent =
    /*#__PURE__*/
    function () {
      function BlogFavouritesComponent(blogService, authService) {
        _classCallCheck(this, BlogFavouritesComponent);

        this.blogService = blogService;
        this.authService = authService;
        this.blogs = [];
      }

      _createClass(BlogFavouritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getFavouriteBlogs();
        } //get favourite blogs based on user id

      }, {
        key: "getFavouriteBlogs",
        value: function getFavouriteBlogs() {
          var _this7 = this;

          this.message = 'Getting your favourite blogs...';
          this.authService.getCurrentUserId().then(function (userId) {
            _this7.blogService.getFavourites(userId).then(function (response) {
              _this7.blogs = response;
              _this7.message = '';
            })["catch"](function (error) {
              _this7.showError(error);
            });
          });
        }
      }, {
        key: "showError",
        value: function showError(error) {
          this.message = error.message;
        }
      }]);

      return BlogFavouritesComponent;
    }();

    BlogFavouritesComponent.??fac = function BlogFavouritesComponent_Factory(t) {
      return new (t || BlogFavouritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    BlogFavouritesComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BlogFavouritesComponent,
      selectors: [["app-blog-favourites"]],
      decls: 7,
      vars: 1,
      consts: [[1, "section"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12"], [1, "text-center"], ["class", "row justify-content-between section section-examples", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-between", "section", "section-examples"], [1, "col-md-6"], [1, "row", "justify-content-between", "align-items-center"], [3, "showIndicators"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "profile-title", "text-left"], [3, "routerLink"], [1, "profile-description", "text-left"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "d-block", 3, "alt", "src"], [1, "carousel-caption", "d-none", "d-md-block"]],
      template: function BlogFavouritesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Your favourite Blogs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](6, BlogFavouritesComponent_div_6_Template, 15, 6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.blogs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["SlideComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1mYXZvdXJpdGVzL2Jsb2ctZmF2b3VyaXRlcy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogFavouritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-favourites',
          templateUrl: './blog-favourites.component.html',
          styleUrls: ['./blog-favourites.component.css']
        }]
      }], function () {
        return [{
          type: _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/blog-list/blog-list.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/blog-list/blog-list.component.ts ***!
    \*************************************************************/

  /*! exports provided: BlogListComponent */

  /***/
  function srcAppComponentsBlogListBlogListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogListComponent", function () {
      return BlogListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/carousel */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");

    function BlogListComponent_div_2_slide_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "img", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var blogImage_r18 = ctx.$implicit;

        var blog_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/blogs/", blog_r15._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("alt", blog_r15.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("src", blogImage_r18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????sanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blog_r15.name);
      }
    }

    function BlogListComponent_div_2_a_16_button_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " Add To Favourites ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function BlogListComponent_div_2_a_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BlogListComponent_div_2_a_16_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r24);

          var blog_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r22.addFavourites(blog_r15._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, BlogListComponent_div_2_a_16_button_1_Template, 3, 0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var blog_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !blog_r15.favourites);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function BlogListComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "carousel", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](4, BlogListComponent_div_2_slide_4_Template, 6, 4, "slide", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h1", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "footer", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Author: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "cite", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, BlogListComponent_div_2_a_16_Template, 2, 1, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](17, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](20, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " Add Comments ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var blog_r15 = ctx.$implicit;

        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("showIndicators", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", blog_r15.images);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("routerLink", "/blogs/", blog_r15._id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blog_r15.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", blog_r15.description, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](blog_r15.author);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](17, 8, ctx_r14.isLoggedIn$));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](10, _c0, "/blogs/" + blog_r15._id));
      }
    }

    var BlogListComponent =
    /*#__PURE__*/
    function () {
      function BlogListComponent(blogService, userService, authService, router) {
        _classCallCheck(this, BlogListComponent);

        this.blogService = blogService;
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.blogs = [];
      }

      _createClass(BlogListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedIn$ = this.authService.isLoggedIn;
          this.getBlogs();
        }
      }, {
        key: "getBlogs",
        value: function getBlogs() {
          var _this8 = this;

          this.message = 'Getting blogs...';
          this.blogService.getBlogs().then(function (response) {
            var updatedBlogs = response; //get current user

            _this8.authService.getCurrentUserId().then(function (userId) {
              //get user's fav blog
              _this8.blogService.getFavourites(userId).then(function (res) {
                var favBlogs = res;

                for (var i = 0; i < updatedBlogs.length; i++) {
                  for (var k = 0; k < favBlogs.length; k++) {
                    if (updatedBlogs[i]._id == favBlogs[k]._id) {
                      updatedBlogs[k].favourites = true;
                      break;
                    }
                  }
                }

                _this8.blogs = updatedBlogs;
                _this8.message = '';
              })["catch"](function (err) {
                console.log("Error in getFavourites");
              });
            });
          })["catch"](function (error) {
            _this8.showError(error);
          });
        } //Add Blog to favorites

      }, {
        key: "addFavourites",
        value: function addFavourites(blogid) {
          var _this9 = this;

          this.authService.getCurrentUserId().then(function (userId) {
            _this9.blogService.addToFavourites(userId, blogid).then(function (response) {
              alert('Blog Added to Favourites');

              _this9.router.navigateByUrl('/', {
                skipLocationChange: true
              }).then(function () {
                _this9.router.navigate(['/blogs']);
              });
            })["catch"](function (error) {
              _this9.showError(error);
            });
          })["catch"](function (error) {
            _this9.showError("No user found");
          });
        }
      }, {
        key: "removeFavourites",
        value: function removeFavourites(blogid) {// this.authService.getCurrentUserId()
          //   .then((userId: string) => {
          //     this.blogService.removeFromFavourites(userId, blogid)
          //       .then((response: any) => {
          //         alert('Blog Added to Favourites');
          //       })
          //       .catch((error: string) => {
          //         this.showError(error);
          //       });
          //   })
          //   .catch((error: string) => {
          //     this.showError("No user found");
          //   })
        }
      }, {
        key: "showError",
        value: function showError(error) {
          this.message = error.message;
        }
      }]);

      return BlogListComponent;
    }();

    BlogListComponent.??fac = function BlogListComponent_Factory(t) {
      return new (t || BlogListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    BlogListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BlogListComponent,
      selectors: [["app-blog-list"]],
      decls: 3,
      vars: 1,
      consts: [[1, "section"], [1, "container"], ["class", "row justify-content-between section section-examples", 4, "ngFor", "ngForOf"], [1, "row", "justify-content-between", "section", "section-examples"], [1, "col-md-6"], [1, "row", "justify-content-between", "align-items-center"], [3, "showIndicators"], [4, "ngFor", "ngForOf"], [1, "col-md-5"], [1, "profile-title", "text-left"], [3, "routerLink"], [1, "profile-description", "text-left"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "btn-wrapper", "pt-3"], [3, "click", 4, "ngIf"], [1, "btn", "btn-simple", "btn-info"], [1, "tim-icons", "icon-pencil"], [1, "d-block", 3, "alt", "src"], [1, "carousel-caption", "d-none", "d-md-block"], [3, "click"], ["class", "btn btn-simple btn-danger mr-1", 4, "ngIf"], [1, "btn", "btn-simple", "btn-danger", "mr-1"], [1, "tim-icons", "icon-shape-star"]],
      template: function BlogListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, BlogListComponent_div_2_Template, 22, 12, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.blogs);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_6__["SlideComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy1saXN0L2Jsb2ctbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-list',
          templateUrl: './blog-list.component.html',
          styleUrls: ['./blog-list.component.css']
        }]
      }], function () {
        return [{
          type: src_app_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]
        }, {
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/blog-update/blog-update.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/blog-update/blog-update.component.ts ***!
    \*****************************************************************/

  /*! exports provided: BlogUpdateComponent */

  /***/
  function srcAppComponentsBlogUpdateBlogUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogUpdateComponent", function () {
      return BlogUpdateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _models_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../models/blog */
    "./src/app/models/blog.ts");
    /* harmony import */


    var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../blog.service */
    "./src/app/blog.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function BlogUpdateComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r26.formError);
      }
    }

    function BlogUpdateComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Enter all details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var BlogUpdateComponent =
    /*#__PURE__*/
    function () {
      function BlogUpdateComponent(route, blogService, router) {
        _classCallCheck(this, BlogUpdateComponent);

        this.route = route;
        this.blogService = blogService;
        this.router = router;
      }

      _createClass(BlogUpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.blog = new _models_blog__WEBPACK_IMPORTED_MODULE_1__["Blog"](); // this.blogid = this.route.snapshot.params["blogid"];
          // this.blogService.getSingleBlog(this.blogid);

          this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) {
            return _this10.blogService.getSingleBlog(params['blogid']);
          })).subscribe(function (blog) {
            _this10.blog = blog;
          });
        }
      }, {
        key: "updateBlog",
        value: function updateBlog(blog) {
          this.blogService.updateBlog(this.blogid, blog);
        }
      }, {
        key: "formIsValid",
        value: function formIsValid() {
          if (this.blog.author && this.blog.name && this.blog.images) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "onReviewSubmit",
        value: function onReviewSubmit() {
          this.formError = '';

          if (this.formIsValid()) {
            this.formError = "Data Updated Succesfully";
            this.router.navigate(["/"]);
          } else {
            this.formError = 'All fields are required, Please try again';
          }
        }
      }]);

      return BlogUpdateComponent;
    }();

    BlogUpdateComponent.??fac = function BlogUpdateComponent_Factory(t) {
      return new (t || BlogUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    BlogUpdateComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: BlogUpdateComponent,
      selectors: [["app-blog-update"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])],
      decls: 29,
      vars: 10,
      consts: [[1, "section"], [1, "container"], [3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["for", "author"], ["type", "text", "id", "author", "name", "author", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["for", "description"], ["id", "description", "rows", "5", "name", "description", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["for", "images"], ["type", "text", "id", "images", "name", "images", 1, "form-control", 3, "placeholder", "ngModel", "ngModelChange"], ["class", "alert alert-info", "role", "alert", 4, "ngIf", "ngIfElse"], ["notshow", ""], [1, "text-center"], ["type", "submit", 1, "btn", "btn-primary"], ["role", "alert", 1, "alert", "alert-info"]],
      template: function BlogUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function BlogUpdateComponent_Template_form_ngSubmit_3_listener() {
            ctx.updateBlog(ctx.blog);
            return ctx.onReviewSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Blog Topic Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BlogUpdateComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.blog.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BlogUpdateComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.blog.author = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BlogUpdateComponent_Template_textarea_ngModelChange_17_listener($event) {
            return ctx.blog.description = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Image URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function BlogUpdateComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.blog.images = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](23, BlogUpdateComponent_div_23_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, BlogUpdateComponent_ng_template_24_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](28, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", ctx.blog.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.blog.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", ctx.blog.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.blog.author);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", ctx.blog.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.blog.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("placeholder", ctx.blog.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.blog.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.formError)("ngIfElse", _r27);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy11cGRhdGUvYmxvZy11cGRhdGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BlogUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog-update',
          templateUrl: './blog-update.component.html',
          styleUrls: ['./blog-update.component.css'],
          providers: [_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.??fac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 18,
      vars: 0,
      consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-md-3"], [1, "title"], [1, "btn-wrapper", "profile"], ["href", "https://twitter.com", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], [1, "fab", "fa-twitter"], ["href", "https://www.facebook.com", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple", "mr-1"], [1, "fab", "fa-facebook"], ["href", "https://dribbble.com", "target", "_blank", 1, "btn", "btn-icon", "btn-neutral", "btn-round", "btn-simple"], [1, "fab", "fa-dribbble"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Blog\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Follow us:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/framework/framework.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/framework/framework.component.ts ***!
    \*************************************************************/

  /*! exports provided: FrameworkComponent */

  /***/
  function srcAppComponentsFrameworkFrameworkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function () {
      return FrameworkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var FrameworkComponent =
    /*#__PURE__*/
    function () {
      function FrameworkComponent(renderer, location, document) {
        _classCallCheck(this, FrameworkComponent);

        this.renderer = renderer;
        this.location = location;
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
      }

      _createClass(FrameworkComponent, [{
        key: "scrollToDownload",
        value: function scrollToDownload(element) {// element.scrollIntoView({ behavior: "smooth" });
        }
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll(e) {
          if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");

            if (element) {
              element.classList.remove("navbar-transparent");
              element.classList.add("bg-danger");
            }
          } else {
            var element = document.getElementById("navbar-top");

            if (element) {
              element.classList.add("navbar-transparent");
              element.classList.remove("bg-danger");
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onWindowScroll(event);
          var body = document.getElementsByTagName("body")[0];
          body.classList.add("index-page");
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var body = document.getElementsByTagName("body")[0];
          body.classList.remove("index-page");
        }
      }]);

      return FrameworkComponent;
    }();

    FrameworkComponent.??fac = function FrameworkComponent_Factory(t) {
      return new (t || FrameworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    FrameworkComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: FrameworkComponent,
      selectors: [["app-framework"]],
      hostBindings: function FrameworkComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function FrameworkComponent_scroll_HostBindingHandler($event) {
            return ctx.scrollToDownload($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
        }
      },
      decls: 5,
      vars: 0,
      consts: [[1, "wrapper"], [1, "main"]],
      template: function FrameworkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "app-footer");
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZnJhbWV3b3JrL2ZyYW1ld29yay5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](FrameworkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-framework',
          templateUrl: './framework.component.html',
          styleUrls: ['./framework.component.css']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        scrollToDownload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:scroll", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/index/index.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/index/index.component.ts ***!
    \*****************************************************/

  /*! exports provided: IndexComponent */

  /***/
  function srcAppComponentsIndexIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexComponent", function () {
      return IndexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../blog-list/blog-list.component */
    "./src/app/components/blog-list/blog-list.component.ts");

    var IndexComponent =
    /*#__PURE__*/
    function () {
      function IndexComponent(userService, renderer, location, document) {
        _classCallCheck(this, IndexComponent);

        this.userService = userService;
        this.renderer = renderer;
        this.location = location;
        this.isCollapsed = true;
        this.date = new Date();
        this.pagination = 3;
        this.pagination1 = 1;
      }

      _createClass(IndexComponent, [{
        key: "scrollToDownload",
        value: function scrollToDownload(element) {// element.scrollIntoView({ behavior: "smooth" });
        }
      }, {
        key: "onWindowScroll",
        value: function onWindowScroll(e) {
          if (window.pageYOffset > 100) {
            var element = document.getElementById("navbar-top");

            if (element) {
              element.classList.remove("navbar-transparent");
              element.classList.add("bg-danger");
            }
          } else {
            var element = document.getElementById("navbar-top");

            if (element) {
              element.classList.add("navbar-transparent");
              element.classList.remove("bg-danger");
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var body = document.getElementsByTagName("body")[0];
          body.classList.add("index-page");
          this.getUserinfo();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var body = document.getElementsByTagName("body")[0];
          body.classList.remove("index-page");
        }
      }, {
        key: "getUserinfo",
        value: function getUserinfo() {
          var token = localStorage.getItem("token");

          if (token) {
            this.userService.getUser(token).then(function (user) {
              if (user) {//use this data for user ptofile
                // do not show register and login tab
              } else {//show register and login tab
                }
            });
          }
        }
      }]);

      return IndexComponent;
    }();

    IndexComponent.??fac = function IndexComponent_Factory(t) {
      return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
    };

    IndexComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: IndexComponent,
      selectors: [["app-index"]],
      hostBindings: function IndexComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("scroll", function IndexComponent_scroll_HostBindingHandler($event) {
            return ctx.scrollToDownload($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????resolveWindow"]);
        }
      },
      decls: 16,
      vars: 0,
      consts: [[1, "page-header", "header-filter"], [1, "squares", "square1"], [1, "squares", "square2"], [1, "squares", "square3"], [1, "squares", "square4"], [1, "squares", "square5"], [1, "squares", "square6"], [1, "squares", "square7"], [1, "container"], [1, "content-center", "brand"], [1, "h1-seo"], [1, "main"]],
      template: function IndexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Blog\u2022");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, " A beautiful website to express your thought and share with others. It's Free to use. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "app-blog-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_3__["BlogListComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-index",
          templateUrl: "index.component.html"
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }];
      }, {
        scrollToDownload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ["window:scroll", ["$event"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/log-in/log-in.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/log-in/log-in.component.ts ***!
    \*******************************************************/

  /*! exports provided: LogInComponent */

  /***/
  function srcAppComponentsLogInLogInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogInComponent", function () {
      return LogInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LogInComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r43.formError, " ");
      }
    }

    var LogInComponent =
    /*#__PURE__*/
    function () {
      function LogInComponent(userService, router, authService) {
        _classCallCheck(this, LogInComponent);

        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.formError = '';
        this.newUser = {
          _id: '',
          name: null,
          email: '',
          password: ''
        };
      }

      _createClass(LogInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onLogin",
        value: function onLogin() {
          this.formError = '';

          if (this.formIsValid()) {
            var res = this.authService.login(this.newUser);
            console.log(res);

            if (res !== null) {
              this.formError = res;
            }
          } else {
            this.formError = 'All fields required. Please, try again!';
          }
        }
      }, {
        key: "formIsValid",
        value: function formIsValid() {
          if (this.newUser.email && this.newUser.password) return true;
          return false;
        }
      }]);

      return LogInComponent;
    }();

    LogInComponent.??fac = function LogInComponent_Factory(t) {
      return new (t || LogInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    LogInComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LogInComponent,
      selectors: [["app-log-in"]],
      decls: 42,
      vars: 3,
      consts: [[1, "wrapper"], [1, "page-header"], [1, "page-header-image"], [1, "content"], [1, "container"], [1, "row", 2, "justify-content", "center", "align-content", "center"], [1, "col-lg-5", "col-md-6", "offset-lg-0", "offset-md-3"], ["id", "square7", 1, "square", "square-7", 2, "transform", "perspective(500px) rotateY(8.03deg) rotateX(-5.41667deg)"], ["id", "square8", 1, "square", "square-8", 2, "transform", "perspective(500px) rotateY(8.03deg) rotateX(-5.41667deg)"], [1, "card", "card-register"], [1, "card-header"], ["alt", "Card image", "src", "assets/img/square1-red.png", 1, "card-img"], [1, "card-title"], [1, "card-body"], ["novalidate", "", 1, "form", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngSubmit"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "tim-icons", "icon-email-85"], ["autocomplete", "off", "name", "email", "placeholder", "Email", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "tim-icons", "icon-lock-circle"], ["autocomplete", "off", "name", "password", "placeholder", "Password", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-danger", "btn-round", "btn-lg"], [1, "card-footer", 2, "display", "flex", "justify-content", "center", "align-content", "center"], ["routerLink", "/register"], [1, "register-bg"], ["id", "square1", 1, "square", "square-1", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square2", 1, "square", "square-2", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square3", 1, "square", "square-3", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square4", 1, "square", "square-4", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square5", 1, "square", "square-5", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square6", 1, "square", "square-6", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["role", "alert", 1, "alert", "alert-danger"]],
      template: function LogInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LogInComponent_Template_form_ngSubmit_16_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, LogInComponent_div_17_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LogInComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.newUser.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function LogInComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.newUser.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Don't Have Account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, " Register Here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.formError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.password);
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9nLWluL2xvZy1pbi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LogInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-log-in',
          templateUrl: './log-in.component.html',
          styleUrls: ['./log-in.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/nav/nav.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/nav/nav.component.ts ***!
    \*************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppComponentsNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/collapse */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm2015/ngx-bootstrap-collapse.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/dropdown */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");

    function NavComponent_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function NavComponent_ng_template_22_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "p", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Profile ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavComponent_ng_template_22_div_10_Template_a_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

          return ctx_r7.onLogout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Logout ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, "/update/" + ctx_r6.userid));
      }
    }

    function NavComponent_ng_template_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "a", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "i", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](10, NavComponent_ng_template_22_div_10_Template, 9, 4, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    function NavComponent_ng_template_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ul", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "li", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "i", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Sign In ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }
    }

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent(authService, userService) {
        _classCallCheck(this, NavComponent);

        this.authService = authService;
        this.userService = userService;
        this.isCollapsed = true;
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.isLoggedIn$ = this.authService.isLoggedIn;
          this.getSingleUser().then(function (data) {
            _this11.userid = data._id;
            _this11.username = data.name;
          });
        }
      }, {
        key: "onLogout",
        value: function onLogout() {
          this.authService.logout();
        }
      }, {
        key: "getSingleUser",
        value: function getSingleUser() {
          var _this12 = this;

          return new Promise(function (resolve, reject) {
            var token = localStorage.getItem("token");

            if (token) {
              _this12.userService.getUser(token).then(function (user) {
                if (user) {
                  resolve(user.data);
                }
              })["catch"](function (res) {
                reject(res);
                return;
              });
            }
          });
        }
      }]);

      return NavComponent;
    }();

    NavComponent.??fac = function NavComponent_Factory(t) {
      return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    NavComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 26,
      vars: 8,
      consts: [["color-on-scroll", "100", "id", "navbar-top", 1, "navbar", "navbar-expand-lg", "fixed-top", "navbar-transparent"], [1, "container"], [1, "navbar-translate"], ["placement", "bottom", "routerLink", "/", "routerLinkActive", "active", 1, "navbar-brand"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", "navbar-toggler", 3, "click"], [1, "navbar-toggler-bar", "bar1"], [1, "navbar-toggler-bar", "bar2"], [1, "navbar-toggler-bar", "bar3"], ["id", "navigation", 1, "navbar-collapse", "justify-content-end", 3, "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "navigation", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "tim-icons", "icon-simple-remove"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["loggedIn", ""], ["loggedOut", ""], [1, "navbar-nav", "ml-auto"], [1, "nav-item"], ["routerLink", "/blogs/new", 1, "nav-link"], ["aria-hidden", "true", "tooltip", "Create Blog", 1, "tim-icons", "icon-paper"], ["routerLink", "/blogs/favourites", 1, "nav-link"], ["aria-hidden", "true", "tooltip", "View Favourites", 1, "tim-icons", "icon-shape-star"], ["dropdown", "", 1, "nav-item", "dropdown"], ["data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:void(0)", "id", "navbarDropdownMenuLink", 1, "nav-link", "dropdown-toggle", "dropdown-toggle"], ["aria-hidden", "true", 1, "tim-icons", "icon-settings-gear-63"], ["aria-labelledby", "navbarDropdownMenuLink", "class", "dropdown-menu dropdown-menu-right", 4, "dropdownMenu"], ["aria-labelledby", "navbarDropdownMenuLink", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0)", 1, "dropdown-item"], [1, "text-info"], [1, "divider"], [1, "dropdown-item", 3, "routerLink"], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], ["routerLink", "/login", 1, "nav-link"], ["aria-hidden", "true", 1, "fas", "fa-sign-in-alt"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, " Blog\u2022 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Write Your Thoughts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavComponent_Template_button_click_7_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " Blog ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function NavComponent_Template_button_click_18_listener() {
            return ctx.isCollapsed = !ctx.isCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](20, NavComponent_ng_container_20_Template, 1, 0, "ng-container", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](22, NavComponent_ng_template_22_Template, 11, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](24, NavComponent_ng_template_24_Template, 5, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](23);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("collapse", ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-expanded", !ctx.isCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pipeBind1"](21, 6, ctx.isLoggedIn$))("ngIfThen", _r1)("ngIfElse", _r3);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownMenuDirective"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.css']
        }]
      }], function () {
        return [{
          type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/register-page/register-page.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/register-page/register-page.component.ts ***!
    \*********************************************************************/

  /*! exports provided: RegisterPageComponent */

  /***/
  function srcAppComponentsRegisterPageRegisterPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function () {
      return RegisterPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegisterPageComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r44.formError, " ");
      }
    }

    var RegisterPageComponent =
    /*#__PURE__*/
    function () {
      function RegisterPageComponent(userService, router) {
        _classCallCheck(this, RegisterPageComponent);

        this.userService = userService;
        this.router = router;
        this.formError = '';
        this.newUser = {
          _id: '',
          name: '',
          email: '',
          password: ''
        };
      }

      _createClass(RegisterPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onRegister",
        value: function onRegister() {
          var _this13 = this;

          this.formError = '';

          if (this.formIsValid()) {
            this.userService.registerUser(this.newUser).then(function (user) {
              if (user) {
                if (user.status === "ok") {
                  _this13.router.navigate(["/update/".concat(user.data._id)]);
                } else if (user.status === "error") {
                  _this13.formError = user.error;
                }
              } else {
                _this13.formError = 'Ops, something went wrong. Please, try later!';
              }
            });
          } else {
            this.formError = 'All fields required. Please, try again!';
          }
        }
      }, {
        key: "formIsValid",
        value: function formIsValid() {
          if (this.newUser.name && this.newUser.email && this.newUser.password) return true;
          return false;
        }
      }]);

      return RegisterPageComponent;
    }();

    RegisterPageComponent.??fac = function RegisterPageComponent_Factory(t) {
      return new (t || RegisterPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    RegisterPageComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: RegisterPageComponent,
      selectors: [["app-register-page"]],
      decls: 55,
      vars: 4,
      consts: [[1, "wrapper"], [1, "page-header"], [1, "page-header-image"], [1, "content"], [1, "container"], [1, "row", 2, "justify-content", "center", "align-content", "center"], [1, "col-lg-5", "col-md-6", "offset-lg-0", "offset-md-3"], ["id", "square7", 1, "square", "square-7", 2, "transform", "perspective(500px) rotateY(8.03deg) rotateX(-5.41667deg)"], ["id", "square8", 1, "square", "square-8", 2, "transform", "perspective(500px) rotateY(8.03deg) rotateX(-5.41667deg)"], [1, "card", "card-register"], [1, "card-header"], ["alt", "Card image", "src", "assets/img/square1-red.png", 1, "card-img"], [1, "card-title"], [1, "card-body"], ["novalidate", "", 1, "form", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngSubmit"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "tim-icons", "icon-single-02"], ["autocomplete", "off", "name", "name", "placeholder", "Full Name", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "tim-icons", "icon-email-85"], ["autocomplete", "off", "name", "email", "placeholder", "Email", "type", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "tim-icons", "icon-lock-circle"], ["autocomplete", "off", "name", "password", "placeholder", "Password", "type", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-check", "text-left"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input"], [1, "form-check-sign"], ["href", "javascript:void(0)"], ["type", "submit", 1, "btn", "btn-danger", "btn-round", "btn-lg"], [1, "card-footer", 2, "display", "flex", "justify-content", "center", "align-content", "center"], ["routerLink", "/login"], [1, "register-bg"], ["id", "square1", 1, "square", "square-1", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square2", 1, "square", "square-2", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square3", 1, "square", "square-3", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square4", 1, "square", "square-4", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square5", 1, "square", "square-5", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square6", 1, "square", "square-6", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["role", "alert", 1, "alert", "alert-danger"]],
      template: function RegisterPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function RegisterPageComponent_Template_form_ngSubmit_16_listener() {
            return ctx.onRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, RegisterPageComponent_div_17_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](21, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.newUser.name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](26, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.newUser.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function RegisterPageComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.newUser.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, " I agree to the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, " terms and conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](40, " . ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](41, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](42, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Already Have Account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](47, " Login Here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](48, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](49, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](50, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](52, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](54, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.formError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.password);
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXItcGFnZS9yZWdpc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RegisterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register-page',
          templateUrl: './register-page.component.html',
          styleUrls: ['./register-page.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/search/search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/search/search.component.ts ***!
    \*******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchComponent;
    }();

    SearchComponent.??fac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)();
    };

    SearchComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 2,
      vars: 0,
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "search works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/update-profile/update-profile.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/update-profile/update-profile.component.ts ***!
    \***********************************************************************/

  /*! exports provided: UpdateProfileComponent */

  /***/
  function srcAppComponentsUpdateProfileUpdateProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function () {
      return UpdateProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../nav/nav.component */
    "./src/app/components/nav/nav.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UpdateProfileComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx_r45.formError, " ");
      }
    }

    var UpdateProfileComponent =
    /*#__PURE__*/
    function () {
      function UpdateProfileComponent(userService, router, route) {
        _classCallCheck(this, UpdateProfileComponent);

        this.userService = userService;
        this.router = router;
        this.route = route;
        this.formError = '';
        this.newUser = {
          _id: this.route.snapshot.paramMap.get('userid'),
          dob: '',
          address: '',
          city: '',
          province: '',
          zipcode: '',
          phone: '',
          image: null
        };
      }

      _createClass(UpdateProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.getCurrentUser().then(function (data) {
            _this14.newUser = data;
          });
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          var _this15 = this;

          return new Promise(function (resolve, reject) {
            var token = localStorage.getItem("token");

            if (token) {
              _this15.userService.getUser(token).then(function (user) {
                if (user) {
                  resolve(user.data);
                }
              })["catch"](function (res) {
                reject(res);
                return;
              });
            }
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this16 = this;

          this.formError = '';

          if (this.formIsValid()) {
            this.userService.updateUser(this.newUser).then(function (user) {
              if (user) {
                if (user.status === "ok") {
                  _this16.router.navigate(["/"]);
                } else if (user.status === "error") {
                  _this16.formError = user.error;
                }
              } else {
                _this16.formError = 'Ops, something went wrong. Please, try later!';
              }
            });
          } else {
            this.formError = 'All fields required. Please, try again!';
          }
        }
      }, {
        key: "formIsValid",
        value: function formIsValid() {
          if (this.newUser.dob && this.newUser.address && this.newUser.city && this.newUser.province && this.newUser.zipcode && this.newUser.phone) return true;
          return false;
        }
      }]);

      return UpdateProfileComponent;
    }();

    UpdateProfileComponent.??fac = function UpdateProfileComponent_Factory(t) {
      return new (t || UpdateProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    UpdateProfileComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: UpdateProfileComponent,
      selectors: [["app-update-profile"]],
      decls: 45,
      vars: 7,
      consts: [[1, "wrapper"], [1, "page-header"], [1, "page-header-image"], [1, "content"], [1, "container"], [1, "row", 2, "justify-content", "center", "align-content", "center"], [1, "col-lg-5", "col-md-6", "offset-lg-0", "offset-md-3"], ["id", "square7", 1, "square", "square-7", 2, "transform", "perspective(500px) rotateY(8.03deg) rotateX(-5.41667deg)"], ["id", "square8", 1, "square", "square-8", 2, "transform", "perspective(500px) rotateY(8.03deg) rotateX(-5.41667deg)"], [1, "card", "card-register"], [1, "card-header"], ["alt", "Card image", "src", "assets/img/square1-red.png", 1, "card-img"], [1, "card-title"], [1, "card-body"], ["novalidate", "", 1, "form", "ng-untouched", "ng-pristine", "ng-valid", 3, "ngSubmit"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "input-group"], [1, "input-group-prepend"], ["autocomplete", "off", "name", "dob", "placeholder", "Date of Birth", "type", "date", 1, "form-control", 3, "ngModel", "ngModelChange"], ["autocomplete", "off", "name", "address", "placeholder", "Address", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["autocomplete", "off", "name", "city", "placeholder", "City", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["autocomplete", "off", "name", "province", "placeholder", "Province", "type", "text", 1, "form-control", 3, "ngModel", "ngModelChange"], ["autocomplete", "off", "name", "zipcode", "placeholder", "Zipcode", 1, "form-control", 3, "ngModel", "ngModelChange"], ["autocomplete", "off", "name", "phone", "placeholder", "Phone", "type", "number", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-danger", "btn-round", "btn-lg"], [1, "register-bg"], ["id", "square1", 1, "square", "square-1", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square2", 1, "square", "square-2", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square3", 1, "square", "square-3", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square4", 1, "square", "square-4", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square5", 1, "square", "square-5", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["id", "square6", 1, "square", "square-6", 2, "transform", "perspective(500px) rotateY(20.075deg) rotateX(-13.5417deg)"], ["role", "alert", 1, "alert", "alert-danger"]],
      template: function UpdateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h4", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function UpdateProfileComponent_Template_form_ngSubmit_16_listener() {
            return ctx.onUpdate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](17, UpdateProfileComponent_div_17_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.newUser.dob = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.newUser.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.newUser.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.newUser.province = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_32_listener($event) {
            return ctx.newUser.zipcode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngModelChange", function UpdateProfileComponent_Template_input_ngModelChange_35_listener($event) {
            return ctx.newUser.phone = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](42, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](44, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.formError);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.dob);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.province);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.zipcode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngModel", ctx.newUser.phone);
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UpdateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-update-profile',
          templateUrl: './update-profile.component.html',
          styleUrls: ['./update-profile.component.css']
        }]
      }], function () {
        return [{
          type: src_app_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/global.ts":
  /*!***************************!*\
    !*** ./src/app/global.ts ***!
    \***************************/

  /*! exports provided: BASEURL, API_BASE_URL, BLOGS_URL, USERS_URL */

  /***/
  function srcAppGlobalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BASEURL", function () {
      return BASEURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function () {
      return API_BASE_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BLOGS_URL", function () {
      return BLOGS_URL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USERS_URL", function () {
      return USERS_URL;
    });

    var BASEURL = //`https://blog-grp-prj-v1.herokuapp.com/`;
    "http://localhost:3000";
    var API_BASE_URL = "".concat(BASEURL, "/api");
    var BLOGS_URL = "".concat(API_BASE_URL, "/blogs");
    var USERS_URL = "".concat(BASEURL, "/users");
    /***/
  },

  /***/
  "./src/app/models/blog.ts":
  /*!********************************!*\
    !*** ./src/app/models/blog.ts ***!
    \********************************/

  /*! exports provided: Blog */

  /***/
  function srcAppModelsBlogTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Blog", function () {
      return Blog;
    });

    var Blog = function Blog() {
      _classCallCheck(this, Blog);
    };
    /***/

  },

  /***/
  "./src/app/search.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/search.pipe.ts ***!
    \********************************/

  /*! exports provided: SearchPipe */

  /***/
  function srcAppSearchPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
      return SearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchPipe =
    /*#__PURE__*/
    function () {
      function SearchPipe() {
        _classCallCheck(this, SearchPipe);
      }

      _createClass(SearchPipe, [{
        key: "transform",
        value: function transform(value, input) {
          if (input) {
            input = input.toLowerCase();
            return value.filter(function (el) {
              return el.toLowerCase().indexOf(input) > -1;
            });
          }

          return value;
        }
      }]);

      return SearchPipe;
    }();

    SearchPipe.??fac = function SearchPipe_Factory(t) {
      return new (t || SearchPipe)();
    };

    SearchPipe.??pipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????definePipe"]({
      name: "search",
      type: SearchPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'search'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./global */
    "./src/app/global.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "registerUser",
        value: function registerUser(newUser) {
          var url = "".concat(_global__WEBPACK_IMPORTED_MODULE_1__["BASEURL"], "/users/create");
          return this.http.post(url, newUser).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "updateUser",
        value: function updateUser(newUser) {
          var url = "".concat(_global__WEBPACK_IMPORTED_MODULE_1__["BASEURL"], "/users/update/").concat(newUser._id);
          return this.http.put(url, newUser).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "login",
        value: function login(newUser) {
          var url = "".concat(_global__WEBPACK_IMPORTED_MODULE_1__["BASEURL"], "/users/login");
          return this.http.post(url, newUser).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "getUser",
        value: function getUser(token) {
          var url = "".concat(_global__WEBPACK_IMPORTED_MODULE_1__["BASEURL"], "/users/").concat(token);
          return this.http.get(url).toPromise().then(function (response) {
            return response;
          })["catch"](this.handleError);
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log(error);
        }
      }]);

      return UserService;
    }();

    UserService.??fac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: UserService,
      factory: UserService.??fac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\12269\Siddharth\semester 3\MEAN\assignment\final\blogsite\blog-public\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map