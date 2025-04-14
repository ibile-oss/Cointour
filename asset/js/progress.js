
// //  FIRST SELECTION START HERE;
// var items = querySelectorAll('.follow_');
// var por1 = querySelectorAll('.progres_each')[0];
// var por2 = querySelectorAll('.progres_each')[1];
// var por3 = querySelectorAll('.progres_each')[2];
// var por4 = querySelectorAll('.progres_each')[3];
// var por5 = querySelectorAll('.progres_each')[4];
// var gen1 = querySelectorAll('.progres_each');
// por1.setAttribute('itm','youtube');
// por2.setAttribute('itm','tiktok');
// por3.setAttribute('itm','instagram');
// por4.setAttribute('itm','twitter');
// por5.setAttribute('itm','facebook');
// //  FIRST SELECTION END HERE;
// var item2 = querySelectorAll('.engage_');
// var pro_en1 = querySelectorAll('.pro_engage')[0];
// var pro_en2 = querySelectorAll('.pro_engage')[1];
// var pro_en3 = querySelectorAll('.pro_engage')[2];
// var pro_en4 = querySelectorAll('.pro_engage')[3];
// var pro_en5 = querySelectorAll('.pro_engage')[4];
// pro_en1.setAttribute('itm','youtube');
// pro_en2.setAttribute('itm','tiktok');
// pro_en3.setAttribute('itm','instagram');
// pro_en4.setAttribute('itm','twitter');
// pro_en5.setAttribute('itm','facebook');
// //  SECOND SELECTION END HERE;
// var item3 = querySelectorAll('.contri');
// var pro_contri1 = querySelectorAll('.por_contri')[0];
// var pro_contri2 = querySelectorAll('.por_contri')[1];
// var pro_contri3 = querySelectorAll('.por_contri')[2];
// var pro_contri4 = querySelectorAll('.por_contri')[3];
// var pro_contri5 = querySelectorAll('.por_contri')[4];
// pro_contri1.setAttribute('itm','youtube');
// pro_contri2.setAttribute('itm','tiktok');
// pro_contri3.setAttribute('itm','instagram');
// pro_contri4.setAttribute('itm','twitter');
// pro_contri5.setAttribute('itm','facebook');
// //  THIRED SELECTION END HERE;
// var item4 = querySelectorAll('.shar_ees');
// var pro_share1 = querySelectorAll('._proshare')[0];
// var pro_share2 = querySelectorAll('._proshare')[1];
// var pro_share3 = querySelectorAll('._proshare')[2];
// var pro_share4 = querySelectorAll('._proshare')[3];
// var pro_share5 = querySelectorAll('._proshare')[4];
// pro_share1.setAttribute('itm','youtube');
// pro_share2.setAttribute('itm','tiktok');
// pro_share3.setAttribute('itm','instagram');
// pro_share4.setAttribute('itm','twitter');
// pro_share5.setAttribute('itm','facebook');
// //  FORTH SELECTION END HERE;
// var item5 = querySelectorAll('.ref_eral_');
// var pro_ref1 = querySelectorAll('.por_ref')[0];
// var pro_ref2 = querySelectorAll('.por_ref')[1];
// var pro_ref3 = querySelectorAll('.por_ref')[2];
// var pro_ref4 = querySelectorAll('.por_ref')[3];
// var pro_ref5 = querySelectorAll('.por_ref')[4];
// pro_ref1.setAttribute('itm','youtube');
// pro_ref2.setAttribute('itm','tiktok');
// pro_ref3.setAttribute('itm','instagram');
// pro_ref4.setAttribute('itm','twitter');
// pro_ref5.setAttribute('itm','facebook');
// //  FITH SELECTION END HERE;
// var item6 = querySelectorAll('.comment_man');
// var pro_comnt1 = querySelectorAll('.com_pro')[0];
// var pro_comnt2 = querySelectorAll('.com_pro')[1];
// var pro_comnt3 = querySelectorAll('.com_pro')[2];
// var pro_comnt4 = querySelectorAll('.com_pro')[3];
// var pro_comnt5 = querySelectorAll('.com_pro')[4];
// pro_comnt1.setAttribute('itm','youtube');
// pro_comnt2.setAttribute('itm','tiktok');
// pro_comnt3.setAttribute('itm','instagram');
// pro_comnt4.setAttribute('itm','twitter');
// pro_comnt5.setAttribute('itm','facebook');




// var itemsArray = [
//     'youtube',
//     'tiktok',
//     'instagram',
//     'twitter',
//     'facebook'
// ]


