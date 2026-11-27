var d=Object.defineProperty;var t=(e,l)=>d(e,"name",{value:l,configurable:!0});import{a6 as p}from"./iframe-DS_59AwM.js";import{M as c}from"./SearchField-CAjTntqL.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-l1_f6IJo.js";import"./MenuListItem-DwlAJFdA.js";import"./MenuListDivider-CucqnGV5.js";import"./MenuItem-Y-AEUpRl.js";import"./CheckboxUncheckedIcon-C7ZL4zpD.js";import"./RadioUncheckedIcon-B7iKOFAO.js";import"./ItemMedia-CcjWIfuL.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./ItemLabel-DXVwsqWf.js";import"./Heading-BZMLDowx.js";import"./useHighlightedText-Ba9mKwdy.js";import"./ItemControls-C2ZClT3B.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./ChevronRight-C7PJPgHr.js";import"./FieldBase-Bv1sQ0dY.js";import"./Typography-DXt4lEYU.js";import"./Field-DAFUCo_M.js";import"./Label-BBg6DFs6.js";import"./Input-3GNdcrOi.js";import"./useMenu-30LDsNSn.js";import"./InformationSquare-DyP2GK92.js";const{expect:a,userEvent:s,waitFor:r}=__STORYBOOK_MODULE_TEST__,N={title:"Menu/KeyboardNav",component:c};let i=!1;const o=t(e=>e.querySelector('[data-active="true"]')?.textContent??"","activeText"),n={render:t(()=>p.jsx(c,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:t(()=>{i=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:t(async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>a(o(e)).toContain("Alpha")),await s.keyboard("{ArrowDown}"),await r(()=>a(o(e)).toContain("Omega")),a(o(e)).not.toContain("Påkjørt Elg AS"),await s.keyboard("{ArrowDown}"),await r(()=>a(o(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(m=>m.textContent?.includes("Påkjørt Elg AS")).click(),a(i).toBe(!1)},"play")},U=["SkipsDisabledReachesLast"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{n as SkipsDisabledReachesLast,U as __namedExportsOrder,N as default};
