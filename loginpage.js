let passNode=document.getElementById("pass");
let emailNode=document.getElementById("email");
let border1="2px solid red";
let border2="2px solid green";
let tdNode1=document.getElementById("error1");
let tdNode2=document.getElementById("error2");




    function validate1(){
        tdNode1.textContent="";
        let emailId=emailNode.value;
        let ss=emailId.substring(emailId.indexOf('@')+1);
        console.log(ss);
        
        if(emailId==''){
            tdNode1.textContent="this field is required";
            emailNode.style.border=border1;
            return false;
        }
        else if(!emailId.includes('@') || ss==''){
            tdNode1.textContent="Please put valid email id";
            emailNode.style.border=border1;
            return false;
        }
        else{
            emailNode.style.border=border2;
            return true;
        }
    }
    

function validate2(){
    tdNode2.innerHTML="";
    let password=passNode.value;
    let regExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(regExp.test(password));
    if(password==''){
        tdNode2.textContent="this field is required";
        passNode.style.border=border1;
        return false;
    }
    else if(regExp.test(password)==false){
        let spanNode=document.createElement("span");
        spanNode.textContent="the password should contain atleast one";
        let ulnode=document.createElement("ul");
        let linode1=document.createElement("li");
        linode1.textContent="Capital letter";
        let linode2=document.createElement("li");
        linode2.textContent="Small Letter";
        let linode3=document.createElement("li");
        linode3.textContent="Digit";
        let linode4=document.createElement("li");
        linode4.textContent="Special Symbol";
        ulnode.append(linode1,linode2,linode3,linode4);
        tdNode2.append(spanNode,ulnode);
        passNode.style.border=border1;
        return false;
    }
    else if(password.length<5 || password.length>12){
        tdNode2.textContent="Password should be atleast 5 and atmost 12 characters long";
        passNode.style.border=border1;
        return false;
    }
    else{
        passNode.style.border=border2;
        return true;
    }
    
}

    
 

function validateForm(){
     let st1=validate1();
     let st2=validate2();
    return st1 && st2 ;
}