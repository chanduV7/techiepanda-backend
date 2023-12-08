const { MongoClient } = require("mongodb");

const client = new MongoClient(
  `mongodb+srv://chandu_V:${process.env.MONGO_PASS}@cluster0.ueuz9jd.mongodb.net/techiepanda`,
 { useUnifiedTopology: true },
  { useNewUrlParser: true },
  { connectTimeoutMS: 30000 },
  { keepAlive: 1 }
);
const db = client.db();



const users =  db.collection("users");
const jobs = db.collection("jobs");
const company = db.collection("company");

const search = db.collection("search");

// jobs.createIndex(
//   {
//     role : "text"
//   }, {
//     name:"searchIndexRole"
//   }
// )

// company.createIndex(
//   {
//     company_name:'text',
//     location:'text'
//   }
// )



module.exports = {users, jobs,company,search}