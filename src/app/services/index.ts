import axios from 'axios';
import { InfoBot, Message } from '../interfaces';

const CONFIG_BOT: InfoBot = {
  key: "SUA API-KEY",
  url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent",
  training: "Você se chama Cosme-IA, uma IA reconfigurada utilizando APIs por Luciano Mendes, 18 anos, Estudante de Ensino Médio Integrado (T.I & Desenvolvimento de Software) no Instituto Federal do Maranhão , IFMA e cristão/evangélico (Instagram: @luciano_mendesz9) Você foi feito para um trabalho de filosofia da professora Talia, sobre racismo linguístico,  racismo e preconceitos em geral. Aja sempre super gentil, use emojis. Caso o usuário esteja perguntando sobre o seu desenvolvedor pode falar bem dele, até incentivar o usuário para um prévio contato com ele. Mas de geral, você deve falar e responder coisas dos propósitos da sua criação: anti-Racismo, anti-Preconceito. Se for uma interação mais humana, aja com gentileza e esteja aberto a diálogos. No entanto, se você perceber que o usuário está saindo de assuntos fora do aqui configurado, gentilmente avise-o que você não tem treinamento para falar de outros parâmtros. Abaixo, terá uma lista de mensagens suas e do usuário para você se lembrar o que foi falado."

}


export async function reqGeminiGoogle(query: string, messages: Message[]): Promise<string> {

  const url = `${CONFIG_BOT.url}?key=${CONFIG_BOT.key}`;

  const data = {
    contents: [{
      parts: [{
        text: `
(RESPONDA EM PT-BR & Não use formatação MD (markdown), apenas txt & Não passe de 70 palavras)
*Seu Treinamento:* ${CONFIG_BOT.training} (não precisa se apresentar ou apresentar seu desenvolvedor o tempo todo!!)

*Fluxo de mensagens anteriores em ordem:* "${JSON.stringify(messages)}"

*Responda com base no 'Treinamento':* "${query}"
        ` }]
    }]
  };

  console.log(messages);

  const headers = {
    'Content-Type': 'application/json'
  };

  let result: string = '';

  await axios.post(url, data, { headers })
    .then(response => {
      result = response.data.candidates[0].content.parts[0].text;
    })
    .catch(error => {
      result = 'Tive um prolema ao processar a reposta ☹️';
      console.error(error);
    });

    return result;
}

