function display(x){
    document.getElementById('result').value += x;
}

function calculate(){
    let x = document.getElementById('result').value;
    let strr = x.toString();
    if (strr.includes('..') || strr.includes('++') || strr.includes('--') || strr.includes('**') || strr.includes('//')) {
        document.getElementById('result').value = 'Error operation'
    } else {
            let y = eval(x);
            document.getElementById('result').value = Math.round(y * 1000) / 1000;
        }
}

function clearDisplay(){
    document.getElementById('result').value = '';
}