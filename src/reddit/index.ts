import Snoowrap from "snoowrap";

export const reddit = new Snoowrap({
  userAgent: "r/cscareerquestions",
  clientId: process.env.CLIENT_ID as string,
  clientSecret: process.env.CLIENT_SECRET as string,
  refreshToken: process.env.REFRESH_TOKEN as string,
  accessToken: process.env.ACCESS_TOKEN as string,
});