// let circle_ = document.querySelector('.circle_');
// var degree = 0;
// var color_ = circle_.getAttribute('data-color');
// var number = document.querySelector('.number_');
// var targetDegree = parseInt(circle_.getAttribute('data-degree'));
// for (let x = 0; x < items.length; x++){
//    items[x].setAttribute('itm',itemsArray[x]);
//     items[x].onclick = () =>{
//         if(items[x].getAttribute('itm') == por1.getAttribute('itm')){
//             if(por1.style.width == '100%'){
//                 return;
//             }
//                 por1.style.width = '100%';
//         }
//         if(items[x].getAttribute('itm') == por2.getAttribute('itm')){
//             if(por2.style.width == '100%'){
//                 return
//             }
//                 por2.style.width = '100%';
//         }
//         if(items[x].getAttribute('itm') == por3.getAttribute('itm')){
//             if(por3.style.width == '100%'){
//                 return
//             }
//                 por3.style.width = '100%';
//         }
//         if(items[x].getAttribute('itm') == por4.getAttribute('itm')){
//             if(por4.style.width == '100%'){
//                 return
//             }
//                 por4.style.width = '100%';
//         }
//         if(items[x].getAttribute('itm') == por5.getAttribute('itm')){
//             if(por5.style.width == '100%'){
//                 return
//             }
//                 por5.style.width = '100%';
//         }
//         if(por1.style.width == '100%'  && por2.style.width == '100%' && por3.style.width == '100%' && por4.style.width == '100%' && por5.style.width == '100%'){
//             targetDegree = 100;
//         }
//         var tarval = setInterval(function(){
//             degree += 1;
//             if(degree > targetDegree){
//                 clearInterval(tarval)
//                 return;
//             }
//             circle_.style.background = `conic-gradient(${color_} ${degree}%, #222 0%)`;
//             number.innerHTML = degree + '<span>%</span>';
//             number.style.color = color_;
//         },50)
//     }

// }
// // SECOND TASK
// let circle_2 = document.querySelector('.circle_2');
// var degree2 = 0;
// var color_2 = circle_2.getAttribute('data-color');
// var number2 = document.querySelector('.number_2');
// var targetDegree2 = parseInt(circle_.getAttribute('data-degree'));
// for (let x = 0; x < item2.length; x++){
//    item2[x].setAttribute('itm',itemsArray[x]);
//    item2[x].onclick = () =>{
//         if(item2[x].getAttribute('itm') == pro_en1.getAttribute('itm')){
//             if(pro_en1.style.width == '100%'){
//                 return
//             }
//                 pro_en1.style.width = '100%';
//         }
//         if(item2[x].getAttribute('itm') == pro_en2.getAttribute('itm')){
//             if(pro_en2.style.width == '100%'){
//                 return
//             }
//                 pro_en2.style.width = '100%';
//         }
//         if(item2[x].getAttribute('itm') == pro_en3.getAttribute('itm')){
//             if(pro_en3.style.width == '100%'){
//                 return
//             }
//                 pro_en3.style.width = '100%';
//         }
//         if(item2[x].getAttribute('itm') == pro_en4.getAttribute('itm')){
//             if(pro_en4.style.width == '100%'){
//                 return
//             }
//                 pro_en4.style.width = '100%';
//         }
//         if(item2[x].getAttribute('itm') == pro_en5.getAttribute('itm')){
//             if(pro_en5.style.width == '100%'){
//                 return
//             }
//              pro_en5.style.width = '100%';
//         }
//         if(pro_en1.style.width == '100%'  && pro_en2.style.width == '100%' && pro_en3.style.width == '100%' && pro_en4.style.width == '100%' && pro_en5.style.width == '100%'){
//             targetDegree2 = 100;
//         }
//         var tarval = setInterval(function(){
//             degree2 += 1;
//             if(degree2 > targetDegree2){
//                 clearInterval(tarval)
//                 return;
//             }
//             circle_2.style.background = `conic-gradient(${color_2} ${degree2}%, #222 0%)`;
//             number2.innerHTML = degree2 + '<span>%</span>';
//             number2.style.color = color_2;
//         },50)
        
//     }
    
