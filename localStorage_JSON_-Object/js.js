localStorage.clear();

( function() {
    // объект, который будет хранить данные, пока окно браузера не перезагрузят
    // берем данные из хранилища в виде json и парсим их
    var _objectLocalStorage = JSON.parse( localStorage.getItem( 'objectStorage' ) ) || {};
    // определяем объект с именем objectLocalStorage в window и добавляем ему геттер и сеттер
    // во избежание недоразумений, мы не трогаем localStorage, он каким был, тактим остаётся
    Object.defineProperty( window, 'objectLocalStorage', {
        get: function() {
            // для сохранения объекта после присваивания
            var stringified = JSON.stringify( _objectLocalStorage );
            // некое подобие оптимизации: если данные в объекте не изменились,
            // значит присваивания никакого не было, сработал обычный гет
            if( stringified !== localStorage.getItem( 'objectStorage' ) ) {
                // сохраняем 
                localStorage.setItem( 'objectStorage', stringified );
            }
            return _objectLocalStorage;
        },
        // на случай, если objectLocalStorage присвоили целый объект
        set: function( v ) {
            _objectLocalStorage = v;
            localStorage.setItem( 'objectStorage', JSON.stringify( _objectLocalStorage ) );
        }
    } );
})();

console.log(JSON.stringify(objectLocalStorage), localStorage.objectStorage);
objectLocalStorage = { a: 4, c: {} };
console.log(JSON.stringify(objectLocalStorage) === localStorage.objectStorage);

// внимание 
objectLocalStorage.a = 111;
console.log(localStorage.objectStorage);
console.log(JSON.stringify(objectLocalStorage));
