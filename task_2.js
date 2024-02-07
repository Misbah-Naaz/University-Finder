function searchUni()
{
    let countryName=document.getElementById('countryName').value;
    let Api=`http://universities.hipolabs.com/search?country=${countryName}`;
    let uniName=document.getElementById('DisplayUniName');
    let names=[];
    fetch(Api).then((response)=>
    {
        console.log(response);
        return response.json();
    }).then((data)=>
    {
    data.forEach(element => {
        console.log(element)
        uniName.innerHTML+=`
        <div class="card mt-2 ps-4 pe-4" style="background:powderblue">
        <div class="row card-row">
        <img class=" col-2 col-sm-4 col-lg-1 pt-1" src="https://flagsapi.com/${element.alpha_two_code}/shiny/64.png"> 
        <h4 class="uniName col-10 col-sm-8 col-lg-8">
        ${element.name}</h4>
        
        <a class="col-12 col-lg-3 link" href='${element.web_pages}'>${element.web_pages}</a>
        </div>
        </div>`;
    });
    
})
        
}