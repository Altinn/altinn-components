import{a7 as c}from"./iframe-CeD8DZF_.js";import{M as n}from"./SearchField-D9P8-rjO.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DbRqyBnQ.js";import"./FieldBase-BbgmrWIh.js";import"./Typography-D10BEJyK.js";import"./useHighlightedText-qfj7RnMw.js";import"./Field-DdzYX5Hl.js";import"./Label-DgGQ1tMX.js";import"./Input-B6Hxr8dW.js";import"./useMenu-Cr0Tzvrf.js";import"./MenuListItem-dRCDziUR.js";import"./MenuListDivider-CA69mol6.js";import"./MenuListHeading-C1lg1_sH.js";import"./MenuItem-D5qCw848.js";import"./ItemMedia-CjD5QxWk.js";import"./Avatar-D8aGqJlF.js";import"./AvatarGroup-fNYoTzyx.js";import"./Checkmark-C90PiZqs.js";import"./ItemLabel-CBqRB1sq.js";import"./Heading-CqEhdWlY.js";import"./ItemControls-CphkAdhU.js";import"./Badge-BzMsK0Kj.js";import"./Tooltip-DJy5VenJ.js";import"./ChevronRight-B8wcZ9md.js";import"./InformationSquare-CNpr0xiM.js";const{expect:t,userEvent:l,waitFor:r}=__STORYBOOK_MODULE_TEST__,B={title:"Menu/KeyboardNav",component:n};let i=!1;const a=e=>e.querySelector('[data-active="true"]')?.textContent??"",o={render:()=>c.jsx(n,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:()=>{i=!0}},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),play:async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>t(a(e)).toContain("Alpha")),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Omega")),t(a(e)).not.toContain("Påkjørt Elg AS"),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(s=>s.textContent?.includes("Påkjørt Elg AS")).click(),t(i).toBe(!1)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
