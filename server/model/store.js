const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const StoreSchema = new Schema({
    userId : {type : String, required : true},
    name : {type : String, required : true, trim : true},
    adresse : {type : String, required : true, trim : true, unique : true},
    lat : {type : String, required : true, trim : true, unique : true},
    lng : {type : String, required : true, trim : true, unique : true},
    rank : {type : Number},
    photos: [],
    tags : [{type : String, required : true}],
    description : {type : String, required : true, trim : true},
    date : {type :String}
},
{
    timestamps : true
}
);
StoreSchema.index({name : "text", adresse : "text", tags : "text"})


const Store = mongoose.model('store', StoreSchema);

module.exports = Store;