const express = require('express');
const mongoose = require('mongoose');

const app = express();
var cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connectDB = async () => {
    try {
        const con = await mongoose.connect("mongodb+srv://masterudit9189:8oXArcEdQxYi8oYq@cluster0.temtke4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`mongodb connect success : ${con.connection.host}`);
    } catch (error) {
        console.log(`Error : ${error.message}`);
    }
}
connectDB();

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

app.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            res.send({ message: "User already registered" });
        } else {
            const newUser = new User({
                name,
                email,
                password
            });
            await newUser.save();
            res.send({ message: "Successfully Registered, Please login now." });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});





const guestHouseBookingSchema = new mongoose.Schema({
    studentName: String,
    studentRollNumber: { type: String },
    studentDepartment: { type: String },
    studentMobileNumber: { type: Number },
    numberOfMales: { type: Number},
    numberOfFemales: { type: Number},
    numberOfChildren: { type: Number},
    guestMobileNumber: { type: Number},
    guestName: { type: String},
    numberOfRooms: { type: Number},
    arrivalDate: { type: Date },
    departureDate: { type: Date},
    guestRelation: { type: String},
    gender: { type: String},
    guestPurpose: { type: String}
  });
  
const GuestHouseBooking = mongoose.model('GuestHouseBooking', guestHouseBookingSchema);
  
  




app.post('/form', async (req, res) => {
    try {
      // Create a new document using the schema
      console.log(req.body)
      const newBooking = new GuestHouseBooking(req.body);
  
      // Save the document to the database
      const savedBooking = await newBooking.save();
      
      res.status(201).json(savedBooking);
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


//   app.post('/ForgotPassword', (req, res) => {
//     const {email} = req.body;
//     UserModel.findOne({email: email})
//     .then(user => {
//         if(!user) {
//             return res.send({Status: "User not existed"})
//         } 
//         const token = jwt.sign({id: user._id}, "jwt_secret_key", {expiresIn: "1d"})
//         var transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//               user: 'youremail@gmail.com',
//               pass: 'your password'
//             }
//           });
          
//           var mailOptions = {
//             from: 'youremail@gmail.com',
//             to: 'user email@gmail.com',
//             subject: 'Reset Password Link',
//             text: `http://localhost:5173/ResetPassword/${user._id}/${token}`
//           };
          
//           transporter.sendMail(mailOptions, function(error, info){
//             if (error) {
//               console.log(error);
//             } else {
//               return res.send({Status: "Success"})
//             }
//           });
//     })
// })




// app.post('/ResetPassword/:id/:token', (req, res) => {
//     const {id, token} = req.params
//     const {password} = req.body

//     jwt.verify(token, "jwt_secret_key", (err, decoded) => {
//         if(err) {
//             return res.json({Status: "Error with token"})
//         } else {
//             bcrypt.hash(password, 10)
//             .then(hash => {
//                 UserModel.findByIdAndUpdate({_id: id}, {password: hash})
//                 .then(u => res.send({Status: "Success"}))
//                 .catch(err => res.send({Status: err}))
//             })
//             .catch(err => res.send({Status: err}))
//         }
//     })
// })




app.listen(9002, () => {
    console.log("BE started at port 9002");
});