let coinType = querySelectorAll('.stock_item_wrap');
    let coinName = querySelectorAll('.stock_item_wrap .wrap_ittitem .stok_img img');
        let priceSold = querySelectorAll('.stock_item_wrap .div__fff .price_sold');
            let CNT_wr = querySelector('.Ctr_Cnt_xxxxxxxxx00');
                let coinValue = querySelectorAll('.stock_item_wrap .wrap_ittitem .stok_img');




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
                let option = [
                    'Buy from',
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