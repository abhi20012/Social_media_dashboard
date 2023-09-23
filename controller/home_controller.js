const Post = require('../models/post');

module.exports.home = async function(req, res){
	try {
		const posts = await Post.find({})
		.sort('-createdAt')
		.populate('user')
		.populate({
			path:'comments',
			populate:{
				path:'user'
			}
		}).populate({
            path: 'comments',
            populate: {
                path: 'likes'
            },
        })
        .populate('likes');




		return res.render('home', {
		title:"Home",
		all_posts:posts
	})
	} catch (error) {
		console.log("Error while sending post to frontend", error);
		return;
	}
}