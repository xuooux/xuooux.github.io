document.onkeydown=function (e){let currKey=0,evt=e||window.event;currKey=evt.keyCode||evt.which||evt.charCode;if (currKey == 123) {window.event.cancelBubble = true;window.event.returnValue = false;}}