import { reddit } from "@/reddit";
import Post from "../components/Post";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default async function Home() {
  const posts = await reddit.getSubreddit("cscareerquestions").getNew();

  return (
    <div className="">
      <Header />

      <main>
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
