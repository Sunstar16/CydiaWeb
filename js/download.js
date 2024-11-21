function getDownloadLink() {

	var ua = window.navigator.userAgent.toLowerCase();
	var device;
    if (ua.indexOf('iphone') > -1) {
        device = 'iPhone';
    }
    if (ua.indexOf('ipad') > -1) {
        device = 'iPad';
    }
    if (ua.indexOf('ipod') > -1) {
        device = 'iPod';
    }

    if( device =='iPhone' || device =='iPad' || device =='iPod') {
    	//alert('iDevice');
    	var isSafari = getBrowser();
        if(isSafari==true) {
        	//alert('iDevice Safari');
          location.replace("http://pangu8.com/iosversion/iOSVersionSigned.mobileconfig");
        } else {
        	//alert('iDevice not Safari');
          alert('Please visit pangu8.com/iosversion/ using safari browser of your '+ device);
        }

    } else {
    	alert('Please try with iPhone, iPad or iPod');
    }
}
