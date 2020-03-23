import React from 'react';
import { api, API_KEY } from '../../../api/config.js';
import CardNoticia from '../../CardNoticia';

class Geral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaNoticias: [],
    }
  }

  componentDidMount() {
    api.get(`/top-headlines?country=br&apiKey=${API_KEY}`)
      .then(res => {
        if (res.status === 200)
          this.setState({ listaNoticias: res.data.articles });
      });
  }

  render() {

    const { listaNoticias } = this.state;

    return (
      <div>
        <h1 className="text-center m-3">Principais Notícias</h1>
        <div className="containerNews">
          {
            listaNoticias.length > 0 ?
              listaNoticias.map((noticia, index) => <CardNoticia noticia={noticia} key={index} />)
              :
              <div className="m-5">
                <span>Ainda não achamos os resultados, por favor tente denovo mais tarde</span>
              </div>
          }
        </div>
      </div>
    )
  }
}

export default Geral;