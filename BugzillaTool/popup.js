
document.addEventListener("DOMContentLoaded", function () {
  checkLocalStorage();

  var aVersionReport_url = "https://bugzilla.corp.qihoo.net/report.cgi?x_axis_field=bug_severity&y_axis_field=bug_status&z_axis_field=&query_format=report-table&short_desc_type=allwordssubstr&short_desc=&classification=360%E6%99%BA%E8%83%BD%E6%9C%BA%E5%99%A8%E4%BA%BA&product=360%E6%99%BA%E8%83%BD%E6%91%84%E5%83%8F%E6%9C%BA&component=Android%E5%AE%A2%E6%88%B7%E7%AB%AF&version="+localStorage.getItem("androidText")+"&longdesc_type=allwordssubstr&longdesc=&bug_file_loc_type=allwordssubstr&bug_file_loc=&keywords_type=allwords&keywords=&bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&emailtype1=substring&email1=&emailtype2=substring&email2=&bug_id_type=anyexact&bug_id=&chfieldfrom=&chfieldto=Now&chfieldvalue=&format=table&action=wrap&field0-0-0=noop&type0-0-0=noop&value0-0-0=";
  var iVersionReport_url = "https://bugzilla.corp.qihoo.net/report.cgi?x_axis_field=bug_severity&y_axis_field=bug_status&z_axis_field=&query_format=report-table&short_desc_type=allwordssubstr&short_desc=&classification=360%E6%99%BA%E8%83%BD%E6%9C%BA%E5%99%A8%E4%BA%BA&product=360%E6%99%BA%E8%83%BD%E6%91%84%E5%83%8F%E6%9C%BA&component=IOS%E5%AE%A2%E6%88%B7%E7%AB%AF&version="+localStorage.getItem("iosText")+"&longdesc_type=allwordssubstr&longdesc=&bug_file_loc_type=allwordssubstr&bug_file_loc=&keywords_type=allwords&keywords=&bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&emailtype1=substring&email1=&emailtype2=substring&email2=&bug_id_type=anyexact&bug_id=&chfieldfrom=&chfieldto=Now&chfieldvalue=&format=table&action=wrap&field0-0-0=noop&type0-0-0=noop&value0-0-0=";
  var rVersionReport_url = "https://bugzilla.corp.qihoo.net/report.cgi?x_axis_field=bug_severity&y_axis_field=bug_status&z_axis_field=&query_format=report-table&short_desc_type=allwordssubstr&short_desc=&classification=360%E6%99%BA%E8%83%BD%E6%9C%BA%E5%99%A8%E4%BA%BA&product=360%E6%99%BA%E8%83%BD%E6%91%84%E5%83%8F%E6%9C%BA&component=%E5%9B%BA%E4%BB%B6ROM&longdesc_type=allwordssubstr&longdesc=&bug_file_loc_type=allwordssubstr&bug_file_loc=&keywords_type=allwords&keywords=&bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&emailtype1=substring&email1=&emailtype2=substring&email2=&bug_id_type=anyexact&bug_id=&chfieldfrom=&chfieldto=Now&chfieldvalue=&format=table&action=wrap&field0-0-0=noop&type0-0-0=noop&value0-0-0=";

  buttonClick("aVersionAll","a","ALL","0","CAMERA");
  buttonClick("iVersionAll","i","ALL","0","CAMERA");
  buttonClick("rVersionAll","r","ALL","0","CAMERA");

  buttonClick("aVersionNew","a","NEW","0","CAMERA");
  buttonClick("iVersionNew","i","NEW","0","CAMERA");

  buttonClick("aVersionRESO","a","RESOLVED","0","CAMERA");
  buttonClick("iVersionRESO","i","RESOLVED","0","CAMERA");

  buttonClick("aDailyCreate","a","ALL","1","CAMERA");
  buttonClick("iDailyCreate","i","ALL","1","CAMERA");

  buttonClick("robot_aVersionAll","ra","ALL","0","ROBOT");
  buttonClick("robot_iVersionAll","ri","ALL","0","ROBOT");
  buttonClick("robot_rVersionAll","rr","ALL","0","ROBOT");

  buttonClick("robot_aVersionNew","ra","NEW","0","ROBOT");
  buttonClick("robot_iVersionNew","ri","NEW","0","ROBOT");
  buttonClick("robot_rVersionNew","rr","NEW","0","ROBOT");

  buttonClick("robot_aVersionRESO","ra","RESOLVED","0","ROBOT");
  buttonClick("robot_iVersionRESO","ri","RESOLVED","0","ROBOT");
  buttonClick("robot_rVersionRESO","rr","RESOLVED","0","ROBOT");

  buttonClick("robot_aDailyCreate","ra","ALL","1","ROBOT");
  buttonClick("robot_iDailyCreate","ri","ALL","1","ROBOT");
  buttonClick("robot_rDailyCreate","rr","ALL","1","ROBOT");


  document.getElementById("aVersionReport").addEventListener("click", function () {
    chrome.tabs.create({ url: aVersionReport_url });
  });
  document.getElementById("iVersionReport").addEventListener("click", function () {
    chrome.tabs.create({ url: iVersionReport_url });
  });
  document.getElementById("rVersionReport").addEventListener("click", function () {
    chrome.tabs.create({ url: rVersionReport_url });
  });

  ChangeButtonClick("androidChange","androidText");
  ChangeButtonClick("iosChange","iosText");
  ChangeButtonClick("robot_androidChange","robot_androidText");
  ChangeButtonClick("robot_iosChange","robot_iosText");
  ChangeButtonClick("robot_romChange","robot_romText");

});


