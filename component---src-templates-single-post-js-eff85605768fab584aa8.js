(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"1KU/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.outerWidth=void 0;t.outerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft)+parseInt(n.marginRight)}},"4VO2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return window}},"6mdT":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e,t,n){var r=0===e?e:e+t;return"translate3d"+("("+("horizontal"===n?[r,0,0]:[0,r,0]).join(",")+")")}},JtOw:function(e,t,n){var r,i,o;i=[t,n("fnPv")],void 0===(o="function"==typeof(r=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,r=(n=t)&&n.__esModule?n:{default:n};e.default=r.default})?r.apply(t,i):r)||(e.exports=o)},UwsI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=p(n("i8i4")),o=p(n("JtOw")),a=p(n("Xbnk")),s=p(n("6mdT")),l=p(n("yE4M")),u=p(n("Z/Mu")),c=p(n("4VO2"));function p(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var i=E(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?S(e):t}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(){},R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(d,e);var t,n,p,f=w(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),O(S(t=f.call(this,e)),"thumbsRef",void 0),O(S(t),"carouselWrapperRef",void 0),O(S(t),"listRef",void 0),O(S(t),"itemsRef",void 0),O(S(t),"timer",void 0),O(S(t),"setThumbsRef",(function(e){t.thumbsRef=e})),O(S(t),"setCarouselWrapperRef",(function(e){t.carouselWrapperRef=e})),O(S(t),"setListRef",(function(e){t.listRef=e})),O(S(t),"setItemsRef",(function(e,n){t.itemsRef||(t.itemsRef=[]),t.itemsRef[n]=e})),O(S(t),"autoPlay",(function(){!t.state.autoPlay||r.Children.count(t.props.children)<=1||(t.timer&&clearTimeout(t.timer),t.timer=setTimeout((function(){t.increment()}),t.props.interval))})),O(S(t),"clearAutoPlay",(function(){t.state.autoPlay&&t.timer&&clearTimeout(t.timer)})),O(S(t),"resetAutoPlay",(function(){t.clearAutoPlay(),t.autoPlay()})),O(S(t),"stopOnHover",(function(){t.setState({isMouseEntered:!0},t.clearAutoPlay)})),O(S(t),"startOnLeave",(function(){t.setState({isMouseEntered:!1},t.autoPlay)})),O(S(t),"isFocusWithinTheCarousel",(function(){return!!t.carouselWrapperRef&&!((0,u.default)().activeElement!==t.carouselWrapperRef&&!t.carouselWrapperRef.contains((0,u.default)().activeElement))})),O(S(t),"navigateWithKeyboard",(function(e){if(t.isFocusWithinTheCarousel()){var n="horizontal"===t.props.axis,r=n?37:38;(n?39:40)===e.keyCode?t.increment():r===e.keyCode&&t.decrement()}})),O(S(t),"updateSizes",(function(){if(t.state.initialized&&t.itemsRef&&0!==t.itemsRef.length){var e="horizontal"===t.props.axis,n=t.itemsRef[0];if(n){var r=e?n.clientWidth:n.clientHeight;t.setState({itemSize:r}),t.thumbsRef&&t.thumbsRef.updateSizes()}}})),O(S(t),"setMountState",(function(){t.setState({hasMount:!0}),t.updateSizes()})),O(S(t),"handleClickItem",(function(e,n){0!==r.Children.count(t.props.children)&&(t.state.cancelClick?t.setState({cancelClick:!1}):(t.props.onClickItem(e,n),e!==t.state.selectedItem&&t.setState({selectedItem:e})))})),O(S(t),"handleOnChange",(function(e,n){r.Children.count(t.props.children)<=1||t.props.onChange(e,n)})),O(S(t),"handleClickThumb",(function(e,n){t.props.onClickThumb(e,n),t.selectItem({selectedItem:e})})),O(S(t),"onSwipeStart",(function(e){t.setState({swiping:!0}),t.props.onSwipeStart(e),t.clearAutoPlay()})),O(S(t),"onSwipeEnd",(function(e){t.setState({swiping:!1,cancelClick:!1}),t.props.onSwipeEnd(e),t.autoPlay()})),O(S(t),"onSwipeMove",(function(e,n){t.props.onSwipeMove(n);var i="horizontal"===t.props.axis,o=r.Children.count(t.props.children),a=t.getPosition(t.state.selectedItem),s=t.props.infiniteLoop?t.getPosition(o-1)-100:t.getPosition(o-1),l=i?e.x:e.y,u=l;0===a&&l>0&&(u=0),a===s&&l<0&&(u=0);var c=a+100/(t.state.itemSize/u),p=Math.abs(l)>t.props.swipeScrollTolerance;return t.props.infiniteLoop&&p&&(0===t.state.selectedItem&&c>-100?c-=100*o:t.state.selectedItem===o-1&&c<100*-o&&(c+=100*o)),t.props.preventMovementUntilSwipeScrollTolerance&&!p||t.setPosition(c),p&&!t.state.cancelClick&&t.setState({cancelClick:!0}),p})),O(S(t),"setPosition",(function(e,n){var r=i.default.findDOMNode(t.listRef);r instanceof HTMLElement&&(["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(n){r.style[n]=(0,s.default)(e,"%",t.props.axis)})),n&&r.offsetLeft)})),O(S(t),"resetPosition",(function(){var e=t.getPosition(t.state.selectedItem);t.setPosition(e)})),O(S(t),"decrement",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.moveTo(t.state.selectedItem-("number"==typeof e?e:1),n)})),O(S(t),"increment",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t.moveTo(t.state.selectedItem+("number"==typeof e?e:1),n)})),O(S(t),"moveTo",(function(e,n){if("number"==typeof e){var i=r.Children.count(t.props.children)-1,o=t.props.infiniteLoop&&!n&&(e<0||e>i),a=e;e<0&&(e=t.props.infiniteLoop?i:0),e>i&&(e=t.props.infiniteLoop?0:i),o?t.setState({swiping:!0},(function(){a<0?t.props.centerMode&&t.props.centerSlidePercentage&&"horizontal"===t.props.axis?t.setPosition(-(i+2)*t.props.centerSlidePercentage-(100-t.props.centerSlidePercentage)/2,!0):t.setPosition(100*-(i+2),!0):a>i&&t.setPosition(0,!0),t.selectItem({selectedItem:e,swiping:!1})})):t.selectItem({selectedItem:e}),t.state.autoPlay&&!1===t.state.isMouseEntered&&t.resetAutoPlay()}})),O(S(t),"onClickNext",(function(){t.increment(1,!1)})),O(S(t),"onClickPrev",(function(){t.decrement(1,!1)})),O(S(t),"onSwipeForward",(function(){t.increment(1,!0)})),O(S(t),"onSwipeBackwards",(function(){t.decrement(1,!0)})),O(S(t),"changeItem",(function(e){return function(n){(function(e){return!!e&&e.hasOwnProperty("key")})(n)&&"Enter"!==n.key||t.selectItem({selectedItem:e})}})),O(S(t),"selectItem",(function(e,n){t.setState(e,n),t.handleOnChange(e.selectedItem,r.Children.toArray(t.props.children)[e.selectedItem])})),O(S(t),"getInitialImage",(function(){var e=t.props.selectedItem,n=t.itemsRef&&t.itemsRef[e];return(n&&n.getElementsByTagName("img")||[])[0]})),O(S(t),"getVariableItemHeight",(function(e){var n=t.itemsRef&&t.itemsRef[e];if(t.state.hasMount&&n&&n.children.length){var r=n.children[0].getElementsByTagName("img")||[];if(r.length>0){var i=r[0];if(!i.complete){i.addEventListener("load",(function e(){t.forceUpdate(),i.removeEventListener("load",e)}))}}var o=n.children[0].clientHeight;return o>0?o:null}return null})),t.state={initialized:!1,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay,swiping:!1,cancelClick:!1,itemSize:1},t}return t=d,(n=[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),t.swiping&&!this.state.swiping&&this.resetPosition(),e.selectedItem===this.props.selectedItem&&e.centerMode===this.props.centerMode||(this.updateSizes(),this.moveTo(this.props.selectedItem)),e.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var e=this;this.bindEvents(),this.state.autoPlay&&r.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.setState({initialized:!0},(function(){var t=e.getInitialImage();t&&!t.complete?t.addEventListener("load",e.setMountState):e.setMountState()}))}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,c.default)().addEventListener("resize",this.updateSizes),(0,c.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,u.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,c.default)().removeEventListener("resize",this.updateSizes),(0,c.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,u.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"getPosition",value:function(e){if(this.props.infiniteLoop&&++e,0===e)return 0;var t=r.Children.count(this.props.children);if(this.props.centerMode&&"horizontal"===this.props.axis){var n=-e*this.props.centerSlidePercentage,i=t-1;return e&&(e!==i||this.props.infiniteLoop)?n+=(100-this.props.centerSlidePercentage)/2:e===i&&(n+=100-this.props.centerSlidePercentage),n}return 100*-e}},{key:"renderItems",value:function(e){var t=this;return this.props.children?r.Children.map(this.props.children,(function(n,i){var o={ref:function(e){return t.setItemsRef(e,i)},key:"itemKey"+i+(e?"clone":""),className:a.default.ITEM(!0,i===t.state.selectedItem),onClick:t.handleClickItem.bind(t,i,n)},s={};return t.props.centerMode&&"horizontal"===t.props.axis&&(s.style={minWidth:t.props.centerSlidePercentage+"%"}),r.default.createElement("li",v({},o,s),t.props.renderItem(n,{isSelected:i===t.state.selectedItem}))})):[]}},{key:"renderControls",value:function(){var e=this,t=this.props,n=t.showIndicators,i=t.labels,o=t.renderIndicator,a=t.children;return n?r.default.createElement("ul",{className:"control-dots"},r.Children.map(a,(function(t,n){return o&&o(e.changeItem(n),n===e.state.selectedItem,n,i.item)}))):null}},{key:"renderStatus",value:function(){return this.props.showStatus?r.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,r.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&this.props.children&&0!==r.Children.count(this.props.children)?r.default.createElement(l.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels},this.props.renderThumbs(this.props.children)):null}},{key:"render",value:function(){var e=this;if(!this.props.children||0===r.Children.count(this.props.children))return null;var t="horizontal"===this.props.axis,n=this.props.showArrows&&r.Children.count(this.props.children)>1,i=n&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,l=n&&(this.state.selectedItem<r.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,u={},c=this.getPosition(this.state.selectedItem),p=(0,s.default)(c,"%",this.props.axis),f=this.props.transitionTime+"ms";u={WebkitTransform:p,MozTransform:p,MsTransform:p,OTransform:p,transform:p,msTransform:p},this.state.swiping||(u=h(h({},u),{},{WebkitTransitionDuration:f,MozTransitionDuration:f,MsTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f}));var d=this.renderItems(!0),m=d.shift(),b=d.pop(),y={className:a.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:u,tolerance:this.props.swipeScrollTolerance},w={};if(t){if(y.onSwipeLeft=this.onSwipeForward,y.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var g=this.getVariableItemHeight(this.state.selectedItem);y.style.height=g||"auto",w.height=g||"auto"}}else y.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,y.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,y.style.height=this.state.itemSize,w.height=this.state.itemSize;return r.default.createElement("div",{className:a.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:0},r.default.createElement("div",{className:a.default.CAROUSEL(!0),style:{width:this.props.width}},this.props.renderArrowPrev(this.onClickPrev,i,this.props.labels.leftArrow),r.default.createElement("div",{className:a.default.WRAPPER(!0,this.props.axis),style:w},this.props.swipeable?r.default.createElement(o.default,v({tagName:"ul",innerRef:this.setListRef},y,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&b,this.renderItems(),this.props.infiniteLoop&&m):r.default.createElement("ul",{className:a.default.SLIDER(!0,this.state.swiping),ref:function(t){return e.setListRef(t)},style:u},this.props.infiniteLoop&&b,this.renderItems(),this.props.infiniteLoop&&m)),this.props.renderArrowNext(this.onClickNext,l,this.props.labels.rightArrow),this.renderControls(),this.renderStatus()),this.renderThumbs())}}])&&b(t.prototype,n),p&&b(t,p),d}(r.default.Component);t.default=R,O(R,"displayName","Carousel"),O(R,"defaultProps",{axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:P,onClickThumb:P,onChange:P,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(e,t,n){return r.default.createElement("button",{type:"button","aria-label":n,className:a.default.ARROW_PREV(!t),onClick:e})},renderArrowNext:function(e,t,n){return r.default.createElement("button",{type:"button","aria-label":n,className:a.default.ARROW_NEXT(!t),onClick:e})},renderIndicator:function(e,t,n,i){return r.default.createElement("li",{className:a.default.DOT(t),onClick:e,onKeyDown:e,value:n,key:n,role:"button",tabIndex:0,"aria-label":"".concat(i," ").concat(n+1)})},renderItem:function(e){return e},renderThumbs:function(e){var t=r.Children.map(e,(function(e){var t=e;if("img"!==e.type&&(t=r.Children.toArray(e.props.children).find((function(e){return"img"===e.type}))),t)return t}));return 0===t.filter((function(e){return e})).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):t},statusFormatter:function(e,t){return"".concat(e," of ").concat(t)},selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%"})},Xbnk:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,i=(r=n("TSYQ"))&&r.__esModule?r:{default:r};var o={ROOT:function(e){return(0,i.default)(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({"carousel-root":!0},e||"",!!e))},CAROUSEL:function(e){return(0,i.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,i.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,i.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t){return(0,i.default)({thumb:!e,slide:e,selected:t})},ARROW_PREV:function(e){return(0,i.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,i.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,i.default)({dot:!0,selected:e})}};t.default=o},"Z/Mu":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return document}},a6qw:function(e,t,n){},desn:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",(function(){return I}));var r=n("q1tI"),i=n.n(r),o=(n("a6qw"),n("oTKz")),a=n("vrFN"),s=n("k1TG"),l=n("8o2o"),u=n("TSYQ"),c=n.n(u),p=n("33Jr"),f=function(e){var t=e.className,n=e.cssModule,r=e.innerRef,o=e.tag,a=Object(l.a)(e,["className","cssModule","innerRef","tag"]),u=Object(p.g)(c()(t,"card-body"),n);return i.a.createElement(o,Object(s.a)({},a,{className:u,ref:r}))};f.defaultProps={tag:"div"};var d=f,m=n("x863"),h=function(e){var t=e.className,n=e.cssModule,r=e.color,o=e.innerRef,a=e.pill,u=e.tag,f=Object(l.a)(e,["className","cssModule","color","innerRef","pill","tag"]),d=Object(p.g)(c()(t,"badge","badge-"+r,!!a&&"badge-pill"),n);return f.href&&"span"===u&&(u="a"),i.a.createElement(u,Object(s.a)({},f,{className:d,ref:o}))};h.defaultProps={color:"secondary",pill:!1,tag:"span"};var v=h,b=function(e){var t,n=e.body,r=e.bottom,o=e.className,a=e.cssModule,u=e.heading,f=e.left,d=e.list,m=e.middle,h=e.object,v=e.right,b=e.tag,y=e.top,w=Object(l.a)(e,["body","bottom","className","cssModule","heading","left","list","middle","object","right","tag","top"]);t=u?"h4":w.href?"a":w.src||h?"img":d?"ul":"div";var g=b||t,S=Object(p.g)(c()(o,{"media-body":n,"media-heading":u,"media-left":f,"media-right":v,"media-top":y,"media-bottom":r,"media-middle":m,"media-object":h,"media-list":d,media:!(n||u||f||v||y||r||m||h||d)}),a);return i.a.createElement(g,Object(s.a)({},w,{className:S}))},y=n("9eSz"),w=n.n(y),g=n("LbRr"),S=function(e){var t=e.className,n=e.cssModule,r=e.color,o=e.body,a=e.inverse,u=e.outline,f=e.tag,d=e.innerRef,m=Object(l.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),h=Object(p.g)(c()(t,"card",!!a&&"text-white",!!o&&"card-body",!!r&&(u?"border":"bg")+"-"+r),n);return i.a.createElement(f,Object(s.a)({},m,{className:h,ref:d}))};S.defaultProps={tag:"div"};var E=S,O=n("Wbzz"),P="979176408",R=function(){return i.a.createElement("div",null,i.a.createElement("h2",{className:"card-title text-center text-uppercase mb-3"},"You may also like..."),i.a.createElement("div",null,i.a.createElement(O.StaticQuery,{query:P,render:function(e){return i.a.createElement("div",{className:"card-deck mb-4"},e.allMarkdownRemark.edges.map((function(e){var t=e.node;return i.a.createElement(E,{className:"window",key:t.id},i.a.createElement(O.Link,{to:"/"+t.fields.slug+"/"},i.a.createElement(w.a,{className:"card-image-top",fluid:t.frontmatter.image.childImageSharp.fluid})),i.a.createElement("div",{className:"dragbar-right",id:"resize-right"}),i.a.createElement("div",{className:"dragbar-left",id:"resize-left"}),i.a.createElement("div",{className:"dragbar-bottom",id:"resize-bottom"}),i.a.createElement(d,null,i.a.createElement("h5",{className:"recent-post-card-title"},i.a.createElement(O.Link,{to:"/"+t.fields.slug+"/"},t.frontmatter.title))))})))}})))},k=n("rO97"),M=n("JwsL"),I="2186737974";t.default=function(e){var t=e.data,n=(e.pageContext,e.node,t.markdownRemark.frontmatter),r=t.markdownRemark.frontmatter.color;return i.a.createElement("div",null,i.a.createElement(g.a,null),i.a.createElement("div",{className:"container",id:"content"},i.a.createElement(a.a,{author:n.author,title:n.title,description:n.description}),i.a.createElement(d,{pagetitle:n.title,className:"p-0 mb-4"},i.a.createElement("div",{className:"window draggable window-singlepost"},i.a.createElement("header",{className:"window-header"},i.a.createElement(m.a,null,i.a.createElement("span",null,n.date)," by "," ",i.a.createElement("a",{href:n.linkURL,target:"_blank",rel:"noopener noreferrer",className:"text-info"},n.author)),i.a.createElement("a",{href:"/",id:"close-button",className:"window-control-close"},i.a.createElement("svg",null,i.a.createElement("path",{fill:"#000000",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})))),i.a.createElement("div",{className:"dragbar-right",id:"resize-right"}),i.a.createElement("div",{className:"dragbar-left",id:"resize-left"}),i.a.createElement("div",{className:"dragbar-bottom",id:"resize-bottom"}),i.a.createElement("div",{style:{bgColor:r},className:"window-content p-3"},i.a.createElement("h1",null,n.title),i.a.createElement("div",{className:"text-center"},i.a.createElement(v,{color:"light mb-2 text-center mr-2",pill:!0},n.type),i.a.createElement(v,{href:n.linkURL,target:"_blank",rel:"noopener noreferrer",color:"light",pill:!0},n.author)),i.a.createElement(w.a,{className:"card-image my-4 w-100",fluid:n.image.childImageSharp.fluid}),i.a.createElement("div",{className:"singlepost-text",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}),i.a.createElement(k.a,null),i.a.createElement("h2",{className:"my-4 my-lg-5",style:{fontFamily:"Fredoka One",color:"#fffb0e",WebkitTextStroke:"2px #020102"}},"Fave Products & Techniques"),i.a.createElement(b,{className:"row"},i.a.createElement(o.Carousel,{className:"col-12 col-lg-5",href:n.product1.gallery.productURL,responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:1},desktop:{breakpoint:{max:3e3,min:1024},items:1},tablet:{breakpoint:{max:1024,min:464},items:1},mobile:{breakpoint:{max:464,min:0},items:1}},dynamicHeight:!0,autoPlay:!0},n.product1.gallery.map((function(e,t){return i.a.createElement("a",{style:{display:"block"},"aria-hidden":"true",key:t,href:e.productURL,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{className:"product-image",src:e.image.publicURL,alt:"Product"}))}))),i.a.createElement(b,{className:"col-12 col-lg-7",body:!0},i.a.createElement(b,{heading:!0},n.product1.title),n.product1.description)),i.a.createElement(b,{className:"row mt-4"},i.a.createElement(o.Carousel,{className:"col-12 col-lg-5",autoPlay:!0},n.product2.gallery.map((function(e,t){return i.a.createElement("a",{style:{display:"block"},"aria-hidden":"true",key:t,href:e.productURL,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:e.image.publicURL,alt:"Product"}))}))),i.a.createElement(b,{className:"col-12 col-lg-7",body:!0},i.a.createElement(b,{heading:!0},n.product2.title),n.product2.description)),i.a.createElement(b,{className:"row mt-4"},i.a.createElement(o.Carousel,{className:"col-12 col-lg-5",autoPlay:!0},n.product3.gallery.map((function(e,t){return i.a.createElement("a",{style:{display:"block"},"aria-hidden":"true",key:t,href:e.productURL,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:e.image.publicURL,alt:"Product"}))}))),i.a.createElement(b,{className:"col-12 col-lg-7",body:!0},i.a.createElement(b,{heading:!0},n.product3.title),n.product3.description))))),i.a.createElement(R,null)),i.a.createElement(M.a,null))}},fnPv:function(e,t,n){var r,i,o;i=[t,n("q1tI"),n("17x9")],void 0===(o="function"==typeof(r=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=p;var r=o(t),i=o(n);function o(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=!1;function p(e){c=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){p(!0)}}))}catch(h){}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return c?e:e.capture}function d(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var m=function(e){function t(){var e;s(this,t);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];var o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r)));return o._handleSwipeStart=o._handleSwipeStart.bind(o),o._handleSwipeMove=o._handleSwipeMove.bind(o),o._handleSwipeEnd=o._handleSwipeEnd.bind(o),o._onMouseDown=o._onMouseDown.bind(o),o._onMouseMove=o._onMouseMove.bind(o),o._onMouseUp=o._onMouseUp.bind(o),o._setSwiperRef=o._setSwiperRef.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,f({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,f({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=d(e),n=t.x,r=t.y;this.moveStart={x:n,y:r},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=d(e),n=t.x,r=t.y,i=n-this.moveStart.x,o=r-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:i,y:o},e)&&e.cancelable&&e.preventDefault(),this.movePosition={deltaX:i,deltaY:o}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(e){this.swiper=e,this.props.innerRef(e)}},{key:"render",value:function(){var e=this.props,t=(e.tagName,e.className),n=e.style,i=e.children,o=(e.allowMouseEvents,e.onSwipeUp,e.onSwipeDown,e.onSwipeLeft,e.onSwipeRight,e.onSwipeStart,e.onSwipeMove,e.onSwipeEnd,e.innerRef,e.tolerance,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]));return r.default.createElement(this.props.tagName,a({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:t,style:n},o),i)}}]),t}(t.Component);m.displayName="ReactSwipe",m.propTypes={tagName:i.default.string,className:i.default.string,style:i.default.object,children:i.default.node,allowMouseEvents:i.default.bool,onSwipeUp:i.default.func,onSwipeDown:i.default.func,onSwipeLeft:i.default.func,onSwipeRight:i.default.func,onSwipeStart:i.default.func,onSwipeMove:i.default.func,onSwipeEnd:i.default.func,innerRef:i.default.func,tolerance:i.default.number.isRequired},m.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},e.default=m})?r.apply(t,i):r)||(e.exports=o)},oTKz:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Carousel",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Thumbs",{enumerable:!0,get:function(){return i.default}});var r=o(n("UwsI")),i=o(n("yE4M"));function o(e){return e&&e.__esModule?e:{default:e}}},yE4M:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=u(n("Xbnk")),o=n("1KU/"),a=u(n("6mdT")),s=u(n("JtOw")),l=u(n("4VO2"));function u(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var i=y(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(p,e);var t,n,u,c=h(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),w(b(t=c.call(this,e)),"itemsWrapperRef",void 0),w(b(t),"itemsListRef",void 0),w(b(t),"thumbsRef",void 0),w(b(t),"setItemsWrapperRef",(function(e){t.itemsWrapperRef=e})),w(b(t),"setItemsListRef",(function(e){t.itemsListRef=e})),w(b(t),"setThumbsRef",(function(e,n){t.thumbsRef||(t.thumbsRef=[]),t.thumbsRef[n]=e})),w(b(t),"updateSizes",(function(){if(t.props.children&&t.itemsWrapperRef&&t.thumbsRef){var e=r.Children.count(t.props.children),n=t.itemsWrapperRef.clientWidth,i=t.props.thumbWidth?t.props.thumbWidth:(0,o.outerWidth)(t.thumbsRef[0]),a=Math.floor(n/i),s=e-a,l=a<e;t.setState((function(e,n){return{itemSize:i,visibleItems:a,firstItem:l?t.getFirstItem(n.selectedItem):0,lastPosition:s,showArrows:l}}))}})),w(b(t),"handleClickItem",(function(e,n,r){if(!function(e){return e.hasOwnProperty("key")}(r)||"Enter"===r.key){var i=t.props.onSelectItem;"function"==typeof i&&i(e,n)}})),w(b(t),"onSwipeStart",(function(){t.setState({swiping:!0})})),w(b(t),"onSwipeEnd",(function(){t.setState({swiping:!1})})),w(b(t),"onSwipeMove",(function(e){var n=e.x;if(!t.state.itemSize||!t.itemsWrapperRef)return!1;var r=-t.state.firstItem*t.state.itemSize;0===r&&n>0&&(n=0),r===-t.state.visibleItems*t.state.itemSize&&n<0&&(n=0);var i=r+100/(t.itemsWrapperRef.clientWidth/n);return t.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(e){t.itemsListRef.style[e]=(0,a.default)(i,"%",t.props.axis)})),!0})),w(b(t),"slideRight",(function(e){t.moveTo(t.state.firstItem-("number"==typeof e?e:1))})),w(b(t),"slideLeft",(function(e){t.moveTo(t.state.firstItem+("number"==typeof e?e:1))})),w(b(t),"moveTo",(function(e){e=(e=e<0?0:e)>=t.state.lastPosition?t.state.lastPosition:e,t.setState({firstItem:e})})),t.state={selectedItem:e.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},t}return t=p,(n=[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:e.selectedItem,firstItem:this.getFirstItem(e.selectedItem)})}},{key:"componentDidUpdate",value:function(e){this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,l.default)().addEventListener("resize",this.updateSizes),(0,l.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,l.default)().removeEventListener("resize",this.updateSizes),(0,l.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.props.children.map((function(t,n){var o=i.default.ITEM(!1,n===e.state.selectedItem),a={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:o,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n]),"aria-label":"".concat(e.props.labels.item," ").concat(n+1),style:{width:e.props.thumbWidth}};return r.default.createElement("li",f({},a,{role:"button",tabIndex:0}),t)}))}},{key:"render",value:function(){var e=this;if(!this.props.children)return null;var t,n=this.state.showArrows&&this.state.firstItem>0,o=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,l=-this.state.firstItem*(this.state.itemSize||0),u=(0,a.default)(l,"px",this.props.axis),c=this.props.transitionTime+"ms";return t={WebkitTransform:u,MozTransform:u,MsTransform:u,OTransform:u,transform:u,msTransform:u,WebkitTransitionDuration:c,MozTransitionDuration:c,MsTransitionDuration:c,OTransitionDuration:c,transitionDuration:c,msTransitionDuration:c},r.default.createElement("div",{className:i.default.CAROUSEL(!1)},r.default.createElement("div",{className:i.default.WRAPPER(!1),ref:this.setItemsWrapperRef},r.default.createElement("button",{type:"button",className:i.default.ARROW_PREV(!n),onClick:function(){return e.slideRight()},"aria-label":this.props.labels.leftArrow}),r.default.createElement(s.default,{tagName:"ul",className:i.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:t,innerRef:this.setItemsListRef},this.renderItems()),r.default.createElement("button",{type:"button",className:i.default.ARROW_NEXT(!o),onClick:function(){return e.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}])&&d(t.prototype,n),u&&d(t,u),p}(r.Component);t.default=g,w(g,"displayName","Thumbs"),w(g,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350})}}]);
//# sourceMappingURL=component---src-templates-single-post-js-eff85605768fab584aa8.js.map