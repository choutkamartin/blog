import { connectToDatabase } from "../../utils/mongodb";

export default async (req, res) => {
  const db = await connectToDatabase();
  if (req.method === "GET") {
    const posts = await db
      .collection("posts")
      .find({})
      .sort({})
      .limit(20)
      .toArray();
    res.json(posts);
  } else {
    const posts = db.collection("posts");
    const post = {
      title: req.body.title,
      slug: req.body.slug,
      textCs: req.body.textCs,
      textEn: req.body.textEn,
      date: new Date()
    };
    const data = await posts.insertOne(post);
    res.json(data);
  }
};
