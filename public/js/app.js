console.log('client side javascribt is loaded')
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})
fetch('http://localhost:3000/weather?adress=paris').then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log('erorr:' +error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
       
    })
})