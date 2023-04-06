import path from 'path'
import express from 'express'
import hbs from 'hbs'
import forecast from './forecast.js'
const __dirname = path.resolve();
//creating an app instance
const app = express()
//define path
const publicDirectoryPath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'./template/views')
const partialPaths=path.join(__dirname,'./template/partial')
//setup handlebar engine and views path
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPaths)
//setup static path
app.use(express.static(publicDirectoryPath))
//routes
app.get('',(req,res)=>{
    res.render('index',{
        title:"Homepage",
        name:"hana",})
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'ABOUT US',
        name:"Betty",})})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:"HELP",
        message:"cannot access the css" ,
        name:"Jerusalem",})})
app.get('/help/*',(req,res)=>{
        res.render('page404',{
            title:"404",
            errmessage:"can not find the help article"})})
app.get('/weather',(req,res={})=>{
    if(!req.query.adress){
        return res.send({
            error:"you must provide the adress"
        }) }
    
        forecast(req.query.adress, (error, data={location:{name:'Unknown Location.Try another adress',},current:{condition:{}},}) => { 
              res.send({
                Name:data.location.name,
                region:data.location.tz_id,
                Forcast:data.current.condition.text, })
                 
            })
            
            })   
    

app.get('*',(req,res)=>{
    res.render('page404',{
        errmessage:"404 page not found"})})
//start the server to listen         
app.listen(3000,()=>{
    console.log('server is UP on port 3000 ')
})

