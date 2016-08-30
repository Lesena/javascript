// ������� ��� �������� ��������� ��� ���������
// element - ��� ��������, �������� input
function init_tooltip(element){
    // ���������� ��� �������� �� ��������, ��� ������� ����� ���������
     $(element).each(function(num){
        // ��������� � �������� ������� �������� title � ������� ������ �� ��� ���
        if( $(this).attr('title') != "" && typeof($(this).attr('title')) != "undefined"){
            // ���� ���� title, ��
            // ������� ������� ���� - ��������� � �������
            $("body").append("<div class='class_tooltip tooltip_" + element + num + "'>" + $(this).attr('title') + "</div>");
            // �������, ���� ���������, ������ ��� ���������
            var one_tooltip = $(".tooltip_" + element + num);
            // ���������� �������� �� ������� 
            // ��� ��������� �������
            $(this).mouseover(function(){
                // ���������� ���������
                one_tooltip.fadeIn(100);
            });
            // ��� ��������� �������
            $(this).mouseout(function(){
                // �������� ���������
                one_tooltip.fadeOut(100);                  
            });
            // ��� ���������� ������� �� ��������
            $(this).mousemove(function(curs_position){
                // ������� ��������� �� ��������
                one_tooltip.css({
                    // ������ ������ �� 10 �������� ������ � ����� �� �������
                    left: curs_position.pageX + 10, 
                    top: curs_position.pageY + 10
                });
            });
        }
    });
}
 
$(document).ready(function(){
    // ������� ��������� ��� ���� input`��
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