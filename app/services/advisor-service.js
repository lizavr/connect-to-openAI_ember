import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class AdvisorService extends Service {
  @tracked currentQuestionIndex = 0;

  questions = [
    {
      id: 'type',
      text: 'What do you prefer?',
      options: ['a movie', 'an animated film'],
      next: 'genre',
    },
    {
      id: 'genre',
      text: 'Which genres do you enjoy?',
      options: [
        'I do not know',
        'Comedy',
        'Drama',
        'Thriller',
        'Horror',
        'Sci-Fi',
        'Adventure',
        'Romance',
        'Action',
        'Animation',
        'Documentary',
      ],
      next: 'mood-of-movie',
    },
    {
      id: 'mood-of-movie',
      text: 'Are you looking for something...',
      options: ['light and relaxing', 'something thought-provoking'],
      next: 'mood',
    },
    {
      id: 'mood',
      text: 'Are you in the mood for a specific vibe?',
      options: [
        'Joy and laughter',
        'Romantic mood',
        'Suspense and tension',
        'Fear and horror',
        'Inspiration and motivation',
        'Adventurous spirit',
      ],
      next: 'plot',
    },
    {
      id: 'plot',
      text: 'Do you like movies with unexpected plot twists?',
      options: ['Yes', 'Oh no no no no nooooo'],
      next: 'style',
    },
    {
      id: 'style',
      text: 'You prefer films',
      options: ['modern', 'classics'],
      next: 'alone',
    },
    {
      id: 'alone',
      text: 'Are you looking for a movie to watch...',
      options: ['alone', 'with friends', 'with a partner'],
      next: 'real',
    },
    {
      id: 'real',
      text: 'Are you interested in movies based on real events?',
      options: ['Yes', 'No'],
      next: '',
    },
  ];

  answers = [];

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  answerQuestion(answer) {
    let current = this.currentQuestion;
    this.answers.push(current.text + ' ' + answer);

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.currentQuestionIndex = null;
    }
  }
}
