import request from 'request'
const  forecast= (adress,callback)=>{
    const url='http://api.weatherapi.com/v1/forecast.json?key=7afbb7dde2914727a2251811230304&q='+adress+'&days=6&aqi=no&alerts=yes';
    console.log(url)
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('check your  internet connectiviiity',undefined)

        }else if(response.body.error){
         callback(response.body.error,undefined)
            
        }
        else{
            callback(undefined,response.body)
                response.body.location.name='could find the name'
                response.body.location='could not find the location'
            //console.log(')
           // console.log(process.argv[2])
            
        }
    })
} 
export default forecast  
const adress=process.argv[2]
