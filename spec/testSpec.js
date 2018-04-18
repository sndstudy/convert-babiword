var rewire = require("rewire");
var index = rewire("../index.js")

describe("文字列分割テスト",function(){

    it("ひらがなのみ",function(){
        var stringSlice = index.__get__("stringSlice");
        expect(stringSlice("あいうえお").length).toBe(5);
    });

});