const mongoose=require('mongoose');
require('dotenv').config();

//connect to db
const uri=process.env.Mongo_uri;

const connect = async()=>{
try{
    await mongoose.connect(uri);
    console.log('connect to db')
}catch(err){
    console.error(err)
}
}
connect();

//creation du scheme
const Schema =new mongoose.Schema({
    name:{ 
        type:String,
        required:[true,'name is required']//un message d'erreur
    },
    age:{
        type:Number,
        required:true
    },
    favorite_Foods:{
        type:[String],
        required:true}
})

//create model

const Person =  mongoose.model('Person',Schema,'People');//trois parametre : le nom de doc et sCheme () et nom de la collection =people


//create instances from the model
const farah = new Person({
    name:'Farah',
    age:29,
    favorite_Foods:['mlo5iya','polonaise','pizza']
});

//save the instance
//we have to use either .then.catch or async/await in order for the save function to work
/*farah.save()
.then(()=>{
    console.log('jawik behi')
    
})
.catch((err)=>{
    console.log(err)
})*/
//many instances

const tab =[{
    name:'eya',
    age:21,
    favorite_Foods:['loubya bil k3abir','kafteji','pizza']
},
{
    name:'hanine',
    age:24,
    favorite_Foods:['ma9rouna','lasagnia','mlo5ia']
},{
    name:'chedli',
    age:20,
    favorite_Foods:['tmatim']
}]
//crud operation : Model.method()


//Person.create(tab) //constructor(model):Person

//find all the people
 /*Person.find()
.then((people)=>{//lezimny n7ot ism el collection
    console.log(people)
})
.catch((err)=>{
    console.log(err)
})*/

//find one person

/*Person.findOne({name:'eya'})
.then((people)=>{
    console.log(people)
})
.catch((err)=>{
    console.log(err)
})*/

 //find by id

 /*Person.findById('6655b31025e4c476a7d5d9d5')
 .then((people)=>{
    console.log(people)
})
.catch((err)=>{
    console.log(err)
})*/


//add hambourger to chedli's favorite food
/*Person.findById('6655b31025e4c476a7d5d9d5')
.then((people)=>{
    people.favorite_Foods.push('hambourger')
    people.save()//don't forget to save
    console.log(people)
})
.catch((err)=>{
    console.log(err)
})*/


//find and update

/*Person.findOneAndUpdate({name:'eya'},{age:20},{new:true})
.then((people)=>{
    people.save()
    console.log(people)
})
.catch((err)=>{
    console.log(err)
})*/

//delete one person by id
/*Person.findOneAndDelete({name:"Farah"})
.then((people)=>{
    people.save()
    //console.log(people)
})
.catch((err)=>{
    console.log(err)
})*/

//delete many people
/*function search(done) {
    Person.deleteMany({name:'hanine'},(err,people)=>{
        if(err) {return done(err)
        
    
    }done(null,people)})
}*/
//deuxieme methode

/*Person.deleteMany({name:'chedli'})
.then((people)=>{
    
    console.log(people)
})
.catch((err)=>{
    console.log(err)})*/

//chained query
/*function chained(done){
    Person.find({favorite_Foods:'mlo5iya'})
    .sort({name:1})
    .limit(2)
    .select({age:0})
    .exec()
    .then((people)=>{
        console.log(people)
    })
    .catch((err)=>console.log(err))
}
chained();*/