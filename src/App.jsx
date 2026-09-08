import { useEffect, useState } from 'react'
import logo from './assets/logo.png'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

const links = {
  home: 'https://thesocial99.com/',
  signup: 'https://thesocial99.com/signup',
  instagram: 'https://thesocial99.com/instagram-management-services/',
  pricing: 'https://thesocial99.com/pricing',
  linkedin: 'https://thesocial99.com/linkedin-management-services/',
  youtube: 'https://thesocial99.com/youtube-management-services/',
  x: 'https://thesocial99.com/x-twitter-management-services',
  tiktok: 'https://thesocial99.com/tiktok-management-services',
  contentMarketing: 'https://thesocial99.com/content-marketing-services',
  socialMediaUsa: 'https://thesocial99.com/social-media-management/usa',
  bookCall: 'https://thesocial99.com/book-a-call',
}

const siteUrl = 'https://social99group.com'

const linkedTextClass = 'font-semibold text-[#006fe0] underline decoration-[#006fe0] decoration-2 underline-offset-4 transition hover:text-[#0059b3]'

const benefits = [
  ['Regular posts', 'Keep your page active with a steady mix of posts, Reels, and other content.'],
  ['Captions', 'Short, clear captions that sound like your brand.'],
  ['Content planning', "Know what's going out and when. No last-minute scrambling for ideas."],
  ['Branded designs', 'Your colours, fonts, and style stay consistent across your posts.'],
  ['Platform management', 'Keep your social profiles updated and active.'],
  ['Performance tracking', "See what's getting attention and what isn't."],
  ['Content for your business', 'Posts are based on your products, services, customers, and what you actually do.'],
]

const costRows = [
  ['Time spent each month', 'Hours taken away from your business', 'Managed for you'],
  ['Design tools and subscriptions', 'Additional monthly costs', 'Included'],
  ['Learning and planning', 'Time spent figuring out what to post', 'Included'],
  ['Professional copywriting', 'Additional cost or extra time', 'Included'],
  ['Overall investment', 'Time + multiple tools and services', '$99 flat'],
]

const platforms = [
  ['LinkedIn Social Media Management', links.linkedin, 'LinkedIn is where you can talk about your industry, your work, and the problems your customers deal with. Content can include company updates, practical advice, team expertise, case studies, and lessons from real projects.'],
  ['YouTube Social Media Management', links.youtube, 'YouTube works well when you need more time to explain something. We can help plan video topics, write titles and descriptions, and build content around the questions your customers are already asking.'],
  ['X Social Media Management', links.x, 'X is built around short posts and quick conversations. Content can cover industry news, business opinions, quick tips, updates, and replies that start a conversation.'],
  ['TikTok Management Services', links.tiktok, 'TikTok needs content people want to watch, not polished sales pitches. Our TikTok Management Services cover video ideas, hooks, scripts, captions, and content based on your products, services, and audience.'],
]

const reviewQuestions = [
  'Did the ad clearly explain what the customer would get?',
  'Did the landing page match what they saw in the ad?',
  'Was the offer easy to understand?',
  'Did the page give them enough reason to trust the business?',
  'Was it easy to call, message, book, or fill out a form?',
  'Did the visitor know what to do next?',
]

const tests = [
  ['Ad Message', 'Sometimes a clear offer works better. Other times, people respond more to useful information that helps them understand the problem first. We test both to see which message gets more interest.'],
  ['Images and Videos', 'A product image may work well for one business, while a short video may get more attention for another. We test different formats instead of assuming one will work for every campaign.'],
  ['Audience', 'A broad audience can bring in more people, but a more specific audience may bring better quality leads. We test different audience groups and look at how they respond.'],
  ['Lead Forms', 'A short form can make it easier for people to enquire. A longer form can help filter out people who are not a good fit. We test the right balance based on the type of business and campaign.'],
  ['Headlines and Creative', "Small changes in wording can affect results. We may test a headline focused on the customer's problem against one that focuses on the benefit, or compare a customer testimonial with a feature-led ad."],
  ['What the Results Tell Us', 'Testing shows us what people actually respond to. Rather than picking an ad because it looks good, we look at the results and use them to decide what to keep, what to change, and where to put the budget next.'],
]

const faqs = [
  ['What do you include in your social media management services?', <>You can get help with planning, captions, graphics, short videos, posting, comments, messages, and monthly reporting. If you only need help with one platform, <a className={linkedTextClass} href={links.instagram}>Instagram Management Services</a> and Facebook Management Services are available separately.</>],
  ['How much should I spend on Facebook and Instagram ads?', 'It depends on what you sell and what you want the ads to achieve. A local service business and an online store will need very different budgets. We can help you choose a sensible amount to start with, see what the ads bring in, and decide what to do with the budget from there.'],
  ['Do we need to use every social media platform?', 'No. If your customers are mainly on Instagram and Facebook, there may be little reason to spend time managing five other platforms. The focus should be on the places where your customers are actually looking.'],
  ['How do you decide which social media platforms we should use?', 'We look at who you want to reach, where they spend time, and how they usually find businesses like yours. A restaurant may get more value from Instagram, while a B2B company may be better suited to LinkedIn. The platform should fit the business.'],
  ['Will the content sound like it was written by an agency?', 'It should sound like you. We use the way you speak to customers, the questions they ask, your experience, and the words you normally use. You also get a chance to review the content before it is posted.'],
  ['Can you create content if we do not have many photos or videos?', 'Yes. We use customer reviews, FAQs, service details, existing images, and information from your team. We can also give you simple ideas for photos and videos you can record yourself with a phone.'],
  ['Do you offer Instagram Ads Management Services?', 'We can handle the setup, audiences, ad creative, testing, budget changes, and regular checks. We look at what the ads are bringing in, whether that means enquiries, leads, bookings, or sales.'],
  ['Do you also offer SEO Services?', 'Yes. Our SEO Services can include keyword research, on-page changes, content planning, and improvements to help your website show up for searches that are relevant to your business.'],
]

