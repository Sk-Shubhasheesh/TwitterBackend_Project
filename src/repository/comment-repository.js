import CrudRepository from "./crud-repository";
import Comment from "../models/comment";
class CommentRepository extends CrudRepository {
    constructor() {
        super(Comment);
    }
}

export default CommentRepository;
