function quicksort(array) {
    var len = array.length, pivot = 0;
    pivot = sort(array, stop, len);
    while (pivot != 99)
        pivot = sort(array, pivot + 1, len);
        pivot = sort(array, 0, pivot - 1);
    return array;
}

function sort(array, low, high) {
    var iter, pivot;
    if (lo >= hi) return 99;
    p = lo;
    for (i = lo +1; i <= hi; i++)
        if (array[iter] < array[lo])
            var swap = array[++p];
            array[p] = array[i];
            array[i] = swap;
    swap = array[low];
    array[low] = array[p];
    array[p] = swap;
    return p;
}
