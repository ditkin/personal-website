import { Article } from '../types/Article';

const OfficeArticle: Article = () => {
  return (
    <>
      <h1 class="text-3xl font-extrabold">Is the office dead?</h1>
      <br />
      <div class="text-xl">
        <p>
          Disclaimer / privilege check. The pandemic cost the world 6 million
          lives and counting. Many families are left without a critical
          caretaker, or even a child. We're still reeling from the economic
          effects. If you still feel like reading one entitled tech employee's
          grumblings, read on.
        </p>
        <br />
        <p>
          Starting with a quick story. When COVID hit, everyone in tech was
          thrust into remote work. My first memory? Excitement. "It'll blow over
          in a week or two". I went to costco and stocked up on sardines. As
          time went on, things continued to trend toward the bizarre rather than
          back to normal. Eventually, remote work became the reality.
        </p>
        <br />
        <p>
          Fast forward a little while, and my living situation changed. I found
          myself renting one room in a 3-bedroom apartment. I had my desk and
          bed in my room. I ended up spending 75+% of my time within those 4
          walls. After six months of this lifestyle, I began to develop sleep
          problems. I would wake up at odd hours of the night absolutely wired
          and ready to jump out of bed. Meditation, drinking tea before bed,
          removing stressors from my life had no effect. Neither did a 2 week
          vacation to Puerto Rico.
        </p>
        <br />
        <p>
          As with any persistent sleep disorder, its impact on life snowballs.
          Lack of sleep accumulates, impacting work and social performance and
          causing cognitive impairment. This causes more stress which further
          damages sleep.
        </p>
        <br />
        <p>
          Debugging this sleep problem amidst our new normal, I began to
          evaluate variables in my life that had recently changed. I realized
          that I used to sleep perfectly fine when the corporate office was a
          regular and significant part of my routine.
        </p>
        <br />
        <p>
          Some context - HubSpot offers employees best-in-class flexibility for
          their work preference. Each year, employees can select @remote, @flex,
          or @office. HubSpot didn't jettison its office space like many tech
          companies did. At this point, solving my sleep problem had become a
          top priority for me. I made the decision to start coming into the
          office full-time.
        </p>
        <br />
        <p>
          As any engineer knows, debugging can be a protracted and winding
          process. Some issues repel apparent logic and reason and require many
          attempts to correctly diagnose and fix. In this case, I was blessed to
          hit the nail on the head. Literally the first day of my return to the
          office, I had a fantastically productive work day.
        </p>
      </div>
    </>
  );
};

OfficeArticle.id = 'officeArticle';

OfficeArticle.title = 'Is the office dead?';

OfficeArticle.timestamp = 1647139096505;

export default OfficeArticle;
