const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const patientSchema = new Schema ({
    PIN: {type: Number, required: true},
    Date: {type: Date, required: true},
    Name: {type: String, required: true},
    DOB: {type: Date, required: true},
    Address1: {type: String, required: true},
    Address2: {type: String, required: true},
    City: { type: String, required: true},
    State: {type: String, required: true},
    ZipCode: {type: Number, required: true},
    Phonenumber: {type: Number, required: true, allowBlank: false },
    email: {type: String, correctTld: true},
    Insurance: {type: String, required: true}

    
});

const Patient = model('Patient', patientSchema);

module.exports = Patient




// const patients = [
//     {
//         PIN: 001,
//         Date: "09/02/2021",
//         Name: "Cuneyt Etyemez",
//         DOB: "08/16/1986",
//         Address1: "193 Main St Apt 1",
//         Address2: " ",
//         City: "Waltham",
//         State: "Massachusetts",
//         ZipCode: "02453",
//         PhoneNumber: "617 300 30 30",
//         email: "cuneytetyemez@gmail.com",
//         Insurance: "Blue Cross Blue Shield",
//     },
//     {
//         PIN: 002,
//         Date: "09/07/2021",
//         Name: "Thomas Edison",
//         DOB: "08/19/1986",
//         Address1: "193 Center St Apt 10",
//         Address2: " ",
//         City: "Watertown",
//         State: "Massachusetts",
//         ZipCode: "02472",
//         PhoneNumber: "617 300 33 33",
//         email: "thomasedison@gmail.com",
//         Insurance: "Blue Cross Blue Shield",
//     },
//     {
//         PIN: 003,
//         Date: "09/05/2021",
//         Name: "Franz Kafka",
//         DOB: "08/24/1986",
//         Address1: "193 Commonwealth Ave St Apt 100",
//         Address2: " ",
//         City: "Allston",
//         State: "Massachusetts",
//         ZipCode: "02450",
//         PhoneNumber: "617 900 30 30",
//         email: "franzkafka@gmail.com",
//         Insurance: "Blue Cross Blue Shield",
//     },
// ]

// module.exports = patients