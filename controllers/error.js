module.exports.pageNotFoundErr = (req, res) => {
    res.render("404", {
      docTitle: "Page Not Found",
      path: req.baseUrl + req.url,
    });
  }