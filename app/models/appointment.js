<<<<<<< HEAD
import mongoose from 'mongoose';
=======
import mongoose from 'mongoose'
>>>>>>> 0fb6927865a35e6ec76e2b7712cb42aae9f6f0cb

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    patientID: {
        type: String,
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
<<<<<<< HEAD
    date: {
=======
    date: {        
>>>>>>> 0fb6927865a35e6ec76e2b7712cb42aae9f6f0cb
        type: String,
        required: true
    },
    schedule: {
        startTime: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        }
    },
    location: {
        type: String,
        required: true
    },
    patientName: {
<<<<<<< HEAD
        firstName: {
=======
        firstName:{
>>>>>>> 0fb6927865a35e6ec76e2b7712cb42aae9f6f0cb
            type: String,
            required: true
        },
        lastName: {
            type: String
        }
    },
    doctorName: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String
<<<<<<< HEAD
        }
    }
});

const AppointmentModel = mongoose.model('Appointment', AppointmentSchema);

export default AppointmentModel;
=======
        }   
    }

},
// {
//     versionKey: false
// }
)

const AppointmentModel = mongoose.model('appointment', AppointmentSchema)
export default AppointmentModel
>>>>>>> 0fb6927865a35e6ec76e2b7712cb42aae9f6f0cb