const blogPost = {
  title: 'People Think AI Will Run Their Social Media Management. It Won’t.',
  description: 'Can AI run your social media management? Learn what AI can handle, and how to use automation without losing control. Book a call with Social 99.',
  slug: '/ai-social-media-automation-for-social-media-management',
}

const articleSections = [
  {
    heading: blogPost.title,
    paragraphs: [
      'Businesses now want AI to run their social media accounts. From picking the topic to writing the post, and community management, so they can focus on the business growth.',
      'This might sound great, but AI can do blunders, someone still has to check and approve the content.',
      'AI can knock off repetitive tasks. It can’t do what an actual human intelligence can do.',
      'AI can never understand what your brand is all about, what the business should sound like and how to handle difficult situations.',
      'The Social 99 Group uses AI for Social Media Management where it makes sense, but keeps strategy, judgement, and the final say with people.',
      'It is genuinely useful for busywork.',
      'AI can help with brainstorming, generating ideas, keep the content calendar organised, and pull the basic reports.',
      'The real skill is knowing which of those tasks you can safely hand off, and which ones still need your judgment.',
    ],
  },
  {
    heading: 'The fantasy: “AI will handle everything”',
    paragraphs: [
      'It’s easy to see why this idea is appealing.',
      'You connect your social accounts, then set a budget, and tell AI to do the word.',
      'Posts go out every day. Comments get replies. DMs are handled. It even knows what to post when a festival, breaking news story, or new trend starts getting attention.',
      'That sounds great until you look at what’s actually involved.',
      'AI doesn’t know your business the way you do. It doesn’t know which products make you the most money, what your customers complain about, why people choose you over a competitor, or which offers you’re trying to push this month.',
      'It also can’t decide what really deserves your attention. Which platform should get most of your time? What topics should you keep coming back to? When has a type of content stopped working? When should you change direction?',
      'Those decisions still need someone who understands the business.',
      'And there’s another issue people often overlook.',
      'If an AI generated post shares wrong or misguiding information someone has to deal with the fallout. AI can produce the content, but it doesn’t carry the responsibility for what gets published.',
    ],
  },
  {
    heading: 'One blunder that shows why full automation is risky',
    paragraphs: [
      'Here’s a simple example of how things can go wrong when you let AI do your social media management without anyone checking what it posts.',
      'Imagine a US clinic connects an AI tool to its Instagram and gives it a simple instruction: “Post about our services every day and reply to comments.”',
      'The AI spots a trending post about a new treatment online. It picks up the idea and creates a caption:',
      '“Now offering the latest XYZ laser treatment for permanent hair removal in one session! Book today.”',
      'Sounds fine at first. But there’s a problem.',
      'The clinic doesn’t even offer that treatment. The permanent hair removal claim in one session is inaccurate. It can mislead people.',
      'If the post goes live before anyone checks it, the problem gets bigger quickly.',
      'People may start asking, “Is it really permanent?” Some might even book an appointment expecting a treatment the clinic cannot provide.',
      'Now the clinic has to explain what happened, correct the post, manage confused customers, and possibly deal with complaints. More importantly, people who saw the post may start questioning whether they can trust the clinic.',
      'This is one reason Social Media Management USA still needs a human check before publishing anything. AI can create and publish content quickly, but someone needs to make sure that content is true, appropriate, and right for the business.',
      'This type of mistake can happen for a few simple reasons.',
      'AI can make things up. It may confidently mention a price, service, offer, or claim that the business never actually provided.',
      'It doesn’t know every rule. Local regulations, medical or legal requirements, and a brand’s own policies can be easy for AI to miss.',
      'There may be no one checking. AI can write something that sounds completely believable even when the information is wrong. If that content goes straight through your social media marketing platforms and onto your accounts, nobody may catch the mistake before your audience sees it.',
      'That’s why this example works as a general warning. AI can be useful for creating content and handling routine work, but giving it full control for social media management without a review step can create problems that are difficult to reverse.',
    ],
  },
  {
    heading: 'Where Can AI Actually Help?',
    paragraphs: [
      'Think about all the small tasks that take up time during the week. Writing the first caption, cutting down a long video, adding subtitles, resizing a post, checking numbers, or going through dozens of comments. None of these tasks are impossible, but they can eat up a lot of your day.',
      'This is where AI can help.',
    ],
  },
  {
    heading: 'What should AI handle?',
    paragraphs: [
      'Writing the first draft',
      'Give it information about your business and it can share captions, hooks, storytelling ideas. You can change the structure and with few tweaks you can make the content suitable for your business.',
      'Turning one piece of content into several',
      'Have a long video, blog post, or interview? AI can help turn that one piece of content into shorter captions, post ideas, or video scripts. This can also support your Content Marketing Services by helping you get more use out of content you have already created.',
      'Creating different versions',
      'You can ask AI to write a few versions of the same idea. Try a different opening, a shorter caption, or a more direct CTA and see what your audience responds to.',
      'Handling basic video work',
      'AI can add captions, make simple edits, and resize videos for platforms such as Instagram Reels, YouTube Shorts, and TikTok. That can save a fair amount of time when you’re creating content regularly.',
      'Making sense of your numbers',
      'Instead of going through every metric yourself, AI can pull together basic information such as reach, saves, shares, and your best-performing posts. It can then help turn those numbers into a simple report.',
      'Sorting through comments and DMs',
      'If you receive the same questions again and again, AI can group them together and suggest simple replies. You can then step in when a conversation needs a personal response.',
    ],
  },
  {
    heading: 'What should stay with a person?',
    paragraphs: [
      'Some parts of social media need more than a quick answer or a well-written caption.',
      'Strategy is one of them. AI can suggest content ideas, but you still need to decide what your business should talk about and which topics matter to your audience.',
      'Your brand voice also needs a person to check it. A caption can be grammatically perfect and still sound nothing like your business. The same applies to Email Marketing Services, where your tone and message need to stay consistent across every customer interaction.',
      'Then there are sensitive situations. Complaints, pricing changes, customer disputes, crises, and medical, legal, or financial claims should not be left to an automated system.',
      'And finally, there is the human side of social media. Regular customers, difficult conversations, personal questions, and unexpected situations often need someone who understands the context and knows when to respond differently.',
      'The best use of AI is fairly simple, let it handle repetitive work, then keep the decisions that can affect your customers and your reputation in human hands.',
    ],
  },
  {
    heading: 'A Safer Way to Use AI: Assistant, Not Autopilot',
    paragraphs: [
      'There’s a simple way to think about AI and social media: let it handle repetitive work, but keep people involved when a real decision needs to be made.',
      'AI can save you a lot of time, as long as you don’t give it complete control over your accounts.',
      'Safe to Automate, With a Quick Review',
      'AI can handle things like writing first drafts, turning a long blog or video into shorter posts, adding captions, making basic edits, and pulling together social media numbers.',
      'You should still check the final result before it gets published. A quick review can catch a wrong fact, awkward wording, or something that doesn’t fit your brand.',
      'Keep These Tasks Human',
      'Some decisions should stay with a person. Decide the intent of posting, check how the content sounds, and deal with clients.',
      'The same applies when a post involves refunds, discounts, delivery promises, customer problems, or claims about results. These are situations where a wrong response can create bigger problems.',
      'The goal isn’t to stop using AI. It’s to use it where it makes your day easier without letting it make decisions that could affect your customers or your reputation.',
      'Use AI as an assistant. Keep the final say with a person.',
    ],
  },
  {
    heading: 'Frequently asked questions',
    paragraphs: [
      'Can I use AI to run social media for me?',
      'AI can help you come up with ideas, write first drafts, and pull reports. But it can’t decide your strategy, understand your customers, or take responsibility when something goes wrong.',
      'Can I make my content sound humanised with the use of AI?',
      'Yes, if you give a clear idea and brief, and share examples, stories and set tone like yours. The audience will notice AI if there is the same structure and a monotonous pattern of content presentation.',
      'Do I need to have fancy AI tools?',
      'You can start with basic tools for ideation and content copy. You don’t need a whole stack for it. A simple workflow is easier to use and manage.',
      'How much time can this realistically save me?',
      'AI can do 30 to 50 percent of manual work. That means it can save around 8 to 10 hours each month. Use that time to strategies, competitor analysis and build business strategies.',
    ],
  },
  {
    heading: "If Your Engagement Looks Good but Your Calendar Doesn't",
    paragraphs: [
      'Getting likes is great. Getting enquiries is better.',
      'If your social media looks active but isn’t bringing in business, it may be time to change what you’re posting.',
      'Want to see what’s missing?',
      'Book a call with The Social 99 Group',
    ],
  },
]

