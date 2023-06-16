import { useQuery } from '@apollo/client';
import PostFormCard from "../components/PostFormCard";
import PostCard from "../components/PostCard";
import Layout from "../components/Layout";
import { ALL_MEMORIES , TAG_SEARCH } from '../utils/queries';


// import Login from "./Login";

const Home = () => {
  const { loading, data } = useQuery(ALL_MEMORIES);
  const {loader, datas } = useQuery(TAG_SEARCH);
  const memories = data?.memory || [];
  // const session = useSession();
  return (
    <>
     <Layout>
            <PostFormCard
            />
            <PostCard
              memories={memories}
              title="Recent Memories"/>
      </Layout>
    </>
  )
}

export default Home;