import{a7 as c}from"./iframe-C-THn91T.js";import{M as n}from"./SearchField-3MMOEmrN.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-DcHLZgKH.js";import"./FieldBase-3tu8AQku.js";import"./Typography-BHSdNY0l.js";import"./useHighlightedText-LohBehUX.js";import"./Field-BN4IysmT.js";import"./Label-Cj2m8vPc.js";import"./Input-DSL2dtsJ.js";import"./useMenu-CEKxQFuP.js";import"./MenuListItem-BtLexDfB.js";import"./MenuListDivider-C2y_tXgh.js";import"./MenuListHeading-Djui1q9T.js";import"./MenuItem-B98ufrdD.js";import"./ItemMedia-DiPL1djx.js";import"./Avatar-CLhHIcAr.js";import"./AvatarGroup-FJy6c_cG.js";import"./Checkmark-CKSWNkLN.js";import"./ItemLabel-DD7gOu3Q.js";import"./Heading-Bt4tEn1t.js";import"./ItemControls-AJskvBhb.js";import"./Badge-lAjlx4fW.js";import"./Tooltip-DrV4DRir.js";import"./ChevronRight-SDiRgKYv.js";import"./InformationSquare-DjaHtlyP.js";const{expect:t,userEvent:l,waitFor:r}=__STORYBOOK_MODULE_TEST__,B={title:"Menu/KeyboardNav",component:n};let i=!1;const a=e=>e.querySelector('[data-active="true"]')?.textContent??"",o={render:()=>c.jsx(n,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:()=>{i=!0}},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),play:async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>t(a(e)).toContain("Alpha")),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Omega")),t(a(e)).not.toContain("Påkjørt Elg AS"),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(s=>s.textContent?.includes("Påkjørt Elg AS")).click(),t(i).toBe(!1)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
