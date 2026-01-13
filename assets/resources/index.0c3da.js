System.register("chunks:///_virtual/MultiNumberTexture.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Common.ts"],(function(e){var t,r,n,i,a,o,u,s,c,l,p,f,h,b,d,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,r=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized,a=e.asyncToGenerator,o=e.regeneratorRuntime},function(e){u=e.cclegacy,s=e._decorator,c=e.resources,l=e.Prefab,p=e.Texture2D,f=e.Material,h=e.Component,b=e.instantiate,d=e.MeshRenderer},function(e){m=e.Common}],execute:function(){var g,P,x,y,v,M;u._RF.push({},"cb0f7x0nJVPe6WrIQW1hDep","MultiNumberTexture",void 0);var N=s.ccclass,w=s.property;e("MultiNumberTexture",N("MultiNumberTexture")((x=t((P=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,n(t,"number",x,i(t)),n(t,"digitSpacing",y,i(t)),n(t,"texturePath",v,i(t)),n(t,"matPath",M,i(t)),t.prefabPath="3dfont/Plane",t.planePrefab=null,t.numDept=.004,t.digitNodes=[],t}r(t,e);var u=t.prototype;return u.start=function(){this.updateMultiNumber()},u.setNum=function(e){this.number=m.ChangeMoneyFormat(e,3),this.updateMultiNumber()},u.updateMultiNumber=function(){var e=a(o().mark((function e(){var t,r,n,i,a,u,s,c,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadPlanePrefab(this.prefabPath);case 2:if(this.planePrefab=e.sent,null!=this.planePrefab){e.next=6;break}return console.error("Plane 加载失败"),e.abrupt("return");case 6:if(this.digitNodes.forEach((function(e){return e.destroy()})),this.digitNodes.length=0,0!==(t=this.number.toString().split("")).length){e.next=11;break}return e.abrupt("return");case 11:r=-(t.length-1)*this.digitSpacing/2,n=0;case 13:if(!(n<t.length)){e.next=40;break}return"."==(i=t[n])&&(i="JUHAO"),a=i,(u=b(this.planePrefab)).name="digit_"+a,u.parent=this.node,u.setPosition(r+n*this.digitSpacing,0,this.numDept),(s=u.getComponent(d))||(s=u.addComponent(d)),e.prev=23,e.next=26,this.loadTextureAsync(""+this.texturePath+a+"/texture");case 26:return c=e.sent,e.next=29,this.loadMaterialAsync(c);case 29:l=e.sent,s.materials=[l],e.next=36;break;case 33:e.prev=33,e.t0=e.catch(23),console.error("数字 "+a+" 加载失败",e.t0);case 36:this.digitNodes.push(u);case 37:n++,e.next=13;break;case 40:case"end":return e.stop()}}),e,this,[[23,33]])})));return function(){return e.apply(this,arguments)}}(),u.loadPlanePrefab=function(e){return new Promise((function(t,r){c.load(e,l,(function(e,n){e?r(e):t(n)}))}))},u.loadTextureAsync=function(e){return new Promise((function(t,r){c.load(e,p,(function(e,n){e?r(e):t(n)}))}))},u.loadMaterialAsync=function(e){var t=this;return new Promise((function(r,n){c.load(t.matPath,f,(function(t,i){if(t)return console.error("加载材质失败"),void n(t);var a=new f;a.copy(i),a.setProperty("mainTexture",e),r(a)}))}))},u.onPropertyChanged=function(){this.updateMultiNumber()},t}(h)).prototype,"number",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"1"}}),y=t(P.prototype,"digitSpacing",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.013}}),v=t(P.prototype,"texturePath",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"3dfont/number/"}}),M=t(P.prototype,"matPath",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"3dfont/NumberMat"}}),g=P))||g);u._RF.pop()}}}));

System.register("chunks:///_virtual/resources",["./MultiNumberTexture.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/resources', 'chunks:///_virtual/resources'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});