var d=Object.defineProperty;var n=(c,e)=>d(c,"name",{value:e,configurable:!0});import{a7 as b}from"./iframe-C7zNVDTT.js";import{M as u}from"./SearchField-DGzlCViu.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-D6hMH6h9.js";import"./FieldBase-CRVXDoio.js";import"./Typography-4gq5i4xU.js";import"./useHighlightedText-CLjqXK08.js";import"./Field-C_oHAtV1.js";import"./Label-CAjho_cW.js";import"./Input-CFKt0A_s.js";import"./useMenu-CRscwWGI.js";import"./MenuListItem-BTzpN6s4.js";import"./MenuListDivider-DPPFUY5F.js";import"./MenuListHeading-DE-GHA8Q.js";import"./MenuItem-BFxBNv1B.js";import"./ItemMedia-89sj9-D5.js";import"./Avatar-BME3B1PP.js";import"./AvatarGroup-nzaSXphj.js";import"./Checkmark-BpQLEI_t.js";import"./ItemLabel-BTO4WUhi.js";import"./Heading-gv6s55oV.js";import"./ItemControls-CUub_53H.js";import"./Badge-CtuHfbCg.js";import"./Tooltip-B3NWibom.js";import"./ChevronRight-DIApXsrk.js";import"./InformationSquare-BvDWZ3oM.js";const{expect:t,userEvent:s,waitFor:p}=__STORYBOOK_MODULE_TEST__,U={title:"Menu/Combobox",component:u},x=[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten",checked:!0,onClick:n(()=>{},"onClick")},{role:"checkbox",name:"owner",value:"nav",title:"NAV",checked:!1},{role:"checkbox",name:"owner",value:"dab",title:"Digdir",checked:!1}],a={render:n(()=>b.jsx(u,{id:"owner",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:x}),"render"),play:n(async({canvasElement:c})=>{const e=c.ownerDocument,o=e.querySelector("input"),r=e.querySelector('[role="listbox"]');t(o.getAttribute("role")).toBe("combobox"),t(o.getAttribute("aria-controls")).toBe(r.id),t(r.querySelector("input")).toBeNull();const l=[...r.querySelectorAll('[role="option"]')];t(l).toHaveLength(3),t(l.map(m=>m.getAttribute("aria-selected"))).toEqual(["true","false","false"]),o.focus(),await s.keyboard("{ArrowDown}"),await s.keyboard("{ArrowDown}"),await p(()=>t(o.getAttribute("aria-activedescendant")).toBeTruthy());const i=e.getElementById(o.getAttribute("aria-activedescendant"));t(i?.getAttribute("role")).toBe("option"),t(r.contains(i)).toBe(!0),t(i?.textContent).toContain("NAV"),await s.keyboard("{Enter}"),await p(()=>t(i?.textContent).toContain("NAV"))},"play")};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
