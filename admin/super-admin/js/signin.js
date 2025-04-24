function Selector(x){
    return document.querySelector(x);
}
function SelectorAll(x){
    return document.querySelectorAll(x)
}
function createElement(x){
    return document.createElement(x)
}
function querySelector(x){
    return document.querySelector(x);
}
function querySelectorAll(x){
    return document.querySelectorAll(x);
}

const loginstead = Selector('.login_ins');
    const signinstead = Selector('.sign_inste');
        const log_in_tabs = Selector('.log_in_tabs');
            const sign_in_tabs = Selector('.sign_in_tabs');
                const cnt = Selector('.ad_sign_in_cnt_general');
loginstead.onclick = () =>{
    log_in_tabs.style.setProperty('display','flex');
    sign_in_tabs.style.setProperty('display','none');
}
signinstead.onclick = () =>{
    log_in_tabs.style.setProperty('display','none');
    sign_in_tabs.style.setProperty('display','flex');
}

