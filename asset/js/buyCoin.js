function ERROR(txt){
    const err = querySelector('.copy_msg');
        err.style.setProperty('display','flex');
        err.innerHTML = txt;
    let set = setTimeout(() =>{
       err.style.setProperty('display','none');
    },3000);

    err.onmouseenter = () =>{
        clearTimeout(set);
    }

    err.onmouseout = () =>{
        setTimeout(() =>{
            err.style.setProperty('display','none');
        },1000);
    }
}
let coinType = querySelectorAll('.stock_item_wrap');
    let coinName = querySelectorAll('.stock_item_wrap .wrap_ittitem .stok_img img');
        let priceSold = querySelectorAll('.stock_item_wrap .div__fff .price_sold');
            let CNT_wr = querySelector('.Ctr_Cnt_xxxxxxxxx00');
                let coinValue = querySelectorAll('.stock_item_wrap .wrap_ittitem .stok_img');
                    let buyLenght = querySelectorAll('.stock_item_wrap .wrap_ittitem p');
                        const id = querySelector('.header').getAttribute('uid');
                            let plutowrap = querySelector('.plutowrap');
                                let jewelwrap = querySelector('.jewelwrap');
                                    let deltohegronwrap = querySelector('.deltohegronwrap');
                                        let octahedronwrap = querySelector('.octahedronwrap');
let keys_starswrap = querySelector('.keys_starswrap');
    let starswrap = querySelector('.starswrap');
            let keysChild = querySelectorAll('.keystst button');
                let octahedronwrapChild = querySelectorAll('.octahedronwrap button');
                    let deltohegronwrapChild = querySelectorAll('.deltohegronwrap button');
                        let jewelwrapChild = querySelectorAll('.jewelwrap button');
                            let plutowrapChild = querySelectorAll('.plutowrap button');
                                let strChild = querySelectorAll('.starswrap button');
    let randAn = querySelectorAll('.randAni');
                                



function timmer(){
    const ONE_DAY_IN_SECONDS = 24 * 60 * 60;
    let randAn = querySelectorAll('.randAni');
    for (let x = 0; x < randAn.length; x++){
        randAn[x].disabled = true;
    }

    // Get or set end time
    let endTime = localStorage.getItem('timerEnd');

    if(!endTime){
        const now = new Date();
        const end = new Date(now.getTime() + ONE_DAY_IN_SECONDS * 1000); // add 24 hours
        endTime = end.getTime(); // get timestamp in ms
        localStorage.setItem('timerEnd', endTime);
    }

    function updateTimer(){
        let timerElement = querySelectorAll('.timer-Count');
        const now = new Date().getTime();
        const remainingTime = Math.floor((endTime - now) / 1000);

        for (let x = 0; x <timerElement.length; x++){
            if (remainingTime <= 0) {
                timerElement[x].textContent = "Claim Available";
                clearInterval(timerInterval);
                localStorage.removeItem('timerEnd');
                for (let x = 0; x < randAn.length; x++){
                    randAn[x].disabled = false;
                }
                timerElement[x].textContent = "Claim Available";
                return;
            }
    
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;
    
            timerElement[x].textContent = 'Reload Or Claim After ' +
            `${String(hours).padStart(2, '0')}:` +
            `${String(minutes).padStart(2, '0')}:` +
            `${String(seconds).padStart(2, '0')}`;
            
        }
    }
    updateTimer(); // initial display
    const timerInterval = setInterval(updateTimer, 1000);
}


