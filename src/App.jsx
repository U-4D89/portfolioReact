import Intro from "./components/intro/Intro"
import About from "./components/about/about";
import WorksList from "./components/works/WorksList";
import  MailMe  from "./components/mailme/mailme";

const App = () => {
    return (
        <div> 
            <Intro/>
            <About/> 
            <WorksList/>
            <MailMe />
        </div>
    )
}

export default App;