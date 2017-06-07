//
// index.js 2017-05-22 17:39
//

function copyright() {
  document.addEventListener("DOMContentLoaded",function(eve){
    today = new Date();
    year = today.getFullYear();
    /*
    document.write('&copy; 2009 - ');
    document.write( year );
    document.write(' sustny');
    */
    //document.body.innerHTML += "&copy; 2009 - " + year + " sustny";
    //document.body.insertAdjacentHTML("afterend", "<footer>&copy; 2009 - " + year + " sustny</footer>");
    var footer = document.getElementById('copy');
    footer.insertAdjacentHTML("afterbegin", "&copy; 2009 - " + year + " sustny");
  },false);
}
