


ajaxRequest( "GET",getBlockToView,data,TransSuccessCallback,TransFailureCallback);

var data ={

};

var contractType;
var contractList;
TransSuccessCallback = function (data) {



  var currentBlock = base64DecodeFromString(data);

  //调用方法deserializeBinary解析
  var blockData = proto.protocol.Block.deserializeBinary(currentBlock);
  var blockNumber= blockData.getBlockHeader().getRawData().getNumber();
  var witnessId=blockData.getBlockHeader().getRawData().getWitnessId();
  var witnessNum=1;

  console.log("blockNumber : "+blockNumber+" witnessId : "+witnessId);

  var txlist= blockData.getTransactionsList();

  for(var i=0; i<txlist.length;i++){
    var transactionType = txlist[i].getRawData().getType();

    if(transactionType==1){
         contractList = transactionType.getContractList();
        for(var i=0; i<contractList.length;i++){
          contractType = contractList[i].getType();
         if(contractType==1){
           console.log("contract is : " + contractList[i]);
           console.log("contractType is : " + contractType);
         }
        }
    }

    }

    $("#block_num").text(blockNumber);
    $("#witness_num").text(witnessNum);



};

TransFailureCallback = function (err) {
  console.log('err')
};