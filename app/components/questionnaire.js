import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class QuestionnaireComponent extends Component {
  @service advisorService;
  @service handlerService;
  @tracked aiResponse = '';
  @tracked movies = '';
  @service router;

  get question() {
    return this.advisorService.currentQuestion;
  }

  @action
  answer(option) {
    this.advisorService.answerQuestion(option);
  }

  @service aiAdvisor;

  @action
  async askAi() {
    try {
      this.aiResponse = await this.aiAdvisor.sendQuestionToAI(
        this.advisorService.answers,
      );
      this.movies = JSON.parse(this.aiResponse).sort(
        (a, b) => b.rating - a.rating,
      );
    } catch (error) {
      console.error('Error:', error);
    }
  }

  @action
  refreshData() {
    window.location.reload();
  }
}
