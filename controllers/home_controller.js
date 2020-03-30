const post = require('../models/post');
module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);
    // post.find({},function(err,posts){
    //     return res.render('home', {
    //         title: "Home",
    //         posts:posts
    //     });
    // })


    //populate the user of each post
    post.find({}).populate('user').exec(function(err,posts){
             return res.render('home', {
                 title: "Home",
                 posts:posts
             })
        })

}

// module.exports.actionName = function(req, res){}