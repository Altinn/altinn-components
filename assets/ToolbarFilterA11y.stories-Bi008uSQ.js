var B=Object.defineProperty;var i=(e,o)=>B(e,"name",{value:o,configurable:!0});import{a5 as c}from"./iframe-BfD7syly.js";import{a as d,T as b}from"./Toolbar-u7iR49dR.js";import{i as v}from"./example.data-CwXh_1JA.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-rxwan3om.js";import"./Dropdown-BRxpGVP6.js";import"./SearchField-CWWZLGm9.js";import"./MagnifyingGlass-ClZGDDqe.js";import"./MenuListItem-DkdyT6s3.js";import"./MenuListHeading-BsDHC7at.js";import"./MenuItem-yk1xWr1C.js";import"./ItemMedia-DHigLupS.js";import"./Avatar-DzXDYKXO.js";import"./AvatarGroup-x9OrqdJM.js";import"./Checkmark-DS2-cyTF.js";import"./ItemLabel-C4QOzGgW.js";import"./Heading-M_gD0nhY.js";import"./useHighlightedText-BiU1Xaf8.js";import"./ItemControls-CvMksNjC.js";import"./Badge-tM6hClJt.js";import"./Tooltip-BbiC_D-U.js";import"./ChevronRight-DeJMnotn.js";import"./FieldBase-fk0uyKjd.js";import"./Typography-EJ3Vxj-4.js";import"./Field-DGIr44pk.js";import"./Label-KYDdO5cS.js";import"./Input-BppbGARe.js";import"./useMenu-o9JsDoVb.js";import"./MenuListDivider-VNatTLoD.js";import"./InformationSquare-CmhaWIAD.js";import"./Plus-Oie_r0eR.js";import"./ButtonGroup-DFsWLoyK.js";import"./ButtonGroupDivider-CfD_ruqK.js";import"./ChevronUpDown-CjLJ_1zh.js";import"./ToolbarMenu-JEVAjleV.js";import"./ToolbarSearch-Carzb1Pu.js";import"./Paperclip-CM85Cu_i.js";import"./Eye-BBRH0E9c.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-COAJxrWW.js";const{expect:t,userEvent:p,waitFor:u,within:y}=__STORYBOOK_MODULE_TEST__,st={title:"Toolbar/ToolbarFilter (a11y)",component:d},f=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],s={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:f})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument,r=await o.findByRole("button",{name:/Velg aktør/i});t(r).toHaveAttribute("aria-haspopup","menu"),t(r).toHaveAttribute("aria-expanded","false"),t(r).not.toHaveAttribute("aria-controls"),await p.click(r),await u(()=>t(r).toHaveAttribute("aria-expanded","true"));const n=r.getAttribute("aria-controls");t(n).toBe("toolbar-filter-menu-partyScope"),t(a.getElementById(n)?.getAttribute("role")).toBe("menu");const m=await o.findByRole("button",{name:/^Status/i});await p.click(m),await u(()=>t(m).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(m.getAttribute("aria-controls")).not.toBe(n)},"play")},l={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:v.map(e=>({...e,removable:!0})),filterState:{status:["requires-action"]}})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument;await p.click(await o.findByRole("button",{name:/Legg til/i})),await u(()=>t(a.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const r=[...a.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(r.length).toBeGreaterThan(0);for(const n of r)t(a.querySelectorAll(`[id="${CSS.escape(n.id)}"]`).length).toBe(1)},"play")},lt=["TriggerButtonAria","AddMenuItemIdsAreUnique"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
