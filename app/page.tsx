import { lusitana } from "./ui/fonts"

const Home = () =>{
  return (
    <div>
      <p>Nav bar</p>
      <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl`}>Taskify here for free task</p>
    </div>
  )
}

export default Home