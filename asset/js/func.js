function querySelector(x){
    return document.querySelector(x);
}
function querySelectorAll(x){
    return document.querySelectorAll(x);
}
function getElementById(x){
    return document.getElementById(x);
}
function color(){
    return Math.floor(Math.random() * 255);
}
function createElement(x){
    return document.createElement(x);
}
function newElement(x){
    return document.createElement(x);
}

function window_onload(){
    var wind_load = querySelectorAll('.wind_load nav');
    for (let x = 0; x < wind_load.length; x++) {
        wind_load[x].style.setProperty('display','flex');
    }
}
function remove_window_onload(){
    var wind_load = querySelectorAll('.wind_load nav');
    for (let x = 0; x < wind_load.length; x++) {
        setTimeout(() =>{
            wind_load[x].style.setProperty('display','none');
            wind_load[x].classList.add('aniout');
        },1000)
    }
}
function Loading_ani(){
    var bdy = document.body;
    var cr1 = createElement('div');
    cr1.className = 'loarder_animationo';
    var cr2 = createElement('div');
    cr2.className = 'child_loader';
    cr1.append(cr2);
    bdy.classList.add('rel_tive');
    bdy.insertAdjacentElement('afterbegin',cr1);
}
function Remove_ani(){
    var bdy = document.body;
    var cr1 = querySelector('.loarder_animationo');
    setTimeout(() =>{
        cr1.remove();
        bdy.classList.remove('rel_tive');
    },1000)
}


