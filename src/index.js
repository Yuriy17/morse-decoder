const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let ten_trigger=0,symbol='',sentence='',pair=true;
    for (let i = 0; i < expr.length; i++) {
        ten_trigger++;
        if(expr[i]=='1'&&expr[i-1]=='1'&&pair==false){
            symbol+='-';
            pair=true; 
        }else if(expr[i]=='1'&&pair==true){
            pair=false;
        }else if(expr[i]=='0'&&expr[i-1]=='1'&&pair==false){
            symbol+='.';
            pair=true; 
        }else if(expr[i]=='*'&&expr[i+9]=='*'){
            sentence+=' ';
            ten_trigger=0;
            symbol='';
            i+=9;
            continue;
        }
        if (ten_trigger==10){
            sentence+=MORSE_TABLE[symbol];
            ten_trigger=0;
            symbol='';
        }
    }
    return sentence;
}

module.exports = {
    decode
}
