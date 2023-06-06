import '../styles/loader.css'

interface Props {
    pBGLoaded : boolean;
}

function Loader(props : Props) {

    return (
        <div className={`projectPageLoading ${props.pBGLoaded ? "" : "pBGLoading"}`}>
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
      </div>
    );
}

export default Loader;