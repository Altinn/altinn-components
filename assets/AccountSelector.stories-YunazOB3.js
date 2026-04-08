import{t as e}from"./jsx-runtime-DwqL_Y-t.js";import{t}from"./RootProvider-CwL6faQJ.js";import{t as n}from"./AccountSelector-Cgu-InLf.js";import{t as r}from"./useGlobalHeader-C1GBmQHK.js";var i=e(),a={title:`Layout/AccountSelector`,component:n,tags:[`autodocs`],parameters:{layout:`fullscreen`},args:{accountMenu:void 0,forceOpenFullScreen:void 0,loading:!1},argTypes:{accountMenu:{control:`object`},forceOpenFullScreen:{control:`boolean`},loading:{control:`boolean`}}},o=e=>{let a=r({}).accountSelector;return(0,i.jsx)(t,{children:(0,i.jsx)(n,{...a,forceOpenFullScreen:e.forceOpenFullScreen})})},s=e=>(0,i.jsx)(t,{children:(0,i.jsx)(n,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0}})}),c=e=>(0,i.jsx)(t,{children:(0,i.jsx)(n,{...e,accountMenu:{items:[],groups:{},currentAccount:void 0},loading:!0})});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;
  return <RootProvider>
      <AccountSelector {...accountSelector} forceOpenFullScreen={args.forceOpenFullScreen} />
    </RootProvider>;
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} />
    </RootProvider>;
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: AccountSelectorProps) => {
  return <RootProvider>
      <AccountSelector {...args} accountMenu={{
      items: [],
      groups: {},
      currentAccount: undefined
    }} loading />
    </RootProvider>;
}`,...c.parameters?.docs?.source}}};var l=[`WithAccounts`,`NoAccounts`,`Loading`];export{c as Loading,s as NoAccounts,o as WithAccounts,l as __namedExportsOrder,a as default};