// THIS FILE IS USE FOR CLASS AND CONSTRUCTOR

let Obj = {
    Tap: 1,
    DailyCombo: 100,
    DailyReward: 100,
    Coinballance: 5000000,
    TapCount: 1,
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
// localStorage.setItem('QueenyBot',JSON.stringify(Obj));
