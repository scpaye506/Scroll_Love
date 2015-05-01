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
      
      
      Symbol.bindElementAction(compId, symbolName, "${Button}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.getSymbol("swipe2").play();
         
         sym.getSymbol("arrow2").play();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1064, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${watch}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         sym.getSymbol("arrow2").stop();
         
         sym.getSymbol("swipe2").stop();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Button'
   (function(symbolName) {   
   
   })("Button");
   //Edge symbol end:'Button'

   //=========================================================
   
   //Edge symbol: 'swipe'
   (function(symbolName) {   
   
   })("swipe");
   //Edge symbol end:'swipe'

   //=========================================================
   
   //Edge symbol: 'arrow'
   (function(symbolName) {   
   
   })("arrow");
   //Edge symbol end:'arrow'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-513383731");