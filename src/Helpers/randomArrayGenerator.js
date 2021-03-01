export default function handleGenerateRandArr(size){
    size = size?size:100;
    let arr = [];
    let current = 0;
    while(current < size){
        let number = 0;
        while(number < 1){
            number = Math.floor(Math.random() * 10);
        }
        arr.push(number);
        current++;
    }
    return arr;
}