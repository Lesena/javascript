$(function () {
//$(document).ready(function(){
  //  $('.tabs_menu a').click(function(e) {
    //    e.preventDefault();
      //  $('.tabs_menu .active').removeClass('active');
        //$(this).addClass('active');
        //var tab = $(this).attr('href');
        //$('.tab').not(tab).css({'display':'none'});
        //$(tab).fadeIn(400);
    //});
//});
$(document).ready(function() {
        $("#content div").hide(); // ������� ����������
        $("#tabs li:first").attr("id","current"); // ����� ��� �������� ������
        $("#content div:first").fadeIn(); // ����� ������� �������� ����
 
    $('#tabs a').click(function(e) {
        e.preventDefault();
        $("#content div").hide(); //������ �� ����������
        $("#tabs li").attr("id",""); //����� ���������������
        $(this).parent().attr("id","current"); // ��������� ���������������
        $('#' + $(this).attr('title')).fadeIn(); // �������� ���������� ������� �������
    });
})();
});