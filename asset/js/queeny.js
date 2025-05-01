
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
    let cnt_daily_combo = querySelector('.daily_combo .dail_iner .wrap_levels');
    let cnt_daily_iner = querySelector('.daily_rewards .dail_iner');
        let dailyAmount = querySelectorAll('.daily_wrap_f__ .img_2_');
            let navigateNav = querySelectorAll('.navigator__ .tools_bars');
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
        let auk = querySelector('.audii');
            let Star_pad = querySelector('.Star_pad');
                let _js_slc = querySelector('._js_slc');
                    let clsSTR = querySelector('._2____');
                        let strCNT = querySelector('.____cnt');
                            let Count_len = querySelector('.Count_len');
                                let __coin_purchase = querySelectorAll('.__coin_purchase');
let amnt = querySelectorAll('.wrp__arr .Amnt');
    let txtDailyRewards = querySelectorAll('.wrap_cmbo .img32__ p');
    let txtDailycombo = querySelectorAll('.daily_wrap_f__ .img_2_ p');
        let uid = querySelector('.bdy').getAttribute('uid');
            let unme = querySelector('.bdy').getAttribute('unme');
                let uwald = querySelector('.bdy').getAttribute('uwald');
                    let ubal = querySelector('.ball_cnce').getAttribute('ubal');
                        let claim_txt = querySelectorAll('.__coin_purchase p');
let taskCnt = querySelectorAll('.task_body__X__X');
    let targetTask = querySelectorAll('.task_body__X__X .item_spa_x_xx');
        let claimTask = querySelectorAll('.task_body__X__X .coin_claim');
            let claimTaskTxt = querySelectorAll('.task_body__X__X .coin_claim p');
                let txtTaskTo = querySelectorAll('.item_spa_x_xx p');



             



// window.addEventListener("load", function (){
//    try{ 
//         fetch(`${__RUT__()}/asset/apis/general_req/`, { 
//             method: "POST",
//             headers:{'Content-type':'application/x-www-form-urlencoded'}, 
//             body:'check_time=' +  JSON.stringify({uid})})
//             .then(response => response.json())
//             .then(data => {
//                 if (data && !isNaN(data.timestamp)){
//                     const now = new Date().getTime();
//                     const elapsedTime = now - data.timestamp;

//                     // const countdownDuration = 24 * 60 * 60 * 1000; // 24 hours
//                     const countdownDuration = 5 * 60 * 1000;
//                     if (elapsedTime >= countdownDuration){
//                         // Re-enable the button if 24 hours passed
//                         console.log(data.timestamp, 'now ' + countdownDuration);
//                         console.log(data.timestamp, 'now ' + elapsedTime);
//                         fetch(`${__RUT__()}/asset/apis/general_req/`,{
//                             method: "POST",
//                             headers: { "Content-Type": "application/x-www-form-urlencoded" },
//                             body:'clearit=' + JSON.stringify({uid}),
//                         })
//                         .then(response => response.text())
//                         .then(data => {
//                             console.log(data);
                            
//                         });
//                     }{
//                         console.log(data.timestamp, 'now ' + elapsedTime);
//                         console.log(data.timestamp, 'now ' + countdownDuration);
//                     }
//                 }
//             });
//         }catch(error){
//             console.error(error);
//         }

// });

