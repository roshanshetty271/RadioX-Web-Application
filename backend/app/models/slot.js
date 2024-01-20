import mongoose from 'mongoose'

  
  const slotSchema = new mongoose.Schema({
    _id: {
      $oid: String
    },
    slots: [
        {
            date: String,
    timings: [
      {
        location: String,
        doctors: [
          {
            name: String,
            specialty: String,
            timeSlots: [String]
          }
        ]
      }
    ]
        }
    ]
  });

// Create a mongoose model using the schema
const Slot = mongoose.model('Slot', slotSchema);

export default Slot;
