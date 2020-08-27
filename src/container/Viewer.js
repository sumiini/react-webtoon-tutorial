import React from "react";
import axios from "axios";

class Viewr extends React.Component{
    constructor(props){
        super(props)

        this.state={
            episodeId:parseInt(props.match.params.episodeId,10),
            episode :{}
        };
    }

    componentDidMount(){
        this._getEpisodeList();
    }

    _getEpisodeList(){
        const apiUrl = '/dummy/episode_list.json';

        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    episode : data.data.webtoonEpisodes.find(episode => (
                        episode.id===this.state.episodeId
                    ))
                });
            })

            .catch(error => {
                console.log(error);
            });
    }



    render(){
        return(
            <div className="wrap_viewer">
                {episode.title}
                <Link to={`/webtoon/${episode.webtoonId}`} className="btn_cloase">

                </Link>

            </div>
        )
    }
}

export default Viewr;
