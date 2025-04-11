	
function setCookieFunc( cookie_name, cookie_value , exdays) {
    var mydate ,expires ;
    mydate = new Date();
    mydate.setTime(mydate.getTime() + (exdays*24*60*60*1000));
    expires = "expires="+ mydate.toUTCString();
    document.cookie = cookie_name + "=" + cookie_value + ";" + expires + ";path=/";
  
  }
  
  
  
      
  function getCookieFunc(cookie_name) {
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
      

  const deleteCookieFunc = (cookie_name) =>{
    document.cookie = `${cookie_name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }



  function checkCookieFunc(cookie_name) {
    Content_cookie = getCookieFunc(cookie_name);
    return Content_cookie ? Content_cookie : null
  }


  export {setCookieFunc , getCookieFunc , deleteCookieFunc , checkCookieFunc}