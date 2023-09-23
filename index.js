
// ************** SignUp*****************
let signUp = document.getElementById("signup-container")
let fullName = document.getElementById("fullName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirm-password")
let suBtn = document.getElementById("sign-up")
let errorMsg = document.getElementById("error-message")
let successMsg = document.getElementById("success-message")

let userName , userEmail , userPassword ;



// event listeners

fullName.addEventListener("change",(e)=>{
    userName = e.target.value;
})
email.addEventListener("change",(e)=>{
    userEmail = e.target.value;
})
confirmPassword.addEventListener("change",(e)=>{
    userPassword = e.target.value;
})

suBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    let allFieldsAreFilled = userName && userEmail && userPassword && password.value;
    localStorage.setItem("access" , JSON.stringify({
        userName ,
        userEmail ,
        userPassword ,
    }))
    let requiredData = JSON.parse(localStorage.getItem("access"))
    let userFilledData = { userName , userEmail , userPassword};
    let isDataSame = Object.entries(requiredData).every(item => item[1] === userFilledData[item[0]]);
    console.log("required", requiredData );
    console.log("userfilled" ,  userFilledData );
    console.log("is"  , isDataSame);
    if(allFieldsAreFilled && requiredData){
        successMsg.style.display = "block";
        errorMsg.style.display = "none";

        setTimeout(()=>{
            signUp.style.display = "none";
            profile.style.display ="block";

            profile.innerHTML = `
            <h1>Profile </h1>
            <h2>Full Name : ${requiredData.userName}</h2>
            <h2>Email : ${requiredData.userEmail}</h2>
            <h2>Password : ${requiredData.userPassword}</h2>
            <div>
                <button id="log-out" class="btn">Logout</button>
            </div>
                
            `
            let loBtn = document.getElementById("log-out")
            loBtn.addEventListener("click",()=>{
                profile.style.display = "none";
                signUp.style.display = "flex";
            })
        } , 1000)
    }
    else{
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
    }
})



// ************** Profile*****************

let profile = document.getElementById("profile-container")

// event listeners




//************** nav buttons********************* */

let signUpNav = document.getElementById("signUpnav");
let profileNav = document.getElementById("profileNav");

console.log(signUpNav);
//event listeners

signUpNav.addEventListener("click", ()=>{
    signUp.style.display = "flex"
    profile.style.display = "none";
    fullName.value = email.value = password.value = ""
})