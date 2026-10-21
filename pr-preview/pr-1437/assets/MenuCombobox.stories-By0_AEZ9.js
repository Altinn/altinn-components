var d=Object.defineProperty;var n=(c,e)=>d(c,"name",{value:e,configurable:!0});import{a7 as b}from"./iframe-BXiLaIo1.js";import{M as u}from"./SearchField-CdRvOe5p.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-c64YmjJ0.js";import"./FieldBase-jDY5NJAX.js";import"./Typography-DfF7AP8y.js";import"./useHighlightedText-K6CHyIcM.js";import"./Field-B6gapKpe.js";import"./Label-CW_mCZHf.js";import"./Input-BQGhDE8-.js";import"./useMenu-CtVMoXgj.js";import"./MenuListItem-DfRmTFq2.js";import"./MenuListDivider-BxB7qLGS.js";import"./MenuListHeading-HYCXR4_8.js";import"./MenuItem-B-mwma_U.js";import"./ItemMedia-VY1kKFwh.js";import"./Avatar-C8Pz6Y-5.js";import"./AvatarGroup-DEeDgfDf.js";import"./Checkmark-V6stw9rv.js";import"./ItemLabel-CTUta9rO.js";import"./Heading-BSdWQg6G.js";import"./ItemControls-DC8itQ-R.js";import"./Badge-Dv1wWeY2.js";import"./Tooltip-Cd6x2nLz.js";import"./ChevronRight-CsaEnGk6.js";import"./InformationSquare-BMwsKYTB.js";const{expect:t,userEvent:s,waitFor:p}=__STORYBOOK_MODULE_TEST__,U={title:"Menu/Combobox",component:u},x=[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten",checked:!0,onClick:n(()=>{},"onClick")},{role:"checkbox",name:"owner",value:"nav",title:"NAV",checked:!1},{role:"checkbox",name:"owner",value:"dab",title:"Digdir",checked:!1}],a={render:n(()=>b.jsx(u,{id:"owner",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:x}),"render"),play:n(async({canvasElement:c})=>{const e=c.ownerDocument,o=e.querySelector("input"),r=e.querySelector('[role="listbox"]');t(o.getAttribute("role")).toBe("combobox"),t(o.getAttribute("aria-controls")).toBe(r.id),t(r.querySelector("input")).toBeNull();const l=[...r.querySelectorAll('[role="option"]')];t(l).toHaveLength(3),t(l.map(m=>m.getAttribute("aria-selected"))).toEqual(["true","false","false"]),o.focus(),await s.keyboard("{ArrowDown}"),await s.keyboard("{ArrowDown}"),await p(()=>t(o.getAttribute("aria-activedescendant")).toBeTruthy());const i=e.getElementById(o.getAttribute("aria-activedescendant"));t(i?.getAttribute("role")).toBe("option"),t(r.contains(i)).toBe(!0),t(i?.textContent).toContain("NAV"),await s.keyboard("{Enter}"),await p(()=>t(i?.textContent).toContain("NAV"))},"play")};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Y=["StructureAndNavigation"];export{a as StructureAndNavigation,Y as __namedExportsOrder,U as default};
