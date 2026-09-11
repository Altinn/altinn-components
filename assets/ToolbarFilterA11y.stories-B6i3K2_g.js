import{a7 as l}from"./iframe-O8cJNgnH.js";import{a as u,T as d}from"./Toolbar-EBTCyCZX.js";import{i as y}from"./example.data-E1TDVUmQ.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-MyvXNyzM.js";import"./Dropdown-DmhW7MY5.js";import"./SearchField-bcjP3Rbv.js";import"./MagnifyingGlass-DHpnscJf.js";import"./FieldBase-SXGcT6A1.js";import"./Typography-DU3EjiaL.js";import"./useHighlightedText-CnUjn7TA.js";import"./Field-C6gWhPtJ.js";import"./Label-Bx5yqb_Y.js";import"./Input-BfEZmvKD.js";import"./useMenu-BDnyYHA1.js";import"./MenuListItem-CQjZkQSb.js";import"./MenuListDivider-B5yo7PZG.js";import"./MenuListHeading-kFnOp7Lr.js";import"./MenuItem--4S_Ij0p.js";import"./ItemMedia-DQabxJtZ.js";import"./Avatar-D8-vsJJv.js";import"./AvatarGroup-Ra_TR9_v.js";import"./Checkmark-dNVTYLgC.js";import"./ItemLabel-C8aE3_ka.js";import"./Heading-BdhLm3SL.js";import"./ItemControls-Crhi56hp.js";import"./Badge-BEBeTMrY.js";import"./Tooltip-BrWx-R_c.js";import"./ChevronRight-U0ooHRaY.js";import"./InformationSquare-CwO_8hH0.js";import"./Plus-B_TKpQ68.js";import"./ButtonGroup-BrPvP3j_.js";import"./ButtonGroupDivider-yVY2TaYN.js";import"./ChevronUpDown-Dclr-mmb.js";import"./ToolbarMenu-B1c3rNz-.js";import"./ToolbarSearch-BRF92hG5.js";import"./Paperclip-BHEobVqN.js";import"./Eye-BUZMkOsU.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-D2jzHCCp.js";const{expect:t,userEvent:m,waitFor:p,within:b}=__STORYBOOK_MODULE_TEST__,at={title:"Toolbar/ToolbarFilter (a11y)",component:u},B=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],i={render:()=>l.jsx(d,{children:l.jsx(u,{filters:B})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument,e=await n.findByRole("button",{name:/Velg aktør/i});t(e).toHaveAttribute("aria-haspopup","menu"),t(e).toHaveAttribute("aria-expanded","false"),t(e).not.toHaveAttribute("aria-controls"),await m.click(e),await p(()=>t(e).toHaveAttribute("aria-expanded","true"));const a=e.getAttribute("aria-controls");t(a).toBe("toolbar-filter-menu-partyScope"),t(o.getElementById(a)?.getAttribute("role")).toBe("menu");const c=await n.findByRole("button",{name:/^Status/i});await m.click(c),await p(()=>t(c).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(c.getAttribute("aria-controls")).not.toBe(a)}},s={render:()=>l.jsx(d,{children:l.jsx(u,{filters:y.map(r=>({...r,removable:!0})),filterState:{status:["requires-action"]}})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument;await m.click(await n.findByRole("button",{name:/Legg til/i})),await p(()=>t(o.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const e=[...o.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(e.length).toBeGreaterThan(0);for(const a of e)t(o.querySelectorAll(`[id="${CSS.escape(a.id)}"]`).length).toBe(1)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
