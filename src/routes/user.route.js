import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentuser,
    updateAccountDetails,
    updateUserAvatar,
    getLatesttUser,
    userByID
} from "../controllers/user.controller.js"

import { verifyJWT } from "../middlewares/auth.middleware.js";

//import multer middleware for file handling

import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    registerUser
);

router.route("/login").post(loginUser);

// secured routes

router.route("/logout").post(verifyJWT,logoutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/change-password").post(verifyJWT, changeCurrentPassword);

router.route("/current-user").get(verifyJWT, getCurrentuser);

router.route("/update-account-details").post(verifyJWT, updateAccountDetails);

router.route("/update-user-avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar);

router.route("/get-latest-users").get(getLatesttUser);

router.route("/:id").get(userByID);

export default router;

