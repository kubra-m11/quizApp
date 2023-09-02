function Soru(soruMetni,cevapSecenekleri,dogruCevap) {
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
    
};


Soru.prototype.cevabiKontrolEt = function(cevap) {
    return cevap === this.dogruCevap
};

let sorular =[
    new Soru("1-Hangisi js paket yönetim uygulamasıdır ?", {a:"Node.js", b:"Typescript",c:"Npm"},"c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilemez?",{a:"Css", b:"Html", c:"Js", d:"Sql"}, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?",{a:"Node.js", b:"Typescript", c:"Angular", d:"React"}, "a"),
    new Soru("4-Hangisi javascript programlama dilini  kullanamaz ?",{a:"React", b:"Angular", c:"Vue.js",d:"Asp.net"}, "a"),
    new Soru("5-Hangisi javascript paket yönetim uygulamasıdır ?",{a:"Node.js", b:"Typescript", c:"Npm"}, "c"),
];
