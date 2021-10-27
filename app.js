/*window.addEventListener('load', function(){
<textarea id ="searchBar" name="searchBar" row='5' cols='50' placeholder='e.g.Captain America or Steve Rogers'></textarea>
  let  searchBtn = document.querySelector('#search');

  searchBtn.addEventListener('click', function(element){
    element.preventDefault();

    fetch("superheroes.php")
      .then(response => {
        if (response.ok){
          return response.text()
        } else{
          return Promise.reject('Something went wrong!')
        }
      })
      .then(data => {
        alert(data);
      })
      .catch(error => console.log('There was an error:' + error));
  });
});*/

window.onload = function(){
  var searchBtn = document.querySelector("#search");
  var httpRequest;

  searchBtn.addEventListener('click', function(element){
    element.preventDefault();

    httpRequest= new XMLHttpRequest();

    var url = "superheroes.php";
    httpRequest.onreadystatechange = findIt;
    httpRequest.open('GET', url);
    httpRequest.send();
  });

  function findIt(){
    if(httpRequest.readyState === XMLHttpRequest.DONE){
      if(httpRequest.status === 200){
        var response = httpRequest.responseText;
        alert(response);
      } else{
        alert('There was a problem with the request');
      }
    }
  }

};
