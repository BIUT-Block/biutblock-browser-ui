$(function () {
  accounDetails()
  accounTable()

  $("#copyBtn").on("click", function () {
    var text = document.getElementById('address');
    if (document.body.createTextRange) {
      var range = document.body.createTextRange();
      range.moveToElementText(text);
      range.select();
    } else if (window.getSelection) {
      var selection = window.getSelection();
      var range = document.createRange();
      range.selectNodeContents(text);
      selection.removeAllRanges();
      selection.addRange(range);
      $("#copyBtn").html("已复制").css({"background":"#434f5c","color":"#98a6ad"});
    }
    document.execCommand('Copy');
  })
})

// 账户详情列表数据展示
function accounDetails() {
  $("#address").html("TMuA6YqfCeX8EhbfYEg5y7S4DqzSJ")
  $("#income").html("200")
  $("#spending").html("200")
  $("#balance").html("200 SEC")
}

// 账户详情table
function accounTable() {

  // 接口请求的总条数
  $("#total").html("2")
}
