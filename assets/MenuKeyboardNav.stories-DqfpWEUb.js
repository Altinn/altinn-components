var d=Object.defineProperty;var t=(e,l)=>d(e,"name",{value:l,configurable:!0});import{a6 as p}from"./iframe-Cf4UALw8.js";import{M as c}from"./SearchField-CpDf3EHS.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-Ckn3gk3A.js";import"./MenuListItem-btKh04Ui.js";import"./MenuListDivider-CFCegYqH.js";import"./MenuItem-CaK55ag2.js";import"./CheckboxUncheckedIcon-DFhHVdqs.js";import"./RadioUncheckedIcon-BM_T1ETq.js";import"./ItemMedia-BhGUpV92.js";import"./Avatar-DPyI2gzd.js";import"./AvatarGroup-C1FgnCDS.js";import"./ItemLabel-C9vfNdbz.js";import"./Heading-B2LEqvTq.js";import"./useHighlightedText-BGOVKO4Q.js";import"./ItemControls-C74k2R8j.js";import"./Badge-A8SwLO0m.js";import"./Tooltip-vDvnT1in.js";import"./ChevronRight-DcM2grMN.js";import"./FieldBase-DSaLFDie.js";import"./Typography-CsGx0b_o.js";import"./Field-t2hlVRTC.js";import"./Label-COfT1-eu.js";import"./Input-OKh8JSaI.js";import"./useMenu-CfWidWjC.js";import"./InformationSquare-uRwoVJB-.js";const{expect:a,userEvent:s,waitFor:r}=__STORYBOOK_MODULE_TEST__,N={title:"Menu/KeyboardNav",component:c};let i=!1;const o=t(e=>e.querySelector('[data-active="true"]')?.textContent??"","activeText"),n={render:t(()=>p.jsx(c,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:t(()=>{i=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:t(async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>a(o(e)).toContain("Alpha")),await s.keyboard("{ArrowDown}"),await r(()=>a(o(e)).toContain("Omega")),a(o(e)).not.toContain("Påkjørt Elg AS"),await s.keyboard("{ArrowDown}"),await r(()=>a(o(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(m=>m.textContent?.includes("Påkjørt Elg AS")).click(),a(i).toBe(!1)},"play")},U=["SkipsDisabledReachesLast"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
