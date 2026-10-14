var d=Object.defineProperty;var t=(e,n)=>d(e,"name",{value:n,configurable:!0});import{a7 as p}from"./iframe-DliZ2j7V.js";import{M as c}from"./SearchField-CHTtqi8q.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-BuxQzsSI.js";import"./FieldBase-CUazmIBl.js";import"./Typography-Oc42wyxk.js";import"./useHighlightedText-D1lssxtb.js";import"./Field-DYOclivh.js";import"./Label-F6glHlTT.js";import"./Input-BcFkd5TI.js";import"./useMenu-Bhv2948N.js";import"./MenuListItem-eO1CqTCm.js";import"./MenuListDivider-kl64fblZ.js";import"./MenuListHeading-DGDFRB8j.js";import"./MenuItem-BWlafNQ2.js";import"./ItemMedia-DsNtfucp.js";import"./Avatar-Bb13CEJH.js";import"./AvatarGroup-BP8b6NDq.js";import"./Checkmark-D4_xXQHC.js";import"./ItemLabel-ChEAFnfF.js";import"./Heading-CtKubyco.js";import"./ItemControls-rcas_vti.js";import"./Badge-CXvbGuU6.js";import"./Tooltip-rTlSPEDx.js";import"./ChevronRight-_BaSemP0.js";import"./InformationSquare-Bli9QzR2.js";const{expect:a,userEvent:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,N={title:"Menu/KeyboardNav",component:c};let l=!1;const o=t(e=>e.querySelector('[data-active="true"]')?.textContent??"","activeText"),r={render:t(()=>p.jsx(c,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:t(()=>{l=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:t(async({canvasElement:e})=>{l=!1,e.querySelector('ul[role="menu"]').focus(),await i(()=>a(o(e)).toContain("Alpha")),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Omega")),a(o(e)).not.toContain("Påkjørt Elg AS"),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(m=>m.textContent?.includes("Påkjørt Elg AS")).click(),a(l).toBe(!1)},"play")};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
