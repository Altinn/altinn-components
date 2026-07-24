import{a7 as l}from"./iframe-Byxtd80g.js";import{a as u,T as d}from"./Toolbar-p-vHRlWD.js";import{i as y}from"./example.data-B_L6gym6.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-Ci6S68lA.js";import"./Dropdown-BDuW_1gv.js";import"./SearchField-BrxR5w_Y.js";import"./MagnifyingGlass-DByXWuC9.js";import"./FieldBase-BpV90x03.js";import"./Typography-B9U7pBH4.js";import"./useHighlightedText-Cf3y_8YK.js";import"./Field-D8NU1WP1.js";import"./Label-BN9gSRd7.js";import"./Input-De6ZM0cy.js";import"./useMenu-ClfrC7iO.js";import"./MenuListItem-rQlT5DX8.js";import"./MenuListDivider-CDp90hQ9.js";import"./MenuListHeading-laWT1ysP.js";import"./MenuItem-BIjlfqyX.js";import"./ItemMedia-DRrUuj39.js";import"./Avatar-DhukG_GJ.js";import"./AvatarGroup-CWET-veu.js";import"./Checkmark-oERC_EvH.js";import"./ItemLabel--xs2hbXq.js";import"./Heading-MBvMqbLo.js";import"./ItemControls-DrAhbY6n.js";import"./Badge-Cs7_cxSC.js";import"./Tooltip-9Wvrat9n.js";import"./ChevronRight-Cr__dFRw.js";import"./InformationSquare-CfrYT55Z.js";import"./Plus-Baef_WWy.js";import"./ButtonGroup-DCrOTCLv.js";import"./ButtonGroupDivider-Bm1ON_jD.js";import"./ChevronUpDown-CEdUpTfr.js";import"./ToolbarMenu-BlHb-4HL.js";import"./ToolbarSearch-CEPHdN_N.js";import"./Paperclip-CyfpQaVT.js";import"./Eye-BJUZ9eMd.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-Djtct37j.js";const{expect:t,userEvent:m,waitFor:p,within:b}=__STORYBOOK_MODULE_TEST__,at={title:"Toolbar/ToolbarFilter (a11y)",component:u},B=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],i={render:()=>l.jsx(d,{children:l.jsx(u,{filters:B})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument,e=await n.findByRole("button",{name:/Velg aktør/i});t(e).toHaveAttribute("aria-haspopup","menu"),t(e).toHaveAttribute("aria-expanded","false"),t(e).not.toHaveAttribute("aria-controls"),await m.click(e),await p(()=>t(e).toHaveAttribute("aria-expanded","true"));const a=e.getAttribute("aria-controls");t(a).toBe("toolbar-filter-menu-partyScope"),t(o.getElementById(a)?.getAttribute("role")).toBe("menu");const c=await n.findByRole("button",{name:/^Status/i});await m.click(c),await p(()=>t(c).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(c.getAttribute("aria-controls")).not.toBe(a)}},s={render:()=>l.jsx(d,{children:l.jsx(u,{filters:y.map(r=>({...r,removable:!0})),filterState:{status:["requires-action"]}})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument;await m.click(await n.findByRole("button",{name:/Legg til/i})),await p(()=>t(o.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const e=[...o.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(e.length).toBeGreaterThan(0);for(const a of e)t(o.querySelectorAll(`[id="${CSS.escape(a.id)}"]`).length).toBe(1)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const nt=["TriggerButtonAria","AddMenuItemIdsAreUnique"];export{s as AddMenuItemIdsAreUnique,i as TriggerButtonAria,nt as __namedExportsOrder,at as default};
