import Service from '@ember/service';

export default class AiAdvisorService extends Service {
  async sendQuestionToAI(questionData) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer YOUR_API_KEY`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
              'You help with choosing movies.Return answer as array of json in format [{name:"name",description:"description",year:"year",rating:"rating"}] without any other words.Just JSON',
          },
          {
            role: 'user',
            content:
              'Return at least 5 movies. I have some questions and answers about preferences:' +
              JSON.stringify(questionData) +
              'Could You recommend movies for me?',
          },
        ],
      }),
    });
    const data = await response.json();
    return data.choices[0].message.content;
  }
}
