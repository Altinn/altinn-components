var B=Object.defineProperty;var i=(e,o)=>B(e,"name",{value:o,configurable:!0});import{a7 as c}from"./iframe-CHdTRX1S.js";import{a as d,T as b}from"./Toolbar-DZNzE5PK.js";import{i as v}from"./example.data-TYJG8D2I.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-D8aBOA94.js";import"./Dropdown-lGfq8dlC.js";import"./SearchField-CHvi1Rr9.js";import"./MagnifyingGlass-DoQnYB7U.js";import"./MenuListItem-BuMUeh0I.js";import"./MenuListHeading-BF6vRJ1G.js";import"./MenuItem-C43FNrfh.js";import"./ItemMedia-BQC5N1RJ.js";import"./Avatar-BgVv4jsI.js";import"./AvatarGroup-C6qZoOIR.js";import"./Checkmark-BvCukKJy.js";import"./ItemLabel-BnULnKGe.js";import"./Heading-CWEvYxPf.js";import"./useHighlightedText-HQpCSNf5.js";import"./ItemControls-D53PO9xK.js";import"./Badge-ZdmE6gaR.js";import"./Tooltip-CYLMyUyD.js";import"./ChevronRight-h2GXZqhR.js";import"./FieldBase-CkHB3870.js";import"./Typography-6g7ttECm.js";import"./Field-8ZiKnfLQ.js";import"./Label-CJ7sG7Qi.js";import"./Input-CiIWWSBU.js";import"./useMenu-erQCXILL.js";import"./MenuListDivider-tQrfQ--u.js";import"./InformationSquare-B7p_A_2X.js";import"./Plus-XpG4Dc8n.js";import"./ButtonGroup-DccEHAHc.js";import"./ButtonGroupDivider-CyYVvD6M.js";import"./ChevronUpDown-G-PmcF11.js";import"./ToolbarMenu-QYjqK9ep.js";import"./ToolbarSearch-tLMhFnJ2.js";import"./Paperclip-CXu_EX-6.js";import"./Eye-It4lbTCH.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-DGqoRL5Z.js";const{expect:t,userEvent:p,waitFor:u,within:y}=__STORYBOOK_MODULE_TEST__,st={title:"Toolbar/ToolbarFilter (a11y)",component:d},f=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],s={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:f})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument,r=await o.findByRole("button",{name:/Velg aktør/i});t(r).toHaveAttribute("aria-haspopup","menu"),t(r).toHaveAttribute("aria-expanded","false"),t(r).not.toHaveAttribute("aria-controls"),await p.click(r),await u(()=>t(r).toHaveAttribute("aria-expanded","true"));const n=r.getAttribute("aria-controls");t(n).toBe("toolbar-filter-menu-partyScope"),t(a.getElementById(n)?.getAttribute("role")).toBe("menu");const m=await o.findByRole("button",{name:/^Status/i});await p.click(m),await u(()=>t(m).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(m.getAttribute("aria-controls")).not.toBe(n)},"play")},l={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:v.map(e=>({...e,removable:!0})),filterState:{status:["requires-action"]}})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument;await p.click(await o.findByRole("button",{name:/Legg til/i})),await u(()=>t(a.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const r=[...a.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(r.length).toBeGreaterThan(0);for(const n of r)t(a.querySelectorAll(`[id="${CSS.escape(n.id)}"]`).length).toBe(1)},"play")};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const lt=["TriggerButtonAria","AddMenuItemIdsAreUnique"];export{l as AddMenuItemIdsAreUnique,s as TriggerButtonAria,lt as __namedExportsOrder,st as default};
