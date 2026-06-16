import{a7 as m}from"./iframe-5uZaoZDv.js";import{M as l}from"./SearchField-BHTg7ejP.js";import"./preload-helper-PPVm8Dsz.js";import"./MagnifyingGlass-BhHVps8f.js";import"./FieldBase-D-wimfjV.js";import"./Typography-DIry-l26.js";import"./useHighlightedText-SumDRzv0.js";import"./Field-CjiYvts-.js";import"./Label-DkLrq_fL.js";import"./Input-C9_VoQpt.js";import"./useMenu-ihj2gTIo.js";import"./MenuListItem-BbZ2xvN5.js";import"./MenuListDivider-BVxqYtLY.js";import"./MenuListHeading-gwVAdWe6.js";import"./MenuItem-CHpnlanL.js";import"./ItemMedia-CTN7-8P7.js";import"./Avatar-YMRiiHHf.js";import"./AvatarGroup-BGXl6ZDr.js";import"./Checkmark-j8exHh37.js";import"./ItemLabel-DdCL01OT.js";import"./Heading-B0bYr3fv.js";import"./ItemControls-DqscoWhH.js";import"./Badge-CJMAUuOr.js";import"./Tooltip-BCm3h_Ql.js";import"./ChevronRight-Bm7ufgRx.js";import"./InformationSquare-DVWbDPiI.js";const{expect:t,userEvent:a,waitFor:s}=__STORYBOOK_MODULE_TEST__,j={title:"Menu/Combobox",component:l},d=[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten",checked:!0,onClick:()=>{}},{role:"checkbox",name:"owner",value:"nav",title:"NAV",checked:!1},{role:"checkbox",name:"owner",value:"dab",title:"Digdir",checked:!1}],i={render:()=>m.jsx(l,{id:"owner",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:d}),play:async({canvasElement:p})=>{const n=p.ownerDocument,e=n.querySelector("input"),o=n.querySelector('[role="listbox"]');t(e.getAttribute("role")).toBe("combobox"),t(e.getAttribute("aria-controls")).toBe(o.id),t(o.querySelector("input")).toBeNull();const c=[...o.querySelectorAll('[role="option"]')];t(c).toHaveLength(3),t(c.map(u=>u.getAttribute("aria-selected"))).toEqual(["true","false","false"]),e.focus(),await a.keyboard("{ArrowDown}"),await a.keyboard("{ArrowDown}"),await s(()=>t(e.getAttribute("aria-activedescendant")).toBeTruthy());const r=n.getElementById(e.getAttribute("aria-activedescendant"));t(r?.getAttribute("role")).toBe("option"),t(o.contains(r)).toBe(!0),t(r?.textContent).toContain("NAV"),await a.keyboard("{Enter}"),await s(()=>t(r?.textContent).toContain("NAV"))}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