function Logo() {
  return (
    <a className="flex items-center gap-3" href="/" aria-label="Social99 Group home">
      <img className="h-11 w-11 object-contain" src={logo} alt="Social99 Group logo" width="44" height="44" />
      <span className="text-lg font-extrabold tracking-[-0.02em] text-black">Social99 Group</span>
    </a>
  )
}

function ArrowIcon() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconChip() {
  return (
    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#eaf1ff] text-[#013186]">
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10.5 8 14l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function FeatureListPanel({ items }) {
  return (
    <div className="rounded-[18px] border border-[#e7eaf0] bg-white p-7 shadow-[0_18px_50px_rgba(16,24,40,0.08)] md:p-8">
      <div className="divide-y divide-[#e7eaf0]">
        {items.map(([title, body]) => (
          <div className="py-5 first:pt-0 last:pb-0" key={title}>
            <h3 className="text-[21px] font-semibold leading-[1.15] tracking-[-0.02em] text-black">{title}</h3>
            <p className="mt-3 text-[15px] leading-[1.8] text-[#475467]">{body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function CheckCardPanel({ items }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <div className="flex flex-col rounded-[18px] border border-[#e7eaf0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.08)]" key={index}>
            <IconChip />
            <div className="mt-6 text-[15px] leading-[1.85] text-[#475467]">{item}</div>
          </div>
        ))}
    </div>
  )
}

function CenteredSectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">{eyebrow}</p>
      <h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">{title}</h2>
      {subtitle ? <p className="mt-5 text-[17px] leading-[1.8] text-[#475467]">{subtitle}</p> : null}
    </div>
  )
}

function ServicePreviewPanel() {
  const services = [
    ['Facebook Ads Management Services', 'Campaign setup, testing, and regular checks focused on enquiries, leads, bookings, or sales.'],
    [<a className={linkedTextClass} href={links.instagram} key="instagram-service-preview">Instagram Ads Management Services</a>, 'Audience, creative, budget, and message testing for Instagram campaigns.'],
    ['SEO Services', 'Keyword research, on-page changes, content planning, and relevant search visibility improvements.'],
    ['Social media management', 'Planning, captions, branded designs, publishing support, and platform consistency.'],
    ['Website development', 'Clear website improvements that help visitors understand, trust, and contact your business.'],
  ]

  return <FeatureListPanel items={services} />
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] border-b border-[rgba(1,49,134,0.07)] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-[40px] xl:px-[60px]">
        <Logo />
        <nav className="hidden items-center gap-8 min-[801px]:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a className="text-[15px] font-semibold text-[#475467] transition hover:text-[#013186]" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="group hidden items-center gap-2 rounded-full bg-[#006fe0] px-5 py-3 text-sm font-bold text-white shadow-[0_16px_36px_rgba(0,111,224,0.22)] transition hover:bg-[#0059b3] min-[801px]:inline-flex" href={links.signup}>
          Get Started
          <ArrowIcon />
        </a>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-[#e7eaf0] text-[#013186] min-[801px]:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen ? (
        <nav className="border-t border-[rgba(1,49,134,0.07)] bg-white px-5 pb-6 pt-2 min-[801px]:hidden" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              className="block border-b border-[#eef1f6] py-4 text-[16px] font-semibold text-[#475467] transition hover:text-[#013186]"
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#006fe0] px-5 py-3.5 text-sm font-bold text-white shadow-[0_16px_36px_rgba(0,111,224,0.22)] transition hover:bg-[#0059b3]" href={links.signup}>
            Get Started
            <ArrowIcon />
          </a>
        </nav>
      ) : null}
    </header>
  )
}

