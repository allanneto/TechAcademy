import React, { Component } from 'react';

import {
  Container,
  CategoryTitle,
  WorkshopsCat,
  GamesWorkshop,
  AnimeWorkshop,
  WorkshopList,
} from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends Component {
  state = {
    workshops: [
      {
        autor: 'Allan Neto',
        categoria: 'Games',
        titulo: 'Título',
        descricao: 'Essa é uma descrição para teste',
        url_video: 'https://youtu.be/dGcsHMXbSOA',
        date: '21/12/19',
      },
      {
        autor: 'Allan Neto',
        categoria: 'Games',
        titulo: 'Título',
        descricao: 'Essa é uma descrição para teste',
        url_video: 'https://youtu.be/dGcsHMXbSOA',
        date: '21/12/19',
      },
      {
        autor: 'Allan Neto',
        categoria: 'Anime',
        titulo: 'Título',
        descricao: 'Essa é uma descrição para teste',
        url_video: 'https://youtu.be/dGcsHMXbSOA',
        date: '21/12/19',
      },
    ],
  };

  render() {
    const { workshops } = this.state;

    const animes = workshops.filter(workshop => workshop.categoria === 'Anime');
    const games = workshops.filter(workshop => workshop.categoria === 'Games');

    return (
      <Container>
        {console.log(animes)}
        <CategoryTitle>
          <h1>
            Categorias em <strong>Destaque</strong>
          </h1>
        </CategoryTitle>
        <WorkshopsCat>
          <GamesWorkshop>
            {animes.map(w => (
              <WorkshopList>{w.date}</WorkshopList>
            ))}
          </GamesWorkshop>
          <AnimeWorkshop workshop={games} />
        </WorkshopsCat>
      </Container>
    );
  }
}
