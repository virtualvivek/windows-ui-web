/*
MIT License

Copyright (c) 2020 Vivek Verma
https://github.com/virtualvivek/Windows10-framework

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

!function(t){"use strict";function e(t,e){for(var a in e)e.hasOwnProperty(a)&&(t[a]=e[a]);return t}function a(t,a){this.el=t,this.options=e({},this.options),e(this.options,a),this._init()}a.prototype.options={start:0},a.prototype._init=function(){this.tabs=[].slice.call(this.el.querySelectorAll("nav > ul > li")),this.items=[].slice.call(this.el.querySelectorAll(".app-content-wrap > section")),this.current=-1,this._show(),this._initEvents()},a.prototype._initEvents=function(){var t=this;this.tabs.forEach(function(e,a){e.addEventListener("click",function(e){e.preventDefault(),t._show(a)})})},a.prototype._show=function(t){this.current>=0&&(this.tabs[this.current].className=this.items[this.current].className=""),this.current=void 0!=t?t:this.options.start>=0&&this.options.start<this.items.length?this.options.start:0,this.tabs[this.current].className="tab-current",this.items[this.current].className="content-current",jQuery.fn.scrollCenter=function(t,e){return jQuery(this).animate({scrollLeft:jQuery(this).scrollLeft()-jQuery(this).offset().left+jQuery(t).offset().left-180},void 0==e?1e3:e),this},$("nav").scrollCenter(".tab-current",300)},t.WINTabs=a}(window),[].slice.call(document.querySelectorAll(".app-container")).forEach(function(t){new WINTabs(t)});var ALERT_TITLE=null,IMAGE_URL=null;function doNothing(){window.status="Do Nothing function called"}function removeCustomAlert(){document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"))}function createCustomAlert(t,e,a){if(d=document,!d.getElementById("modalContainer")){mObj=d.getElementsByTagName("body")[0].appendChild(d.createElement("div")),mObj.id="modalContainer",mObj.style.height=document.documentElement.scrollHeight+"px",alertObj=mObj.appendChild(d.createElement("div")),alertObj.id="alertBox",1==BlurEnabled&&($("#alertBox").css("background","var(--alpha_c)"),$("#alertBox").css("backdrop-filter","blur(30px)")),d.all&&!window.opera&&(alertObj.style.top=document.documentElement.scrollTop+"px"),alertObj.style.left=(d.documentElement.scrollWidth-alertObj.offsetWidth)/2+"px",headerContainer=alertObj.appendChild(d.createElement("div")),headerContainer.id="headerContainer",h1=headerContainer.appendChild(d.createElement("h1")),h1.appendChild(d.createTextNode(ALERT_TITLE)),bodyCont=alertObj.appendChild(d.createElement("div")),bodyCont.id="bodyContainer",msgCon=d.createElement("div"),msgCon.id="msgconobj",msg=bodyCont.appendChild(msgCon),msg.innerHTML=t,btnDiva=bodyCont.appendChild(d.createElement("div")),btnDiva.id="btnDiv",btnDiva.align="center";for(var n=0;n<e.length;n++)btn=btnDiva.appendChild(d.createElement("a")),btn.id=e[n],btn.setAttribute("class","alertButtons"),btn.appendChild(d.createTextNode(e[n])),functionName=a[n],btn.href="javascript:"+functionName+";removeCustomAlert();",0==n&&btn.focus();d.onkeyup=function(t){27==((t=window.event||t).keyCode?t.keyCode:t.charCode)&&removeCustomAlert()},1==BlurEnabled&&($("#headerContainer").css("background","transparent"),$("#bodyContainer").css("background","transparent"))}}document.getElementById&&(window.alert=function(t,e,a,n,o){return t?(null==e&&null==a&&(e=["OK"],a=["doNothing()"]),null==e||null==a?(window.status="Button names length and Functions does not match.",!1):e.length!=a.length?(window.status="Button names length and Functions does not match.",!1):(ALERT_TITLE=null==n?"Alert!":n,IMAGE_URL=null==o?"images/info.png":o,void createCustomAlert(t,e,a,o))):(window.status="Enter Proper Alert Message",!1)}),$(".app-bottomsheet-toggle").on("click",function(t){t.preventDefault();let e=$(this).attr("data-id");$("#"+e).toggleClass("is-visible")});const settings={fill:"var(--AppColor)",background:"#999999"},sliders=document.querySelectorAll(".app-range-slider");function applyFill(t){const e=100*(t.value-t.min)/(t.max-t.min),a=`linear-gradient(90deg, ${settings.fill} ${e}%, ${settings.background} ${e+.1}%)`;t.style.background=a}function changeType(t,e){if(t.prop("type")==e)return t;try{return t.prop("type",e)}catch(l){var a=$("<div>").append(t.clone()).html(),n=/type=(\")?([^\"\s]+)(\")?/,o=$(null==a.match(n)?a.replace(">",' type="'+e+'">'):a.replace(n,'type="'+e+'"'));o.data("type",t.data("type"));var r=function(t){return function(){for(i in t){var e=t[i];for(j in e)o.bind(i,e[j].handler)}}}(t.data("events"));return t.replaceWith(o),setTimeout(r,10),o}}Array.prototype.forEach.call(sliders,t=>{t.querySelector("input").addEventListener("input",e=>{t.querySelector("span").innerHTML=e.target.value,applyFill(e.target)}),applyFill(t.querySelector("input"))}),jQuery('<button class="unmask" type="button"></button>').insertAfter(".app-password"),$(".unmask").on("click",function(){return"password"==$(this).prev("input").attr("type")?changeType($(this).prev("input"),"text"):changeType($(this).prev("input"),"password"),!1});let LoaderBusyBody='<div class="w-ball-wrapper ball-1"><div class="w-ball"></div></div><div class="w-ball-wrapper ball-2"><div class="w-ball"></div></div><div class="w-ball-wrapper ball-3"><div class="w-ball"></div></div><div class="w-ball-wrapper ball-4"><div class="w-ball"></div></div><div class="w-ball-wrapper ball-5"><div class=" w-ball"></div></div>';$(".app-image.loadable").wrap("<div class=app-image-wrapper></div>"),jQuery('<div class="app-loader-busy light">'+LoaderBusyBody).insertAfter(".app-image.loadable"),jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter(".app-quantity input"),jQuery(".app-quantity").each(function(){var t=jQuery(this),e=t.find('input[type="number"]'),a=t.find(".quantity-up"),n=t.find(".quantity-down"),o=e.attr("min"),r=e.attr("max");a.click(function(){var a=parseFloat(e.val());if(a>=r)var n=a;else n=a+1;t.find("input").val(n),t.find("input").trigger("change")}),n.click(function(){var a=parseFloat(e.val());if(a<=o)var n=a;else n=a-1;t.find("input").val(n),t.find("input").trigger("change")})});let alphaColor=window.getComputedStyle(document.documentElement).getPropertyValue("--AppColor");function setStatusBarAccent(){var t=getComputedStyle(document.body).getPropertyValue("--AppColor"),e=document.createElement("meta");e.name="theme-color",e.setAttribute("content",t),document.getElementsByTagName("head")[0].appendChild(e)}if(alphaColor=alphaColor.trim(),alphaColor+="9C",document.documentElement.style.setProperty("--alpha_c",alphaColor),$(".app-loader-busy").html(LoaderBusyBody),$(".app-loader-bar").html('<div class="app-loaderBar" id="first"></div><div class="app-loaderBar" id="second"></div><div class="app-loaderBar" id="third"></div><div class="app-loaderBar" id="fourth"></div>'),$(".app-progress-indeterminate").html('<div class="progress-bar"></div>'),$("#app-nav-toggle").click(function(t){t.preventDefault(),$("#app-nav-wrap").toggleClass("toggled"),$("#app-nav-wrap").hasClass("toggled")&&$(".app-section-container").css("padding-left","120px"),$("#app-nav-wrap").hasClass("toggled")||$(".app-section-container").css("padding-left","")}),jQuery("<br><br><br><br>").insertAfter("h1.fixed"),1==BlurEnabled&&($(".fixed").css("backdrop-filter","blur(30px)"),$(".fixed").css("background","transparent"),$(".searchAuto-select.list.ul").css("backdrop-filter","blur(30px)"),$(".searchAuto-select.list ul").css("background","transparent")),1==ShowDarkModeSwitch){let t='<label class="app-switch"><input id="DayNightSwitch" type="checkbox" autocomplete="off"/><div data-off="Day" data-on="Night"></div></label>';jQuery(t).insertAfter("#app-nav-toggle"),jQuery(t).insertAfter("#index-switch")}function setDarkMode(){$("head").append('<style>input[type="date"]::-webkit-calendar-picker-indicator{filter:invert(1);}</style>'),$('meta[name="theme-color"]').remove(),$("head").append('<meta name="theme-color" content="#403E41" />'),document.documentElement.style.setProperty("--color_light_bg","#111"),document.documentElement.style.setProperty("--color_dark_text","#FFF"),document.documentElement.style.setProperty("--color_nav","#403E41"),document.documentElement.style.setProperty("--color_light_grey","#444"),document.documentElement.style.setProperty("--color_link_bg_hover","#555"),document.documentElement.style.setProperty("--color_link_bg_active","#222"),document.documentElement.style.setProperty("--color_button","#555555"),document.documentElement.style.setProperty("--color_button_hover","#999"),document.documentElement.style.setProperty("--color_button_active","#222"),document.documentElement.style.setProperty("--color_button_active_border","#EEE"),document.documentElement.style.setProperty("--color_accent_light","#FFF"),localStorage.setItem("isNight",!0)}function setLightMode(){$("head").append('<style>input[type="date"]::-webkit-calendar-picker-indicator{filter:none;}</style>'),$('meta[name="theme-color"]').remove(),$("head").append('<meta name="theme-color" content="#EEE" />'),document.documentElement.style.setProperty("--color_light_bg","#FFF"),document.documentElement.style.setProperty("--color_dark_text","#222"),document.documentElement.style.setProperty("--color_nav","#EEE"),document.documentElement.style.setProperty("--color_light_grey","#EEE"),document.documentElement.style.setProperty("--color_link_bg_hover","#CFCFCF"),document.documentElement.style.setProperty("--color_link_bg_active","#B8B8B8"),document.documentElement.style.setProperty("--color_button","#D9D9D9"),document.documentElement.style.setProperty("--color_button_hover","#666"),document.documentElement.style.setProperty("--color_button_active","#999"),document.documentElement.style.setProperty("--color_button_active_border","#888"),document.documentElement.style.setProperty("--color_accent_light","var(--AppColor)"),localStorage.setItem("isNight",!1)}function app_register_auto_search(t,e){$(t).each(function(t,a){if(!$(this).next().hasClass("searchAuto-select")){$(this).after('<div class="searchAuto-select wide open" tabindex="0" id="'+e+'"><div class="list"><ul></ul></div></div>');var n=$(this).next(),o=$(a).find("option");$(this).find("option:selected");1==BlurEnabled&&($(".list ul").css("backdrop-filter","blur(30px)"),$(".list ul").css("background","transparent")),o.each(function(t,e){var a=$(e).data("display-text")||"";n.find("ul").append('<li class="option '+($(e).is(":selected")?"selected":"")+'" data-display-text="'+a+'"><a href="'+$(e).val()+'">'+$(e).text()+"</a></li>")})}}),$("#"+e+" ul").before('<div class="app-search"><input id="'+e+'s" autocomplete="off" onkeyup="filter(`#'+e+"s`,`"+e+'`)" class="app-searchbox" type="text" placeholder="Search here.."></div>'),$("#"+e+" ul > li").hide()}function filter(t,e){var a=$(t).val();$("#"+e+" ul > li").each(function(){$(this).text().toLowerCase().indexOf(a.toLowerCase())>-1?$(this).show():$(this).hide(),0==$(t).val()&&$("#"+e+" ul > li").hide()})}function tabView(t,e){$(t).horizontalmenu({itemClick:function(t){return $(e+" .app-itab-content").removeAttr("data-app-itab-active"),$(e+" .app-itab-content:eq("+$(t).index()+")").attr("data-app-itab-active","true"),!1}})}function searchBar(){$('input[type="search"]').on("keyup",function(){let t=$(this).val();$(".app-list li").each(function(e,a){currentName=$(this).find("title").text(),currentName.toUpperCase().indexOf(t.toUpperCase())>-1?$(a).show("fast"):$(a).hide("fast")})})}$("#DayNightSwitch").on("change",function(){$("#DayNightSwitch").prop("checked")?setDarkMode():($("body").css("transition",""),$(".app-container nav").css("transition",""),setLightMode())}),1!=NightMode&&"true"!=localStorage.getItem("isNight")||($("body").css("transition","none"),$(".app-container nav").css("transition","none"),setDarkMode(),$("#DayNightSwitch").prop("checked",!0)),function(t){t.fn.horizontalmenu=function(e){var a={itemClick:function(t){return!0}};e&&t.extend(a,e);var n=function(e){var a,n=t(e).find(".app-itab"),o=n.find(".app-itab-item"),r=n.find('.app-itab-item[data-app-itab-active="true"]'),i=(a=t(n)[0]).scrollWidth>a.clientWidth;t(e).find(".app-itab-overflow-wrapper").attr("data-app-itab-active",i);var l=0,s=0,c=r.index();if(i){for(var d=0;d<o.length;d++){var p=o.eq(d),u=p.width(),m=parseInt(p.css("margin-right"))||0;d<c?l+=u+(d+1<c?m:0):s+=u+m}if(l+r.width()+80>t(n).width()){if(l*=-1,c){var h=t(n).width()-s-80;h>0&&(l+=h),n.addClass("app-itab-overflow-left")}}else l=0,n.removeClass("app-itab-overflow-left");n.addClass("app-itab-overflow-right")}else n.removeClass("app-itab-overflow-left app-itab-overflow-right");o.css({"-moz-transform":"translateX("+l+"px)","-o-transform":"translateX("+l+"px)","-webkit-transform":"translateX("+l+"px)",transform:"translateX("+l+"px)"})};return this.each(function(){!function(e){if(e.find(".app-itab-overflow-wrapper").length)return!1;var o=e.find(".app-itab-item");o.bind("click",function(){var e=a.itemClick(t(this));if(!e){var o=t(this).index(),r=t(this).closest(".app-itab-wrapper");r.find(".app-itab-item").removeAttr("data-app-itab-active"),r.find(".app-itab .app-itab-item").eq(o).attr("data-app-itab-active","true"),r.find(".app-itab-overflow-wrapper .app-itab-item").eq(o).attr("data-app-itab-active","true"),n(r)}return e}),t("<div>",{class:"app-itab-overflow-wrapper",append:t("<button>",{type:"menu",class:"app-itab-overflow-menu"}).add(t("<div>",{class:"app-itab-overflow-list",append:o.clone(!0,!0).removeAttr("style")}))}).appendTo(e),n(e);var r=void 0;t(window).bind("resize",function(){r&&clearTimeout(r),r=setTimeout(function(){n(e)},20)})}(t(this))})}}(jQuery),$(document).ready(function(){tabView(".app-itab-wrapper",".app-itab-content-wrapper")}),searchBar();