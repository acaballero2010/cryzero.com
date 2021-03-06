      <!-- Login / Register Modal Start -->
        <div class="login-page">
          <div class="container">

            <!-- Nav tabs -->
            <ul class="nav nav-tabs nav-justified">
              <li class="active"><a href="#login" data-toggle="tab"><i class="icon-signin"></i> Login</a></li>
              <li><a href="#register" data-toggle="tab"><i class="icon-pencil"></i> Register</a></li>
              <li><a href="#contact" data-toggle="tab"><i class="icon-envelope"></i> Contact</a></li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
              <div class="tab-pane fade active in" id="login">
              
              <div class="alert alert-warning">Just <strong>Click "Submit"</strong> to visit the Dashboard</div>
              
              <!-- Login form -->
              
              <form role="form" action="index.html">
                <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email">
                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="checkbox">
                <label>
                  <input type="checkbox"> Remember Me Next Time
                </label>
                </div>
                <button type="submit" class="btn btn-danger btn-sm">Submit</button>
                <button type="reset" class="btn btn-black btn-sm">Reset</button>
              </form>
              
              </div>
              
              
              <div class="tab-pane fade" id="register">
              <!-- Register form -->
              
              <form role="form" action="index.html">
                <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" class="form-control" id="name" placeholder="Full Name">
                </div>
                <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email">
                </div>
                <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
                </div>
                <div class="form-group">
                <label for="cpassword">Confirm Password</label>
                <input type="cpassword" class="form-control" id="cpassword" placeholder="Confirm Password">
                </div>
                <div class="checkbox">
                <label>
                  <input type="checkbox"> Agree <a href="#">Terms & Conditions</a>
                </label>
                </div>
                <button type="submit" class="btn btn-danger btn-sm">Submit</button>
                <button type="reset" class="btn btn-black btn-sm">Reset</button>
              </form>
              
              </div>
              
              
              <div class="tab-pane fade" id="contact">
              
              <!-- Contact Form -->
              
              <form role="form" action="index.html">
                <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" placeholder="Email">
                </div>
                <div class="form-group">
                <label for="message">Message</label>
                <textarea rows="3" class="form-control"></textarea>
                </div>
                <button type="submit" class="btn btn-danger btn-sm">Submit</button>
                <button type="reset" class="btn btn-black btn-sm">Reset</button>
              </form>
              
              </div>
            </div>
            
          </div>
        </div>
        <!-- Login / Register Modal Start -->