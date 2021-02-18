const express = require("express");
const router = express.Router();

const { checkLogin } = require("../middlewares/check");
const PostModel = require('../models/posts');

// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx
router.get("/posts/", (req, res, next) => {
	const author = req.query.author

	PostModel.getPosts(author)
		.then((posts) => {
			res.render('posts', {
				posts: posts
			})
		})
		.catch(next);
});

// POST /posts/create 发表一篇文章
router.post("/posts/create", checkLogin, (req, res, next) => {
	const author = req.session.user._id;
	const { title, content } = req.fields;

	// 校验参数
	try {
		if (!title.length) {
			throw new Error('请填写标题');
		} else if (!content.length) {
			throw new Error('请填写内容');
		}
	} catch (e) {
		req.flash('error', e.message);
		return res.redirect('back');
	}

	let post = {
		author,
		title,
		content
	};

	PostModel.create(post)
		.then((result) => {
			// 此 post 是插入 mongodb 后的值，包含 _id
			post = result.ops[0];
			req.flash('success', '发表成功');

			// 发表成功后跳转到该文章页
			res.redirect(`/posts/${post._id}`);
		})
		.catch(next);
});

// GET /posts/create 发表文章页
router.get("/posts/create", checkLogin, (req, res, next) => {
	res.render('create');
});

// GET /posts/:postId 单独一篇的文章页
router.get('/posts/:postId', (req, res, next) => {
	const postId = req.params.postId;

	Promise.all([
		PostModel.getPostById(postId), // 获取文章信息
		PostModel.incPv(postId)// pv 加 1
	])
		.then((result) => {
			const post = result[0];
			if (!post) {
				throw new Error('该文章不存在');
			}

			res.render('post', {
				post: post
			});
		})
		.catch(next);
});

// GET /posts/:postId/edit 更新文章页
router.get("/posts/:postId/edit", checkLogin, (req, res, next) => {
	const postId = req.params.postId;
	const author = req.session.user._id;

	PostModel.getRawPostById(postId)
		.then((post) => {
			if (!post) {
				throw new Error('该文章不存在');
			} else if (author.toString() !== post.author._id.toString()) {
				throw new Error('权限不足')
			}
			res.render('edit', {
				post: post
			});
		})
		.catch(next);
});

// POST /posts/:postId/edit 更新一篇文章
router.post("/posts/:postId/edit", checkLogin, (req, res, next) => {
	const postId = req.params.postId;
	const author = req.session.user._id;
	const { title, content } = req.fields;

	// 校验参数
	try {
		if (!title.length) {
			throw new Error('请填写标题');
		} else if (!content.length) {
			throw new Error('请填写内容');
		}
	} catch (e) {
		req.flash('error', e.message);
		return res.redirect('back');
	}

	PostModel.getRawPostById(postId)
		.then((post) => {
			if (!post) {
				throw new Error('文章不存在');
			} else if (post.author._id.toString() !== author.toString()) {
				throw new Error('没有权限');
			}
			PostModel.updatePostById(postId, { title: title, content: content })
				.then(() => {
					req.flash('success', '编辑文章成功');
					// 编辑成功后跳转到上一页
					res.redirect(`/posts/${postId}`);
				})
				.catch(next);
		});
});

// GET /posts/:postId/remove 删除一篇文章
router.get("/posts/:postId/remove", checkLogin, (req, res, next) => {
	const postId = req.params.postId;
	const author = req.session.user._id;

	PostModel.getRawPostById(postId)
		.then(function (post) {
			if (!post) {
				throw new Error('文章不存在');
			} else if (post.author._id.toString() !== author.toString()) {
				throw new Error('没有权限');
			}
			PostModel.delPostById(postId)
				.then(() => {
					req.flash('success', '删除文章成功');
					// 删除成功后跳转到主页
					res.redirect('/posts');
				})
				.catch(next);
		});
});

module.exports = router;