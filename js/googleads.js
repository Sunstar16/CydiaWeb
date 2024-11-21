function updateAdvert(){
	 var myStr = navigator.appVersion;
	 var i = myStr.indexOf("OS");
	 var j = myStr.indexOf("like");
	 var versionStr = myStr.substring(i+3,j)
	 var version = versionStr.split("_").join(".")
	 
	 var contentStr;
	 var OSUserAddress = "";

	 try{
	 
		 if(myStr.indexOf("iPhone")>-1) {
                        OSUserAddress = "Dear iOS user, ";
			contentStr = "<h1> Your iPhone is running on <br \/>  iOS <strong>" + version + "<\/strong><\/h1>";
			 // var version=navigator.appVersion;
    //         if( version == 10.2 )
    //         {
    //            window.location="10.2.html";
    //         }
    //         else if ( ( version == 10.2.1 ))
    //         {
    //            window.location="10.2.1.html";
    //         }
    //          else if ( ( version == 10.3 ))
    //         {
    //            window.location="10.3.html";
    //         }
    //         else
    //         {
    //           alert('Please visit zJailbreak Page');
    //         }
		 }
		 else if(myStr.indexOf("iPad")>-1) {
		 	OSUserAddress = "Dear iOS user, ";
			contentStr = "<h1> Your iPad is running on iOS " + versionStr.split("_").join(".") + "<\/h1>";

		 }
		 else if(myStr.indexOf("iPod")>-1) {
		 	OSUserAddress = "Dear iOS user, ";
			contentStr = "<h1> Your iPod is running on iOS " + versionStr.split("_").join(".") + "<\/h1>";
				 }
		 else {
		 	var OSName="Unknown OS";
			if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
			if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
			if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
			if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

			OSUserAddress = "Dear " + OSName + " user, ";
			contentStr = "<h1>Try with a iPhone, iPad or iPod<\/h1>";  
		 }
		 
		 console.log(contentStr);
		 console.log(document.getElementById("mydiv"));

		 // document.getElementById("osuser"). innerHTML = OSUserAddress;
		 document.getElementById("mydiv"). innerHTML = version;
	 } catch(ex)
	 {
	 	alert(ex);
	 }
}
