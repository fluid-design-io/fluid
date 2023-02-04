import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
/* template ID: d-3b17bc146fd44a87a0d402e7d1095dba */

async function sendEmail(req, res) {
  const { email, name, message } = req.body;
  const toSender = {
    personalizations: [
      {
        to: [
          {
            email, // To sender
          },
        ],
        dynamic_template_data: {
          name,
          email,
          title: 'We got your message',
          message: `Hi ${name}, we have recieved your message and will reply you within 24 hours. Your Message: ${message}`,
        },
        subject: 'Fluid Design | Form Response',
      },
    ],
    from: {
      email: 'support@open-foto.com',
      name: 'Fluid Design Support',
    },
    reply_to: {
      email: 'support@open-foto.com',
      name: 'Fluid Design Support',
    },
    template_id: 'd-3b17bc146fd44a87a0d402e7d1095dba',
  };
  const toAdmin = {
    personalizations: [
      {
        to: [
          {
            email: 'oliver@image-vision.co', // to admin -> me
          },
        ],
        dynamic_template_data: {
          name,
          email,
          title: 'New contact - Fluid Design',
          message: `You got a new contact message! From: ${name}. reply to: ${email}. Message: ${message}`,
        },
        subject: 'Fluid Design | Form Response',
      },
    ],
    from: {
      email,
      name,
    },
    reply_to: {
      email,
      name,
    },
    template_id: 'd-3b17bc146fd44a87a0d402e7d1095dba',
  };
  try {
    // console.log("REQ.BODY", req.body); ${req.body.subject}
    await sendgrid
      .send(toSender as any)
      .then(async () => await sendgrid.send(toAdmin as any))
      .catch((err) => console.log(err));
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
