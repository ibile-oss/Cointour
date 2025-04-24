const tables = querySelectorAll('.tables');
const cnt = querySelector('.rightPad');



for (let x = 0; x < tables.length; x++){
    tables[x].onclick = () =>{
        window.location.hash = tables[x].innerHTML;
        LoaderPage(tables[x].innerHTML,cnt, function(){

            if(tables[x].innerHTML === 'Addfaqs'){
                addfaqs();
            }
            if(tables[x].innerHTML === 'Faqs'){
                faqs();
            }
            if(tables[x].innerHTML === 'Users'){
                users();
            }
        });

    }
}

document.addEventListener('DOMContentLoaded', function(){
    let currentpage = window.location.hash.toLocaleLowerCase().replace('#', '');
    let newpage = currentpage === '' ? 'users' : currentpage;
    LoaderPage(newpage,cnt);
})

