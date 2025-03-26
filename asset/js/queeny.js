let Home = querySelector('.Home');
    let Friend = querySelector('.Friends');
        let Hclk = querySelectorAll('.Hoclk');
            let toolTXT = querySelectorAll('.tools_bars p');
                let frn = querySelectorAll('.Frnclk');
                    let tasdk = querySelectorAll('.taskclk');
                        let navigate = querySelectorAll('.navigator__');
                            let Task = querySelector('.Task');
                                let Linkwallet = querySelector('.Linkwallet');
let Lwlt = querySelectorAll('.Linckl');
    let lvclk = querySelector('.lgW--- p');
        let mylvl = querySelector('.levels___X_XX_X_X');
            let cllvl = querySelector('.h_X_X_X_x span');
                let dyrwds = querySelector('.daily_rewards');
                    let clsDly = querySelector('.daily_wra_clos_Plus');
                        let smOpntxt = querySelectorAll('.wrap_spn--x-x-x p');
                            let smOpn = querySelectorAll('.wrap_spn--x-x-x');
let dlyCbo = querySelector('.daily_combo');
    let cmboCl = querySelector('.combo_hh_r span');
        let market = querySelector('.Market_sell');
            let clmkt = querySelector('.mar_ket_hhr .clk_mmkt');
                let store = querySelector('.Store');
                    let clstr = querySelector('.sh_hhdr .clstr');
                        let opnStr = querySelector('.mar_ket_hhr .opnStr');
let opnmtk = querySelector('.sh_hhdr .opnMkt');
    let bot = querySelector('.bot_avvrap-x-x--x');
        let balnce = querySelector('.balnce p');
            let dailyReward_wrap = querySelectorAll('.daily_wrap_f__');
                let daily_lock = querySelectorAll('.daily_wrap_f__  .daily_lock');
                    let daily_open = querySelectorAll('.daily_wrap_f__ .daily_open');
let cnt_daily_rewards = querySelector('.daily_rewards .dail_iner .wrap_levels');
    let cnt_daily_iner = querySelector('.daily_rewards .dail_iner');
        let dailyAmount = querySelectorAll('.daily_wrap_f__ .img_2_');
            let navigateNav = querySelectorAll('.navigator__ tools_bars');
                let dailyT = querySelector('.Daily_R .Dail_T');
                    let audio =  querySelector('.Qinx-x-x-x--x--x--x audio');
                        let dailyCombo = querySelectorAll('.wrap_cmbo');
                            let comboClaim = querySelectorAll('.wrap_cmbo .img32__');
let comboLock = querySelectorAll('.wrap_cmbo .combo_lock');
    let comboOpen = querySelectorAll('.wrap_cmbo .combo_open');
        let cntCombo = querySelector('.daily_combo .dail_iner .wrap_levels');
            let levelStar = querySelectorAll('.level_items');
                let levelC = querySelectorAll('.level_items .mg__ p');
                    let strCnt = querySelector('.__str__');
                        let lvlLock = querySelectorAll('.level_items .level_lock');
let lvlOpen = querySelectorAll('.level_items .level_open');
    let LvL_s = querySelectorAll('.wrap_levels .LvL_s');






// LEVEL UP CODE HEREEEEEEEEEEEEEEEEEEEE
    let lvl_1 = 5000000;
        let lvl_2 = lvl_1 * 2;
            let lvl_3 = lvl_2 * 2;
                let lvl_4 = lvl_3 * 2;
                    let lvl_5 = lvl_4 * 2;
                let lvl_6 = lvl_5 * 2;
            let lvl_7 = lvl_6 * 2;
        let lvl_8 = lvl_7 * 2;
            let lvl_9 = lvl_8 * 2;
                let lvl_10 = lvl_9 * 2;
                    let l_1tru = balnce.innerHTML >= lvl_1;
                        let l_2tru = balnce.innerHTML >= lvl_2;
                            let l_3tru = balnce.innerHTML >= lvl_3;
                        let l_4tru = balnce.innerHTML >= lvl_4;
                    let l_5tru = balnce.innerHTML >= lvl_5;
                let l_6tru = balnce.innerHTML >= lvl_6;
            let l_7tru = balnce.innerHTML >= lvl_7;
        let l_8tru = balnce.innerHTML >= lvl_8;
            let l_9tru = balnce.innerHTML >= lvl_9;
                let l_10 = balnce.innerHTML >= lvl_10;
    let StrCnt = [1,1,1,1,1,2,2,2,2,3];
    for (let x = 0; x < levelStar.length; x++){
        levelC[x].setAttribute('dataInt',StrCnt[x]);
        if(l_1tru){
            lvlLock[x].style.setProperty('display','none');
            lvlOpen[x].style.setProperty('display','flex');
            
        }
        const Star = () =>{
            if(LvL_s[x].textContent == 'Level 1'){
                if(!l_1tru){
                    return
                }
            }
            LevelUp(levelC[x].getAttribute('dataInt'));
        }

        levelStar[x].addEventListener('click', Star);
    }
