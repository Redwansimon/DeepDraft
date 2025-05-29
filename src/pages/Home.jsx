import Banner from "../Components/Banner"
import BlogPage from "../Components/BlogPage"


const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home
