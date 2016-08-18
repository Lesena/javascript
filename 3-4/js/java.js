function createTag (tagName, tagAttributes, tagText) {
  var element = document.createElement (tagName);
  if (tagAttributes) {
    for (key in tagAttributes) {
      element.setAttribute (key, tagAttributes [key]);
    }
  }
  if (tagText) {
    var text = document.createTextNode (tagText)
    element.appendChild (text);
  }
  return element;
}

var parent = document.getElementsByTagName ('body')[0],
      div = createTag ('div', {'class' : 'container'}),
      h1 = createTag ('h1', '', 'Тест по программированию'),
      form = createTag ('form', {'action' : 'index.html', 'method' : 'post', 'role' : 'form'}),
      submit = createTag ('button', {'type' : 'submit', 'class' : 'btn btn-info'}, 'Проверить мои результаты');
	  
	  
	  var legend = [], 
      label = [], 
      input = [],
      span = [];

for (var i = 1; i <= 3; i++) {
  legend[i] = createTag ('legend', '', [i] + '. Вопрос №' + [i]);
  form.appendChild (legend[i]);

  for (var k = 1; k <= 3; k++) {
    label[k] = createTag ('label');
    input[k] = createTag ('input', {'type' : 'checkbox' });
    span[k] = createTag ('span', '', 'Вариант ответа №' + [k]);

    form.appendChild (label[k]);
    label[k].appendChild (input[k]);
    label[k].appendChild (span[k]);
  }
}
document.body.appendChild (div);
div.appendChild (h1);
div.appendChild (form);
form.appendChild (submit);