import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{s as t}from"./blocks-BFztilWw.js";import{n}from"./lib-BuGdZX6V.js";var r=e();function i(e){let i={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...n(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t,{title:`Page`}),`
`,(0,r.jsx)(i.h1,{id:`building-pages`,children:`Building pages`}),`
`,(0,r.jsxs)(i.p,{children:[`Build pages using `,(0,r.jsx)(i.code,{children:`PageBase`}),` and specific components or general purpose components like `,(0,r.jsx)(i.code,{children:`Section`}),` and `,(0,r.jsx)(i.code,{children:`Heading`}),` to divide and create hierarchy.`]}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`return (
  <PageBase>
    <PageNav />
    <Heading siz="xl" />
    <Section>
      <Heading siz="lg" />
    </Section>
    <Section>
      <Heading siz="lg" />
    </Section>
  </PageBase>
);
`})}),`
`,(0,r.jsx)(i.h2,{id:`section-list-and-grid`,children:`Section, List and Grid`}),`
`,(0,r.jsxs)(i.p,{children:[`Layout components share similar props for `,(0,r.jsx)(i.code,{children:`color`}),`, `,(0,r.jsx)(i.code,{children:`size`}),`, which is inherited to it's children.`]}),`
`,(0,r.jsxs)(i.p,{children:[`Use `,(0,r.jsx)(i.code,{children:`Section`}),` to divide pages into appropriate pieces. Section can be extended using `,(0,r.jsx)(i.code,{children:`padding`}),` and `,(0,r.jsx)(i.code,{children:`spacing`}),` props.`]}),`
`,(0,r.jsxs)(i.p,{children:[`Use `,(0,r.jsx)(i.code,{children:`List`}),` and `,(0,r.jsx)(i.code,{children:`Grid`}),` to present content in lists or grid, respectively. Both have a default `,(0,r.jsx)(i.code,{children:`spacing`}),`, relative to it's `,(0,r.jsx)(i.code,{children:`size`}),`.`]}),`
`,(0,r.jsxs)(i.p,{children:[`If none of these works, you can use `,(0,r.jsx)(i.code,{children:`Flex`}),`, which is a general purpose layout component, containing shared props and styles that are used to build more specific components.`]}),`
`,(0,r.jsx)(i.h2,{id:`heading-and-typography`,children:`Heading and Typography`}),`
`,(0,r.jsxs)(i.p,{children:[`Use `,(0,r.jsx)(i.code,{children:`Heading`}),` for headings. Use `,(0,r.jsx)(i.code,{children:`Typography`}),` for bodytext including paragraphs, lists, and headings.`]}),`
`,(0,r.jsx)(i.h2,{id:`list-pages`,children:`List pages`}),`
`,(0,r.jsx)(i.p,{children:`Pages that contains lists of objects, for example a list of accounts or users.`}),`
`,(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:`language-tsx`,children:`return (
  <PageBase>
    <PageNav breadcrumbs />
    <Heading siz="xl" />
    <Toolbar />
    <List />
  </PageBase>
);
`})}),`
`,(0,r.jsx)(i.h2,{id:`dashboards`,children:`Dashboards`}),`
`,(0,r.jsx)(i.p,{children:`Dashboard pages, used as a starting point for an area that focuses on a single person or company.`}),`
`,(0,r.jsx)(i.h2,{id:`settings-pages`,children:`Settings pages`}),`
`,(0,r.jsx)(i.p,{children:`Pages with settings, divided into groups.`}),`
`,(0,r.jsx)(i.h2,{id:`content-pages`,children:`Content pages`}),`
`,(0,r.jsx)(i.p,{children:`Articles, topics and other pages with content.`})]})}function a(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};