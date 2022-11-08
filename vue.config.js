module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/variables.scss";
          @import "./node_modules/bootstrap/scss/bootstrap.scss";
        `,
      },
    },
  },
};
