<h1>jQuery keyboard plugin</h1>
This simple plugin makes static keyboard alive! It provides prepared functionality and works with english, russian and symbol keyboards. You a free to add any other language and only you should to do is provide switching among them using already existing mechanism for en-ru
Also you can specify your custom display function, for example for outputting a phone number in special format


<h1>Usage</h1>
$(document).ready(function(){			
  options = {                               
    maxInputLength : 128,            
    displayContainer : '.input .field',
    keySelector : 'span'
  };
  $(".keyboard").keyboard(options);
});	

<h1>Options</h1>
<hr>

<ul>
	<li><strong>buttonTime</strong> - time of key animation. In attached css file I use soft transition</li>
	<li><strong>keyboardEnContainer</strong>, <strong>keyboardRuContainer</strong>, <strong>keyboardSymbolsContainer</strong> - keyboard containers with keyboard structure</li>
	<li><strong>inputFilter</strong> - ability to provide a white list of letters/digits/symbols. By default allow all - /[a-zA-Zа-яА-Я0-9()-]/</li>
	<li><strong>displayContainer</strong> - container for output</li>
	<li><strong>maxInputLength</strong> - you can set maximum characters count in the buffer and output container</li>
</ul>

For control keys you should use individual selectors:
<ul>
	<li><strong>keyBackspace</strong> - clear on symbol from the end</li>
	<li><strong>keyClearAll</strong> - clear buffer and all symbols in output container</li>
	<li><strong>keySpaceSelector</strong> - selector for spacebar</li>
	<li><strong>keySwitchKeyboardSymbols</strong> - switch from letters keyboard to symbols</li>
	<li><strong>keySwitchKeyboardLetters</strong> - switch from symbols keyboard to letters </li>
	<li><strong>keyCapsLock</strong> - turn on/off CapsLock</li>
	<li><strong>changeLang</strong> - now change language between Russian and English</li>
	<li><strong>keySelector</strong> - this specifies a container, used to wrap a keyboard key( except control keys)</li>
</ul>

<h1>Additionals</h1>
Here is a working example with Russian, English and symbols keyboard with all preset settings, html markup and css styles, so you just need to download and open html file in your favorite browser!