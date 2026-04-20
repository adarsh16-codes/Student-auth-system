//Register

let registerForm=document.getElementById("registerForm");

if(registerForm){
    registerForm.addEventListener("submit", function(e){
        e.preventDefault();

        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let password=document.getElementById("password").value;
        let confirmPassword=document.getElementById("confirmPassword").value;
        let msg=document.getElementById("msg").value;

        if(name==="" || email=== "" || password=== ""){
            msg.textContent="All Fields are required!";
            return;
        }
        
        if(password!=confirmPassword){
            msg.textContent="Passwords do not match!";
            return;
        }
        let user={
            name=name,
            email:email,
            password:password
        };

        localStorage.setItem(email,JSON.stringify(user));

        msg.textContent="Registration Successful...!";
    });

}

//Login

let loginForm = document.getElementById("loginForm");

if(loginForm){
    registerForm.addEventListener("submit",function(e){
        e.preventDefault();

        let email=document.getElementById("loginEmail").value;
        let password=document.getElementById("loginPassword").value;
        let msg=document.getElementById("logining");
        let storedUser=localStorage.getItem("email");

        if(storedUser){

            msg.textContent="User not Found";
            return;
        }

        let user=JSON.parse(storedUser);

        if(user.password===password){
            localStorage.setItem("loggedInUser",email);
            window.location.href="dashboard.html";
        }
        else{
            msg.textContent="Incorrect Password...!"
        }
    });
}