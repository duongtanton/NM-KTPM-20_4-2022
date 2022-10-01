const HomeController = {
  index(req, res, next) {
    res.render("index", { title: "Express" });
  },
};
export default HomeController;
