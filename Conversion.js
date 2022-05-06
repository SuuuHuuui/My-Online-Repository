/*js名称：Conversion.js
* 更新功能：
1.xlxs数据标题行自行读入数组，不再使用手动对照增加
2.所得数组用module导出，不需要变成json
* 版本号2.1
*/
const xlsx = require("node-xlsx")
const fs = require("fs")

// 读取xlsx
const sheets = xlsx.parse("./Employee_data.xlsx")

function GetExcelData ()
{
    // 获取xlsx第一个标签栏的数据
    const sheetData = sheets[0].data

    // 定义数据列表
    let testTitle =  [] //装标题行

    let testList = [] //装标题行+数据行

    testTitle = sheetData[0]//读入标题行
    
    // 循环拼装数据
    sheetData.forEach((item, index) => 
    {
        var vot = {}
        if (index == 0)
            {
                return
            } 
                
        else 
            {
                  for(var i = 0 ; i < testTitle.length ; i++)
                  {
                        vot[testTitle[i]] = item[i]
                  }
                    
                  testList.push(vot)
            }
        
    })
    return testList
    //console.log("Can you see me?")
}

module.exports.GetExcelData_Function = GetExcelData//此处也要改，输出的是个函数