'use strict';

/*
Имеется две разделенные наглухо комнаты. 
В первой комнате стоят 3 пронумерованных выключателя, 
провода от этих выключателей ведут в соседнюю комнату, в которой стоят три пронумерованные лампы накаливания. 
Как узнать в какой выключатель к какой лампе относится, если в каждую комнату можно зайти один раз?
PS без вырывания проводов и тд :)
*/

let breakers = +prompt( 'Какую лампу хотите влючить по номеру? ', '' );

if ( breakers === 1 ) {
    alert( `Выключатель относится к лампе № ${breakers}` );
} else if ( breakers === 2 ) {
    alert( `Выключатель относится к лампе № ${breakers}` );
} else if ( breakers === 3 ) {
    alert( `Выключатель относится к лампе № ${breakers}` );
}