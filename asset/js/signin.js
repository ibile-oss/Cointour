    var txtAll = querySelectorAll('.Ctr_random_txt_xxxxxx');
        var picCnt = querySelector('.rt_part');
            var button = querySelector('.Ctr_Owl2_xxxxxx button');
                var txt = querySelector('.Ctr_Owl2_xxxxxx button span');
                    var loginTable = querySelector('.login_');
                        var signupTable = querySelector('.signup_');
var ctrCnt = querySelector('.Ctr_cnt_xxxxxxxxr');
    var buttonGo = querySelectorAll('.Ctr_inpt_wrap button');
        let passw = querySelector('.passw');
                    let password = querySelector('.password');
                        let cnpassword = querySelector('.cnpassord');




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
                                    
    // if(!fn.value){
    //     err.style.setProperty('display','flex');
    //     err.innerHTML = 'First name can\'t be empty';
    //     return
    // }
    // if(!ln.value){
    //     err.style.setProperty('display','flex');
    //     err.innerHTML = 'Last name can\'t be empty';
    //     return
    // }
    // if(!email.value){
    //     err.style.setProperty('display','flex');
    //     err.innerHTML = 'Email name can\'t be empty';
    //     return
    // }
    // if(!phone.value){
    //     err.style.setProperty('display','flex');
    //     err.innerHTML = 'Phone name can\'t be empty';
    //     return
    // }
    // if(!password.value){
    //     err.style.setProperty('display','flex');
    //     err.innerHTML = 'Password name can\'t be empty';
    //     return
    // }
    // if(!cnpassword.value){
    //     err.style.setProperty('display','flex');
    //     err.innerHTML = 'Please your confirm password';
    //     return
    // }
    // if(Number(fn.value)){
    //     err.style.setProperty('display','flex');
    //     err.innerHTML = 'Name can\'t be a number';
    //     return
    // }
    // if(Number(ln.value)){
    //     err.style.setProperty('display','flex');
    //     err.innerHTML = 'Name can\'t be a number';
    //     return
    // }
    // if(phone.value.search(/[^0-9]/) != -1){
    //     err.innerHTML = 'Invalid phone';
    //     return;
    // }
    // if(email.value.search(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    //     err.innerHTML = 'Invalid email address';
    //     return;
    // }
    // if(password.value !== cnpassword.value){
    //     err.innerHTML = 'Incorrect password';
    //     return;
    // }
    // if(password.value.length < 8){
    //     err.innerHTML = 'Password lenght too short';
    //     return
    // }else{
    //     err.innerHTML = '';
    //     err.style.setProperty('display','none');
    // }

    Sing_Up(fn.value,ln.value,email.value,phone.value,password.value,cnpassword.value);
}

// for (let x = 0; x < buttonGo.length; x++) {
//     buttonGo[x].onclick = () =>{

//         if(buttonGo[x].innerHTML == 'Sign in'){
//             buttonGo[x].innerHTML = 'Signing in..';
//         }else{
//             buttonGo[x].innerHTML = 'Logging in..';
//         }
//         var loadingIcon = createElement('i');
//         loadingIcon.className = 'fas fa-spinner fa-spin';
//         buttonGo[x].append(loadingIcon);
//     }
// }

var parentPosiW = ctrCnt.clientWidth;
var parentPosiH = ctrCnt.clientHeight;
setInterval(() =>{
    let bcolor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
    var buble = createElement('span');
    buble.className = 'bubbles';
    var bbuble = querySelectorAll('.bubbles');
    ctrCnt.append(buble);

    for (let x = 0; x < bbuble.length; x++) {
        var bubleW = bbuble[x].clientWidth;
        var bubleH = bbuble[x].clientHeight;

        var cx = parentPosiW - bubleW;
        var ch = parentPosiH - bubleH;

        var randomW = Math.floor(Math.random() * cx);
        var randomH = Math.floor(Math.random() * ch);

        bbuble[x].style.setProperty('left', randomW + 'px');
        bbuble[x].style.setProperty('top', randomH + 'px');
        bbuble[x].style.setProperty('position', 'absolute');
        bbuble[x].style.background = bcolor;

        setTimeout(() =>{
            bbuble[x].style.setProperty('opacity','0');
            bbuble[x].remove();
        },4000)
    }
},1000)
    

button.onclick = () =>{
   if(txt.innerHTML == 'Log in now'){
    txt.innerHTML = 'Sign in now';
    signupTable.style.setProperty('display','none');
    loginTable.style.setProperty('display','flex');
   }else{
    txt.innerHTML = 'Log in now';
    signupTable.style.setProperty('display','flex');
    loginTable.style.setProperty('display','none');
   }
}

for (let x = 0; x < txtAll.length; x++) {
    setInterval(() =>{
        let bcolor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
        txtAll[x].style.color = bcolor;
    },4000)
}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplayHoverPause:true,
        autoplay:true,
        dots:true,
        lazyLoad:true,
        autoplayTimeout: 4000
    })
})

