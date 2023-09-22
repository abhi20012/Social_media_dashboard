const Post = require('../models/post');

module.exports.home = async function(req, res){
	try {
		const posts = await Post.find({}).populate('user').populate({
			path:'comments',
			populate:{
				path:'user'
			}
		});
		return res.render('home', {
		title:"Home",
		all_posts:posts
	})
	} catch (error) {
		console.log("Error while sending post to frontend", error);
		return;
	}
}