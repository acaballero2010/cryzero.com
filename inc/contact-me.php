<div class="headline">
	<h1>Let's Keep In Touch</h1>
	<h3>I am happy to hear from you, feel free to send me a message</h3>
</div>

<!-- Contact Me Start-->
<div class="container">
   <div class="contact-me">
      <div class="row">
         <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12" id="contact-form">

            <!-- Confirmation Message -->
            <?php  if(isset($_GET["status"]) AND $_GET["status"] == "thanks") { ?>
               <h5>Thanks for the message, I will keep in touch shortly.</h5>
            <?php } else { ?> 
               <h3 class="title">Send Me an Email</h3>
               <div class="divider"></div>
               <form method="post" action="contact.php" class="reply" id="contact">
                  <fieldset>
                     <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                           <label>Name: <span>*</span></label>
                           <input class="form-control" id="name" name="name" type="text" value="" required>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                           <label>Email: <span>*</span></label>
                           <input class="form-control" type="email" id="email" name="email" value="" required>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                           <label>Subject: <span>*</span></label>
                           <input class="form-control" id="subject" name="subject" type="text" value="" required>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                           <label>Message: <span>*</span></label>
                           <textarea class="form-control" id="text" name="text" rows="3" cols="40" required></textarea>
                        </div>
                     </div>
                  </fieldset>
                  <button class="btn-normal btn-color submit  bottom-pad" type="submit">Send</button>
                  <div class="success alert-success alert" style="display:none">Your message has been sent successfully.</div>
                  <div class="error alert-error alert" style="display:none">E-mail must be valid and message must be longer than 100 characters.</div>
                  <div class="clearfix">
                  </div>
               </form>
            <?php } ?>
         </div>
         <div class="col-lg-4 col-md-4 col-xs-12 col-sm-6">
            <?php include 'side-widget-address.php' ?>
            <?php include 'side-widget-business-hours.php' ?>
         </div>
      </div>

      <div class="row">
         <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h5 class="title">My Location</h5>
            <div id="my-map">
            </div>
         </div>
      </div>
   </div>
</div>
<!-- Contact Me End-->
