<h1>jQuery keyboard plugin</h1>
This simple plugin makes static keyboard alive! It provides prepared functionality and works with english, russian and symbol keyboards. You a free to add any other language and only you should to do is provide switching among them using already existing mechanism for en-ru
Also you can specify your custom display function, for example for outputting a phone number in special format


<h1>Usage</h1>
<pre><code>$(document).ready(function(){			
  options = {                               
    maxInputLength : 128,            
    displayContainer : '.input .field',
    keySelector : 'span'
  };
  $(".keyboard").keyboard(options);
});	
</code></pre>

<h1>Options</h1>
<ul>
	<li><em>buttonTime</em> - time of key animation. In attached css file I use soft transition</li>
	<li><em>keyboardEnContainer</em>, <em>keyboardRuContainer</em>, <em>keyboardSymbolsContainer</em> - keyboard containers with keyboard structure</li>
	<li><em>inputFilter</em> - ability to provide a white list of letters/digits/symbols. By default allow all - /[a-zA-Zа-яА-Я0-9()-]/</li>
	<li><em>displayContainer</em> - container for output</li>
	<li><em>maxInputLength</em> - you can set maximum characters count in the buffer and output container</li>
</ul>

<h4>For control keys you should use individual selectors:</h4>
<ul>
	<li><em>keyBackspace</em> - clear on symbol from the end</li>
	<li><em>keyClearAll</em> - clear buffer and all symbols in output container</li>
	<li><em>keySpaceSelector</em> - selector for spacebar</li>
	<li><em>keySwitchKeyboardSymbols</em> - switch from letters keyboard to symbols</li>
	<li><em>keySwitchKeyboardLetters</em> - switch from symbols keyboard to letters </li>
	<li><em>keyCapsLock</em> - turn on/off CapsLock</li>
	<li><em>changeLang</em> - now change language between Russian and English</li>
	<li><em>keySelector</em> - this specifies a container, used to wrap a keyboard key( except control keys)</li>
</ul>

<h1>Additionals</h1>
Here is a working example with Russian, English and symbols keyboard with all preset settings, html markup and css styles, so you just need to download and open html file in your favorite browser!
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/linko/jquery.keyboard?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)