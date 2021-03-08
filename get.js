let arrInterview;
const key = CryptoJS.enc.Base64.parse("MTIzNDU2NzgxMjM0NTY3OA==");
const iv  = CryptoJS.enc.Base64.parse("EBESExQVFhcYGRobHB0eHw==");

window.addEventListener('DOMContentLoaded', (event)=>{
    // ?token=Z8Ozu1z_5_dqVmW25cSWeQ
    // fetch("https://app.fakejson.com/q/eXh4CFVx"+window.location.search)
    // .then(response=>{return response.json();})
    // .then(responseApi=>{
    //     if (responseApi.error) {
    //         console.log(responseApi.error);
    //         alert(responseApi.error);
    //     } 
    //     else {
    //         // console.log(responseJson.interview[0].description.length);
    //         console.log(responseApi)
    //         const decrypted = CryptoJS.AES.decrypt(responseApi.string, key, {iv: iv});
    //         const responseJson = JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
    //         console.log(responseJson);
    //         renderAll(responseJson);
    //         arrInterview = responseJson;
    //     }
    // })
    // .catch(err => console.log('Request Failed', err));

    // yang atas kalau mau cara ngefetch, yang bawah kalau mau langsung ambil string dari api.
    // jatah ngefetch terbatas tiap harinya soalnya

    // let string = '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';
    
    //let string = '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'
    
    // terbaru pakai edit dan submitted
    let string='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'
    const decrypted = CryptoJS.AES.decrypt(string, key, {iv: iv});
    const decrUtf = decrypted.toString(CryptoJS.enc.Utf8);
    const responseJson = JSON.parse(decrUtf);
    console.log(responseJson);
    renderAll(responseJson);
    arrInterview = responseJson;

});

function renderAll(responseJson){
    document.getElementById("name_emp").value=`${responseJson.name_emp}`;
    document.getElementById("employee_id").value=`${responseJson.emp_no}`;
    document.getElementById("div_dept").value=`${responseJson.div_dept}`;
    document.getElementById("date_resign").value=`${responseJson.date_resign}`;
    document.getElementById("last_day").value=`${responseJson.last_day}`;
    document.getElementById("form_id").value=`${responseJson.form_id}`;
    for(let i=0; i<responseJson.interview.length; i++){
        let num = i+1;
        let descNum = 'desc_'+i;
        let remarksNum = 'remarks_'+i;
        let initialNum = 'inital_'+i;
        let dateNum = 'date_'+i;
        let inpDate = 'inp_date_'+i;
        document.getElementById("tableBody").innerHTML+=
        ('<tr>'
            +'<td class="no">'+num+'</td>'
            +'<td id="'+descNum+'"></td>'
            +'<td id="'+dateNum+'"style="text-align:center;"><input id="'+inpDate+'" type="date" class="form-control" /><span class="validity"></span></td>'
            +'<td id="'+initialNum+'" style="text-align:center;"></td>'
            +'<td id="'+remarksNum+'">'+responseJson.interview[i].remarks+'</td>'
        +'</tr>');
        for(j=0; j<responseJson.interview[i].description.length; j++){
            let descList = 'descList_'+i+'_'+j;
            document.getElementById(descNum).innerHTML+=
            '<div id='+descList+'>'+(responseJson.interview[i].description[j].desc_list)+'</div>'
            let feedbackNum = 'feedback_'+i+'_'+j;
            if (responseJson.interview[i].description[j].feedback=="Y"){
                document.getElementById(descNum).innerHTML+=
                '<textarea class="form-control" id="'+feedbackNum+'" rows="2"></textarea>';
            } else{
                document.getElementById(descNum).innerHTML+=
                '<input type="text" class="d-none" id="'+feedbackNum+'"></textarea>';
            }

            // bikin text area dan inputan tanggal selain dari interview_id jadi disabled
            if(responseJson.interviewer != responseJson.interview[i].interview_id){
                document.getElementById(feedbackNum).disabled="true";
                document.getElementById(inpDate).disabled="true";
            }
        }
        for(k=0; k<responseJson.interview[i].initial.length; k++){
            let hdnInitialNum = 'hdnInitialNum_'+i+'_'+k;
            document.getElementById(initialNum).innerHTML+=
            '<strong>'+responseJson.interview[i].initial[k].name+'<br></strong><input type="text" class="d-none" id="'+hdnInitialNum+'" value='+responseJson.interview[i].initial[k].emp_id+'></input>';
        }

        // kalau sudah disubmit dan edit = 0
        if(responseJson.submitted == "yes" && responseJson.edit != 1){
            document.getElementById("btnSubmit").style.display = "none";
        }
    }
}