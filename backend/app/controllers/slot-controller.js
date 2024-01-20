import * as slotService from "../services/slot-service.js";
import {setResponse, setErrorResponse} from './response-handler.js';

export const getSlots = async (request, response) => {
    try{
        const date = request.query.date
        const slots = await slotService.fetchSlots(date)
        setResponse(slots, response)

    }
    catch(err){
        console.log("error: " + err)
        setErrorResponse(err, response)

    }
}