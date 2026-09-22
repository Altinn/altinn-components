import{a7 as l}from"./iframe-Ca4u80-y.js";import{a as u,T as d}from"./Toolbar-BBERRx06.js";import{i as y}from"./example.data-DeUwQLY4.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-BCGdba1O.js";import"./Dropdown-CqSqE0dA.js";import"./SearchField-VyNSBwjR.js";import"./MagnifyingGlass-ePzGqa9d.js";import"./FieldBase-BaoqxAAt.js";import"./Typography-DWDEZq_R.js";import"./useHighlightedText-DqjIK10c.js";import"./Field-CaS5A3Xo.js";import"./Label-dGJaogAG.js";import"./Input-BzcsSDVe.js";import"./useMenu-D83_Vp30.js";import"./MenuListItem-MwOjEGoN.js";import"./MenuListDivider-R2CXinbT.js";import"./MenuListHeading-B4K-woqM.js";import"./MenuItem-BYM3QzRG.js";import"./ItemMedia-33czU3Hl.js";import"./Avatar-D0Cbhk4B.js";import"./AvatarGroup-ChCS9Nw5.js";import"./Checkmark-DdyDkuo2.js";import"./ItemLabel-DrPryDvn.js";import"./Heading-DWBFau_k.js";import"./ItemControls-EuOl9yJJ.js";import"./Badge-nrZ8AGCl.js";import"./Tooltip-BqzPqZJ1.js";import"./ChevronRight-eVASrmJg.js";import"./InformationSquare-C5WU0eyN.js";import"./Plus-Oh3Xr98D.js";import"./ButtonGroup-DxWQp11R.js";import"./ButtonGroupDivider-lZfdxe4t.js";import"./ChevronUpDown-D7s4rO6j.js";import"./ToolbarMenu-NSIS5DTX.js";import"./ToolbarSearch-B76M7lyM.js";import"./Paperclip-Ck1kHMdS.js";import"./Eye-DePIxeVK.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-D2oXTqoK.js";const{expect:t,userEvent:m,waitFor:p,within:b}=__STORYBOOK_MODULE_TEST__,at={title:"Toolbar/ToolbarFilter (a11y)",component:u},B=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],i={render:()=>l.jsx(d,{children:l.jsx(u,{filters:B})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument,e=await n.findByRole("button",{name:/Velg aktør/i});t(e).toHaveAttribute("aria-haspopup","menu"),t(e).toHaveAttribute("aria-expanded","false"),t(e).not.toHaveAttribute("aria-controls"),await m.click(e),await p(()=>t(e).toHaveAttribute("aria-expanded","true"));const a=e.getAttribute("aria-controls");t(a).toBe("toolbar-filter-menu-partyScope"),t(o.getElementById(a)?.getAttribute("role")).toBe("menu");const c=await n.findByRole("button",{name:/^Status/i});await m.click(c),await p(()=>t(c).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(c.getAttribute("aria-controls")).not.toBe(a)}},s={render:()=>l.jsx(d,{children:l.jsx(u,{filters:y.map(r=>({...r,removable:!0})),filterState:{status:["requires-action"]}})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument;await m.click(await n.findByRole("button",{name:/Legg til/i})),await p(()=>t(o.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const e=[...o.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(e.length).toBeGreaterThan(0);for(const a of e)t(o.querySelectorAll(`[id="${CSS.escape(a.id)}"]`).length).toBe(1)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
