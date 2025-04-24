function querySelector(x){
    return document.querySelector(x);
}
function querySelectorAll(x){
    return document.querySelectorAll(x);
}
function Selector(x){
    return document.querySelector(x);
}
function createElement(x){
    return document.createElement(x);
}

async function LoaderPage(d, cnt, callback){
    const tolw = d.toLowerCase().trim()
    
    try {
         const fech = await fetch(`http://localhost/cointour/admin/super-admin/table/${tolw}.html`,{
            method:"POST",
            headers:{'Content-type':'application/json'},
        });
    
        const response = await fech.text();
       

        cnt.innerHTML = response
        check_Domcontent_loaded(d);
        if(callback)callback();
    }catch(error){
        console.error(error);
    }
}

function check_Domcontent_loaded(d){
    switch (d) {
        case 'users':
            users();
            break;
        case 'addfaqs':
            addfaqs();
        break;
        case 'faqs':
            faqs();
        break;
    }
}

function faqs(){
    const copYheading = querySelectorAll('.copYheading');
        const copyID = querySelectorAll('.copyID');
        const open_togle_close = querySelector('.open_togle_close');

    for (let x = 0; x < copyID.length; x++){
        copyID[x].onclick = () =>{
            let attr = copyID[x].getAttribute('uid');
            navigator.clipboard.writeText(attr)
        }
    }
    for (let x = 0; x < copYheading.length; x++){
        copYheading[x].onclick = () =>{
            let attr = copYheading[x].getAttribute('heading');
            navigator.clipboard.writeText(attr)
        }
    }
    open_togle_close.onclick = () =>{
        leftPad.classList.toggle('dis_imp');
    }

    

}

function addfaqs(){
    let txtadd = querySelector('.txtadd');
        let btn_tn = querySelector('.btn_tn');
            let headin__ = querySelector('.headin__');
                let usid = querySelector('.usid');
                let open_togle_close = querySelector('.open_togle_close');
    let urle = querySelector('.add_faqs').getAttribute('url')

    btn_tn.onclick = () =>{
        if(txtadd.value == ''){
            txtadd.style.setProperty('border','1px solid red');
            return;
        }
        if(usid.value == ''){
            usid.style.setProperty('border','1px solid red');
            return;
        }
        if(headin__.value == ''){
            headin__.style.setProperty('border','1px solid red');
            return;
        }
        let usv = usid.value;
        let hv = headin__.value;
        let txt = txtadd.value;

        if(!usv){
            usid.style.setProperty('border','1px solid red');
            return;
        }
        if(!hv){
            headin__.style.setProperty('border','1px solid red');
            return;
        }
        if(!txt){
            txtadd.style.setProperty('border','1px solid red');
            return;
        }
        usid.style.setProperty('border','none');
        headin__.style.setProperty('border','none');
        txtadd.style.setProperty('border','none');
        btn_tn.innerHTML = '';
        let ele = createElement('SPAN');
        ele.className = 'loader_spn';
        btn_tn.appendChild(ele);
        btn_tn.disabled = true;
        try {
            fetch(`${urle}`,{
                method:"POST",
                headers:{'Content-type':'application/x-www-form-urlencoded'},
                body:'faqstoIn=' + JSON.stringify({usv,hv,txt})
            })
            .then(respons => respons.text())
            .then(result =>{
                console.log(result);
                if(result.status !== 'success'){
                    ele.remove();
                    btn_tn.innerHTML = 'Add';
                    btn_tn.disabled = false;
                    return
                }

                ele.remove();
                btn_tn.innerHTML = 'Added';
                btn_tn.disabled = false;
                txtadd.value = '';
                setTimeout(() =>{
                    btn_tn.innerHTML = 'Add';
                },500);
            })
        } catch (error) {
            console.error(error);
            ele.remove();
            btn_tn.innerHTML = 'Add';
            btn_tn.disabled = false;
        }
    }

    headin__.addEventListener('focus',function(){
        let txt = navigator.clipboard.readText();
        txt.then(result =>{
            headin__.value = result;
            localStorage.setItem('heading',result);
        })
    })

    usid.addEventListener('focus',function(){
        let txt = navigator.clipboard.readText();
        txt.then(result =>{
            usid.value = result;
            localStorage.setItem('usid',result);
        })
    })

    headin__.value = localStorage.getItem('heading');
    usid.value = localStorage.getItem('usid');
    open_togle_close.onclick = () =>{
        leftPad.classList.toggle('dis_imp');
    }
   

}

function users(){
    let wrap_each_user = document.querySelectorAll('.wrap_each_user');
            let delet = document.querySelectorAll('.wrap_each_user .delete');
                const search_bar = querySelector('.header input');
                    const user_name = querySelectorAll('.wrap_each_user p');
                        const leftPad = querySelector('.leftPad');
                            const open_togle_close = querySelector('.open_togle_close');                      
    const message_usr = querySelectorAll('.message__F');

    for (let x = 0; x < message_usr.length; x++){
        message_usr[x].onclick = () =>{


            let userId = message_usr[x].getAttribute('uid');
            let ourPlaceholder = message_usr[x].getAttribute('user_name');
            let bdy = document.body;
            let ele = createElement('DIV');
            ele.className = "cover_page";
            let txtWriter = createElement('DIV');
            txtWriter.className = 'txtWriter';

            let texArea = createElement('TEXTAREA');
            texArea.setAttribute('placeholder',`Send message to ${ourPlaceholder}`);
            txtWriter.appendChild(texArea);

            let btn = createElement('button');
            btn.className = 'sendData__';
            btn.innerHTML = 'Send';
            txtWriter.appendChild(btn);

            let exi = createElement('button');
            exi.className = 'exit_';
            exi.innerHTML = 'Exit';
            txtWriter.appendChild(exi);
            exi.onclick = () =>{
                ele.remove();
            }

            btn.onclick = () =>{
                let time  = new Date();
                let hour = time.getHours();
                let minute = time.getMinutes();
                let second = time.getSeconds();

                if(hour == '13'){
                    hour = '1';
                }else if(hour == '14'){
                    hour = '2';
                }else if(hour == '15'){
                    hour = '3';
                }else if(hour == '16'){
                    hour = '4';
                }else if(hour == '17'){
                    hour = '5';
                }else if(hour == '18'){
                    hour = '6';
                }else if(hour == '19'){
                    hour = '7';
                }else if(hour == '20'){
                    hour = '8';
                }else if(hour == '21'){
                    hour = '9';
                }else if(hour == '22'){
                    hour = '10';
                }else if(hour == '23'){
                    hour = '11';
                }
                
                let currentTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
                let sendTime = currentTime;
            }

            ele.appendChild(txtWriter);
            bdy.classList.add('toAbbb');
            bdy.insertAdjacentElement('afterbegin',ele);
        } 
    }
    open_togle_close.onclick = () =>{
        leftPad.classList.toggle('dis_imp');
    }
    search_bar.addEventListener('keydown', () =>{
        Search_name(search_bar.value);
    });
    
    async function Search_name(nme){
        try {
            const search = await fetch(`http://localhost/cointour/asset/apis/general_req/`,{
                method:"POST",
                headers:{'Content-type':'application/x-www-form-urlencoded'},
                body:'name=' + JSON.stringify({nme})
            });

            const respons = await search.text();
            let cntData = querySelector('.wraper__info');
            cntData.innerHTML = respons;
        } catch (error) {
            console.error(error);
        }
    }
}

