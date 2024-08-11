/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent, e as renderHead, f as renderSlot, F as Fragment } from '../chunks/astro/server_DylQt-Ie.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const persona = {
    firstName: "SaaS",
    secondName: "Landing",
    description: "Celebrating the craft and care of SaaS design",
    story:
      "Here, we celebrate exceptional SaaS design. These tastefully designed sites or apps are more than just marketing tools or products. They combine dedication, creativity, and precision, turning digital experiences into joy. Discover the thoughtful use of typography, layouts, spacings, and sticky ideas that showcase the power of thoughtful design.",
  sections: {
    books: [
        {
          title: "daylightcomputer.com",
          desc: 'Caring computer.',
          url: 'https://daylightcomputer.com/?ref=saaslanding.page'
        },
        {
          title: "dovetail.com",
          desc: 'Customer insights.',
          url: 'https://dovetail.com/?ref=saaslanding.page'
        },
        {
          title: "family.co",
          desc: 'Crypto wallet.',
          url: 'https://family.co/?ref=saaslanding.page'
        },
        {
          title: "anygood.app",
          desc: 'List-making app.',
          url: 'https://www.anygood.app/?ref=saaslanding.page'
        },
        {
          title: "lovi.care",
          desc: 'Smart skin care.',
          url: 'https://lovi.care/?ref=saaslanding.page'
        },
        {
          title: "osome.com",
          desc: 'Incorporation and accounting.',
          url: 'https://osome.com/?ref=saaslanding.page'
        },
        {
          title: "pipe.com",
          desc: 'Capital platform.',
          url: 'https://pipe.com/?ref=saaslanding.page'
        },
        {
          title: "steep.app",
          desc: 'Business intelligence.',
          url: 'https://steep.app/?ref=saaslanding.page'
        },                                    
    ],
    experience: [
      {
          title: "linear.app",
          desc: 'Plan and build products.',
          url: 'https://linear.app/?ref=saaslanding.page'
      },
      {
        title: "slack.com",
        desc: 'Communicate with your team.',
        url: 'https://slack.com/?ref=saaslanding.page'
      }
  ],
  },
      contacts: [
      {
        title: "Curated by @planetabhi.",
        url: 'https://planetabhi.com/'
      },
    ],

  };

const $$Astro$5 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Link;
  const { title, url, target } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="text-sm text-l/tertiary dark:text-d/tertiary hover:text-l/primary dark:hover:text-d/primary active:text-l/primary dark:active:text-d/primary focus:text-l/primary dark:focus:text-d/primary focus-visible:text-l/primary dark:focus-visible:text-d/primary outline-none"${addAttribute(url, "href")}${addAttribute(target, "target")}>${title}</a>`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/components/Link.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <p class="w-full"> ${persona.contacts.map((c) => renderTemplate`<span class="text-l/tertiary dark:text-d/tertiary after:content-[',_'] last:after:content-none">${renderComponent($$result, "Link", $$Link, { "target": "_blank", "title": c.title, "url": c.url })}</span>`)} </p> </footer>`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, desc } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Celebrating the craft and care of SaaS marketing design"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(desc, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(desc, "content")}><meta property="twitter:card" content="summary_large_image"><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(desc, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-l/bg dark:bg-d/bg antialiased w-full h-full p-4 md:p-0"> <div class="w-full m-auto max-w-xl min-h-screen flex flex-col justify-center items-start gap-8"> <!-- <Navigation /> --> <main class="space-y-4"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </div> </body></html>`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header> <h1 class="text-base text-l/primary dark:text-d/primary">${title}</h1> <p class="text-sm text-l/tertiary dark:text-d/tertiary">${description}</p> </header>`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Story = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Story;
  const { story } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="text-base text-l/secondary dark:text-d/secondary">${story}</article>`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/components/Story.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionTitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h3${addAttribute(title.toLowerCase(), "id")} class="text-base text-l/primary dark:text-d/primary">${title}</h3>`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/components/SectionTitle.astro", void 0);

const $$List = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full flex flex-col justify-start items-start gap-1 "> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/components/List.astro", void 0);

const $$Astro = createAstro();
const $$ListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ListItem;
  const { title, desc, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p class="w-full flex justify-start items-start text-base"> ${url ? renderTemplate`<a${addAttribute(url, "href")} target="_blank" class="group focus-visible:bg-l/primary dark:focus-visible:bg-d/primary focus-visible:text-l/primary dark:focus-visible:text-d/primary outline-none focus-visible:after:text-l/primary dark:focus-visible:after:text-d/primary 
      hover:bg-l/primary dark:hover:bg-d/primary hover:text-l/primary dark:hover:text-d/primary hover:after:text-l/primary dark:hover:after:text-d/primary"> <span class="text-l/secondary dark:text-d/secondary group-focus-visible:text-d/primary dark:group-focus-visible:text-l/primary
        group-hover:text-d/primary dark:group-hover:text-l/primary">${title}</span> <span class="text-l/tertiary dark:text-d/tertiary"> — </span> <span class="text-l/tertiary dark:text-d/tertiary">${desc}</span> </a>` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span class="text-l/secondary dark:text-d/secondary focus">${title}</span> <span class="text-l/tertiary dark:text-d/tertiary"> — </span> <span class="text-l/tertiary dark:text-d/tertiary">${desc}</span> ` })}`} </p>`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/components/ListItem.astro", void 0);

const $$Section = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="space-y-2"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/components/Section.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const fullName = persona.firstName + " " + persona.secondName;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": fullName, "desc": persona.description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "title": fullName, "description": persona.description })} ${renderComponent($$result2, "Story", $$Story, { "story": persona.story })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Sites Collection" })} ${renderComponent($$result3, "List", $$List, {}, { "default": ($$result4) => renderTemplate`${persona.sections.books.map((e) => renderTemplate`${renderComponent($$result4, "ListItem", $$ListItem, { "title": e.title, "desc": e.desc, "url": e.url })}`)}` })} ` })} ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionTitle", $$SectionTitle, { "title": "Apps Collection" })} ${renderComponent($$result3, "List", $$List, {}, { "default": ($$result4) => renderTemplate`${persona.sections.experience.map((e) => renderTemplate`${renderComponent($$result4, "ListItem", $$ListItem, { "title": e.title, "desc": e.desc, "url": e.url })}`)}` })} ` })} ` })}`;
}, "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/pages/index.astro", void 0);

const $$file = "/Users/abhimanyu.rana@postman.com/Documents/Experiments/saaslanding.page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