function setcount() {
    try {
        fetch(`${__RUT__()}/asset/apis/general_req/`, { 
            method: "POST",
            headers: {'Content-type': 'application/x-www-form-urlencoded'},
            body: 'check_time=' + JSON.stringify({ uid })
        })
        .then(response => response.json())
        .then(data => {
            if (data && !isNaN(data.timestamp)) {
                // Get the clicked time
                const clickedTime = data.timestamp * 1000; // Convert to milliseconds
                // console.log("Clicked Time:", new Date(clickedTime));

                // Calculate enableTime for the same time tomorrow
                const clickedDate = new Date(clickedTime);
                const enableTime = new Date(clickedDate);
                enableTime.setDate(clickedDate.getDate() + 1); // Move to the next day
                // console.log("Enable Time (Same Time Tomorrow):", enableTime);

                // Start the countdown
                starcount(enableTime.getTime());
            }
        });
    } catch (error) {
        console.error(error);
    }
}
function starcount(enableTime) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        if (now >= enableTime) {
            console.log("Enable Time Reached:", new Date(enableTime));
            fetch(`${__RUT__()}/asset/apis/general_req/`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: 'clearit=' + JSON.stringify({ uid })
            })
            .then(response => response.text())
            .then(data => {
                console.log("Clear Response:", data);
                clearInterval(interval);
            });
        } else {
            // console.log("Waiting... Current Time:", new Date(now));
        }
    }, 1000); // Check every second
}
setInterval(setcount, 5000);


let taskDone = {
    task1:false,
    task2:false,
    task3:false,
    task4:false,
    task5:false
}
if(localStorage.getItem('TaskDone') == null){
    localStorage.setItem('TaskDone', JSON.stringify(taskDone));
}
class taskingMode{
    constructor(t1, t2, t3, t4, t5,){
        this.task1 = t1;
        this.task2 = t2;
        this.task3 = t3;
        this.task4 = t4;
        this.task5 = t5;
    }
}

function Awarding_Info(){
    let cre1 = createElement('div');
    cre1.className = 'cre1';
    b = createElement('nav');
    c = createElement('img');
    c.src = 'asset/img/icons8-high-priority-94.png';
        let txt = createElement('span');
            txt.innerHTML = `Note That All Task Is Being Captured When Done!`;
                let btn = createElement('button');
                    btn.innerHTML = 'Got It';
    let tx2 = createElement('span');
        tx2.innerHTML = 'For Confirmation';
            let txt3 = createElement('span');
                txt3.innerHTML = 'Avoid Task Esc';

    btn.onclick = () =>{
        cre1.remove();
    }
    if(cre1){
        document.addEventListener('click',function(e){
            if(e.target.className == 'cre1'){
                return;
            }else if(e.target.className == 'coin_claim'){
                return;
            }else if(e.target.className == 'tG'){
                return;
            }else if(e.target.parentElement == 'cre1'){
                return;
            }else if(e.target.parentElement.parentElement == 'cre1'){
                return;
            }
            cre1.remove();
        })
    }
    b.appendChild(c);
    cre1.appendChild(b)
    cre1.appendChild(txt);
    cre1.appendChild(tx2);
    cre1.appendChild(txt3);
    cre1.appendChild(btn);
    Task.appendChild(cre1);
}
let tasking = JSON.parse(localStorage.getItem('TaskDone'));
let tasKk = new taskingMode(tasking.task1, tasking.task2, 
    tasking.task3,tasking.task4,tasking.task5);

function Awarding_Task(amount,taskIn){
    let cre1 = createElement('div');
    cre1.className = 'cre1';
    b = createElement('nav');
    c = createElement('img');
    c.src = 'asset/img/9382196.png';
        let txt = createElement('span');
            txt.innerHTML = `You\'ve Successfully Claimed ${amount} Coins For Joining Queeny`;
                let btn = createElement('button');
                    btn.innerHTML = 'Got It';

    btn.onclick = () =>{
        cre1.remove();
    }
    document.addEventListener('click',function(e){
        if(e.target.className == 'cre1'){
            return;
        }else if(e.target.className == 'coin_claim'){
            return;
        }else if(e.target.className == 'tG'){
            return;
        }else if(e.target.parentElement.parentElement == 'cre1'){
            return;
        }
        cre1.remove();
    })
    b.appendChild(c);
    cre1.appendChild(b)
    cre1.appendChild(txt);
    cre1.appendChild(btn);
    Task.appendChild(cre1);
}

