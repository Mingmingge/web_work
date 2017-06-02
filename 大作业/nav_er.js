/**
 * Created by hulimin on 2017/5/31.
 */
function displaySubMenu(li) {
    var subMenu = li.getElementsByTagName("dl")[0];
    subMenu.style.display = "block";
}
function hideSubMenu(li) {
    var subMenu = li.getElementsByTagName("dl")[0];
    subMenu.style.display = "none";
}
