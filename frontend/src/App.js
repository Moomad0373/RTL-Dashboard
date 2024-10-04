import routes from "./routes";
import { useRoutes } from "react-router-dom";
import SideBar from "./Pages/Home/Components/SideBar";
import Navbar from "./Pages/Home/Components/Navbar";
import DeleteModal from "./Modals/DeleteModal";

function App() {
    const router = useRoutes(routes);

    return (
        <>
            <main className="flex">
                <SideBar />
                <section className="flex-[4] container space-y-8">
                    <Navbar />
                    {router}
                </section>
            </main>
        </>
    );
}

export default App;
