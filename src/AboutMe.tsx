export default function AboutMe() {
  return (
    <div>
      <p>👋🏻 I'm David Itkin.</p>
      <br />
      <p>
        I'm a software engineer, currently working at HubSpot in Cambridge, MA
        as a technical lead on one of the frontend product teams.
      </p>
      <br />
      <p>
        My sweet spot is working on the "back" of the frontend. That's the data
        layer, the intersection of the frontend and the backend. I'm obsessed
        with GraphQL and Apollo - integrating these technologies into our apps
        yielded fantastic performance improvements and maintainability.
      </p>
      <br />
      <p>
        I'm passionate about clean architecture in complex frontend single page
        applications. I get excited about separation of concerns in enterprise
        frontends, and advocate for batteries-included libraries and components
        wherever possible.
      </p>
      <br />
      <p>
        I have a few fun hobbies:
        <ul class="list-disc pl-10">
          <li>
            I practice Vipassana meditation.
            <a
              class="ml-1 underline"
              target="_blank"
              href="https://www.dhara.dhamma.org/about/vipassana/"
            >
              Read more about this here.
            </a>
            <br />
            If you have any interest whatsoever in meditation, please reach out
            to me about it - I love discussing it!
          </li>
          <br />
          <li>
            I sing in an acapella group called soundbites. Our music runs the
            gamut from Enya's May It Be, to Sweet Pea by Amos Lee, to Lone
            Digger by Caravan Palace. Check out this clip from one of our first
            performances 👇
            <video
              controls
              src="../assets/sweetPea.mov"
              type="video/quicktime"
            />
          </li>
          <br />
          <li>
            I dance bachata. Though I'm still a beginner, there's no joy quite
            like nailing one of my combos.
          </li>
          <br />
          <li>I play tennis!</li>
        </ul>
      </p>
    </div>
  );
}
