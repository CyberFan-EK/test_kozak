// літери в різному регістрі мають різні коди
alert( "z".codePointAt(0) ); // 122
alert( "Z".codePointAt(0) ); // 90
alert( "z".codePointAt(0) ); // 122
alert("z".codePointAt(0).toString(16)); // 7a (if we need a hexadecimal value)





