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
function showSection(id){
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
};

 function backgroundColor(id){
    document.getElementById('btn-donation').classList.add('bg-white');
    document.getElementById('btn-history').classList.add('bg-white');
    document.getElementById(id).classList.remove('bg-white');
    document.getElementById(id).classList.add('bg-[#B4F461]');
 };
 document.getElementById("btn-home").addEventListener('click',function(){
    window.location.href = "./index.html";
});