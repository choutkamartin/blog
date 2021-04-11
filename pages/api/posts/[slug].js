import { connectToDatabase } from "../../../utils/mongodb";
import mongoose from "mongoose";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const slug = req.query.slug;
  const post = await db.collection("posts").findOne({ slug: slug });
  res.json(post);
};
