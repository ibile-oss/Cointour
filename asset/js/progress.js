
//  FIRST SELECTION START HERE;
var items = querySelectorAll('.follow_');
var por1 = querySelectorAll('.progres_each')[0];
var por2 = querySelectorAll('.progres_each')[1];
var por3 = querySelectorAll('.progres_each')[2];
var por4 = querySelectorAll('.progres_each')[3];
var por5 = querySelectorAll('.progres_each')[4];
var gen1 = querySelectorAll('.progres_each');
por1.setAttribute('itm','youtube');
por2.setAttribute('itm','tiktok');
por3.setAttribute('itm','instagram');
por4.setAttribute('itm','twitter');
por5.setAttribute('itm','facebook');
//  FIRST SELECTION END HERE;
var item2 = querySelectorAll('.engage_');
var pro_en1 = querySelectorAll('.pro_engage')[0];
var pro_en2 = querySelectorAll('.pro_engage')[1];
var pro_en3 = querySelectorAll('.pro_engage')[2];
var pro_en4 = querySelectorAll('.pro_engage')[3];
var pro_en5 = querySelectorAll('.pro_engage')[4];
pro_en1.setAttribute('itm','youtube');
pro_en2.setAttribute('itm','tiktok');
pro_en3.setAttribute('itm','instagram');
pro_en4.setAttribute('itm','twitter');
pro_en5.setAttribute('itm','facebook');
//  SECOND SELECTION END HERE;
var item3 = querySelectorAll('.contri');
var pro_contri1 = querySelectorAll('.por_contri')[0];
var pro_contri2 = querySelectorAll('.por_contri')[1];
var pro_contri3 = querySelectorAll('.por_contri')[2];
var pro_contri4 = querySelectorAll('.por_contri')[3];
var pro_contri5 = querySelectorAll('.por_contri')[4];
pro_contri1.setAttribute('itm','youtube');
pro_contri2.setAttribute('itm','tiktok');
pro_contri3.setAttribute('itm','instagram');
pro_contri4.setAttribute('itm','twitter');
pro_contri5.setAttribute('itm','facebook');
//  THIRED SELECTION END HERE;
var item4 = querySelectorAll('.shar_ees');
var pro_share1 = querySelectorAll('._proshare')[0];
var pro_share2 = querySelectorAll('._proshare')[1];
var pro_share3 = querySelectorAll('._proshare')[2];
var pro_share4 = querySelectorAll('._proshare')[3];
var pro_share5 = querySelectorAll('._proshare')[4];
pro_share1.setAttribute('itm','youtube');
pro_share2.setAttribute('itm','tiktok');
pro_share3.setAttribute('itm','instagram');
pro_share4.setAttribute('itm','twitter');
pro_share5.setAttribute('itm','facebook');
//  FORTH SELECTION END HERE;
var item5 = querySelectorAll('.ref_eral_');
var pro_ref1 = querySelectorAll('.por_ref')[0];
var pro_ref2 = querySelectorAll('.por_ref')[1];
var pro_ref3 = querySelectorAll('.por_ref')[2];
var pro_ref4 = querySelectorAll('.por_ref')[3];
var pro_ref5 = querySelectorAll('.por_ref')[4];
pro_ref1.setAttribute('itm','youtube');
pro_ref2.setAttribute('itm','tiktok');
pro_ref3.setAttribute('itm','instagram');
pro_ref4.setAttribute('itm','twitter');
pro_ref5.setAttribute('itm','facebook');
//  FITH SELECTION END HERE;
var item6 = querySelectorAll('.comment_man');
var pro_comnt1 = querySelectorAll('.com_pro')[0];
var pro_comnt2 = querySelectorAll('.com_pro')[1];
var pro_comnt3 = querySelectorAll('.com_pro')[2];
var pro_comnt4 = querySelectorAll('.com_pro')[3];
var pro_comnt5 = querySelectorAll('.com_pro')[4];
pro_comnt1.setAttribute('itm','youtube');
pro_comnt2.setAttribute('itm','tiktok');
pro_comnt3.setAttribute('itm','instagram');
pro_comnt4.setAttribute('itm','twitter');
pro_comnt5.setAttribute('itm','facebook');