// }
// // THIRED TASK
// let circle_3 = document.querySelector('.circle_5');
// var degree3 = 0;
// var color_3 = circle_3.getAttribute('data-color');
// var number3 = document.querySelector('.number_5');
// var targetDegree3 = parseInt(circle_.getAttribute('data-degree'));
// for (let x = 0; x < item3.length; x++){
//    item3[x].setAttribute('itm',itemsArray[x]);
//    item3[x].onclick = () =>{
//         if(item3[x].getAttribute('itm') == pro_contri1.getAttribute('itm')){
//             if(pro_contri1.style.width == '100%'){
//                 return
//             }
//                 pro_contri1.style.width = '100%';
//         }
//         if(item3[x].getAttribute('itm') == pro_contri2.getAttribute('itm')){
//             if(pro_contri2.style.width == '100%'){
//                 return
//             }
//              pro_contri2.style.width = '100%';
//         }
//         if(item3[x].getAttribute('itm') == pro_contri3.getAttribute('itm')){
//             if(pro_contri3.style.width == '100%'){
//                 return
//             }
//                 pro_contri3.style.width = '100%';
//         }
//         if(item3[x].getAttribute('itm') == pro_contri4.getAttribute('itm')){
//             if(pro_contri4.style.width == '100%'){
//                 return
//             }
//                 pro_contri4.style.width = '100%';
//         }
//         if(item3[x].getAttribute('itm') == pro_contri5.getAttribute('itm')){
//             if(pro_contri5.style.width == '100%'){
//                 return
//             }
//                 pro_contri5.style.width = '100%';
//         }
//         if(pro_contri1.style.width == '100%'  && pro_contri2.style.width == '100%' && pro_contri3.style.width == '100%' && pro_contri4.style.width == '100%' && pro_contri5.style.width == '100%'){
//             targetDegree3 = 100;
//         }
//         var tarval = setInterval(function(){
//             degree3 += 1;
//             if(degree3 > targetDegree3){
//                 clearInterval(tarval)
//                 return;
//             }
//             circle_3.style.background = `conic-gradient(${color_3} ${degree3}%, #222 0%)`;
//             number3.innerHTML = degree3 + '<span>%</span>';
//             number3.style.color = color_3;
//         },50)
//     }
// }
// // FORTH TASK
// let circle_5 = document.querySelector('.circle_7');
// var degree5 = 0;
// var color_5 = circle_5.getAttribute('data-color');
// var number5 = document.querySelector('.number_7');
// var targetDegree5 = parseInt(circle_.getAttribute('data-degree'));
// for (let x = 0; x < item4.length; x++){
//    item4[x].setAttribute('itm',itemsArray[x]);
//    item4[x].onclick = () =>{
//         if(item4[x].getAttribute('itm') == pro_share1.getAttribute('itm')){
//             if(pro_share1.style.width == '100%'){
//                 return
//             }
//                 pro_share1.style.width = '100%';
//         }
//         if(item4[x].getAttribute('itm') == pro_share2.getAttribute('itm')){
//             if(pro_share2.style.width == '100%'){
//                 return
//             }
//                 pro_share2.style.width = '100%';
//         }
//         if(item4[x].getAttribute('itm') == pro_share3.getAttribute('itm')){
//             if(pro_share3.style.width == '100%'){
//                 return
//             }
//                 pro_share3.style.width = '100%';
//         }
//         if(item4[x].getAttribute('itm') == pro_share4.getAttribute('itm')){
//             if(pro_share4.style.width == '100%'){
//                 return
//             }
//                 pro_share4.style.width = '100%';
//         }
//         if(item4[x].getAttribute('itm') == pro_share5.getAttribute('itm')){
//             if(pro_share5.style.width == '100%'){
//                 return
//             }
//                 pro_share5.style.width = '100%';
//         }
//         if(pro_share1.style.width == '100%'  && pro_share2.style.width == '100%' && pro_share3.style.width == '100%' && pro_share4.style.width == '100%' && pro_share5.style.width == '100%'){
//             targetDegree5 = 100;
//         }
//         var tarval = setInterval(function(){
//             degree5 += 1;
//             if(degree5 > targetDegree5){
//                 clearInterval(tarval)
//                 return;
//             }
//             circle_5.style.background = `conic-gradient(${color_5} ${degree5}%, #222 0%)`;
//             number5.innerHTML = degree5 + '<span>%</span>';
//             number5.style.color = color_5;
//         },50)
//     }
// }
// // FITH TASK
// let circle_4 = document.querySelector('.circle_3');
// var degree4 = 0;
// var color_4 = circle_4.getAttribute('data-color');
// var number4 = document.querySelector('.number_3');
// var targetDegree4 = parseInt(circle_.getAttribute('data-degree'));
// for (let x = 0; x < item5.length; x++){
//    item5[x].setAttribute('itm',itemsArray[x]);
//    item5[x].onclick = () =>{
//         if(item5[x].getAttribute('itm') == pro_ref1.getAttribute('itm')){
//             if(pro_ref1.style.width == '100%'){
//                 return
//             }
//                 pro_ref1.style.width = '100%';
//         }
//         if(item5[x].getAttribute('itm') == pro_ref2.getAttribute('itm')){
//             if(pro_ref2.style.width == '100%'){
//                 return
//             }
//                 pro_ref2.style.width = '100%';
//         }
//         if(item5[x].getAttribute('itm') == pro_ref3.getAttribute('itm')){
//             if(pro_ref3.style.width == '100%'){
//                 return
//             }
//                 pro_ref3.style.width = '100%';
//         }
//         if(item5[x].getAttribute('itm') == pro_ref4.getAttribute('itm')){
//             if(pro_ref4.style.width == '100%'){
//                 return
//             }
//                 pro_ref4.style.width = '100%';
//         }
//         if(item5[x].getAttribute('itm') == pro_ref5.getAttribute('itm')){
//             if(pro_ref5.style.width == '100%'){
//                 return
//             }
//                 pro_ref5.style.width = '100%';
//         }
//         if(pro_ref1.style.width == '100%'  && pro_ref2.style.width == '100%' && pro_ref3.style.width == '100%' && pro_ref4.style.width == '100%' && pro_ref5.style.width == '100%'){
//             targetDegree4 = 100;
//         }
//         var tarval = setInterval(function(){
//             degree4 += 1;
//             if(degree4 > targetDegree4){
//                 clearInterval(tarval)
//                 return;
//             }
//             circle_4.style.background = `conic-gradient(${color_4} ${degree4}%, #222 0%)`;
//             number4.innerHTML = degree4 + '<span>%</span>';
//             number4.style.color = color_4;
//         },50)
//     }
// }
// // SIX TASK
// let circle_6 = document.querySelector('.circle_6');
// var degree6 = 0;
// var color_6 = circle_6.getAttribute('data-color');
// var number6 = document.querySelector('.number_6');
// var targetDegree6 = parseInt(circle_.getAttribute('data-degree'));
// for (let x = 0; x < item6.length; x++){
//    item6[x].setAttribute('itm',itemsArray[x]);
//    item6[x].onclick = () =>{
//         if(item6[x].getAttribute('itm') == pro_comnt1.getAttribute('itm')){
//             if(pro_comnt1.style.width == '100%'){
//                 return
//             }
//              pro_comnt1.style.width = '100%';
//         }
//         if(item6[x].getAttribute('itm') == pro_comnt2.getAttribute('itm')){
//             if(pro_comnt2.style.width == '100%'){
//                 return
//             }
//              pro_comnt2.style.width = '100%';
//         }
//         if(item6[x].getAttribute('itm') == pro_comnt3.getAttribute('itm')){
//             if(pro_comnt3.style.width == '100%'){
//                 return
//             }
//                 pro_comnt3.style.width = '100%';
//         }
//         if(item6[x].getAttribute('itm') == pro_comnt4.getAttribute('itm')){
//             if(pro_comnt4.style.width == '100%'){
//                 return
//             }
//                 pro_comnt4.style.width = '100%';
//         }
//         if(item6[x].getAttribute('itm') == pro_comnt5.getAttribute('itm')){
//             if(pro_comnt5.style.width == '100%'){
//                 return
//             }
//                 pro_comnt5.style.width = '100%';
//         }
//         if(pro_comnt1.style.width == '100%'  && pro_comnt2.style.width == '100%' && pro_comnt3.style.width == '100%' && pro_comnt4.style.width == '100%' && pro_comnt5.style.width == '100%'){
//             targetDegree6 = 100;
//         }
//         var tarval = setInterval(function(){
//             degree6 += 1;
//             if(degree6 > targetDegree6){
//                 clearInterval(tarval)
//                 return;
//             }
//             circle_6.style.background = `conic-gradient(${color_6} ${degree6}%, #222 0%)`;
//             number6.innerHTML = degree6 + '<span>%</span>';
//             number6.style.color = color_6;
//         },50)
//     }
// }

document.onreadystatechange = function(){
    if(this.readyState !== 'complete'){
        Loading_ani();
        loader__R();
    }else{
        Remove_ani();
        remove_ll();
    }
}