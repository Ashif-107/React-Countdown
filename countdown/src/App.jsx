import Countdown from "./components/Countdown"
import bg from '../public/bg1.jpg' 
const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-bottom"
    style={{ backgroundImage: `url(${bg})` }}
    >
       <h1 className="text-5xl mt-5 text-white">Hackathon Name</h1>
       <Countdown />
    </div>
  )
}

export default App
