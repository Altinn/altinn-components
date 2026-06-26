import{a7 as c}from"./iframe-BlxKDeRn.js";import{M as n}from"./SearchField-CTOOlDoc.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-7o9KBuEd.js";import"./FieldBase-_XE-YVEJ.js";import"./Typography-CdulF3LZ.js";import"./useHighlightedText-Cf7684f7.js";import"./Field-043F-93h.js";import"./Label-DcRYrAWF.js";import"./Input-CXwaRbp1.js";import"./useMenu-BkS0Vn46.js";import"./MenuListItem-BhvFARid.js";import"./MenuListDivider-Qd7Zv5zm.js";import"./MenuListHeading-yiM716YP.js";import"./MenuItem-npmNxACF.js";import"./ItemMedia-DfJvZXBe.js";import"./Avatar-CNS7uviy.js";import"./AvatarGroup-Cv5UWI0K.js";import"./Checkmark-Bl2r91uW.js";import"./ItemLabel-BJ4TUmk_.js";import"./Heading-PlHpJzKQ.js";import"./ItemControls-DiLtTH9A.js";import"./Badge-9tYEKd9T.js";import"./Tooltip-ZQ8pGHyK.js";import"./ChevronRight-DNG7F-LS.js";import"./InformationSquare-D-Ph66nw.js";const{expect:t,userEvent:l,waitFor:r}=__STORYBOOK_MODULE_TEST__,B={title:"Menu/KeyboardNav",component:n};let i=!1;const a=e=>e.querySelector('[data-active="true"]')?.textContent??"",o={render:()=>c.jsx(n,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:()=>{i=!0}},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),play:async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>t(a(e)).toContain("Alpha")),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Omega")),t(a(e)).not.toContain("Påkjørt Elg AS"),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(s=>s.textContent?.includes("Påkjørt Elg AS")).click(),t(i).toBe(!1)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
