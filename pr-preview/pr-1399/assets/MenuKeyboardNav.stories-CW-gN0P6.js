import{a7 as c}from"./iframe-B1m5YS-z.js";import{M as n}from"./SearchField-txQSfSgU.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DOC044bk.js";import"./FieldBase-DF02WocK.js";import"./Typography-D-hgdwYf.js";import"./useHighlightedText-BJ6Snog5.js";import"./Field-3FnhLs8Z.js";import"./Label-Cd3ICTIz.js";import"./Input-DTp0ac3P.js";import"./useMenu-Bzazr0mK.js";import"./MenuListItem-ePeSws84.js";import"./MenuListDivider-l5hHlt1S.js";import"./MenuListHeading-BVCzBY5R.js";import"./MenuItem-D8A8Uy-E.js";import"./ItemMedia-CbRgbp9l.js";import"./Avatar-Xyg1H9P0.js";import"./AvatarGroup-DadNExt3.js";import"./Checkmark-O1YGJ3w1.js";import"./ItemLabel-CGVzYdTz.js";import"./Heading-Bdg559v2.js";import"./ItemControls-DSpZnzMx.js";import"./Badge-D748IrqG.js";import"./Tooltip-3MKLVI5w.js";import"./ChevronRight-JufomwYQ.js";import"./InformationSquare-CbKMIE6G.js";const{expect:t,userEvent:l,waitFor:r}=__STORYBOOK_MODULE_TEST__,B={title:"Menu/KeyboardNav",component:n};let i=!1;const a=e=>e.querySelector('[data-active="true"]')?.textContent??"",o={render:()=>c.jsx(n,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:()=>{i=!0}},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),play:async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>t(a(e)).toContain("Alpha")),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Omega")),t(a(e)).not.toContain("Påkjørt Elg AS"),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(s=>s.textContent?.includes("Påkjørt Elg AS")).click(),t(i).toBe(!1)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
