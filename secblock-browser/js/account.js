$(function() {
  accounDetails ()
  accounTable ()
})

// 账户详情列表数据展示
function accounDetails () {
  $("#address").html("TMuA6YqfCeX8EhbfYEg5y7S4DqzSJ")
  $("#income").html("200")
  $("#spending").html("200")
  $("#balance").html("200 SEC")
}

// 账户详情table
function accounTable () {

  // 接口请求的总条数
  $("#total").html("2")
}
