/*
    解题思路：将数字每四个拆分一次，每次后面加万，亿，万亿，亿亿作为节权位
    然后单独将每四个数按情况转化为汉字，其他情况按下标即可转化，主要考虑为0的情况，
    当零为后面出现时，直接去除，当在两个大于零的数字中间出现时，将多个零合并为一个零
*/
let numChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
let numUnit = ["", "十", "百", "千"]; //权位
let numSection = ["", "万", "亿", "万亿", "亿亿"]; //节权位
const formatSection = (num: number) => {
  let arr = (num + "").split("").reverse() as any;
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    //将0-9转化为零到九
    let char = arr[i] == 0 ? numChar[0] : numChar[arr[i]] + numUnit[i]; //当数字为0时不加权位，非零加权位
    str = char + str;
  }
  let s = str.replace(/零+/g, "零").replace(/零+$/, ""); //将多个零合并为一个零，并剔除尾端的零
  return s;
};
const formatNum = (num: number, str: string) => {
  //将字符串按个数拆分
  let len = Math.ceil(str.length / num);
  let arr = [];
  for (let i = 0; i < len; i++) {
    let reverseStr = str.split("").reverse().join("");
    let s = reverseStr
      .slice(i * num, i * num + num)
      .split("")
      .reverse()
      .join("");
    arr.unshift(s);
  }
  return arr;
};
const numberTranToCN = (num: number) => {
  let arr = formatNum(4, num + "") as any; //将数字每四个拆分一次
  let list = [];
  for (let i = 0; i < arr.length; i++) {
    let str = formatSection(arr[i]);
    list.push(str);
  }
  let reverseList = list.reverse();
  for (let j = 0; j < reverseList.length; j++) {
    reverseList[j] += numSection[j];
  }
  return reverseList.reverse().join("");
};

export default numberTranToCN;
