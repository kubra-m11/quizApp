// OOP: Nesne Tabanlı Programlama
// Object


// let soru = {
//     soruMetni :"Hangisi JavaScript paket yönetim uygulamasıdır ?",
//     cevapSecenekleri : {
//         a :"Node.js",
//         b :"Typescript",
//         c :"Npm"
//     },
//     dogruCevap :"c",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
    
// }





// let soru2 = {
//     soruMetni :"Hangisi .net paket yönetim uygulamasıdır ?",
//     cevapSecenekleri : {
//         a :"Node.js",
//         b :"nuget",
//         c :"Npm"
//     },
//     dogruCevap :"b",
//     cevabiKontrolEt: function(cevap) {
//         return cevap === this.dogruCevap
//     }
    
// }



// Sınıf, Constructor => nesne * 30
// ES5, ES6, ES7    => Sınıf kavramı ES6dan itibaren anıldığı için yazdıklarımızı bir transpiler(dönüştürü) aracılığı ile ES5'e dönüştürürüz.



const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function() {
    if(quiz.sorular.length != quiz.soruIndex){
        ui.quiz_box.classList.add("active");
        startTimer(10);
        startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    }
});

ui.btn_next.addEventListener("click", function(){
    if(quiz.sorular.length != quiz.soruIndex +1){
        quiz.soruIndex += 1;
        clearInterval(counter);
        clearInterval(counterLine);
        startTimer(10);
        startTimerLine();

        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGöster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

// const option_list = document.querySelector(".option_list");
// const correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`;
// const incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`;

ui.btn_quit.addEventListener("click",function(){
    window.location.reload();
});

ui.btn_replay.addEventListener("click",function(){
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});


function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
    }else{
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);


    }

    for(let i=0; i<ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled");
    }
    ui.btn_next.classList.add("show");

};

let counter;
function startTimer(time){
    counter = setInterval(timer, 1000);  
    //setInternal methodu timer adlı fonksiyonu bulup bunu 1 saniyede bir çalıştıracak 
    //counter adında bir değişken tanımlayıp sonra buna setInternal ile temizleyecek olduğumuz objenin referansını bize geriye döndürüyor.

    function timer(){
       ui.time_second.textContent = time;              //textContent ile bu etiketlerin arasına text bilgisi ekliyoruz.
       time--;


       if(time < 0){
            clearInterval(counter);        // clearInternal ile temizlenecek olan setInternal'ın referansını vermiş olduk
            ui.time_text.textContent ="Süre bitti";

            let cevap = quiz.soruGetir().dogruCevap;

            for(let option of ui.option_list.children){

                if(option.querySelector("span b").textContent == cevap){
                     option.classList.add("correct");
                 option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }

                option.classList.add("disabled");
            }

            ui.btn_next.classList.add("show");
        } 
    }          
}

let counterLine;
function startTimerLine(){
    
    let line_width = 0;

    counterLine = setInterval(timer, 20);

    function timer(){
        line_width += 1;
        ui.time_line.style.width = line_width +"px";

        if(line_width > 549){
            clearInterval(counterLine);
        }
    }



}

