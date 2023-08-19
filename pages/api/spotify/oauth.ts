import { spotifyApi } from "@/utils/spotify";
import { NextApiRequest, NextApiResponse } from "next";

import { createClient } from "@supabase/supabase-js";
const databaseClient = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { code } = request.query;
  const { body: auth } = await spotifyApi.authorizationCodeGrant(
    code as string
  );

  const { access_token, expires_in, refresh_token } = auth;

  spotifyApi.setAccessToken(access_token);
  const me = await spotifyApi.getMe().catch(() => void 0);

  if (me?.body.id !== process.env.SPOTIFY_USER_ID)
    return response.redirect("/");
  else {
    const { data, error } = await databaseClient.from("spotify-keys").insert([{
      "refresh_token": refresh_token,
      "access_token": access_token,
      "code": code,
      "expires_in": expires_in,
    }]);
    console.log(error)
  }

  response.redirect("/");
};

export default handler;
