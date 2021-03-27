cities = [
    {name: "新北市", coords: [359,38,371,32,365,26,357,16,334,15,319,35,303,40,308,48,321,54,319,63,310,68,313,89,324,90,326,105,335,114,353,107,353,98,380,86,395,71,408,67,415,68,419,57,410,52,409,43,390,42,381,50,372,54,364,62,349,72,335,62,330,51,328,40,342,30,351,30,359,38], pos: [332, 76]},
    {name: "臺北市", coords: [349,69,361,61,357,55,357,46,350,34,344,34,332,42,334,57,349,67], pos: [340, 47]},
    {name: "基隆市", coords: [358,41,363,51,369,54,388,43,378,38,375,35,358,41], pos: [367, 39]},
    {name: "桃園市", coords: [254,70,261,56,297,41,303,47,317,54,316,61,307,68,312,90,322,92,323,105,332,116,324,131,313,124,305,105,284,88,254,70], pos: [287, 67]},
    {name: "新竹市", coords: [242,85,253,92,261,103,255,110,244,109,236,105,239,98,241,87], pos: [242, 92]},
    {name: "新竹縣", coords: [245,81,264,96,265,106,255,112,259,121,268,123,267,132,269,141,283,138,291,142,301,152,317,141,321,131,311,124,303,106,252,71,245,80], pos: [279, 109]},
    {name: "苗栗縣", coords: [234,104,250,113,257,123,266,127,267,147,287,142,300,155,291,162,278,168,268,174,260,177,252,172,245,172,241,178,213,171,195,154,203,135,213,120,232,109], pos: [235, 138]},
    {name: "臺中市", coords: [192,156,210,172,241,180,247,175,254,175,260,179,293,163,303,156,310,163,326,166,319,178,312,187,303,186,298,183,287,189,265,197,258,197,255,203,230,205,220,221,204,219,196,217,192,208,181,203,179,195,172,192,175,172,192,157], pos: [217, 188]},
    {name: "彰化縣", coords: [164,197,170,194,177,197,179,204,189,209,195,219,197,229,195,247,199,256,188,259,164,252,155,251,149,255,134,249,143,233,145,224,159,211,163,198], pos: [167, 223]},
    {name: "雲林縣", coords: [131,251,148,258,157,253,188,262,200,258,214,283,212,292,198,291,182,290,164,284,133,303,114,299,119,268,131,252], pos: [157, 265]},
    {name: "嘉義縣", coords: [113,301,132,305,163,288,189,294,213,295,218,284,236,289,245,307,231,323,210,340,203,340,199,352,184,350,179,331,169,322,172,315,187,311,169,293,150,308,164,316,164,321,152,320,130,339,114,332,118,323,113,301], pos: [192, 309]},
    {name: "嘉義市", coords: [168,298,180,310,168,315,157,308,164,302], pos: [164, 303]},
    {name: "臺南市", coords: [112,335,128,342,154,324,166,325,177,332,181,352,196,356,189,373,170,387,164,398,149,404,119,399,113,387,100,381,102,368,104,353,112,336], pos: [142, 357]},
    {name: "高雄市", coords: [120,403,151,407,166,401,171,392,189,377,205,345,211,343,247,310,260,317,256,325,262,332,261,339,244,346,237,379,229,391,234,407,219,408,203,405,185,413,159,473,130,447,132,432], pos: [184, 387]},
    {name: "屏東縣", coords: [163,475,188,416,204,408,232,411,237,421,232,432,221,437,213,462,220,482,215,489,222,501,241,510,240,522,230,561,214,562,205,552,203,540,204,522,193,499,163,475], pos: [190, 467]},
    {name: "宜蘭縣", coords: [304,154,319,146,334,118,354,109,356,99,381,87,397,72,410,69,390,101,401,136,382,172,357,168,347,173,324,163,312,161,305,154], pos: [357, 131]},
    {name: "花蓮縣", coords: [329,168,346,176,361,171,383,177,367,195,364,205,358,216,361,223,341,304,343,312,338,318,325,318,321,329,309,370,298,372,284,355,273,352,264,342,265,332,260,325,265,305,279,300,279,292,292,287,297,273,292,262,299,245,301,220,308,208,303,202,311,194], pos: [317, 253]},
    {name: "臺東縣", coords: [247,349,261,344,271,353,281,356,296,374,311,372,327,322,336,321,332,336,328,340,324,367,314,378,304,396,290,412,289,421,279,433,262,441,241,508,223,499,218,490,223,484,216,465,223,441,233,436,241,424,235,411,241,407,233,393,240,383,247,350], pos: [259, 404]},
    {name: "南投縣", coords: [198,221,221,224,230,210,256,207,259,201,269,200,298,187,311,189,302,201,304,209,298,231,289,260,293,272,290,286,277,291,276,298,265,304,261,313,248,308,241,289,217,281,199,247,199,222], pos: [246, 244]},
    {name: "連江縣", coords: [42,75,48,93,115,59,107,47,89,49,44,76], pos: [72, 62]},
    {name: "金門縣", coords: [16,129,52,117,61,131,53,142,31,144,15,140,15,131], pos: [39, 125]},
    {name: "澎湖縣", coords: [28,291,37,276,58,256,64,295,44,312,44,327,67,337,66,346,21,343,20,326,32,321,29,291], pos: [46, 287]}
];

wximg = {
    "1": "2600", "2": "1f324", "3": "26c5", "4": "26c5",
    "5": "1f325", "6": "1f325", "7": "2601", "8": "1f327",
    "9": "1f327", "10": "1f327", "11": "1f327", "12": "1f326",
    "13": "1f326", "14": "1f327", "15": "26c8", "16": "26c8",
    "17": "26c8", "18": "26c8", "19": "26c8", "20": "26c8",
    "21": "26c8", "22": "26c8", "23": "1f328", "24": "1f32b",
    "25": "1f32b", "26": "1f32b", "27": "1f32b", "28": "1f32b",
    "29": "1f326", "30": "1f326", "31": "1f327", "32": "1f327",
    "33": "26c8", "34": "26c8", "35": "26c8", "36": "26c8",
    "37": "1f32b", "38": "1f32b", "39": "1f327", "41": "1f327",
    "42": "26c4"
}