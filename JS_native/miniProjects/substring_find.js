/* Проверка наличия подстроки */

function checkSpam(str){
	if (!str) return false;

	return ((str.toLowerCase()).includes('viagra') || (str.toUpperCase()).includes('XXX'))
}

alert(checkSpam('buy ViAgRA now') == true);
alert(checkSpam('free xxxxx') == true);
alert(checkSpam("innocent rabbit") == false);