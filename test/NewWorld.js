/**
 * Created by cshlovjah on 14.05.16.
 */
var handlers = {
    'user': {},
    'book': {},
    'message': {},
    '_error': [] // допустим, ошибки не зависят от namespace
};
console.log(handlers);
events = [ 'update', 'create', 'delete', 'list' ];

for (var ei = events.length; ei--;) {
    for (var ns in handlers) { // мой объект чист, поэтому не нужно `hasOwnProperty`
        handlers[ns][events[ei]] = [];
    }
};

console.log(handlers);