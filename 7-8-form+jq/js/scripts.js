// функция для создания подсказок для элементов
// element - имя элемента, например input
function init_tooltip(element){
    // перебираем все элементы на странице, для которых нужна подсказка
     $(element).each(function(num){
        // проверяем у элемента наличие атрибута title и смотрим пустой он или нет
        if( $(this).attr('title') != "" && typeof($(this).attr('title')) != "undefined"){
            // если есть title, то
            // создаем скрытый блок - подсказку с текстом
            $("body").append("<div class='class_tooltip tooltip_" + element + num + "'>" + $(this).attr('title') + "</div>");
            // элемент, сама подсказка, только что созданная
            var one_tooltip = $(".tooltip_" + element + num);
            // навешиваем действия на события 
            // при наведении курсора
            $(this).mouseover(function(){
                // показываем подсказку
                one_tooltip.fadeIn(100);
            });
            // при отведении курсора
            $(this).mouseout(function(){
                // скрываем подсказку
                one_tooltip.fadeOut(100);                  
            });
            // при нахождении курсора на элементе
            $(this).mousemove(function(curs_position){
                // смещаем подсказку за курсором
                one_tooltip.css({
                    // делаем отступ по 10 пикселей сверху и слева от курсора
                    left: curs_position.pageX + 10, 
                    top: curs_position.pageY + 10
                });
            });
        }
    });
}
 
$(document).ready(function(){
    // создаем подсказки для всех input`ов
     init_tooltip("input");
});

$(function () {
   
    var inputsList = $('fieldset input');

    var tooltip;

    $(inputsList).hover(
        function () {

            // we call remove in case some tooltip was added by other function
            $('.tooltip').remove();
        
            tooltip = $(this).attr('title');

            // remove tittle attribute
            $(this).removeAttr('title');

            // now let's show tooltip on the right from the input
            $('<a class=' + 'tooltip'+ '>' + tooltip + '</a>').insertAfter(this);
        
        },
        function () {
            // restore tittle attribute
            $(this).attr('title', tooltip);

            // remove tooltip
            $('.tooltip').remove();
    });

    $('.help-button').on('click', function () {
        console.log('clicked');
        // remove all tooltips in case they were created already
        $('.tooltip').remove();
        // make a loop
        // in the loop we add tooltip
        inputsList.each(function () {
            tooltip = $(this).attr('title');
            $('<a class=' + 'tooltip' + '>' + tooltip + '</a>').insertAfter(this);
        });
    });
});