import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {  //{video} in place of props, is the same as const video = props.video;
   // const video = props.video;
        const imageURL = video.snippet.thumbnails.default.url;
    /*sends the video clicked into the main video selection frame*/
    return (
        <li onClick ={() => onVideoSelect(video)} className = "list-group-item">
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src={imageURL} alt=""/>
                </div>
                <div className ="media-body">
                    <div className = "media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;