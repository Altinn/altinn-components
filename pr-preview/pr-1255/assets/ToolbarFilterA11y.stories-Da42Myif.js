import{a7 as s}from"./iframe-2h8IP8d3.js";import{a as c,T as u}from"./Toolbar-Ca_cruzG.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController--HjFekig.js";import"./Dropdown-BKTHH5xT.js";import"./SearchField-_MN_HrdV.js";import"./MagnifyingGlass-CI0_p9bj.js";import"./FieldBase-DGYDbbnf.js";import"./Typography-DY06DO0f.js";import"./useHighlightedText-CelzCUqF.js";import"./Field-BxD7Ql4y.js";import"./Label-ZzFKhgKK.js";import"./Input-CcSuNkw7.js";import"./useMenu-DBT0rzRb.js";import"./MenuListItem-Bu8N3gRa.js";import"./MenuListDivider-C4ZS-zxE.js";import"./MenuListHeading-CFPiwF83.js";import"./MenuItem-Cg_2HM56.js";import"./ItemMedia-F0nN_YEB.js";import"./Avatar-C_KS8ezx.js";import"./AvatarGroup-ChTLLSw-.js";import"./Checkmark-kZsld0tw.js";import"./ItemLabel-DAuWzgED.js";import"./Heading-DXu-0NAz.js";import"./ItemControls-F7yjZiAX.js";import"./Badge-Pn_S1ZTN.js";import"./Tooltip-D08FTuVb.js";import"./ChevronRight-Bz8Cr0I4.js";import"./index-CQmnZsg3.js";import"./InformationSquare-DAAIm6NS.js";import"./Plus-VIPYJ0p2.js";import"./ButtonGroup-Ct8EhDC8.js";import"./ButtonGroupDivider-DKSeMAf-.js";import"./ChevronUpDown-_l_w1G-T.js";import"./ToolbarMenu-CllNiYX6.js";import"./ToolbarSearch-D8P9irAY.js";const{expect:t,userEvent:l,waitFor:p,within:d}=__STORYBOOK_MODULE_TEST__,X={title:"Toolbar/ToolbarFilter (a11y)",component:c,parameters:{docs:{description:{component:"Behavioural accessibility regression tests for the filter trigger buttons."}}}},b=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],a={render:()=>s.jsx(u,{children:s.jsx(c,{filters:b})}),play:async({canvasElement:n})=>{const i=d(n),m=n.ownerDocument,e=await i.findByRole("button",{name:/Velg aktør/i});t(e).toHaveAttribute("aria-haspopup","menu"),t(e).toHaveAttribute("aria-expanded","false"),t(e).not.toHaveAttribute("aria-controls"),await l.click(e),await p(()=>t(e).toHaveAttribute("aria-expanded","true"));const r=e.getAttribute("aria-controls");t(r).toBe("toolbar-filter-menu-partyScope"),t(m.getElementById(r)?.getAttribute("role")).toBe("menu");const o=await i.findByRole("button",{name:/^Status/i});await l.click(o),await p(()=>t(o).toHaveAttribute("aria-controls","toolbar-filter-menu-status")),t(o.getAttribute("aria-controls")).not.toBe(r)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
