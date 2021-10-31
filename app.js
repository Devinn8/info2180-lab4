/*window.onload = function(){
  let  searchBtn = document.querySelector('#search');
  let input = document.querySelector('#searchBar');

  searchBtn.addEventListener('click', function(element){
    element.preventDefault();

    fetch("superheroes.php?query="+input.value)
      .then(response => {
        if (response.ok){
          return response.text()
        } else{
          return Promise.reject('Something went wrong!')
        }
      })
      .then(data => {
        //alert(data);
        console.log(data);
        console.log(data[0]);
        var res = data.split("<li>");
        var test = data.split("</li>");
        console.log(test);
        console.log(res[0]);
        console.log(res[1]);
        console.log(res[2]);

        var result = document.getElementById('searchBar').value;
        console.log(result);
      })
      .catch(error => console.log('There was an error:' + error));
  });
};*/

 window.onload = function(){
  var searchBtn = document.querySelector(".btn");
  var httpRequest;
  var printer = document.getElementById('result');

  searchBtn.addEventListener('click', function(element){
    element.preventDefault();

    var input = document.querySelector("#searchBar");
    var val = document.querySelector("#searchBar").value;
    var nope = document.getElementById('searchBar').value;
    var neg= document.getElementsByTagName('h5');

    httpRequest= new XMLHttpRequest();

    var url = "superheroes.php?searchBar=" + nope;
    //var url = "superheroes.php="+input.value;
    //var thin = fetch(url);
    //var som= thin.text();
    //console.log(url);
    httpRequest.onreadystatechange = findIt;
    httpRequest.open('GET', url);
    httpRequest.send();
    console.log(val);
    console.log(input);
    console.log(nope);
  });


  function findIt(){
    if(httpRequest.readyState === XMLHttpRequest.DONE){
      if(httpRequest.status === 200){
        var response = httpRequest.responseText;
        //var val= JSON.parse(httpRequest.responseText);
        console.log(response);
        //alert(response); //Used to for Exercise 2
        result.innerHTML=response;
      } else{
        alert('There was a problem with the request');
      }
    }
  }

};
