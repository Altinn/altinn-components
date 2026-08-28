import{a7 as c}from"./iframe-BKPYfBaP.js";import{M as n}from"./SearchField-BEBaG6GH.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BcIgrRKJ.js";import"./FieldBase-BZsWcTUs.js";import"./Typography-Cdqx97qL.js";import"./useHighlightedText-BNKt0Eyh.js";import"./Field-DD7IzQnc.js";import"./Label-TLLhNVMu.js";import"./Input-CHWt3Nk0.js";import"./useMenu-BEKNpnot.js";import"./MenuListItem-Dox6r-gI.js";import"./MenuListDivider-Br9qCroM.js";import"./MenuListHeading-DETCOsyl.js";import"./MenuItem-Bx6H1W-Q.js";import"./ItemMedia-CfPfvhkB.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./Checkmark-CamERl7S.js";import"./ItemLabel-CAfmR_Xk.js";import"./Heading-BlMy4Ad2.js";import"./ItemControls-MYYKbbE3.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./ChevronRight-CfHO682k.js";import"./InformationSquare-BcX77Iuf.js";const{expect:t,userEvent:l,waitFor:r}=__STORYBOOK_MODULE_TEST__,B={title:"Menu/KeyboardNav",component:n};let i=!1;const a=e=>e.querySelector('[data-active="true"]')?.textContent??"",o={render:()=>c.jsx(n,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:()=>{i=!0}},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),play:async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>t(a(e)).toContain("Alpha")),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Omega")),t(a(e)).not.toContain("Påkjørt Elg AS"),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(s=>s.textContent?.includes("Påkjørt Elg AS")).click(),t(i).toBe(!1)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
