import{a7 as m}from"./iframe-BKPYfBaP.js";import{M as l}from"./SearchField-BEBaG6GH.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BcIgrRKJ.js";import"./FieldBase-BZsWcTUs.js";import"./Typography-Cdqx97qL.js";import"./useHighlightedText-BNKt0Eyh.js";import"./Field-DD7IzQnc.js";import"./Label-TLLhNVMu.js";import"./Input-CHWt3Nk0.js";import"./useMenu-BEKNpnot.js";import"./MenuListItem-Dox6r-gI.js";import"./MenuListDivider-Br9qCroM.js";import"./MenuListHeading-DETCOsyl.js";import"./MenuItem-Bx6H1W-Q.js";import"./ItemMedia-CfPfvhkB.js";import"./Avatar-CBzwnIR6.js";import"./AvatarGroup-C3fpFOg5.js";import"./Checkmark-CamERl7S.js";import"./ItemLabel-CAfmR_Xk.js";import"./Heading-BlMy4Ad2.js";import"./ItemControls-MYYKbbE3.js";import"./Badge-MDs50kx6.js";import"./Tooltip-BCY8jcz2.js";import"./ChevronRight-CfHO682k.js";import"./InformationSquare-BcX77Iuf.js";const{expect:t,userEvent:a,waitFor:s}=__STORYBOOK_MODULE_TEST__,j={title:"Menu/Combobox",component:l},d=[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten",checked:!0,onClick:()=>{}},{role:"checkbox",name:"owner",value:"nav",title:"NAV",checked:!1},{role:"checkbox",name:"owner",value:"dab",title:"Digdir",checked:!1}],i={render:()=>m.jsx(l,{id:"owner",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:d}),play:async({canvasElement:p})=>{const n=p.ownerDocument,e=n.querySelector("input"),o=n.querySelector('[role="listbox"]');t(e.getAttribute("role")).toBe("combobox"),t(e.getAttribute("aria-controls")).toBe(o.id),t(o.querySelector("input")).toBeNull();const c=[...o.querySelectorAll('[role="option"]')];t(c).toHaveLength(3),t(c.map(u=>u.getAttribute("aria-selected"))).toEqual(["true","false","false"]),e.focus(),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowDown}"),await s(()=>t(e.getAttribute("aria-activedescendant")).toBeTruthy());const r=n.getElementById(e.getAttribute("aria-activedescendant"));t(r?.getAttribute("role")).toBe("option"),t(o.contains(r)).toBe(!0),t(r?.textContent).toContain("NAV"),await a.keyboard("{Enter}"),await s(()=>t(r?.textContent).toContain("NAV"))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Menu id="owner" open keyboardEvents searchable a11yMode="combobox" search={{
    name: 'owner',
    placeholder: 'Søk'
  }}
  // biome-ignore lint/suspicious/noExplicitAny: test fixture
  items={items as any} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const doc = canvasElement.ownerDocument;
    const input = doc.querySelector('input') as HTMLInputElement;
    const listbox = doc.querySelector('[role="listbox"]') as HTMLElement;

    // Valid combobox-with-listbox: combobox role on the input, controlling the listbox.
    expect(input.getAttribute('role')).toBe('combobox');
    expect(input.getAttribute('aria-controls')).toBe(listbox.id);
    // The search input is NOT inside the listbox.
    expect(listbox.querySelector('input')).toBeNull();
    // Options are role="option" with aria-selected reflecting the checked state.
    const options = [...listbox.querySelectorAll('[role="option"]')];
    expect(options).toHaveLength(3);
    expect(options.map(o => o.getAttribute('aria-selected'))).toEqual(['true', 'false', 'false']);

    // ArrowDown moves the active descendant through the options (does not leave the list).
    input.focus();
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(input.getAttribute('aria-activedescendant')).toBeTruthy());
    const active = doc.getElementById(input.getAttribute('aria-activedescendant')!);
    expect(active?.getAttribute('role')).toBe('option');
    expect(listbox.contains(active)).toBe(true);
    expect(active?.textContent).toContain('NAV');

    // Enter selects the active option (useMenu dispatches a click on it).
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(active?.textContent).toContain('NAV'));
  }
}`,...i.parameters?.docs?.source}}};const R=["StructureAndNavigation"];export{i as StructureAndNavigation,R as __namedExportsOrder,j as default};
