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
            let keysChild = querySelector('.keys_starswrap span');
                let octahedronwrapChild = querySelector('.octahedronwrap span');
                    let deltohegronwrapChild = querySelector('.deltohegronwrap span');
                        let jewelwrapChild = querySelector('.jewelwrap span');
                            let plutowrapChild = querySelector('.plutowrap span');
                                let strChild = querySelectorAll('.starswrap span');
                                    





  
for (let x = 0; x < strChild.length; x++){
    strChild[x].onclick = () =>{  
        strChild[x].classList.add('slideUp');
        strChild[x].classList.remove('ani3');
        strChild[x].classList.remove('ani1');
        setTimeout(() =>{
            strChild[x].style.setProperty('display','none');
        },900);
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

