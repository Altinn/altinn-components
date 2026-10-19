var d=Object.defineProperty;var t=(e,n)=>d(e,"name",{value:n,configurable:!0});import{a7 as p}from"./iframe-C_3qWz8U.js";import{M as c}from"./SearchField-wVxLElBM.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-h5bwwa2w.js";import"./FieldBase-2HPCGFYx.js";import"./Typography-BcJ8Dd08.js";import"./useHighlightedText-ChiMW-L8.js";import"./Field-D_aQ-GwQ.js";import"./Label-El1js8iZ.js";import"./Input-BnIvU9G4.js";import"./useMenu-DHyqVfH8.js";import"./MenuListItem-BXhczEyE.js";import"./MenuListDivider-HcjopcmV.js";import"./MenuListHeading-CcIf8Q21.js";import"./MenuItem-Dx8f33T4.js";import"./ItemMedia-Cj3xkQia.js";import"./Avatar-DoTE2KMY.js";import"./AvatarGroup-CYCsQlmU.js";import"./Checkmark-BxM9iGty.js";import"./ItemLabel-D1WDG3AN.js";import"./Heading-mFc3Xe1m.js";import"./ItemControls-B-e7R4IL.js";import"./Badge-BBubxNU6.js";import"./Tooltip-oYeDkYvf.js";import"./ChevronRight-Cfc1KVT6.js";import"./InformationSquare-BJVzaHsz.js";const{expect:a,userEvent:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,N={title:"Menu/KeyboardNav",component:c};let l=!1;const o=t(e=>e.querySelector('[data-active="true"]')?.textContent??"","activeText"),r={render:t(()=>p.jsx(c,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:t(()=>{l=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:t(async({canvasElement:e})=>{l=!1,e.querySelector('ul[role="menu"]').focus(),await i(()=>a(o(e)).toContain("Alpha")),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Omega")),a(o(e)).not.toContain("Påkjørt Elg AS"),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(m=>m.textContent?.includes("Påkjørt Elg AS")).click(),a(l).toBe(!1)},"play")};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
