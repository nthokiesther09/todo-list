
import TodoList from "../components/todoList";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

 function Home(){
    return(
        <div>
            <Navbar/>
            
        <TodoList/>
        <TodoList/>
            <Footer/>
            
        </div>
    )
 }
//  main component to be exported

 export default Home;