import Slot from "../models/slot.js"

export const fetchSlots = async(date) => {
    console.log(date)
    try{
        const appointment = await Slot.findOne({'slots.date': date}, {"slots.$": 1})
       
        const timingsArray = appointment ? appointment.slots.map(slot => slot.timings).flat() : [];

        console.log("Timings Array for:", timingsArray);
        
        return timingsArray
    }
    catch (error){
        throw error;
    }
    
        
}