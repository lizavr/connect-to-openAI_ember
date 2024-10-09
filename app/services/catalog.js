import Service from '@ember/service';

export default class CatalogService extends Service {
  movies = {};
  constructor() {
    super(...arguments);
    this.movies = [
      {
        name: 'Inception',
        description:
          "A skilled thief, who is able to enter people's dreams and steal secrets from their subconscious, is given the chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.",
      },
      {
        name: 'The Shawshank Redemption',
        description:
          'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency within the walls of a maximum-security prison.',
      },
      {
        name: 'The Godfather',
        description:
          'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son, leading to a tale of power, loyalty, and betrayal.',
      },
      {
        name: 'The Dark Knight',
        description:
          'Batman sets out to dismantle the remaining criminal organizations that plague the streets of Gotham, but he is challenged by a mastermind known as the Joker, who pushes him to the limits of his abilities.',
      },
      {
        name: 'Pulp Fiction',
        description:
          'The lives of two mob hitmen, a boxer, a gangster, and his wife, and a pair of diner bandits intertwine in a series of bizarre, funny, and violent incidents in this classic crime drama.',
      },
      {
        name: 'Fight Club',
        description:
          'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more as their relationship grows increasingly volatile.',
      },
      {
        name: 'Forrest Gump',
        description:
          'The story of a man with a low IQ who inadvertently influences a series of defining historical moments, experiencing love, loss, and personal growth along the way.',
      },
      {
        name: 'The Matrix',
        description:
          'A computer hacker learns that the reality he lives in is actually a simulated reality created by intelligent machines, and joins a group of rebels fighting to free humanity from its artificial imprisonment.',
      },
      {
        name: 'Gladiator',
        description:
          'A former Roman general sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
      },
      {
        name: "Schindler's List",
        description:
          'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
      },
    ];
  }
}
