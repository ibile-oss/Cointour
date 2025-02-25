var txtAll = querySelectorAll('.Ctr_random_txt_xxxxxx');
var picCnt = querySelector('.rt_part');
var button = querySelector('.Ctr_Owl2_xxxxxx button');
var txt = querySelector('.Ctr_Owl2_xxxxxx button span');
var loginTable = querySelector('.login_');
var signupTable = querySelector('.signup_');
var ctrCnt = querySelector('.Ctr_cnt_xxxxxxxxr');
var buttonGo = querySelectorAll('.Ctr_inpt_wrap button');


for (let x = 0; x < buttonGo.length; x++) {
    buttonGo[x].onclick = () =>{

        if(buttonGo[x].innerHTML == 'Sign in'){
            buttonGo[x].innerHTML = 'Signing in..';
        }else{
            buttonGo[x].innerHTML = 'Logging in..';
        }
        var loadingIcon = createElement('i');
        loadingIcon.className = 'fas fa-spinner fa-spin';
        buttonGo[x].append(loadingIcon);
    }
}

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


// var img = createElement('img');
// $(document).ready(function(){
//    setInterval(() =>{
//     var picCiss = ['pic2','pic3','pic5','pic6'];
//     var root = 'asset/img/';
//     var extension = '.png';
//     var random = Math.floor(Math.random() * picCiss.length);
//     img.setAttribute('src',root + picCiss[random] + extension);
//     picCnt.append(img);
//    },5000)
// })

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

