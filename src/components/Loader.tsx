import '../styles/loader.css'

interface Props {
    bGLoaded : boolean;
}

function Loader(props : Props) {

    return (
        <div className={`projectPageLoading ${props.bGLoaded ? "" : "pBGLoading"}`}>
            <div className="loader-container">
                <div className="spinner"></div>
            </div>
      </div>
    );
}

export default Loader;