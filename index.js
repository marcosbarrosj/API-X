

  // Importa a biblioteca TwitterApi
  const { TwitterApi } = require('twitter-api-v2');

  const client = new TwitterApi({


    appKey: '0CooUh0yPiwhkJOqRBb9Dnlmg',
    appSecret: 'jMrX1P5STcuhtiBq5fc4LEew93qrDwhzcXCtSBnwpYq81uBFER',
    accessToken: '1851618365690740736-wbLbV6pWbrMGhDuKNLrY318ENEg8Bk',
    accessSecret: 'u874ToGifyIgJBeCH25xH2JW0VCJbTTP2dk52XkiC00Rl',
  });
  
  
  async function postMessage(text) {
    try {
    
      const tweet = await client.v2.tweet(text);
      console.log('Tweet publicado com sucesso:', tweet);
    } catch (error) {
      console.error('Erro ao publicar o tweet:', error);
    }
  }
  
  
  postMessage('hello');