<script>
  import DiagArrow from "../../images/DiagArrow.svelte";
  import pages from "../../../data/pages.json";
</script>

<div class="container">
  <section>
    <div class="top">
      <h2>
        The future isn’t only measured in dollars. It’s measured in celsius.
      </h2>
      <DiagArrow />
    </div>
    <div class="bottom">
      <div class="image">
        <img
          src="/images/Dollars_Celsius.gif"
          alt="Text Graphic with the words Dollars and Celcius"
        />
      </div>
      <div class="text">
        <p>
          We care about what kind of future your super investments deliver, so
          we choose renewables over fossil fuels, responsibility over a quick
          buck, and the future over now. Our investment strategy avoids harmful
          investments and uses the power of your money to invest in climate
          solutions and act on the issues of today.
        </p>
        <a class="button full-width" href={pages.PERFORMANCE_AND_RETURNS[1]}
          >See our performance</a
        >
      </div>
    </div>
  </section>
</div>

<style lang="scss">
  @use "../../../styles/" as *;

  section {
    margin: 20px 0;
    padding: 60px 20px;
    background-color: $black;
    border-radius: 32px;
    color: $white;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  h2 {
    width: 70%;
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .image {
    width: 40%;
    display: flex;
    justify-content: center;
  }

  .text {
    padding-top: 180px;
    width: 50%;
  }

  p {
    font-size: 30px;
    line-height: 120%;
    margin-bottom: 50px;
  }

  @media (max-width: 740px) {
    p {
      font-size: 22px;
    }
  }

  @media (max-width: 600px) {
    section {
      padding: 20px;
    }

    .bottom {
      display: flex;
      flex-direction: column;
    }

    .image {
      width: 100%;
    }

    .text {
      padding-top: 20px;
      width: 100%;
    }

    p {
      font-size: 24px;
    }
  }
</style>
