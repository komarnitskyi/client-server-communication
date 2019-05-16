function volume(width, height, length) {
    return width * height * length;
}
console.log(volume(2, 3, 100));

function volumeByLength(length) {
    return function (width, height) { return volume(width, height, length) }
}
const volumeByLength100 = volumeByLength(100);
console.log(volumeByLength100(2,3));
