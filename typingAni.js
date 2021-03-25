
const delay = ms => new Promise(res => setTimeout(res, ms));

const typingAni = async (id=null,skip=0,skipf=0, speed =1) => {

    texto = new String("");
    t2 = new String("");

    var i=0;
    texto = document.getElementById(id).textContent;
    
    for (i=0 ; i<texto.length ; i+=(skip+1) )
    {
        t2+=texto.charAt(i);
        document.getElementById(id).textContent=t2;
        if (i==0) document.getElementById(id).style="opacity:1";
        if (speed!=100) await delay((40+i*2)/speed);        

    }
    await delay(150);
    texto = t2;
    t2="";
    for (i=0 ; i<texto.length-skipf ; i++ )
    {
        t2+=texto.charAt(i);
        
    }
    document.getElementById(id).textContent=t2;

    
};
