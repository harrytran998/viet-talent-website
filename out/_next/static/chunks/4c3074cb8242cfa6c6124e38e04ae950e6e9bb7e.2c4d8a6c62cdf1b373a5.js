(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{zp0Q:function(e,t,a){"use strict";var r=a("q1tI"),s=a.n(r),o=a("IP2g");a("17x9");function l(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var n=l("Tab"),i=l("TabList"),c=l("TabPanel");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){return r.Children.map(e,(function(e){return null===e?null:function(e){return n(e)||i(e)||c(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?Object(r.cloneElement)(e,p(p({},e.props),{},{children:m(e.props.children,t)})):e}))}function f(e,t){return r.Children.forEach(e,(function(e){null!==e&&(n(e)||c(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(i(e)&&t(e),f(e.props.children,t)))}))}function g(e){var t,a,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=g(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var b,h=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=g(e))&&(r&&(r+=" "),r+=t);return r},v=0;function N(){return"react-tabs-"+v++}function y(e){var t=0;return f(e,(function(e){n(e)&&t++})),t}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function x(e){return e&&"getAttribute"in e}function T(e){return x(e)&&"tab"===e.getAttribute("role")}function j(e){return x(e)&&"true"===e.getAttribute("aria-disabled")}try{b=!("undefined"===typeof window||!window.document||!window.document.activeElement)}catch(R){b=!1}var C=function(e){var t,a;function o(){for(var t,a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))||this).tabNodes=[],t.handleKeyDown=function(e){var a=t.props.direction;if(t.isTabFromContainer(e.target)){var r=t.props.selectedIndex,s=!1,o=!1;32!==e.keyCode&&13!==e.keyCode||(s=!0,o=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(r="rtl"===a?t.getNextTab(r):t.getPrevTab(r),s=!0,o=!0):39===e.keyCode||40===e.keyCode?(r="rtl"===a?t.getPrevTab(r):t.getNextTab(r),s=!0,o=!0):35===e.keyCode?(r=t.getLastTab(),s=!0,o=!0):36===e.keyCode&&(r=t.getFirstTab(),s=!0,o=!0),s&&e.preventDefault(),o&&t.setSelected(r,e)}},t.handleClick=function(e){var a=e.target;do{if(t.isTabFromContainer(a)){if(j(a))return;var r=[].slice.call(a.parentNode.children).filter(T).indexOf(a);return void t.setSelected(r,e)}}while(null!=(a=a.parentNode))},t}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=o.prototype;return l.setSelected=function(e,t){if(!(e<0||e>=this.getTabsCount())){var a=this.props;(0,a.onSelect)(e,a.selectedIndex,t)}},l.getNextTab=function(e){for(var t=this.getTabsCount(),a=e+1;a<t;a++)if(!j(this.getTab(a)))return a;for(var r=0;r<e;r++)if(!j(this.getTab(r)))return r;return e},l.getPrevTab=function(e){for(var t=e;t--;)if(!j(this.getTab(t)))return t;for(t=this.getTabsCount();t-- >e;)if(!j(this.getTab(t)))return t;return e},l.getFirstTab=function(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!j(this.getTab(t)))return t;return null},l.getLastTab=function(){for(var e=this.getTabsCount();e--;)if(!j(this.getTab(e)))return e;return null},l.getTabsCount=function(){return y(this.props.children)},l.getPanelsCount=function(){return function(e){var t=0;return f(e,(function(e){c(e)&&t++})),t}(this.props.children)},l.getTab=function(e){return this.tabNodes["tabs-"+e]},l.getChildren=function(){var e=this,t=0,a=this.props,o=a.children,l=a.disabledTabClassName,d=a.focus,p=a.forceRenderTabPanel,u=a.selectedIndex,f=a.selectedTabClassName,g=a.selectedTabPanelClassName;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var h=this.tabIds.length-this.getTabsCount();h++<0;)this.tabIds.push(N()),this.panelIds.push(N());return m(o,(function(a){var o=a;if(i(a)){var h=0,v=!1;b&&(v=s.a.Children.toArray(a.props.children).filter(n).some((function(t,a){return document.activeElement===e.getTab(a)}))),o=Object(r.cloneElement)(a,{children:m(a.props.children,(function(t){var a="tabs-"+h,s=u===h,o={tabRef:function(t){e.tabNodes[a]=t},id:e.tabIds[h],panelId:e.panelIds[h],selected:s,focus:s&&(d||v)};return f&&(o.selectedClassName=f),l&&(o.disabledClassName=l),h++,Object(r.cloneElement)(t,o)}))})}else if(c(a)){var N={id:e.panelIds[t],tabId:e.tabIds[t],selected:u===t};p&&(N.forceRender=p),g&&(N.selectedClassName=g),t++,o=Object(r.cloneElement)(a,N)}return o}))},l.isTabFromContainer=function(e){if(!T(e))return!1;var t=e.parentElement;do{if(t===this.node)return!0;if(t.getAttribute("data-tabs"))break;t=t.parentElement}while(t);return!1},l.render=function(){var e=this,t=this.props,a=(t.children,t.className),r=(t.disabledTabClassName,t.domRef),o=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]));return s.a.createElement("div",w({},o,{className:h(a),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(t){e.node=t,r&&r(t)},"data-tabs":!0}),this.getChildren())},o}(r.Component);C.defaultProps={className:"react-tabs",focus:!1},C.propTypes={};var P=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).handleSelected=function(e,t,r){var s=a.props.onSelect,o=a.state.mode;if("function"!==typeof s||!1!==s(e,t,r)){var l={focus:"keydown"===r.type};1===o&&(l.selectedIndex=e),a.setState(l)}},a.state=r.copyPropsToState(a.props,{},t.defaultFocus),a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.getDerivedStateFromProps=function(e,t){return r.copyPropsToState(e,t)},r.getModeFromProps=function(e){return null===e.selectedIndex?1:0},r.copyPropsToState=function(e,t,a){void 0===a&&(a=!1);var s={focus:a,mode:r.getModeFromProps(e)};if(1===s.mode){var o=y(e.children)-1,l=null;l=null!=t.selectedIndex?Math.min(t.selectedIndex,o):e.defaultIndex||0,s.selectedIndex=l}return s},r.prototype.render=function(){var e=this.props,t=e.children,a=(e.defaultIndex,e.defaultFocus,function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["children","defaultIndex","defaultFocus"])),r=this.state,o=r.focus,l=r.selectedIndex;return a.focus=o,a.onSelect=this.handleSelected,null!=l&&(a.selectedIndex=l),s.a.createElement(C,a,t)},r}(r.Component);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}P.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},P.propTypes={},P.tabsRole="Tabs";var I=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.children,a=e.className,r=function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["children","className"]);return s.a.createElement("ul",O({},r,{className:h(a),role:"tablist"}),t)},r}(r.Component);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}I.defaultProps={className:"react-tabs__tab-list"},I.propTypes={},I.tabsRole="TabList";var S=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){this.checkFocus()},o.componentDidUpdate=function(){this.checkFocus()},o.checkFocus=function(){var e=this.props,t=e.selected,a=e.focus;t&&a&&this.node.focus()},o.render=function(){var e,t=this,a=this.props,r=a.children,o=a.className,l=a.disabled,n=a.disabledClassName,i=(a.focus,a.id),c=a.panelId,d=a.selected,p=a.selectedClassName,u=a.tabIndex,m=a.tabRef,f=function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(a,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"]);return s.a.createElement("li",_({},f,{className:h(o,(e={},e[p]=d,e[n]=l,e)),ref:function(e){t.node=e,m&&m(e)},role:"tab",id:i,"aria-selected":d?"true":"false","aria-disabled":l?"true":"false","aria-controls":c,tabIndex:u||(d?"0":null)}),r)},r}(r.Component);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}S.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},S.propTypes={},S.tabsRole="Tab";var k=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e,t=this.props,a=t.children,r=t.className,o=t.forceRender,l=t.id,n=t.selected,i=t.selectedClassName,c=t.tabId,d=function(e,t){if(null==e)return{};var a,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"]);return s.a.createElement("div",D({},d,{className:h(r,(e={},e[i]=n,e)),role:"tabpanel",id:l,"aria-labelledby":c}),o||n?a:null)},r}(r.Component);k.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},k.propTypes={},k.tabsRole="TabPanel";var E=s.a.createElement;t.a=function(){var e="tab-menu".tabStyle;return E("div",{className:"gallery-area pt-125 pb-130"},E("div",{className:"container"},E(P,{className:"row mb-40"},E("div",{className:"col-xl-5 col-lg-5"},E("div",{className:"section-title  mb-30"},E("span",{className:"b-sm-left-2"}),E("span",{className:"sub-t-left"},"our project"),E("h1",null,"Our Latest Case Studies"))),E("div",{className:"col-xl-7 col-lg-7 mb-30"},E("div",{className:"portfolio-menu mt-120 text-lg-right mb-30"},E(I,{className:"".concat(e)},E(S,null,"All Project"),E(S,null,"Product"),E(S,null,"Development"),E(S,null,"Software"),E(S,null,"Design")))),E(k,null,E("div",{className:"col-12"},E("div",{id:"portfolio-grid",className:"row row-portfolio"},E("div",{className:"grid-sizer"}),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat4 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-01.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat1 cat2 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-02.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 cat1 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-03.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-04.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-05.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat3 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-06.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," ")))))))),E(k,null,E("div",{className:"col-12"},E("div",{id:"portfolio-grid",className:"row row-portfolio"},E("div",{className:"grid-sizer"}),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat1 cat2 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-02.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 cat1 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-03.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat4 cat3 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-06.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," ")))))))),E(k,null,E("div",{className:"col-12"},E("div",{id:"portfolio-grid",className:"row row-portfolio"},E("div",{className:"grid-sizer"}),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat2 cat4 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-01.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat1 cat4 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-04.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-4 col-lg-4 col-md-6 grid-item cat3 cat2 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-05.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," ")))))))),E(k,null,E("div",{className:"col-12"},E("div",{id:"portfolio-grid",className:"row row-portfolio"},E("div",{className:"grid-sizer"}),E("div",{className:"col-xl-12 col-lg-4 col-md-6 grid-item cat2 cat4 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-01.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," ")))))))),E(k,null,E("div",{className:"col-12"},E("div",{id:"portfolio-grid",className:"row row-portfolio"},E("div",{className:"grid-sizer"}),E("div",{className:"col-xl-6 col-lg-4 col-md-6 grid-item cat3 cat2 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-05.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))),E("div",{className:"col-xl-6 col-lg-4 col-md-6 grid-item cat4 cat3 mb-30"},E("div",{className:"portfolio-wrapper"},E("div",{className:"portfolio-img"},E("a",{href:"#"},E("img",{src:"assets/img/project/ga-06.jpg",alt:""})),E("div",{className:"portfolio-text"},E("span",null,"product design"),E("h3",null,E("a",{href:"#"},"Best System How To Product Design")),E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"learn more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))))))),E("div",{className:"row"},E("div",{className:"col-xl-12"},E("div",{className:"portfolio-button text-center mt-30"},E("a",{className:"btn",href:"#"},E("span",{className:"btn-text"},"view more"," ",E("i",null,E(o.a,{icon:["fas","long-arrow-right"]}))," ")," "))))))}}}]);