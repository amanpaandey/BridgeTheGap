import { Router } from "express";
import {
  registerNgo,
  loginNgo,
  logoutNgo,
  refreshAccessToken,
  changeCurrentPassword,
  getCurrentNgo,
  updateNgoDetails,
  updateNgoAvatar,
  getNgoImages,
  ngoUploadImage,
  getAllNgo,
  getNgoByID,
  topthreeNgo
} from "../controllers/ngo.controller.js";
import { verifyJWTNGO } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "ngoAvatar",
      maxCount: 1,
    },
  ]),

  registerNgo
);

router.route("/login").post(loginNgo);

router.route("/logout").post(verifyJWTNGO, logoutNgo);

router.route("/refresh-token").post(verifyJWTNGO, refreshAccessToken);

router.route("/update-password").post(verifyJWTNGO, changeCurrentPassword);

router.route("/current-ngo").get(verifyJWTNGO, getCurrentNgo);

router.route("/update-ngo-details").post(verifyJWTNGO, updateNgoDetails);

router
  .route("/update-ngo-avatar")
  .patch(verifyJWTNGO, upload.single("ngoAvatar"), updateNgoAvatar);

router.route("/get-ngo-images").get(verifyJWTNGO, getNgoImages);

router.route("/ngo-upload-image").post(
  upload.fields([
    {
      name: "ngoImage",
      maxCount: 10,
    },
  ]),
  ngoUploadImage
);

router.route("/get-all-ngos").get(getAllNgo);

router.route("/get-ngo/:id").get(getNgoByID);

router.route("/top-three-ngos").get(topthreeNgo);

export default router;
