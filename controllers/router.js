module.exports = function(app){
    //Route to Homepage
    app.get("/", function(req, res){
        res.render("index");
    });
    // Handle 404
    app.use(function(req, res, next){
      res.status(404).send("404 Page Not Found");
      next();
    });
};
