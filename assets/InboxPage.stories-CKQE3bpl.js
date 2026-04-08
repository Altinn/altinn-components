"use client";import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./useId-HrPGyhy9.js";import{t as i}from"./Bookmark-C2zitF8r.js";import{n as a}from"./useFloatingDropdown-fbB596hr.js";import{t as o}from"./Typography-DBWZN96y.js";import{t as s}from"./Heading-CJB15i5Q.js";import{t as c}from"./Button-L6T5IVdq.js";import{t as l}from"./DialogListGroup--vVbngCh.js";import{t as u}from"./Layout-oRerHG_B.js";import{t as d}from"./Toolbar-CmziBAS7.js";var f=e(t()),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},m=(0,f.forwardRef)((e,t)=>{var{title:n,titleId:i}=e,a=p(e,[`title`,`titleId`]);let o=r();return o=n?i||`title-`+o:void 0,f.createElement(`svg`,Object.assign({xmlns:`http://www.w3.org/2000/svg`,width:`1em`,height:`1em`,fill:`none`,viewBox:`0 0 24 24`,focusable:!1,role:`img`,ref:t,"aria-labelledby":o},a),n?f.createElement(`title`,{id:o},n):null,f.createElement(`path`,{fill:`currentColor`,fillRule:`evenodd`,d:`M6.25 5c0-.966.784-1.75 1.75-1.75h8c.966 0 1.75.784 1.75 1.75v15a.75.75 0 0 1-1.28.53L12 16.06l-4.47 4.47A.75.75 0 0 1 6.25 20z`,clipRule:`evenodd`}))}),h={page:`_page_1jajt_1`,nav:`_nav_1jajt_7`,body:`_body_1jajt_22`},g=n(),_=({title:e,toolbar:t,sticky:n=!1,controls:r,children:i})=>(0,g.jsxs)(`div`,{className:h.page,children:[e&&(0,g.jsx)(s,{size:`xl`,className:h.title,children:e}),(0,g.jsx)(`div`,{className:h.nav,"data-sticky":n,children:t&&(0,g.jsx)(d,{...t,controls:r})}),(0,g.jsx)(`div`,{className:h.body,children:i})]}),v={title:`Inbox/InboxPage`,tags:[`beta`],parameters:{layout:`fullscreen`},args:{}},y=({pageId:e=`inbox`,summary:t,sticky:n=!1})=>{let{layout:r,toolbar:i,results:s,pageTitle:c}=a({pageId:e});return(0,g.jsx)(u,{...r,useGlobalHeader:!0,children:(0,g.jsxs)(_,{sticky:n,title:c,toolbar:i,children:[t&&(0,g.jsx)(o,{variant:`subtle`,size:`sm`,children:t}),s&&(0,g.jsx)(l,{items:s.items,groups:s?.groups})]})})},b=({pageId:e=`inbox`,sticky:t=!1,title:n=`35 treff`,summary:r=(0,g.jsxs)(`p`,{children:[`Begrens søket til`,` `,(0,g.jsx)(c,{variant:`tinted`,size:`mini`,children:`Innboks`}),`,`,` `,(0,g.jsx)(c,{variant:`tinted`,size:`mini`,children:`Arkiv`}),` `,`eller`,` `,(0,g.jsx)(c,{variant:`tinted`,size:`mini`,children:`Papirkurv`}),`.`]}),query:d})=>{let{layout:p,toolbar:h,results:v}=a({pageId:e,query:d}),y=v?.items?.map(e=>({...e,groupId:`search`})),[b,x]=(0,f.useState)(!1),S=()=>(0,g.jsxs)(c,{size:`xs`,variant:`ghost`,onClick:()=>x(!b),children:[b?(0,g.jsx)(m,{}):(0,g.jsx)(i,{}),(0,g.jsx)(`span`,{children:b?`Lagret`:`Lagre`})]});return(0,g.jsx)(u,{...p,children:(0,g.jsxs)(_,{sticky:t,toolbar:h,controls:(0,g.jsx)(S,{}),children:[(0,g.jsx)(s,{size:`lg`,children:n}),r&&(0,g.jsx)(o,{variant:`subtle`,size:`sm`,children:r}),v&&(0,g.jsx)(l,{items:y})]})})},x=()=>(0,g.jsx)(b,{pageId:`inbox`,title:`33 treff i innboks`,query:{folder:[`inbox`]},summary:(0,g.jsxs)(`p`,{children:[`Utvid søket til`,` `,(0,g.jsx)(c,{variant:`tinted`,size:`mini`,children:`Alle mapper`})]})}),S=()=>(0,g.jsx)(b,{pageId:`archive`,title:`1 treff i arkiv`,query:{folder:[`archive`]},summary:(0,g.jsxs)(`p`,{children:[`Utvid søket til`,` `,(0,g.jsx)(c,{variant:`tinted`,size:`mini`,children:`Alle mapper`})]})}),C=()=>(0,g.jsx)(b,{pageId:`trash`,title:`1 treff i papirkurv`,query:{folder:[`trash`]},summary:(0,g.jsxs)(`p`,{children:[`Utvid søket til`,` `,(0,g.jsx)(c,{variant:`tinted`,size:`mini`,children:`Alle mapper`})]})}),w=()=>(0,g.jsx)(b,{title:`Ingen treff`,query:{q:`Lorem ipsum `},summary:``}),T=({pageId:e=`inbox`,summary:t=`Innboksen er tom.`})=>{let{layout:n,toolbar:r,pageTitle:i}=a({pageId:e});return(0,g.jsx)(u,{...n,children:(0,g.jsx)(_,{title:i,toolbar:r,children:(0,g.jsx)(o,{variant:`subtle`,size:`sm`,children:t})})})},E=()=>(0,g.jsx)(y,{pageId:`drafts`,summary:`Her finner du utkast til skjemaer du har startet på.`}),D=()=>(0,g.jsx)(y,{pageId:`sent`,summary:`Her finner du skjemaer du har sendt.`}),O=()=>(0,g.jsx)(y,{pageId:`archive`,summary:`Her finner du det du har lagt i arkivet.`}),k=()=>(0,g.jsx)(y,{pageId:`trash`,summary:`Her finner du det du har lagt i papirkurven.`}),A=()=>(0,g.jsx)(y,{sticky:!0}),j=()=>(0,g.jsx)(b,{sticky:!0});y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`({
  pageId = 'inbox',
  summary,
  sticky = false
}: {
  pageId?: string;
  summary?: ReactNode;
  sticky?: boolean;
}) => {
  const {
    layout,
    toolbar,
    results,
    pageTitle
  } = useInbox({
    pageId
  });
  return <Layout {...layout} useGlobalHeader={true}>
      <InboxPage sticky={sticky} title={pageTitle} toolbar={toolbar}>
        {summary && <Typography variant="subtle" size="sm">
            {summary}
          </Typography>}
        {results && <DialogList items={results.items} groups={results?.groups} />}
      </InboxPage>
    </Layout>;
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`({
  pageId = 'inbox',
  sticky = false,
  title = '35 treff',
  summary = <p>
      Begrens søket til{' '}
      <Button variant="tinted" size="mini">
        Innboks
      </Button>
      ,{' '}
      <Button variant="tinted" size="mini">
        Arkiv
      </Button>{' '}
      eller{' '}
      <Button variant="tinted" size="mini">
        Papirkurv
      </Button>
      .
    </p>,
  query
}: {
  pageId?: string;
  sticky?: boolean;
  title?: string;
  summary?: ReactNode;
  query?: UseInboxQuery;
}) => {
  const {
    layout,
    toolbar,
    results
  } = useInbox({
    pageId,
    query
  });
  const items = results?.items?.map(item => ({
    ...item,
    groupId: 'search'
  }));
  const [bookmark, setBookmark] = useState(false);
  const Controls = () => <Button size="xs" variant="ghost" onClick={() => setBookmark(!bookmark)}>
      {bookmark ? <BookmarkFillIcon /> : <BookmarkIcon />}
      <span>{bookmark ? 'Lagret' : 'Lagre'}</span>
    </Button>;
  return <Layout {...layout}>
      <InboxPage sticky={sticky} toolbar={toolbar} controls={<Controls />}>
        <Heading size="lg">{title}</Heading>
        {summary && <Typography variant="subtle" size="sm">
            {summary}
          </Typography>}
        {results && <DialogList items={items as DialogListProps['items']} />}
      </InboxPage>
    </Layout>;
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`() => {
  return <Search pageId="inbox" title="33 treff i innboks" query={{
    folder: ['inbox']
  }} summary={<p>
          Utvid søket til{' '}
          <Button variant="tinted" size="mini">
            Alle mapper
          </Button>
        </p>} />;
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Search pageId="archive" title="1 treff i arkiv" query={{
    folder: ['archive']
  }} summary={<p>
          Utvid søket til{' '}
          <Button variant="tinted" size="mini">
            Alle mapper
          </Button>
        </p>} />;
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  return <Search pageId="trash" title="1 treff i papirkurv" query={{
    folder: ['trash']
  }} summary={<p>
          Utvid søket til{' '}
          <Button variant="tinted" size="mini">
            Alle mapper
          </Button>
        </p>} />;
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`() => <Search title="Ingen treff" query={{
  q: 'Lorem ipsum '
}} summary={''} />`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`({
  pageId = 'inbox',
  summary = 'Innboksen er tom.'
}: {
  pageId?: string;
  summary?: ReactNode;
}) => {
  const {
    layout,
    toolbar,
    pageTitle
  } = useInbox({
    pageId
  });
  return <Layout {...layout}>
      <InboxPage title={pageTitle} toolbar={toolbar}>
        <Typography variant="subtle" size="sm">
          {summary}
        </Typography>
      </InboxPage>
    </Layout>;
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`() => {
  return <Inbox pageId="drafts" summary="Her finner du utkast til skjemaer du har startet på." />;
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`() => {
  return <Inbox pageId="sent" summary="Her finner du skjemaer du har sendt." />;
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Inbox pageId="archive" summary="Her finner du det du har lagt i arkivet." />;
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <Inbox pageId="trash" summary="Her finner du det du har lagt i papirkurven." />;
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => <Inbox sticky={true} />`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => <Search sticky={true} />`,...j.parameters?.docs?.source}}};var M=[`Inbox`,`Search`,`SearchInbox`,`SearchArchive`,`SearchTrash`,`SearchEmpty`,`InboxEmpty`,`Drafts`,`Sent`,`Archive`,`Trash`,`StickyInbox`,`StickySearch`];export{O as Archive,E as Drafts,y as Inbox,T as InboxEmpty,b as Search,S as SearchArchive,w as SearchEmpty,x as SearchInbox,C as SearchTrash,D as Sent,A as StickyInbox,j as StickySearch,k as Trash,M as __namedExportsOrder,v as default};