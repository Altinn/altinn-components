import{a7 as c}from"./iframe-C7E9hFuS.js";import{M as n}from"./SearchField-B7eNYfaD.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-K55ud6sH.js";import"./FieldBase-C9YC6jMS.js";import"./Typography-BHaJGqRT.js";import"./useHighlightedText-BVZd64N7.js";import"./Field-BOE10Mp_.js";import"./Label-C4cGfl6D.js";import"./Input-aQKngZ0n.js";import"./useMenu-D_e4EtIh.js";import"./MenuListItem-pCzMW7B2.js";import"./MenuListDivider-cJmmi06P.js";import"./MenuListHeading-anY2tX0X.js";import"./MenuItem-CJIUM84a.js";import"./ItemMedia-CHApnQjH.js";import"./Avatar-e0O_nUjf.js";import"./AvatarGroup-BbNCgDjh.js";import"./Checkmark-MJ8Dy75D.js";import"./ItemLabel-BqMYiWLj.js";import"./Heading-BjzdT1Qv.js";import"./ItemControls-BSxWin7C.js";import"./Badge-xAKlFUBi.js";import"./Tooltip-C3MHB6KB.js";import"./ChevronRight-BkycUKsy.js";import"./InformationSquare-CD5xLXKd.js";const{expect:t,userEvent:l,waitFor:r}=__STORYBOOK_MODULE_TEST__,B={title:"Menu/KeyboardNav",component:n};let i=!1;const a=e=>e.querySelector('[data-active="true"]')?.textContent??"",o={render:()=>c.jsx(n,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:()=>{i=!0}},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),play:async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>t(a(e)).toContain("Alpha")),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Omega")),t(a(e)).not.toContain("Påkjørt Elg AS"),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(s=>s.textContent?.includes("Påkjørt Elg AS")).click(),t(i).toBe(!1)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Menu open keyboardEvents items={[{
    role: 'radio',
    name: 'actor',
    value: 'a',
    title: 'Alpha'
  }, {
    role: 'radio',
    name: 'actor',
    value: 'b',
    title: 'Påkjørt Elg AS',
    disabled: true,
    onClick: () => {
      disabledClicked = true;
    }
  }, {
    role: 'radio',
    name: 'actor',
    value: 'c',
    title: 'Omega'
  }]} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    disabledClicked = false;
    const list = canvasElement.querySelector('ul[role="menu"]') as HTMLElement;
    list.focus();
    await waitFor(() => expect(activeText(canvasElement)).toContain('Alpha'));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Omega'));
    expect(activeText(canvasElement)).not.toContain('Påkjørt Elg AS');
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Alpha'));
    const disabled = [...canvasElement.querySelectorAll('[role="menuitemradio"]')].find(el => el.textContent?.includes('Påkjørt Elg AS')) as HTMLElement;
    disabled.click();
    expect(disabledClicked).toBe(false);
  }
}`,...o.parameters?.docs?.source}}};const H=["SkipsDisabledReachesLast"];export{o as SkipsDisabledReachesLast,H as __namedExportsOrder,B as default};
