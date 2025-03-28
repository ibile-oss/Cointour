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
function __numbers__(){
    opts.forEach((otp) =>{
        otp.onclick = () =>{
            if(inputt.value.length > 4){
                btnsGo.disabled = false;
            }
            if(inputt.value.length > 5){
                return;
            }
            inputt.value = inputt.value + otp.innerHTML
        }
    })
}
function __alfabets__(){
    var alfabets = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
    change_cnt.onclick = () =>{
        if(change_cnt.innerHTML == 'abc'){
            toUper.style.display = 'flex';
            change_cnt.innerHTML = '123';
            cncl.classList.add('add_active');
            change_cnt.classList.add('add_active');
            for (let x = 0; x < tonone.length; x++) {
                tonone[x].style.setProperty('display','none');
            }
            for (let x = 0; x < alfabets.length; x++){
                var cre = createElement('i');
                cre.className = 'alfas';
                cre.innerHTML = alfabets[x];
                var crR = querySelectorAll('.alfas');
                for (let i = 0; i < crR.length; i++){
                    crR[i].onclick = () =>{
                        if(inputt.value.length > 4){
                            btnsGo.disabled = false;
                        }
                        if(inputt.value.length > 5){
                            return;
                        }
                        inputt.value = inputt.value + crR[i].innerHTML
                    }
                    toUper.onclick = () =>{
                        var alfas = querySelectorAll('.alfas');
                        if(toUper.innerHTML == 'Upc'){
                            toUper.innerHTML = 'Lwc';
                            for (let x = 0; x < alfas.length; x++) {
                                alfas[x].innerHTML = alfas[x].innerHTML.toUpperCase();
    
                            }
                        }else{
                            toUper.innerHTML = 'Upc';
                            for (let x = 0; x < alfas.length; x++) {
                                alfas[x].innerHTML = alfas[x].innerHTML.toLowerCase();
                            }
                        }
                    }
                }
                cnt_kkm.insertAdjacentElement('afterbegin',cre);
            }
        }else{
            toUper.style.display = 'none';
            cncl.classList.remove('add_active');
            change_cnt.classList.remove('add_active');
            change_cnt.innerHTML = 'abc';
            var ai = querySelectorAll('.alfas');
            for (let x = 0; x < ai.length; x++){
                ai[x].remove();
            }
            for (let x = 0; x < tonone.length; x++) {
                tonone[x].style.setProperty('display','flex');
            }
        }
    }
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
function err_FLEX(){
    err.style.setProperty('display','flex');
}

function Wallet_first_menu(){
    var values = querySelectorAll('.value_s');
    for (let x = 0; x < item_slut.length; x++) {
        item_slut[x].onclick = () =>{
            var val = values[x];
            if(val.innerHTML == 'History'){
                document.querySelector('.History').style.setProperty('display','flex');
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

function RewardLocked(){
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
    cnt_daily_rewards.appendChild(a);
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

function PurChaseAmnt(AmPlus, AmMinus){
    let a = createElement('div');
            let ab = createElement('div');
        let b = createElement('nav');
            let c = createElement('div');
                let e = createElement('span');
                    let f = createElement('nav');
                        let g = createElement('img');
                    ab.appendChild(b);
                b.appendChild(e);
            ab.appendChild(c);
        c.appendChild(f);
    f.appendChild(g);
            a.className = 'aElement';
                b.className = 'AMnutwrap';
                    let strt = 0;
                        c.className = 'imgtowrap';
                            let bot = 'asset/img/Bot_.png';
                        g.setAttribute('src',bot);
                    e.innerHTML = strt;
            ab.className = 'wrapper_Purchased';
            a.appendChild(ab);
        Friend.appendChild(a);
        g.classList.add('tuptle');
    let set = setInterval(() =>{
        strt++
        AmMinus--;
        e.innerHTML = '+' + strt;
        balnce.innerHTML++
        let h = createElement('span');
            h.className = 'coin_toPlus';
                let i = createElement('i');
                    let img = createElement('img');
                let src = 'asset/img/9382196.png';
            img.setAttribute('src',src);
        i.appendChild(img);
            h.appendChild(i);
                ab.appendChild(h);

            let el = querySelectorAll('.coin_toPlus');
            for (let x = 0; x < el.length; x++){
                setTimeout(() =>{
                    el[x].remove();
                },400);
            }
        if(strt == AmPlus){
            clearInterval(set);
            g.classList.remove('tuptle');
            SaveCoinB(AmPlus);
            a.classList.add('return');
            setTimeout(() =>{
                a.remove();
                a.classList.remove('return');
            },400);
        }
    },20);
}

function SaveCoinB(data){
    let bal = Number(QueenYJ.Coinballance) + Number(data);

    QueenYJ.Coinballance = bal;
  localStorage.setItem('QueenyBot', JSON.stringify(QueenYJ))
}