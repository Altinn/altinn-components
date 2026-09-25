import{a7 as l}from"./iframe-C7-WWuUz.js";import{a as u,T as d}from"./Toolbar-DageSG6F.js";import{i as y}from"./example.data-CY7RP43-.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-CONOWsYf.js";import"./Dropdown-3ZYKEzsd.js";import"./SearchField-B35ZfRWV.js";import"./MagnifyingGlass-DZeq_z0m.js";import"./FieldBase-V8CxIyK2.js";import"./Typography-BeOUX7s0.js";import"./useHighlightedText-DgrX0qZ_.js";import"./Field-D-AdTR5I.js";import"./Label-BjNI2Oja.js";import"./Input-DA__wV57.js";import"./useMenu-pD-uRv9Z.js";import"./MenuListItem-DIEDNnJ4.js";import"./MenuListDivider-FRFmhjs8.js";import"./MenuListHeading-BO147Bx-.js";import"./MenuItem-kril0LwU.js";import"./ItemMedia-CBTlpYQC.js";import"./Avatar-DglSEPrl.js";import"./AvatarGroup-BEa8YAn4.js";import"./Checkmark-CVmHJGo_.js";import"./ItemLabel-IzbVhm7b.js";import"./Heading-Fd09NSi6.js";import"./ItemControls-Bq7352tZ.js";import"./Badge-BbkNQ9iQ.js";import"./Tooltip-Bvj4CCJp.js";import"./ChevronRight-C0CFQIi6.js";import"./InformationSquare-B8uck3iJ.js";import"./Plus-0EP1hD2t.js";import"./ButtonGroup-Bf7xvvo6.js";import"./ButtonGroupDivider-BWgufaqK.js";import"./ChevronUpDown-DEQPPOZD.js";import"./ToolbarMenu-BnxiGlFu.js";import"./ToolbarSearch-DFXmwmLe.js";import"./Paperclip-D9xvKaGA.js";import"./Eye-Cl-bFUJe.js";import"./skatt-Eb53q4vT.js";import"./nav-Cq5UszUX.js";import"./MenuHamburger-C7i5GpCo.js";const{expect:t,userEvent:m,waitFor:p,within:b}=__STORYBOOK_MODULE_TEST__,at={title:"Toolbar/ToolbarFilter (a11y)",component:u},B=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],i={render:()=>l.jsx(d,{children:l.jsx(u,{filters:B})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument,e=await n.findByRole("button",{name:/Velg aktør/i});t(e).toHaveAttribute("aria-haspopup","menu"),t(e).toHaveAttribute("aria-expanded","false"),t(e).not.toHaveAttribute("aria-controls"),await m.click(e),await p(()=>t(e).toHaveAttribute("aria-expanded","true"));const a=e.getAttribute("aria-controls");t(a).toBe("toolbar-filter-menu-partyScope"),t(o.getElementById(a)?.getAttribute("role")).toBe("menu");const c=await n.findByRole("button",{name:/^Status/i});await m.click(c),await p(()=>t(c).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(c.getAttribute("aria-controls")).not.toBe(a)}},s={render:()=>l.jsx(d,{children:l.jsx(u,{filters:y.map(r=>({...r,removable:!0})),filterState:{status:["requires-action"]}})}),play:async({canvasElement:r})=>{const n=b(r),o=r.ownerDocument;await m.click(await n.findByRole("button",{name:/Legg til/i})),await p(()=>t(o.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const e=[...o.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(e.length).toBeGreaterThan(0);for(const a of e)t(o.querySelectorAll(`[id="${CSS.escape(a.id)}"]`).length).toBe(1)}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
