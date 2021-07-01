import { Request, Response } from 'express';
import { get } from 'lodash';
import { createPost, findPost, findAll, findAndUpdate, deletePost } from '../service/post.service';
import { NOT_FOUND_RESPONSE_CODE, UNAUTHORIZED_RESPONSE_CODE, SUCCESS_RESPONSE_CODE } from '../constants';

function isPostAuthorUserLoggedIn(postAuthorUserId: any, loggedInUserId: any): boolean {
    return String(postAuthorUserId) === String(loggedInUserId);
}

export async function createPostHandler(req: Request, res: Response) {
    const userId = get(req, 'user._id');
    const body = req.body;

    const post = await createPost({ ...body, user: userId });

    return res.send(post);
}

export async function updatePostHandler(req: Request, res: Response) {
    const userId = get(req, 'user._id');
    const postId = get(req, 'params.postId');
    const update = req.body;
    const post = await findPost({ postId });

    if (!post) {
        return res.sendStatus(NOT_FOUND_RESPONSE_CODE);
    }

    if (!isPostAuthorUserLoggedIn(post.user, userId)) {
        return res.sendStatus(UNAUTHORIZED_RESPONSE_CODE);
    }
    const updatedPost = await findAndUpdate({ postId }, update, { new: true });

    return res.send(updatedPost);
}

export async function getPostHandler(req: Request, res: Response) {
    const postId = get(req, 'params.postId');
    const post = await findPost({ postId });

    if (!post) {
        return res.sendStatus(NOT_FOUND_RESPONSE_CODE);
    }

    return res.send(post);
}

export async function getAllPostsHandler(_: Request, res: Response) {
    const posts = await findAll();

    return res.send(posts);
}

export async function deletePostHandler(req: Request, res: Response) {
    const userId = get(req, 'user._id');
    const postId = get(req, 'params.postId');

    const post = await findPost({ postId });

    if (!post) {
        return res.sendStatus(NOT_FOUND_RESPONSE_CODE);
    }

    if (!isPostAuthorUserLoggedIn(post.user, userId)) {
        return res.sendStatus(UNAUTHORIZED_RESPONSE_CODE);
    }

    await deletePost({ postId });

    return res.sendStatus(SUCCESS_RESPONSE_CODE);
}
