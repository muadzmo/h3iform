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
    //let string='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'

    // cobain setelah submit
    //let string ='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'

    // cobain nomor 3
    let string = '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'

    const decrypted = CryptoJS.AES.decrypt(string, key, {iv: iv});
    const decrUtf = decrypted.toString(CryptoJS.enc.Utf8);
    const responseJson = JSON.parse(decrUtf);
    console.log(decrUtf);
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
            +'<td id="'+dateNum+'"style="text-align:center;"><input id="'+inpDate+'" type="date" class="form-control" value="'+responseJson.interview[i].date+'" /><span class="validity"></span></td>'
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
                '<textarea class="form-control" id="'+feedbackNum+'" rows="2" value="'+responseJson.interview[i].description[j].answer+'">'+responseJson.interview[i].description[j].answer+'</textarea>';
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