function create_Bubble(){
    setInterval(() =>{
        let bcolor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
        var buble = createElement('span');
        buble.className = 'bubbles';
        var bbuble = querySelectorAll('.bubbles');
        nt_cnt.append(buble);
    
        for (let x = 0; x < bbuble.length; x++) {
            var bubleW = bbuble[x].clientWidth;
            var bubleH = bbuble[x].clientHeight;
    
            var cx = pw - bubleW;
            var ch = ph - bubleH;
    
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
}

function Scrol_to_top(){
    task_part.scrollTo(0, 0);
}
function walletscroll(){
    wallet.scrollTo(0, 0);
}
function err_FLEX(){
    err.style.setProperty('display','flex');
}

function Wallet_first_menu(){
    var values = querySelectorAll('.value_s');
    for (let x = 0; x < item_slut.length; x++){
        item_slut[x].onclick = () =>{
            var val = values[x];
            if(val.innerHTML == 'History'){
                document.querySelector('.History').style.setProperty('display','flex');
                Scrol_to_top();
            }if(val.innerHTML == 'Withdraw'){
                withdrawals_request.style.setProperty('display','flex');
                Scrol_to_top();
                setTimeout(() =>{
                    withdrawals_request.classList.add('return');
                },9000);
                setTimeout(() =>{
                    withdrawals_request.style.setProperty('display','none');
                },10000);
            }if(val.innerHTML == 'Transfer'){
                transfar__cc.style.setProperty('display','flex');
                Scrol_to_top();
            }
        }
    }
}

function Close_Tabs(){
    dyrwds.classList.add('return');
        dlyCbo.classList.add('return');
            mylvl.classList.add('return');
                store.classList.add('return');
                    market.classList.add('return');
    Star_pad.style.setProperty('display','none');
    setTimeout(() =>{
            dyrwds.style.setProperty('display','none');
                dlyCbo.style.setProperty('display','none');
                    mylvl.style.setProperty('display','none');
                        store.style.setProperty('display','none');
                            market.style.setProperty('display','none');
        dyrwds.classList.remove('return');
                dlyCbo.classList.remove('return');
                    mylvl.classList.remove('return');
                        store.classList.remove('return');
        market.classList.remove('return');
    },400)
}

function RewardLocked(cnt){
    let attri = 'asset/img/3d-casual-life-warning-sign.gif';
    a = createElement('div');
    a.className = 'tocover';
        b = createElement('nav');
            c = createElement('span');
                d = createElement('img');
                    e = createElement('h4');
                b.appendChild(c);
            c.appendChild(d)
        b.appendChild(e);
    a.appendChild(b);
    d.setAttribute('src',attri);
    e.textContent = 'Reward Is Locked';
    a.onclick = () =>{
        a.remove();
    }
    cnt.appendChild(a);
}

function PupOutRewards(param){
    let attri = 'asset/img/icons8-coins-64 (5).png';
    let go = 0;
    let set = setInterval(() =>{
        audio.play();
        go++
        a = createElement('span');
            a.className = 'PopOutRewards';
                b = createElement('img');
                    b.setAttribute('src',attri);
                        a.appendChild(b);
                    let art = querySelectorAll('.PopOutRewards');
        for (let i = 0; i < art.length; i++){
            setTimeout(() =>{
                art[i].remove();
            },1300);
        }
        cnt_daily_iner.appendChild(a);
        balnce.innerHTML++
        if(go == param){
            clearInterval(set);
            a.remove();
            SaveCoinB(param);
            audio.pause();
        }
    },70);
}

function __root__2(){
    return document.querySelector('.rrt_').getAttribute('url');
}

function PupOutRewards2(param){
    let attri = 'asset/img/icons8-coins-64 (5).png';
    let go = 0;
    let set = setInterval(() =>{
        go++
        a = createElement('span');
            a.className = 'PopOutRewards';
                b = createElement('img');
                    b.setAttribute('src',attri);
                        a.appendChild(b);
                    let art = querySelectorAll('.PopOutRewards');
        for (let i = 0; i < art.length; i++){
            setTimeout(() =>{
                art[i].remove();
            },1300);
        }
        cntCombo.appendChild(a);
        balnce.innerHTML++
        if(go == param){
            clearInterval(set);
            a.remove();
            SaveCoinB(param);
        }
    },70);
}

function LevelUp(parameter){
    let start = 0;
    let strImgWrap = createElement('span');
        let strImg = createElement('img');
            strImgWrap.appendChild(strImg);
                let ImgAttri = 'asset/img/str.gif';
            strImg.setAttribute('src',ImgAttri);
    let set = setInterval(() =>{
        start++
        let e = createElement('span');
            e.className = 'fas fa-star  str_Star';
        Home.appendChild(e);

        let ee = querySelectorAll('.str_Star');
        for (let x = 0; x < ee.length; x++){
            setTimeout(() =>{
                ee[x].remove();
                auk.play();
            },1000);
        }

        if(start == parameter){
            clearInterval(set);
            setTimeout(() => {
                e.remove();
                strCnt.innerHTML = '';
                strCnt.appendChild(strImgWrap);
                for (let x = 0; x < parameter; x++) {
                    let str = createElement('span');
                         let strIn = createElement('i');
                             let strInIner = createElement('img');
                         strIn.appendChild(strInIner);
                     str.appendChild(strIn);
                         let Attri = 'asset/img/str.gif';
                             strInIner.setAttribute('src',Attri);
                             strCNT.insertAdjacentElement('afterbegin',str);
                                let lenCount = strCNT.children.length;
                                Count_len.innerHTML = `${lenCount} Own Stars`;
                    if(lenCount == 16){
                        Count_len.innerHTML = `Stars Completed`;
                    }
                }
            },1000);

            setTimeout(() => {
                strImgWrap.remove();
                    strN = createElement('i');
                        strN.className = 'fas fa-star';
                            strCnt.appendChild(strN);
            },4000);
        }
    },100);
}


function SaveCoinB(data){
    let bal = Number(QueenYJ.Coinballance) + Number(data);

    QueenYJ.Coinballance = bal;
  localStorage.setItem('QueenyBot', JSON.stringify(QueenYJ))
}

function Success_msg(err_txt){
    let err = querySelector('.erro_txt_msg_fetch');
        err.style.setProperty('display','flex');
            err.innerHTML = err_txt;
                setTimeout(() =>{
                    err.classList.add('goBack');

                    setTimeout(() =>{
                        err.classList.remove('goBack');
                        err.style.setProperty('display','none','important');
                    },400);
                },2000);
    err.classList.add('success');
}

function Loading_Animation_Index(){
    const cnt = document.createElement('DIV');
    cnt.className = 'LoAder_index';
    const bdy = document.body;
    bdy.classList.add('toAbbb');

    for (let x = 0; x < 4; x++) {
        const circula_loader = createElement('SPAN');
        circula_loader.className = 'dot';
        cnt.appendChild(circula_loader);
    }

    bdy.insertAdjacentElement('afterBegin',cnt);
}
function RemoveIndexAnimation(){
    const LoAder_index = document.querySelector('.LoAder_index');
    const bdy = document.body;
    LoAder_index.remove();
    bdy.classList.remove('toAbbb');
}