let taskArr = [1,2,3,4,5];
for (let x = 0; x < claimTask.length; x++){
    claimTask[x].setAttribute('taskL',taskArr[x]);
    const Check = () =>{
        let Bj = JSON.parse(localStorage.getItem('TaskDone'));
        if(Bj.task1 !== true){
            Awarding_Info();
            return;
        }
        if(Bj.task2 !== true){
            Awarding_Info();
            return;
        }
        if(Bj.task3 !== true){
            Awarding_Info();
            return;
        }
        if(Bj.task4 !== true){
            Awarding_Info();
            return;
        }
        if(Bj.task5 !== true){
            Awarding_Info();
            return;
        }
        if(!Number(claimTaskTxt[x].innerHTML)){
            return;
        }
        claimTask[x].disabled = true;
        senDtask(uid,claimTask[x].getAttribute('taskL'));
        Awarding_Task(claimTaskTxt[x].innerHTML);
        SaveCoinB(claimTaskTxt[x].innerHTML);
        balnce.innerHTML = QueenyTap.UpdateBlnce();
        claimTaskTxt[x].innerHTML = 'Claimed';
    }
    claimTask[x].addEventListener('click',Check);
    Update_Balance();
}
async function senDtask(uid,taskNum){
    try {
        const fet = await fetch(`${__RUT__()}/asset/apis/general_req/`,{
            method:"POST",
            headers:{'Content-type':'application/x-www-form-urlencoded'},
            body:'taskM=' + JSON.stringify({uid,taskNum})
        });
    
        const respons = await fet.text();
        console.log(respons);
    
        if(respons.status !== 'success'){
            return;
        }

    } catch (error){
        console.error(error);
        err_txt__(error);
    }

}

for (let x = 0; x < targetTask.length; x++){
    const Add = () =>{
        if(txtTaskTo[x].innerHTML == 'Subscribe Queeny On Youtube'){
            taskDone.task1 = true;
            localStorage.setItem('TaskDone', JSON.stringify(taskDone));

        }else if(txtTaskTo[x].innerHTML == 'Join Queeny On Tiktok'){
            taskDone.task2 = true;
            localStorage.setItem('TaskDone', JSON.stringify(taskDone));

        }else if(txtTaskTo[x].innerHTML == 'Join Queeny On Instagram'){
            taskDone.task3 = true;
            localStorage.setItem('TaskDone', JSON.stringify(taskDone));

        }else if(txtTaskTo[x].innerHTML == 'Join Queeny On Twitter'){
            taskDone.task4 = true;
            localStorage.setItem('TaskDone', JSON.stringify(taskDone));

        }else if(txtTaskTo[x].innerHTML == 'Join Queeny On Facebook'){
            taskDone.task5 = true;
            localStorage.setItem('TaskDone', JSON.stringify(taskDone));
        }
    }
    targetTask[x].addEventListener('click',Add);
}

let Obj = {
    Tap: 1,
    DailyCombo: 100,
    DailyReward: 100,
    Coinballance: ubal,
    TapCount: 1,
}

window.onload = () =>{
    balnce.innerHTML = ubal;
}

class Quenny{
    constructor(tap, bal, combo, reward, coinB, tpcnt){
        this.Tap = tap;
        this.Ballance = bal;
        this.DailyCombo = combo;
        this.DailyReward = reward;
        this.Coinballance = coinB;
        this.TapCount = tpcnt;
    }
    // SaveCoinBlnce(b){
    //     let StoreCoin = JSON.parse(localStorage.getItem('QueenyBot'));
    //     let bal = Number(StoreCoin.coinB) + Number(b);
    //     StoreCoin.Coinballance = bal;
    //     localStorage.setItem('QueenyBot', JSON.stringify(StoreCoin));
    // }
    UpdateBlnce(){
        let data = JSON.parse(localStorage.getItem('QueenyBot'));
        return data.Coinballance;
    }
}


if(localStorage.getItem('QueenyBot') == null){
    localStorage.setItem('QueenyBot', JSON.stringify(Obj));
}



