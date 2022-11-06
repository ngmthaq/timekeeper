import apiConst from "../../configs/api";
import AuthApi from "../../api/auth";

const authApi = new AuthApi();

export default {
    namespaced: true,

    state: () => ({}),

    mutations: {},

    actions: {
        async checkin() {
            let res = await authApi.post(apiConst.checkin);

            if (res && res.status === 200) {
                return {
                    status: res.status,
                    data: res.data,
                };
            } else {
                return {
                    status: res.response.status,
                    data: res.response.data,
                };
            }
        },

        async checkout() {
            let res = await authApi.post(apiConst.checkout);

            if (res && res.status === 200) {
                return {
                    status: res.status,
                    data: res.data,
                };
            } else {
                return {
                    status: res.response.status,
                    data: res.response.data,
                };
            }
        },

        async getCheckinData(context, payload) {
            let res = await authApi.get(apiConst.getCheckinData, payload);

            if (res && res.status === 200) {
                return {
                    status: res.status,
                    data: res.data,
                };
            } else {
                return {
                    status: res.response.status,
                    data: res.response.data,
                };
            }
        },
    },
};
