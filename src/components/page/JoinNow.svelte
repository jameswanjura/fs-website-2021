<form method="GET" action="https://join.futuresuper.com.au/">
  <h1>Join Future Super</h1>
  <h4>Joining usually takes about 5 minutes</h4>
  <p>
    <label
      >First Name<input
        type="text"
        id="first_name"
        name="first_name"
        required
      /></label
    >
  </p>
  <p>
    <label>Email ^<input type="email" name="email" required /></label>
  </p>
  <input type="text" id="referer" name="ReferCode" style="display:none" />
  <p>
    <button type="submit" class="primary">Next →</button>
  </p>
  <p class="disclaimer">
    ^ By providing your email address, you consent and authorise us to send you
    communications or information, including information required by law, via
    email or similar technologies. Your details will never be passed onto a
    third party other than in accordance with our <a href="/privacy-policy"
      >Privacy Policy</a
    >. You can elect to receive communications by post at any time by contacting
    Future Super on 1300 658 422 or via email at info@myfuturesuper.com.au or in
    writing at GPO Box 1858, Sydney, NSW 2001.
  </p>
</form>

<style lang="scss">
  @use "../../styles/" as *;

  form {
    margin: 20px 0 100px 0;
    border: 1px solid $black;
    border-radius: 32px;
    padding: 40px;
  }

  input {
    display: block;
    padding: 8px;
    border-radius: 8px;
    border: 1px solid $black;
    outline: none;
    margin-top: 8px;
    margin-bottom: 30px;
    width: 100%;
  }

  p.disclaimer {
    margin-top: 40px;
  }

  h1 {
    margin-bottom: 8px;
  }

  h4 {
    margin-bottom: 30px;
  }

  @media (min-width: 1300px) {
    form {
      margin: 20px 50px 100px 50px;
    }
  }

  @media (max-width: 800px) {
    form {
      margin-top: -40px;
    }
  }
</style>
