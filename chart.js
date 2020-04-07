;
(function ($) {
  //测试的聊天数据的接收和填入
  var frw = document.getElementById("frw");
  var counts = "hahah",count=0;
  function getContent(cons) {
    counts += count++;
    info = cons || "";
    $.ajax({
      url: "http://route.showapi.com/60-27",
      data: {
        showapi_appid: 74620,
        showapi_sign: "90beb7e7390c40cba4a9fb61c73768e2",
        info: cons
      },
      dataType: 'JSON',
      success: function (data) {
        var list = data.showapi_res_body.text;
        var t =
          '<div class="chat-left-box " id="' + counts + '"><div class="left-img"><img src="./images/message/message-01_03.png" width="100%"></div><div class="left-txt"><div class="txt">' + list + '<div class="Lsanjiao"></div></div></div></div>'

        frw.innerHTML += t;
     
        document.getElementById(""+counts).scrollIntoView();
      }
    })
  }



  function send() {
    $("#con").keydown(function (event) {
      if (event.keyCode == 13) {
        var con = document.getElementById("con");
        var cons = con.value;
        var cons = cons.replace(/(^\s*)|(\s*$)/g, "");
        if (cons != "") {
          var s = '<div class="chat-right-box"><div class="right-img"><img src="./images/HeadPortrait1.jpg" alt="" width="100%"></div><div class="right-txt"><div class="txt">' + cons + '<div class="Rsanjiao"></div></div> </div></div>';
          frw.innerHTML += s;
          con.value = "";
          getContent(cons);
          frw.scrollTop = frw.scrollHeight - frw.offsetHeight;
        }
      }
    });
  }

  send()

}(jQuery))