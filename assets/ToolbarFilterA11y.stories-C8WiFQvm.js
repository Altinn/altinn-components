var B=Object.defineProperty;var i=(e,o)=>B(e,"name",{value:o,configurable:!0});import{a6 as c}from"./iframe-Dhr5kNpI.js";import{a as d,T as b}from"./Toolbar-DHeeC9bw.js";import{i as v}from"./example.data-ogxW_Zf8.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./SearchField-Daiwk--y.js";import"./MagnifyingGlass-qp743Sh-.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./ItemLabel-D7TXcLH5.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ItemControls-CiyO-qr-.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./ChevronRight-BnrL2uT7.js";import"./FieldBase-C_75hFZi.js";import"./Typography-CiPthQfi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./useMenu-BGMvW90K.js";import"./InformationSquare-B4yRDNra.js";import"./Plus-CJyVTS1m.js";import"./ButtonGroup-DjJP_8QL.js";import"./ButtonGroupDivider-xXSQP4fw.js";import"./ChevronUpDown-ClFjd4Wf.js";import"./ToolbarMenu-4nusd3Gy.js";import"./ToolbarSearch-Cs9or_Ii.js";import"./Paperclip-BfqrsLsb.js";import"./Eye-82Qs17rD.js";import"./MenuHamburger-CsHjEoZC.js";const{expect:t,userEvent:p,waitFor:u,within:y}=__STORYBOOK_MODULE_TEST__,nt={title:"Toolbar/ToolbarFilter (a11y)",component:d},f=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],s={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:f})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument,r=await o.findByRole("button",{name:/Velg aktør/i});t(r).toHaveAttribute("aria-haspopup","menu"),t(r).toHaveAttribute("aria-expanded","false"),t(r).not.toHaveAttribute("aria-controls"),await p.click(r),await u(()=>t(r).toHaveAttribute("aria-expanded","true"));const n=r.getAttribute("aria-controls");t(n).toBe("toolbar-filter-menu-partyScope"),t(a.getElementById(n)?.getAttribute("role")).toBe("menu");const m=await o.findByRole("button",{name:/^Status/i});await p.click(m),await u(()=>t(m).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(m.getAttribute("aria-controls")).not.toBe(n)},"play")},l={render:i(()=>c.jsx(b,{children:c.jsx(d,{filters:v.map(e=>({...e,removable:!0})),filterState:{status:["requires-action"]}})}),"render"),play:i(async({canvasElement:e})=>{const o=y(e),a=e.ownerDocument;await p.click(await o.findByRole("button",{name:/Legg til/i})),await u(()=>t(a.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const r=[...a.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(r.length).toBeGreaterThan(0);for(const n of r)t(a.querySelectorAll(`[id="${CSS.escape(n.id)}"]`).length).toBe(1)},"play")},it=["TriggerButtonAria","AddMenuItemIdsAreUnique"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
