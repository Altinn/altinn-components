import{a7 as c}from"./iframe-ypmT5Gk0.js";import{M as n}from"./SearchField-gC-2ROHv.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BsJL0696.js";import"./FieldBase-BZNWpkh0.js";import"./Typography-D_BM_-lf.js";import"./useHighlightedText-BRp5NYS8.js";import"./Field-fCHogA_W.js";import"./Label-CuLDpT5S.js";import"./Input-CoYipzRW.js";import"./useMenu-Roya_qW1.js";import"./MenuListItem-aY-AAikt.js";import"./MenuListDivider-p3sa3VdL.js";import"./MenuListHeading-j9n_Lc05.js";import"./MenuItem-CZo5oRhh.js";import"./ItemMedia-4IfksOuS.js";import"./Avatar-CjSTwin0.js";import"./AvatarGroup-SlU2nii8.js";import"./Checkmark-kMy6EMLN.js";import"./ItemLabel-BlYQpqbv.js";import"./Heading-DYP7M4_m.js";import"./ItemControls-Bqvxib6z.js";import"./Badge-X9Z0TOu_.js";import"./Tooltip-Blob_TyK.js";import"./ChevronRight-3_fnpscT.js";import"./InformationSquare-BGmi6Zvl.js";const{expect:t,userEvent:l,waitFor:r}=__STORYBOOK_MODULE_TEST__,B={title:"Menu/KeyboardNav",component:n};let i=!1;const a=e=>e.querySelector('[data-active="true"]')?.textContent??"",o={render:()=>c.jsx(n,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:()=>{i=!0}},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),play:async({canvasElement:e})=>{i=!1,e.querySelector('ul[role="menu"]').focus(),await r(()=>t(a(e)).toContain("Alpha")),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Omega")),t(a(e)).not.toContain("Påkjørt Elg AS"),await l.keyboard("{ArrowDown}"),await r(()=>t(a(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(s=>s.textContent?.includes("Påkjørt Elg AS")).click(),t(i).toBe(!1)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
