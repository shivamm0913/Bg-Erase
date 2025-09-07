import jwt from "jsonwebtoken";

//Middleware Function  to decode jwt token to get clerkId

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;
    console.log(token);
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }
    const token_decode = jwt.decode(token);
    
   if (!token_decode || !token_decode.sub) {
      return res.json({
        success: false,
        message: "Invalid token",
      });
    }

     req.body.clerkId = token_decode.clerkId
     next();
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;
