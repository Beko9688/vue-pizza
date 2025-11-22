import { defineStore } from "pinia";

export const useOrdersStore = defineStore("orders", {
    state: () => ({
        orders: [],
    }),

    actions: {
        addOrder(order) {
            this.orders.push(order);
        },
    },
});
