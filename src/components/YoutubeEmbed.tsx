import LiteYouTubeEmbed from "react-lite-youtube-embed";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import "../styles/youtubeEmbed.css";
function YoutubeEmbed() {
  return (
    <div className="youtube-embed">
      <LiteYouTubeEmbed
        wrapperClass="yt-lite youtube-iframe"
        iframeClass="youtube-iframe"
        id="on2EzsO3MpQ"
        title="YouTube video player"
        noCookie={true}
      />
    </div>
  );
}

export default YoutubeEmbed;
