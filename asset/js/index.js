function Error_msg(err_txt){
    let err = querySelector('.erro_txt_msg_fetch');
        err.style.setProperty('display','flex');
            err.innerHTML = err_txt;
                setTimeout(() =>{
                    err.classList.add('goBack');

                    setTimeout(() =>{
                        err.classList.remove('goBack');
                        err.style.setProperty('display','none');
                    },400);
                },2000);
    err.classList.remove('success');
}
function SUCCESS(txt){
    const err = querySelector('.toast');
    const text = querySelector('.toast .toast-content .message .text2');
        err.style.setProperty('display','flex');
        text.innerHTML = txt;
    let set = setTimeout(() =>{
        err.classList.add('pumst')
        setTimeout(() =>{
            err.style.setProperty('display','none');
            err.classList.remove('pumst')
        },500)
    },4000);

    err.onmouseenter = () =>{
        clearTimeout(set);
    }

    err.onmouseout = () =>{
        setTimeout(() =>{
            err.style.setProperty('display','none');
        },1000);
    }
}
function ERROR(txt){
    const err = querySelector('.toast_two');
    const text = querySelector('.toast_two .toast-content .message .text2');
        err.style.setProperty('display','flex');
        text.innerHTML = txt;
    let set = setTimeout(() =>{
        err.classList.add('pumst')
        setTimeout(() =>{
            err.style.setProperty('display','none');
            err.classList.remove('pumst')
        },500)
    },4000);

    err.onmouseenter = () =>{
        clearTimeout(set);
    }

    err.onmouseout = () =>{
        setTimeout(() =>{
            err.style.setProperty('display','none');
        },1000);
    }
}
function success_msg_txt(txt){
    let err = querySelector('.err_msg_upl_f');
        err.style.setProperty('display','flex');
        err.classList.add('success');
        err.innerHTML = txt;
            setTimeout(() =>{
                err.classList.add('goBack');

                setTimeout(() =>{
                    err.classList.remove('goBack');
                    err.style.setProperty('display','none');
                },400);
            },2000);
}
function err_msg_txt(txt){
    let err = querySelector('.err_msg_upl_f');
        err.style.setProperty('display','flex');
        err.innerHTML = txt;
            setTimeout(() =>{
                err.classList.add('goBack');

                setTimeout(() =>{
                    err.classList.remove('goBack');
                    err.style.setProperty('display','none');
                },400);
            },2000);
    err.classList.remove('success');
}
var very_state = querySelector('.verified_state');
    var ssss = querySelector('.circuler');
        var cnt_wrap = querySelectorAll('.tasking_mode');
                    var clk = querySelector('.num1');
                        var clk2 = querySelector('.num2');
                            var tools = querySelectorAll('.tools');
                                var all_Tools = querySelectorAll('.tasking_mode .alltools');
var alltoolsCnt = querySelectorAll('.tasking_mode');
    var clos_ = querySelector('.sekComent2');
        var clos4 = querySelector('.sekComent1');
            var task_cnt = querySelector('.all_tasking_for_user');
                var impo = querySelectorAll('.task_go');
                    var task_done_ = querySelectorAll('.task_go');
                        var nt_cnt = querySelector('.Ctr_Cnt_xxxxxxxxx00');
                            var engage = querySelector('.all_engage_for_user');
                                var TTask = querySelector('.TTask');
var progress_task = querySelector('.progress_task');
    var engage_flow = querySelector('.engage_flow');
        var engage_progress = querySelector('.engage_progress');
            var task_part = querySelector('.task_part');
                var Referals_cnt = querySelector('.Referals_cnt');
                    var refer_r_ = querySelector('.refer_r_');
                        var pro_pr = querySelector('.pro_pr');
                            var progress = querySelector('.progress');
                                var referal_cnt = querySelector('.referal_cnt_user_');
                                    var close_ = querySelectorAll('.close');
var shares_task  = querySelector('.shares_task');
    var infor_ff = querySelector('.infor_ff span');
        var info_r = querySelector('.infor_to_all_task');
            var info_bring = querySelectorAll('.space_eve .info_t');
                var txt_infor__ = querySelector('.infor_cnt p');
                    var info_cl = querySelector('.info_t_d');
                        var clo_se_ =  querySelector('.clo_se_');
                            var check_cash = querySelector('.check_cash');
                                var if_undone  = querySelector('.why_am_i_not_paid_');
                                    var cansil_ = querySelector('.why_am_i_not_paid_ p span');
var me_de_medias = querySelector('.me_de_medias');
    var me_on_mdias = querySelector('.me_on_mdias');
        var closier = querySelector('.close____');
            var clk_cl = querySelector('.close_d');
                var refplay = querySelector('.ref_game_earning');
                    var openrefplay = querySelector('.play_refe');
                        var btn_ref = querySelectorAll('.token_to_you');
                            var xx_inf = querySelector('.info_t__');
                                var inf_yet = querySelectorAll('.set_sp img');
var notice = querySelectorAll('.wrap_to_ifro');
    var openMain = querySelector('.toolsss');
        var mAin = querySelector('.main_menu');
            var closMain = querySelector('.close_m');
                var create_your_wallet_pin = querySelector('.create_your_wallet_pin');
                    var open_ = querySelectorAll('.txt_opem');
                        var open_cnt = querySelectorAll('.wrap_authentic');
                            var inputt = querySelector('.input_wallet_wrapp input');
                                var opts = querySelectorAll('.cnt_cont');
                                    var btnsGo = querySelector('.pin_wrapper button');
                                        var cnt_kkm = querySelector('.pin_wrapper');
                                            var change_cnt = querySelector('.change_cnt');
var tonone = querySelectorAll('.tonone_');
    var clostes = querySelector('.close_test');
        let testimonials = querySelector('.testimonials');
            var emojiw = querySelector('.emoji_wraper');
                var cncl = querySelector('.cansil');
                    var toUper = querySelector('.toUper');
                        var item_slut = querySelectorAll('.item_slut');
                            var closHis = querySelector('.clos_hist');
                                var History_ = querySelector('.History');
                                    var Bank_details_push = querySelector('.Bank_details_push');
                                        var clo2_p = querySelectorAll('.close_p2');
