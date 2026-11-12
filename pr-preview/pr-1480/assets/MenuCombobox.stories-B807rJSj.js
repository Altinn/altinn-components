var y=Object.defineProperty;var i=(a,r)=>y(a,"name",{value:r,configurable:!0});import{a7 as d}from"./iframe-D6r7-MD4.js";import{M as m}from"./SearchField-xJmrCU7q.js";import"./preload-helper-Cc2_yIPf.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./MenuListItem-BIaSNRVF.js";import"./MenuListDivider-DoLEaBRc.js";import"./MenuItem-CVg-Aq96.js";import"./CheckboxUncheckedIcon-B9mzN8fM.js";import"./RadioUncheckedIcon-CaPqnsDK.js";import"./ItemMedia-CeccNKOc.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./ItemLabel-CjCW6exE.js";import"./Heading-BBX9eyEy.js";import"./useHighlightedText-ByiYciR_.js";import"./ItemControls-Cgg9ynEC.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./ChevronRight-B-ItEsH6.js";import"./FieldBase-BsGJArhX.js";import"./Typography-CHbDBJK8.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./Input-CtcmBtOO.js";import"./useMenu-BVbqxAfY.js";import"./InformationSquare-Rb80un_D.js";const{expect:t,userEvent:s,waitFor:u}=__STORYBOOK_MODULE_TEST__,Y={title:"Menu/Combobox",component:m},b=[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten",checked:!0,onClick:i(()=>{},"onClick")},{role:"checkbox",name:"owner",value:"nav",title:"NAV",checked:!1},{role:"checkbox",name:"owner",value:"dab",title:"Digdir",checked:!1}],l={render:i(()=>d.jsx(m,{id:"owner",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:b}),"render"),play:i(async({canvasElement:a})=>{const r=a.ownerDocument,e=r.querySelector("input"),o=r.querySelector('[role="listbox"]');t(e.getAttribute("role")).toBe("combobox"),t(e.getAttribute("aria-controls")).toBe(o.id),t(o.querySelector("input")).toBeNull();const n=[...o.querySelectorAll('[role="option"]')];t(n).toHaveLength(3),t(n.map(x=>x.getAttribute("aria-selected"))).toEqual(["true","false","false"]),e.focus(),await s.keyboard("{ArrowDown}"),await s.keyboard("{ArrowDown}"),await u(()=>t(e.getAttribute("aria-activedescendant")).toBeTruthy());const p=r.getElementById(e.getAttribute("aria-activedescendant"));t(p?.getAttribute("role")).toBe("option"),t(o.contains(p)).toBe(!0),t(p?.textContent).toContain("NAV"),await s.keyboard("{Enter}"),await u(()=>t(p?.textContent).toContain("NAV"))},"play")},c={parameters:{screenshot:{skip:!0}},render:i(()=>d.jsx(m,{id:"owner-hits",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:b}),"render"),play:i(async({canvasElement:a})=>{const e=a.ownerDocument.querySelector("input"),o=a.querySelectorAll('output, [role="status"]');t(o).toHaveLength(1);const n=o[0];t(n).toBeEmptyDOMElement(),await s.type(e,"na"),await u(()=>t(n).toHaveTextContent("1 treff")),await s.type(e,"zzz"),await u(()=>t(n).toHaveTextContent("Ingen treff")),t(e).not.toHaveAttribute("aria-activedescendant"),await s.clear(e),await u(()=>t(n).toBeEmptyDOMElement())},"play")},G=["StructureAndNavigation","AnnouncesHits"];l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"The number of hits is announced politely while typing, from a status that is in the page from the start.",...c.parameters?.docs?.description}}};export{c as AnnouncesHits,l as StructureAndNavigation,G as __namedExportsOrder,Y as default};
