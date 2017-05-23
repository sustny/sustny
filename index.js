//
// index.js 2017-05-22 17:39
//

function copyright() {
  myD       = new Date();
  myYear    = myD.getYear()
  myYear4   = (myYear < 2000) ? myYear+1900 : myYear;
  document.write('&copy; 2009 - ');
  document.write( myYear4 );
  document.write(' sustny');
}
