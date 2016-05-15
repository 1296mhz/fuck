#!/bin/bash
http POST http://localhost:3000/resource id="a" title="Бокс1 Развал-схождение" eventColor="red"
http POST http://localhost:3000/resourceChildren id=a1 repairPostId="1" title="Пост №1"

http POST http://localhost:3000/resource id="b" title="Бокс2 Шиномонтаж" eventColor="green"
http POST http://localhost:3000/resourceChildren id=b1 repairPostId="2" title="Пост №2"

http POST http://localhost:3000/resource id="c" title="Бокс3 Диагностика ДВС" eventColor="yellow"
http POST http://localhost:3000/resourceChildren id=c3 repairPostId="3" title="Пост №3"
http POST http://localhost:3000/resourceChildren id=c4 repairPostId="4" title="Пост №4"
http POST http://localhost:3000/resourceChildren id=c5 repairPostId="5" title="Пост №5"

http POST http://localhost:3000/resource id="d" title="Бокс4 Электрик, Автомойка" eventColor="orange"
http POST http://localhost:3000/resourceChildren id=d6 repairPostId="6" title="Пост №6"

http POST http://localhost:3000/resource id="e" title="Бокс5 Ходовка" eventColor="blue"
http POST http://localhost:3000/resourceChildren id=e7 repairPostId="7" title="Пост №7"
http POST http://localhost:3000/resourceChildren id=e8 repairPostId="8" title="Пост №8"


