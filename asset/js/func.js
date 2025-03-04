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