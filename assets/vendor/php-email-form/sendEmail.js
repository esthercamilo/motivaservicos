const nodemailer = require('nodemailer');

// Configuração do transporte (conforme o serviço de e-mail que você utilizar)
const transporter = nodemailer.createTransport({
  service: 'gmail', // Ou outro serviço de e-mail que você preferir
  auth: {
    user: 'lelecamilobru@gmail.com',
    pass: 'fn327598',
  },
});

// Função para enviar o e-mail
function sendEmail(formData) {
  const mailOptions = {
    from: 'seuemail@gmail.com', // De quem está enviando
    to: 'lelecamilobru@gmail.com', // Para quem o e-mail será enviado
    subject: 'Nova mensagem de contato', // Assunto do e-mail
    text: `Nome: ${formData.name}\nE-mail: ${formData.email}\nMensagem: ${formData.message}`, // Corpo do e-mail
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Erro ao enviar o e-mail:', error);
    } else {
      console.log('E-mail enviado:', info.response);
    }
  });
}

module.exports = sendEmail;
