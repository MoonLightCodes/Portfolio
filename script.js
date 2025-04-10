function download(){
    const a = document.createElement('a');
    a.href = './d.txt';
    a.download = 'resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
let loaded = false;
window.onload = function() {
    project();
    loaded= true;

}
function home(){
    document.documentElement.scrollTop = 0;
}
function about(){
    document.querySelector('.main2').scrollIntoView({inline:"center",block:"center"});
}
function portfolio(){
    document.querySelector('.main3').scrollIntoView({inline:"center",block:'center'});
}
function contact(){
    document.querySelector('.main4').scrollIntoView({inline:"center",block:'start'});
}
function makeCall() {
    window.location.href = "tel:+919182028863";
}
function skills() {
    const a = document.querySelector('.sk');
    document.querySelector('.pssk').classList.add('pssk2');
    let top = document.body.scrollTop || document.documentElement.scrollTop;
    a.scrollIntoView({ behavior: 'smooth' , inline: 'center',block: 'center'});
    document.body.scrollTop = top;
    document.documentElement.scrollTop = top;
}
function project() {
    const a = document.querySelector('.ps');
    document.querySelector('.pssk').classList.remove('pssk2');
    let top = document.body.scrollTop || document.documentElement.scrollTop;
    a.scrollIntoView({ behavior: 'smooth' , inline: 'center',block: 'center'});
    document.body.scrollTop = top;
    document.documentElement.scrollTop = top;
}
const ps = document.querySelector('.ps');
let index = 0;
let stopScroll = false;
let  scroller;
let scrollCaller;
ps.addEventListener('wheel',()=>{
    clearTimeout(scroller);
    clearTimeout(scrollCaller);
    stopScroll = true;
    ps.style.transform = `translateY(0%)`;
    scrollCaller=setTimeout(()=>{
        stopScroll=false;
        index=ps.children.length - 1;
        autoScroll();

    },5000)
});

function autoScroll(){
    if(stopScroll)return;
     scroller = setTimeout(() => {
        ps.style.transform = `translateY(-${index*102.5}%)`;
        index++;
        if(index > ps.children.length - 1){
            index = 0;
        }
        autoScroll();
    }, 2000);
}
autoScroll();