var err = querySelector('.err_txt');
    var Available_Bnk = querySelectorAll('.bank_aval');
        var Available_Bnk_txt = querySelectorAll('.bank_aval p');
            var Bnk_name = querySelector('#Bname');
                var thisdotspn = querySelector('.Abtxt_and_clos span');
                    var headdd = querySelectorAll('.headdd');
                        var img_ttle = querySelectorAll('.img_permnt2');
                            var About_Infor = querySelectorAll('.wrap_about');
                                var About_Infor_txt = querySelectorAll('.wrap_about p');
                                    var About_Infor_img = querySelectorAll('.wrap_about span img');
let coin_goAll = querySelectorAll('.wrapCoin');
    let coinONE = querySelector('.coinONE');
        let coin_goAllTXT =  querySelectorAll('.wrapCoin p');
            let rrt_ = querySelector('.rrt_').getAttribute('url');
                let msg_recent_Transfar = querySelectorAll('.item_tf_wrap');
                    let msg_input = querySelectorAll('.item_tf_wrap .remove_history');
                        let medium_str = querySelectorAll('.medium_str');
                            let medium_txt = querySelectorAll('.medium_str .txt_style');
let STR_ = querySelector('.stars_cnt');
    let OCT_ = querySelector('.octahedron_sent');
        let DEL_ = querySelector('.deltohedron_sent');
            let JEW_ = querySelector('.jewel_sent');
                    let PLU_ = querySelector('.pluto_sent');
                            let KEYS_ = querySelector('.keys_starts');
                                let close_dem_all = querySelectorAll('.head_ing .close__up__');
let close_stock = querySelector('.closD_med');
    let medium_stock = querySelector('.medium_stock');
        let stok_img = querySelectorAll('.stok_img');
            let withdrawals_request = querySelector('.withdrawals_request');
                let close_trsnfer = querySelector('.close_trsnfer');
                    let transfar__cc = querySelector('.transfar__cc');
                        let clo_Me = querySelector('.me_head_acc .clos_me_');
                            let fcount = querySelector('.friendCount');
                                let count_go = querySelector('.max_ccc i');
                                    let txtArea = querySelector('.txt_post__');
let deltCnt = querySelectorAll('.wrap_tes_ti');
    let delt = querySelectorAll('.wrap_tes_ti .delete__');
        let tosend = querySelectorAll('.wrap_tes_ti p');
            const uid = querySelector('.header').getAttribute('uid');
                const unik = querySelectorAll('.txtrappr');
                    const wallet = querySelector('.wallet_cnt_parkd');
                        const inputmode = document.getElementById('customInput');
                            const faqscnt = querySelectorAll('.faqs_infor');
                                const faqstxt = querySelectorAll('.faqs_infor .faqs')
const senDfaqs = querySelector('.wrap_ggmg');
    const faqsTxt = querySelector('.input_search input');
        const search_faqsUser = querySelector('.search_faqs input');

const form = document.querySelector('.formm_d');

let fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
        
        
function checkInput(){
    const items = document.querySelectorAll('.item');
    for(const item of items){
        if(item.value == ""){
            item.classList.add('error');
            item.parentElement.classList.add('error');
        }
        if(items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener('keyup', () =>{
            checkEmail();
        });
        item.addEventListener('keyup', () =>{
            if(item.value != ""){
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            }else{
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        });
    }
}
function Contact(event){
    event.preventDefault();
    checkInput();
}

function checkEmail(){
    const emailtxt = document.querySelector('.error-txt.email')
    const email_check = /^([a-z\d\.-]+)@([a-z\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if(!email.value.match(email_check)){
        email.classList.add('error');
        email.parentElement.classList.add('error');

        if(email.value != ""){
            emailtxt.innerHTML = "Enter a valid email address";
        }else{
            emailtxt.innerHTML = "Email address can't be blank";
        }
    }
    else{
        email.classList.remove('error');
        email.parentElement.classList.remove('error');
    }
}




search_faqsUser.addEventListener('keyup',function(){
    search_faqs_us(search_faqsUser.value);
})

async function search_faqs_us(params){
    try {
        const fech = await fetch(`${__root__2()}/asset/apis/general_req/`,{
            method:"POST",
            headers:{'Content-type':'application/x-www-form-urlencoded'},
            body:'search_engine=' + JSON.stringify({params})
        });

        const respons = await fech.text();
        let cnt = querySelector('.questions_go_cnt');
        cnt.innerHTML = respons;
        
    } catch (error) {
        console.error(error);
    }
}        

senDfaqs.onclick = () =>{
    if(faqsTxt.value == ''){
        ERROR('Please Include Faqs')
        return;
    }
    if(faqsTxt.value.search(/[@#$-%)^&*(+_"]/) !== -1){
        ERROR('Unwanted Character Detected!');
        return;
    }
    if(faqsTxt.value.length > 40){
        ERROR('Faqs Too Long!');
        return
    }
    Loading_Animation_Index();
    let MonthArr = ['January','Febuary','March','April','May','June','July','August',
        'September','October','November','December'
    ];
    let DayArr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    let today = new Date();
    let day = today.getDay();
    let month = today.getMonth();
    let year = today.getFullYear();
    let fullDay = `${String(DayArr[day - 1]).padStart(2, '0')}/${String(MonthArr[month]).padStart(2, '0')}/${String(year).padStart(2, '0')}`;
    let theday = fullDay;
    let txt = faqsTxt.value;
    try {
        fetch(`${__root__2()}/asset/apis/general_req/`,{
            method:"POST",
            headers:{'Content-type':'application/x-www-form-urlencoded'},
            body:'faqs=' + JSON.stringify({txt,uid,theday})
        })
        .then(respons => respons.json())
        .then(result =>{
            // console.log(result);
            if(result.status !== 'success'){
                ERROR(result.message);
                RemoveIndexAnimation();
                return;
            }

            SUCCESS(result.message);
            RemoveIndexAnimation();
        })
    }catch(error){
        console.error(error);
        ERROR(error);
        RemoveIndexAnimation();
    }
}

for (let x = 0; x < faqscnt.length; x++){
    faqscnt[x].onclick = () =>{
        faqstxt[x].style.setProperty('-webkit-line-clamp','none');
    }
}
function typeKey(char){
    inputmode.value += char;
}
function deleteKey() {
    inputmode.value = inputmode.value.slice(0, -1);
}
openMain.onclick = () =>{
    Loading_Animation_Index();
    try {
        fetch(`${__root__2()}/asset/apis/general_req/`,{
            method:"POST",
            headers:{'Content-type':'application/x-www-form-urlencoded'},
            body:'task_check=' + JSON.stringify({uid})
        })
        .then(respons => respons.json())
        .then(result =>{
            // console.log(result);
            if(result.status !== 'success'){
                RemoveIndexAnimation();
                ERROR(result.message);
                return;
            }
            RemoveIndexAnimation();
            SUCCESS(result.message);
            mAin.style.setProperty('display','flex');
            task_part.scrollTo(0, 0);
        })
    }catch(error){
        RemoveIndexAnimation();
        console.error(error);
        ERROR(error);
    }
}

for (let x = 0; x < deltCnt.length; x++){
    let uni = deltCnt[x].getAttribute('un');
    delt[x].onclick = () =>{
        delt[x].classList.add('tranX');

        setTimeout(() =>{
            delt[x].classList.remove('tranX');
            delt[x].style.setProperty('display','none');

            let cre = createElement('button');
            cre.className = 'SureDelt';
            cre.innerHTML = 'Recycle Me';
            cre.onclick = () =>{
                cre.remove();
                try {
                    fetch(`${__root__2()}/asset/apis/general_req/`,{
                        method:"POST",
                        headers:{'Content-type':'application/x-www-form-urlencoded'},
                        body:'txt_testi=' + JSON.stringify({uid,uni})
                    })
                    .then(respons => respons.json())
                    .then(result =>{
                        // console.log(result);
                        if(result.status !== 'success'){
                            ERROR(result.message);
                            return;
                        }

                        SUCCESS(result.message);
                        deltCnt[x].classList.add('Rmuve');
                        setTimeout(() =>{
                            deltCnt[x].style.setProperty('display','none');
                        },400);
                    })   
                
                }catch(error){
                    console.error(error);
                    ERROR(error);
                }
                            
                delt[x].style.setProperty('display','flex');
            }
            deltCnt[x].appendChild(cre);
        },500);
    } 
}

if(fcount.innerHTML > 1){
    count_go.innerHTML = count_go.innerHTML + 's';
}else{
    count_go.innerHTML = count_go.innerHTML;
}

let ArrClassLis = ['ani1','ani3'];
let randAni = querySelectorAll('.randAni');
for (let x = 0; x < stok_img.length; x++) {
    let rand = Math.floor(Math.random() * ArrClassLis.length);
    stok_img[x].classList.add(ArrClassLis[rand])
}
for (let x = 0; x < randAni.length; x++) {
    let rand = Math.floor(Math.random() * ArrClassLis.length);
    randAni[x].classList.add(ArrClassLis[rand])
}

close_trsnfer.onclick = () =>{
    transfar__cc.classList.add('goBack');
    setTimeout(() =>{
        transfar__cc.classList.remove('goBack');
        transfar__cc.style.setProperty('display','none');
    },400);
}

close_stock.onclick = () =>{
    medium_stock.classList.add('goBack');
    setTimeout(() =>{
        medium_stock.classList.remove('goBack');
        medium_stock.style.setProperty('display','none');
    },400);
}        

for (let x = 0; x < medium_str.length; x++) {
    close_dem_all[x].onclick = () =>{
        OCT_.classList.add('goBack');
        DEL_.classList.add('goBack');
        JEW_.classList.add('goBack');
        PLU_.classList.add('goBack');
        KEYS_.classList.add('goBack');
        STR_.classList.add('goBack');
        setTimeout(() =>{
            OCT_.style.setProperty('display','none');
            DEL_.style.setProperty('display','none');
            JEW_.style.setProperty('display','none');
            PLU_.style.setProperty('display','none');
            KEYS_.style.setProperty('display','none');
            STR_.style.setProperty('display','none');
            OCT_.classList.remove('goBack');
            DEL_.classList.remove('goBack');
            JEW_.classList.remove('goBack');
            PLU_.classList.remove('goBack');
            KEYS_.classList.remove('goBack');
            STR_.classList.remove('goBack');
        },400);
    }
    medium_str[x].onclick = () =>{
        walletscroll();
        Scrol_to_top();
        if(medium_txt[x].innerHTML == 'Octahedron'){
            OCT_.style.setProperty('display','flex');
            DEL_.style.setProperty('display','none');
            JEW_.style.setProperty('display','none');
            PLU_.style.setProperty('display','none');
            KEYS_.style.setProperty('display','none');
            STR_.style.setProperty('display','none');
        }
        if(medium_txt[x].innerHTML == 'Deltohedron'){
            OCT_.style.setProperty('display','none');
            DEL_.style.setProperty('display','flex');
            JEW_.style.setProperty('display','none');
            PLU_.style.setProperty('display','none');
            KEYS_.style.setProperty('display','none');
            STR_.style.setProperty('display','none');
        }
        if(medium_txt[x].innerHTML == 'Jewel'){
            OCT_.style.setProperty('display','none');
            DEL_.style.setProperty('display','none');
            JEW_.style.setProperty('display','flex');
            PLU_.style.setProperty('display','none');
            KEYS_.style.setProperty('display','none');
            STR_.style.setProperty('display','none');
        }
        if(medium_txt[x].innerHTML == 'Pluto'){
            OCT_.style.setProperty('display','none');
            DEL_.style.setProperty('display','none');
            JEW_.style.setProperty('display','none');
            PLU_.style.setProperty('display','flex');
            KEYS_.style.setProperty('display','none');
            STR_.style.setProperty('display','none');
        }
        if(medium_txt[x].innerHTML == 'Stars'){
            OCT_.style.setProperty('display','none');
            DEL_.style.setProperty('display','none');
            JEW_.style.setProperty('display','none');
            PLU_.style.setProperty('display','none');
            KEYS_.style.setProperty('display','none');
            STR_.style.setProperty('display','flex');
        }
        if(medium_txt[x].innerHTML == 'Key Stars'){
            OCT_.style.setProperty('display','none');
            DEL_.style.setProperty('display','none');
            JEW_.style.setProperty('display','none');
            PLU_.style.setProperty('display','none');
            KEYS_.style.setProperty('display','flex');
            STR_.style.setProperty('display','none');
        }
    }
    
}

                    
Push_Link_data = (event) =>{
    event.preventDefault();
        let youtube_l = querySelector('.youtube_l').value;
            let facebook_l = querySelector('.facebook_').value;
                let instagram_l = querySelector('.instagram_l').value;
                    let tiktok_l = querySelector('.tiktok_').value;
                        let twitter_l = querySelector('.twitter_l').value;
                            let uid = querySelector('.header').getAttribute('uid');
                                let ufnme = querySelector('.header').getAttribute('ufnme');
    if(!youtube_l){
        Error_msg('Include Your Youtube Link');
        return;
    }
    if(!facebook_l){
        Error_msg('Include Your Facebook Link');
        return;
    }
    if(!instagram_l){
        Error_msg('Include Your Instagram Link');
        return;
    }
    if(!tiktok_l){
        Error_msg('Include Your Tiktok Link');
        return;
    }
    if(!twitter_l){
        Error_msg('Include Your Twitter Link');
        return;
    }
    Push_data_to_base(youtube_l,facebook_l,instagram_l,tiktok_l,twitter_l,uid,ufnme);
}

async function profile_picture(){
    let img = querySelector('.profile_cc_p img');
    const tittle = querySelector('.header').getAttribute('uid');
    const input = querySelector('.upload_profile_');
    const err = querySelector('.err_msg');

    try {
        const formdata = new FormData();
        const imgbj = input.files[0];
        const imgdata = URL.createObjectURL(imgbj);
        img.src = imgdata;

        formdata.append('profile', imgbj);
        formdata.append('tittle', tittle);

        const send = await fetch(`${__root__2()}/asset/apis/profile/`,{
            method:"POST",
            body:formdata
        });

        const res = await send.json();
        // console.log(res);

        if(res.status !== 'success'){
            err.style.setProperty('display','flex');
            err.innerHTML = res.message;
            setTimeout(() =>{
                err.style.setProperty('display','none');
            },1000);
            return;
        }

        err.style.setProperty('display','flex');
        err.innerHTML = res.message;
        setTimeout(() =>{
            err.style.setProperty('display','none');
        },1000);
    } catch (error) {
        err.style.setProperty('display','flex');
        err.innerHTML = error;
        console.error(error);
    }
}

async function send_dir(event){
    event.preventDefault();
    const tittle = querySelector('.header').getAttribute('uid');
    let fileInput = document.getElementById("file");
    let files = fileInput.files;

    if (files.length === 0) {
        err_msg_txt('Please select at least one file.');
        return;
    }

    if (files.length > 5) {
        err_msg_txt('You can only upload up to five images.');
        return;
    }

    if (files.length < 5) {
        err_msg_txt('You can only upload up to five images.');
        return;
    }
    let formData = new FormData();
    formData.append("user_id", tittle);

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let allowedExtensions = ["image/png", "image/jpeg", "image/jpg"];

        if (!allowedExtensions.includes(file.type)) {
            err_msg_txt('Only PNG, JPG, and JPEG files are allowed.');
            return;
        }

        formData.append("proof[]", file);
    }

    try {
        let response = await fetch(`${__root__2()}/asset/apis/sendUpload/`, {
            method: "POST",
            body: formData
        });

        let result = await response.json();
        if (result.status === "success") {
            err_msg_txt(result.message);
            console.log("Uploaded files:", result.file_name);
        } else {
            err_msg_txt(result.message);
        }
    } catch (error) {
        err_msg_txt(error);
    }
}


for (let i = 0; i < msg_recent_Transfar.length; i++) {
    msg_recent_Transfar[i].onmouseenter = () =>{
        msg_input[i].style.setProperty('display','flex');
    }
}


for (let x = 0; x < coin_goAll.length; x++){
    coin_goAll[x].onclick = () =>{
        window.location.href = coin_goAllTXT[x].innerHTML.toLowerCase() + '.html';
    }
}

var txtInfo_text = [`Lorem ipsum dolor, sit amet consectetur 
adipisicing elit. Quam nemo fugit aut ut 
pariatur. Libero quaerat iusto accusantium 
maiores saepe. Iusto consequatur odit error 
sunt, illum odio repellendus animi maxime ea 
magnam vitae nihil expedita numquam neque 
delectus culpa? Libero voluptates quam magnam non.
Est nisi fuga provident, culpa debitis aspernatur 
obcaecati perferendis quia quam optio adipisci quo 
incidunt consequatur iste dicta tempore voluptate 
blanditiis eaque enim possimus. Iusto provident ad, 
delectus harum ullam repudiandae, facilis quasi odio
odit quos, quibusdam sit vel in magni vero! Harum vitae 
qui voluptatibus`,`Lorem ipsum dolor, sit amet consectetur 
adipisicing elit. Quam nemo fugit aut ut 
pariatur. Libero quaerat iusto accusantium 
maiores saepe. Iusto consequatur odit error 
sunt, illum odio repellendus animi maxime ea 
magnam vitae nihil expedita numquam neque 
delectus culpa? Libero voluptates quam magnam non.
Est nisi fuga provident, culpa debitis aspernatur 
obcaecati perferendis quia quam optio adipisci quo 
incidunt consequatur iste dicta tempore voluptate 
blanditiis eaque enim possimus. Iusto provident ad, 
delectus harum ullam repudiandae, facilis quasi odio
odit quos, quibusdam sit vel in magni vero! Harum vitae 
qui voluptatibus`,`Lorem ipsum dolor, sit amet consectetur 
adipisicing elit. Quam nemo fugit aut ut 
pariatur. Libero quaerat iusto accusantium 
maiores saepe. Iusto consequatur odit error 
sunt, illum odio repellendus animi maxime ea 
magnam vitae nihil expedita numquam neque 
delectus culpa? Libero voluptates quam magnam non.
Est nisi fuga provident, culpa debitis aspernatur 
obcaecati perferendis quia quam optio adipisci quo 
incidunt consequatur iste dicta tempore voluptate 
blanditiis eaque enim possimus. Iusto provident ad, 
delectus harum ullam repudiandae, facilis quasi odio
odit quos, quibusdam sit vel in magni vero! Harum vitae 
qui voluptatibus`,`Lorem ipsum dolor, sit amet consectetur 
adipisicing elit. Quam nemo fugit aut ut 
pariatur. Libero quaerat iusto accusantium 
maiores saepe. Iusto consequatur odit error 
sunt, illum odio repellendus animi maxime ea 
magnam vitae nihil expedita numquam neque 
delectus culpa? Libero voluptates quam magnam non.
Est nisi fuga provident, culpa debitis aspernatur 
obcaecati perferendis quia quam optio adipisci quo 
incidunt consequatur iste dicta tempore voluptate 
blanditiis eaque enim possimus. Iusto provident ad, 
delectus harum ullam repudiandae, facilis quasi odio
odit quos, quibusdam sit vel in magni vero! Harum vitae 
qui voluptatibus`,`Lorem ipsum dolor, sit amet consectetur 
adipisicing elit. Quam nemo fugit aut ut 
pariatur. Libero quaerat iusto accusantium 
maiores saepe. Iusto consequatur odit error 
sunt, illum odio repellendus animi maxime ea 
magnam vitae nihil expedita numquam neque 
delectus culpa? Libero voluptates quam magnam non.
Est nisi fuga provident, culpa debitis aspernatur 
obcaecati perferendis quia quam optio adipisci quo 
incidunt consequatur iste dicta tempore voluptate 
blanditiis eaque enim possimus. Iusto provident ad, 
delectus harum ullam repudiandae, facilis quasi odio
odit quos, quibusdam sit vel in magni vero! Harum vitae 
qui voluptatibus`]

for (let i = 0; i < About_Infor.length; i++){
    var bdy = document.body;
    About_Infor_txt[i].setAttribute('AbInfo',txtInfo_text[i]);
    About_Infor[i].onclick = () =>{
        var nwPrntCnt = newElement('div');
            nwPrntCnt.className = 'nwPrntCnt';
                var chilPrnt = newElement('div');
                    chilPrnt.className = 'chilPrnt';
                        nwPrntCnt.append(chilPrnt);
                            var hmeChld = createElement('div');
                                hmeChld.className = 'hmeChld';
            chilPrnt.append(hmeChld);
                var nv_img_wrper = createElement('nav');
                    nv_img_wrper.className = 'nv_img_wrper';
                        hmeChld.append(nv_img_wrper);
                            var img = newElement('img');
                                nv_img_wrper.append(img);
                                    var hfour = newElement('h4');
                                        hmeChld.append(hfour);
                        var ptag = newElement('p');
                            hmeChld.append(ptag);
                                var img_Atrbt = About_Infor_img[i].getAttribute('src');
                                    var pTXT = About_Infor_txt[i].innerText;
                                        var attri = About_Infor_txt[i].getAttribute('AbInfo');
                                            img.setAttribute('src',img_Atrbt);
                                                hfour.innerHTML = pTXT;
                                                    ptag.innerHTML = attri;
                                                        var close_box = newElement('span');
                                                            close_box.className = 'close_box';
                                                                var img_close = createElement('img');
                var ig_atri = 'asset/img/icons8-close-window-94.png';
                    img_close.setAttribute('src',ig_atri);
                        close_box.append(img_close);
                            ptag.append(close_box);
                                close_box.onclick = () =>{
                                    nwPrntCnt.remove();
                                }
                                
        bdy.insertAdjacentElement('afterbegin',nwPrntCnt);
    }
    
}

for (let x = 0; x < Available_Bnk.length; x++) {
    Available_Bnk[x].onclick = () =>{
        Scrol_to_top();
            Bnk_name.value = Available_Bnk_txt[x].innerHTML;
    }
}

Wallet_first_menu();
closHis.onclick = () =>{
    History_.classList.add('goBack');
        setTimeout(() =>{
            History_.style.setProperty('display','none');
            History_.classList.remove('goBack');
        },400)
}
for (let x = 0; x < clo2_p.length; x++) {
    clo2_p[x].onclick = () =>{
        create_your_wallet_pin.classList.add('impot');
        testimonials.classList.add('goBack');
        Bank_details_push.classList.add('goBack');
        document.querySelector('.wallet_cnt_parkd').classList.add('goBack');
        document.querySelector('.frequently_asked_question').classList.add('goBack');
        document.querySelector('.coins_available').classList.add('goBack');
        document.querySelector('.contact_us').style.setProperty('display','none');
        setTimeout(() =>{
            testimonials.style.setProperty('display','none');
            testimonials.classList.remove('goBack');
            Bank_details_push.style.setProperty('display','none');
            create_your_wallet_pin.style.setProperty('display','none');
            create_your_wallet_pin.classList.remove('impot');
            Bank_details_push.classList.remove('goBack');
            document.querySelector('.frequently_asked_question').style.setProperty('display','none');
            document.querySelector('.frequently_asked_question').classList.remove('goBack');
            document.querySelector('.coins_available').style.setProperty('display','none');
            document.querySelector('.coins_available').classList.remove('goBack');
            document.querySelector('.wallet_cnt_parkd').style.setProperty('display','none');
            document.querySelector('.wallet_cnt_parkd').classList.remove('goBack');
        },400)
    }
}

testimonials.addEventListener('scroll', ()=>{
    const totup = querySelector(".moveToTop");
    if(testimonials.scrollTop >20){
        totup.style.setProperty('display','flex');
    }else{
        totup.style.setProperty('display','none');
    }
})
const totup = querySelector(".moveToTop");
totup.onclick = () =>{
    Scrol_to_top();
    testimonials.scrollTo(0, 0);
}

function err_mgg(txt){
    let toaap = querySelector('.copy_msg');
    toaap.style.setProperty('display','flex');
    toaap.innerHTML = txt;
    setTimeout(() =>{
        toaap.style.setProperty('display','none');
    },1000);
}
async function Post(){
    const uid = querySelector('.header').getAttribute('uid');
    const buton = querySelector('.add_test');
    if(txtArea.value == ''){
        err_mgg('Enter Testimonial Text!');
        return;
    }
    if(txtArea.value.search(/[@#$-%)^&*(+_"]/) !== -1){
        err_mgg('Unwanted Character Detected!');
        return;
    }
    if(txtArea.value.length < 50){
        err_mgg('Min Text Length!');
        return;
    }
    if(txtArea.value.length > 400){
        err_mgg('Max Text Length!');
        return;
    }
    buton.innerHTML = '';
    const loader = createElement('span');
    loader.className = 'loadButon';

    buton.appendChild(loader);
    let MonthArr = ['January','Febuary','March','April','May','June','July','August',
        'September','October','November','December'
    ];
    let DayArr = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    
    let today = new Date();
        let day = today.getDay();
            let month = today.getMonth();
                let year = today.getFullYear();

    let fullDay = `${String(DayArr[day - 1]).padStart(2, '0')}/${String(MonthArr[month]).padStart(2, '0')}/${String(year).padStart(2, '0')}`;
    

   let user_name = querySelector('.header').getAttribute('ufnme');
        let user_profile = querySelector('.profile_cc_p').getAttribute('user_pr');
            let cnt = querySelector('.testiItself');
                let select = querySelector('.Selec__');
                    let options = querySelectorAll('.Selec__ option');
                    for (let x = 0; x < options.length; x++) {
                        options[x].setAttribute('value',options[x].innerHTML);
                    }

                let testify_cnt = createElement('NAV');
                    testify_cnt.className = 'wrap_tes_ti';
                        let testify_spn = createElement('SPAN');
                            let us_pro = createElement('img');
                                let spn2 = createElement('span');
                let h3 = createElement('h3');
                    let nav = createElement('nav');
                        nav.className = 'txtrappr';
                let txt_testify = createElement('p');
                    let dte = createElement('span');
                        testify_spn.className = 'ig_wrap';
                            spn2.innerHTML = user_name;
                                h3.innerHTML = select.value;
                                txt_testify.innerHTML = txtArea.value;
         dte.className = 'time_stamp';
        dte.innerHTML = fullDay;
        let delet = createElement('span');
            let delIcon = createElement('i');
                delIcon.className = 'fas fa-recycle';
                    delet.appendChild(delIcon);
                        delet.className = 'delete__';

            delet.onclick = () =>{
                delet.classList.add('tranX');
                setTimeout(() =>{
                    delet.classList.remove('tranX');
                    delet.style.setProperty('display','none');
        
                    let cre = createElement('button');
                        cre.className = 'SureDelt';
                            cre.innerHTML = 'Recycle Me';
                        cre.onclick = () =>{
                            cre.remove();
                            delet.style.setProperty('display','flex');
                            testify_cnt.classList.add('Rmuve');
                            setTimeout(() =>{
                                testify_cnt.remove();
                            },400);
                        }
                    testify_cnt.appendChild(cre);
                },500);
            }
            let txt = txtArea.value;
            let heading = select.value;
            let dteday = fullDay;

            try {
                const sen = await fetch(`${__root__2()}/asset/apis/general_req/`,{
                    method:"POST",
                    headers:{'Content-type':'application/x-www-form-urlencoded'},
                    body:'test=' + JSON.stringify({user_name,txt,heading,uid,dteday})
                });
            
                const respons = await sen.json();
            
                if(respons.status !== 'success'){
                    err_mgg(respons.message);
                    return;
                }
        
                txtArea.value = '';
                err_mgg(respons.message);
                loader.remove();
                buton.innerHTML = 'Add Testimonial';

            }catch(error){
                console.error(error);
                err_mgg(error);
            }
                                    
    testify_cnt.appendChild(testify_spn);
        testify_spn.appendChild(us_pro);
            us_pro.src = user_profile; 
                testify_cnt.appendChild(spn2); 
                    testify_cnt.appendChild(h3)
                        testify_cnt.appendChild(nav);
                                testify_cnt.appendChild(delet);
                                    nav.appendChild(txt_testify); 
                            nav.appendChild(dte);
    cnt.insertAdjacentElement('afterbegin',testify_cnt);
}


Push_data = (event) =>{
    event.preventDefault();

    var Bnk_name = querySelector('#Bname');
        var Accnt_name = querySelector('#Aname');
            var Bnk_number = querySelector('#Bnumber');
                var Unwanted = ['!@#$%^&*()_+=-"'];

    if(!Bnk_name.value){
        err_FLEX();
            err.classList.remove('success');
                err.innerHTML = 'Empty input detected, please include bank name'; 
                    return
    }else if(!Accnt_name.value){
        err_FLEX();
            err.classList.remove('success');
                err.innerHTML = 'Empty input detected, please include account name';
                    return
    }else if(!Bnk_number.value){
        err_FLEX();
            err.classList.remove('success');
                err.innerHTML = 'Empty input detected, please include bank number';
                    return
    }else if(Number(Bnk_name.value)){
        err_FLEX();
            err.classList.remove('success');
                err.innerHTML = `Bank name can\'t be a number "${Bnk_name.value}" is not a bank name. 
                    to avoid this error please kindly check our available bank, chose from it.`; 
                        return  
    }else if(Bnk_name.value.search(/['!@#$-%)^&*(+_"']/) !== -1){
        err_FLEX();
            err.classList.remove('success');
                err.innerHTML = `Unwanted character detected! "${Bnk_name.value}" is not a valid bank name`;
                    return
    }else if(Number(Accnt_name.value)){
        err_FLEX();
            err.classList.remove('success');
                err.innerHTML = `Account name can\'t be a number "${Accnt_name.value}" is not a valid name. 
                    please enter a valid name to avoid error`;
                        return
    }else if(Accnt_name.value.search(/['!@#$-%)^&*(+_"']/) !== -1){
        err_FLEX();
            err.classList.remove('success');
                err.innerHTML = `Unwanted character detected! "${Accnt_name.value}" is not a valid  name`;
                    return
    }else if(!Number(Bnk_number.value)){
        err_FLEX();
            err.classList.remove('success');
                err.innerHTML = `Ivalid bank number "${Bnk_number.value}" is not a valid  number`;
                    return
    }else if(Bnk_number.value.search(/['!@#$-%)^&*(+_"']/) !== -1){
        err_FLEX();
            err.classList.remove('success');
                err.innerHTML = `Unwanted character detected! "${Bnk_number.value}" is not a valid  number`;
                    return
    }else{
        err_FLEX();
            err.innerHTML = 'Push successfully';
                err.classList.add('success');
                    setTimeout(() =>{
                        err.style.setProperty('display','none','important');
                    },3000);
    }
}

copyToClipBoard = () =>{
    let txt = querySelector('.copy_link .ccpy');
    let toaap = querySelector('.copy_msg');
    navigator.clipboard.writeText(txt.innerHTML)
    .then(() =>{
        toaap.style.setProperty('display','flex');
        setTimeout(() =>{
          toaap.style.setProperty('display','none');
        },2000)
    })
    .catch((err) =>{
      toaap.style.setProperty('display','flex');
      toaap.innerHTML = err;
    })
}

for (let x = 0; x < open_cnt.length; x++) {
    open_cnt[x].onclick = () =>{
        Scrol_to_top();
        if(open_[x].innerHTML == 'Retrieve wallet pin'){
            create_your_wallet_pin.style.setProperty('display','flex')
            }if(open_[x].innerHTML == 'Testimonials'){
                testimonials.style.setProperty('display','flex')
                    }if(open_[x].innerHTML == 'Open wallet'){
                        document.querySelector('.wallet_cnt_parkd').style.setProperty('display','flex');
                            }if(open_[x].innerHTML == 'Faqs'){
                                document.querySelector('.frequently_asked_question').style.setProperty('display','flex');
        }if(open_[x].innerHTML == 'Available coins'){
                document.querySelector('.coins_available').style.setProperty('display','flex');
                    }if(open_[x].innerHTML == 'Submit bank details'){
                         document.querySelector('.Bank_details_push').style.setProperty('display','flex');
                            }if(open_[x].innerHTML == 'About us'){
                                 document.querySelector('.PopUpcnt_for_About').style.setProperty('display','flex');
        }if(open_[x].innerHTML == 'Logout'){
            window.location.href=`${__root__2()}/logout.php`;
        }if(open_[x].innerHTML == 'Stock'){
            medium_stock.style.setProperty('display','flex');
        }if(open_[x].innerHTML == 'Me'){
            Loading_Animation_Index();
            document.querySelector('.me_account').style.setProperty('display','flex');
            setTimeout(() =>{
                document.querySelector('.me_account').setAttribute('data-ready','true'); 
            },3000);
            const observer = new MutationObserver((mutations) =>{
                mutations.forEach((mutation) =>{
                    if(mutation.attributeName === 'data-ready' && document.querySelector('.me_account')
                    .getAttribute('data-ready') == 'true'){
                        observer.disconnect();
                        RemoveIndexAnimation();
                        Scrol_to_top();
                    }
                })
            })
            observer.observe(document.querySelector('.me_account'),{attributes: true})
        }if(open_[x].innerHTML == 'Messages'){
            document.querySelector('.messages').style.setProperty('display','flex');
            Scrol_to_top();
        }
        if(open_[x].innerHTML == 'Contact us'){
            document.querySelector('.contact_us').style.setProperty('display','flex');
            Scrol_to_top();
        }
        
    }
}

clo_Me.onclick = () =>{
    document.querySelector('.me_account').classList.add('goBack');
    setTimeout(() =>{
        document.querySelector('.me_account').style.setProperty('display','none');
        document.querySelector('.me_account').classList.remove('goBack');
    },400);
}
thisdotspn.onclick = () =>{
    document.querySelector('.PopUpcnt_for_About').style.setProperty('display','none');
}
closMain.onclick = () =>{
    mAin.style.setProperty('display','none');
}
           
var attri = 'asset/img/icon_mark.png'
for (let x = 0; x < notice.length; x++) {
    notice[x].onclick = () =>{
        inf_yet[x].setAttribute('src',attri);
    }
}

xx_inf.onclick = () =>{
        info_r.style.setProperty('display','flex');
            txt_infor__.innerHTML = `Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Quam nemo fugit aut ut 
            pariatur. Libero quaerat iusto accusantium 
            maiores saepe. Iusto consequatur odit error 
            sunt, illum odio repellendus animi maxime ea 
            magnam vitae nihil expedita numquam neque 
            delectus culpa? Libero voluptates quam magnam non.
            Est nisi fuga provident, culpa debitis aspernatur 
            obcaecati perferendis quia quam optio adipisci quo 
            incidunt consequatur iste dicta tempore voluptate 
            blanditiis eaque enim possimus. Iusto provident ad, 
            delectus harum ullam repudiandae, facilis quasi odio
            odit quos, quibusdam sit vel in magni vero! Harum vitae 
            qui voluptatibus`
}

info_cl.onclick = () =>{
        info_r.style.setProperty('display','flex');
            txt_infor__.innerHTML = `Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Quam nemo fugit aut ut 
            pariatur. Libero quaerat iusto accusantium 
            maiores saepe. Iusto consequatur odit error 
            sunt, illum odio repellendus animi maxime ea 
            magnam vitae nihil expedita numquam neque 
            delectus culpa? Libero voluptates quam magnam non.
            Est nisi fuga provident, culpa debitis aspernatur 
            obcaecati perferendis quia quam optio adipisci quo 
            incidunt consequatur iste dicta tempore voluptate 
            blanditiis eaque enim possimus. Iusto provident ad, 
            delectus harum ullam repudiandae, facilis quasi odio
            odit quos, quibusdam sit vel in magni vero! Harum vitae 
            qui voluptatibus`
}
        // btn_ref.forEach(btn => {
        //     btn.disabled = true
        // });
                clk_cl.onclick = () =>{
                    refplay.classList.add('goBack');
                    setTimeout(() =>{
                        refplay.style.setProperty('display','none');
                        refplay.classList.remove('goBack');
                    },400)
                }
                        openrefplay.onclick = () =>{
                            refplay.style.setProperty('display','flex');
                            task_part.scrollTo(0, 0);
                        }
                            closier.onclick = () =>{
                                me_de_medias.style.setProperty('display','none');
                            }
                                    me_on_mdias.onclick = () =>{
                                        me_de_medias.style.setProperty('display','flex');
                                        task_part.scrollTo(0, 0);
                                    }
      
                for (let x = 0; x < info_bring.length; x++) {
                    info_bring[x].onclick = () =>{
                        info_r.style.setProperty('display','flex');
                    }
                }
var arr = [`Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Quam nemo fugit aut ut 
    pariatur. Libero quaerat iusto accusantium 
    maiores saepe. Iusto consequatur odit error 
    sunt, illum odio repellendus animi maxime ea 
    magnam vitae nihil expedita numquam neque 
    delectus culpa? Libero voluptates quam magnam non.
    Est nisi fuga provident, culpa debitis aspernatur 
    obcaecati perferendis quia quam optio adipisci quo 
    incidunt consequatur iste dicta tempore voluptate 
    blanditiis eaque enim possimus. Iusto provident ad, 
    delectus harum ullam repudiandae, facilis quasi odio
    odit quos, quibusdam sit vel in magni vero! Harum vitae 
    qui voluptatibus`,`Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Quam nemo fugit aut ut 
    pariatur. Libero quaerat iusto accusantium 
    maiores saepe. Iusto consequatur odit error 
    sunt, illum odio repellendus animi maxime ea 
    magnam vitae nihil expedita numquam neque 
    delectus culpa? Libero voluptates quam magnam non.
    Est nisi fuga provident, culpa debitis aspernatur 
    obcaecati perferendis quia quam optio adipisci quo 
    incidunt consequatur iste dicta tempore voluptate 
    blanditiis eaque enim possimus. Iusto provident ad, 
    delectus harum ullam repudiandae, facilis quasi odio
    odit quos, quibusdam sit vel in magni vero! Harum vitae 
    qui voluptatibus`,`Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Quam nemo fugit aut ut 
    pariatur. Libero quaerat iusto accusantium 
    maiores saepe. Iusto consequatur odit error 
    sunt, illum odio repellendus animi maxime ea 
    magnam vitae nihil expedita numquam neque 
    delectus culpa? Libero voluptates quam magnam non.
    Est nisi fuga provident, culpa debitis aspernatur 
    obcaecati perferendis quia quam optio adipisci quo 
    incidunt consequatur iste dicta tempore voluptate 
    blanditiis eaque enim possimus. Iusto provident ad, 
    delectus harum ullam repudiandae, facilis quasi odio
    odit quos, quibusdam sit vel in magni vero! Harum vitae 
    qui voluptatibus`,`Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Quam nemo fugit aut ut 
    pariatur. Libero quaerat iusto accusantium 
    maiores saepe. Iusto consequatur odit error 
    sunt, illum odio repellendus animi maxime ea 
    magnam vitae nihil expedita numquam neque 
    delectus culpa? Libero voluptates quam magnam non.
    Est nisi fuga provident, culpa debitis aspernatur 
    obcaecati perferendis quia quam optio adipisci quo 
    incidunt consequatur iste dicta tempore voluptate 
    blanditiis eaque enim possimus. Iusto provident ad, 
    delectus harum ullam repudiandae, facilis quasi odio
    odit quos, quibusdam sit vel in magni vero! Harum vitae 
    qui voluptatibus`,`Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Quam nemo fugit aut ut 
    pariatur. Libero quaerat iusto accusantium 
    maiores saepe. Iusto consequatur odit error 
    sunt, illum odio repellendus animi maxime ea 
    magnam vitae nihil expedita numquam neque 
    delectus culpa? Libero voluptates quam magnam non.
    Est nisi fuga provident, culpa debitis aspernatur 
    obcaecati perferendis quia quam optio adipisci quo 
    incidunt consequatur iste dicta tempore voluptate 
    blanditiis eaque enim possimus. Iusto provident ad, 
    delectus harum ullam repudiandae, facilis quasi odio
    odit quos, quibusdam sit vel in magni vero! Harum vitae 
    qui voluptatibus`,`Lorem ipsum dolor, sit amet consectetur 
    adipisicing elit. Quam nemo fugit aut ut 
    pariatur. Libero quaerat iusto accusantium 
    maiores saepe. Iusto consequatur odit error 
    sunt, illum odio repellendus animi maxime ea 
    magnam vitae nihil expedita numquam neque 
    delectus culpa? Libero voluptates quam magnam non.
    Est nisi fuga provident, culpa debitis aspernatur 
    obcaecati perferendis quia quam optio adipisci quo 
    incidunt consequatur iste dicta tempore voluptate 
    blanditiis eaque enim possimus. Iusto provident ad, 
    delectus harum ullam repudiandae, facilis quasi odio
    odit quos, quibusdam sit vel in magni vero! Harum vitae 
    qui voluptatibus`];


infor_ff.onclick = () =>{
        info_r.classList.add('goBack')
            setTimeout(() =>{
                info_r.style.setProperty('display','none');
                info_r.classList.remove('goBack')
            },400)
}


for (let x = 0; x < close_.length; x++) {
    close_[x].onclick = () =>{
    task_cnt.classList.add('callback');
    document.querySelector('.messages').classList.add('callback');
    Referals_cnt.classList.add('callback');
    engage.classList.add('callback');
    shares_task.classList.add('callback');
    setTimeout(() =>{
        task_cnt.style.setProperty('display','none');
        document.querySelector('.messages').classList.remove('callback');
        document.querySelector('.messages').style.setProperty('display','none');
        task_cnt.classList.remove('callback');
        Referals_cnt.style.setProperty('display','none');
        Referals_cnt.classList.remove('callback');
        shares_task.style.setProperty('display','none');
        engage.style.setProperty('display','none');
        engage.classList.remove('callback');
        shares_task.classList.remove('callback');
    },400)
        
    }
}





var pw = nt_cnt.clientWidth;
var ph = nt_cnt.clientHeight;

// create_Bubble();

for (let x = 0; x < alltoolsCnt.length; x++) {
        all_Tools[x].setAttribute('txt',all_Tools[x].innerHTML);
            all_Tools[x].setAttribute('txt_infor',arr[x])
                txt_infor__.innerHTML = all_Tools[x].getAttribute('txt_infor');
                    alltoolsCnt[x].onclick = () =>{
                        if(all_Tools[x].getAttribute('txt') == 'Following'){
                            task_cnt.style.setProperty('display','flex');
                        }
                            if(all_Tools[x].getAttribute('txt') == 'Engagement'){
                                engage.style.setProperty('display','flex');
                        }
                                    if(all_Tools[x].getAttribute('txt') == 'Referral'){
                                         Referals_cnt.style.setProperty('display','flex');
                        }
                                            if(all_Tools[x].getAttribute('txt') == 'Shares'){
                                                    shares_task.style.setProperty('display','flex');
                        }
                                                        task_part.scrollTo(0, 0);
                    }
}




