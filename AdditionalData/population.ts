import AdditionalData from '@civ-clone/core-data-object/AdditionalData';
import Population from '../Population';
import Spaceship from '@civ-clone/core-spaceship/Spaceship';

export const getAdditionalData = () => [
  new AdditionalData(Spaceship, 'population', (spaceship: Spaceship) =>
    spaceship.yields().reduce((population, spaceshipYield) => {
      if (spaceshipYield instanceof Population) {
        population.add(spaceshipYield);
      }

      return population;
    }, new Population())
  ),
];

export default getAdditionalData;
