
const delay = ms => new Promise(res => setTimeout(res, ms));

texto = new String;
t2 = new String;

var i=0;

const typingAni = async (id,skip=0,skipf=1) => {
    
    texto = document.getElementById(id).textContent;
    
    for (i=0 ; i<texto.length ; i+=(skip+1) )
    {
        t2+=texto.charAt(i);
        document.getElementById(id).textContent=t2;
        await delay(40+i*2);
        document.getElementById(id).style="color:#000c;";

    }
    await delay(150);
    texto = t2;
    t2="";
    for (i=0 ; i<texto.length-skipf ; i++ )
    {
        t2+=texto.charAt(i);
        document.getElementById(id).textContent=t2;
    }

};