function Section({ children, className = '' }) {
  return (
    <section className={`bg-white py-[60px] md:py-[80px] ${className}`}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px]">{children}</div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <section className="bg-white pb-[70px] pt-14 md:pb-[92px] md:pt-20">
        <div className="mx-auto grid max-w-[1440px] items-center gap-[54px] px-5 md:px-10 min-[801px]:grid-cols-[1.02fr_0.98fr] lg:px-[40px] xl:px-[60px]">
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Social media management</p>
            <h1 className="mt-4 text-[clamp(30px,3.8vw,54px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">Grow Your Business With Better Digital Marketing & Social Media Management</h1>
            <p className="mt-5 text-[17px] leading-[1.8] text-[#475467]">Reach more of the right people, get more enquiries, and build a stronger online presence with Facebook Ads Management Services, Instagram Ads Management Services, SEO Services, social media management, and website development.</p>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#475467]">Get marketing support that fits your business and your goals, whether you want more people to find you, more engagement, or more customers.</p>
            <a className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#006fe0] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_18px_40px_rgba(0,111,224,0.25)] transition hover:bg-[#0059b3]" href={links.signup}>Get Started<ArrowIcon /></a>
          </div>
          <ServicePreviewPanel />
        </div>
      </section>

      <Section className="border-y border-[#eef1f6] bg-[#f8fafc]">
        <CenteredSectionHeader eyebrow="Local business marketing" title="The Truth Nobody Tells Local Business Owners" />
        <CheckCardPanel items={[
            <p key="heard">You've probably heard, "You need to be on social media."</p>,
            <p key="budget">You don't need a massive budget to market your business well.</p>,
            <p key="agency">You don't have to pay an agency thousands of dollars every month. You don't need a Reel to go viral or a huge follower count to get customers.</p>,
            <p key="platforms">And you don't need to post everywhere. Pick the platforms your customers use and do a good job there.</p>,
            <p key="focus">At <strong className="font-semibold text-black">The Social 99</strong> Group, the focus is simple: make your marketing budget work harder without making things complicated.</p>,
            <p key="approach">This page shows you how we approach <strong className="font-semibold text-black">Facebook Ads Management Services, Instagram Ads Management Services, SEO Services, and social media management</strong> for businesses across the globe.</p>,
            <p key="goal">Whether you run a salon in Canada, a dental clinic in the UK, a home service business in the USA, or a local retail store in Vaughan, the goal stays the same: reach the right people and give them a reason to choose you.</p>,
          ]} />
      </Section>

      <Section>
        <div className="grid items-start gap-[54px] min-[801px]:grid-cols-[0.82fr_1.18fr]">
          <div><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">What you get</p><h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">What You Get With The Social 99 Group</h2><p className="mt-4 text-[17px] leading-[1.8] text-[#475467]">$99 social media marketing gives you the support to keep your social media active, organised, and consistent.</p><p className="mt-5 text-[16px] leading-[1.8] text-[#475467]">You get consistent social media support without having to manage every part of it yourself.</p></div>
          <FeatureListPanel items={benefits} />
        </div>
      </Section>

      <Section className="bg-[#f8fafc]">
        <div className="max-w-3xl"><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Pricing clarity</p><h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">The Hidden Costs of DIY Social Media</h2><p className="mt-4 text-[16px] leading-[1.85] text-[#475467]">Many business owners try to manage social media themselves. The problem is that the real cost isn't always obvious. Comparing <a className={linkedTextClass} href={links.pricing}>social media management pricing</a> can help you see what you're actually paying for, including your time, design tools, content creation, and ongoing management.</p></div>
        <div className="mt-10 overflow-hidden rounded-[18px] border border-[#e7eaf0] bg-white shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
          <div className="grid grid-cols-3 bg-[#061a4a] text-sm font-bold text-white"><div className="p-4">Cost Type</div><div className="p-4">DIY Estimate</div><div className="p-4">Social99 Group</div></div>
          {costRows.map((row) => <div className="grid grid-cols-3 border-t border-[#eef1f6] text-[15px] leading-[1.6] text-[#475467]" key={row[0]}>{row.map((cell, index) => <div className={`p-4 ${index === 0 ? 'font-semibold text-black' : ''}`} key={cell}>{cell}</div>)}</div>)}
        </div>
        <p className="mt-8 max-w-3xl text-[16px] leading-[1.8] text-[#475467]">With The Social 99 group, you get ongoing social media support without having to handle every post, caption, design, and platform yourself.</p>
      </Section>

      <Section>
        <div className="max-w-3xl"><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Platform strategy</p><h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">Social Media Management Across Major Platforms</h2><p className="mt-4 text-[16px] leading-[1.85] text-[#475467]">You shouldn't post the same content everywhere. A LinkedIn post can be detailed, while TikTok needs a quick video. X is better suited to short updates and conversations.</p><p className="mt-4 text-[16px] leading-[1.85] text-[#475467]">Social99 Group manages your content based on how people actually use each platform.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">{platforms.map(([title, href, body]) => <article className="rounded-[18px] border border-[#e7eaf0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.08)]" key={title}><IconChip /><h3 className="mt-5 text-[clamp(22px,3vw,28px)] font-semibold leading-[1.15] tracking-[-0.02em]"><a className={linkedTextClass} href={href}>{title}</a></h3><p className="mt-4 text-[15px] leading-[1.8] text-[#475467]">{body}</p></article>)}</div>
        <p className="mt-8 max-w-3xl text-[16px] leading-[1.8] text-[#475467]">You don't need to post on every platform. Pick the ones your customers actually use and put your time and budget there.</p>
      </Section>

      <Section className="bg-[#f8fafc]">
        <CenteredSectionHeader eyebrow="Business goals" title="Marketing Built Around Your Business Goals" />
        <CheckCardPanel items={[
          <p key="somewhere">Marketing should help your business get somewhere. Likes and views are nice, but they aren't the main goal.</p>,
          <p key="calls">You might need more calls, enquiries, bookings, or online sales. You may simply want more people to find a service you offer.</p>,
          <p key="approach">The right approach depends on what your business needs. A local business may focus on getting more customers nearby, while an online store may focus on turning website visitors into buyers.</p>,
          <p key="purpose">We use social media, paid ads, SEO , and website improvements based on those goals. Each part has a clear purpose.</p>,
          <p key="consistent">Good social media services should make it easier to stay consistent without adding more work to your day.</p>,
          <p key="blog">Check out our <a className="underline decoration-[#013186] decoration-2 underline-offset-4" href="/blog">blog posts</a> for practical social media tips, ideas, and advice for small businesses.</p>,
        ]} />
      </Section>

      <Section>
        <div className="grid gap-[54px] min-[801px]:grid-cols-[0.9fr_1.1fr]"><div><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">After the click</p><h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">The “Why Didn’t They Enquire?” Review</h2><div className="mt-5 space-y-4 text-[16px] leading-[1.85] text-[#475467]"><p>People can click your ads, visit your website, and still leave without getting in touch. When that happens, the problem may not be the traffic. Something after the click may be stopping them.</p><p>With Meta advertising, we look at what happens after someone clicks and starts exploring your business. We ask simple questions:</p></div></div><div className="rounded-[18px] border border-[#e7eaf0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.08)]"><div className="grid gap-4">{reviewQuestions.map((question) => <div className="flex gap-3" key={question}><IconChip /><p className="text-[15px] font-medium leading-[1.7] text-[#061a4a]">{question}</p></div>)}</div><p className="mt-6 text-[15px] leading-[1.8] text-[#475467]">These checks help find where potential customers are dropping off.</p><p className="mt-4 text-[15px] leading-[1.8] text-[#475467]">You may find that your ads are getting clicks, but the landing page is confusing or the enquiry process has too many steps.</p></div></div>
      </Section>

      <Section className="bg-[#f8fafc]">
        <div className="max-w-3xl"><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Campaign testing</p><h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">What We Test Before We Scale</h2><p className="mt-4 text-[16px] leading-[1.85] text-[#475467]">The first ad is rarely the one that deserves the biggest budget. We test different parts of the campaign to see what actually gets a better response.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{tests.map(([title, body]) => <article className="rounded-[18px] border border-[#e7eaf0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.08)]" key={title}><IconChip /><h3 className="mt-5 text-[20px] font-semibold leading-[1.15] tracking-[-0.02em] text-black">{title}</h3><p className="mt-3 text-[15px] leading-[1.8] text-[#475467]">{body}</p></article>)}</div>
        <p className="mt-8 max-w-3xl text-[16px] leading-[1.8] text-[#475467]">To know more about <a className={linkedTextClass} href={links.home}>The Social 99</a> group, check out our <a className="underline decoration-[#013186] decoration-2 underline-offset-4" href="/about">About section</a>.</p>
      </Section>

      <Section>
        <CenteredSectionHeader eyebrow="First 30 days" title="The First 30 Days Are for Learning, Not Pretending" />
        <CheckCardPanel items={[
          <p key="first">The first 30 days tell us a lot. We get to see how people react to your ads and content, which services get attention, and whether the people visiting your website are actually the people you want to reach.</p>,
          <p key="messages">Some messages will get a better response than others. One service may bring plenty of enquiries while another gets very little interest. A certain type of post might get people talking, while another barely gets noticed. We also look at what happens after the click, including where people leave the website or stop before contacting you.</p>,
          <p key="useful">That gives us something useful to work with. We can put more time and budget into what is getting a response, change what is falling flat, and stop spending money on things that are not helping.</p>,
          <p key="months">The first few months are all about seeing what is working. Then using that information to make smarter decisions in the future.</p>,
          <p key="blog">Check out our <a className="underline decoration-[#013186] decoration-2 underline-offset-4" href="/blog">blog posts</a> for more useful social media tips and ideas.</p>,
        ]} />
      </Section>

      <Section className="bg-[#f8fafc]">
        <div className="mx-auto max-w-4xl text-center"><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Content with substance</p><h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">Your Business Has a Point of View. We Help Bring It Out.</h2><p className="mt-5 text-[16px] leading-[1.85] text-[#475467]">Most businesses talk about their services online. The problem is that this can make one business sound much like another.</p><p className="mt-4 text-[16px] leading-[1.85] text-[#475467]">Your content can say more than what you sell. It can explain why you do things a certain way, what you tell customers before they buy, and what you have learned from doing the work. This is what makes <a className={linkedTextClass} href={links.home}>social media services</a> more useful for your business. The content has something real to say instead of repeating the same points every week.</p></div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center"><p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">FAQ</p><h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">FAQ</h2></div>
        <div className="mt-10 grid gap-4">{faqs.map(([question, answer]) => <details className="group rounded-[18px] border border-[#e7eaf0] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,0.08)]" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-[17px] font-bold text-black">{question}<span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[#eaf1ff] text-[#013186] transition group-open:rotate-45"><svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span></summary><p className="mt-4 text-[15px] leading-[1.85] text-[#475467]">{answer}</p></details>)}</div>
      </Section>

      <Section>
        <div id="get-started" className="rounded-[28px] bg-[radial-gradient(120%_130%_at_22%_12%,#2870d8_0%,#1146a5_42%,#061a4a_100%)] px-6 py-12 text-center shadow-[0_44px_100px_-32px_rgba(6,26,74,0.6),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.2)] md:px-20 md:py-14">
          <h2 className="mx-auto max-w-4xl text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-white">Have a Marketing Problem You Can’t Quite Pin Down?</h2>
          <p className="mx-auto mt-5 max-w-3xl text-[16px] leading-[1.85] text-white/75">Maybe your ads are getting clicks, but nobody is calling. Maybe you’re posting regularly and barely getting a response. Or people are visiting your website and leaving without doing anything.</p>
          <p className="mx-auto mt-4 max-w-3xl text-[16px] leading-[1.85] text-white/75">Sometimes the problem is the ad. Sometimes it’s the offer, the page, or what happens after someone clicks. That’s where it helps to look at the whole picture instead of changing one thing and hoping it works.</p>
          <a className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-[15px] font-bold text-[#061a4a] transition hover:bg-[#eaf1ff]" href={links.signup}>Get started<ArrowIcon /></a>
        </div>
      </Section>
    </>
  )
}

function BlogIndexPage() {
  return (
    <>
      <section className="bg-white pb-8 pt-10 md:pb-10 md:pt-14">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">The Blog</p>
            <h1 className="mt-3 text-[clamp(38px,5.2vw,76px)] font-semibold leading-[1.04] tracking-[-0.02em] text-[#013186]">Insights that Shape Execution</h1>
            <p className="mx-auto mt-5 max-w-3xl text-[18px] leading-[1.6] text-[#475467]">{blogPost.description}</p>
          </div>
        </div>
      </section>

      <section className="bg-white pb-[60px] pt-0 md:pb-[80px]">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-[40px] xl:px-[60px]">
          <article className="grid max-w-[400px] rounded-[18px] border border-[#dbe4f2] bg-[#f4f8ff] p-4 shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
            <a className="grid min-h-[170px] place-items-center rounded-[14px] bg-white px-5 text-center text-[21px] font-semibold leading-[1.25] text-[#013186]" href={blogPost.slug}>
              {blogPost.title}
            </a>
            <h2 className="mt-5 text-[23px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#013186]">
              <a href={blogPost.slug}>{blogPost.title}</a>
            </h2>
            <p className="mt-4 text-[16px] leading-[1.65] text-[#475467]">{blogPost.description}</p>
            <a className="group mt-5 inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#013186] px-6 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#0059b3]" href={blogPost.slug}>
              Read More
              <ArrowIcon />
            </a>
          </article>
        </div>
      </section>
    </>
  )
}

function ArticleParagraph({ paragraph }) {
  const linkedPhrases = {
    'The Social 99 Group': links.home,
    'The Social 99': links.home,
    'social media marketing platforms': links.home,
    'Content Marketing Services': links.contentMarketing,
    'Social Media Management USA': links.socialMediaUsa,
  }

  if (paragraph === 'Book a call with The Social 99 Group') {
    return (
      <a className="group inline-flex items-center gap-2 rounded-full bg-[#006fe0] px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_18px_40px_rgba(0,111,224,0.25)] transition hover:bg-[#0059b3]" href={links.bookCall}>
        Book a call with The Social 99 Group
        <ArrowIcon />
      </a>
    )
  }

  const phrases = Object.keys(linkedPhrases).sort((a, b) => b.length - a.length)
  const parts = []
  let remaining = paragraph

  while (remaining) {
    const matches = phrases
      .map((phrase) => ({ phrase, index: remaining.indexOf(phrase) }))
      .filter((match) => match.index >= 0)
      .sort((a, b) => a.index - b.index)

    if (matches.length === 0) {
      parts.push(remaining)
      break
    }

    const { phrase, index } = matches[0]
    if (index > 0) parts.push(remaining.slice(0, index))
    parts.push({ phrase, href: linkedPhrases[phrase] })
    remaining = remaining.slice(index + phrase.length)
  }

  return (
    <p>
      {parts.map((part, index) => (
        typeof part === 'string'
          ? part
          : <a className={linkedTextClass} href={part.href} key={`${part.phrase}-${index}`}>{part.phrase}</a>
      ))}
    </p>
  )
}

function BlogArticlePage() {
  const [heroSection, ...contentSections] = articleSections

  return (
    <article className="bg-white pb-[70px]">
      <div className="mx-auto max-w-[880px] px-5 pt-10 md:px-10 lg:px-[40px] xl:px-[60px]">
        <div className="text-[14px] font-bold text-[#7b8498]">
          <a className="transition hover:text-[#013186]" href="/">Home</a>
          <span className="mx-2">/</span>
          <a className="transition hover:text-[#013186]" href="/blog">Blog</a>
        </div>
        <h1 className="mt-7 text-[clamp(32px,3.7vw,48px)] font-semibold leading-[1.12] tracking-[-0.02em] text-[#013186]">{heroSection.heading}</h1>
        <div className="mt-8 space-y-6 text-[18px] leading-[1.85] text-[#475467]">
          {heroSection.paragraphs.map((paragraph) => <ArticleParagraph key={paragraph} paragraph={paragraph} />)}
        </div>
      </div>

      <div className="mx-auto max-w-[880px] px-5 md:px-10 lg:px-[40px] xl:px-[60px]">
        {contentSections.map((section) => (
          <section className="border-t border-[#e7eaf0] pt-10 mt-10" key={section.heading}>
            <h2 className="text-[clamp(30px,3.4vw,44px)] font-semibold leading-[1.16] tracking-[-0.02em] text-black">{section.heading}</h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.85] text-[#475467]">
              {section.paragraphs.map((paragraph) => <ArticleParagraph key={paragraph} paragraph={paragraph} />)}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}

function AboutPage() {
  return (
    <>
      <section className="bg-white py-[70px] md:py-[96px]">
        <div className="mx-auto max-w-[980px] px-5 md:px-10 lg:px-[40px] xl:px-[60px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">About</p>
          <h1 className="mt-5 text-[clamp(36px,5vw,64px)] font-semibold leading-[1.08] tracking-[-0.02em] text-black">The Social 99 group</h1>
          <div className="mt-8 max-w-[940px] space-y-6 text-[18px] leading-[1.85] text-[#475467]">
            <p><a className="font-semibold text-[#006fe0] underline decoration-[#006fe0] decoration-2 underline-offset-4" href="/">The Social 99 group</a> started because too many good small businesses were going quiet online. The problem was rarely the quality of the business. Most owners simply did not have the time to keep up with social media.</p>
            <p>We kept seeing the same thing. A restaurant would share its specials for a few days, then disappear for weeks. A salon would have great before-and-after photos sitting unused in its camera roll. A bar could put on a great event, but hardly anyone would hear about it because it was never promoted on Instagram or Facebook.</p>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-[1100px]">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">What We Believe In</p>
          <h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">What We Believe In</h2>
          <div className="mt-10 grid gap-5 min-[801px]:grid-cols-3">
            <article className="rounded-[18px] border border-[#e7eaf0] bg-white p-7 shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
              <IconChip />
              <p className="mt-6 text-[17px] leading-[1.85] text-[#475467]">Your social media should feel like your business. The content should reflect what you actually offer, the people you serve, and what is happening in your business, rather than looking like it came from the same template everyone else is using.</p>
            </article>
            <article className="rounded-[18px] border border-[#e7eaf0] bg-white p-7 shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
              <IconChip />
              <p className="mt-6 text-[17px] leading-[1.85] text-[#475467]">You should also know where your money is going and what you are getting each month. With The Social 99, the process stays clear, with defined deliverables and a dashboard where you can see your content and its progress.</p>
            </article>
            <article className="rounded-[18px] bg-[#013186] p-7 shadow-[0_18px_50px_rgba(16,24,40,0.08)]">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-white/15 text-white">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10.5 8 14l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <p className="mt-6 text-[17px] font-semibold leading-[1.85] text-white">We also believe consistency matters more than trying to post every day. A realistic schedule that keeps your business active is more useful than posting heavily for a week and then going quiet for a month.</p>
            </article>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-[920px] text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Built for Small Businesses</p>
          <h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">Built for Small Businesses</h2>
          <div className="mt-6 space-y-6 text-[18px] leading-[1.85] text-[#475467]">
            <p>The Social 99 group work with small businesses at different stages, from solo business owners to growing teams. Whether you are already established or still getting started, the goal is the same: keep your social media active with content that gives people a reason to pay attention and take action.</p>
            <p>If you are launching a new business, The Social 99 can also help you get your social profiles ready, plan your content, and build a posting routine from the start.</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-[920px] text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#013186]">Our Promise</p>
          <h2 className="mt-4 text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-black">Our Promise</h2>
          <p className="mt-6 text-[18px] leading-[1.85] text-[#475467]">You just have to fill a form, and after that we take it forward. We focus on content that fits your business and industry. We assure no generic content, no video templates. Everything started with a new approach to make the content special.  The prices start with $99. No long term contract.</p>
        </div>
      </Section>

      <Section>
        <div className="rounded-[28px] bg-[radial-gradient(120%_130%_at_22%_12%,#2870d8_0%,#1146a5_42%,#061a4a_100%)] px-6 py-12 text-center shadow-[0_44px_100px_-32px_rgba(6,26,74,0.6),inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(0,0,0,0.2)] md:px-20 md:py-14">
          <h2 className="mx-auto max-w-4xl text-[clamp(30px,3.8vw,48px)] font-semibold leading-[1.15] tracking-[-0.02em] text-white">Ready to Work Together?</h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[16px] leading-[1.85] text-white/75">
            <p>If social media keeps getting pushed to the bottom of your to-do list, The Social 99 can take care of the regular work for you.</p>
            <p>You share the details about your business, services, products, and offers. We handle the content planning, creation, scheduling, and publishing, while you stay in control of what goes live.</p>
            <p>Plans start at $99/month, with no setup fees or long-term contracts.</p>
            <p>You run your business. We help keep your social media active.</p>
          </div>
        </div>
      </Section>
    </>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(1,49,134,0.07)] bg-white py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-8 px-5 md:px-10 min-[801px]:flex-row lg:px-[40px] xl:px-[60px]">
        <div className="max-w-sm"><Logo /><p className="mt-4 text-[15px] leading-[1.8] text-[#475467]">Digital marketing and social media management support for businesses that want clearer content, better campaigns, and more consistent growth.</p></div>
        <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">{navLinks.map((link) => <a className="text-[15px] font-semibold text-[#475467] transition hover:text-[#013186]" href={link.href} key={link.href}>{link.label}</a>)}</nav>
      </div>
    </footer>
  )
}

function App() {
  const path = window.location.pathname
  const page = path === '/about' ? <AboutPage /> : path === '/blog' ? <BlogIndexPage /> : path === blogPost.slug ? <BlogArticlePage /> : <HomePage />

  useEffect(() => {
    const canonicalPath = path === '/' ? '/' : path.replace(/\/$/, '')
    const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '/' : canonicalPath}`
    let canonicalTag = document.querySelector('link[rel="canonical"]')
    if (!canonicalTag) {
      canonicalTag = document.createElement('link')
      canonicalTag.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalTag)
    }
    canonicalTag.setAttribute('href', canonicalUrl)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl)

    if (path === '/about') {
      document.title = 'About Social99 Group | Social Media Management'
      document.querySelector('meta[name="description"]')?.setAttribute('content', 'Learn about The Social 99 group and how it helps small businesses stay active online with clear, consistent social media content.')
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'About Social99 Group | Social Media Management')
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Learn about The Social 99 group and how it helps small businesses stay active online with clear, consistent social media content.')
    } else if (path === '/blog') {
      document.title = 'Blog | Social99 Group'
      document.querySelector('meta[name="description"]')?.setAttribute('content', blogPost.description)
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Blog | Social99 Group')
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', blogPost.description)
    } else if (path === blogPost.slug) {
      document.title = 'People Think AI Will Run Their Social Media Management. It Won’t. | Social 99 Group'
      document.querySelector('meta[name="description"]')?.setAttribute('content', blogPost.description)
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'People Think AI Will Run Their Social Media Management. It Won’t. | Social 99 Group')
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', blogPost.description)
    } else {
      document.title = 'Social Media Management, SEO and Social Growth | Social99 Group'
      document.querySelector('meta[name="description"]')?.setAttribute('content', 'Grow your business with Facebook Management, Instagram Ads Management, SEO Services, social media management, and website design and development. Sign up now')
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Social Media Management, SEO and Social Growth | Social99 Group')
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Grow your business with Facebook Management, Instagram Ads Management, SEO Services, social media management, and website design and development. Sign up now')
    }
  }, [path])

  return (
    <div id="top" className="min-h-screen bg-white font-[Inter,ui-sans-serif,system-ui] text-[#475467]">
      <Header />
      {page}
      <Footer />
    </div>
  )
}

export default App
