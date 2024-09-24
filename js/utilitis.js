function accountbalance(id){
    const textvalue = document.getElementById(id).innerText;
    const textnumber = parseFloat(textvalue);
    return textnumber;
};

function inputvalue(id){
    const recivemoney = document.getElementById(id).value;
    const newrecivemoney = parseFloat(recivemoney);
    return newrecivemoney;
};