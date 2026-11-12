var y=Object.defineProperty;var i=(a,r)=>y(a,"name",{value:r,configurable:!0});import{a6 as d}from"./iframe-CqoHfDH7.js";import{M as m}from"./SearchField-D-gn40zc.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuListDivider-BNYPxbgd.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemMedia-Sf1LoSEA.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./ItemLabel-Bv-toCFX.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./ChevronRight-jzUrV1wz.js";import"./FieldBase-B4VpsYUB.js";import"./Typography-rh9OwAWr.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./useMenu-DC909dob.js";import"./InformationSquare-B2hWOsOH.js";const{expect:t,userEvent:s,waitFor:u}=__STORYBOOK_MODULE_TEST__,U={title:"Menu/Combobox",component:m},b=[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten",checked:!0,onClick:i(()=>{},"onClick")},{role:"checkbox",name:"owner",value:"nav",title:"NAV",checked:!1},{role:"checkbox",name:"owner",value:"dab",title:"Digdir",checked:!1}],l={render:i(()=>d.jsx(m,{id:"owner",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:b}),"render"),play:i(async({canvasElement:a})=>{const r=a.ownerDocument,e=r.querySelector("input"),n=r.querySelector('[role="listbox"]');t(e.getAttribute("role")).toBe("combobox"),t(e.getAttribute("aria-controls")).toBe(n.id),t(n.querySelector("input")).toBeNull();const o=[...n.querySelectorAll('[role="option"]')];t(o).toHaveLength(3),t(o.map(x=>x.getAttribute("aria-selected"))).toEqual(["true","false","false"]),e.focus(),await s.keyboard("{ArrowDown}"),await s.keyboard("{ArrowDown}"),await u(()=>t(e.getAttribute("aria-activedescendant")).toBeTruthy());const p=r.getElementById(e.getAttribute("aria-activedescendant"));t(p?.getAttribute("role")).toBe("option"),t(n.contains(p)).toBe(!0),t(p?.textContent).toContain("NAV"),await s.keyboard("{Enter}"),await u(()=>t(p?.textContent).toContain("NAV"))},"play")},c={parameters:{screenshot:{skip:!0}},render:i(()=>d.jsx(m,{id:"owner-hits",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:b}),"render"),play:i(async({canvasElement:a})=>{const e=a.ownerDocument.querySelector("input"),n=a.querySelectorAll('output, [role="status"]');t(n).toHaveLength(1);const o=n[0];t(o).toBeEmptyDOMElement(),await s.type(e,"na"),await u(()=>t(o).toHaveTextContent("1 treff")),await s.type(e,"zzz"),await u(()=>t(o).toHaveTextContent("Ingen treff")),t(e).not.toHaveAttribute("aria-activedescendant"),await s.clear(e),await u(()=>t(o).toBeEmptyDOMElement())},"play")},Y=["StructureAndNavigation","AnnouncesHits"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  // Behaviour only, the look is covered by StructureAndNavigation.
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <Menu id="owner-hits" open keyboardEvents searchable a11yMode="combobox" search={{
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

    // One polite status, present and empty before the user types.
    const statuses = canvasElement.querySelectorAll('output, [role="status"]');
    expect(statuses).toHaveLength(1);
    const status = statuses[0] as HTMLElement;
    expect(status).toBeEmptyDOMElement();
    await userEvent.type(input, 'na');
    await waitFor(() => expect(status).toHaveTextContent('1 treff'));
    await userEvent.type(input, 'zzz');
    await waitFor(() => expect(status).toHaveTextContent('Ingen treff'));
    // Announced once, by the status. The field does not also point to the no-hits row.
    expect(input).not.toHaveAttribute('aria-activedescendant');
    await userEvent.clear(input);
    await waitFor(() => expect(status).toBeEmptyDOMElement());
  }
}`,...c.parameters?.docs?.source},description:{story:"The number of hits is announced politely while typing, from a status that is in the page from the start.",...c.parameters?.docs?.description}}};export{c as AnnouncesHits,l as StructureAndNavigation,Y as __namedExportsOrder,U as default};
