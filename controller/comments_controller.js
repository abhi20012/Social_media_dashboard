const Comment = require('../models/comment');
const Post = require('../models/post');
const Like = require('../models/like');

module.exports.create = async function(req, res){
	try {
		let post = await Post.findById(req.body.post);
		if(post){
		try {
			let comment  = await Comment.create({
				content: req.body.content,
				post: req.body.post,
				user: req.user._id
			});

			post.comments.push(comment);
			post.save();
			return res.redirect('/');
		} catch (error) {
			console.log("Error while creating comment", error);
			return;
		}
	}
	} catch (error) {
		console.log("Error in finding the post", error);
		return;
	}
	
}

module.exports.destroy = async function(req, res){
	try {
		let comment = await Comment.findById(req.params.id);
		console.log(comment.post);
		if(comment.user == req.user.id){
			let postId = comment.post;
			comment.deleteOne();
			let post = await Post.findByIdAndUpdate(postId, { $pull:{comments:req.params.id}});
			await Like.deleteMany({likeable: comment._id, onModel: 'Comment'});
		}else{
			return res.redirect('back');
		}
	} catch (error) {
		console.log("Error while deleting the comment", error);
		return;
	}
}