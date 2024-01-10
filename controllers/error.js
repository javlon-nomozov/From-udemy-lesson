module.exports.pageNotFoundErr = (req, res) => {
    res.render("404", {
      pageTitle: "Page Not Found",
      path: req.baseUrl + req.url,
    });
  }