import{a7 as s}from"./iframe-CdYVD6SD.js";import{a as c,T as u}from"./Toolbar-DuUXNB1s.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DJh2Guga.js";import"./Dropdown-BNNn4VPY.js";import"./SearchField-B_NM7GXp.js";import"./MagnifyingGlass-Cgduw8_l.js";import"./FieldBase-NvZtAXfB.js";import"./Typography-Dba7VpUA.js";import"./useHighlightedText-DItA3cBY.js";import"./Field-DkF-iZgl.js";import"./Label-lXTSTWmW.js";import"./Input-CF984aoc.js";import"./useMenu-CR8oLL1i.js";import"./MenuListItem-LpLMf6qu.js";import"./MenuListDivider-BO0zxfeS.js";import"./MenuListHeading-CKDNZjFs.js";import"./MenuItem-CJ_NtT0h.js";import"./ItemMedia-BIl5Wxj2.js";import"./Avatar-fMwGn-3G.js";import"./AvatarGroup-BXTj0nvd.js";import"./Checkmark-DT64LcTm.js";import"./ItemLabel-DvFew2uy.js";import"./Heading-Kaqd1h94.js";import"./ItemControls-vidWw2G8.js";import"./Badge-DuyiKzKp.js";import"./Tooltip-Vr6xk2hm.js";import"./ChevronRight-Dr5zJkhS.js";import"./index-D2d8PfjQ.js";import"./InformationSquare-Bk7KLwd3.js";import"./Plus-CF5KtJsD.js";import"./ButtonGroup-B-NgaNCB.js";import"./ButtonGroupDivider-BkcWguro.js";import"./ChevronUpDown-BFgElPow.js";import"./ToolbarMenu-DKN9XEUV.js";import"./ToolbarSearch-LZlSJIny.js";const{expect:t,userEvent:l,waitFor:p,within:d}=__STORYBOOK_MODULE_TEST__,X={title:"Toolbar/ToolbarFilter (a11y)",component:c,parameters:{docs:{description:{component:"Behavioural accessibility regression tests for the filter trigger buttons."}}}},b=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],a={render:()=>s.jsx(u,{children:s.jsx(c,{filters:b})}),play:async({canvasElement:n})=>{const i=d(n),m=n.ownerDocument,e=await i.findByRole("button",{name:/Velg aktør/i});t(e).toHaveAttribute("aria-haspopup","menu"),t(e).toHaveAttribute("aria-expanded","false"),t(e).not.toHaveAttribute("aria-controls"),await l.click(e),await p(()=>t(e).toHaveAttribute("aria-expanded","true"));const r=e.getAttribute("aria-controls");t(r).toBe("toolbar-filter-menu-partyScope"),t(m.getElementById(r)?.getAttribute("role")).toBe("menu");const o=await i.findByRole("button",{name:/^Status/i});await l.click(o),await p(()=>t(o).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(o.getAttribute("aria-controls")).not.toBe(r)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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

    // Collapsed: announces it opens a menu, expanded=false, no dangling aria-controls.
    expect(partyBtn).toHaveAttribute('aria-haspopup', 'menu');
    expect(partyBtn).toHaveAttribute('aria-expanded', 'false');
    expect(partyBtn).not.toHaveAttribute('aria-controls');

    // Expanded: aria-expanded flips and aria-controls points at the real menu element.
    await userEvent.click(partyBtn);
    await waitFor(() => expect(partyBtn).toHaveAttribute('aria-expanded', 'true'));
    const controls = partyBtn.getAttribute('aria-controls');
    expect(controls).toBe('toolbar-filter-menu-partyScope');
    expect(doc.getElementById(controls!)?.getAttribute('role')).toBe('menu');

    // Each filter gets a unique menu id (no duplicate-id across triggers).
    const statusBtn = await canvas.findByRole('button', {
      name: /^Status/i
    });
    await userEvent.click(statusBtn);
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-controls', 'toolbar-filter-menu-status'));
    expect(statusBtn.getAttribute('aria-controls')).not.toBe(controls);
  }
}`,...a.parameters?.docs?.source}}};const Z=["TriggerButtonAria"];export{a as TriggerButtonAria,Z as __namedExportsOrder,X as default};
