import React ,{useState, useEffect} from "react"
import "../styles/slideShow.css"
import SlideShowItem from "./SlideShowItem"
const SlideShow = () => {
    let imagesSource = [
        {
            url : "https://spiderimg.amarujala.com/assets/images/2022/01/15/750x506/virat-kohli_1642185053.jpeg"
        },{
            url : "https://image.cnbcfm.com/api/v1/image/103135046-GettyImages-110022758.jpg?v=1446585058"
        },{
            url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/post_image_20842b4.jpeg?KjKZll3Ng64PME_nN86a4SRjpf0EKjcx&size=770:433"
        }
    ];
    let length = imagesSource.length ;
    const [slideIndex, setSlideIndex] = useState(0); 
    let timer ;
    const clearInterval = () => {
        if(timer){
            clearTimeout(timer);
        }
    }

    useEffect(() => {
        clearInterval();
        timer = setTimeout(() => {
            setSlideIndex((prevSlideIndex) => prevSlideIndex === length - 1 ? 0 : prevSlideIndex + 1) 
        },2000);

        return () => {
            clearInterval();
        }
    },[slideIndex]);
    const handlePrevious = () => {
        if(slideIndex === 0 ){
            setSlideIndex(length - 1);
        }else{
            setSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
        }
    }
    const handleNext = () => {
        if(slideIndex === length - 1 ){
            setSlideIndex(0);
        }else{
            setSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
        }
    }
    
return (
    <div className="slideShow-Container">
        SlideShow component
        {
            imagesSource.map((element,index) => {
                return <SlideShowItem show={slideIndex == index} key={index} data={element}/>
            })
        }
        <a onClick={handlePrevious}className="previous">&#10094;</a>
        <a onClick={handleNext} className="next">&#10095;</a>
    </div>
);
}

export default SlideShow ;