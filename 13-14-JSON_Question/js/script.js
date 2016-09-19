

'use strict';

$(function() {
$("modal").append($("<div id = \"questblock\"></div>"));

var score = 0;

var queue = new Array ;
var curQ = 0;
var score = 0 ;

  var preQuestions = [//Массив объектов содержит вопросы сколько угодно

    {
      question: 'Question 1',//q: "Вопрос"
      answers: ['Answer 1', 'Answer 2', 'Answer 3'],//a: [1,3,"q"] // массив ответов
      correctAnswer: 1 //Индекс в массиве a, правильного ответа
    },

    {
      question: 'Question 2',
      answers: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 2
    },

    {
      question: 'Question 3',
      answers: ['Answer 1', 'Answer 2', 'Answer 3'],
      correctAnswer: 3
    }
  ];

  localStorage.setItem('preQuestions', JSON.stringify(preQuestions));

  var strQuestions = localStorage.getItem('preQuestions');

  var questions = JSON.parse(strQuestions);

  var test = $('#test').html();
  var testContent = tmpl(test, {
    data: questions
  });
  
  $('.questions__block').append(testContent);




  // Modal block starts here

  var $modal;
  var $overlay;

  function showModal(){

    $modal = $('<div class="modal"><p class="results"></p></div>');
    $overlay = $('<div class="overlay"></div>');
    
    $overlay.on('click', hideModal);

    $('body').append($overlay)
    $('body').append($modal)
    // render('#modal-result', msgObj, '.questions__block');
    //$('.errorOK').click(hideModal);
    
  };

  function hideModal(){
    $modal.remove();
    $overlay.remove();
  };

  $('.test__button').on('click', showModal);
  
  //после нажатия кнопки начинаем наше тестирование
 

score = 0;

  $('.test__button').on('click', begin);

  function begin(){
   var score = 0;
       curQ = 0;
       queue = new Array;
    var tmp  = new Array;
     for(var i = 0; i <  preQuestions.length;i++)
        tmp.push(i)
    while(tmp.length > 0){
        var r = randNum(0, tmp.length);  
      queue.push(tmp[r]);
      tmp.splice(r,1); 
    }
     showQ();
	 }
  
  var score = 0;
       curQ = 0;
       queue = new Array;
  $('.test__button').on('click', function(){

    var $result = true;
	
    var indx = preQuestions.map(function(el, i) {
	score++;
	curQ++; 
        return el.correctAnswer - 1 + i * 3
		
    });
    $("input").each(function(i) {
        if (~indx.indexOf(i) && !this.checked || !~indx.indexOf(i) && this.checked) $result = false
    });
    if ($result) 
	
	$(".results").html("Everything is correct Результат: "+score +" правильных из "+preQuestions.length);
	
    else {
        $(".results").html("Wrong answer");
        $("input").prop("checked", false)
    }
  });

  
  //функция обраблтки результатов
  function showQ(){
    var str = "<span id=\"quest\">"+preQuestions[queue[curQ]].q+"</span><div class = \"answers\" >";
    
   var $result = true;
    var indx = preQuestions.map(function(el, i) {
        return el.correctAnswer - 1 + i * 3
		
    });
    $("input").each(function(i) {
        if (~indx.indexOf(i) && !this.checked || !~indx.indexOf(i) && this.checked) $result = false
    });
	if ($result){
	 score++;
     curQ++;
	 $(".results").html("<span>Результат: "+score+" правильных из "+preQuestions.length+"</span><br><button id=\"run\">Заново</button>");
	// $(".results").html("Everything is correct");
	} 
	   
		if(curQ >= preQuestions.length){
              $(".questions__block").html("");
            $(".results").append($("<span>Результат: "+score+" правильных из "+preQuestions.length+"</span><br><button id=\"run\">Заново</button>"));
            $("#run").bind("click",begin);
        }
	
	$(".results").html("<span>Результат: "+score+" правильных из "+preQuestions.length+"</span><br><button id=\"run\">Заново</button>");
    $(".results").append($(str));
    
    
    $("#next").bind("click",function(){
        if($(".answer :checked").val() == preQuestions[queue[curQ-1]].correctAnswer)
               score++;
        if(curQ >= preQuestions.length){
              $(".questions__block").html("");
            $(".questions__block").append($("<span>Результат: "+score+" правильных из "+preQuestions.length+"</span><br><button id=\"run\">Заново</button>"));
            $("#run").bind("click",begin);
        }
            else
                showQ();
    });
}
function randNum(min,max){
      return parseInt(Math.random()*(max - min) + min);
} 

});