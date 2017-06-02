/**
 * Created by hulimin on 2017/5/28.
 */
var Curscreen=1;
var MaxScreen=5;
var tim=null;
function $(id) {
    return document.getElementById(id);

}
function switchpic(){

    if(Curscreen==MaxScreen)
    {
        Curscreen=1;
    }
    else
    {
        Curscreen++;
    }
    $("carousel_pic").src="img_"+Curscreen+".jpg";
}
function restart(){
    switchpic ();
    init();
}
function pause() {
    clearInterval(tim);

}
function init() {
    tim=setInterval('switchpic();',20000);

}
function te() {
    document.getElementById("carousel_pic").src="img_1.jpg";

}
function bghuan(id) {
   $(id).style.backgroundColor="green";


}