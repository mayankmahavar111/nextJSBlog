

export default async function callApi(url,request , method='get'){
 
    const response= await fetch(url,{
        method : method,
        headers:{
            'Content-Type' : 'application/json'
        },
        body : request != undefined ? JSON.stringify(request): ''
    });

    const data=  await response.json();
    return data;
}