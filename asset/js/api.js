

async function Sing_Up(n1,n2,em,ph,pwd,cpwd){
    const err = querySelector('.err');

    try {
        const form = new FormData();
            form.append('name1',n1);
                form.append('name2',n2);
                    form.append('email',em);
                        form.append('phone',ph);
            form.append('password',pwd);
                form.append('cnpassword',cpwd);

                    const req = await fetch(`${__root__()}/asset/apis/signup/`,{
                        method:"POST",
                        body:form
                    })
                const respons = await req.text();
                    console.log(respons);
            if(respons.status === true){
                err.style.setProperty('display','flex');
                err.innerHTML = respons.message;
                console.log(respons);
                return
            }


            err.style.setProperty('display','flex');
            err.innerHTML = respons.message;

    } catch (error) {
        err.innerHTML = error;
        console.error(error)
    }
}