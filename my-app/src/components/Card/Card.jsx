import React from "react";
import Card from "react-bootstrap/Card"
import YoutubeEmbed from "../EmbedVid/Video";
import './styles.css';

function Cards() {
    return (
        <div>
            <Card id="card">
                <div id="card-video">
                    <YoutubeEmbed embedId="jRyo0uxQ5DE" />
                </div>
                <div id='card-info'>
                    <div id="card-title">
                        <h2>Title</h2>
                    </div>
                    <div id="card-desc">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quibusdam vel aspernatur sunt ullam voluptate facilis, accusamus porro dolorum placeat libero eveniet, nobis earum incidunt optio illum. Laudantium, obcaecati debitis?</p>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default Cards;