for (let x = 0; x < plutowrapChild.length; x++){
    plutowrapChild[x].onclick = () =>{  
        if(plutowrapChild[x].disabled == true){
            return;
        }

        let ID = plutowrapChild[x].getAttribute('id');
        try {
            fetch(`${__root__2()}/asset/apis/general_req/`,{
                method:"POST",
                headers:{'Content-type':'application/x-www-form-urlencoded'},
                body:'sendIDplut=' + JSON.stringify({uid,ID})
            })
            .then(response => response.json())
            .then(result => {
                if(result.status !== 'success'){
                    ERROR(result.message);
                    return
                }
    
                ERROR(result.message);
                plutowrapChild[x].classList.add('slideUp');
                plutowrapChild[x].classList.remove('ani3');
                plutowrapChild[x].classList.remove('ani1');
                setTimeout(() =>{
                    plutowrapChild[x].style.setProperty('display','none');
                },900);
            })

        }catch(error){
            console.error(error);
            ERROR(error);
        } 
        
    }
}
for (let x = 0; x < jewelwrapChild.length; x++){
    jewelwrapChild[x].onclick = () =>{  
        if(jewelwrapChild[x].disabled == true){
            return;
        }

        let ID = jewelwrapChild[x].getAttribute('id');
        try {
            fetch(`${__root__2()}/asset/apis/general_req/`,{
                method:"POST",
                headers:{'Content-type':'application/x-www-form-urlencoded'},
                body:'sendIDjew=' + JSON.stringify({uid,ID})
            })
            .then(response => response.json())
            .then(result => {
                if(result.status !== 'success'){
                    ERROR(result.message);
                    return
                }
    
                ERROR(result.message);
                jewelwrapChild[x].classList.add('slideUp');
                jewelwrapChild[x].classList.remove('ani3');
                jewelwrapChild[x].classList.remove('ani1');
                setTimeout(() =>{
                    jewelwrapChild[x].style.setProperty('display','none');
                },900);
            })

        }catch(error){
            console.error(error);
            ERROR(error);
        } 

    }
}
for (let x = 0; x < deltohegronwrapChild.length; x++){
    deltohegronwrapChild[x].onclick = () =>{  
        if(deltohegronwrapChild[x].disabled == true){
            return;
        }

        let ID = deltohegronwrapChild[x].getAttribute('id');
        try {
            fetch(`${__root__2()}/asset/apis/general_req/`,{
                method:"POST",
                headers:{'Content-type':'application/x-www-form-urlencoded'},
                body:'sendIDdel=' + JSON.stringify({uid,ID})
            })
            .then(response => response.json())
            .then(result => {
                if(result.status !== 'success'){
                    ERROR(result.message);
                    return
                }
    
                ERROR(result.message);
                deltohegronwrapChild[x].classList.add('slideUp');
                deltohegronwrapChild[x].classList.remove('ani3');
                deltohegronwrapChild[x].classList.remove('ani1');
                setTimeout(() =>{
                    deltohegronwrapChild[x].style.setProperty('display','none');
                },900);
            })

        }catch(error){
            console.error(error);
            ERROR(error);
        }  
        
    }
}
for (let x = 0; x < octahedronwrapChild.length; x++){
    octahedronwrapChild[x].onclick = () =>{
        if(octahedronwrapChild[x].disabled == true){
            return;
        }

        let ID = octahedronwrapChild[x].getAttribute('id');
        try {
            fetch(`${__root__2()}/asset/apis/general_req/`,{
                method:"POST",
                headers:{'Content-type':'application/x-www-form-urlencoded'},
                body:'sendIDoct=' + JSON.stringify({uid,ID})
            })
            .then(response => response.json())
            .then(result => {
                if(result.status !== 'success'){
                    ERROR(result.message);
                    return
                }
    
                ERROR(result.message);
                octahedronwrapChild[x].classList.add('slideUp');
                octahedronwrapChild[x].classList.remove('ani3');
                octahedronwrapChild[x].classList.remove('ani1');
                setTimeout(() =>{
                    octahedronwrapChild[x].style.setProperty('display','none');
                },900);
            })

        }catch(error){
            console.error(error);
            ERROR(error);
        }  
        
    }
}
for (let x = 0; x < keysChild.length; x++){
    keysChild[x].onclick = () =>{  
        if(keysChild[x].disabled == true){
            return;
        }

        let ID = keysChild[x].getAttribute('id');
        try {
            fetch(`${__root__2()}/asset/apis/general_req/`,{
                method:"POST",
                headers:{'Content-type':'application/x-www-form-urlencoded'},
                body:'sendIDkey=' + JSON.stringify({uid,ID})
            })
            .then(response => response.json())
            .then(result => {
                if(result.status !== 'success'){
                    ERROR(result.message);
                    return
                }
    
                ERROR(result.message);
                keysChild[x].classList.add('slideUp');
                keysChild[x].classList.remove('ani3');
                keysChild[x].classList.remove('ani1');
                setTimeout(() =>{
                    keysChild[x].style.setProperty('display','none');
                },900);
            })

        }catch(error){
            console.error(error);
            ERROR(error);
        }
        
    }
}
for (let x = 0; x < strChild.length; x++){
    strChild[x].onclick = () =>{ 
        if(strChild[x].disabled == true){
            return;
        }

        let ID = strChild[x].getAttribute('id');
        try {
            fetch(`${__root__2()}/asset/apis/general_req/`,{
                method:"POST",
                headers:{'Content-type':'application/x-www-form-urlencoded'},
                body:'sendIDclicked=' + JSON.stringify({uid,ID})
            })
            .then(response => response.json())
            .then(result => {
                if(result.status !== 'success'){
                    ERROR(result.message);
                    return
                }
    
                ERROR(result.message);
                strChild[x].classList.add('slideUp');
                strChild[x].classList.remove('ani3');
                strChild[x].classList.remove('ani1');
                setTimeout(() =>{
                    strChild[x].style.setProperty('display','none');
                },900);
            })

        }catch(error){
            console.error(error);
            ERROR(error);
        }
    }
}
for (let x = 0; x < coinType.length; x++) {
    let coinNameName = coinName[x].getAttribute('src');
    let splitname = coinNameName.split('/')[2];
    let spltEXt = splitname.split('.')[0];


    let price = priceSold[x].innerHTML;
    let spltPrice = price.split('+')[1];

    if(coinName[x].getAttribute('src') == 'asset/img/keystar.png'){
        coinValue[x].setAttribute('vle','unlock');
    }else{
        coinValue[x].setAttribute('vle','$1.00');
    }
    if(priceSold[x].innerHTML == '+12000'){
        coinValue[x].setAttribute('vle','$2.00');
    }
    if(priceSold[x].innerHTML == '+18000'){
        coinValue[x].setAttribute('vle','$3.00');
    }
    let value = coinValue[x].getAttribute('vle');

    coinType[x].onclick = () =>{
        
        a = createElement('DIV');
            a.className = 'buy_C';
                b = createElement('DIV');
                    b.className = 'but_coin_cn';
                        c = createElement('NAV');
                            c.className = 'close_stock_buy';
                                c.innerHTML = 'Close Here';
        d = createElement('NAV');
            d.className = 'category';
                e = createElement('h3');
                    f = createElement('span');
                        e.innerHTML = 'Category';
                            f.innerHTML = spltEXt;
        g = createElement('NAV');
            g.className = 'category';
                h = createElement('h3');
                    i = createElement('span');
                        h.innerHTML = 'Price';
                            i.innerHTML = spltPrice + '<i>coins</i>';
        k = createElement('NAV');
            k.className = 'category';
                l = createElement('h3');
                    m = createElement('span');
                        l.innerHTML = 'Value';
                            m.innerHTML = value;
        n = createElement('SELECT');
        n.className = 'select';
        // const select = querySelector('.select');
            let option = [
                'Queeny',
                'Seahorse',
                'Turtle',
                'Slut',
                'Pigeon',
                'Anstophere'
            ];
            for (let i = 0; i < option.length; i++) {
                let options = createElement('OPTION');
                options.innerHTML = option[i];
                options.setAttribute('value',option[i])
                n.appendChild(options);
            }
        o = createElement('button');
            o.innerHTML = 'Buy';
                c.onclick = () =>{
                    b.classList.add('transxory');
                    setTimeout(() =>{
                        b.classList.remove('transxory');
                        a.remove();
                    },400)
                }

            o.onclick = () =>{
                let val = n.value;
                let lenght = buyLenght[x].innerHTML;
                timmer();

                try {
                    fetch(`${__root__2()}/asset/apis/general_req/`,{
                        method:"POST",
                        headers:{'Content-type':'application/x-www-form-urlencoded'},
                        body:'infor_gen=' + JSON.stringify({id,spltEXt,spltPrice,val,lenght})
                    })
                    .then(response => response.json())
                    .then(result =>{
                        // console.log(result);
                        b.classList.add('transxory');
                        setTimeout(() =>{
                            b.classList.remove('transxory');
                            a.remove();
                        },400)
                        if(result.status !== 'success'){
                            ERROR(result.message);
                            return;
                        }

                        ERROR(result.message);
                        if(spltEXt == 'star'){
                            for (let x = 0; x < lenght; x++) {
                                let ele = createElement('button');
                                let ele2 = createElement('i');
                                let ele3 = createElement('img');
                                ele.className = 'randAni';
                                ele.disabled = true
        
                                let ele3Src = 'asset/img/str.gif';
                                ele3.setAttribute('src',ele3Src);
                                ele.onclick = () =>{  
                                    if(ele.disabled == true){
                                        return
                                    }
                                    ele.classList.add('slideUp');
                                    ele.classList.remove('ani3');
                                    ele.classList.remove('ani1');
                                    setTimeout(() =>{
                                        ele.style.setProperty('display','none');
                                    },900);
                                }
        
                                ele.appendChild(ele2);
                                ele2.appendChild(ele3);
                                starswrap.appendChild(ele);
                            }
                        }else if(spltEXt == 'jewel'){
                            for (let x = 0; x < lenght; x++) {
                                let ele = createElement('button');
                                let ele2 = createElement('i');
                                let ele3 = createElement('img');
                                ele.className = 'randAni';
                                ele.disabled = true
        
                                let ele3Src = 'asset/img/jewel.png';
                                ele3.setAttribute('src',ele3Src);
                                ele.onclick = () =>{  
                                    if(ele.disabled == true){
                                        return
                                    }
                                    ele.classList.add('slideUp');
                                    ele.classList.remove('ani3');
                                    ele.classList.remove('ani1');
                                    setTimeout(() =>{
                                        ele.style.setProperty('display','none');
                                    },900);
                                }
        
                                ele.appendChild(ele2);
                                ele2.appendChild(ele3);
                                jewelwrap.appendChild(ele);
                            }
                        }else if(spltEXt == 'pluto'){
                            for (let x = 0; x < lenght; x++) {
                                let ele = createElement('button');
                                let ele2 = createElement('i');
                                let ele3 = createElement('img');
                                ele.className = 'randAni';
                                ele.disabled = true
        
                                let ele3Src = 'asset/img/pluto.png';
                                ele3.setAttribute('src',ele3Src);
                                ele.onclick = () =>{  
                                    if(ele.disabled == true){
                                        return
                                    }
                                    ele.classList.add('slideUp');
                                    ele.classList.remove('ani3');
                                    ele.classList.remove('ani1');
                                    setTimeout(() =>{
                                        ele.style.setProperty('display','none');
                                    },900);
                                }
        
                                ele.appendChild(ele2);
                                ele2.appendChild(ele3);
                                plutowrap.appendChild(ele);
                            }
                        }else if(spltEXt == 'deltohedron'){
                            for (let x = 0; x < lenght; x++) {
                                let ele = createElement('button');
                                let ele2 = createElement('i');
                                let ele3 = createElement('img');
                                ele.className = 'randAni';
                                ele.disabled = true
        
                                let ele3Src = 'asset/img/deltohedron.png';
                                ele3.setAttribute('src',ele3Src);
                                ele.onclick = () =>{  
                                    if(ele.disabled == true){
                                        return
                                    }
                                    ele.classList.add('slideUp');
                                    ele.classList.remove('ani3');
                                    ele.classList.remove('ani1');
                                    setTimeout(() =>{
                                        ele.style.setProperty('display','none');
                                    },900);
                                }
        
                                ele.appendChild(ele2);
                                ele2.appendChild(ele3);
                                deltohegronwrap.appendChild(ele);
                            }
                        }else if(spltEXt == 'keystar'){
                            for (let x = 0; x < lenght; x++) {
                                let ele = createElement('button');
                                let ele2 = createElement('i');
                                let ele3 = createElement('img');
                                ele.className = 'randAni';
                                ele.disabled = true
        
                                let ele3Src = 'asset/img/keystar.png';
                                ele3.setAttribute('src',ele3Src);
                                ele.onclick = () =>{  
                                    if(ele.disabled == true){
                                        return
                                    }
                                    ele.classList.add('slideUp');
                                    ele.classList.remove('ani3');
                                    ele.classList.remove('ani1');
                                    setTimeout(() =>{
                                        ele.style.setProperty('display','none');
                                    },900);
                                }
        
                                ele.appendChild(ele2);
                                ele2.appendChild(ele3);
                                keys_starswrap.appendChild(ele);
                            }
                        }else if(spltEXt == 'octahedron'){
                            for (let x = 0; x < lenght; x++) {
                                let ele = createElement('button');
                                let ele2 = createElement('i');
                                let ele3 = createElement('img');
                                ele.className = 'randAni';
                                ele.disabled = true
        
                                let ele3Src = 'asset/img/octahedron.png';
                                ele3.setAttribute('src',ele3Src);
                                ele.onclick = () =>{  
                                    if(ele.disabled == true){
                                        return
                                    }
                                    ele.classList.add('slideUp');
                                    ele.classList.remove('ani3');
                                    ele.classList.remove('ani1');
                                    setTimeout(() =>{
                                        ele.style.setProperty('display','none');
                                    },900);
                                }
        
                                ele.appendChild(ele2);
                                ele2.appendChild(ele3);
                                octahedronwrap.appendChild(ele);
                            }
                        }

                        let storeBal = JSON.parse(localStorage.getItem('QueenyBot'));
                        let bala  = result.newBalance
                        storeBal.Coinballance = bala;
                        localStorage.setItem('QueenyBot', JSON.stringify(storeBal));
                    })
                }catch(error){
                    console.error(error);
                    ERROR(error);
                }
            }
        
        d.appendChild(e)                    
        d.appendChild(f);
        g.appendChild(h);
        g.appendChild(i);
        k.appendChild(l);
        k.appendChild(m);
        b.appendChild(c);
        b.appendChild(d);
        b.appendChild(g);
        b.appendChild(k);
        b.appendChild(n);
        b.appendChild(o);
        a.appendChild(b);
        CNT_wr.appendChild(a);
    }    
}

