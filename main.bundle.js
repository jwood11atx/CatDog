!function(t){function e(s){if(i[s])return i[s].exports;var n=i[s]={exports:{},id:s,loaded:!1};return t[s].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=i(7),a=s(n),o=i(5),h=s(o),l=i(10),r=s(l),u=i(2),d=s(u),c=i(3),g=i(8),f=new(window.AudioContext||window.webkitAudioContext),p=new a.default(f),y=new d.default;y.addListeners();var m,x,v,b,w,C,k,S,D,I="load",T={},E={},R={},L={},z=[];window.onload=function(){function t(){console.log("loading assets...");var t=[];return t.push(document.fonts.ready),t.push(p.loadImages(c.imageArray)),t.push(p.loadSound("epicMusic","../CatDog/audio/battle.mp3")),t.push(p.loadSound("startScreenMusic","../CatDog/audio/caketown.mp3")),t.push(p.loadSound("battleMusic","../CatDog/audio/happy.mp3")),t.push(p.loadSound("winMusic","../CatDog/audio/annulet.wav")),t}function e(t){z=(0,g.makePlatforms)(T,t),(0,g.setBackground)(t,p),O();var e=new r.default({heroImage:new Image,fillStyle:"#838383",heroType:"Cat",position:{x:200,y:515},facing:"east",context:E.ctxt,gameSize:L,id:1,kb:y,platforms:z,loader:p}),i=new r.default({heroImage:new Image,fillStyle:"#EC9F48",heroType:"Dog",position:{x:1e3,y:515},facing:"west",context:E.ctxt,gameSize:L,id:2,kb:y,platforms:z,loader:p}),s={fgContext:E.ctxt,bgContext:T.ctxt,p1:e,p2:i,gameSize:L,hud:R,loader:p};m=new h.default(s),m.start()}function i(){"load"===I?d():"winScreen"===I?(w.stop(),D=!1,B(),l(),b=!1,u()):"play"===I&&(j(),o(),n(),1!==m.players[0].lives&&1!==m.players[1].lives||D||(D=!0,x.stop(),_()),m.paused||m.end?m.paused?(M(),m.render()):m.end?I="winScreen":(H(),P(),s(),a()):(m.update(),m.render())),window.requestAnimationFrame(i)}function s(){E.ctxt.drawImage(C,0,0,T.cnvs.width,T.cnvs.height,0,0,T.cnvs.width,T.cnvs.height)}function n(){T.ctxt.clearRect(0,0,L.x,L.y),E.ctxt.clearRect(0,0,L.x,L.y)}function a(){y.isDown(y.KEYS[0].LEFT)&&!y.keyHeld?(e(0),I="play"):y.isDown(y.KEYS[0].RIGHT)&&!y.keyHeld&&(e(1),I="play")}function o(){y.isDown(y.KEYS[0].ESCAPE)&&!y.keyHeld&&(y.keyHeld=!0,m.paused?m.paused=!1:m.paused=!0,document.addEventListener("keyup",function(t){t.keyCode===y.KEYS[0].ESCAPE&&(y.keyHeld=!1)}))}function l(){var t;t=0===m.player1.lives?p.getImage("Player2Wins"):p.getImage("Player1Wins"),E.ctxt.drawImage(t,0,0,T.cnvs.width,T.cnvs.height,0,0,T.cnvs.width,T.cnvs.height)}function u(){y.isDown(y.KEYS[0].SPACE)&&!y.keyHeld&&(y.keyHeld=!0,I="menu",document.addEventListener("keyup",function(t){32===t.keyCode&&(y.keyHeld=!1)}))}function d(){E.ctxt.clearRect(0,0,L.x,L.y),E.ctxt.save(),E.ctxt.shadowColor="black",E.ctxt.shadowOffsetY=1.4,E.ctxt.shadowOffsetX=1.4,E.ctxt.fillStyle="white",E.ctxt.textAlign="center",E.ctxt.font="54px 'Carter One'",E.ctxt.fillText("Loading...",E.cnvs.width/2,620),E.ctxt.restore()}function M(){E.ctxt.save(),E.ctxt.shadowColor="black",E.ctxt.shadowOffsetY=1.4,E.ctxt.shadowOffsetX=1.4,E.ctxt.fillStyle="#EC9F48",E.ctxt.font="72px 'Carter One'",E.ctxt.fillText("Paused",500,390),E.ctxt.restore()}function P(){if(!b){b=!0;var t=f.createGain();v=f.createBufferSource(),v.connect(t);var e=p.sounds.startScreenMusic;v.buffer=e,t.connect(f.destination),t.gain.value=1.35,v.loop=!0,v.start()}}function j(){v.stop(),b=!1}function O(){var t=f.createGain();x=f.createBufferSource(),x.connect(t);var e=p.sounds.battleMusic;x.buffer=e,t.connect(f.destination),t.gain.value=.35,x.loop=!0,x.start()}function _(){var t=f.createGain();w=f.createBufferSource(),w.connect(t);var e=p.sounds.epicMusic;w.buffer=e,t.connect(f.destination),t.gain.value=.35,w.loop=!0,w.start()}function B(){if(!S){S=!0,b=!0,k=f.createBufferSource();var t=p.sounds.winMusic;k.buffer=t,k.connect(f.destination),k.start()}}function H(){k&&(k.stop(),S=!1)}T.cnvs=document.getElementById("bg-layer"),T.ctxt=T.cnvs.getContext("2d"),E.cnvs=document.getElementById("fg-layer"),E.ctxt=E.cnvs.getContext("2d"),R.cnvs=document.getElementById("hud-layer"),R.ctxt=R.cnvs.getContext("2d"),L={x:T.cnvs.width,y:T.cnvs.height},i();var W=t();Promise.all(W).then(function(){console.log("assets loaded."),E.ctxt.clearRect(0,0,L.x,L.y),C=p.getImage("StartScreen"),I="menu",P(),document.getElementById("bg-layer").style.position="absolute",document.getElementById("fg-layer").style.position="absolute",document.getElementById("hud-layer").style.position="absolute"})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t,e){return e.map(function(e){var i=e.x-(t.position.x+t.size.width),s=t.position.x-(e.x+e.width),n=t.position.y-(e.y+e.height),a=e.y-(t.position.y+t.size.height),o=t.size.width/2+e.width/2,h=t.size.height/2+e.height/2;if(n<=0&&a<=0&&s<=0&&i<=0){var l=t.position.x+t.size.width/2-(e.x+e.width/2),r=e.y+e.height/2-(t.position.y+t.size.height/2),u=o-Math.abs(l),d=h-Math.abs(r);return u>=d?(r<0&&!e.passThrough&&(t.position.y=e.height+e.y,t.velocity.y=0),r>0&&t.velocity.y>0&&(t.position.y-=d,t.grounded=!0,t.jumpcount=0,t.jumping=!1)):(l<0&&!e.passThrough&&(t.position.x=e.x-t.size.width,t.velocity.x/=2),l>0&&!e.passThrough&&(t.position.x=e.width+e.x,t.velocity.x/=2)),!0}return!1})},s=function(t){var e=t[0],i=t[1],s=i.position.x+i.size.width/2-(e.position.x+e.size.width/2),n=i.position.y+i.size.height/2-(e.position.y+e.size.height/2);return Math.abs(n)<=e.size.height/2&&Math.abs(n)>=e.size.height/2-20&&n>0&&Math.abs(Math.floor(s))<e.size.width/2&&e.velocity.y>1&&!i.dead&&!e.stunned?(e.velocity.y=-15,i.dead=!0,i.deathCooldown=Date.now()+750,!0):Math.abs(n)<=e.size.height/2&&Math.abs(n)>=e.size.height/2-20&&n<0&&Math.abs(Math.floor(s))<e.size.width/2&&i.velocity.y>1&&!e.dead&&!i.stunned&&(i.velocity.y=-15,e.dead=!0,e.deathCooldown=Date.now()+750,!0)},n=function(t){var e=t[0],i=t[1],s=[];return s[0]=e.bullets.map(function(t){var e=t.position.x+t.size.width/2-(i.position.x+i.size.width/2),s=t.position.y+t.size.height/2-(i.position.y+i.size.height/2);return Math.abs(e)<i.size.width/2&&Math.abs(s)<i.size.height/3&&(i.stunned=!0,i.stunCooldown=Date.now()+1e3,!0)}),s[1]=i.bullets.map(function(t){var i=t.position.x+t.size.width/2-(e.position.x+e.size.width/2),s=t.position.y+t.size.height/2-(e.position.y+e.size.height/2);return Math.abs(i)<e.size.width/2&&Math.abs(s)<e.size.height/3&&(e.stunned=!0,e.stunCooldown=Date.now()+1e3,!0)}),s.reduce(function(t,e){return t.concat(e)},[])};e.playerCollisionCheck=s,e.platformCollisionCheck=i,e.projectileHitCheck=n},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),n=function(){function t(){var e=this;i(this,t),this.keyState={},this.keyHeld=!1,this.KEYS={0:{SPACE:32,ESCAPE:27,ENTER:13,LEFT:37,RIGHT:39},1:{UP:87,LEFT:65,DOWN:83,RIGHT:68},2:{UP:38,LEFT:37,DOWN:40,RIGHT:39}},this.isDown=function(t){return e.keyState[t]===!0},this.isUp=function(t){return e.keyState[t]===!1}}return s(t,[{key:"addListeners",value:function(){var t=this;document.addEventListener("keydown",function(e){e.preventDefault(),t.keyState[e.keyCode]=!0}),document.addEventListener("keyup",function(e){e.preventDefault(),t.keyState[e.keyCode]=!1})}}]),t}();e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=[{label:"StartScreen",src:"../CatDog/images/StartScreen.png"},{label:"Player1Wins",src:"../CatDog/images/Player1Wins.png"},{label:"Player2Wins",src:"../CatDog/images/Player2Wins.png"},{label:"CatDeadLeft",src:"../CatDog/images/cat-dog-tileset/CatDeadLeft.png"},{label:"CatDeadRight",src:"../CatDog/images/cat-dog-tileset/CatDeadRight.png"},{label:"CatFallLeft",src:"../CatDog/images/cat-dog-tileset/CatFallLeft.png"},{label:"CatFallRight",src:"../CatDog/images/cat-dog-tileset/CatFallRight.png"},{label:"CatIdleLeft",src:"../CatDog/images/cat-dog-tileset/CatIdleLeft.png"},{label:"CatIdleRight",src:"../CatDog/images/cat-dog-tileset/CatIdleRight.png"},{label:"CatJumpLeft",src:"../CatDog/images/cat-dog-tileset/CatJumpLeft.png"},{label:"CatJumpRight",src:"../CatDog/images/cat-dog-tileset/CatJumpRight.png"},{label:"CatRunLeft",src:"../CatDog/images/cat-dog-tileset/CatRunLeft.png"},{label:"CatRunRight",src:"../CatDog/images/cat-dog-tileset/CatRunRight.png"},{label:"CatStunnedLeft",src:"../CatDog/images/cat-dog-tileset/CatStunnedLeft.png"},{label:"CatStunnedRight",src:"../CatDog/images/cat-dog-tileset/CatStunnedRight.png"},{label:"DogDeadLeft",src:"../CatDog/images/cat-dog-tileset/DogDeadLeft.png"},{label:"DogDeadRight",src:"../CatDog/images/cat-dog-tileset/DogDeadRight.png"},{label:"DogFallLeft",src:"../CatDog/images/cat-dog-tileset/DogFallLeft.png"},{label:"DogFallRight",src:"../CatDog/images/cat-dog-tileset/DogFallRight.png"},{label:"DogIdleLeft",src:"../CatDog/images/cat-dog-tileset/DogIdleLeft.png"},{label:"DogIdleRight",src:"../CatDog/images/cat-dog-tileset/DogIdleRight.png"},{label:"DogJumpLeft",src:"../CatDog/images/cat-dog-tileset/DogJumpLeft.png"},{label:"DogJumpRight",src:"../CatDog/images/cat-dog-tileset/DogJumpRight.png"},{label:"DogRunLeft",src:"../CatDog/images/cat-dog-tileset/DogRunLeft.png"},{label:"DogRunRight",src:"../CatDog/images/cat-dog-tileset/DogRunRight.png"},{label:"DogStunnedLeft",src:"../CatDog/images/cat-dog-tileset/DogStunnedLeft.png"},{label:"DogStunnedRight",src:"../CatDog/images/cat-dog-tileset/DogStunnedRight.png"},{label:"tennisBall",src:"../CatDog/images/cat-dog-tileset/tennisBall.png"},{label:"yarnBall",src:"../CatDog/images/cat-dog-tileset/yarnBall.png"}],s=[{label:"happyMusic",src:"../audio/happy.mp3"},{label:"loadingLoop",src:"../audio/loading-loop-0.wav"},{label:"theLastEncounterExtended",src:"../audio/tle-extended.mp3"}];e.imageArray=i,e.soundArray=s},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),o=i(1),h=(s(o),function(){function t(e){n(this,t),this.playerID=e.playerID,this.ctx=e.ctx,this.position=e.position,this.size={width:15,height:15},this.speed=25,this.velocity={x:0,y:0},this.gravity=1.2,this.friction=.75,this.loader=e.loader,this.img=void 0,Object.assign(this,e)}return a(t,[{key:"draw",value:function(){1===this.playerID&&(this.img=this.loader.getImage("yarnBall")),2===this.playerID&&(this.img=this.loader.getImage("tennisBall")),this.ctx.drawImage(this.img,0,0,50,50,this.position.x,this.position.y,this.size.width,this.size.height)}},{key:"update",value:function(){this.velocity.y+=this.gravity-.5,this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.position.x<0-this.size.width&&(this.position.x=1250),this.position.x>1250&&(this.position.x=0-this.size.width)}}]),t}());e.default=h},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),o=i(1),h=i(6),l=s(h),r=function(){function t(e){n(this,t),this.hud=e.hud,this.kb=e.kb,this.fgContext=e.fgContext,this.bgContext=e.bgContext,this.gameSize=e.gameSize,this.players=[],this.player1=e.p1,this.player2=e.p2,this.bullets1=[],this.bullets2=[],this.count=0,this.state=void 0,this.paused=!1,this.load=e.load,this.init=e.init,this.loader=e.loader,this.end=!1,this.level=0,this.players.push(this.player1),this.players.push(this.player2)}return a(t,[{key:"start",value:function(){this.reset(),this.end=!1}},{key:"update",value:function(){(0,o.playerCollisionCheck)(this.players),(0,o.projectileHitCheck)(this.players);var t=!0,e=!1,i=void 0;try{for(var s,n=this.players[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var a=s.value;a.update()?(0,l.default)(this.hud,this.players):0===a.lives&&(this.end=!0)}}catch(t){e=!0,i=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw i}}}},{key:"render",value:function(){var t=!0,e=!1,i=void 0;try{for(var s,n=this.players[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var a=s.value;a.draw()}}catch(t){e=!0,i=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw i}}}},{key:"reset",value:function(){var t=!0,e=!1,i=void 0;try{for(var s,n=this.players[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var a=s.value;a.reset=!0,a.playerReset(),a.lives=10}}catch(t){e=!0,i=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw i}}}}]),t}();e.default=r},function(t,e){"use strict";function i(t,e){var i=t.cnvs,s=t.ctxt;s.clearRect(0,0,i.width,i.height),s.save(),s.shadowColor="black",s.shadowOffsetY=1.4,s.shadowOffsetX=1.4,s.fillStyle="#838383",s.font="48px 'Carter One'",s.fillText("Player 1",10,50),s.font="28px 'Carter One'",s.fillText("Lives: "+e[0].lives,45,80),s.shadowColor="black",s.shadowOffsetY=1.4,s.shadowOffsetX=1.4,s.font="48px 'Carter One'",s.fillStyle="#EC9F48",s.fillText("Player 2",1055,50),s.font="28px 'Carter One'",s.fillText("Lives: "+e[1].lives,1085,80),s.restore()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),n=function(){function t(e){i(this,t),this.imgs={},this.sounds={},this.fonts={},this.actx=e}return s(t,[{key:"progressBar",value:function(){}},{key:"loadImages",value:function(t){var e=this;return t.map(function(t){e.loadImage(t.label,t.src)})}},{key:"loadImage",value:function(t,e){var i=new Image,s=new Promise(function(s,n){i.onload=function(){this.imgs[t]=i,s(i)}.bind(this),i.onerror=function(){n("image failed to load: "+e)}}.bind(this));return i.src=e,s}},{key:"getImage",value:function(t){return t in this.imgs?this.imgs[t]:null}},{key:"loadSounds",value:function(t){var e=this;return t.map(function(t){e.loadSound(t.label,t.src)})}},{key:"loadSound",value:function(t,e){var i=this,s=new Promise(function(s,n){function a(e){i.actx.decodeAudioData(h.response,function(e){o=e,i.sounds[t]=o,s(h.response)},function(t){throw new Error("audio failed to load: "+t)})}var o,h=new XMLHttpRequest;h.open("GET",e,!0),h.responseType="arraybuffer",h.send(),h.addEventListener("load",a,!1)});return s}},{key:"loadMusic",value:function(){function t(t){console.log("audio-loadHandler"),i.decodeAudioData(s.response,function(t){e=t;var s=i.createBufferSource();s.buffer=e,s.connect(i.destination),s.loop=!0,s.start(0)},function(t){throw new Error("audio failed to load: "+t)})}var e,i=new(window.AudioContext||window.webkitAudioContext),s=new XMLHttpRequest;s.open("GET","../audio/tle-extended.mp3",!0),s.responseType="arraybuffer",s.send(),s.addEventListener("load",t,!1)}}]),t}();e.default=n},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.setBackground=e.makePlatforms=void 0;var n=i(9),a=s(n),o=function(t,e){var i=[];return 0===e?(i.push(new a.default({fillStyle:"rgba(103,58,183,1)",bgContext:t.ctxt,x:-100,y:580,width:1450,height:70,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(255,152,0,1)",bgContext:t.ctxt,x:530,y:425,width:335,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(0,150,136,1)",bgContext:t.ctxt,x:572,y:180,width:420,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(205,220,57,1)",bgContext:t.ctxt,x:215,y:315,width:225,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(233,30,99,1)",bgContext:t.ctxt,x:0,y:215,width:147,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(33,150,243,1)",bgContext:t.ctxt,x:1070,y:332,width:180,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(255,235,59,1)",bgContext:t.ctxt,x:1175,y:504,width:75,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(63,81,181,1)",bgContext:t.ctxt,x:0,y:400,width:85,height:40,passThrough:!0}))):1===e&&(i.push(new a.default({fillStyle:"rgba(103,58,183,1)",bgContext:t.ctxt,x:-100,y:580,width:352,height:70,passThrough:!1})),i.push(new a.default({fillStyle:"rgba(255,152,0,1)",bgContext:t.ctxt,x:499,y:580,width:250,height:70,passThrough:!1})),i.push(new a.default({fillStyle:"rgba(0,150,136,1)",bgContext:t.ctxt,x:999,y:580,width:352,height:70,passThrough:!1})),i.push(new a.default({fillStyle:"rgba(205,220,57,1)",bgContext:t.ctxt,x:213,y:420,width:312,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(233,30,99,1)",bgContext:t.ctxt,x:724,y:420,width:312,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(33,150,243,1)",bgContext:t.ctxt,x:403,y:260,width:442,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(255,235,59,1)",bgContext:t.ctxt,x:-100,y:100,width:250,height:40,passThrough:!0})),i.push(new a.default({fillStyle:"rgba(63,81,181,1)",bgContext:t.ctxt,x:1100,y:100,width:250,height:40,passThrough:!0}))),i},h=function(t,e){var i;0===t?i="gameMapJungle":1===t&&(i="gameMapDesert");var s="url(images/"+i+".jpg)";document.getElementById("bg-layer").style.backgroundImage=s};e.makePlatforms=o,e.setBackground=h},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),n=function(){function t(e){i(this,t),this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this.passThrough=e.passThrough||!1,this.fillStyle=e.fillStyle,Object.assign(this,e)}return s(t,[{key:"draw",value:function(){this.bgContext.fillStyle=this.fillStyle,this.bgContext.globalAlpha=.5,this.bgContext.fillRect(this.x,this.y,this.width,this.height)}}]),t}();e.default=n},function(t,e,i){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}(),o=i(4),h=s(o),l=i(1),r=(s(l),i(2)),u=(s(r),function(){function t(e){n(this,t),this.jumpcount=0,this.lives=10,this.bullets=[],this.gameSize={x:1250,y:650},this.kb=e.kb,this.id=1,this.position={x:0,y:0},this.size={width:45,height:65},this.speed=6,this.velocity={x:0,y:0},this.jumping=!1,this.facing=e.facing,this.grounded=!0,this.stunned=!1,this.stunCooldown=0,this.shootCooldown=0,this.dead=!1,this.deathCooldown=0,this.reset=!1,this.heroType=e.heroType,this.imageIndex=0,this.imageWidth=100,this.gravity=Math.exp(.1),this.friction=.62,this.platforms=e.platforms,this.fillStyle=e.fillStyle,this.loader=e.loader,Object.assign(this,e)}return a(t,[{key:"jump",value:function(){return this.jumpcount<2&&(this.velocity.y=2.5*-this.speed,this.jumping=!0,this.grounded=!1,this.jumpcount++,!0)}},{key:"draw",value:function(){this.dead&&"west"===this.facing?(this.imageIndex=0,this.imageWidth=133,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"DeadLeft.png"):this.dead&&"east"===this.facing?(this.imageIndex=0,this.imageWidth=133,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"DeadRight.png"):this.stunned&&"west"===this.facing?(this.imageIndex=0,this.imageWidth=100,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"StunnedLeft.png"):this.stunned&&"east"===this.facing?(this.imageIndex=0,this.imageWidth=100,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"StunnedRight.png"):this.jumping&&this.velocity.x<0&&"west"===this.facing?(this.imageIndex=0,this.imageWidth=100,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"JumpLeft.png"):this.jumping&&this.velocity.y<0&&"east"===this.facing?(this.imageIndex=0,this.imageWidth=100,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"JumpRight.png"):this.jumping&&this.velocity.y>0&&"west"===this.facing?(this.imageIndex=0,this.imageWidth=100,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"FallLeft.png"):this.jumping&&this.velocity.y>0&&"east"===this.facing?(this.imageIndex=0,this.imageWidth=100,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"FallRight.png"):this.velocity.y>0&&"east"===this.facing?(this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"RunRight.png",this.imageWidth=100,7===this.imageIndex?this.imageIndex=0:this.imageIndex++):this.velocity.x<0&&"west"===this.facing?(7===this.imageIndex?this.imageIndex=0:this.imageIndex++,this.imageWidth=100,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"RunLeft.png"):Math.abs(this.velocity.x)<1&&"east"===this.facing?(this.imageIndex=0,this.imageWidth=100,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"IdleRight.png"):Math.abs(this.velocity.x)<1&&"west"===this.facing&&(this.imageIndex=0,this.imageWidth=100,this.heroImage.src="./images/cat-dog-tileset/"+this.heroType+"IdleLeft.png"),this.context.drawImage(this.heroImage,this.imageIndex*this.imageWidth,0,this.imageWidth,150,this.position.x,this.position.y,this.size.width,this.size.height);var t=!0,e=!1,i=void 0;try{for(var s,n=this.bullets[Symbol.iterator]();!(t=(s=n.next()).done);t=!0){var a=s.value;a.draw()}}catch(t){e=!0,i=t}finally{try{!t&&n.return&&n.return()}finally{if(e)throw i}}}},{key:"left",value:function(){this.velocity.x-=this.speed,this.facing="west"}},{key:"right",value:function(){this.velocity.x+=this.speed,this.facing="east"}},{key:"shoot",value:function(){if(this.shootCooldown<Date.now()){var t=new h.default({ctx:this.context,position:{x:this.position.x,y:this.position.y+40},playerID:this.id,loader:this.loader});return"east"===this.facing?t.velocity.x=+t.speed:t.velocity.x=-t.speed,t.velocity.y=-t.speed/4,this.bullets.push(t),this.shootCooldown=Date.now()+1750,!0}return!1}},{key:"conditionCheck",value:function(){var t=Date.now();this.deathCooldown>t?this.size.width=58:this.dead&&(this.reset=!0,this.dead=!1,this.size.width=45),this.stunCooldown<t&&(this.stunned=!1)}},{key:"playerReset",value:function(){return this.reset&&1===this.id?(this.lives--,this.position.x=200,this.position.y=515,this.facing="east",this.stunned=!1,this.reset=!1,!0):!(!this.reset||2!==this.id)&&(this.lives--,this.position.x=1e3,this.position.y=515,this.facing="west",this.stunned=!1,this.reset=!1,!0)}},{key:"mapBoundryCheck",value:function(){this.position.x>=this.gameSize.x-10?this.position.x=-35:this.position.x<=-35&&(this.position.x=this.gameSize.x-10),this.position.y>this.gameSize.y+750&&(this.dead=!0)}},{key:"update",value:function(){var t=this,e=!0,i=!1,s=void 0;try{for(var n,a=this.bullets[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var o=n.value;o.update()}}catch(t){i=!0,s=t}finally{try{!e&&a.return&&a.return()}finally{if(i)throw s}}return this.bullets=this.bullets.filter(function(e){return e.position.y<=t.gameSize.y-70}),!this.kb.isDown(this.kb.KEYS[this.id].LEFT)||this.stunned||this.dead||this.left(),!this.kb.isDown(this.kb.KEYS[this.id].RIGHT)||this.stunned||this.dead||this.right(),!this.kb.isDown(this.kb.KEYS[this.id].UP)||this.jumpHeld||this.stunned||this.dead||(this.jump(),this.jumpHeld=!0),!this.kb.isDown(this.kb.KEYS[this.id].DOWN)||this.stunned||this.dead||this.shoot(),this.kb.isUp(this.kb.KEYS[this.id].UP)&&(this.jumpHeld=!1),!this.jumping||this.kb.keyState[this.kb.KEYS[1].LEFT]||this.kb.keyState[this.kb.KEYS[1].RIGHT]||this.kb.keyState[this.kb.KEYS[2].LEFT]||this.kb.keyState[this.kb.KEYS[2].RIGHT]||(this.velocity.x/=this.friction),Math.abs(this.velocity.x)<1&&(this.velocity.x=0),Math.abs(this.velocity.x)>0&&(this.grounded=!1),this.grounded?this.velocity.y=0:this.velocity.y<25&&(this.velocity.y+=this.gravity),this.velocity.x*=this.friction,this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.mapBoundryCheck(),this.conditionCheck(),(0,l.platformCollisionCheck)(this,this.platforms),!this.playerReset()}}]),t}());e.default=u}]);