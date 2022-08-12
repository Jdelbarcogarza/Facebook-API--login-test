import '../styles/globals.css'
import React, { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    window.fbAsyncInit = function() {
      FB.init({
        appId            : process.env.APP_ID, // esto se va a poner en un .env
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v14.0'
      });
    };
  (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, []);

  return <Component {...pageProps} />
}

export default MyApp
