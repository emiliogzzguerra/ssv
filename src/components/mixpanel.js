import mixpanel from "mixpanel-browser";

mixpanel.init("2872dc2ca6024a65969ce6a987803583");

const env_check = true;
// const env_check = process.env.NODE_ENV === "production";

const actions = {
  track: (name) => {
    if (env_check) mixpanel.track(name);
  },
  trackMultiple: (events) => {
    if (env_check) {
      events.forEach(element => {
        mixpanel.track(element);
      })
    }
  }
};

export const Mixpanel = actions;