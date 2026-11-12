var F=Object.defineProperty;var c=(o,s)=>F(o,"name",{value:s,configurable:!0});import{a6 as m,a9 as S}from"./iframe-CqoHfDH7.js";import{a as w,T as v}from"./Toolbar-DqOfbzde.js";import{T as R}from"./ToolbarMenu-nPJI5_t4.js";import{i as L}from"./example.data-BbNjYMip.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-jHmlB5TA.js";import"./useIsDesktop-DOYNI_br.js";import"./Dropdown-BxvitPqI.js";import"./SearchField-D-gn40zc.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuListDivider-BNYPxbgd.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemMedia-Sf1LoSEA.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./ItemLabel-Bv-toCFX.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./ChevronRight-jzUrV1wz.js";import"./FieldBase-B4VpsYUB.js";import"./Typography-rh9OwAWr.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./useMenu-DC909dob.js";import"./InformationSquare-B2hWOsOH.js";import"./Plus-DQZnEDJR.js";import"./ButtonGroup-Cf6Ux1xO.js";import"./ButtonGroupDivider-CW6_6-9r.js";import"./ChevronUpDown-CSOM-jEc.js";import"./ToolbarSearch-Co1pCbtk.js";import"./Paperclip-DtEp_-9S.js";import"./Eye-DGapNAbA.js";import"./MenuHamburger-DSLGNBpT.js";const{expect:t,userEvent:i,waitFor:n,within:u}=__STORYBOOK_MODULE_TEST__,yt={title:"Toolbar/ToolbarFilter (a11y)",component:w},A=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],d=c(o=>o.ownerDocument.getElementById(o.getAttribute("aria-activedescendant")??""),"activeOption"),x={render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:A})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument,a=await s.findByRole("button",{name:/Velg aktør/i});t(a).toHaveAttribute("aria-haspopup","listbox"),t(a).toHaveAttribute("aria-expanded","false"),t(a).not.toHaveAttribute("aria-controls"),await i.click(a),await n(()=>t(a).toHaveAttribute("aria-expanded","true"));const e=a.getAttribute("aria-controls");t(e).toBe("toolbar-filter-menu-partyScope-listbox");const r=l.getElementById(e);t(r.getAttribute("role")).toBe("listbox"),t(r).toHaveAccessibleName("Velg aktør"),t(r).not.toHaveAttribute("aria-multiselectable"),t(u(r).getAllByRole("option")).toHaveLength(2),t(l.querySelectorAll('[role="menu"], [role="menuitemradio"], [role="menuitemcheckbox"]')).toHaveLength(0),t(r.closest('[role="dialog"]')).toBeNull();const p=await s.findByRole("button",{name:/^Status/i});await i.click(p),await n(()=>t(p).toHaveAttribute("aria-controls","toolbar-filter-menu-status-listbox")),t(p.getAttribute("aria-controls")).not.toBe(e),t(l.getElementById("toolbar-filter-menu-status-listbox")).toHaveAttribute("aria-multiselectable","true")},"play")},h={parameters:{screenshot:{skip:!0}},render:c(()=>{const[o,s]=S.useState({});return m.jsx(v,{children:m.jsx(w,{filters:A,filterState:o,onFilterStateChange:s})})},"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument,a=await s.findByRole("button",{name:/^Status/i});await i.click(a);const e=await n(()=>l.getElementById("toolbar-filter-menu-status-listbox"));await n(()=>t(e).toHaveFocus()),await n(()=>t(d(e)).toHaveTextContent("Ulest")),t(d(e)).toHaveAttribute("role","option"),await i.keyboard("{ArrowDown}"),await n(()=>t(d(e)).toHaveTextContent("Krever handling")),await i.keyboard("{Home}"),await n(()=>t(d(e)).toHaveTextContent("Ulest")),await i.keyboard("{End}"),await n(()=>t(d(e)).toHaveTextContent("Krever handling")),await i.keyboard("u"),await n(()=>t(d(e)).toHaveTextContent("Ulest")),await i.keyboard(" "),await n(()=>t(u(e).getByRole("option",{name:"Ulest"})).toHaveAttribute("aria-selected","true")),t(a).toHaveAttribute("aria-expanded","true");const r=u(e).getByRole("option",{name:"Krever handling"});await i.click(r),await n(()=>t(r).toHaveAttribute("aria-selected","true")),await i.keyboard("{Enter}"),await n(()=>t(r).toHaveAttribute("aria-selected","false")),e.focus(),await i.tab(),await n(()=>t(a).toHaveAttribute("aria-expanded","false")),await n(()=>t(a).toHaveFocus());const p=await s.findByRole("button",{name:/Velg aktør/i});await i.click(p);const b=await n(()=>l.getElementById("toolbar-filter-menu-partyScope-listbox"));await n(()=>t(b).toHaveFocus()),await i.keyboard("{ArrowDown}"),await n(()=>t(d(b)).toHaveTextContent("Personer")),await i.keyboard("{Enter}"),await n(()=>t(p).toHaveAttribute("aria-expanded","false")),await n(()=>t(p).toHaveFocus())},"play")},y={parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(R,{id:"long",label:"Velg",title:"Velg nummer",items:Array.from({length:40},(o,s)=>({id:`n-${s}`,title:`Nummer ${s+1}`}))})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument,a=await s.findByRole("button",{name:"Velg nummer: Velg"});await i.click(a);const e=u(l.body).getByRole("listbox",{name:"Velg nummer"}),r=l.getElementById("long-panel");await n(()=>t(e).toHaveFocus()),t(r.scrollHeight).toBeGreaterThan(r.clientHeight);const p=c(async b=>n(()=>{const E=d(e);t(E).toHaveTextContent(b);const T=E.getBoundingClientRect(),k=r.getBoundingClientRect();t(T.top).toBeGreaterThanOrEqual(k.top-1),t(T.bottom).toBeLessThanOrEqual(k.bottom+1)}),"expectActiveInView");await i.keyboard("{End}"),await p("Nummer 40"),t(r.scrollTop).toBeGreaterThan(0),await i.keyboard("{Home}"),await p("Nummer 1");for(let b=0;b<25;b++)await i.keyboard("{ArrowDown}");await p("Nummer 26"),await i.keyboard("{Escape}"),await n(()=>t(a).toHaveAttribute("aria-expanded","false")),await i.click(a),await n(()=>t(e).toHaveFocus()),t(r.scrollTop).toBe(0),await n(()=>t(d(e)).toHaveTextContent("Nummer 1"))},"play")},g={parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:[{name:"owner",label:"Tjenesteeier",title:"Velg tjenesteeier",searchable:!0,search:{name:"owner-search",placeholder:"Søk"},items:[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten"},{role:"checkbox",name:"owner",value:"nav",title:"NAV"}]}]})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument,a=await s.findByRole("button",{name:/Tjenesteeier/i});t(a).toHaveAttribute("aria-haspopup","dialog"),await i.click(a);const e=await u(l.body).findByRole("dialog",{name:"Velg tjenesteeier"});t(a).toHaveAttribute("aria-controls",e.id),t(e).not.toHaveAttribute("aria-modal");const r=u(e).getByRole("combobox"),p=u(e).getByRole("listbox");await n(()=>t(r).toHaveFocus()),t(r).toHaveAttribute("aria-controls",p.id),t(p.id).toBe("toolbar-filter-menu-owner-listbox"),t(l.querySelectorAll('[role="menu"]')).toHaveLength(0),await i.keyboard("{ArrowDown}"),await n(()=>t(r.getAttribute("aria-activedescendant")).toBeTruthy()),await i.keyboard("n a"),t(r).toHaveValue("n a"),await i.clear(r),r.focus(),await i.tab(),await n(()=>t(a).toHaveAttribute("aria-expanded","false")),await n(()=>t(a).toHaveFocus())},"play")},B={globals:{viewport:{value:"mobile1"}},parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:A})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument;t(window.innerWidth).toBeLessThan(1024);const a=await s.findByRole("button",{name:/^Status/i});t(a).toHaveAttribute("aria-haspopup","dialog"),await i.click(a);const e=await u(l.body).findByRole("dialog",{name:"Status"});t(e).toHaveAttribute("aria-modal","true"),t(a).toHaveAttribute("aria-controls",e.id);const r=u(e).getByRole("listbox");await n(()=>t(r).toHaveFocus()),t(a.closest("[inert]")).not.toBeNull(),t(e.closest("[inert]")).toBeNull(),await i.tab(),t(e.contains(l.activeElement)).toBe(!0),await i.tab(),t(e.contains(l.activeElement)).toBe(!0),t(a).toHaveAttribute("aria-expanded","true"),await i.click(u(e).getByRole("button",{name:/Lukk|Close/})),await n(()=>t(a).toHaveAttribute("aria-expanded","false")),t(l.querySelectorAll("[inert]")).toHaveLength(0),await n(()=>t(a).toHaveFocus())},"play")},f={parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:A.map(o=>({...o,removable:!0})),filterState:{status:["unread"],partyScope:["PERSONS"]}})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o);t(await s.findByRole("button",{name:"Fjern filter: Status"})).toBeInTheDocument(),t(s.getByRole("button",{name:"Fjern filter: Velg aktør"})).toBeInTheDocument()},"play")},H={render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:L.map(o=>({...o,removable:!0})),filterState:{status:["requires-action"]}})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument;await i.click(await s.findByRole("button",{name:/Legg til/i})),await n(()=>t(l.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const a=[...l.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(a.length).toBeGreaterThan(0);for(const e of a)t(l.querySelectorAll(`[id="${CSS.escape(e.id)}"]`).length).toBe(1)},"play")},gt=["TriggerButtonAria","ListboxKeyboard","LongListFollowsTheKeys","SearchableFilterIsDialog","FullscreenIsModalDialog","RemoveButtonsNameTheirFilter","AddMenuItemIdsAreUnique"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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

    // A filter without a search field opens a list of values, not a menu.
    expect(partyBtn).toHaveAttribute('aria-haspopup', 'listbox');
    expect(partyBtn).toHaveAttribute('aria-expanded', 'false');
    expect(partyBtn).not.toHaveAttribute('aria-controls');
    await userEvent.click(partyBtn);
    await waitFor(() => expect(partyBtn).toHaveAttribute('aria-expanded', 'true'));
    const controls = partyBtn.getAttribute('aria-controls');
    expect(controls).toBe('toolbar-filter-menu-partyScope-listbox');
    const listbox = doc.getElementById(controls!) as HTMLElement;
    expect(listbox.getAttribute('role')).toBe('listbox');
    expect(listbox).toHaveAccessibleName('Velg aktør');
    expect(listbox).not.toHaveAttribute('aria-multiselectable');
    expect(within(listbox).getAllByRole('option')).toHaveLength(2);

    // Nothing is a menu, and the panel around the list has no role of its own.
    expect(doc.querySelectorAll('[role="menu"], [role="menuitemradio"], [role="menuitemcheckbox"]')).toHaveLength(0);
    expect(listbox.closest('[role="dialog"]')).toBeNull();
    const statusBtn = await canvas.findByRole('button', {
      name: /^Status/i
    });
    await userEvent.click(statusBtn);
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-controls', 'toolbar-filter-menu-status-listbox'));
    expect(statusBtn.getAttribute('aria-controls')).not.toBe(controls);
    expect(doc.getElementById('toolbar-filter-menu-status-listbox')).toHaveAttribute('aria-multiselectable', 'true');
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  // Behaviour only, the look is covered by the stories above.
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => {
    const [filterState, setFilterState] = useState<FilterState>({});
    return <Toolbar>
        <ToolbarFilter filters={filters} filterState={filterState} onFilterStateChange={setFilterState} />
      </Toolbar>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;
    const statusBtn = await canvas.findByRole('button', {
      name: /^Status/i
    });
    await userEvent.click(statusBtn);

    // The list takes focus and points out its active option.
    const listbox = await waitFor(() => doc.getElementById('toolbar-filter-menu-status-listbox') as HTMLElement);
    await waitFor(() => expect(listbox).toHaveFocus());
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Ulest'));
    expect(activeOption(listbox)).toHaveAttribute('role', 'option');

    // Arrow keys, Home, End and type-ahead move the active option.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Krever handling'));
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Ulest'));
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Krever handling'));
    await userEvent.keyboard('u');
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Ulest'));

    // Space selects a checkbox option and leaves the list open.
    await userEvent.keyboard(' ');
    await waitFor(() => expect(within(listbox).getByRole('option', {
      name: 'Ulest'
    })).toHaveAttribute('aria-selected', 'true'));
    expect(statusBtn).toHaveAttribute('aria-expanded', 'true');

    // Enter after a click toggles the option once, also when the click left focus on the option itself.
    const requiresAction = within(listbox).getByRole('option', {
      name: 'Krever handling'
    });
    await userEvent.click(requiresAction);
    await waitFor(() => expect(requiresAction).toHaveAttribute('aria-selected', 'true'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(requiresAction).toHaveAttribute('aria-selected', 'false'));
    listbox.focus();

    // Tab closes the list and puts focus back on the button.
    await userEvent.tab();
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(statusBtn).toHaveFocus());

    // Enter on a radio option selects it, closes the list and returns focus.
    const partyBtn = await canvas.findByRole('button', {
      name: /Velg aktør/i
    });
    await userEvent.click(partyBtn);
    const partyList = await waitFor(() => doc.getElementById('toolbar-filter-menu-partyScope-listbox') as HTMLElement);
    await waitFor(() => expect(partyList).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeOption(partyList)).toHaveTextContent('Personer'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(partyBtn).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(partyBtn).toHaveFocus());
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <Toolbar>
      <ToolbarMenu id="long" label="Velg" title="Velg nummer" items={Array.from({
      length: 40
    }, (_, i) => ({
      id: \`n-\${i}\`,
      title: \`Nummer \${i + 1}\`
    }))} />
    </Toolbar>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;

    // The button says what it is for, then the chosen value.
    const button = await canvas.findByRole('button', {
      name: 'Velg nummer: Velg'
    });
    await userEvent.click(button);
    const listbox = within(doc.body).getByRole('listbox', {
      name: 'Velg nummer'
    });
    const panel = doc.getElementById('long-panel') as HTMLElement;
    await waitFor(() => expect(listbox).toHaveFocus());

    // The list is longer than its panel, which scrolls.
    expect(panel.scrollHeight).toBeGreaterThan(panel.clientHeight);
    const expectActiveInView = async (name: string) => waitFor(() => {
      const active = activeOption(listbox) as HTMLElement;
      expect(active).toHaveTextContent(name);
      const activeRect = active.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      expect(activeRect.top).toBeGreaterThanOrEqual(panelRect.top - 1);
      expect(activeRect.bottom).toBeLessThanOrEqual(panelRect.bottom + 1);
    });

    // The keys never move the active option out of sight.
    await userEvent.keyboard('{End}');
    await expectActiveInView('Nummer 40');
    expect(panel.scrollTop).toBeGreaterThan(0);
    await userEvent.keyboard('{Home}');
    await expectActiveInView('Nummer 1');
    for (let i = 0; i < 25; i++) {
      await userEvent.keyboard('{ArrowDown}');
    }
    await expectActiveInView('Nummer 26');

    // Closed and opened again, the panel starts from the top with the first option active.
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(button).toHaveAttribute('aria-expanded', 'false'));
    await userEvent.click(button);
    await waitFor(() => expect(listbox).toHaveFocus());
    expect(panel.scrollTop).toBe(0);
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Nummer 1'));
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <Toolbar>
      <ToolbarFilter filters={[{
      name: 'owner',
      label: 'Tjenesteeier',
      title: 'Velg tjenesteeier',
      searchable: true,
      search: {
        name: 'owner-search',
        placeholder: 'Søk'
      },
      items: [{
        role: 'checkbox',
        name: 'owner',
        value: 'skatt',
        title: 'Skatteetaten'
      }, {
        role: 'checkbox',
        name: 'owner',
        value: 'nav',
        title: 'NAV'
      }]
    }]} />
    </Toolbar>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;
    const button = await canvas.findByRole('button', {
      name: /Tjenesteeier/i
    });
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    await userEvent.click(button);

    // With a search field the panel holds more than a list, so it is a dialog named by its title.
    const dialog = await within(doc.body).findByRole('dialog', {
      name: 'Velg tjenesteeier'
    });
    expect(button).toHaveAttribute('aria-controls', dialog.id);
    expect(dialog).not.toHaveAttribute('aria-modal');

    // Inside it the search field is a combobox that controls the listbox.
    const input = within(dialog).getByRole('combobox');
    const listbox = within(dialog).getByRole('listbox');
    await waitFor(() => expect(input).toHaveFocus());
    expect(input).toHaveAttribute('aria-controls', listbox.id);
    expect(listbox.id).toBe('toolbar-filter-menu-owner-listbox');
    expect(doc.querySelectorAll('[role="menu"]')).toHaveLength(0);

    // Arrow keys move through the options while focus stays in the search field, and typing still types.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(input.getAttribute('aria-activedescendant')).toBeTruthy());
    await userEvent.keyboard('n a');
    expect(input).toHaveValue('n a');
    await userEvent.clear(input);

    // Tab past the last control closes the dialog and puts focus back on the button.
    input.focus();
    await userEvent.tab();
    await waitFor(() => expect(button).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(button).toHaveFocus());
  }
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: 'mobile1'
    }
  },
  // storycap captures after the viewport has been reset, so a baseline here would show the desktop rendering.
  parameters: {
    screenshot: {
      skip: true
    }
  },
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

    // Guard: this must run below the 1024px breakpoint, where the dropdown covers the page.
    expect(window.innerWidth).toBeLessThan(1024);
    const statusBtn = await canvas.findByRole('button', {
      name: /^Status/i
    });
    expect(statusBtn).toHaveAttribute('aria-haspopup', 'dialog');
    await userEvent.click(statusBtn);

    // Covering the page, the dropdown is a modal dialog named by its title, with the list inside.
    const dialog = await within(doc.body).findByRole('dialog', {
      name: 'Status'
    });
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(statusBtn).toHaveAttribute('aria-controls', dialog.id);
    const listbox = within(dialog).getByRole('listbox');
    await waitFor(() => expect(listbox).toHaveFocus());

    // The page behind is inert, so it cannot be reached with a screen reader either. The dialog itself is not.
    expect(statusBtn.closest('[inert]')).not.toBeNull();
    expect(dialog.closest('[inert]')).toBeNull();

    // Tab stays inside the dialog.
    await userEvent.tab();
    expect(dialog.contains(doc.activeElement)).toBe(true);
    await userEvent.tab();
    expect(dialog.contains(doc.activeElement)).toBe(true);
    expect(statusBtn).toHaveAttribute('aria-expanded', 'true');

    // The close button is inside the dialog and has a name.
    await userEvent.click(within(dialog).getByRole('button', {
      name: /Lukk|Close/
    }));
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-expanded', 'false'));

    // Closed, the page is usable again and focus is back on the button.
    expect(doc.querySelectorAll('[inert]')).toHaveLength(0);
    await waitFor(() => expect(statusBtn).toHaveFocus());
  }
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <Toolbar>
      <ToolbarFilter filters={filters.map(f => ({
      ...f,
      removable: true
    }))} filterState={{
      status: ['unread'],
      partyScope: ['PERSONS']
    }} />
    </Toolbar>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);

    // Each chip's remove button says which filter it removes, so they can be told apart in a list of buttons.
    expect(await canvas.findByRole('button', {
      name: 'Fjern filter: Status'
    })).toBeInTheDocument();
    expect(canvas.getByRole('button', {
      name: 'Fjern filter: Velg aktør'
    })).toBeInTheDocument();
  }
}`,...f.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};export{H as AddMenuItemIdsAreUnique,B as FullscreenIsModalDialog,h as ListboxKeyboard,y as LongListFollowsTheKeys,f as RemoveButtonsNameTheirFilter,g as SearchableFilterIsDialog,x as TriggerButtonAria,gt as __namedExportsOrder,yt as default};