document.addEventListener('DOMContentLoaded',function(event){
    let circle = document.querySelector('.circle_7');
    var degree = 0;
    var targetDegree = parseInt(circle.getAttribute('data-degree'));
    var color = circle.getAttribute('data-color');
    var number = document.querySelector('.number_7');

    var tarval = setInterval(function(){
        degree += 1;
        if(degree > targetDegree){
            clearInterval(tarval)
            return;
        }
        circle.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
        number.innerHTML = degree + '<span>%</span>';
        number.style.color = color;
    },50)
})
document.addEventListener('DOMContentLoaded',function(event){
    let circle = document.querySelector('.circle_3');
    var degree = 0;
    var targetDegree = parseInt(circle.getAttribute('data-degree'));
    var color = circle.getAttribute('data-color');
    var number = document.querySelector('.number_3');

    var tarval = setInterval(function(){
        degree += 1;
        if(degree > targetDegree){
            clearInterval(tarval)
            return;
        }
        circle.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
        number.innerHTML = degree + '<span>%</span>';
        number.style.color = color;
    },50)
})
document.addEventListener('DOMContentLoaded',function(event){
    let circle = document.querySelector('.circle_5');
    var degree = 0;
    var targetDegree = parseInt(circle.getAttribute('data-degree'));
    var color = circle.getAttribute('data-color');
    var number = document.querySelector('.number_5');

    var tarval = setInterval(function(){
        degree += 1;
        if(degree > targetDegree){
            clearInterval(tarval)
            return;
        }
        circle.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
        number.innerHTML = degree + '<span>%</span>';
        number.style.color = color;
    },50)
})
document.addEventListener('DOMContentLoaded',function(event){
    let circle = document.querySelector('.circle_6');
    var degree = 0;
    var targetDegree = parseInt(circle.getAttribute('data-degree'));
    var color = circle.getAttribute('data-color');
    var number = document.querySelector('.number_6');

    var tarval = setInterval(function(){
        degree += 1;
        if(degree > targetDegree){
            clearInterval(tarval)
            return;
        }
        circle.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
        number.innerHTML = degree + '<span>%</span>';
        number.style.color = color;
    },50)
})
document.addEventListener('DOMContentLoaded',function(event){
        let circle = document.querySelector('.circle_2');
        var degree = 0;
        var targetDegree = parseInt(circle.getAttribute('data-degree'));
        var color = circle.getAttribute('data-color');
        var number = document.querySelector('.number_2');

        var tarval = setInterval(function(){
            degree += 1;
            if(degree > targetDegree){
                clearInterval(tarval)
                return;
            }
            circle.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
            number.innerHTML = degree + '<span>%</span>';
            number.style.color = color;
        },50)
})

var itemsArray = [
    'youtube',
    'tiktok',
    'instagram',
    'twitter',
    'facebook'
]


