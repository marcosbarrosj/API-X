

  // Importa a biblioteca TwitterApi
  const { TwitterApi } = require('twitter-api-v2');

  const client = new TwitterApi({


    appKey: '',
    appSecret: '',
    accessToken: '',
    accessSecret: '',
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
