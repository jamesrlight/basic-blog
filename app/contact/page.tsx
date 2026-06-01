export const metadata = {
  title: 'Contact | Basic Blog',
};

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'you@example.com';

  return (
    <section>
      <h1>Contact</h1>
      <p className="lede">Use the form below, or email directly at <a href={`mailto:${email}`}>{email}</a>.</p>
      <form className="contact-form" action={`mailto:${email}`} method="post" encType="text/plain">
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" required />
        </label>
        <button className="button" type="submit">Send message</button>
      </form>
      <p className="meta">This first version uses email. We can later replace it with a proper server-side form.</p>
    </section>
  );
}
