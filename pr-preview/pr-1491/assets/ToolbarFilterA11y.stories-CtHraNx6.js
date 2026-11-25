var B=Object.defineProperty;var i=(e,o)=>B(e,"name",{value:o,configurable:!0});import{a6 as c}from"./iframe-BYGPhf7N.js";import{a as d,T as b}from"./Toolbar-D2rcCLvV.js";import{i as v}from"./example.data-C4dcLo6q.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-C82Fl8tQ.js";import"./Dropdown-0Y8H4iVy.js";import"./SearchField-BySPj-oD.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./MenuListItem-Er-de1vm.js";import"./MenuListDivider-C-25gy3r.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemMedia-ApKMdvQL.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./ItemLabel-KBN1Srj3.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./ItemControls-1sBh4pPD.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./ChevronRight-BckCGbec.js";import"./FieldBase-eqne-WwB.js";import"./Typography-BHNcIxxH.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./Input-C9cQp4bZ.js";import"./useMenu-r2OQI4uO.js";import"./InformationSquare-Cx25xyTl.js";import"./Plus-ChNYXBRv.js";import"./ButtonGroup-c8ZaNYEQ.js";import"./ButtonGroupDivider-DnlyYy1d.js";import"./ChevronUpDown-CsEkO8Vj.js";import"./ToolbarMenu-D39-x6U3.js";import"./ToolbarSearch-DEixWMHC.js";import"./Paperclip-Bhm0B4MW.js";import"./Eye-BEO-r5xc.js";import"./MenuHamburger-BBEPorEN.js";const{expect:t,userEvent:p,waitFor:u,within:y}=__STORYBOOK_MODULE_TEST__,nt={title:"Toolbar/ToolbarFilter (a11y)",component:d},f=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],s={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:f})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument,r=await o.findByRole("button",{name:/Velg aktør/i});t(r).toHaveAttribute("aria-haspopup","menu"),t(r).toHaveAttribute("aria-expanded","false"),t(r).not.toHaveAttribute("aria-controls"),await p.click(r),await u(()=>t(r).toHaveAttribute("aria-expanded","true"));const n=r.getAttribute("aria-controls");t(n).toBe("toolbar-filter-menu-partyScope"),t(a.getElementById(n)?.getAttribute("role")).toBe("menu");const m=await o.findByRole("button",{name:/^Status/i});await p.click(m),await u(()=>t(m).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(m.getAttribute("aria-controls")).not.toBe(n)},"play")},l={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:v.map(e=>({...e,removable:!0})),filterState:{status:["requires-action"]}})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument;await p.click(await o.findByRole("button",{name:/Legg til/i})),await u(()=>t(a.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const r=[...a.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(r.length).toBeGreaterThan(0);for(const n of r)t(a.querySelectorAll(`[id="${CSS.escape(n.id)}"]`).length).toBe(1)},"play")},it=["TriggerButtonAria","AddMenuItemIdsAreUnique"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Toolbar>
      <ToolbarFilter filters={filters} />
    </Toolbar>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;
    const partyBtn = await canvas.findByRole('button', {
      name: /Velg aktør/i
    });
    expect(partyBtn).toHaveAttribute('aria-haspopup', 'menu');
    expect(partyBtn).toHaveAttribute('aria-expanded', 'false');
    expect(partyBtn).not.toHaveAttribute('aria-controls');
    await userEvent.click(partyBtn);
    await waitFor(() => expect(partyBtn).toHaveAttribute('aria-expanded', 'true'));
    const controls = partyBtn.getAttribute('aria-controls');
    expect(controls).toBe('toolbar-filter-menu-partyScope');
    expect(doc.getElementById(controls!)?.getAttribute('role')).toBe('menu');
    const statusBtn = await canvas.findByRole('button', {
      name: /^Status/i
    });
    await userEvent.click(statusBtn);
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-controls', 'toolbar-filter-menu-status'));
    expect(statusBtn.getAttribute('aria-controls')).not.toBe(controls);
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Toolbar>
      <ToolbarFilter filters={inboxFilters.map(f => ({
      ...f,
      removable: true
    }))} filterState={{
      status: ['requires-action']
    }} />
    </Toolbar>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;
    await userEvent.click(await canvas.findByRole('button', {
      name: /Legg til/i
    }));
    await waitFor(() => expect(doc.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());
    const items = [...doc.querySelectorAll('#tool-filter-add [role="menuitem"]')] as HTMLElement[];
    expect(items.length).toBeGreaterThan(0);
    for (const item of items) {
      expect(doc.querySelectorAll(\`[id="\${CSS.escape(item.id)}"]\`).length).toBe(1);
    }
  }
}`,...l.parameters?.docs?.source}}};export{l as AddMenuItemIdsAreUnique,s as TriggerButtonAria,it as __namedExportsOrder,nt as default};
