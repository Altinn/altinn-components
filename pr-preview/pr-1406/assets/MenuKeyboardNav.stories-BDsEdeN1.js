import{a7 as c}from"./iframe-vkxhbe5D.js";import{M as n}from"./SearchField-CsfKU_3v.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BUxkWaxO.js";import"./FieldBase-BW43HWjL.js";import"./Typography-CiocPTHR.js";import"./useHighlightedText-DzpG-WJS.js";import"./Field-BcGRggAS.js";import"./Label-DJ_rl2vz.js";import"./Input-B9GDLkmV.js";import"./useMenu-pP3xGIIj.js";import"./MenuListItem-BToT8FwM.js";import"./MenuListDivider-DNPFWOP3.js";import"./MenuListHeading-DcoOXLFk.js";import"./MenuItem-CzOEvYQv.js";import"./ItemMedia-iOETwWXj.js";import"./Avatar-DCCKPKpG.js";import"./AvatarGroup-73OlPczV.js";import"./Checkmark-DIeTkJdw.js";import"./ItemLabel-C5WGMqIp.js";import"./Heading-BheO61Dl.js";import"./ItemControls-Dt4HN_B7.js";import"./Badge-B0jqz-MR.js";import"./Tooltip-BAvCNtSf.js";import"./ChevronRight-BjSUzT6t.js";import"./InformationSquare-BqHcnGOZ.js";const{expect:t,userEvent:l,waitFor:r}=__STORYBOOK_MODULE_TEST__,B={title:"Menu/KeyboardNav",component:n};let i=!1;const a=e=>e.querySelector('[data-active="true"]')?.textContent??"",o={render:()=>c.jsx(n,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:()=>{i=!0}},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),play:async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>t(a(e)).toContain("Alpha")),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Omega")),t(a(e)).not.toContain("Påkjørt Elg AS"),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(s=>s.textContent?.includes("Påkjørt Elg AS")).click(),t(i).toBe(!1)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
