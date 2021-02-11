!function(e){e.fn.ticker=function(t){var o=e.extend({},e.fn.ticker.defaults,t);if(0==e(this).length)return window.console&&window.console.log?window.console.log("Element does not exist in DOM!"):alert("Element does not exist in DOM!"),!1;var n="#"+e(this).attr("id"),i=e(this).get(0).tagName;return this.each(function(){function t(e){var t,o=0;for(t in e)e.hasOwnProperty(t)&&o++;return o}function d(){var e=new Date;return e.getTime()}function s(e){o.debugMode&&(window.console&&window.console.log?window.console.log(e):alert(e))}function a(){l(),e(n).wrap('<div id="'+I.dom.wrapperID.replace("#","")+'"></div>'),e(I.dom.wrapperID).children().remove(),e(I.dom.wrapperID).append('<div id="'+I.dom.tickerID.replace("#","")+'" class="ticker"><div id="'+I.dom.titleID.replace("#","")+'" class="ticker-title"><span><!-- --></span></div><p id="'+I.dom.contentID.replace("#","")+'" class="ticker-content"></p><div id="'+I.dom.revealID.replace("#","")+'" class="ticker-swipe"><span><!-- --></span></div></div>'),e(I.dom.wrapperID).removeClass("no-js").addClass("ticker-wrapper has-js "+o.direction),e(I.dom.tickerElem+","+I.dom.contentID).hide(),o.controls&&(e(I.dom.controlsID).live("click mouseover mousedown mouseout mouseup",function(t){var o=t.target.id;if("click"==t.type)switch(o){case I.dom.prevID.replace("#",""):I.paused=!0,e(I.dom.playPauseID).addClass("paused"),f("prev");break;case I.dom.nextID.replace("#",""):I.paused=!0,e(I.dom.playPauseID).addClass("paused"),f("next");break;case I.dom.playPauseID.replace("#",""):1==I.play?(I.paused=!0,e(I.dom.playPauseID).addClass("paused"),p()):(I.paused=!1,e(I.dom.playPauseID).removeClass("paused"),u())}else"mouseover"==t.type&&e("#"+o).hasClass("controls")?e("#"+o).addClass("over"):"mousedown"==t.type&&e("#"+o).hasClass("controls")?e("#"+o).addClass("down"):"mouseup"==t.type&&e("#"+o).hasClass("controls")?e("#"+o).removeClass("down"):"mouseout"==t.type&&e("#"+o).hasClass("controls")&&e("#"+o).removeClass("over")}),e(I.dom.wrapperID).append('<ul id="'+I.dom.controlsID.replace("#","")+'" class="ticker-controls"><li id="'+I.dom.playPauseID.replace("#","")+'" class="jnt-play-pause controls"><a href=""><!-- --></a></li><li id="'+I.dom.prevID.replace("#","")+'" class="jnt-prev controls"><a href=""><!-- --></a></li><li id="'+I.dom.nextID.replace("#","")+'" class="jnt-next controls"><a href=""><!-- --></a></li></ul>')),"fade"!=o.displayType&&e(I.dom.contentID).mouseover(function(){0==I.paused&&p()}).mouseout(function(){0==I.paused&&u()}),o.ajaxFeed||r()}function l(){if(0==I.contentLoaded)if(o.ajaxFeed)"xml"==o.feedType?e.ajax({url:o.feedUrl,cache:!1,dataType:o.feedType,async:!0,success:function(e){count=0;for(var n=0;n<e.childNodes.length;n++)"rss"==e.childNodes[n].nodeName&&(xmlContent=e.childNodes[n]);for(var i=0;i<xmlContent.childNodes.length;i++)"channel"==xmlContent.childNodes[i].nodeName&&(xmlChannel=xmlContent.childNodes[i]);for(var d=0;d<xmlChannel.childNodes.length;d++)if("item"==xmlChannel.childNodes[d].nodeName){xmlItems=xmlChannel.childNodes[d];for(var a,l=!1,c=0;c<xmlItems.childNodes.length;c++)"title"==xmlItems.childNodes[c].nodeName?a=xmlItems.childNodes[c].lastChild.nodeValue:"link"==xmlItems.childNodes[c].nodeName&&(l=xmlItems.childNodes[c].lastChild.nodeValue),a!==!1&&""!=a&&l!==!1&&(I.newsArr["item-"+count]={type:o.titleText,content:'<a href="'+l+'">'+a+"</a>"},count++,a=!1,l=!1)}return t(I.newsArr<1)?(s("Couldn't find any content from the XML feed for the ticker to use!"),!1):(I.contentLoaded=!0,void r())}}):s("Code Me!");else{if(!o.htmlFeed)return s("The ticker is set to not use any types of content! Check the settings for the ticker."),!1;if(!(e(n+" LI").length>0))return s("Couldn't find HTML any content for the ticker to use!"),!1;e(n+" LI").each(function(t){I.newsArr["item-"+t]={type:o.titleText,content:e(this).html()}})}}function r(){I.contentLoaded=!0,e(I.dom.titleElem).html(I.newsArr["item-"+I.position].type),e(I.dom.contentID).html(I.newsArr["item-"+I.position].content),I.position==t(I.newsArr)-1?I.position=0:I.position++,distance=e(I.dom.contentID).width(),time=distance/o.speed,c()}function c(){if(e(I.dom.contentID).css("opacity","1"),!I.play)return!1;var t=e(I.dom.titleID).width()+20;e(I.dom.revealID).css(o.direction,t+"px"),"fade"==o.displayType?e(I.dom.revealID).hide(0,function(){e(I.dom.contentID).css(o.direction,t+"px").fadeIn(o.fadeInSpeed,m)}):"scroll"==o.displayType||e(I.dom.revealElem).show(0,function(){e(I.dom.contentID).css(o.direction,t+"px").show(),animationAction="right"==o.direction?{marginRight:distance+"px"}:{marginLeft:distance+"px"},e(I.dom.revealID).css("margin-"+o.direction,"0px").delay(20).animate(animationAction,time,"linear",m)})}function m(){I.play?(e(I.dom.contentID).delay(o.pauseOnItems).fadeOut(o.fadeOutSpeed),"fade"==o.displayType?e(I.dom.contentID).fadeOut(o.fadeOutSpeed,function(){e(I.dom.wrapperID).find(I.dom.revealElem+","+I.dom.contentID).hide().end().find(I.dom.tickerID+","+I.dom.revealID).show().end().find(I.dom.tickerID+","+I.dom.revealID).removeAttr("style"),r()}):e(I.dom.revealID).hide(0,function(){e(I.dom.contentID).fadeOut(o.fadeOutSpeed,function(){e(I.dom.wrapperID).find(I.dom.revealElem+","+I.dom.contentID).hide().end().find(I.dom.tickerID+","+I.dom.revealID).show().end().find(I.dom.tickerID+","+I.dom.revealID).removeAttr("style"),r()})})):e(I.dom.revealElem).hide()}function p(){I.play=!1,e(I.dom.tickerID+","+I.dom.revealID+","+I.dom.titleID+","+I.dom.titleElem+","+I.dom.revealElem+","+I.dom.contentID).stop(!0,!0),e(I.dom.revealID+","+I.dom.revealElem).hide(),e(I.dom.wrapperID).find(I.dom.titleID+","+I.dom.titleElem).show().end().find(I.dom.contentID).show()}function u(){I.play=!0,I.paused=!1,m()}function f(o){switch(p(),o){case"prev":0==I.position?I.position=t(I.newsArr)-2:1==I.position?I.position=t(I.newsArr)-1:I.position=I.position-2,e(I.dom.titleElem).html(I.newsArr["item-"+I.position].type),e(I.dom.contentID).html(I.newsArr["item-"+I.position].content);break;case"next":e(I.dom.titleElem).html(I.newsArr["item-"+I.position].type),e(I.dom.contentID).html(I.newsArr["item-"+I.position].content)}I.position==t(I.newsArr)-1?I.position=0:I.position++}var h=d(),I={position:0,time:0,distance:0,newsArr:{},play:!0,paused:!1,contentLoaded:!1,dom:{contentID:"#ticker-content-"+h,titleID:"#ticker-title-"+h,titleElem:"#ticker-title-"+h+" SPAN",tickerID:"#ticker-"+h,wrapperID:"#ticker-wrapper-"+h,revealID:"#ticker-swipe-"+h,revealElem:"#ticker-swipe-"+h+" SPAN",controlsID:"#ticker-controls-"+h,prevID:"#prev-"+h,nextID:"#next-"+h,playPauseID:"#play-pause-"+h}};return"UL"!=i&&"OL"!=i&&o.htmlFeed===!0?(s("Cannot use <"+i.toLowerCase()+"> type of element for this plugin - must of type <ul> or <ol>"),!1):("rtl"==o.direction?o.direction="right":o.direction="left",void a())})},e.fn.ticker.defaults={speed:.1,ajaxFeed:!1,feedUrl:"",feedType:"xml",displayType:"reveal",htmlFeed:!0,debugMode:!0,controls:!0,titleText:"Latest",direction:"ltr",pauseOnItems:3e3,fadeInSpeed:600,fadeOutSpeed:300}}(jQuery);