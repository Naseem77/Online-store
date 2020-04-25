var emailArray=[];
var userNameArray=[];
var phoneArray=[];
var passwordArray=[];
var questionArray=[];
var imgArray=[];
var loginBox = document.getElementById("login");
var regBox = document.getElementById("register");
var forgetBox = document.getElementById("forgot");
var loginTab = document.getElementById("lt");
var regTab = document.getElementById("rt");

function regTabFun(){
            event.preventDefault();
            document.getElementById("login").style.visibility="hidden";
            document.getElementById("register").style.visibility="visible";
            document.getElementById("forgot").style.visibility="hidden";
            regTab.style.backgroundColor="rgb(12, 132, 189)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function loginTabFun(){
            event.preventDefault();
            document.getElementById("login").style.visibility="visible";
            document.getElementById("register").style.visibility="hidden";
            document.getElementById("forgot").style.visibility="hidden";
            loginTab.style.backgroundColor="rgb(12, 132, 189)";
            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}
function forTabFun(){
            event.preventDefault();
            document.getElementById("login").style.visibility="hidden";
            document.getElementById("register").style.visibility="hidden";
            document.getElementById("forgot").style.visibility="visible";
            regTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
            loginTab.style.backgroundColor="rgba(11, 177, 224, 0.82)";
}	

function openImage(){
    event.preventDefault();
    document.getElementById("img").style.visibility="visible";
}	

function closeImage(){
    event.preventDefault();
    document.getElementById("img").style.visibility="hidden";
}	

function register(){
            event.preventDefault();
            var email = document.getElementById("re").value;
            var userName = document.getElementById("ru").value;
            var phone = document.getElementById("rph").value;
            var password = document.getElementById("rp").value;
            var passwordRetype = document.getElementById("rrp").value;
            var question = document.getElementById("question").value
            var img = document.getElementById("img").value
            

            if (email == ""){
                alert("Email required.");
                return ;
            }
            else if (userName == ""){
                alert("Username required.");
                return ;
            }
            else if (phone == ""){
                alert("Phone required.");
                return ;
            }
            else if (password == ""){
                alert("Password required.");
                return ;
            }
            else if (passwordRetype == ""){
                alert("Password required.");
                return ;
            }
            else if ( password != passwordRetype ){
                alert("Password don't match retype your Password.");
                return;
            }
           
            else if(emailArray.indexOf(email) == -1){
                emailArray.push(email);
                userNameArray.push(userName);
                phoneArray.push(phone);
                passwordArray.push(password);
                questionArray.push(question);
                imgArray.push(img);

                alert(email + "  Thanks for registration. \nTry to login Now");

                document.getElementById("re").value ="";
                document.getElementById("ru").value ="";
                document.getElementById("rph").value ="";
                document.getElementById("rp").value="";
                document.getElementById("rrp").value="";
                document.getElementById("question").value="";
                document.getElementById("img").value="";
            }
            else{
                alert(email + " is already registered email");
                return ;
            }
}

function login(){
            event.preventDefault();

            var email = document.getElementById("se").value;
            var password = document.getElementById("sp").value;

            var i = emailArray.indexOf(email);

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }
            else if(passwordArray[i] != password){
                if (password == ""){
                    alert("Password required.");
                    return ;
                }
                alert("Password does not match.");
                return ;
            }
            else {
                alert(email + " You are logged in now \n welcome to our website.");

                document.getElementById("se").value ="";
                document.getElementById("sp").value="";
                document.getElementById("container").style.visibility="hidden";
                document.getElementById("login").style.visibility="hidden";
                document.getElementById("register").style.visibility="hidden";
                return ;
            }

}
function forgot(){
            event.preventDefault();

            var email = document.getElementById("fe").value;

            if(emailArray.indexOf(email) == -1){
                if (email == ""){
                    alert("Email required.");
                    return ;
                }
                alert("Email does not exist.");
                return ;
            }

            alert("email is send to your email check it in 24hr. \n Thanks");
            document.getElementById("fe").value ="";
        }
		function contact() {
			alert("For Any Questions SCE123@gmail.com");
		}
		
		function faq() {
			
}