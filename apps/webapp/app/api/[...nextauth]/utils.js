"use server";

import { cookies, headers } from "next/headers";

export const getSessionAuthToken = async () => {
    const token = 
        cookies().get("next-auth.session-token")?.value || 
        cookies().get("__Secure-authjs.session-token")?.value || 
        cookies().get("authjs.session-token")?.value || 
        headers().get("Authorization")?.replace("Bearer ", "");

    return {
        success: true,
        data: token,
    };
};
