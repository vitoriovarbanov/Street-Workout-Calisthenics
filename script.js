function showForm() {
    let x = document.getElementById("formShow");
    if (x.style.display === 'flex'){
        x.style.display = 'none';
    }else{
        x.style.display = "flex";
    }       

}
function showRegister() {
    let y = document.getElementById("registerShowHide");
    y.style.display = "flex";
    let parentEl = document.getElementById('main-content-all');
    parentEl.style.justifyContent = 'flex-end';

}

function checkMatchPw() {
    let password1 = $("#currPw").val();
    let confirmPass = $("#confirmPW").val();

    if (password1 !== confirmPass) {
        $("#divCheckPasswordMatch").hmtl("Passwords don't match!");
    } else {
        $("#divCheckPasswordMatch").hmtl("Passwords match");
    }
}