import styled from "styled-components";
import Slider from "react-slick";

const MainContainer = styled.div`
  width: 100%;
`;

export default function SliderComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <MainContainer>
        {/* 슬라이드 */}
        <Slider {...settings}>
          <div>
            <h5>슬라이드1</h5>
            <h5>슬라이드1</h5>
            <h5>슬라이드1</h5>
            <h5>슬라이드1</h5>
          </div>
          <div>
            <h5>슬라이드2</h5>
            <h5>슬라이드2</h5>
            <h5>슬라이드2</h5>
            <h5>슬라이드2</h5>
          </div>
        </Slider>
      </MainContainer>
    </>
  );
}
