var rewire = require("rewire");
var index = rewire("../index.js")

describe("文字列分割テスト",function(){

    it("ひらがなのみ",function(){
        var stringSlice = index.__get__("stringSlice");
        expect(stringSlice("あいうえお").length).toBe(5);
    });

});

describe("母音テスト",function(){

    var getBabiChar;

    beforeEach(function(){

        getBabiChar = index.__get__("getBabiChar");

    });


    it("母音がaの場合",function(){

        expect(getBabiChar("あ")).toBe("ば");

    })

});