function err_txt__(txt){
    let err = querySelector('.err_txt_manual');
        err.style.setProperty('display','flex');
            err.classList.remove('success');
                err.innerHTML = txt;
    setTimeout(() =>{
        err.classList.add('disapear');

        setTimeout(() =>{
            err.style.setProperty('display','none');
            err.classList.remove('disapear');
        })
    },1000);
}

function success_txt__(txt){
    let err = querySelector('.err_txt_manual');
        err.style.setProperty('display','flex');
            err.classList.add('success');
                err.innerHTML = txt;
    setTimeout(() =>{
        err.classList.add('disapear');

        setTimeout(() =>{
            err.style.setProperty('display','none');
            err.classList.remove('disapear');
        })
    },1000);
}

let QueenYJ = JSON.parse(localStorage.getItem('QueenyBot'));
let QueenyTap = new Quenny(QueenYJ.Tap, QueenYJ.Ballance, 
    QueenYJ.TapCount,QueenYJ.DailyCombo,QueenYJ.DailyReward);
    function __RUT__(){
        return document.querySelector('.Home').getAttribute('url');
    }


async function Update_Balance(){
    try {
        const data = JSON.parse(localStorage.getItem('QueenyBot'));
        const dataIns = data.Coinballance;
        const fet = await fetch(`${__RUT__()}/asset/apis/queeny/`,{
            method:"Post",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({uid,unme,dataIns})
        });
    
        const respy = await fet.json();
        // console.log(respy);
    
        if(respy.status !== 'success'){
            console.error(error);
            err_txt__(error);
            return;
        }


        let storeBal = JSON.parse(localStorage.getItem('QueenyBot'));
        let bala  = respy.message
        storeBal.Coinballance = bala;
        balnce.innerHTML = storeBal.Coinballance;
        localStorage.setItem('QueenyBot', JSON.stringify(storeBal));
        balnce.innerHTML = QueenyTap.UpdateBlnce();
    
        // console.log(error);
        // success_txt__(respy.message);
    
    } catch (error){
        console.error(error);
        err_txt__(error);
    }
}

Update_Balance();

window.onload = () =>{
    Update_Balance();
}



async function sendAATA(params,uid){
    try {
       const send = await fetch(`${__RUT__()}/asset/apis/genSend/`,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({params,uid})
        });

        const res = await send.text();
        // console.log(res);

        if(res.status !== 'success'){
            // console.log(res.message);
            return;
        }

    }catch (error){
        console.error(error);
        // console.log(res.message);
    }
}

// COIN REFER PURCHASE
let for5 = 6000;
    let for10 = for5 + for5;
        let for15 = for10 + for10;
            let for20 = for15 + for15;
                    let for25 = for20 + for20;
                        let for30 = for25 + for25;
                            let for35 = for30 + for30;
    let for40 = for35 + for35;
        let for45 = for40 + for40;
let amntPur = [for5,for10,for15,for20,for25,for30,for35,for40,for45];
let amnt_A = [5,10,15,20,25,30,35,40,45];
let class_purchase = ['ref5','ref10','ref15','ref20','ref25','ref30','ref35','ref40','ref45'];

// COIN REFER PURCHASE

Check_leves();

