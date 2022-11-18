function forget()
{
    var email= document.getElementById("email").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(email=='')
    {
        document.getElementById("p1").style.color = "red";
        document.getElementById("p1").innerHTML = "Please enter your email";
    }
    else if (!filter.test(email))
    {
        document.getElementById("p1").style.color = "red";
        document.getElementById("p1").innerHTML = "Invalid email";
    }
    else{
        document.getElementById("p1").style.color = "green";
        document.getElementById("p1").innerHTML = "your verification code has been sent";
    }
}



