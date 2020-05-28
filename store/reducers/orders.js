import { ADD_ORDER } from "../actions/orders";
import Order from '../../models/orders';

const InitialState = {
    orders: []
};

export default (state = InitialState, action) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(), // dummy ID
                action.orderData.items,
                action.orderData.amount,
                new Date()
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }

    }

    return state;
}