async function Check_leves(){
    const uid = querySelector('.bdy').getAttribute('uid');
    const __coin_ = querySelectorAll('.__coin_purchase');
   try {
        for (let x = 0; x < __coin_.length; x++) {
            
            const request = await fetch(`${__RUT__()}/asset/apis/`,{
                method:"POST",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({uid})
            });

            const respons = await request.json();
            // console.log(respons);

            if(respons.status !== 'success'){
                console.log(respons.message);
                return;
            }

            amnt[x].setAttribute('dataPurchase',amntPur[x]);
            amnt[x].setAttribute('nmt',amnt_A[x]);
            __coin_[x].setAttribute('id',class_purchase[x]);

            amnt[x].innerHTML = amntPur[x];

            const Purchase = () =>{
                if(respons.Referrals !== amnt[x].getAttribute('nmt')){
                    err_txt__(`Sorry You Have Not Gotten To ${amnt[x].getAttribute('nmt')}
                    Referrals Yet, Your Ref Is ${respons.Referrals}`);
                    return;
                }
                __coin_[x].disabled = true;
                sendAATA(amnt[x].getAttribute('nmt'),uid);
                SaveCoinB(amnt[x].getAttribute('dataPurchase'));
                balnce.innerHTML = QueenyTap.UpdateBlnce();
                Awarding_chairs(amnt[x].getAttribute('dataPurchase'),respons.Referrals);
            }

            __coin_[x].addEventListener('click',Purchase);

        }        
        
    } catch (error){
        console.error(error);
        err_txt__(error);
    }
}
check_L();
async function check_L(){
    let StrCnt = [1,1,1,1,1,2,2,2,2,3];
    let levleStar = [5,10,15,20,25,30,35,40,45,50];
    let lvl_ = [1,2,3,4,5,6,7,8,9,10];    
    let lenCount = strCNT.children.length;
    const uid = querySelector('.bdy').getAttribute('uid');
    const progress = querySelector('.lvl_pro span');
    const lvlTXT = querySelector('.lgW--- p');

    try {
        for (let x = 0; x < levelStar.length; x++){
            Count_len.innerHTML = `${lenCount} Own Stars`;
            levelStar[x].setAttribute('lvlStr',levleStar[x]);
            levelStar[x].setAttribute('level',lvl_[x]);
            if(lenCount == 16){
                Count_len.innerHTML = `Stars Completed`;
            }
            levelC[x].setAttribute('dataInt',StrCnt[x]);

            const ft = await fetch(`${__RUT__()}/asset/apis/data/`,{
                method:"POST",
                headers:{'Content-type':'application/json'},
                body:JSON.stringify({uid})
            });

            const resPons = await ft.json();
            // console.log(resPons)

            if(resPons.status !== 'success'){
                console.log(resPons.message);
                return;
            }

            if(resPons.Referrals < 5){
                progress.style.setProperty('width','1px');
                lvlTXT.innerHTML = 'Level 0/10';
            }else if(resPons.Referrals == 5){
                progress.style.setProperty('width','10%');
                lvlTXT.innerHTML = 'Level 1/10';
            }else if(resPons.Referrals == 10){
                progress.style.setProperty('width','20%');
                lvlTXT.innerHTML = 'Level 2/10';
            }else if(resPons.Referrals == 15){
                progress.style.setProperty('width','30%');
                lvlTXT.innerHTML = 'Level 3/10';
            }else if(resPons.Referrals == 20){
                progress.style.setProperty('width','40%');
                lvlTXT.innerHTML = 'Level 4/10';
            }else if(resPons.Referrals == 25){
                progress.style.setProperty('width','50%');
                lvlTXT.innerHTML = 'Level 5/10';
            }else if(resPons.Referrals == 30){
                progress.style.setProperty('width','60%');
                lvlTXT.innerHTML = 'Level 6/10';
            }else if(resPons.Referrals == 35){
                progress.style.setProperty('width','70%');
                lvlTXT.innerHTML = 'Level 7/10';
            }else if(resPons.Referrals == 40){
                progress.style.setProperty('width','80%');
                lvlTXT.innerHTML = 'Level 8/10';
            }else if(resPons.Referrals == 45){
                progress.style.setProperty('width','90%');
                lvlTXT.innerHTML = 'Level 9/10';
            }else if(resPons.Referrals == 50){
                progress.style.setProperty('width','100%');
                lvlTXT.innerHTML = 'Level Completed';
            }
            
            
            const Star = () =>{
                if(resPons.Referrals !== levelStar[x].getAttribute('lvlStr')){
                    err_txt__(`Sorry You Have Not Gotten To Level ${levelStar[x].getAttribute('level')} Yet`);
                   return;
                }
                levelStar[x].disabled = true;
                sendLVL(levelStar[x].getAttribute('level'),uid,levelC[x].getAttribute('dataInt'));
                LevelUp(levelC[x].getAttribute('dataInt'));
            }
    
            levelStar[x].addEventListener('click', Star);
        }
    }catch(error){
        console.error(error);
        err_txt__(error);
    }
}
async function sendLVL(lvl,id,str){
    try{
        const sendR = await fetch(`${__RUT__()}/asset/apis/lvl/`,{
            method:"POST",
            headers:{'Content-type':'application/json'},
            body:JSON.stringify({lvl,id,str})
        });

        const iboro = await sendR.text();
        console.log(iboro);

        if(iboro.status !== 'success'){
            console.log(iboro.message);
            return;
        }
    }catch (error) {
        console.error(error);
        err_txt__(error);
    }
}
function Awarding_chairs(amount,ref){
    let PY = Friend.clientWidth;
    let cre1 = createElement('div');
    cre1.className = 'cre1';
    b = createElement('nav');
    c = createElement('img');
    c.src = 'asset/img/9382196.png';
        let txt = createElement('span');
            txt.innerHTML = `You\'ve Successfully Claimed ${amount} Coins For ${ref} Friends`;
                let btn = createElement('button');
                    btn.innerHTML = 'Got It';

    let set = setInterval(() =>{
        let chrs = createElement('span');
        let img = createElement('img');
        img.src = 'asset/img/9382196.png'
        chrs.className = 'chrs'
        chrs.appendChild(img);
        let chl = PY - chrs.clientWidth;
        let rand = Math.floor(Math.random() * chl);
        chrs.style.setProperty('left', rand + 'px');

        setTimeout(() =>{
            chrs.remove();
        },1500);
        Friend.appendChild(chrs);
    },2000);
    btn.onclick = () =>{
        clearInterval(set);
        cre1.remove();
    }
    b.appendChild(c);
    cre1.appendChild(b)
    cre1.appendChild(txt);
    cre1.appendChild(btn)
    Friend.appendChild(cre1);
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
    for (let x = 0; x < dailyReward_wrap.length; x++){
        dailyAmount[x].setAttribute('data',QueenYJ.DailyCombo);
        txtDailycombo[x].innerHTML = '+' + QueenYJ.DailyCombo;
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
                RewardLocked(cnt_daily_rewards);
                return;
            }

            try {
                fetch(`${__RUT__()}/asset/apis/general_req/`, {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body:'timeterval=' + JSON.stringify({uid})
                })
                .then(response => response.text())
                .then(resul => {
                    console.log(resul);
                })
            } catch (error) {
                console.error(error);
            }
            PupOutRewards(dailyAmount[x].getAttribute('data'));
            dailyReward_wrap[x].disabled = true;
            daily_lock[x].style.setProperty('display','flex');
            daily_open[x].style.setProperty('display','none');
            daily_open[x].classList.remove('fa-shake');
        }
        Update_Balance();
    }
    
