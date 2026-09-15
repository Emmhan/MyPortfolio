export function renderContactPage() {
  return `
    <section class="section-shell contact page-section">
      <div class="section-heading"><p class="eyebrow">03 / Contact</p><h1 class="page-title">Let’s work<br><span>together.</span></h1></div>
      <div class="contact-content">
        <p>Have a project in mind, or just want to say hello? Send me a message and I’ll get back to you soon.</p>
        <form id="contact-form">
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@email.com" /></label>
          <label>Message<textarea required name="message" rows="4" placeholder="Tell me a little about your project"></textarea></label>
          <button class="button button-dark" type="submit">Send message <span aria-hidden="true">↗</span></button>
          <p class="form-status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  `
}