//
// index.js 2017-05-22 17:39
//

function copyright() {
  document.addEventListener("DOMContentLoaded",function(eve){
    today = new Date();
    year = today.getFullYear();
    footer = document.getElementById('copy');
    footer.insertAdjacentHTML("afterbegin", "&copy; 2009 - " + year + " sustny");
  },false);
}
