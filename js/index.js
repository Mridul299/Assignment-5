document.getElementById('donate-noakhali').addEventListener('click',function(){
    const totaldonated = accountbalance('donate-amount');
    const donatevalue =  inputvalue("donate-value");
    const myBalance = accountbalance("my-balance");
    const modal = document.getElementById("modal");
    if(donatevalue >= 0 && donatevalue !== isNaN('donate-value') ){
        const donatedbalance = donatevalue + totaldonated;      
        document.getElementById("donate-value").value = '';
        if(donatevalue > myBalance){
            alert('you have not enought money for donate');        
            return;
        }
        else{
            const availablebalance = myBalance - donatevalue;
            document.getElementById('my-balance').innerText = availablebalance;              
        };
        document.getElementById("donate-amount").innerText = donatedbalance;
        modal.showModal();         
    }
    else{
        alert('please input valid value');
    }
});



document.getElementById("donate-feni").addEventListener('click',function(){
    const totaldonated = accountbalance('donate-amount-1');
    const donatevalue =  inputvalue("donate-value-1");
    const myBalance = accountbalance("my-balance"); 
    const modal = document.getElementById("modal");
    if(donatevalue >= 0 && donatevalue !== isNaN('donate-value-1')){
        const donatedbalance = donatevalue + totaldonated;      
        document.getElementById("donate-value-1").value = '';     
        if(donatevalue > myBalance){
            alert('you have not enough money for donate');
            return;
        }
        else{
            const availablebalance = myBalance - donatevalue;
            document.getElementById('my-balance').innerText = availablebalance;               
        };   
        document.getElementById('donate-amount-1').innerText = donatedbalance; 
        modal.showModal();    
    }
    else{
        alert('please input valid value');
    }
});




document.getElementById("donate-students").addEventListener('click',function(){
    const totaldonated = accountbalance('donate-amount-2');
    const donatevalue =  inputvalue("donate-value-2");
    const myBalance = accountbalance("my-balance");
    const modal = document.getElementById("modal");
    if(myBalance <0 ){
        alert('you have not enough money for donate');
        return;
    };
    if(donatevalue >= 0 && donatevalue !== isNaN('donate-value-2')){
        const donatedbalance = donatevalue + totaldonated;   
        document.getElementById("donate-value-2").value = '';     
        if(donatevalue > myBalance){
            alert('you have not enough money for donate');
            return;
        }
        else{
            const availablebalance = myBalance - donatevalue;
            document.getElementById('my-balance').innerText = availablebalance;             
        };
        document.getElementById('donate-amount-2').innerText = donatedbalance;
        modal.showModal();     
    }
    else{
        alert('please input valid value');
    }
});


