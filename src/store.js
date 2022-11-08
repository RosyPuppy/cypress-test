import { createStore } from "vuex";
import account from "./assets/account.json";

const store = createStore({
  state() {
    return {
      loggeduser: {},
      region: `en-us`,
      language: account.language[`en`].copy,
      oktaSid: "",
      oktaEmail: "",
      pdfPath: "",
      softwarePath: "",
      subscriptions: null,
      userRecords: [],
      userRecCount: 0,
    };
  },
  mutations: {
    addUser: (state, userPayload) => {
      state.loggeduser = userPayload;
    },
    setRegion: (state, regionValue) => {
      // Update only if there is a change
      if (regionValue != state.region) {
        const default_region =
          regionValue.split("-")[0] == "en" ? "en" : regionValue;
        state.language = account.language[`${default_region}`].copy;
        state.region = regionValue;
      }
    },
    setOktaSid: (state, oktaSidValue) => {
      state.oktaSid = oktaSidValue;
    },
    setOktaEmail: (state, oktaEmailValue) => {
      state.oktaEmail = oktaEmailValue;
    },
    setPdfPath: (state, pdfPathValue) => {
      state.pdfPath = pdfPathValue;
    },
    setSoftwarePath: (state, softwarePathValue) => {
      state.softwarePath = softwarePathValue;
    },
    resetUser: (state) => {
      state.loggeduser = {};
      state.oktaSid = "";
    },
    setSubscriptions: (state, subscriptions) => {
      state.subscriptions = subscriptions;
    },
    setUserRecords: (state, records) => {
      state.userRecords = records;
    },
    setUserRecCount: (state, count) => {
      state.userRecCount = count;
    },
  },
  actions: {
    setOktaSid: ({ commit }, oktaSid) => {
      commit("setOktaSid", oktaSid);
    },
    setOktaEmail: ({ commit }, oktaEmail) => {
      commit("setOktaEmail", oktaEmail);
    },
    setLoggedUser: ({ commit }, user) => {
      commit("addUser", user);
    },
    setSubscriptions: ({ commit }, subscriptions) => {
      commit("setSubscriptions", subscriptions);
    },
    setUserRecords: ({ commit }, userRecords) => {
      commit("setUserRecords", userRecords.records);
      commit("setUserRecCount", userRecords.count);
    },
  },
});

export default store;
