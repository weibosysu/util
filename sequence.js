var str = 'abc';
var arr = str.split('');
var permutation = []; // store

function swap(index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function generate(int) {
    if (int === 1) {
        // use JSON.parse(JSON.stringify(arr)) insteadof arr;
       permutation.push(arr.join(''));
    } else {
        for (var i = 0; i < int; i++) {
            generate(int - 1);
            swap(int % 2 ? 0 : i, int - 1);
        }
    }
}

// test
generate(arr.length);

/*
 * generate(3) >> 3 * ( generate(1) + swap(0, 1),  generate(1) + swap (1, 1) + swap(0, 2) );
 * generate(2) >> generate(1) + swap(0, 1), generate(1) + swap(1, 1)
 * generate(1) >> 
 * abc bac cab acb bca cba
**/
