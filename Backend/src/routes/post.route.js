import { addPost,
    deletePost,
    addLike,getAllPosts,getOnepost} from "../controllers/post.controller.js"

  import { Router } from "express";
    import { upload } from "../middlewares/multer.middleware.js";
    import { verifyJWTNGO } from "../middlewares/auth.middleware.js";

    const router = Router();

    router.route("/addPost").post(
        upload.fields([
            {
                name: "postImage",
                maxCount: 1,
            },
        ]),
        verifyJWTNGO,
        addPost
    );

    router.route("/deletePost/:postId").delete(
        verifyJWTNGO, deletePost
    );

    router.route("/addLike/:postId").post(
        verifyJWTNGO, addLike
    );
    router.route("/get-all-posts").get(getAllPosts);

    router.route("/get-post/:postId").get(getOnepost);




    export default router;

// the below code fragment can be found in: