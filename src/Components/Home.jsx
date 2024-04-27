import bannerImage from '../assets/images/banner.png'
import Banner from '../shared/Banner';
function Home(){
    return(
        <>
        <div className="md:px-14 p-4 max-w-screen-2xl mx-auto mt-24">
          <Banner banner={bannerImage} heading='Develop your skills without diligence' subheading='A good example of a paragraph contains a topic sentence, details and a conclusion.
          There are many different kinds of animals that live in China.' btn1='got started' btn2='discount'/>
        </div>
        </>
    )
}
export default Home;