var progres_ = 0;
var progres_1 = 0;
var progres_2 = 0;
var progres_3 = 0;
var progres_4 = 0;
let circle_ = document.querySelector('.circle_');
var degree = 0;
var color_ = circle_.getAttribute('data-color');
var number = document.querySelector('.number_');
var targetDegree = parseInt(circle_.getAttribute('data-degree'));
for (let x = 0; x < items.length; x++){
   items[x].setAttribute('itm',itemsArray[x]);
    items[x].onclick = () =>{
        if(items[x].getAttribute('itm') == por1.getAttribute('itm')){
            if(progres_ == 100){
                return;
            }
            progres_+=1;
            por1.style.width = progres_ + '%';
        }
        if(items[x].getAttribute('itm') == por2.getAttribute('itm')){
            if(progres_1 == 100){
                return
            }
            progres_1+=1;
            por2.style.width = progres_1 + '%';
        }
        if(items[x].getAttribute('itm') == por3.getAttribute('itm')){
            if(progres_2 == 100){
                return
            }
            progres_2+=1;
            por3.style.width = progres_2 + '%';
        }
        if(items[x].getAttribute('itm') == por4.getAttribute('itm')){
            if(progres_3 == 100){
                return
            }
            progres_3+=1;
            por4.style.width = progres_3 + '%';
        }
        if(items[x].getAttribute('itm') == por5.getAttribute('itm')){
            if(progres_4 == 100){
                return
            }
            progres_4+=1;
            por5.style.width = progres_4 + '%';
        }
        if(por1.style.width == '100%'  
            && por2.style.width == '100%' 
            && por3.style.width == '100%'
             && por4.style.width == '100%' 
             && por5.style.width == '100%'){
            targetDegree = 100;
        }
        var tarval = setInterval(function(){
            degree += 1;
            if(degree > targetDegree){
                clearInterval(tarval)
                return;
            }
            circle_.style.background = `conic-gradient(${color_} ${degree}%, #222 0%)`;
            number.innerHTML = degree + '<span>%</span>';
            number.style.color = color_;
        },50)
    }

}
// SECOND TASK
var pro_1 = 0;
var pro_2 = 0;
var pro_3 = 0;
var pro_4 = 0;
var pro_5 = 0;
for (let x = 0; x < item2.length; x++){
   item2[x].setAttribute('itm',itemsArray[x]);
   item2[x].onclick = () =>{
        if(item2[x].getAttribute('itm') == pro_en1.getAttribute('itm')){
            if(pro_1 == 100){
                return
            }
            pro_1+=1;
            pro_en1.style.width = pro_1 + 'px';
        }
        if(item2[x].getAttribute('itm') == pro_en2.getAttribute('itm')){
            if(pro_2 == 100){
                return
            }
            pro_2+=1;
            pro_en2.style.width = pro_2 + 'px';
        }
        if(item2[x].getAttribute('itm') == pro_en3.getAttribute('itm')){
            if(pro_3 == 100){
                return
            }
            pro_3+=1;
            pro_en3.style.width = pro_3 + 'px';
        }
        if(item2[x].getAttribute('itm') == pro_en4.getAttribute('itm')){
            if(pro_4 == 100){
                return
            }
            pro_4+=1;
            pro_en4.style.width = pro_4 + 'px';
        }
        if(item2[x].getAttribute('itm') == pro_en5.getAttribute('itm')){
            if(pro_5 == 100){
                return
            }
            pro_5+=1;
            pro_en5.style.width = pro_5 + 'px';
        }
    }
}
// THIRED TASK
var procn_1 = 0;
var procn_2 = 0;
var procn_3 = 0;
var procn_4 = 0;
var procn_5 = 0;
for (let x = 0; x < item3.length; x++){
   item3[x].setAttribute('itm',itemsArray[x]);
   item3[x].onclick = () =>{
        if(item3[x].getAttribute('itm') == pro_contri1.getAttribute('itm')){
            if(procn_1 == 100){
                return
            }
            procn_1+=1;
            pro_contri1.style.width = procn_1 + 'px';
        }
        if(item3[x].getAttribute('itm') == pro_contri2.getAttribute('itm')){
            if(procn_2 == 100){
                return
            }
            procn_2+=1;
            pro_contri2.style.width = procn_2 + 'px';
        }
        if(item3[x].getAttribute('itm') == pro_contri3.getAttribute('itm')){
            if(procn_3 == 100){
                return
            }
            procn_3+=1;
            pro_contri3.style.width = procn_3 + 'px';
        }
        if(item3[x].getAttribute('itm') == pro_contri4.getAttribute('itm')){
            if(procn_4 == 100){
                return
            }
            procn_4+=1;
            pro_contri4.style.width = procn_4 + 'px';
        }
        if(item3[x].getAttribute('itm') == pro_contri5.getAttribute('itm')){
            if(procn_5 == 100){
                return
            }
            procn_5+=1;
            pro_contri5.style.width = procn_5 + 'px';
        }
    }
}
// FORTH TASK
var pro_shar1 = 0;
var pro_shar2 = 0;
var pro_shar3 = 0;
var pro_shar4 = 0;
var pro_shar5 = 0;
for (let x = 0; x < item4.length; x++){
   item4[x].setAttribute('itm',itemsArray[x]);
   item4[x].onclick = () =>{
        if(item4[x].getAttribute('itm') == pro_share1.getAttribute('itm')){
            if(pro_shar1 == 100){
                return
            }
            pro_shar1+=1;
            pro_share1.style.width = pro_shar1 + 'px';
        }
        if(item4[x].getAttribute('itm') == pro_share2.getAttribute('itm')){
            if(pro_shar2 == 100){
                return
            }
            pro_shar2+=1;
            pro_share2.style.width = pro_shar2 + 'px';
        }
        if(item4[x].getAttribute('itm') == pro_share3.getAttribute('itm')){
            if(pro_shar3 == 100){
                return
            }
            pro_shar3+=1;
            pro_share3.style.width = pro_shar3 + 'px';
        }
        if(item4[x].getAttribute('itm') == pro_share4.getAttribute('itm')){
            if(pro_shar4 == 100){
                return
            }
            pro_shar4+=1;
            pro_share4.style.width = pro_shar4 + 'px';
        }
        if(item4[x].getAttribute('itm') == pro_share5.getAttribute('itm')){
            if(pro_shar5 == 100){
                return
            }
            pro_shar5+=1;
            pro_share5.style.width = pro_shar5 + 'px';
        }
    }
}
// FITH TASK
var pro_ref_f1 = 0;
var pro_ref_f2 = 0;
var pro_ref_f3 = 0;
var pro_ref_f4 = 0;
var pro_ref_f5 = 0;
for (let x = 0; x < item5.length; x++){
   item5[x].setAttribute('itm',itemsArray[x]);
   item5[x].onclick = () =>{
        if(item5[x].getAttribute('itm') == pro_ref1.getAttribute('itm')){
            if(pro_ref_f1 == 100){
                return
            }
            pro_ref_f1+=1;
            pro_ref1.style.width = pro_ref_f1 + 'px';
        }
        if(item5[x].getAttribute('itm') == pro_ref2.getAttribute('itm')){
            if(pro_ref_f2 == 100){
                return
            }
            pro_ref_f2+=1;
            pro_ref2.style.width = pro_ref_f2 + 'px';
        }
        if(item5[x].getAttribute('itm') == pro_ref3.getAttribute('itm')){
            if(pro_ref_f3 == 100){
                return
            }
            pro_ref_f3+=1;
            pro_ref3.style.width = pro_ref_f3 + 'px';
        }
        if(item5[x].getAttribute('itm') == pro_ref4.getAttribute('itm')){
            if(pro_ref_f4 == 100){
                return
            }
            pro_ref_f4+=1;
            pro_ref4.style.width = pro_ref_f4 + 'px';
        }
        if(item5[x].getAttribute('itm') == pro_ref5.getAttribute('itm')){
            if(pro_ref_f5 == 100){
                return
            }
            pro_ref_f5+=1;
            pro_ref5.style.width = pro_ref_f5 + 'px';
        }
    }
}
// SIX TASK
var pro_c_1 = 0;
var pro_c_2 = 0;
var pro_c_3 = 0;
var pro_c_4 = 0;
var pro_c_5 = 0;
for (let x = 0; x < item6.length; x++){
   item6[x].setAttribute('itm',itemsArray[x]);
   item6[x].onclick = () =>{
        if(item6[x].getAttribute('itm') == pro_comnt1.getAttribute('itm')){
            if(pro_c_1 == 100){
                return
            }
            pro_c_1+=1;
            pro_comnt1.style.width = pro_c_1 + 'px';
        }
        if(item6[x].getAttribute('itm') == pro_comnt2.getAttribute('itm')){
            if(pro_c_2 == 100){
                return
            }
            pro_c_2+=1;
            pro_comnt2.style.width = pro_c_2 + 'px';
        }
        if(item6[x].getAttribute('itm') == pro_comnt3.getAttribute('itm')){
            if(pro_c_3 == 100){
                return
            }
            pro_c_3+=1;
            pro_comnt3.style.width = pro_c_3 + 'px';
        }
        if(item6[x].getAttribute('itm') == pro_comnt4.getAttribute('itm')){
            if(pro_c_4 == 100){
                return
            }
            pro_c_4+=1;
            pro_comnt4.style.width = pro_c_4 + 'px';
        }
        if(item6[x].getAttribute('itm') == pro_comnt5.getAttribute('itm')){
            if(pro_c_5 == 100){
                return
            }
            pro_c_5+=1;
            pro_comnt5.style.width = pro_c_5 + 'px';
        }
    }
}

document.onreadystatechange = function(){
    if(this.readyState !== 'complete'){
        window_onload();
    }else{
        remove_window_onload();
    }
}