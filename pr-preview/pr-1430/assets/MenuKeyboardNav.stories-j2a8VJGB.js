var d=Object.defineProperty;var t=(e,n)=>d(e,"name",{value:n,configurable:!0});import{a7 as p}from"./iframe-Bv9y2YZF.js";import{M as c}from"./SearchField-Bk5qe-oT.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-rds0MzVJ.js";import"./FieldBase-qKDj-2_C.js";import"./Typography-AZvc429m.js";import"./useHighlightedText-B3SRW8uR.js";import"./Field-T8_evT5x.js";import"./Label-O9M7TqIt.js";import"./Input-C95LaLCm.js";import"./useMenu-B94lF56c.js";import"./MenuListItem-DxCoBxPm.js";import"./MenuListDivider-LPYMn92M.js";import"./MenuListHeading--KYKPYxZ.js";import"./MenuItem-CWh5VY2j.js";import"./ItemMedia-DqG5JuI7.js";import"./Avatar-CJwf9igj.js";import"./AvatarGroup-DorKIyuC.js";import"./Checkmark-CwfUY960.js";import"./ItemLabel-grT0gHhk.js";import"./Heading-CDZ3_iYV.js";import"./ItemControls-DeEkLGNj.js";import"./Badge-PIp_WKNx.js";import"./Tooltip-DATtufsq.js";import"./ChevronRight-B_ztNHmN.js";import"./InformationSquare-BoyRK6zF.js";const{expect:a,userEvent:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,N={title:"Menu/KeyboardNav",component:c};let l=!1;const o=t(e=>e.querySelector('[data-active="true"]')?.textContent??"","activeText"),r={render:t(()=>p.jsx(c,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:t(()=>{l=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:t(async({canvasElement:e})=>{l=!1,e.querySelector('ul[role="menu"]').focus(),await i(()=>a(o(e)).toContain("Alpha")),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Omega")),a(o(e)).not.toContain("Påkjørt Elg AS"),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(m=>m.textContent?.includes("Påkjørt Elg AS")).click(),a(l).toBe(!1)},"play")};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const U=["SkipsDisabledReachesLast"];export{r as SkipsDisabledReachesLast,U as __namedExportsOrder,N as default};