// DAILY COMBO CODE HEREEEEEEEEEEEEEEEEEEEEEEEEEEE


let Count = 0
for (let x = 0; x < dailyCombo.length; x++){
    Count++;
    dailyCombo[x].setAttribute('day',Count);
    comboClaim[x].setAttribute('data',QueenYJ.DailyReward);
    txtDailyRewards[x].innerHTML = '+' + QueenYJ.DailyReward;

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
            RewardLocked(cnt_daily_combo);
            return;
        }

        try {
            fetch(`${__RUT__()}/asset/apis/general_req/`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body:'timeState=' + JSON.stringify({uid})
            })
            .then(response => response.text())
            .then(resul => {
                console.log(resul);
            })
        } catch (error) {
            console.error(error);
        }

        PupOutRewards2(comboClaim[x].getAttribute('data'));
        dailyCombo[x].disabled = true;
        comboLock[x].style.setProperty('display','flex');
        comboOpen[x].style.setProperty('display','none');
        comboOpen[x].classList.remove('fa-shake');
    }
    Update_Balance();
    dailyCombo[x].addEventListener('click', Shop)
}



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
    Update_Balance();
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

let targetArr = ['Qinx-x-x-x--x--x--x','q-x-x-x-xh-hdd','img__ss_',
    'qinin--x-x-x--x--','level-qx-x-x','q---',
    'lgW---','lvl_pro','balnce','ball_cnce','bal_nnng---','img__ss_'];

