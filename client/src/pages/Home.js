import PostFormCard from "../components/PostFormCard";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";
// import Login from "./Login";

export default function Home() {
  // const session = useSession();
  return (
    <>
     <Layout>
            <PostFormCard/>
            <PostCard/>
      </Layout>
    </>
  )
}

