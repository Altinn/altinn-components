var d=Object.defineProperty;var t=(e,l)=>d(e,"name",{value:l,configurable:!0});import{a6 as p}from"./iframe-DKOj4Qmf.js";import{M as c}from"./SearchField-TPXYOreq.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-CQx-KSK5.js";import"./MenuListItem-DoNptxMM.js";import"./MenuListDivider-D3rKIdnM.js";import"./MenuItem-BIy6YDdy.js";import"./CheckboxUncheckedIcon-yrWrTRi3.js";import"./RadioUncheckedIcon-C00GN-tf.js";import"./ItemMedia-BRG2KhSe.js";import"./Avatar-CF_k6VZv.js";import"./AvatarGroup-DEy2HyjC.js";import"./ItemLabel-CcblWyxm.js";import"./Heading-CZ9YFV1k.js";import"./useHighlightedText-C5BJuUZa.js";import"./ItemControls-CBo-NxME.js";import"./Badge-DEZY09pU.js";import"./Tooltip-G6lw2ON-.js";import"./ChevronRight-BtINKUzX.js";import"./FieldBase-B2rDpv5b.js";import"./Typography-eLs7BNQP.js";import"./Field-BWfsO4dQ.js";import"./Label-Z9WrVSxL.js";import"./Input-BzqjTNtI.js";import"./useMenu-CQyV1KVq.js";import"./InformationSquare-CC_FvbA-.js";const{expect:a,userEvent:s,waitFor:r}=__STORYBOOK_MODULE_TEST__,N={title:"Menu/KeyboardNav",component:c};let i=!1;const o=t(e=>e.querySelector('[data-active="true"]')?.textContent??"","activeText"),n={render:t(()=>p.jsx(c,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:t(()=>{i=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:t(async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>a(o(e)).toContain("Alpha")),await s.keyboard("{ArrowDown}"),await r(()=>a(o(e)).toContain("Omega")),a(o(e)).not.toContain("Påkjørt Elg AS"),await s.keyboard("{ArrowDown}"),await r(()=>a(o(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(m=>m.textContent?.includes("Påkjørt Elg AS")).click(),a(i).toBe(!1)},"play")},U=["SkipsDisabledReachesLast"];n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
