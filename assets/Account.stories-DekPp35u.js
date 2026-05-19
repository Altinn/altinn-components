import{j as c}from"./iframe-GJv3-kpe.js";import{G as e}from"./GlobalAccountButton-DNoVd3Ny.js";import{u}from"./useAccountMenu-DIz_6x6q.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D19pPnAw.js";import"./XMark-D7blLnze.js";import"./useId-B1GQrjht.js";import"./ChevronDown-DZsHrJjp.js";import"./Enter-BP89yifq.js";import"./Button-XgEODhFb.js";import"./button-5jjXov6B.js";import"./use-merge-refs-oF7p1rqv.js";import"./lite-DaUVFjkg.js";import"./Avatar-CGv-fnY8.js";import"./Skeleton-dVNdeapn.js";import"./getAccount-CV-w7tgU.js";import"./HeartFill-BWVbn9KR.js";const B={title:"Account",parameters:{layout:"centered"}},t=()=>{const{currentAccount:n}=u({accountId:"user"});return c.jsx(e,{currentAccount:{...n,type:"person"}})},r=()=>{const{currentAccount:n}=u({accountId:"diaspora"});return c.jsx(e,{currentAccount:{...n,type:"company"}})},o=()=>c.jsx(e,{});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'user'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'person'
  } as AccountMenuItemProps} />;
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    currentAccount
  } = useAccountMenu({
    accountId: 'diaspora'
  });
  return <GlobalAccountButton currentAccount={{
    ...currentAccount,
    type: 'company'
  } as AccountMenuItemProps} />;
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return <GlobalAccountButton />;
}`,...o.parameters?.docs?.source}}};const C=["CurrentAccount","CompanyAccount","Login"];export{r as CompanyAccount,t as CurrentAccount,o as Login,C as __namedExportsOrder,B as default};
