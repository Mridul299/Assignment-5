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
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-2 p-8 max-w-6xl m-auto rounded-2xl">
            <h1 class="font-bold">${donatevalue} Taka is Donated for Flood Relief in Noakhali,Bangladesh</h1>
            <p class="text-slate-700"> Date : ${Date()} </p>
        </div>
        `;
        document.getElementById('history-container').appendChild(div);      
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
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-2 p-8 max-w-6xl m-auto rounded-2xl">
            <h1 class="font-bold">${donatevalue} Taka is Donated for famine-2024 at Feni, Bangladesh</h1>
            <p class="text-slate-700"> Date : ${Date()} </p>
        </div>
        `;
        document.getElementById('history-container').appendChild(div);    
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
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-2 p-8 max-w-6xl m-auto rounded-2xl">
            <h1 class="font-bold">${donatevalue} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
            <p class="text-slate-700"> Date : ${Date()} </p>
        </div>
        `;
        document.getElementById('history-container').appendChild(div);      
    }
    else{
        alert('please input valid value');
    }
});

document.getElementById("donate-palestine").addEventListener('click',function(){
    const totaldonated = accountbalance('donate-amount-3');
    const donatevalue =  inputvalue("donate-value-3");
    const myBalance = accountbalance("my-balance");
    const modal = document.getElementById("modal");
    if(donatevalue >= 0 && donatevalue !== isNaN('donate-value-2')){
        const donatedbalance = donatevalue + totaldonated;   
        document.getElementById("donate-value-3").value = '';     
        if(donatevalue > myBalance){
            alert('you have not enough money for donate');
            return;
        }
        else{
            const availablebalance = myBalance - donatevalue;
            document.getElementById('my-balance').innerText = availablebalance;             
        };
        document.getElementById('donate-amount-3').innerText = donatedbalance;
        modal.showModal();
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border-2 p-8 max-w-6xl m-auto rounded-2xl">
            <h1 class="font-bold">${donatevalue} Taka is Donated for the persecuted Palestinians</h1>
            <p class="text-slate-700"> Date : ${Date()} </p>
        </div>
        `;
        document.getElementById('history-container').appendChild(div);      
    }
    else{
        alert('please input valid value');
    }
});

// history

document.getElementById('btn-donation').addEventListener('click',function(){
    showSection('donate-container');
    backgroundColor('btn-donation');   
});

document.getElementById('btn-history').addEventListener('click',function(){
    showSection('history-container');
    backgroundColor('btn-history');  
});

document.getElementById("blog-btn").addEventListener('click',function(){
    window.location.href = "./blog.html";
});

document.getElementById("btn-home").addEventListener('click',function(){
    window.location.href = "./index.html";
});

