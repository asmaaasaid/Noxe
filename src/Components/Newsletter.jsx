import Banner from "../shared/Banner"
import bannerImg2 from'../assets/images/banner2.png'

function Newsletter (){
  
    return (
      <div className="md:px-14 p-4 max-w-screen-2xl my-12 ">
        <Banner banner={bannerImg2} heading="Each student an share their discount code for friends" subheading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”" btn1="i have code" btn2={`don't have`} />
      </div>
    )
 
}

export default Newsletter