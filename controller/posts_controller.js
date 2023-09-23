const Post = require('../models/post');
const Comment = require('../models/comment');
const Like = require('../models/like');

module.exports.create = async function(req, res){
	try {
		Post.create({
			content:req.body.content,
			user:req.user._id
		})
		return res.redirect('back');
	} catch (err) {
		console.log(`Error while creating the post ${err}`);
		return;	
	}
}

module.exports.destroy = async function(req, res){
	const post = await Post.findById(req.params.id);
	if(post.user == req.user.id){

		await Like.deleteMany({likeable: post, onModel: 'Post'});
		await Like.deleteMany({_id: {$in: post.comments}});

		post.deleteOne();

		Comment.deleteMany({post: req.params.id});

		return res.redirect('back');
	}else{
		return res.redirect('back');
	}
}
