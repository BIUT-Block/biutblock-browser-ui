$(function() {
  indexList ()
  blockList ()
  tradingList ()

  $("#secLogo").mouseover(function(){
    $("#secLogoImg").attr("src","./images/secActive.png");
  });
  $("#secLogo").mouseout(function(){
    $("#secLogoImg").attr("src","./images/sec.png");
  });

  $("#footerWeibo").mouseover(function(){
    $("#footerWeiboImg").attr("src","./images/weiboActive.png");
  });
  $("#footerWeibo").mouseout(function(){
    $("#footerWeiboImg").attr("src","./images/weibo.png");
  });
  $("#submenuList").mouseover(function(){
    $("#submenuFather").addClass("listHeaderActive")
  });
  $("#submenuList").mouseout(function(){
    $("#submenuFather").addClass("listHeader");
  });
})

// 节点列表数据
function indexList () {
  $("#onlineNode").html("200");
  $("#currentHeight").html("100");
  $("#accountNumber").html("300");
  $("#current").html("80");
  $("#peak").html("200");
  $("#price").html("0.1437 USD");
}

// 区块列表 table
function blockList () {

}

// 交易列表 table
function tradingList () {

}