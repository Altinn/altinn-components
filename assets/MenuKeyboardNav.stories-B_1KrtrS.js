var d=Object.defineProperty;var t=(e,n)=>d(e,"name",{value:n,configurable:!0});import{a7 as p}from"./iframe-Ck42qOx1.js";import{M as c}from"./SearchField-B8KiDBUc.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuListHeading-C_C2TzXD.js";import"./MenuItem-BT6sfN7d.js";import"./ItemMedia-Br8-csYo.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./ItemControls-3hwzA3sg.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./ChevronRight-DWZnEevf.js";import"./FieldBase-ly-5mtcw.js";import"./Typography-nObbjg0R.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./Input-DGLuCKOz.js";import"./useMenu-BBAeNj9K.js";import"./MenuListDivider-CthpKcql.js";import"./InformationSquare-CGuPpOub.js";const{expect:a,userEvent:s,waitFor:i}=__STORYBOOK_MODULE_TEST__,N={title:"Menu/KeyboardNav",component:c};let l=!1;const o=t(e=>e.querySelector('[data-active="true"]')?.textContent??"","activeText"),r={render:t(()=>p.jsx(c,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:t(()=>{l=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:t(async({canvasElement:e})=>{l=!1,e.querySelector('ul[role="menu"]').focus(),await i(()=>a(o(e)).toContain("Alpha")),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Omega")),a(o(e)).not.toContain("Påkjørt Elg AS"),await s.keyboard("{ArrowDown}"),await i(()=>a(o(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(m=>m.textContent?.includes("Påkjørt Elg AS")).click(),a(l).toBe(!1)},"play")};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
