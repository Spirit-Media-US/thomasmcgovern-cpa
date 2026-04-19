export const onRequestPost: PagesFunction = async (context) => {
  try {
    const formData = await context.request.formData();
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const message = formData.get('message') || '';

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Send via MailChannels (free on CF Pages)
    const mailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'tmcgovern@thomasmcgovern.cpa', name: 'Thomas McGovern' }],
          },
        ],
        from: { email: 'noreply@thomasmcgovern.cpa', name: 'Website Contact Form' },
        reply_to: { email: String(email), name: String(name) },
        subject: `Contact Form: ${name}`,
        content: [
          {
            type: 'text/plain',
            value: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
          },
        ],
      }),
    });

    if (mailResponse.ok || mailResponse.status === 202) {
      return Response.redirect(new URL('/contact?success=true', context.request.url).toString(), 303);
    }

    return new Response(JSON.stringify({ error: 'Failed to send message. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch {
    return new Response(JSON.stringify({ error: 'Server error. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
