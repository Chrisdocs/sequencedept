import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.css";


const YoutubeEmbed = ({ embedId }) => (

	<div className="video-container">
			<iframe 
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
				height='600px'
				width='100%'
      />
	</div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;