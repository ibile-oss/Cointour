var very_state = querySelector('.verified_state');
var ssss = querySelector('.circuler');
var cnt_wrap = querySelectorAll('.tasking_mode');
var veryS = querySelector('.verify_state');
var htxt = querySelector('.verify_state h3');
var txt = querySelector('.txt_to p');
var clk = querySelector('.num1');
var clk2 = querySelector('.num2');
var tools = querySelectorAll('.tools');
var all_Tools = querySelectorAll('.tasking_mode .alltools');
var alltoolsCnt = querySelectorAll('.tasking_mode');
var clos_ = querySelector('.sekComent2');
var clos4 = querySelector('.sekComent1');
var task_cnt = querySelector('.all_tasking_for_user');
var impo = querySelectorAll('.task_go');
var task_done_pending = querySelectorAll('.task_go .set_sp');
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
var mask_go = querySelector('.mask_go');
var progress = querySelector('.progress');
var referal_cnt = querySelector('.referal_cnt_user_');
var Conttri = querySelector('.contributors');
var comment_manager = querySelector('.comment_manager');
var close_ = querySelectorAll('.close');
var shares_task  = querySelector('.shares_task');
var infor_ff = querySelector('.infor_ff span');
var info_r = querySelector('.infor_to_all_task');
var info_bring = querySelectorAll('.space_eve .info_t');
var txt_infor__ = querySelector('.infor_cnt p');

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
    info_r.style.setProperty('display','none');
}


for (let x = 0; x < close_.length; x++) {
    close_[x].onclick = () =>{
        comment_manager.classList.add('callback');
        task_cnt.classList.add('callback');
        Referals_cnt.classList.add('callback');
        Conttri.classList.add('callback');
        engage.classList.add('callback');
        shares_task.classList.add('callback');
        setTimeout(() =>{
            comment_manager.style.setProperty('display','none');
            comment_manager.classList.remove('callback');
            task_cnt.style.setProperty('display','none');
            task_cnt.classList.remove('callback');
            Referals_cnt.style.setProperty('display','none');
            Referals_cnt.classList.remove('callback');
            Conttri.style.setProperty('display','none');
            Conttri.classList.remove('callback');
            shares_task.style.setProperty('display','none');
            engage.style.setProperty('display','none');
            engage.classList.remove('callback');
            shares_task.classList.remove('callback');
        },400)
        
    }
}


refer_r_.onclick = () =>{
    let bcolor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
    mask_go.classList.add('left__')
    mask_go.classList.remove('right__')
    progress.style.setProperty('display','none');
    referal_cnt.style.setProperty('display','flex');
    mask_go.style.background = bcolor;
    refer_r_.classList.add('hob');
    pro_pr.classList.remove('hob');
}
pro_pr.onclick = () =>{
    let bcolor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
    mask_go.classList.add('right__')
    mask_go.classList.remove('left__')
    progress.style.setProperty('display','flex');
    referal_cnt.style.setProperty('display','none');
    mask_go.style.background = bcolor;
    if(refer_r_.classList.contains('hob')){
        refer_r_.classList.remove('hob');
    }
    pro_pr.classList.add('hob');
}


var pw = nt_cnt.clientWidth;
var ph = nt_cnt.clientHeight;

// create_Bubble();
for (let x = 0; x < task_done_.length; x++) {
    let bcolor = 'rgb(' + color() + ',' + color() + ',' + color() + ')';
    task_done_pending[x].onclick = () =>{
        var cnt_c = createElement('span');
        cnt_c.className = 'cnt_c';
        cnt_c.innerHTML = 'Not done';
        task_done_[x].append(cnt_c);
        cnt_c.style.background = bcolor;
        cnt_c.onclick = () =>{
            cnt_c.remove()
        }
    }
}
for (let x = 0; x < alltoolsCnt.length; x++) {
    all_Tools[x].setAttribute('txt',all_Tools[x].innerHTML);
    all_Tools[x].setAttribute('txt_infor',arr[x])
    txt_infor__.innerHTML = all_Tools[x].getAttribute('txt_infor');
    alltoolsCnt[x].onclick = () =>{
        if(all_Tools[x].getAttribute('txt') == 'All task'){
            task_cnt.style.setProperty('display','flex');
        }
        if(all_Tools[x].getAttribute('txt') == 'Engagement'){
            engage.style.setProperty('display','flex');
        }
        if(all_Tools[x].getAttribute('txt') == 'Referal'){
            Referals_cnt.style.setProperty('display','flex');
        }
        if(all_Tools[x].getAttribute('txt') == 'Contributor'){
            Conttri.style.setProperty('display','flex')
        }
        if(all_Tools[x].getAttribute('txt') == 'Comment manager'){
            comment_manager.style.setProperty('display','flex');
        }
        if(all_Tools[x].getAttribute('txt') == 'Shares'){
            shares_task.style.setProperty('display','flex');
        }
        task_part.scrollTo(0, 0);
    }
}

var veryTXT = [`Lorem ipsum dolor, sit amet consectetur 
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
]

var instruTXT = [`Lorem ipsum dolor, sit amet consectetur 
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
    qui voluptatibus.`
]
var veryT = 'Verification steps';
var instT = 'Instructions';
clk.setAttribute('txt',veryT);
clk2.setAttribute('txt',instT);
for (let x = 0; x < tools.length; x++) {
    tools[x].onclick = () =>{
        veryS.classList.toggle('show');
        if(tools[x].getAttribute('txt') == veryT){
            txt.innerHTML = veryTXT;
            htxt.innerHTML = tools[x].getAttribute('txt');
        }else{
            txt.innerHTML = instruTXT;
            htxt.innerHTML = tools[x].getAttribute('txt');
        }
    }    
}


ssss.onclick = () =>{
    very_state.classList.toggle('flex');
}