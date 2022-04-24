let longLink = document.querySelector('#longLink');
let btn  = document.querySelector('#btn');
let output  = document.querySelector(".output");


btn.addEventListener('click',function(){
  let url = longLink.value;
  fetch(' https://api.shrtco.de/v2/shorten?url='+url)
  .then(response => response.json())
  .then(data =>{
   
    output.style.display = 'block'
    document.getElementById("shortLink").value = (data['result']['full_short_link']);
  })
})

document.getElementById('copy').addEventListener("click", function(){
  shortLink.select();
  document.execCommand('copy');
  alert('Link Copied');
});
