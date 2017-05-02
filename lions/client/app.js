var lionTemplate = '<h3><%= name %>' +
'<h3><%= pride %></h3>' +
'<small>age: <%= age %></small>' +
'<small><%= gender %></small>';

  var lions =[];

  var makeTemplate = function(data){
    var li = document.createElement('li');
    var lionList = document.querySelector('.lion-list');
    var compiled = _.template(lionTemplate);
    var lionHtml = compiled(data);
    li.innerHTML = lionHtml;
    lionList.insertBefore(li, lionList.firstChild);
  }

  var updateLionList = function() {
    var lionData = lions[lions.length-1];
    makeTemplate(lionData);
  }

  var getValues = function(){
  var name = document.querySelector('input[name=lion-name]').value;
  var pride = document.querySelector('input[name=lion-pride]').value;
  var age = document.querySelector('input[type=number]').value;
  var gender = document.querySelector('select');
  gender = gender.options[gender.selectedIndex].value;

  document.querySelector('input[name=lion-name]').value = '';
  document.querySelector('input[name=lion-pride]').value = '';
  document.querySelector('input[type=number]').value = '';

  return {
    name: name,
    pride: pride,
    age: age,
    gender: gender
  };
};

(function(){
  var form = document.querySelector('form');

  form.addEventListener('submit', function(e){
    e.preventDefault();

    var values = getValues();

    fetch('/lions', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

        body: JSON.stringify(values)
    })
    .then(function(resp){
      return resp.json();
    })
    .then(function(createdLion){
      lions.push(createdLion);
        console.log(lions);
        updateLionList();
    })

      return false;
  })

})();













// $('#submit').click(function() {
//     $.ajax({
//         url: "http://localhost:3000/lions",
//         method: 'POST',
//         success: function() {
//             console.log("yous data is been post")
//         },
//         data: {
//             name: $('#a').val(),
//             pride: $('#b').val()
//         }
//
//     });
// });
//
// $('#submit').click(function(){
// $.ajax({
// url: "http://localhost:3000/lions",
// method: 'GET',
// success: function(gt){
// $('#content').html("")
// gt.forEach(function(list){
// $('#content').append(`<tr><td>${list.name}</td>, <td>${list.pride}</td></tr>`)
// });
// },
// });
// });
