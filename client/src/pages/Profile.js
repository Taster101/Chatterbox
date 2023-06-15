import Layout from "../components/Layout";
import Card from "../components/Card";
import Avatar from "../components/Avatar"

export default function Profile() {
    return(
        <Layout>
            <Card noPadding={true}> 
            <div className="relative overflow-hidden rounded-md">
                <div className="h-36 overflow-hidden flex justify-center items-center">
                    <img src="https://images.unsplash.com/photo-1578223166860-86396c1a0408?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="green-ocean"></img>
                </div>

                <div className="absolute top-14 left-3">
                    <Avatar size={'big'} />
                </div>
                <div className="p-2 pb-14">
                    <div className="ml-36">
                        <h1 className="text-2xl font-bold leading-5">
                        Jane Doe
                        </h1>
                        <div className="text-gray-500 leading-5">Atlanta, Ga</div>
                    </div>
                </div>
            </div>
            </Card>
        </Layout>
    )
}