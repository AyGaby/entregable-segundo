
function signUp() {
  console.log("Welcome!");
}

function login() {
  
    const valueConfirm = confirm("Are you trying to sign in?");
  
    let messageResult = "";
  
    if (valueConfirm) {
      messageResult = "true";
    } else {
      messageResult = "false";
    }
  
    console.log("El resultado fue: " + messageResult);
  }

function sendDatos() 
{
    let fname=document.getElementById("firstName").value;
    let lname=document.getElementById("lastName").value;
    let email=document.getElementById("Email").value;
    let compName=document.getElementById("companyName").value;
    let phNumber=document.getElementById("phoneNumber").value;
    let msG=document.getElementById("message").value;
    if (fname=="")
    { console.log("You must enter your name")}
    else if (lname=="")
    {console.log("You must enter your last name")}
    else if (email=="")
    {console.log("Debe You must enter your E-mail")}
    else if (compName=="")
    {console.log("You must enter your company name")}
    else if (phNumber=="")
    {console.log("You must enter your phone number")}
    else if (msG=="")
    {console.log("You must write a message")}
    else console.log("FIRST NAME: "+fname+", "+"LAST NAME: "+lname+", "+"E-MAIL:"+""+email+", "+"COMPANY NAME:"+compName+", "+"MESSAGE:"+""+msG);

    console.log("The data was sent");
}