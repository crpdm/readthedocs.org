!function t(o,e,r){function n(a,s){if(!e[a]){if(!o[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var p=e[a]={exports:{}};o[a][0].call(p.exports,function(t){var e=o[a][1][t];return n(e?e:t)},p,p.exports,t,o,e,r)}return e[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)n(r[a]);return n}({1:[function(t,o,e){function r(t){var o={project:a.project,version:a.version,page:a.page,theme:a.theme,format:"jsonp"};"docroot"in a&&(o.docroot=a.docroot),"source_suffix"in a&&(o.source_suffix=a.source_suffix),0===window.location.pathname.indexOf("/projects/")&&(o.subproject=!0),$.ajax({url:a.api_host+"/api/v2/footer_html/",crossDomain:!0,xhrFields:{withCredentials:!0},dataType:"jsonp",data:o,success:function(t){s.init(t.version_compare),n(t),i()},error:function(){console.error("Error loading Read the Docs footer")}})}function n(t){if(build.is_rtd_theme()?$("div.rst-other-versions").html(t.html):$("body").append(t.html),t.version_active?!t.version_supported:$(".rst-current-version").addClass("rst-out-of-date"),t.promo&&build.show_promo()){var o=new sponsorship.Promo(t.promo_data.id,t.promo_data.text,t.promo_data.link,t.promo_data.image);o&&o.display()}}function i(){function t(t){return/^(GET|HEAD|OPTIONS|TRACE)$/.test(t)}$.ajaxSetup({beforeSend:function(o,e){t(e.type)||o.setRequestHeader("X-CSRFToken",$("a.bookmark[token]").attr("token"))}})}var a=t("./rtd-data"),s=t("./version-compare");o.exports={init:r}},{"./rtd-data":4,"./version-compare":6}],2:[function(t,o,e){function r(){$.ajax({url:"https://api.grokthedocs.com/static/javascript/bundle-client.js",crossDomain:!0,dataType:"script"})}o.exports={init:r}},{}],3:[function(t,o,e){function r(){if("builder"in n&&"mkdocs"==n.builder){$("<input>").attr({type:"hidden",name:"project",value:n.project}).appendTo("#rtd-search-form"),$("<input>").attr({type:"hidden",name:"version",value:n.version}).appendTo("#rtd-search-form"),$("<input>").attr({type:"hidden",name:"type",value:"file"}).appendTo("#rtd-search-form"),$("#rtd-search-form").prop("action",n.api_host+"/elasticsearch/");var t=$("nav.wy-nav-side:first"),o=$(window),e="stickynav",r=function(){t.height()<=o.height()?t.addClass(e):t.removeClass(e)};o.on("resize",r),r()}}var n=t("./rtd-data");o.exports={init:r}},{"./rtd-data":4}],4:[function(t,o,e){var r=READTHEDOCS_DATA;void 0===r.api_host&&(r.api_host="https://readthedocs.org"),o.exports=r},{}],5:[function(t,o,e){function r(){function t(t){var o=t.closest("li");o.siblings("li.current").removeClass("current"),o.siblings().find("li.current").removeClass("current"),o.find("> ul li.current").removeClass("current"),o.toggleClass("current")}(!("builder"in n)||"builder"in n&&"mkdocs"!=n.builder)&&($(document).on("click","[data-toggle='wy-nav-top']",function(){$("[data-toggle='wy-nav-shift']").toggleClass("shift"),$("[data-toggle='rst-versions']").toggleClass("shift")}),$(document).on("click",".wy-menu-vertical .current ul li a",function(){var o=$(this);$("[data-toggle='wy-nav-shift']").removeClass("shift"),$("[data-toggle='rst-versions']").toggleClass("shift"),t(o),"undefined"!=typeof window.SphinxRtdTheme&&window.SphinxRtdTheme.StickyNav.hashChange()}),$(document).on("click","[data-toggle='rst-current-version']",function(){$("[data-toggle='rst-versions']").toggleClass("shift-up")}),$("table.docutils:not(.field-list)").wrap("<div class='wy-table-responsive'></div>"),$(".wy-menu-vertical ul").siblings("a").each(function(){var o=$(this);expand=$('<span class="toctree-expand"></span>'),expand.on("click",function(e){return t(o),e.stopPropagation(),!1}),o.prepend(expand)}),window.SphinxRtdTheme=function(t){var o=function(){var o,e,r=!1,n=!1,i=0,a=function(){s(),c(),e.on("hashchange",c),e.on("scroll",function(){n||(r=!0)}),setInterval(function(){if(r){r=!1;var t=e.scrollTop(),n=o.scrollTop(),a=n+(t-i);o.scrollTop(a),i=t}},25)},s=function(){o=t("nav.wy-nav-side:first"),e=t(window)},c=function(){var t=encodeURI(window.location.hash);if(t)try{var o=$(".wy-menu-vertical").find('[href="'+t+'"]');$(".wy-menu-vertical li.toctree-l1 li.current").removeClass("current"),o.closest("li.toctree-l2").addClass("current"),o.closest("li.toctree-l3").addClass("current"),o.closest("li.toctree-l4").addClass("current")}catch(e){console.log("Error expanding nav for anchor",e)}},d=function(){n=!0,e.one("hashchange",function(){n=!1})};return t(s),{enable:a,hashChange:d}}();return{StickyNav:o}}($))}var n=t("./rtd-data");o.exports={init:r}},{"./rtd-data":4}],6:[function(t,o,e){function r(t){if(!t.is_highest){var o=window.location.pathname.replace(n.version,t.slug),e=$('<div class="admonition warning"> <p class="first admonition-title">Note</p> <p class="last"> You are not using the most up to date version of the library. <a href="#"></a> is the newest version.</p></div>');e.find("a").attr("href",o).text(t.version);var r=$("div.body");r.length||(r=$("div.document")),r.prepend(e)}}var n=t("./rtd-data");o.exports={init:r}},{"./rtd-data":4}],7:[function(t,o,e){function r(t){this.config=t,"sphinx_rtd_theme"!=this.config.theme&&1==$("div.rst-other-versions").length&&(this.config.theme="sphinx_rtd_theme"),void 0==this.config.api_host&&(this.config.api_host="https://readthedocs.org")}o.exports={Build:r},r.prototype.is_rtd_theme=function(){return"sphinx_rtd_theme"==this.config.theme},r.prototype.is_sphinx_builder=function(){return!("builder"in this.config)||"mkdocs"!=this.config.builder},r.prototype.show_promo=function(){return"https://readthedocs.com"!=this.config.api_host&&this.is_sphinx_builder()&&this.is_rtd_theme()}},{}],8:[function(t,o,e){$(document).ready(function(){var o=(t("./sponsorship"),t("./doc")),e=t("./doc-embed/footer.js"),r=t("./doc-embed/grokthedocs-client"),n=t("./doc-embed/mkdocs"),i=t("./doc-embed/rtd-data"),a=t("./doc-embed/sphinx"),s=new o.Build(i);e.init(s),a.init(),r.init(),n.init()})},{"./doc":7,"./doc-embed/footer.js":1,"./doc-embed/grokthedocs-client":2,"./doc-embed/mkdocs":3,"./doc-embed/rtd-data":4,"./doc-embed/sphinx":5,"./sponsorship":9}],9:[function(t,o,e){function r(t,o,e,r){this.id=t,this.text=o,this.link=e,this.image=r,this.promo=null}var n=window.$;o.exports={Promo:r},r.prototype.create=function(){var t=this,o=n("nav.wy-nav-side");if(o.length){promo=n("<div />").attr("class","wy-menu rst-pro");{var e=n("<div />").attr("class","rst-pro-about"),r=n("<a />").attr("href","http://docs.readthedocs.org/en/latest/sponsors.html#sponsorship-information").appendTo(e);n("<i />").attr("class","fa fa-info-circle").appendTo(r)}if(e.appendTo(promo),t.image){{var i=n("<a />").attr("class","rst-pro-image-wrapper").attr("href",t.link);n("<img />").attr("class","rst-pro-image").attr("src",t.image).appendTo(i)}promo.append(i)}var a=n("<span />").html(t.text);return n(a).find("a").each(function(){n(this).attr("class","rst-pro-link").attr("href",t.link).attr("target","_blank").on("click",function(o){_gaq&&_gaq.push(["rtfd._setAccount","UA-17997319-1"],["rtfd._trackEvent","Promo","Click",t.id])})}),promo.append(a),promo.appendTo(o),promo.wrapper=n("<div />").attr("class","rst-pro-wrapper").appendTo(o),promo}},r.prototype.display=function(){var t=this.promo;t||(t=this.promo=this.create()),t.show()},r.prototype.disable=function(){},r.from_variants=function(t){if(0==t.length)return null;var o=Math.floor(Math.random()*t.length),e=t[o],n=e.text,i=e.link,a=e.image,s=e.id;return new r(s,n,i,a)}},{}]},{},[8]);