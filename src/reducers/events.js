import { CREATE_EVENTS,READ_EVENTS,DELETE_EVENTS,READ_EVENT,UPDATE_EVENT} from '../actions'
// json をidごとに分割
import _  from 'lodash'

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENTS:
        case UPDATE_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
            //{id: 5, title: "Let's have an event 5!", body: "This is the body for event 5."}
        case READ_EVENTS:
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENTS:
            delete events[action.id]
            return { ...events }
            
        default:
            return events
    }
}