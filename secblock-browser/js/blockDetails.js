$(function() {
  blockDetailsList ()
  blockDetailsTable ()
})

// 区块详情列表数据展示
function blockDetailsList () {
  $("#state").html("Successd");
  $("#hashValues").html("368b6e159db7ca2ec3849a2dfcc0bac1dcea723589c083f6f8c71608cd9f5a67");
  $("#heightBlock").html("1226");
  $("#time").html("2018-11-14 10:37 UTC");
  $("#capacity").html("12508 bytes");
  $("#fatherHash").html("0x471268beda3a110e4f9a30ad998badfdeab027d2");
  $("#difficulty").html("0x471268beda3a110e4f9a30ad998badfdeab027d2");
  $("#gasUsed").html("8116");
  $("#gasLimit").html("84400");
  $("#extraData").html("Test Token cases");
  $("#transactionsRoot").html("0.1.3");
  $("#receiptRoot").html("0.711");
  $("#logsBloom").html("8bd6b0bfb4b254f58b59fb73ee74fca3e02d5e1d5f7d508b193c70a95d93535f0f4b62ff8256a21ef0e5bd58624bed7177f350f1e7171664431d055d867f8463b6117a657d096126d71fbc0319a7116b0115b56e3fa9f91216db4dddec2da229e9691ca53b31fcd7a1b450b786f88b1afd596ad2211983d394bdf4f3c2d34f0a7bc081c8afc441a30a35c5b6c403b6a10b7d10e5c38a8580bc7566a392e33ee53cdc9ca60821f905c38a3b00d9f9d7ec80e62fd7c04193210e904f56e3c2088f6c651c49c125c1514df53f9d182e1adf20c0a3deb363153c212f969b7221cb0d329ad4b178fea892d838dbe233381e761ecbfb1a2618a9d0cf3d0343a1e04ae1");
  $("#mixHash").html("28015c6c5677706dce00b51cf109514d981bbc10acc75260d6bd7d8a7bba6f23");
  $("#stateRoot").html("af06c7d886e232ddc7982063f148e062821513b871e387537fb9c98b6c255af4");
  $("#nonce").html("3345ee7463eb5b03");
  $("#reward").html("3.011033160813214992");
  $("#beneficiary").html("1AVM7PKp8mGJA8LjkozCgZWU34aVw7kj5a");
}

// 区块详情table
function blockDetailsTable () {

  // 接口请求的总条数
  $("#total").html("2")
}
