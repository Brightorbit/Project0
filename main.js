/*
1. 회사 상표 맨 중앙 상단
2. 두 개의 박스 (값을 입력하면 엑셀과 대조해서 아래에 출력)
3. 박스 하단에 버튼 하나 (로그인 버튼)
4. 그 하단에 두 개의 버튼 (출근/퇴근) >> 드랍다운 리스트로 표현 가능
5. 박스에 숫자를 입력받음
6. 
*/

var xmlHttp;
function srvTime(){
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD',window.location.href.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}

var st = srvTime();
var date = new Date(st);