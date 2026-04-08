import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{a as t}from"./AccountList.stories-D-nYCMI5.js";import{t as n}from"./Heading-CJB15i5Q.js";import{t as r}from"./Layout-oRerHG_B.js";import{t as i}from"./PageBase-C-dLvRYT.js";import{t as a}from"./useProfile-DjEKJGkB.js";var o=e(),s={title:`Demo/Account`,tags:[`beta`],parameters:{layout:`fullscreen`},args:{}},c=()=>{let{layout:e}=a({});return(0,o.jsx)(r,{...e,theme:`default`,header:{...e?.header,search:void 0},sidebar:{hidden:!0},children:(0,o.jsxs)(i,{children:[(0,o.jsx)(n,{size:`xl`,children:`Hvem vil du representere?`}),(0,o.jsx)(t,{})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    layout
  } = useProfile({});
  return <Layout {...layout} theme="default" header={{
    ...layout?.header,
    search: undefined
  } as LayoutProps["header"]} sidebar={{
    hidden: true
  }}>
      <PageBase>
        <Heading size="xl">Hvem vil du representere?</Heading>
        <AccountListStories.ControlledTinted />
      </PageBase>
    </Layout>;
}`,...c.parameters?.docs?.source}}};var l=[`SelectAccount`];export{c as SelectAccount,l as __namedExportsOrder,s as default};