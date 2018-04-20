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
        expect(getBabiChar("か")).toBe("ば");
        expect(getBabiChar("さ")).toBe("ば");
        expect(getBabiChar("た")).toBe("ば");
        expect(getBabiChar("な")).toBe("ば");
        expect(getBabiChar("は")).toBe("ば");
        expect(getBabiChar("ま")).toBe("ば");
        expect(getBabiChar("や")).toBe("ば");
        expect(getBabiChar("ら")).toBe("ば");
        expect(getBabiChar("わ")).toBe("ば");
        expect(getBabiChar("が")).toBe("ば");
        expect(getBabiChar("ざ")).toBe("ば");
        expect(getBabiChar("だ")).toBe("ば");
        expect(getBabiChar("ば")).toBe("ば");
        expect(getBabiChar("ぱ")).toBe("ば");

    })

});