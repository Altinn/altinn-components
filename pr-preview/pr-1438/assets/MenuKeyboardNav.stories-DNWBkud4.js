var d=Object.defineProperty;var t=(e,n)=>d(e,"name",{value:n,configurable:!0});import{a7 as p}from"./iframe-CW69B4-4.js";import{M as c}from"./SearchField-LDFEPhQv.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-JTPy69Hm.js";import"./MenuListItem-CMSm7sFe.js";import"./MenuListHeading-Cky4DZUO.js";import"./MenuItem-WxsEDNt-.js";import"./ItemMedia-zpQSTqxO.js";import"./Avatar-DlTYOJ9X.js";import"./AvatarGroup-C54_5QsB.js";import"./Checkmark-BGDDfT19.js";import"./ItemLabel-BOWUd3uk.js";import"./Heading-BlWFVsgQ.js";import"./useHighlightedText-Coh-oebD.js";import"./ItemControls-Dz-gOQFJ.js";import"./Badge-pUt1HWk8.js";import"./Tooltip-Bdo2x66E.js";import"./ChevronRight-CxFkThxw.js";import"./FieldBase-Cx7I1cae.js";import"./Typography-CD2WmtRN.js";import"./Field-rkOFbQMU.js";import"./Label-DMxT2wjQ.js";import"./Input-BNHnVUMY.js";import"./useMenu-bx75--uT.js";import"./MenuListDivider-C9vQ7MZ-.js";import"./InformationSquare-O6zrlrVZ.js";const{expect:a,userEvent:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,N={title:"Menu/KeyboardNav",component:c};let l=!1;const o=t(e=>e.querySelector('[data-active="true"]')?.textContent??"","activeText"),r={render:t(()=>p.jsx(c,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:t(()=>{l=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:t(async({canvasElement:e})=>{l=!1,e.querySelector('ul[role="menu"]').focus(),await i(()=>a(o(e)).toContain("Alpha")),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Omega")),a(o(e)).not.toContain("Påkjørt Elg AS"),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(m=>m.textContent?.includes("Påkjørt Elg AS")).click(),a(l).toBe(!1)},"play")};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
