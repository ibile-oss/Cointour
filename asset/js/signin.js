    var txtAll = querySelectorAll('.Ctr_random_txt_xxxxxx');
            var buttonLog = querySelector('.loginginstead');
            var buttonsign = querySelector('.signininstead');
                var txt = querySelector('.Ctr_Owl2_xxxxxx button span');
                    var loginTable = querySelector('.LogiNN_');
                        var signupTable = querySelector('.singINN_');
var ctrCnt = querySelector('.thegen');
        let passw = querySelector('.passw');
                    let password = querySelector('.password');
                        let cnpassword = querySelector('.cnpassord');
let passww = querySelector('.passww');
    let passw__af__ = querySelector('.passw__af__');


passww.onclick = () =>{
    if(passww.classList.contains('fa-eye')){
      passww.classList.remove('fa-eye');
      passww.classList.add('fa-eye-slash');
      passw__af__.type = 'text';
    }else{
      passww.classList.add('fa-eye');
      passww.classList.remove('fa-eye-slash');
      passw__af__.type = 'password';
    }
}

passw.onclick = () =>{
  if(passw.classList.contains('fa-eye')){
    passw.classList.remove('fa-eye');
    passw.classList.add('fa-eye-slash');
    password.type = 'text';
    cnpassword.type = 'text';
  }else{
    passw.classList.add('fa-eye');
    passw.classList.remove('fa-eye-slash');
    password.type = 'password';
    cnpassword.type = 'password';
  }
}
cnpassword.addEventListener('focus',function(){
    cnpassword.value = password.value;
})
function __root__(){
    return querySelector('.getMyRoot').getAttribute('url');
}
SignUp = (event) =>{
    event.preventDefault();
        let fn = querySelector('.fname');
            let ln = querySelector('.lname');
                let email = querySelector('.email');
                    let phone = querySelector('.phone');
                        let password = querySelector('.password');
                            let cnpassword = querySelector('.cnpassord');
                                let err = querySelector('.err');
    const ref = querySelector('.text').value;
                                    
    if(!fn.value){
        err.style.setProperty('display','flex');
        err.innerHTML = 'First Name Can\'t Be Empty';
        return
    }
    if(!ln.value){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Last Name Can\'t Be Empty';
        return
    }
    if(!email.value){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Email Can\'t Be Empty';
        return
    }
    if(!phone.value){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Phone Can\'t Be Empty';
        return
    }
    if(!password.value){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Password Can\'t Be Empty';
        return
    }
    if(!cnpassword.value){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Please Your Confirm Password';
        return
    }
    if(Number(fn.value)){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Name Can\'t Be a Number';
        return
    }
    if(Number(ln.value)){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Name Can\'t Be a Number';
        return
    }
    if(phone.value.search(/[^0-9]/) != -1){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Invalid Phone';
        return;
    }
    if(email.value.search(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        err.innerHTML = 'Invalid Email Address';
        return;
    }
    if(password.value !== cnpassword.value){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Incorrect Password';
        return;
    }
    if(password.value.length < 8){
        err.style.setProperty('display','flex');
        err.innerHTML = 'Password Lenght Too Short';
        return
    }else{
        err.innerHTML = '';
        err.style.setProperty('display','none');
    }

    Sing_Up(fn.value,ln.value,email.value,phone.value,password.value,cnpassword.value,ref);
}

Login = (event) =>{
    event.preventDefault();
        let email___e = querySelector('.email___e');
            let passw__af_ = querySelector('.passw__af__');
                let err = querySelector('.err___');

    
    if(!email___e.value){
        err.style.setProperty('display','flex');
        err.innerHTML = 'All Input Are Required';
        return;
    }
    if(email___e.value.search(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        err.innerHTML = 'Invalid Email Address';
        return;
    }
    if(!passw__af_.value){
        err.style.setProperty('display','flex');
        err.innerHTML = 'All Input Are Required';
        return;
    }

    Log_In(email___e.value, passw__af_.value);
}


buttonLog.onclick = () =>{
    signupTable.style.setProperty('display','none','important');
    loginTable.style.setProperty('display','flex');
}
buttonsign.onclick = () =>{
    signupTable.style.setProperty('display','flex');
    loginTable.style.setProperty('display','none');
}

// $(document).ready(function(){
//     $('.owl-carousel').owlCarousel({
//         items:1,
//         loop:true,
//         autoplayHoverPause:true,
//         autoplay:true,
//         dots:true,
//         lazyLoad:true,
//         autoplayTimeout: 4000
//     })
// })

