import CommentService from "../services/comment-service.js";
const commentService = new CommentService();
export const createComment = async(req, res) => {
    try {
        const response = await commentService.create(req.query.modelId, req.query.modelType, req.user.id, req.body.content);
        return res.status(201).json({
            sucess: true,
            message: 'Successfully created a new comment',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            message: 'Something went wrong during creating a new tweet',
            data: {},
            err: error
        });
    }
}
export default createComment;