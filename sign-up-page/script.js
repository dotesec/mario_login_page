
function click()
{
	document.getElementById("name").value="";
	document.getElementById("email").value="";
	document.getElementById("surname").value="";
	document.getElementById("pass").value="";
	document.getElementById("repass").value="";
    document.getElementById("mario").src='img/mario.png';

}


function registration()
{

    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var uname= document.getElementById("surname").value;
    var pwd= document.getElementById("pass").value;			
    var cpwd= document.getElementById("repass").value;
    
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name=='')
    {
        document.getElementById("mario").src='img/mario.png';

    }
    else if(!letters.test(name))
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else if(email=='')
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else if (!filter.test(email))
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else if(uname=='')
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else if(!letters.test(uname))
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else if(pwd=='')
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else if(cpwd=='')
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else if(!pwd_expression.test(pwd))
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else if(pwd != cpwd)
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else if(document.getElementById("pass").value.length < 8)
    {
        document.getElementById("mario").src='img/mario.png';
    }
    else
    {	
        document.getElementById("mario").src='img/tick.png';
    }
}

function registration2()
{

    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var uname= document.getElementById("surname").value;
    var pwd= document.getElementById("pass").value;			
    var cpwd= document.getElementById("repass").value;
    
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(name=='')
    {
        document.getElementById("p1").innerHTML = "Please enter your name";
        document.getElementById("mario").src='img/mario.png';

    }
    else if(!letters.test(name))
    {
        document.getElementById("p1").innerHTML = "Name field required only alphabet characters";
        document.getElementById("mario").src='img/mario.png';
    }
    else if(email=='')
    {
        document.getElementById("p1").innerHTML = "Please enter your email id";
        document.getElementById("mario").src='img/mario.png';
    }
    else if (!filter.test(email))
    {
        document.getElementById("p1").innerHTML = "Invalid email";
        document.getElementById("mario").src='img/mario.png';
    }
    else if(uname=='')
    {
        document.getElementById("p1").innerHTML = "Please enter the user name";
        document.getElementById("mario").src='img/mario.png';
    }
    else if(!letters.test(uname))
    {
        document.getElementById("p1").innerHTML = "User name field required only alphabet characters";
        document.getElementById("mario").src='img/mario.png';
    }
    else if(pwd=='')
    {
        document.getElementById("p1").innerHTML = "Please enter password";
        document.getElementById("mario").src='img/mario.png';
    }
    else if(cpwd=='')
    {
        document.getElementById("p1").innerHTML = "Enter confirim password";
        document.getElementById("mario").src='img/mario.png';
    }
    else if(!pwd_expression.test(pwd))
    {
        document.getElementById("p1").innerHTML = "Upper case, Lower case, Special character and Numeric letter are required in Password filed";
        document.getElementById("mario").src='img/mario.png';
    }
    else if(pwd != cpwd)
    {
        document.getElementById("p1").innerHTML = "Password not Matched";
        document.getElementById("mario").src='img/mario.png';
    }
    else if(document.getElementById("pass").value.length < 8)
    {
        document.getElementById("p1").innerHTML = "Password minimum length is 8";
        document.getElementById("mario").src='img/mario.png';
    }
    else
    {	
        document.getElementById("p1").innerHTML = "";
        document.getElementById("mario").src='img/tick.png';
        click();

    }
}

