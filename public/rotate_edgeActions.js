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
      
      
      Symbol.bindElementAction(compId, symbolName, "${rotate}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         sym.getSymbol("curve2").play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${rotate}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         sym.getSymbol("curve2").playReverse();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'curve'
   (function(symbolName) {   
   
   })("curve");
   //Edge symbol end:'curve'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-1560739");