function checkLocalStorage(){
  if (window.localStorage == null) {
    alert("本地不支持localStorage");
  }
  else{
    loadLocalStorage();
  }
}

function loadLocalStorage(){
  if(localStorage.getItem("BugzillaTool")=="true")
  {
    document.getElementById("androidText").value = localStorage.getItem("androidText");
    document.getElementById("iosText").value = localStorage.getItem("iosText");
    document.getElementById("robot_androidText").value = localStorage.getItem("robot_androidText");
    document.getElementById("robot_iosText").value = localStorage.getItem("robot_iosText");
    document.getElementById("robot_romText").value = localStorage.getItem("robot_romText");
  }
  else {
    localStorage.setItem("BugzillaTool","true");
    localStorageSet("androidText","A5.3.2.80");
    localStorageSet("iosText","I5.3.3");
    localStorageSet("robot_androidText","1.0.0.1001");
    localStorageSet("robot_iosText","1.0.0.1001");
    localStorageSet("robot_romText","1.0.0.1001");
  }
}

function CurrentTime(){
  var myDate = new Date();
  var year = myDate.getFullYear();
  var month = myDate.getMonth()+1;
  var day = myDate.getDate();

  var ctime = year + "-";
  if(month < 10) ctime += "0";
  ctime += month + "-";
  if(day < 10) ctime += "0";
  ctime += day;

  return ctime;
}

function buttonClick(id,type,status,fieldform,prod){
  var version = "&version=";
  var component = "&component=";
  var bug_status = "&bug_status="+status;
  var product = "&product=";

  var cTime = CurrentTime();
  var chfieldfrom = "";
  if(type == 'a'){
    version += localStorage.getItem("androidText");
    component += "Android%E5%AE%A2%E6%88%B7%E7%AB%AF";
  }
  else if (type == 'i') {
    version += localStorage.getItem("iosText");
    component += "IOS%E5%AE%A2%E6%88%B7%E7%AB%AF";
  }
  else if (type == 'r'){
    version = "";
    component += "%E5%9B%BA%E4%BB%B6ROM";
  }
  else if(type == 'ra'){
    version += localStorage.getItem("robot_androidText");
    component += "手机android端";
  }
  else if (type == 'ri') {
    version += localStorage.getItem("robot_iosText");
    component += "手机IOS端";
  }
  else {
    version += localStorage.getItem("robot_romText");
    component += "平板APK%26ROM";
  }
  if(status == "ALL"){
    bug_status = "&bug_status=UNCONFIRMED&bug_status=NEW&bug_status=ASSIGNED&bug_status=REOPENED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED";
  }
  if(fieldform == "1"){
    chfieldfrom = "&chfield=%5BBug%20creation%5D&chfieldfrom="+cTime;
  }
  if(prod == "ROBOT"){
    product += "%E5%B1%8F%E5%B9%95%E6%9D%BF";
  }
  else {
    product += "360%E6%99%BA%E8%83%BD%E6%91%84%E5%83%8F%E6%9C%BA";
  }

  document.getElementById(id).addEventListener("click", function () {
    var buttonClickUrl = "https://bugzilla.corp.qihoo.net/buglist.cgi?query_format=advanced"+chfieldfrom+bug_status+version+component+product+"&classification=360%E6%99%BA%E8%83%BD%E6%9C%BA%E5%99%A8%E4%BA%BA";
    chrome.tabs.create({ url: buttonClickUrl });
  });
}

function ChangeButtonClick(changeId,textId){
  document.getElementById(changeId).addEventListener("click", function () {
    localStorage.setItem(textId,document.getElementById(textId).value);
    location.reload();
  });
}

function localStorageSet(key,value){
  localStorage.setItem(key,value);
  document.getElementById(key).value = value;
}
