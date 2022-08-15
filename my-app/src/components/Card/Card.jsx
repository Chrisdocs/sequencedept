import React from "react";
import { Carousel } from "react-responsive-carousel";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles.css";

function Cards() {
  return (
    <Carousel className="carousel-container" showThumbs={false}>
		<div className="card-wrapper">
			<div className="video-wrapper">
				<ReactPlayer
					className="react-player"
					url="https://vimeo.com/226091135"
					controls={true}
					width="100%"
					height="100%"
				/>
			</div>
			<div className="text-wrapper">
				<p className="video-title">
					Title
				</p>
				<p className="video-info">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, sapiente ullam qui assumenda quibusdam tempore consequatur aliquid dolorum fugit optio nesciunt consequuntur maiores illo, explicabo, quas quis pariatur enim corporis?
				</p>
			</div>
		</div>
    </Carousel>
  );
}

export default Cards;