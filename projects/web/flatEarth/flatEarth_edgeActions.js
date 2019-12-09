/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         sym.play("land");sym.getSymbol("glitch_in").play("glitchn");sym.getSymbol("glitch_open").play("g_open");
         sym.getSymbol("anon_intro").play("anonv1");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19853, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();
         sym.getSymbol("option_hold").play("option_loop");
         sym.getSymbol("prog_reg").play("buttons_load");
         sym.getSymbol("meds").play("medsLoop");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${progress_buton}", "click", function(sym, e) {
         sym.play("progress_out");
         sym.getSymbol("progress").play("vidPlay");
         sym.getSymbol("meds").$("mediaaudio")[0].muted = true;
         sym.getSymbol("quotesMod").$("history_quotes_broker_mod")[0].pause();
         sym.getSymbol("anon_intro").$("anonaudiointro")[0].muted = true;

      });
      //Edge binding end

            Symbol.bindElementAction(compId, symbolName, "${regress_button}", "click", function(sym, e) {
         sym.play("regress_out");
         sym.getSymbol("regress").play("death"); 
         sym.getSymbol("meds").$("mediaaudio")[0].muted = true;
         sym.getSymbol("quotesMod").$("history_quotes_broker_mod")[0].pause();
         sym.getSymbol("anon_intro").$("anonaudiointro")[0].muted = true;
         
         
         
         
         
         
         

      });
         //Edge binding end



      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         // insert code to be run at timeline end here
         sym.getSymbol("entersym").play("ent");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${hover_sun}", "mouseover", function(sym, e) {
         sym.getComposition().getStage().getSymbol("sun").play("thesun");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sunhover}", "mouseenter", function(sym, e) {
         sym.getSymbol("hov_anon").play("hov");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sunhover}", "mouseleave", function(sym, e) {
         sym.getSymbol("hov_anon").play("hov_out");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${sunhover}", "mouseover", function(sym, e) {
         sym.getSymbol("sun").play();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${about}", "mouseenter", function(sym, e) {
         sym.getSymbol("about_info").play("aboutScroll_enter");
         sym.getSymbol("aboutScroll_mini").play("aboutScroll_entermini");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${about}", "mouseleave", function(sym, e) {
         sym.getSymbol("about_info").play("aboutScroll_leave");
         sym.getSymbol("aboutScroll_mini").play("aboutScroll_leavemini");

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${mission}", "mouseenter", function(sym, e) {
         sym.getSymbol("about_info").play("missionScroll_enter");
         sym.getSymbol("aboutScroll_mini").play("missionScroll_entermini");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${mission}", "mouseleave", function(sym, e) {
         
         sym.getSymbol("about_info").play("missionScroll_leave");
         sym.getSymbol("aboutScroll_mini").play("missionScroll_leavemini");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${contact}", "mouseenter", function(sym, e) {
         sym.getSymbol("about_info").play("contactScroll_enter");
         sym.getSymbol("aboutScroll_mini").play("contactScroll_entermini");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${contact}", "mouseleave", function(sym, e) {
         
         sym.getSymbol("about_info").play("contactScroll_leave");
         sym.getSymbol("aboutScroll_mini").play("contactScroll_leavemini");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${regress_button}", "mouseleave", function(sym, e) {
         sym.getSymbol("regHover").play("regHover_leave");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${regress_button}", "mouseenter", function(sym, e) {
         sym.getSymbol("regHover").play("regHover_enter");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${progress_buton}", "mouseenter", function(sym, e) {
         sym.getSymbol("progHover").play("progHover_enter");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${progress_buton}", "mouseleave", function(sym, e) {
         sym.getSymbol("progHover").play("progHover_leave");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${print3d}", "mouseenter", function(sym, e) {
         sym.getSymbol("about_info").play("3dprintScroll_enter");
         sym.getSymbol("aboutScrollmini").play("3dprintScroll_entermini");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${print3d}", "mouseleave", function(sym, e) {
         sym.getSymbol("about_info").play("3dprintScroll_leave");
         sym.getSymbol("aboutScroll_mini").play("3dprintScroll_entermini");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 105000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 113250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${print3d}", "dblclick", function(sym, e) {
         // Navigate to a new URL in a new window
         window.open("http://anonhq.com/wp-content/uploads/2014/07/B51FFE3C4.jpg", "_blank");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1148, function(sym, e) {
         sym.getSymbol("vid_int").play("vid_touch");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12885, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 29760, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'glitch_exe'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5031, function(sym, e) {
         sym.getSymbol().play("glitch_love");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2928, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3033, function(sym, e) {
         sym.getSymbol("glitch_media").play("g_media");
         sym.getSymbol("glitch_media2").play("g_media2");
         sym.getSymbol("megaglitch").play("g_bg");

      });
      //Edge binding end

   })("glitch_exe");
   //Edge symbol end:'glitch_exe'

   //=========================================================
   
   //Edge symbol: 'vid_int'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15000, function(sym, e) {
         sym.getComposition().getStage().stop("option");
         

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 115, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      

      

   })("vid_int");
   //Edge symbol end:'vid_int'

   //=========================================================
   
   //Edge symbol: 'glitch_touch_audio'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2915, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3398, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("glitch_touch_audio");
   //Edge symbol end:'glitch_touch_audio'

   //=========================================================
   
   //Edge symbol: 'regress_glitch'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19784, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 28401, function(sym, e) {
         // The Nightly Show - Neil deGrasse Tyson Slams Flat-Earth Theorist B.o.B
         window.open("https://youtu.be/XHBZkek8OSU?t=2m35s", "_blank");
         
         
         // Play an audio track 
         sym.getComposition().getStage().$("flatearth_slowed")[0].play();
         
         sym.getComposition().getStage().stop("option");
         sym.getComposition().getStage().getSymbol("glitch_in").play("glitchn");
         
         
         
         sym.getComposition().getStage().getSymbol("quotesMod").$("history_quotes_broker_mod")[0].play();
         
         

      });
      //Edge binding end

   })("regress");
   //Edge symbol end:'regress'

   //=========================================================
   
   //Edge symbol: 'opton_hold'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13920, function(sym, e) {
         sym.play("option_loop");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12858, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 15750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("option_hold");
   //Edge symbol end:'option_hold'

   //=========================================================
   
   //Edge symbol: 'sun'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7553, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4933, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("sun");
   //Edge symbol end:'sun'

   //=========================================================
   
   //Edge symbol: 'test'
   (function(symbolName) {   
   
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30033, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 77272, function(sym, e) {
         
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://anonhq.com/be-anonymous/", "_blank");
         
         sym.getComposition().getStage().getSymbol("wearelegion").play("legionPlay");
         
         sym.getComposition().getStage().getSymbol("codeblock").play("codebg");
         
         

      });
      //Edge binding end

   })("progress");
   //Edge symbol end:'progress'

   //=========================================================
   
   //Edge symbol: 'glitch_in'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("glitch_in");
   //Edge symbol end:'glitch_in'

   //=========================================================
   
   //Edge symbol: 'obama'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2870, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("obama");
   //Edge symbol end:'obama'

   //=========================================================
   
   //Edge symbol: 'glitch_media2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4471, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("glitch_media2");
   //Edge symbol end:'glitch_media2'

   //=========================================================
   
   //Edge symbol: 'glitch_open'
   (function(symbolName) {   
   
   })("glitch_open");
   //Edge symbol end:'glitch_open'

   //=========================================================
   
   //Edge symbol: 'g_bg'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4022, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("g_bg");
   //Edge symbol end:'g_bg'

   //=========================================================
   
   //Edge symbol: 'anon_intro'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("anon_intro");
   //Edge symbol end:'anon_intro'

   //=========================================================
   
   //Edge symbol: 'codeblock'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 88600, function(sym, e) {
         sym.play("codebg");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 90000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("codeblock");
   //Edge symbol end:'codeblock'

   //=========================================================
   
   //Edge symbol: 'prog_reg'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 14216, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("prog_reg");
   //Edge symbol end:'prog_reg'

   //=========================================================
   
   //Edge symbol: 'enter'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("enter");
   //Edge symbol end:'enter'

   //=========================================================
   
   //Edge symbol: 'regressplay'
   (function(symbolName) {   
   
   })("regressplay");
   //Edge symbol end:'regressplay'

   //=========================================================
   
   //Edge symbol: 'progressplay'
   (function(symbolName) {   
   
   })("progressplay");
   //Edge symbol end:'progressplay'

   //=========================================================
   
   //Edge symbol: 'entersym'
   (function(symbolName) {   
   
   })("entersym");
   //Edge symbol end:'entersym'

   //=========================================================
   
   //Edge symbol: 'meds'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 130481, function(sym, e) {
         sym.play("medsLoop");

      });
      //Edge binding end

   })("meds");
   //Edge symbol end:'meds'

   //=========================================================
   
   //Edge symbol: 'hov_anon'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13500, function(sym, e) {
         sym.play("hov");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("hov_anon");
   //Edge symbol end:'hov_anon'

   //=========================================================
   
   //Edge symbol: 'about_info'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 759, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12011, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 16500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 30759, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 42011, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 46500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 60759, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 72011, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 75000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 84477, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 96011, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 99000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("about_info");
   //Edge symbol end:'about_info'

   //=========================================================
   
   //Edge symbol: 'regHOVER'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 19000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 36000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11566, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("regHover");
   //Edge symbol end:'regHover'

   //=========================================================
   
   //Edge symbol: 'progHover'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 13000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 20434, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 37434, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("progHover");
   //Edge symbol end:'progHover'

   //=========================================================
   
   //Edge symbol: 'wearelegion'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 113145, function(sym, e) {
         // Play an audio track 
         sym.getComposition().getStage().$("flatearth_slowed")[0].play();
         
         sym.getComposition().getStage().stop("option");
         sym.getComposition().getStage().getSymbol("glitch_in").play("glitchn");
         
         
         
         sym.getComposition().getStage().getSymbol("quotesMod").$("history_quotes_broker_mod")[0].play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 104447, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("wearelegion");
   //Edge symbol end:'wearelegion'

   //=========================================================
   
   //Edge symbol: 'quotesMod'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 298722, function(sym, e) {
         sym.play("quotesPlay");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 179211, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 299000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("quotesMod");
   //Edge symbol end:'quotesMod'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "flat_earth_interactive");