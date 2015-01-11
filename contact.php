<?php 

if($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = $_POST["name"];
	$email = $_POST["email"];
	$subject = $_POST["subject"];
	$text = $_POST["text"];
	$email_body = "";
	$email_body = $email_body . "Name: " . $name . "\n";
	$email_body = $email_body . "Email: " . $email . "\n";
	$email_body = $email_body . "Subject: " . $subject . "\n";
	$email_body = $email_body . "Message: " . $text;

	// TO DO: Send Email
	header("Location: contact.php?status=thanks");
	exit;
}
?>

<?php 
$values = array();
$values['pageTitle'] = "Contact Me | Cryzero.com";
$values['pageDesc'] = "Let's Keep Touch! Affordable Modern Responsive Web Design Manila Philippines | HTML Email Marketing and Newsletters | Banner Design";
?>

<!DOCTYPE html>
<html>
<head>
	<!-- Title here -->
	<title><?php echo $values['pageTitle']; ?></title>
	<!-- Description, Keywords and Author -->
	<meta name="google-site-verification" content="z3Rdo4Qc2l4FDE4RW6fTPUUsbQcwsrv_4o4NUtmHz_Q" />
	<meta name="description" content="<?php echo $values['pageDesc'] ?>">
	<meta name="keywords" content="Affordable web design in manila philippines, modern responsive web development in makati philippines, html email marketing campaigns in manila philippines, banner design, web landing pages, front-end development">
	<meta name="author" content="Cryzero.com">
  
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- Google web fonts -->
	<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700,800' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
	
	<!-- Styles -->
	<!-- Bootstrap CSS -->
	<link href="css/bootstrap.min.css" rel="stylesheet">
	<!-- Slider Revolution CSS -->
	<link href="css/settings.css" rel="stylesheet">
	<!--[if IE 8]>
	<link rel="stylesheet" href="css/settings-ie8.css">
	<![endif]-->
	<!-- Animate CSS -->
	<link href="css/animate.min.css" rel="stylesheet">
	<!-- jQuery prettyPhoto -->
	<link href="css/prettyPhoto.css" rel="stylesheet">
	<!-- Font awesome CSS -->
	<link href="css/font-awesome.min.css" rel="stylesheet">
	<!-- Nivo slide CSS -->	
	<link href="css/nivo-slider.css" rel="stylesheet">		
	<!-- Custom CSS -->
	<link href="css/my.css" rel="stylesheet">
	<!-- Responsive CSS -->
  	<link rel="stylesheet" href="css/responsive.css">
	<!--[if IE]>
		<link rel="stylesheet" type="text/css" href="css/style-ie.css" />
	<![endif]-->
        
	<!-- Favicon -->
	<link rel="shortcut icon" href="#">
	<!-- Google Maps -->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyClagz2kQyW1V2w5BUm4Rwcdg4vR06rVs0&sensor=false"></script>
	<script>
      function initialize() {
		  var myLatlng = new google.maps.LatLng(14.406616, 121.045993);
		  var mapOptions = {
		    zoom: 15,
		    center: myLatlng
		  };

		  var map = new google.maps.Map(document.getElementById('my-map'), mapOptions);

		  var contentString = '<div id="content">'+
		      '<div id="siteNotice">'+
		      '</div>'+
		      '<p id="firstHeading" class="firstHeading">Bayanan, Muntinlupa City</p>';

		  var infowindow = new google.maps.InfoWindow({
		      content: contentString
		  });

		  var marker = new google.maps.Marker({
		      position: myLatlng,
		      map: map,
		      title: 'Bayanan, Muntinlupa City'
		  });
		  google.maps.event.addListener(marker, 'click', function() {
		    infowindow.open(map,marker);
		  });
		}

		google.maps.event.addDomListener(window, 'load', initialize);
    </script>
    
	<!-- Google Analytics JS -->
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-48567068-1', 'cryzero.com');
	  ga('send', 'pageview');

	</script>

</head>
	
<body id="contact">
	<div class="wrap">
		<?php include "inc/header.php" ?>
		
		<?php include "inc/contact-me.php" ?>

		
		<?php include "inc/footer.php" ?>
	</div>
</body>
<?php include "inc/html-close.php" ?>