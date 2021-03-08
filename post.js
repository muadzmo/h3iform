formSubmit.addEventListener('submit',function(event){
    const token = window.location.search.replace("?token=", "");
    event.preventDefault();
    console.log(arrInterview);
    let d = new Date();
    // let full = d.getFullYear()+'-'+d.getMonth()+'-'+d.getDate()+' '+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()

    for(let i=0; i<arrInterview.interview.length; i++){
        inpDate = 'inp_date_'+i;
        console.log(document.getElementById(inpDate).disabled);
        if(document.getElementById(inpDate).disabled){
            arrInterview.interview[i].date = "";
        }else if(document.getElementById(inpDate).value!=''){
            arrInterview.interview[i].date = document.getElementById(inpDate).value;
        }
        else{
            document.getElementById(inpDate).focus();
            alert("Please enter date value");
            return false;
        }
        for(j=0; j<arrInterview.interview[i].description.length; j++){
            if(arrInterview.interview[i].description[j].feedback=="Y"){
                let descList = 'descList_'+i+'_'+j;
                let feedbackNum = 'feedback_'+i+'_'+j;
                arrInterview.interview[i].description[j].desc_list = document.getElementById(descList).innerHTML //+' '+document.getElementById(feedbackNum).value
                arrInterview.interview[i].description[j].answer = document.getElementById(feedbackNum).value;
                // feedback diisi ga mandatory, nanti edit ya
                // if(document.getElementById(feedbackNum).value!=''){
                //     arrInterview.interview[i].description[j].answer = document.getElementById(feedbackNum).value;
                // } else {
                //     document.getElementById(feedbackNum).focus();
                //     alert('Please enter all value');
                //     return false;
                // }
            }
        }
    }
    console.log(JSON.stringify(arrInterview));
    let enc = CryptoJS.AES.encrypt(JSON.stringify(arrInterview), key, {iv: iv});
    console.log(enc.toString());
    let person = {
        token: token,
        data:{
            "string":enc.toString()
        }
    }

    fetch("https://app.fakejson.com/q/eXh4CFVx"+window.location.search,{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify(person)
    })
    .then(response => response.json())
    .then(person => {
        console.log('Success:'+person);
        alert('Success')
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error: '+error);
    });
})

