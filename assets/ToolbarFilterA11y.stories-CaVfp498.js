var B=Object.defineProperty;var i=(e,o)=>B(e,"name",{value:o,configurable:!0});import{a5 as c}from"./iframe-CplFPuE2.js";import{a as d,T as b}from"./Toolbar-DU79cBAf.js";import{i as v}from"./example.data-CvgA0GH7.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-Ctb07B4f.js";import"./Dropdown-CIbRGvoU.js";import"./SearchField-4LhcGogw.js";import"./MagnifyingGlass-BqSMzz0M.js";import"./MenuListItem-Dyh-W5SZ.js";import"./MenuListHeading-9B-ZCwvC.js";import"./MenuItem-DVl7YcIV.js";import"./ItemMedia-BtRJ3M2I.js";import"./Avatar-B3ASgMQL.js";import"./AvatarGroup-B9EoMI2b.js";import"./Checkmark-Cdr1Cy4X.js";import"./ItemLabel-B29_b0Yb.js";import"./Heading-H6e_lYEN.js";import"./useHighlightedText-BpzjnQwF.js";import"./ItemControls-KQk_c0UL.js";import"./Badge-BWoGIkg0.js";import"./Tooltip-Dh3mcs7O.js";import"./ChevronRight-44eUUhYn.js";import"./FieldBase-BHrQkTmp.js";import"./Typography-pPFkmvZJ.js";import"./Field-DmUVDlMz.js";import"./Label-C9lUUP0G.js";import"./Input-BNktXmCP.js";import"./useMenu-Ct0wDmor.js";import"./MenuListDivider-CcRb0ndu.js";import"./InformationSquare-CTMDR6or.js";import"./Plus-Cjvj3mBz.js";import"./ButtonGroup-BYs_As_u.js";import"./ButtonGroupDivider-CKEVKxff.js";import"./ChevronUpDown-6RtyQlti.js";import"./ToolbarMenu-C1bI1EOA.js";import"./ToolbarSearch-BJxiTUIW.js";import"./Paperclip-C4CP5GZf.js";import"./Eye-CXIk-29c.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BPHgOQ4b.js";const{expect:t,userEvent:p,waitFor:u,within:y}=__STORYBOOK_MODULE_TEST__,st={title:"Toolbar/ToolbarFilter (a11y)",component:d},f=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],s={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:f})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument,r=await o.findByRole("button",{name:/Velg aktør/i});t(r).toHaveAttribute("aria-haspopup","menu"),t(r).toHaveAttribute("aria-expanded","false"),t(r).not.toHaveAttribute("aria-controls"),await p.click(r),await u(()=>t(r).toHaveAttribute("aria-expanded","true"));const n=r.getAttribute("aria-controls");t(n).toBe("toolbar-filter-menu-partyScope"),t(a.getElementById(n)?.getAttribute("role")).toBe("menu");const m=await o.findByRole("button",{name:/^Status/i});await p.click(m),await u(()=>t(m).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(m.getAttribute("aria-controls")).not.toBe(n)},"play")},l={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:v.map(e=>({...e,removable:!0})),filterState:{status:["requires-action"]}})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument;await p.click(await o.findByRole("button",{name:/Legg til/i})),await u(()=>t(a.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const r=[...a.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(r.length).toBeGreaterThan(0);for(const n of r)t(a.querySelectorAll(`[id="${CSS.escape(n.id)}"]`).length).toBe(1)},"play")},lt=["TriggerButtonAria","AddMenuItemIdsAreUnique"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};export{l as AddMenuItemIdsAreUnique,s as TriggerButtonAria,lt as __namedExportsOrder,st as default};
