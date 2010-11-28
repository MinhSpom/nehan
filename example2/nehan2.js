/*
 source : nehan2.js
 version : 1.0.0
 site : http://tategakibunko.mydns.jp/
 blog : http://tategakibunko.blog83.fc2.com/

 Copyright (c) 2010, Watanabe Masaki <lambda.watanabe@gmail.com>
 licenced under MIT licence.

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
*/
var Nehan;Nehan||(Nehan={});
(function(){function m(a,b,c){this.text=a;this.length=b;this.eof=c;this.pos=0}function o(a){this.stream=a}function p(a){h.readOption(this,{direction:"vertical",width:400,height:300,fontSize:16,fontColor:"black",charImgRoot:"http://nehan.googlecode.com/hg/char-img",isCharImgWhite:false,nextLineOffsetRate:1.8,nextCharSpacingRate:0.1},a);this.init()}function u(a){this.lineTokens=[];this.nextLineTokens=[];this.tagStack=[];this.fontStack=[];this.indentStack=[];this.rubyTokens=[];this.dotTokens=[];this.repushTokenStack=
[];this.eventHandler=[];this.curFontScale=1;this.curFontColor=a.fontColor;this.curFontSize=a.fontSize;this.curFontSizeHalf=a.fontSizeHalf;this.curCharOffset=a.baseCharOffset;this.curIndent={before:0,after:0};this.seekNextChar=this.seekNextLine=this.curCharCount=this.saveSeekPos=this.curPageNo=this.curBorderSize=0;this.pageHtml=""}function f(a,b){this.lexer=a;this.layout=b;this.context=new u(b);this.restoreContext=null;this.parseEnd=false;this.elementHandler=[];this.tocTable=[]}function n(a,b,c){this.layout=
a;this.lexer=b;this.parser=c;this.stream=this.lexer.stream}function l(a,b,c){this.layout=new p(a);if(c){a=c.totalLength||b.length;this.onBufferShort=c.onBufferShort;this.lexer=new o(new m(b,a,b.length>=a))}else{this.onBufferShort=function(){};this.lexer=new o(new m(b,b.length,true))}this.parser=new f(this.lexer,this.layout);this.parserProxy=new n(this.layout,this.lexer,this.parser);this.pageHeadPos=[{spos:0,cpos:0}];this.cache=[]}var s={init:function(){this.browser=this.searchString(this.dataBrowser)||
"An unknown browser";this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version";this.OS=this.searchString(this.dataOS)||"an unknown OS"},searchString:function(a){for(var b=0;b<a.length;b++){var c=a[b].string,d=a[b].prop;this.versionSearchString=a[b].versionSearch||a[b].identity;if(c){if(c.indexOf(a[b].subString)!=-1)return a[b].identity}else if(d)return a[b].identity}},searchVersion:function(a){var b=a.indexOf(this.versionSearchString);if(b!=
-1)return parseFloat(a.substring(b+this.versionSearchString.length+1))},dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,
subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},
{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};s.init();var r={init:function(){var a=s.browser.toLowerCase(),b=s.version,c=s.OS;this.isIE=a=="explorer";this.isWin=c=="Windows";this.isMac=c=="Mac";this.canTransform=a=="chrome"?true:a=="safari"?true:a=="firefox"&&b>=3.5?true:a=="opera"?true:this.isIE&&b>=6?true:false}};r.init();var x={get:function(a){switch(a){case "\u300c":case "\uff62":a=
"kakko1.gif";break;case "\u300d":case "\uff63":a="kakko2.gif";break;case "\u300e":a="kakko3.gif";break;case "\u300f":a="kakko4.gif";break;case "\uff08":case "(":case "{":a="kakko5.gif";break;case "\uff09":case "}":case ")":a="kakko6.gif";break;case "\uff1c":case "<":case "\u3008":a="kakko7.gif";break;case "\uff1e":case ">":case "\u3009":a="kakko8.gif";break;case "\u300a":case "\u226a":a="kakko9.gif";break;case "\u300b":case "\u226b":a="kakko10.gif";break;case "\uff3b":case "[":case "\u3014":a="kakko13.gif";
break;case "\uff3d":case "]":case "\u3015":a="kakko14.gif";break;case "\u3010":a="kakko17.gif";break;case "\u3011":a="kakko18.gif";break;case "\uff61":case "\u3002":a="kuten.gif";break;case "\uff0e":case ".":a="kuten2.gif";break;case "\uff64":case "\u3001":case ",":case "\uff0c":a="touten.gif";break;case "\uff5e":case "\u301c":a="kara.gif";break;case "\u2026":a="mmm.gif";break;case "\uff1a":case ":":a="tenten.gif";break;case "\u2025":a="mm.gif";break;case "\uff1d":case "=":a="equal.gif";break;case "\u2015":a=
"dash.gif";break;case "\u301d":a="dmn1.gif";break;case "\u301f":a="dmn2.gif";break;case "\u30fc":case "\uff0d":case "\u2501":case "\u2014":case "-":case "\u2010":case "\u2500":case "\u2212":case "_":case "\uff70":a="|";break;case "\u2192":case "\u21d2":a="\u2193";break;case "\u2190":a="\u2191";break;case "!":a="\uff01";break;case "?":a="\uff1f";break;case "\uff65":a="\u30fb";break;case "+":a="\uff0b";break;case "@":a="\uff20";break;case "#":a="\uff03";break;case "\\":a="\uffe5"}return a}},h={filenameConcat:function(a,
b){a=a==""?"":a.slice(-1)=="/"?a:a+"/";b=b==""?"":b[0]=="/"?b.substring(1,b.length):b;return a+b},readOption:function(a,b,c){for(prop in b)a[prop]=typeof c[prop]=="undefined"?b[prop]:c[prop]},deepCopy:function(a){var b;if(typeof a=="object")if(a instanceof Array){b=[];for(var c=0;c<a.length;c++)b[c]=this.deepCopy(a[c])}else{b={};for(prop in a)b[prop]=this.deepCopy(a[prop])}else b=a;return b},cutQuote:function(a){return a.replace(/\"/g,"").replace(/\'/g,"")},inlineAttr:function(a){var b="";for(prop in a)if(a[prop]!=
"")b+=" "+prop+"='"+a[prop]+"'";return b},inlineCss:function(a){var b="";for(prop in a)b+=prop+":"+a[prop]+";";return b},tagStart:function(a,b,c){a="<"+a;if(b)a+=this.inlineAttr(b);a+=c?"/>":">";return a},tagWrap:function(a,b,c){return this.tagStart(a,b,false)+c+"</"+a+">"},setRadius:function(a,b,c,d){c=c+"px";d["-moz-border-radius-"+a+b]=c;d["-khtml-border-radius-"+a+b]=c;d["-webkit-border-"+a+"-"+b+"-radius"]=c}},w={h1:{scale:3,family:"Meiryo",weight:"bold"},h2:{scale:2,family:"Meiryo",weight:"bold"},
h3:{scale:1.5,family:"Meiryo"},h4:{scale:1.2,family:"Meiryo"},h5:{scale:1,family:"Meiryo",weight:"bold"}};m.prototype.lookChar=function(){if(this.pos==this.length)return"\n";if(this.pos>this.length)throw"BufferEnd";if(this.pos>=this.text.length)throw"BufferShort";return this.text.charAt(this.pos)};m.prototype.readUntil=function(a){var b=this.pos;a=this.text.indexOf(a,b+1);if(a<0)throw"BufferShort";this.pos=a+1;return this.text.substring(b,a+1)};m.prototype.readMatch=function(a){var b=this.pos;a=this.text.substring(b).match(a).toString();
if(a!="")this.pos=b+a.length;return this.text.substring(b,b+a.length)};m.prototype.stepSeekPos=function(){this.pos++};m.prototype.getSeekPos=function(){return this.pos};m.prototype.setSeekPos=function(a){if(a<this.length)this.pos=a};m.prototype.setText=function(a){this.text=a;this.length=a.length;this.eof=true};m.prototype.getText=function(){return this.text};m.prototype.addText=function(a){this.text+=a;this.eof=this.text.length>=this.length};m.prototype.getSeekPercent=function(){return Math.floor(100*
this.pos/this.length)};m.prototype.setEOF=function(a){return this.eof=a};m.prototype.isEOF=function(){return this.eof};o.prototype.getStream=function(){return this.stream};o.prototype.tag=function(a,b){var c=b.replace("<","").replace("/>","").replace(">","").split(/[\s\t\u3000]+/),d={};d.src=b;d.name=c[0].toLowerCase();d.attr={};for(var e=0;e<c.length;e++)(function(g){if(g.match(/([^=]+)=(.+)/)){g=RegExp.$1;var i=h.cutQuote(RegExp.$2);d.attr[g]=i}})(c[e],e);return{type:"tag",data:d,pos:a}};o.prototype.character=
function(a,b){var c=x.get(b);if(c.match("gif"))return{type:"char",half:false,kind:"img-char",data:b,filename:c,pos:a};if(b!=c)return{type:"char",half:false,kind:"cnv-char",data:c,fromdata:b,pos:a};if(b.match(/[\u3041\u30a1\u3043\u30a3\u3045\u30a5\u3047\u30a7\u3049\u30a9\u30f5\u30f6\u3063\u30c3\u3083\u30e3\u3085\u30e5\u3087\u30e7\u308e\u30ee]/))return{type:"char",half:false,kind:"small-kana",data:b,pos:a};if(b.charAt(0)=="&")return{type:"char",half:true,kind:"special-char",data:b,pos:a};if(escape(b).charAt(1)==
"u")return{type:"char",half:false,kind:"zen",data:b,pos:a};return{type:"char",half:true,kind:"small",data:b,pos:a}};o.prototype.word=function(a,b){return{type:"word",data:b,pos:a}};o.prototype.tcy=function(a,b){return{type:"tcy",data:b,pos:a}};o.prototype.getNext=function(){var a=this.stream.getSeekPos(),b=this.stream.lookChar();if(b=="<")return this.tag(a,this.stream.readUntil(">").toLowerCase());else if(b=="&")return this.character(a,this.stream.readUntil(";"));else if(r.canTransform&&b.match(/[0-9a-zA-Z!\?\.]/)){b=
this.stream.readMatch(/[0-9a-zA-Z!\.\?]+/);return b.length<=2&&!isNaN(b)||b=="!?"||b=="!!"||b=="??"?this.tcy(a,b):this.word(a,b)}else{this.stream.stepSeekPos();return this.character(a,b)}};o.prototype.skipUntilTag=function(a){for(;;){var b=this.getNext();if(b.type=="tag"&&b.data.name==a)break}};o.prototype.skipCRLF=function(){for(;;){var a=this.getNext();if(a.type!="char"||a.type=="char"&&a.data!="\r"&&a.data!="\n"){this.stream.setSeekPos(a.pos);break}}};p.prototype.init=function(){this.direction=
this.direction.toLowerCase();this.directionH=this.direction=="horizontal"||this.direction=="vertical-lr"?"lr":"rl";this.isV=this.direction=="vertical"||this.direction=="vertical-lr"||this.direction=="vertical-rl";this.baseNextLineSize=Math.floor(this.nextLineOffsetRate*this.fontSize);this.baseRubyFontSize=this.fontSizeHalf=Math.floor(this.fontSize/2);this.baseExtraLineSize=this.baseNextLineSize-this.fontSize;this.baseLetterSpacing=this.isV?Math.floor(this.nextCharSpacingRate*this.fontSize):0;this.baseCharOffset=
this.fontSize+this.baseLetterSpacing};p.prototype.getIndentCount=function(a){return a.before+a.after};p.prototype.getIndentSize=function(a){return this.baseCharOffset*a};p.prototype.getNextCharMaxSize=function(a){a=this.getIndentSize(this.getIndentCount(a.curIndent));return this.isV?this.height-a:this.width-a};p.prototype.getNextLineMaxSize=function(){return this.isV?this.width:this.height};p.prototype.getAlignLeftSize=function(a,b){return{width:this.isV?a:this.width-a-this.baseExtraLineSize,height:this.isV?
this.height-b-this.baseExtraLineSize:b}};p.prototype.isAlignEnable=function(a,b){return this.isV?b*2>this.height:a*2>this.width};u.prototype.setFontScale=function(a,b){this.curFontScale=b;this.curFontSize=Math.floor(a.fontSize*b);this.curFontSizeHalf=Math.floor(this.curFontSize/2);this.curCharOffset=Math.floor(a.baseCharOffset*b)};f.prototype.hasNextPage=function(){return this.parseEnd==false};f.prototype.getLexer=function(){return this.lexer};f.prototype.getTocTable=function(){return this.tocTable};
f.prototype.isHeadNg=function(a){if(a.match(/[\uff09\)\u300d\u3011\u3015\uff3d\]\u3002\u300f\uff1e\u3009\u300b\u3001,]/))return true;return false};f.prototype.isHeadNgToken=function(a){if(a.type!="char")return false;return this.isHeadNg(a.data)};f.prototype.isTailNg=function(a){if(a.match(/[\uff08\(\u300c\u3010\uff3b\u3014\u300e\uff1c\u3008\u300a]/))return true;return false};f.prototype.isTailNgToken=function(a){if(a.type!="char")return false;return this.isTailNg(a.data)};f.prototype.isTextToken=
function(a){return a.type=="char"||a.type=="word"||a.type=="tcy"};f.prototype.isParserEnd=function(){return this.parseEnd};f.prototype.isNextCharOver=function(a,b,c){return b.seekNextChar+c.nextOffset>a.getNextCharMaxSize(b)};f.prototype.isNextLineOver=function(a,b,c){return b.seekNextLine+c>a.getNextLineMaxSize()};f.prototype.setFont=function(a,b,c){c.scale&&this.setFontScale(a,b,parseFloat(c.scale));if(c["border-width"])b.curBorderSize=parseInt(c["border-width"]);if(c.color)b.curFontColor=c.color};
f.prototype.setFontScale=function(a,b,c){b.setFontScale(a,c)};f.prototype.resetFont=function(a,b){b.curFontScale=1;b.curFontColor=a.fontColor;b.curFontSize=a.fontSize;b.curFontSizeHalf=a.baseRubyFontSize;b.curCharOffset=a.baseCharOffset;b.curBorderSize=0};f.prototype.getFontCss=function(a,b,c){b={};for(prop in c)if(prop=="scale"){var d=parseFloat(c.scale);b["font-size"]=Math.floor(a.fontSize*d)+"px";if(a.isV)b["line-height"]=Math.floor(a.baseCharOffset*d)+"px"}else if(prop=="family")b["font-family"]=
c[prop];else if(prop=="weight")b["font-weight"]=c[prop];else if(prop=="color")b.color=c[prop];else if(prop=="bgcolor")b["background-color"]=c[prop];else if(prop=="border-radius-tl")h.setRadius("top","left",parseInt(c[prop]),b);else if(prop=="border-radius-tr")h.setRadius("top","right",parseInt(c[prop]),b);else if(prop=="border-radius-bl")h.setRadius("bottom","left",parseInt(c[prop]),b);else if(prop=="border-radius-br")h.setRadius("bottom","right",parseInt(c[prop]),b);else if(prop=="border-radius"){d=
parseInt(c[prop]);h.setRadius("top","left",d,b);h.setRadius("top","right",d,b);h.setRadius("bottom","left",d,b);h.setRadius("bottom","right",d,b)}else if(prop=="border-width")b["border-width"]=parseInt(c[prop])+"px";else if(prop=="border-color")b["border-color"]=c[prop];else if(prop=="border-style")b["border-style"]=c[prop];return b};f.prototype.tagFontStart=function(a,b,c){return h.tagStart(a.isV?"div":"span",{style:h.inlineCss(this.getFontCss(a,b,c))},false)};f.prototype.tagFontEnd=function(a){return a.isV?
"</div>":"</span>"};f.prototype.getMaxFontScale=function(a){for(var b=1,c=0;c<a.length;c++){var d=a[c];if(d.type=="tag"){d=d.data;if(d.name=="font"&&d.attr.scale){d=parseFloat(d.attr.scale);if(d>b)for(var e=c+1;e<a.length;e++)if(this.isTextToken(a[e]))b=d}}}return b};f.prototype.getLineHeight=function(){};f.prototype.getLineTextLength=function(a){for(var b=0,c=0;c<a.length;c++){var d=a[c];if(this.isTextToken(d))b+=d.nextOffset}return b};f.prototype.getTokenLength=function(a){if(a.type=="tag")return a.data.src.length;
return a.data.length};f.prototype.getRubyToken=function(a,b,c,d){return{pos:c,yomi:d,fontSize:b.curFontSizeHalf,nextOffset:Math.floor(1.1*b.curFontSizeHalf),requireSpaceSize:b.curCharOffset}};f.prototype.getRubyCss=function(a,b,c,d,e){b={position:"absolute","font-size":d+"px"};var g=e>1?Math.floor((e-1)*a.baseExtraLineSize/2):0;if(a.isV){b["margin-top"]=c+"px";b["line-height"]="1.1em";if(e>1&&d<=a.baseRubyFontSize){b["margin-left"]="-"+g+"px";b["float"]="left"}}else{b["margin-left"]=c+"px";if(e>1&&
d<=a.baseRubyFontSize)b["padding-top"]=g+g+g+"px"}return b};f.prototype.getDotToken=function(a,b,c,d){var e=a.nextLineOffsetRate-1;a=Math.floor(b.curFontSize*e);e=Math.floor(b.curFontSize*(1-e)/2);return{pos:c+e,count:d,fontSize:a,nextOffset:b.curCharOffset,requireSpaceSize:b.curCharOffset,offsetHead:e,hspace:b.curFontSize-a}};f.prototype.getDotCss=function(a,b,c){return a.isV?{position:"absolute","margin-top":c.pos,"font-size":c.fontSize+"px","line-height":c.nextOffset+"px","font-weight":"bold"}:
{position:"absolute","margin-left":c.pos,"font-size":c.fontSize,"letter-spacing":c.hspace+"px","font-weight":"bold"}};f.prototype.getTailCharToken=function(a){for(var b=a.length-1;b>=0;b--)if(this.isTextToken(a[b]))return a[b];return null};f.prototype.isTailNgLine=function(a){if((a=this.getTailCharToken(a))&&a.type=="char")return this.isTailNgToken(a);return false};f.prototype.sweepNgChars=function(a,b,c){for(;a.length>0;){var d=a[a.length-1];if(c(d))b.push(a.pop());else if(this.isTextToken(d)){b.push(a.pop());
break}}};f.prototype.fixLineEnd=function(a,b){var c=[b],d=this;this.isHeadNgToken(b)&&this.sweepNgChars(a.lineTokens,c,function(e){return d.isHeadNgToken(e)});this.isTailNgLine(a.lineTokens)&&this.sweepNgChars(a.lineTokens,c,function(e){return d.isTailNgToken(e)});c.sort(function(e,g){return e.pos-g.pos});if(this.isHeadNgToken(c[0])){this.sweepNgChars(a.lineTokens,c,function(e){return d.isHeadNgToken(e)});c.sort(function(e,g){return e.pos-g.pos})}a.nextLineTokens=a.nextLineTokens.concat(c)};f.prototype.parseTag=
function(a,b,c,d,e){var g=d.data;if(this.elementHandler[g.name])this.elementHandler[g.name](this,a,b,c,d);else if(g.name=="a")this.parseStraightForwardTagStart(a,b,c,d);else if(g.name=="/a")this.parseStraightForwardTagEnd(a,b,c,d);else if(g.name=="b"||g.name=="strong")this.parseStraightForwardTagStart(a,b,c,d);else if(g.name=="/b"||g.name=="/strong")this.parseStraightForwardTagEnd(a,b,c,d);else if(g.name=="ruby")this.parseRuby(a,b,c,d);else if(g.name=="rt")a.skipUntilTag("/rt");else if(g.name=="font")this.parseFontStart(a,
b,c,d);else if(g.name=="/font")this.parseFontEnd(a,b,c,d);else if(g.name=="img")this.parseImg(a,b,c,d);else if(g.name=="end-page")this.parseEndPage(a,b,c,d,e);else if(g.name=="dot")this.parseDot(a,b,c,d);else if(g.name=="indent")this.parseIndentStart(a,b,c,d);else if(g.name=="/indent")this.parseIndentEnd(a,b,c,d);else if(g.name=="toc")this.parseToc(a,b,c,d);else if(g.name=="pack")this.parsePack(a,b,c,d);else if(g.name=="h1"||g.name=="h2"||g.name=="h3"||g.name=="h4"||g.name=="h5")this.parseHeaderStart(a,
b,c,d);else if(g.name=="/h1"||g.name=="/h2"||g.name=="/h3"||g.name=="/h4"||g.name=="/h5")this.parseHeaderEnd(a,b,c,d);else if(g.name=="blockquote")this.parseBlockquoteStart(a,b,c,d);else g.name=="/blockquote"&&this.parseBlockquoteEnd(a,b,c,d)};f.prototype.parseStraightForwardTagStart=function(a,b,c,d){c.lineTokens.push(d);c.tagStack.push(d)};f.prototype.parseStraightForwardTagEnd=function(a,b,c,d){c.lineTokens.push(d);c.tagStack.pop()};f.prototype.parseIndentStart=function(a,b,c,d){d=d.data.attr;
a=d.before?parseInt(d.before):0;b=d.after?parseInt(d.after):0;d=d.count?parseInt(d.count):0;if(d>0)a=b=d;if(a>0||b>0){c.indentStack.push({before:a,after:b});c.curIndent.before+=a;c.curIndent.after+=b}};f.prototype.parseIndentEnd=function(a,b,c){this.setEventHandler("onPushLineComplete",c,function(d,e,g,i){if(e=i.indentStack.pop()){i.curIndent.before-=e.before;i.curIndent.after-=e.after}d.removeEventHandler("onPushLineComplete",i)});a.skipCRLF();this.pushLine(a,b,c,false)};f.prototype.parseFontStart=
function(a,b,c,d){c.lineTokens.push(d);c.tagStack.push(d);c.fontStack.push(d.data.attr);this.setFont(b,c,d.data.attr)};f.prototype.parseFontEnd=function(a,b,c,d){c.lineTokens.push(d);c.tagStack.pop();c.fontStack.pop();a=c.fontStack.length;a>0?this.setFont(b,c,c.fontStack[a-1]):this.resetFont(b,c)};f.prototype.parseEndPage=function(a,b,c,d,e){e?a.getStream().setSeekPos(d.pos):a.skipCRLF();throw"PageEnd";};f.prototype.parseHeaderStart=function(a,b,c,d){this.parseFontStart(a,b,c,{type:"tag",data:{name:"font",
attr:w[d.data.name]},pos:-1})};f.prototype.parseHeaderEnd=function(a,b,c,d){d=w[d.data.name.replace("/","")].scale;d=Math.floor(b.baseExtraLineSize*d);this.parseFontEnd(a,b,c,{type:"tag",data:{name:"/font",attr:{}},pos:-1});this.pushLine(a,b,c,false);a.skipCRLF();this.pushSpaceLine(a,b,c,d)};f.prototype.parseBlockquoteStart=function(a,b,c){a.skipCRLF();this.parseIndentStart(a,b,c,{type:"tag",data:{name:"indent",attr:{count:2}},pos:-1});this.parseFontStart(a,b,c,{type:"tag",data:{name:"font",attr:{scale:0.8}},
pos:-1})};f.prototype.parseBlockquoteEnd=function(a,b,c){this.parseIndentEnd(a,b,c,{type:"tag",data:{name:"/indent"},pos:-1});this.parseFontEnd(a,b,c,{type:"tag",data:{name:"/font"},pos:-1});a.skipCRLF();this.pushLine(a,b,c,false)};f.prototype.parseRuby=function(a,b,c,d){for(var e="",g="",i="ruby",j=c.seekNextChar,k=-1;;){d=a.getNext();if(d.type=="tag"){i=d.data.name;if(i=="/ruby"){c.rubyTokens.push(this.getRubyToken(b,c,j,e));k>=0&&a.getStream().setSeekPos(k);break}if(i=="rb")k=a.getStream().getSeekPos()}else if(d.type==
"char")if(i=="rb")g+=d.data;else if(i=="rt")e+=d.data}};f.prototype.parseDot=function(a,b,c,d){for(var e=c.seekNextChar,g=-1,i=0;;){d=a.getNext();if(d.type=="tag"&&d.data.name=="/dot"&&i>0){c.dotTokens.push(this.getDotToken(b,c,e,i));g>=0&&a.getStream().setSeekPos(g);break}else if(d.type=="char"){if(g<0)g=d.pos;i++}}};f.prototype.parseToc=function(a,b,c){b="";for(var d=a.getStream().getSeekPos();;){var e=a.getNext();if(e.type=="tag"&&e.data.name=="/toc"){this.tocTable.push({title:b,pageNo:c.curPageNo});
a.getStream().setSeekPos(d);break}else if(this.isTextToken(e))b+=e.data}};f.prototype.parsePack=function(a,b,c,d){var e="";for(a.getStream().getSeekPos();;){var g=a.getNext();if(g.type=="tag"&&g.data.name=="/pack"){e!=""&&this.parseTcy(a,b,c,a.tcy(d.pos,e));break}else if(this.isTextToken(g))e+=g.data}};f.prototype.parseChar=function(a,b,c,d){if(d.data!="\r")if(d.data=="\n")this.pushLine(a,b,c,false);else{this.setMetricsChar(b,c,d);this.pushChar(a,b,c,d)}};f.prototype.parseWord=function(a,b,c,d){this.setMetricsWord(b,
c,d);this.pushWord(a,b,c,d)};f.prototype.parseTcy=function(a,b,c,d){if(b.isV){this.setMetricsTcy(b,c,d);this.pushTcy(a,b,c,d)}else{d.type="word";this.parseWord(a,b,c,d)}};f.prototype.parseImg=function(a,b,c,d){this.context.lineTokens.length>0&&this.pushLine(a,b,c,false);this.setMetricsImg(b,c,d);this.pushImg(a,b,c,d)};f.prototype.setMetricsChar=function(a,b,c){if(c.kind=="small-kana")this.setMetricsSmallKana(a,b,c);else if(c.kind=="img-char")this.setMetricsImgChar(a,b,c);else c.half?this.setMetricsHalfChar(a,
b,c):this.setMetricsFullChar(a,b,c)};f.prototype.setMetricsSmallKana=function(a,b,c){c.nextOffset=b.curFontSize;c.fontSize=b.curFontSize};f.prototype.setMetricsImgChar=function(a,b,c){c.nextOffset=b.curFontSize;c.fontSize=b.curFontSize;color=b.curFontColor;if(color=="white"||color=="#fff"||color=="#ffffff")c.filename="w_"+c.filename};f.prototype.setMetricsHalfChar=function(a,b,c){c.nextOffset=r.canTransform||!a.isV?b.curFontSizeHalf:b.curFontSize;c.fontSize=b.curFontSize};f.prototype.setMetricsFullChar=
function(a,b,c){c.nextOffset=b.curCharOffset;c.fontSize=b.curFontSize};f.prototype.setMetricsTcy=function(a,b,c){c.fontSize=b.curFontSize;c.nextOffset=b.curCharOffset};f.prototype.setMetricsWord=function(a,b,c){c.fontSize=b.curFontSize;c.fontWidth=b.curFontSizeHalf;c.nextOffset=c.data.length*b.curFontSizeHalf};f.prototype.setMetricsImg=function(a,b,c){var d=c.data.attr;b=parseInt(d.width);d=parseInt(d.height);if(b>a.width){var e=a.width-a.fontSize,g=Math.floor(d*(e/b));b=e;d=g}if(d>a.height){g=a.height-
a.fontSize;b=e=Math.floor(b*(g/d));d=g}c.width=b;c.height=d;c.nextOffset=(a.isV?b:d)+a.baseExtraLineSize};f.prototype.pushLine=function(a,b,c,d){var e=this.getMaxFontScale(c.lineTokens),g=c.curBorderSize+c.curBorderSize,i=Math.floor(b.baseNextLineSize*e);i+=g;if(this.isNextLineOver(b,c,i)){d||c.repushTokenStack.push({type:"char",half:true,kind:"small",data:"\n",pos:-1});throw"PageEnd";}d=Math.floor(b.fontSize*e)+g;g=i-d;var j=this.makeMainText(b,c,e),k=this.makeRubyText(b,c,e);e=this.makeDotText(b,
c,e);c.pageHtml+=this.makeExtraLine(b,c,k+e,g);c.pageHtml+=this.makeTextLine(b,c,j,d);c.seekNextLine+=i;c.seekNextChar=this.getLineTextLength(c.nextLineTokens);c.lineTokens=c.nextLineTokens;c.nextLineTokens=[];this.callEventHandler("onPushLineComplete",this,a,b,c)};f.prototype.pushSpaceLine=function(a,b,c,d){if(!this.isNextLineOver(b,c,d))if(c.seekNextLine!=0)if(c.seekNextChar==0){c.pageHtml+=this.makeTextLine(b,c,"&nbsp;",d);c.seekNextLine+=d}};f.prototype.pushChar=function(a,b,c,d){c.curCharCount++;
if(this.isNextCharOver(b,c,d)){this.fixLineEnd(c,d);this.pushLine(a,b,c,true)}else{c.lineTokens.push(d);c.seekNextChar+=d.nextOffset}};f.prototype.pushWord=function(a,b,c,d){c.curCharCount+=d.data.length;var e=b.getNextCharMaxSize(c),g=e-c.seekNextChar;if(g<d.nextOffset)if(d.nextOffset>e&&g>d.fontWidth){d.data=d.data.substring(0,Math.floor(g/d.fontWidth));d.nextOffset=g;c.lineTokens.push(d);this.pushLine(a,b,c,true);a.getStream().setSeekPos(d.pos+d.data.length)}else{c.nextLineTokens.push(d);this.pushLine(a,
b,c,true)}else{c.lineTokens.push(d);c.seekNextChar+=d.nextOffset}};f.prototype.pushTcy=function(a,b,c,d){c.curCharCount++;if(b.height-c.seekNextChar<d.nextOffset){c.nextLineTokens.push(d);this.pushLine(a,b,c,true)}else{c.lineTokens.push(d);c.seekNextChar+=d.nextOffset}};f.prototype.pushImg=function(a,b,c,d){if(b.getNextLineMaxSize()-c.seekNextLine<d.nextOffset){a.getStream().setSeekPos(d.pos);throw"PageEnd";}a.skipCRLF();c.seekNextLine+=d.nextOffset;c.pageHtml+=this.makeImgText(a,b,c,d)};f.prototype.makeTokenText=
function(a,b,c,d){if(c.type=="tag"){c=c.data;if(c.name=="font")return this.tagFontStart(a,b,c.attr);if(c.name=="/font")return this.tagFontEnd(a);if(c.name=="indent"||c.name=="/indent")return"";return h.tagStart(c.name,c.attr,false)}if(!a.isV){if(c.type=="char"&&c.kind=="cnv-char")return c.fromdata;return c.data}if(c.type=="word")return this.makeWordText(a,b,c,d);if(c.type=="tcy")return this.makeTcyText(a,b,c);return this.makeCharText(a,b,c)};f.prototype.makeCharText=function(a,b,c){if(!a.isV)return c.data;
return c.kind=="small-kana"?this.makeSmallKanaText(a,b,c):c.kind=="img-char"?this.makeImgCharText(a,b,c)+"<br />":c.half?this.makeHalfCharText(a,b,c):c.data+"<br />"};f.prototype.makeImgCharText=function(a,b,c){return h.tagStart("img",{src:h.filenameConcat(a.charImgRoot,c.filename),style:h.inlineCss({"line-height":c.fontSize+"px",width:c.fontSize+"px",height:c.fontSize+"px",margin:0,padding:0,border:0})},true)};f.prototype.makeSmallKanaText=function(a,b,c){return h.tagWrap("div",{style:h.inlineCss({overflow:"visible",
position:"relative",top:"-0.12em",right:"-0.12em",height:c.nextOffset+"px","line-height":c.nextOffset+"px"})},c.data)};f.prototype.makeHalfCharText=function(a,b,c){return h.tagWrap("div",{style:h.inlineCss({height:c.nextOffset+"px","line-height":c.nextOffset+"px"})},c.data)};f.prototype.makeWordText=function(a,b,c,d){b=c.data.length<=2?0:c.nextOffset-c.fontSize;a=d>1?a.fontSize*d:a.fontSize;if(c.data.length>2&&d>1)b=c.nextOffset-a;return r.isIE?h.tagWrap("div",{style:h.inlineCss({"line-height":a+
"px","writing-mode":"tb-rl"})},c.data):h.tagWrap("div",{style:h.inlineCss({width:a+"px","line-height":a+"px","margin-bottom":b+"px","-webkit-transform":"rotate(90deg)","-webkit-transform-origin":"50% 50%","-moz-transform":"rotate(90deg)","-moz-transform-origin":"50% 50%","-o-transform":"rotate(90deg)","-o-transform-origin":"50% 50%"})},c.data)};f.prototype.makeTcyText=function(a,b,c){return c.data+"<br />"};f.prototype.makeImgAlignText=function(a,b,c,d,e){var g=d.data.attr.align;g=g=="top"||g=="left";
var i={src:d.data.attr.src,width:d.width,height:d.height},j=b.baseExtraLineSize+"px";if(b.isV)j=g?{margin:[0,j,j,0].join(" ")}:{margin:[j,j,0,0].join(" ")};else{j=g?{margin:[j,j,0,0].join(" ")}:{margin:[j,0,0,j].join(" ")};j["float"]="left"}i.style=h.inlineCss(j);i=h.tagStart("img",i,true);a=this.makeInlinePageText(a,b,c,e.width,e.height);b.isV||(a=h.tagWrap("div",{style:"float:left"},a));a=g?i+a:a+i;return h.tagWrap("div",{style:h.inlineCss(b.isV?{"float":"right"}:{width:b.width+"px",height:d.nextOffset+
"px"})},a)};f.prototype.makeImgLineText=function(a,b,c,d){return h.tagStart("img",{src:d.data.attr.src,width:d.width,height:d.height,style:h.inlineCss(b.isV?{"margin-right":b.baseExtraLineSize+"px","float":"right"}:{"margin-bottom":b.baseExtraLineSize+"px"})},true)};f.prototype.makeImgText=function(a,b,c,d){if(d.data.attr.align){var e=b.getAlignLeftSize(d.width,d.height);return b.isAlignEnable(e.width,e.height)?this.makeImgAlignText(a,b,c,d,e):this.makeImgLineText(a,b,c,d)}else return this.makeImgLineText(a,
b,c,d)};f.prototype.makeTextLine=function(a,b,c,d){return a.isV?h.tagWrap("div",{"class":"nehan-vertical-text-line",style:h.inlineCss({"float":"right","text-align":"center","line-height":a.baseCharOffset+"px",width:d+"px",height:a.height+"px"})},c):h.tagWrap("div",{"class":"nehan-horizontal-text-line",style:h.inlineCss({width:a.width+"px",height:d+"px","text-align":"left","line-height":d+"px"})},c)};f.prototype.makeExtraLine=function(a,b,c,d){if(a.isV){c=c==""?"&nbsp;":c;return h.tagWrap("div",{"class":"nehan-vertical-extra-line",
style:h.inlineCss({"float":"right","text-align":"left",width:d+"px",height:a.height+"px"})},c)}else return h.tagWrap("div",{"class":"nehan-horizontal-extra-line",style:h.inlineCss({width:a.width+"px",height:d+"px","line-height":d+"px"})},c)};f.prototype.makeMainText=function(a,b,c){for(var d="",e=0;e<b.curIndent.before;e++)d+=this.makeTokenText(a,b,{type:"char",half:false,kind:"zen",data:"\u3000"},1);for(e=0;e<b.lineTokens.length;e++)d+=this.makeTokenText(a,b,b.lineTokens[e],c);for(e=0;e<b.curIndent.after;e++)d+=
this.makeTokenText(a,b,{type:"char",half:false,kind:"zen",data:"\u3000"},1);a=this.tagFontEnd(a);for(e=b.tagStack.length-1;e>=0;e--){c=b.tagStack[e];d+=c.data.name=="font"?a:"</"+c.data.name+">";b.nextLineTokens.unshift(c)}return d};f.prototype.makeDotText=function(a,b,c){for(var d="",e=[],g=a.getNextCharMaxSize(b),i=0;i<b.dotTokens.length;i++){for(var j=b.dotTokens[i],k=j.pos,q="";j.count>0;){if(g-k<j.requireSpaceSize){k=h.deepCopy(j);k.pos=j.offsetHead;e.push(k);break}q+=this.makeCharText(a,b,{type:"char",
half:false,kind:"zen",data:"\u30fb",fontSize:j.fontSize});k+=j.nextOffset;j.count--}if(q!=""){j=this.getDotCss(a,b,j,c);d+=h.tagWrap("span",{style:h.inlineCss(j)},q)}}b.dotTokens=e;return d};f.prototype.makeRubyText=function(a,b,c){var d="",e=[],g=a.getIndentSize(b.curIndent.before);a.getIndentSize(b.curIndent.after);for(var i=a.getNextCharMaxSize(b)+g,j=0;j<b.rubyTokens.length;j++){for(var k=b.rubyTokens[j],q=k.pos+g,v="",t=0;t<k.yomi.length;t++){c1=k.yomi.charAt(t);if(i-q<k.requireSpaceSize){q=
h.deepCopy(k);q.pos=0;q.yomi=k.yomi.substring(t);e.push(q);break}v+=this.makeCharText(a,b,{type:"char",half:false,kind:"zen",data:c1,fontSize:k.fontSize});q+=k.nextOffset}if(v!=""){k=this.getRubyCss(a,b,k.pos+g,k.fontSize,c);d+=h.tagWrap("span",{style:h.inlineCss(k)},v)}}b.rubyTokens=e;return d};f.prototype.makeInlinePageText=function(a,b,c,d,e){a=b.width;var g=b.height,i=c.seekNextLine,j=c.pageHtml;b.width=d;b.height=e;c.seekNextLine=0;c.seekNextChar=0;c.pageHtml="";d=this.outputPage(true);if(c.nextLineTokens.length>
0){for(e=0;e<c.nextLineTokens.length;e++)(function(k){c.lineTokens.push(k);c.seekNextChar+=k.nextOffset})(c.nextLineTokens[e]);c.nextLineTokens=[]}b.width=a;b.height=g;c.seekNextLine=i;c.pageHtml=j;return d};f.prototype.makePageText=function(a,b,c,d){a=h.tagWrap("div",{"class":d?"nehan-page nehan-page-inline":"nehan-page",style:h.inlineCss({width:b.width+"px",height:b.height+"px","font-size":b.fontSize,"white-space":"nowrap"})},c.pageHtml);c.pageHtml="";c.seekNextLine=0;d||c.curPageNo++;return a};
f.prototype.setEventHandler=function(a,b,c){b.eventHandler[a]=c};f.prototype.removeEventHandler=function(a,b){b.eventHandler[a]=null};f.prototype.callEventHandler=function(a,b,c,d,e){e.eventHandler[a]&&e.eventHandler[a](b,c,d,e)};f.prototype.setElementHandler=function(a,b){this.elementHandler[a]=b};f.prototype.getNextToken=function(a,b){if(b.repushTokenStack.length>0)return b.repushTokenStack.pop();return a.getNext()};f.prototype.setResume=function(a,b,c){if(!a.getStream().isEOF()){c.saveSeekPos=
a.getStream().getSeekPos();this.restoreContext=h.deepCopy(c)}};f.prototype.resume=function(a){this.restoreContext&&a.getStream().setSeekPos(this.restoreContext.saveSeekPos)};f.prototype.reset=function(a){this.lexer.getStream().setSeekPos(0);this.layout=a;this.context=new u(a);this.tocTable=[];this.parseEnd=false};f.prototype.outputPage=function(a){for(a||this.setResume(this.lexer,this.layout,this.context);;)try{var b=this.getNextToken(this.lexer,this.context);if(b.type=="char")this.parseChar(this.lexer,
this.layout,this.context,b);else if(b.type=="word")this.parseWord(this.lexer,this.layout,this.context,b);else if(b.type=="tcy")this.parseTcy(this.lexer,this.layout,this.context,b);else b.type=="tag"&&this.parseTag(this.lexer,this.layout,this.context,b,a)}catch(c){if(c=="BufferShort"){a||this.resume(this.lexer,this.layout,this.context);throw"BufferShort";}else if(c=="BufferEnd"){this.parseEnd=true;if(this.context.lineTokens.length>0)try{this.pushLine(this.lexer,this.layout,this.context,false)}catch(d){if(d==
"PageEnd")this.parseEnd=false}return this.makePageText(this.lexer,this.layout,this.context,a)}else if(c=="PageEnd"){a=this.makePageText(this.lexer,this.layout,this.context,a);this.callEventHandler("onPageComplete",this,this.lexer,this.layout,this.context);return a}}};n.prototype.getContext=function(){return this.parser.context};n.prototype.getLayout=function(){return this.layout};n.prototype.createTagToken=function(a,b){return{type:"tag",data:{name:a,attr:b},pos:-1}};n.prototype.skipCRLF=function(){this.lexer.skipCRLF()};
n.prototype.pushLine=function(){this.parser.pushLine(this.lexer,this.layout,this.parser.context,false)};n.prototype.pushSpaceLine=function(a){this.parser.pushSpaceLine(this.lexer,this.layout,this.parser.context,a)};n.prototype.startFont=function(a){this.parser.parseFontStart(this.lexer,this.layout,this.parser.context,this.createTagToken("font",a))};n.prototype.endFont=function(){this.parser.parseFontEnd(this.lexer,this.layout,this.parser.context,this.createTagToken("/font",{}))};n.prototype.startIndent=
function(a,b){this.parser.parseIndentStart(this.lexer,this.layout,this.parser.context,this.createTagToken("indent",{before:a,after:b}))};n.prototype.endIndent=function(){this.parser.parseIndentEnd(this.lexer,this.layout,this.parser.context,this.createTagToken("/indent",{}))};n.prototype.pushChar=function(a){this.parser.parseChar(this.lexer,this.layout,this.parser.context,this.lexer.character(-1,a))};l.prototype.reset=function(a){this.layout=new p(a);this.parser.reset(this.layout);this.cache=[]};l.prototype.hasNextPage=
function(){return this.parser.hasNextPage()};l.prototype.isEnablePage=function(a){if(this.cache[a])return true;return false};l.prototype.getText=function(){return this.lexer.getStream().getText()};l.prototype.setText=function(a){return this.lexer.getStream().setText(a)};l.prototype.addText=function(a){return this.lexer.getStream().addText(a)};l.prototype.isEOF=function(){return this.lexer.getStream().isEOF()};l.prototype.getTocTable=function(){return this.parser.getTocTable()};l.prototype.getTocCount=
function(){return this.parser.getTocTable().length};l.prototype.getPageCount=function(){return this.parser.context.curPageNo};l.prototype.setElementHandler=function(a,b){var c=this;this.parser.setElementHandler(a,function(d,e,g,i,j){b(c.parserProxy,j.data)})};l.prototype.setPageHeadPos=function(a,b,c){this.pageHeadPos[a]={spos:b,cpos:c}};l.prototype.getPageHeadPos=function(a){return this.pageHeadPos[a]};l.prototype.setPageCache=function(a,b){this.cache[a]=b};l.prototype.getPageSourceText=function(a){if(a+
1<this.getPageCount()){var b=this.getPageHeadPos(a).spos;a=this.getPageHeadPos(a+1).spos;return this.lexer.getStream().getText().substring(b,a)}return""};l.prototype.getPageNoFromSeekPos=function(a){for(var b=0;b<this.pageHeadPos.length-1;b++)if(this.pageHeadPos[b].spos<=a&&a<this.pageHeadPos[b+1].spos)return b;if(this.pageHeadPos[b].spos<=a&&a<=this.lexer.getStream().getText().length)return b;return-1};l.prototype.outputPage=function(a){if(this.cache[a])return this.cache[a];try{var b=this.getPageHeadPos(a),
c=this.parser.outputPage(false),d=this.lexer.getStream().getSeekPercent(),e=this.lexer.getStream().getSeekPos(),g=this.parser.context.curCharCount;if(!this.parser.hasNextPage())this.pageCount=a+1;this.setPageHeadPos(a+1,e,g);this.cache[a]={html:c,percent:d,spos:b.spos,cpos:b.cpos};return this.cache[a]}catch(i){i=="BufferShort"&&this.onBufferShort(this.parser)}};Nehan.Util=h;Nehan.Env=r;Nehan.Layout=p;Nehan.TextStream=m;Nehan.StreamLexer=o;Nehan.StreamParser=f;Nehan.PageProvider=l;Nehan.ParserProxy=
n})();
