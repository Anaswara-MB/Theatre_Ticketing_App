import express from "express";
import {getAllUsers,singup,updateUser,deleteUser,login,getBookingsOfUser} from "../controllers/user-controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", singup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser);
// userRouter.get("/:id", getUserById);





export default userRouter;