for (let x = 0; x < smOpn.length; x++){
    smOpn[x].onclick = () =>{
        if(smOpntxt[x].innerHTML == 'Daily Rwards'){
            dyrwds.style.setProperty('display','flex');
            dlyCbo.style.setProperty('display','none');
            mylvl.style.setProperty('display','none');
            market.style.setProperty('display','none');
            store.style.setProperty('display','none');
            Star_pad.style.setProperty('display','none');
        }
        if(smOpntxt[x].innerHTML == 'Daily Combo'){
            dlyCbo.style.setProperty('display','flex');
            mylvl.style.setProperty('display','none');
            dyrwds.style.setProperty('display','none');
            market.style.setProperty('display','none');
            store.style.setProperty('display','none');
            Star_pad.style.setProperty('display','none');
        }
        if(smOpntxt[x].innerHTML == 'Daily Sell'){
            market.style.setProperty('display','flex');
            dlyCbo.style.setProperty('display','none');
            mylvl.style.setProperty('display','none');
            dyrwds.style.setProperty('display','none');
            store.style.setProperty('display','none');
            Star_pad.style.setProperty('display','none');
        }
        document.addEventListener('click',  function(e){
           for (let i = 0; i < targetArr.length; i++) {
                if(e.target.className == targetArr[i]){
                    Close_Tabs();
                }
           }
        })
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
    Star_pad.style.setProperty('display','none');
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
const ClasTogle = () =>{
    Star_pad.style.setProperty('display','flex');
    dlyCbo.style.setProperty('display','none');
    mylvl.style.setProperty('display','none');
    market.style.setProperty('display','none');
    store.style.setProperty('display','none');
    dyrwds.style.setProperty('display','none');
}
clsSTR.onclick = () =>{
    Star_pad.style.setProperty('display','none');
}
_js_slc.addEventListener('click', ClasTogle);   


function setcount2() {
    try {
        fetch(`${__RUT__()}/asset/apis/general_req/`, { 
            method: "POST",
            headers: {'Content-type': 'application/x-www-form-urlencoded'},
            body: 'Dcombo=' + JSON.stringify({ uid })
        })
        .then(response => response.json())
        .then(data => {
            if (data && !isNaN(data.timestamp)) {
                // Get the clicked time
                const clickedTime = data.timestamp * 1000; // Convert to milliseconds
                // console.log("Clicked Time:", new Date(clickedTime));

                // Calculate enableTime for the same time tomorrow
                const clickedDate = new Date(clickedTime);
                const enableTime = new Date(clickedDate);
                enableTime.setDate(clickedDate.getDate() + 1); // Move to the next day
                // console.log("Enable Time (Same Time Tomorrow):", enableTime);

                // Start the countdown
                starcount2(enableTime.getTime());
            }
        });
    } catch (error) {
        console.error(error);
    }
}
function starcount2(enableTime) {
    const interval = setInterval(() => {
        const now = new Date().getTime();
        if (now >= enableTime) {
            console.log("Enable Time Reached:", new Date(enableTime));
            fetch(`${__RUT__()}/asset/apis/general_req/`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: 'cleaRcombo=' + JSON.stringify({ uid })
            })
            .then(response => response.text())
            .then(data => {
                console.log("Clear Response:", data);
                clearInterval(interval);
            });
        } else {
            // console.log("Waiting... Current Time:", new Date(now));
        }
    }, 1000); // Check every second
}
setInterval(setcount2, 5000);
