(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return i});var a=n(0),r=n.n(a),o=n(146);n(165);t.default=function(e){var t=e.data;return console.log(t),r.a.createElement("div",{style:{margin:"3rem auto",maxWidth:600}},r.a.createElement("h1",null,"jmn's blog"),t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("div",{key:t.id,className:"article-box"},r.a.createElement(o.Link,{to:t.fields.slug,style:{textDecoration:"none",color:"inherit"}},r.a.createElement("h3",{className:"title"},t.frontmatter.title)),r.a.createElement("p",{className:"date"},t.fields.date,", ",t.timeToRead," min read"),r.a.createElement("p",{className:"excerpt"},t.excerpt),r.a.createElement("hr",null))}))};var i="2272701606"},145:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(154)),o=a(n(155)),i=a(n(7)),s=a(n(51)),u=a(n(53)),l=a(n(4)),c=a(n(0)),d=n(22),p=n(146);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},v=function(e){function t(t){var n;n=e.call(this)||this,(0,u.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,s=t.onClick,u=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=f(n);return c.default.createElement(d.Link,(0,o.default)({to:m,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){u&&u(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:h})),!0}},v))},t}(c.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var m=v;t.default=m;var g=function(e,t){window.___navigate(f(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(145),u=n.n(s);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(147),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},147:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),s=n(52),u=n(2),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},154:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},155:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},165:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-index-js-1e69e7a462469cddbf7e.js.map