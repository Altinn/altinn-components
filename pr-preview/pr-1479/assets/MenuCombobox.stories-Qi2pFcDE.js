var d=Object.defineProperty;var i=(c,e)=>d(c,"name",{value:e,configurable:!0});import{a6 as b}from"./iframe-CJbVApVd.js";import{M as u}from"./SearchField-v7apZWbj.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-ByOH_q-F.js";import"./MenuListItem-DZuqWt2h.js";import"./MenuListDivider-DHbKRw1S.js";import"./MenuItem-BZ7Fkp32.js";import"./CheckboxUncheckedIcon-mEYYc7FR.js";import"./RadioUncheckedIcon-BYKV7woP.js";import"./ItemMedia-zelbGl6j.js";import"./Avatar-D6kT48yy.js";import"./AvatarGroup-CEwn4f1y.js";import"./ItemLabel-BQOKZEUY.js";import"./Heading-DPlNKJG2.js";import"./useHighlightedText-ClD__BkG.js";import"./ItemControls-BlgjQohZ.js";import"./Badge-B0Oy6sks.js";import"./Tooltip-0Tcl_NyY.js";import"./ChevronRight-27VbzC_5.js";import"./FieldBase-DPozPxXp.js";import"./Typography-YiefWcUe.js";import"./Field-YyxArrP0.js";import"./Label-BJanEfkF.js";import"./Input-DjgPtg5S.js";import"./useMenu-Le6NyqAV.js";import"./InformationSquare-COAmcV_p.js";const{expect:t,userEvent:s,waitFor:p}=__STORYBOOK_MODULE_TEST__,U={title:"Menu/Combobox",component:u},x=[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten",checked:!0,onClick:i(()=>{},"onClick")},{role:"checkbox",name:"owner",value:"nav",title:"NAV",checked:!1},{role:"checkbox",name:"owner",value:"dab",title:"Digdir",checked:!1}],a={render:i(()=>b.jsx(u,{id:"owner",open:!0,keyboardEvents:!0,searchable:!0,a11yMode:"combobox",search:{name:"owner",placeholder:"Søk"},items:x}),"render"),play:i(async({canvasElement:c})=>{const e=c.ownerDocument,o=e.querySelector("input"),n=e.querySelector('[role="listbox"]');t(o.getAttribute("role")).toBe("combobox"),t(o.getAttribute("aria-controls")).toBe(n.id),t(n.querySelector("input")).toBeNull();const l=[...n.querySelectorAll('[role="option"]')];t(l).toHaveLength(3),t(l.map(m=>m.getAttribute("aria-selected"))).toEqual(["true","false","false"]),o.focus(),await s.keyboard("{ArrowDown}"),await s.keyboard("{ArrowDown}"),await p(()=>t(o.getAttribute("aria-activedescendant")).toBeTruthy());const r=e.getElementById(o.getAttribute("aria-activedescendant"));t(r?.getAttribute("role")).toBe("option"),t(n.contains(r)).toBe(!0),t(r?.textContent).toContain("NAV"),await s.keyboard("{Enter}"),await p(()=>t(r?.textContent).toContain("NAV"))},"play")},Y=["StructureAndNavigation"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
