var buttonTime = 150; // Time of key animation

function pressed(obj)
{  
  obj.addClass('pressed');
  setTimeout(function(){obj.removeClass('pressed')}, buttonTime )
}

var elements = null;

(function($) {
  var buffer  = '';
  var capsLock  = false;
  var lang = 'ru';
  
  var settings  = {
  keyboardEnContainer       : "#keyboard-en",
  keyboardRuContainer       : "#keyboard-ru",
  keyboardSymbolsContainer  : "#keyboard-symbols",
  keyBackspace              : "#key-backspace",
  keySpaceSelector          : "#key-space",
  keySwitchKeyboardSymbols  : "#switch-keyboard-symbols",
  keySwitchKeyboardLetters  : "#switch-keyboard-letters",
  keyCapsLock               : "#key-capslock",
  keyClearAll               : "#key-clearall",
  changeLang                : "#changeLang",
  //------------------------
  displayContainer          : ".input .field,",  
  maxInputLength            : false,
  inputFilter               : false, // example - inputFilter :/[a-zA-Zа-яА-Я0-9()-]/
  keySelector               : "span"
  };
   
  var methods = {
    
  init: function(options) {
    container = this;
    settings = jQuery.extend(settings, options);

    /***************** Events *****************/
    $(this).find(settings.keySelector).bind("mousedown",function(){
      
      pressed($(this));
      
      if($(this).attr('id')) return false; 
      
	  if($(this).data('value') || $(this).data('value') == 0)
		  val = $(this).data('value');
	  else
		  val = $(this).html();
	  
      appendInputField(val);
      
      return false;
    });

     $(settings.keyBackspace).click(function(){  
       removeLastDigit();
       methods.display();
       return false;
    });
    
     $(settings.keyClearAll).click(function(){  
       clearAll();
       methods.display();
       return false;
    });


    $(this).find(settings.keySpaceSelector).click(function(){
      appendInputField("&nbsp;");
      methods.display();
      return false;
    });
 

    $(this).find(settings.keyCapsLock).click(function(){

      if(capsLock) 
      {
        $(container).find(settings.keySelector).each(function(){
          if($(this).attr('id')) return;  

          $(this).html($(this).html().toLowerCase());
        });  
        capsLock = false;
      }
      else
      {
        $(container).find(settings.keySelector).each(function(){
          if($(this).attr('id')) return;  

          $(this).html($(this).html().toUpperCase());
        });  
        capsLock = true;
      }

    });

    $(this).find(settings.changeLang).click(function(){
      if(lang == 'ru') {
        methods.displayEnKb();
        lang = 'en';
        $(settings.keyboardSymbolsContainer).find(settings.changeLang).html('Русские');
      }
      else {
        methods.displayRuKb(); 
        lang = 'ru';
        $(settings.keyboardSymbolsContainer).find(settings.changeLang).html('Английские');
      }
    });    

    $(this).find(settings.keySwitchKeyboardSymbols).click(function(){
      methods.displaySymbKb(); 
    });
    
    $(this).find(settings.keySwitchKeyboardLetters).click(function(){
      if(lang == 'ru')  
        methods.displayRuKb(); 
      else      
        methods.displayEnKb();
    });

    /***************** Functions *****************/

    var appendInputField = function(letter)
    {  
      if(settings.maxInputLength && methods.filterInput(buffer).length >= settings.maxInputLength) return false;
      
      if(settings.inputFilter && letter.search(settings.inputFilter) < 0) return false;

      buffer = methods.filterInput(buffer + letter);
      methods.display();
    }
    
    var removeLastDigit = function()
    {
      buffer = buffer.substring(0, buffer.length -1); 
    }
    
    var clearAll = function()
    {  
      buffer = '';   
    }
    
    return this;
   },
   
  filterInput : function(input) {
    while(input.search(/&amp;/) >= 0 ) input = input.replace("&amp;", '&'); 
    while(input.search(/&gt;/)  >= 0 ) input = input.replace("&gt;", '>');
    while(input.search(/&lt;/)  >= 0 ) input = input.replace("&lt;", '<');
    while(input.search(/&nbsp;/)  >= 0 ) input = input.replace("&nbsp;", ' '); 
    return input;
  },  

  filterOutput : function(output) {
    while(output.search(' ')  >= 0 ) output = output.replace(' ', "&nbsp;");
    return output;
  },  
   
   display : function(){
    $(settings.displayContainer).html(this.filterOutput(buffer)+"<span>&nbsp;</span>");
   },           
  
  changeLang : function() {
    if(lang == 'ru')   
      methods.displayEnKb();
    else
      methods.displayRuKb();
  },
  
  displayRuKb: function(){
    $(settings.keyboardSymbolsContainer).css('display', 'none');
    $(settings.keyboardEnContainer).css('display', 'none');
    $(settings.keyboardRuContainer).css('display', 'block');
  },
  displayEnKb: function(){
    $(settings.keyboardRuContainer).css('display', 'none');
    $(settings.keyboardSymbolsContainer).css('display', 'none');
    $(settings.keyboardEnContainer).css('display', 'block');
  },
  displaySymbKb: function(){
    $(settings.keyboardEnContainer).css('display', 'none');
    $(settings.keyboardRuContainer).css('display', 'none');
    $(settings.keyboardSymbolsContainer).css('display', 'block'); 
  }
 };

  $.fn.keyboard = function( method ) {  
    // Method calling logic
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
    }
  };
})(jQuery);