// COUNTDOWN TIMER CODE HEREEEEEEEEEEEEEEE
    function CountDownTimer(){
        const Endtime = new Date().setHours(24, 0, 0, 0);

        const Timer = setInterval(() =>{
            const Now = new Date().getTime();
            const Timleft = Endtime - Now;

            if(Timleft <= 0){
                clearInterval(Timer);
                CountDownTimer();
            }else{
                const hours = Math.floor((Timleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((Timleft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((Timleft % (1000 * 60)) / 1000);

                document.querySelector('.Dail_T').innerHTML = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

                document.querySelector('.Dail_C').innerHTML = 
                `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            }
        })
    }
    CountDownTimer();
// DAILY REWARDS CODE HEREEEEEEEEEEEEEEEEEEEEEEEEE
    let dayCount = 0
    let Amount = [100,90,150,110,50,100,900];
    for (let x = 0; x < dailyReward_wrap.length; x++){
        dailyAmount[x].setAttribute('data',Amount[x]);
        dayCount++
        dailyReward_wrap[x].setAttribute('day',dayCount);
        let day = new Date().getDay();

        let Istoday = day == dailyReward_wrap[x].getAttribute('day');
        if(!Istoday){
            dailyReward_wrap[x].disabled = true;
        }

        if(Istoday){
            daily_lock[x].style.setProperty('display','none');
            daily_open[x].style.setProperty('display','flex');
            daily_open[x].classList.add('fa-shake');
        }
        
        dailyReward_wrap[x].onclick = () =>{
            if(!Istoday){
                dailyReward_wrap[x].disabled = true;
                RewardLocked();
                return
            }
            PupOutRewards(dailyAmount[x].getAttribute('data'));
            dailyReward_wrap[x].disabled = true;
        }
    }
// DAILY COMBO CODE HEREEEEEEEEEEEEEEEEEEEEEEEEEEEE
let AmountCombo = [371,110,151,111,59,103,1000];
let Count = 0
for (let x = 0; x < dailyCombo.length; x++) {
    Count++;
    dailyCombo[x].setAttribute('day',Count);
    comboClaim[x].setAttribute('data',AmountCombo[x]);

    let day = new Date().getDay();
    let Istoday = day == dailyCombo[x].getAttribute('day');

    if(!Istoday){
        dailyCombo[x].disabled = true;
    }

    if(Istoday){
        comboLock[x].style.setProperty('display','none');
        comboOpen[x].style.setProperty('display','flex');
        comboOpen[x].classList.add('fa-shake');
    }

    const Shop = () =>{
        if(!Istoday){
            dailyCombo[x].disabled = true;
            return
        }

        PupOutRewards2(comboClaim[x].getAttribute('data'));
        dailyCombo[x].disabled = true;
    }

    dailyCombo[x].addEventListener('click', Shop)
}

let QueenYJ = JSON.parse(localStorage.getItem('QueenyBot'));
let QueenyTap = new Quenny(QueenYJ.Tap, QueenYJ.Ballance, QueenYJ.TapCount);
// TAPPING BOT

let TapFromStorage = JSON.parse(localStorage.getItem('QueenyBot'));
balnce.innerHTML = QueenyTap.UpdateBlnce();


const tap = (e) =>{
    Close_Tabs();
    const ParTicleCount = QueenYJ.TapCount;
    for (let x = 0; x < ParTicleCount; x++) {
        const Particle = createElement('h4');
        Particle.className = 'TapPopOut';
        Particle.innerHTML = TapFromStorage.Tap + '+';
        bot.appendChild(Particle);


        let ey = Particle.clientHeight;
        let ex = Particle.clientWidth;
        let botY = bot.clientHeight;
        let botX = bot.clientWidth;

        setTimeout(() =>{
            let Xx = botX - ex;
            let Yy = botY - ey;

            let posX = Math.floor(Math.random() * Xx) - 5;
            let posY = Math.floor(Math.random() * Yy) - 70;
            Particle.style.left = posX + 'px';
            Particle.style.right = posY + 'px';
        },100);

        setTimeout(() =>{
            Particle.remove();
        },1500);
        SaveCoinB(TapFromStorage.Tap);
        balnce.innerHTML = QueenyTap.UpdateBlnce();
    }
}

bot.addEventListener('click',tap);
window.addEventListener('keydown', (e) =>{
    if(e.key == " "){
        tap()
    }
})
window.addEventListener('keydown', (e) =>{
    if(e.key == "Escape"){
        Close_Tabs();
    }
})


function SaveCoinB(data){
    let bal = Number(QueenYJ.Coinballance) + Number(data);

    QueenYJ.Coinballance = bal;
  localStorage.setItem('QueenyBot', JSON.stringify(QueenYJ))
}


clstr.onclick = () =>{
    store.classList.add('return');
    setTimeout(() =>{
        store.style.setProperty('display','none');
        store.classList.remove('return');
    },400)
}
opnmtk.onclick = () =>{
    store.style.setProperty('display','none');
    market.style.setProperty('display','flex');
}
opnStr.onclick = () =>{
    store.style.setProperty('display','flex');
    market.style.setProperty('display','none');
}
for (let x = 0; x < smOpn.length; x++) {
    smOpn[x].onclick = () =>{
        if(smOpntxt[x].innerHTML == 'Daily Rwards'){
            dyrwds.style.setProperty('display','flex');
            dlyCbo.style.setProperty('display','none');
            mylvl.style.setProperty('display','none');
            market.style.setProperty('display','none');
            store.style.setProperty('display','none');
        }
        if(smOpntxt[x].innerHTML == 'Daily Combo'){
            dlyCbo.style.setProperty('display','flex');
            mylvl.style.setProperty('display','none');
            dyrwds.style.setProperty('display','none');
            market.style.setProperty('display','none');
            store.style.setProperty('display','none');
        }
        if(smOpntxt[x].innerHTML == 'Daily Sell'){
            market.style.setProperty('display','flex');
            dlyCbo.style.setProperty('display','none');
            mylvl.style.setProperty('display','none');
            dyrwds.style.setProperty('display','none');
            store.style.setProperty('display','none');
        }
    }
}
clmkt.onclick = () =>{
    market.classList.add('return');
    setTimeout(() =>{
        market.style.setProperty('display','none');
        market.classList.remove('return');
    },400)
}
cmboCl.onclick = () =>{
    dlyCbo.classList.add('return');
    setTimeout(() =>{
        dlyCbo.style.setProperty('display','none');
        dlyCbo.classList.remove('return');
    },400)
}
lvclk.onclick = () =>{
    mylvl.style.setProperty('display','flex');
    dyrwds.style.setProperty('display','none');
    dlyCbo.style.setProperty('display','none');
    market.style.setProperty('display','none');
    store.style.setProperty('display','none');
}   
cllvl.onclick = () =>{
    mylvl.classList.add('return');
    setTimeout(() =>{
        mylvl.style.setProperty('display','none');
            mylvl.classList.remove('return');
    },400)
}
clsDly.onclick = () =>{
    dyrwds.classList.add('return');
    setTimeout(() =>{
        dyrwds.style.setProperty('display','none');
        dyrwds.classList.remove('return');
    },400)
}


for (let x = 0; x < navigate.length; x++){
    Hclk[x].onclick = () =>{
        Home.style.setProperty('display','flex');
        Friend.style.setProperty('display','none');
        Linkwallet.style.setProperty('display','none');
        Task.style.setProperty('display','none');
    }
    frn[x].onclick = () =>{
        Friend.style.setProperty('display','flex');
        Task.style.setProperty('display','none');
        Linkwallet.style.setProperty('display','none');
        Home.style.setProperty('display','none');
    }
    tasdk[x].onclick = () =>{
        Task.style.setProperty('display','flex');
        Friend.style.setProperty('display','none');
        Linkwallet.style.setProperty('display','none');
        Home.style.setProperty('display','none');
    }
    Lwlt[x].onclick = () =>{
        Linkwallet.style.setProperty('display','flex');
        Friend.style.setProperty('display','none');
        Home.style.setProperty('display','none');
        Task.style.setProperty('display','none');
    }
}
    