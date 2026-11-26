var d=Object.defineProperty;var i=(c,e)=>d(c,"name",{value:e,configurable:!0});import{a6 as b}from"./iframe-DwHkmT0f.js";import{M as u}from"./SearchField-BE9AHyrE.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-BwHWlmqj.js";import"./MenuListItem-CtEoku_b.js";import"./MenuListDivider-CROwDY0z.js";import"./MenuItem-CZxJMuiO.js";import"./CheckboxUncheckedIcon-CVogy-dq.js";import"./RadioUncheckedIcon-DD-mj64d.js";import"./ItemMedia-CVGrPGLV.js";import"./Avatar-S5z4qvLu.js";import"./AvatarGroup-Cl1VUjUq.js";import"./ItemLabel-hjkm06Ot.js";import"./Heading-FTp623yO.js";import"./useHighlightedText-DRj0X6ck.js";import"./ItemControls-CCH_CI8A.js";import"./Badge-na_CnfyR.js";import"./Tooltip-DjcFah2J.js";import"./ChevronRight-B3vSh-CA.js";import"./FieldBase-CpcKIkx4.js";import"./Typography-BKrXxvhH.js";import"./Field-BDHCaXkr.js";import"./Label-B7Jjr_ur.js";import"./Input-D6xvIcky.js";import"./useMenu-D8t-dYWs.js";import"./InformationSquare-CaoePqPY.js";const{expect:t,userEvent:s,waitFor:p}=__STORYBOOK_MODULE_TEST__,U={title:"Menu/Combobox",component:u},x=[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten",checked:!0,onClick:i(()=>{},"onClick")},{role:"checkbox",name:"owner",value:"nav",title:"NAV",checked:!1},{role:"checkbox",name:"owner",value:"dab",title:"Digdir",checked:!1}],a={render:i(()=>b.jsx(u,{id:"owner",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:x}),"render"),play:i(async({canvasElement:c})=>{const e=c.ownerDocument,o=e.querySelector("input"),n=e.querySelector('[role="listbox"]');t(o.getAttribute("role")).toBe("combobox"),t(o.getAttribute("aria-controls")).toBe(n.id),t(n.querySelector("input")).toBeNull();const l=[...n.querySelectorAll('[role="option"]')];t(l).toHaveLength(3),t(l.map(m=>m.getAttribute("aria-selected"))).toEqual(["true","false","false"]),o.focus(),await s.keyboard("{ArrowDown}"),await s.keyboard("{ArrowDown}"),await p(()=>t(o.getAttribute("aria-activedescendant")).toBeTruthy());const r=e.getElementById(o.getAttribute("aria-activedescendant"));t(r?.getAttribute("role")).toBe("option"),t(n.contains(r)).toBe(!0),t(r?.textContent).toContain("NAV"),await s.keyboard("{Enter}"),await p(()=>t(r?.textContent).toContain("NAV"))},"play")},Y=["StructureAndNavigation"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};export{a as StructureAndNavigation,Y as __namedExportsOrder,U as default};
