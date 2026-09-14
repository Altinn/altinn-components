import{a7 as l}from"./iframe-BmEoWqRz.js";import{a as u,T as d}from"./Toolbar-CRs9027a.js";import{i as y}from"./example.data-Bc_mRp4o.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-D-8bCjIT.js";import"./Dropdown-DCNQ961w.js";import"./SearchField-C1uLMLLi.js";import"./MagnifyingGlass-QgwWPsJq.js";import"./FieldBase-T_Ol0Ej6.js";import"./Typography-BVfh1yLf.js";import"./useHighlightedText-_GRR2uH-.js";import"./Field-DXYDb7rc.js";import"./Label-BXdvGr24.js";import"./Input-DDCcqldd.js";import"./useMenu-C68PXoRq.js";import"./MenuListItem-B5VngT1X.js";import"./MenuListDivider-FJd_PUPB.js";import"./MenuListHeading-md5j_QVK.js";import"./MenuItem-BdKylwZo.js";import"./ItemMedia-Db3gcn7a.js";import"./Avatar-B-ArKV_z.js";import"./AvatarGroup-D8IOgHe3.js";import"./Checkmark-D1L9L_AM.js";import"./ItemLabel-Aob4vZQG.js";import"./Heading-CSNATJ_q.js";import"./ItemControls-Y4OIpieN.js";import"./Badge-LAUy9dv8.js";import"./Tooltip-Bf6BoxU7.js";import"./ChevronRight-CG1CTQrY.js";import"./InformationSquare-CFFqTuvm.js";import"./Plus-BvGVmtNu.js";import"./ButtonGroup-Bag4W9on.js";import"./ButtonGroupDivider-CPkcTHAx.js";import"./ChevronUpDown-B7C3KGYV.js";import"./ToolbarMenu-Dr9gs0X8.js";import"./ToolbarSearch-Dsllp4Yf.js";import"./Paperclip-CU67i8as.js";import"./Eye-DKOFIcms.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-BSi0IvEo.js";const{expect:t,userEvent:m,waitFor:p,within:b}=__STORYBOOK_MODULE_TEST__,at={title:"Toolbar/ToolbarFilter (a11y)",component:u},B=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],i={render:()=>l.jsx(d,{children:l.jsx(u,{filters:B})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument,e=await n.findByRole("button",{name:/Velg aktør/i});t(e).toHaveAttribute("aria-haspopup","menu"),t(e).toHaveAttribute("aria-expanded","false"),t(e).not.toHaveAttribute("aria-controls"),await m.click(e),await p(()=>t(e).toHaveAttribute("aria-expanded","true"));const a=e.getAttribute("aria-controls");t(a).toBe("toolbar-filter-menu-partyScope"),t(o.getElementById(a)?.getAttribute("role")).toBe("menu");const c=await n.findByRole("button",{name:/^Status/i});await m.click(c),await p(()=>t(c).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(c.getAttribute("aria-controls")).not.toBe(a)}},s={render:()=>l.jsx(d,{children:l.jsx(u,{filters:y.map(r=>({...r,removable:!0})),filterState:{status:["requires-action"]}})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument;await m.click(await n.findByRole("button",{name:/Legg til/i})),await p(()=>t(o.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const e=[...o.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(e.length).toBeGreaterThan(0);for(const a of e)t(o.querySelectorAll(`[id="${CSS.escape(a.id)}"]`).length).toBe(1)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
