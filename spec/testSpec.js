var stringSlice = require("../stringSlice.js");

describe("文字列分割テスト",function(){

    it("ひらがなのみ",function(){
        expect(stringSlice("あいうえお").length).toBe(5);
    });

});