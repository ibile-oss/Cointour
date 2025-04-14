

async function Sing_Up(n1,n2,em,ph,pwd,cpwd,ref){
    const err = querySelector('.err');
    const login_ = querySelector('.login_');
    const signup_ = querySelector('.signup_');
    const signB__ = querySelector('.signB__');

    try {
        const form = new FormData();
            form.append('name1',n1);
                form.append('name2',n2);
                    form.append('email',em);
                        form.append('phone',ph);
            form.append('password',pwd);
                form.append('cnpassword',cpwd);
                    form.append('ref',ref);

                    const req = await fetch(`${__root__()}/asset/apis/signup/`,{
                        method:"POST",
                        body:form
                    })
                const respons = await req.json();
                    console.log(respons);
            if(respons.status === true){
                err.style.setProperty('display','flex');
                err.innerHTML = respons.message;
                err.classList.add('success');
                console.log(respons);

                setTimeout(() => {
                    err.style.setProperty('display','none','important');
                    login_.style.setProperty('display','flex');
                    signup_.style.setProperty('display','none');
                },2000);
                return
            }

            // if('errorInfo' in respons.message && respons.message !== null){
            //     err.style.setProperty('display','flex');
            //     err.innerHTML = respons.message.errorInfo[2] + ' ' + 'allready exist';
            //     err.classList.remove('success');
            //     return
            // }

            err.style.setProperty('display','flex');
            err.innerHTML = respons.message;

    } catch (error) {
        err.style.setProperty('display','flex');
        err.innerHTML = error;
        err.classList.remove('success');
        console.error(error);
    }
}

async function Log_In(email, password){
    let err = querySelector('.err___');
    // const logB__ = querySelector('.logB__');

    const request = await fetch(`${__root__()}/asset/apis/login/`,{
        method:"POST",
        headers:{'Content-type': 'application/json'},
        body:JSON.stringify({email, password})
    });

    const result = await request.json();
    console.log(result);


    if(result.status !== 'success'){
        err.style.setProperty('display','flex');
        err.classList.remove('success');
        err.innerHTML = result.message;
        return;
    }

    err.style.setProperty('display','flex');
    err.classList.add('success');
    err.innerHTML = result.message + ', wait while redirecting...';

    setTimeout(() =>{
        window.location.href=`${__root__()}index.html`;
        err.style.setProperty('display','none', 'important');
    },2000);

}

async function Push_data_to_base(youtube,facebook,instagram,tiktok,twitter,uid,ufnme){
    let youtube_l = querySelector('.youtube_l');
            let facebook_l = querySelector('.facebook_');
                let instagram_l = querySelector('.instagram_l');
                    let tiktok_l = querySelector('.tiktok_');
                        let twitter_l = querySelector('.twitter_l');
    const request = await fetch(`${__root__2()}/asset/apis/sanitice/`,{
        method:"POST",
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({youtube,facebook,instagram,tiktok,twitter,uid,ufnme})
    });

    const result = await request.json();
    console.log(result);


    if(result.status !== 'success'){
        Error_msg(result.message);
        return;
    }
    youtube_l.value = result.response;
    facebook_l.value = result.response;
    instagram_l.value = result.response;
    tiktok_l.value = result.response;
    twitter_l.value = result.response;
    Success_msg(result.message);
}
