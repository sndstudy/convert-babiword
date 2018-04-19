function stringSlice(targetStr){

    var arrayChar = [];

    for(var i=0; i<targetStr.length;i++){
        
        arrayChar.push(targetStr.charAt(i));

    }

    return arrayChar;
    
};

function getBabiChar(targetChar){

    const babiTable = {
        "ば":["あ","か","さ","た","な","は","ま","や","ら","わ","が","ざ","だ","ば","ぱ"]
    }

    //母音をもとに「ば」「び」「ぶ」「べ」「ぼ」に変換する
    var result = Object.keys(babiTable).filter((key)=>{
        
        if(babiTable[key].indexOf(targetChar)>=0){
            
            return key;
        }

    });

    return result[0];

};