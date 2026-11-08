import { JWTPayload, jwtVerify, SignJWT } from "jose";
import "server-only";

const sessionSecret = process.env.SESSION_SECRET;
console.log("SECRET IS:", sessionSecret, "LENGTH:", sessionSecret?.length);

const encodedSecret = new TextEncoder().encode(sessionSecret);

export const encrypt = (payload: {_id: string}) => {
    return new SignJWT(payload)
    .setExpirationTime("7d")
    .setProtectedHeader({ alg: "HS256"})
    .setIssuedAt()
    .sign(encodedSecret);
};

export const decrypt = async (token: string | undefined ="") => {
    try {
        const response = await jwtVerify(token, encodedSecret,{
            algorithms: ["HS256"],
        });
        return { success: true, ...response.payload as JWTPayload & {_id?: string}};
      } catch (error) {
        console.log(error);
        return{ success: false};

      } 
};