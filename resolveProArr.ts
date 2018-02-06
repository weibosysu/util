resolveProArr = (arr: any[], s: number) => {
    // 数组交叉集合
    const allProArr: any[] = [];
    const indexs: any = {};
    const specialSort = (arrArgs: any[], start: number) => {
        const len = arrArgs.length;
        // const localAllPro = [];
        if (start > len - 1) {
            return;
        }
        if (!indexs[start]) {
            indexs[start] = 0;
        }
        if (!(arrArgs[start] instanceof Array)) {
            arrArgs[start] = [arrArgs[start]];
        }
        for (indexs[start] = 0; indexs[start] < arrArgs[start].length; indexs[start] += 1) {
            specialSort(arrArgs, start + 1);
            if (start === len - 1) {
                const temp = [];
                for (let i = len - 1; i >= 0; i -= 1) {
                    if (!(arrArgs[start - i] instanceof Array)) {
                        arrArgs[start - i] = [arrArgs[start - i]];
                    }
                    temp.push(arrArgs[start - i][indexs[start - i]]);
                }
                allProArr.push(temp.sort().toString());
            }
        }
    };
    specialSort(arr, s);
    return allProArr;
}
