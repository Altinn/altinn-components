var F=Object.defineProperty;var c=(o,s)=>F(o,"name",{value:s,configurable:!0});import{a6 as m,a9 as S}from"./iframe-CrglqwQn.js";import{a as w,T as v}from"./Toolbar-9N3580eF.js";import{T as R}from"./ToolbarMenu-BqL5gXT1.js";import{i as L}from"./example.data-DW-Gdr2C.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-WGsW3heI.js";import"./useIsDesktop-BFXmchO7.js";import"./Dropdown-Bs8XHg5O.js";import"./SearchField-C2qhyCtD.js";import"./MagnifyingGlass-C-uYCvZ7.js";import"./MenuListItem-BrJu3vrY.js";import"./MenuListDivider-BYAuSbm9.js";import"./MenuItem-BOpoNs7B.js";import"./CheckboxUncheckedIcon-CXEG0Svy.js";import"./RadioUncheckedIcon-BvYRqxVQ.js";import"./ItemMedia-CKHqoxmK.js";import"./Avatar-CdjH483A.js";import"./AvatarGroup-BVlT7mXX.js";import"./ItemLabel-C8AtzUlo.js";import"./Heading-Cue2sNHi.js";import"./useHighlightedText-BwDaK6ea.js";import"./ItemControls-BCjOivMY.js";import"./Badge-DecVHfU_.js";import"./Tooltip-C3l4V9U1.js";import"./ChevronRight-DGfPuTVb.js";import"./FieldBase-B81pLsMF.js";import"./Typography-BczTYRHT.js";import"./Field-2w0B3_JZ.js";import"./Label-DGjLhU1K.js";import"./Input-CFGd0v58.js";import"./useMenu-8J-CXIB0.js";import"./InformationSquare-BOQji3ZT.js";import"./Plus-BsVWtc_l.js";import"./ButtonGroup-DBlS54nG.js";import"./ButtonGroupDivider-Cpa88dGM.js";import"./ChevronUpDown-BOLcNr1O.js";import"./ToolbarSearch-_H84Lz4H.js";import"./Paperclip-BS7qVoGN.js";import"./Eye-CFtmbk7R.js";import"./MenuHamburger-Co7zqsTV.js";const{expect:t,userEvent:i,waitFor:n,within:u}=__STORYBOOK_MODULE_TEST__,yt={title:"Toolbar/ToolbarFilter (a11y)",component:w},A=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],d=c(o=>o.ownerDocument.getElementById(o.getAttribute("aria-activedescendant")??""),"activeOption"),h={render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:A})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument,e=await s.findByRole("button",{name:/Velg aktør/i});t(e).toHaveAttribute("aria-haspopup","listbox"),t(e).toHaveAttribute("aria-expanded","false"),t(e).not.toHaveAttribute("aria-controls"),await i.click(e),await n(()=>t(e).toHaveAttribute("aria-expanded","true"));const a=e.getAttribute("aria-controls");t(a).toBe("toolbar-filter-menu-partyScope-listbox");const r=l.getElementById(a);t(r.getAttribute("role")).toBe("listbox"),t(r).toHaveAccessibleName("Velg aktør"),t(r).not.toHaveAttribute("aria-multiselectable"),t(u(r).getAllByRole("option")).toHaveLength(2),t(l.querySelectorAll('[role="menu"], [role="menuitemradio"], [role="menuitemcheckbox"]')).toHaveLength(0),t(r.closest('[role="dialog"]')).toBeNull();const p=await s.findByRole("button",{name:/^Status/i});await i.click(p),await n(()=>t(p).toHaveAttribute("aria-controls","toolbar-filter-menu-status-listbox")),t(p.getAttribute("aria-controls")).not.toBe(a),t(l.getElementById("toolbar-filter-menu-status-listbox")).toHaveAttribute("aria-multiselectable","true")},"play")},x={parameters:{screenshot:{skip:!0}},render:c(()=>{const[o,s]=S.useState({});return m.jsx(v,{children:m.jsx(w,{filters:A,filterState:o,onFilterStateChange:s})})},"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument,e=await s.findByRole("button",{name:/^Status/i});await i.click(e);const a=await n(()=>l.getElementById("toolbar-filter-menu-status-listbox"));await n(()=>t(a).toHaveFocus()),await n(()=>t(d(a)).toHaveTextContent("Ulest")),t(d(a)).toHaveAttribute("role","option"),await i.keyboard("{ArrowDown}"),await n(()=>t(d(a)).toHaveTextContent("Krever handling")),await i.keyboard("{Home}"),await n(()=>t(d(a)).toHaveTextContent("Ulest")),await i.keyboard("{End}"),await n(()=>t(d(a)).toHaveTextContent("Krever handling")),await i.keyboard("u"),await n(()=>t(d(a)).toHaveTextContent("Ulest")),await i.keyboard(" "),await n(()=>t(u(a).getByRole("option",{name:"Ulest"})).toHaveAttribute("aria-selected","true")),t(e).toHaveAttribute("aria-expanded","true");const r=u(a).getByRole("option",{name:"Krever handling"});await i.click(r),await n(()=>t(r).toHaveAttribute("aria-selected","true")),await i.keyboard("{Enter}"),await n(()=>t(r).toHaveAttribute("aria-selected","false")),a.focus(),await i.tab(),await n(()=>t(e).toHaveAttribute("aria-expanded","false")),await n(()=>t(e).toHaveFocus());const p=await s.findByRole("button",{name:/Velg aktør/i});await i.click(p);const b=await n(()=>l.getElementById("toolbar-filter-menu-partyScope-listbox"));await n(()=>t(b).toHaveFocus()),await i.keyboard("{ArrowDown}"),await n(()=>t(d(b)).toHaveTextContent("Personer")),await i.keyboard("{Enter}"),await n(()=>t(p).toHaveAttribute("aria-expanded","false")),await n(()=>t(p).toHaveFocus())},"play")},y={parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(R,{id:"long",label:"Velg",title:"Velg nummer",items:Array.from({length:40},(o,s)=>({id:`n-${s}`,title:`Nummer ${s+1}`}))})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument,e=await s.findByRole("button",{name:"Velg nummer: Velg"});await i.click(e);const a=u(l.body).getByRole("listbox",{name:"Velg nummer"}),r=l.getElementById("long-panel");await n(()=>t(a).toHaveFocus()),t(r.scrollHeight).toBeGreaterThan(r.clientHeight);const p=c(async b=>n(()=>{const T=d(a);t(T).toHaveTextContent(b);const k=T.getBoundingClientRect(),E=r.getBoundingClientRect();t(k.top).toBeGreaterThanOrEqual(E.top-1),t(k.bottom).toBeLessThanOrEqual(E.bottom+1)}),"expectActiveInView");await i.keyboard("{End}"),await p("Nummer 40"),t(r.scrollTop).toBeGreaterThan(0),await i.keyboard("{Home}"),await p("Nummer 1");for(let b=0;b<25;b++)await i.keyboard("{ArrowDown}");await p("Nummer 26"),await i.keyboard("{Escape}"),await n(()=>t(e).toHaveAttribute("aria-expanded","false")),await i.click(e),await n(()=>t(a).toHaveFocus()),t(r.scrollTop).toBe(0),await n(()=>t(d(a)).toHaveTextContent("Nummer 1"))},"play")},g={parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:[{name:"owner",label:"Tjenesteeier",title:"Velg tjenesteeier",searchable:!0,search:{name:"owner-search",placeholder:"Søk"},items:[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten"},{role:"checkbox",name:"owner",value:"nav",title:"NAV"}]}]})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument,e=await s.findByRole("button",{name:/Tjenesteeier/i});t(e).toHaveAttribute("aria-haspopup","dialog"),await i.click(e);const a=await u(l.body).findByRole("dialog",{name:"Velg tjenesteeier"});t(e).toHaveAttribute("aria-controls",a.id),t(a).not.toHaveAttribute("aria-modal");const r=u(a).getByRole("combobox"),p=u(a).getByRole("listbox");await n(()=>t(r).toHaveFocus()),t(r).toHaveAttribute("aria-controls",p.id),t(p.id).toBe("toolbar-filter-menu-owner-listbox"),t(l.querySelectorAll('[role="menu"]')).toHaveLength(0),await i.keyboard("{ArrowDown}"),await n(()=>t(r.getAttribute("aria-activedescendant")).toBeTruthy()),await i.keyboard("n a"),t(r).toHaveValue("n a"),await i.clear(r),r.focus(),await i.tab(),await n(()=>t(e).toHaveAttribute("aria-expanded","false")),await n(()=>t(e).toHaveFocus())},"play")},B={globals:{viewport:{value:"mobile1"}},parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:A})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument;t(window.innerWidth).toBeLessThan(1024);const e=await s.findByRole("button",{name:/^Status/i});t(e).toHaveAttribute("aria-haspopup","dialog"),await i.click(e);const a=await u(l.body).findByRole("dialog",{name:"Status"});t(a.tagName).toBe("DIALOG"),t(a.matches(":modal")).toBe(!0),t(e).toHaveAttribute("aria-controls",a.id);const r=u(a).getByRole("listbox");await n(()=>t(r).toHaveFocus()),e.focus(),t(e).not.toHaveFocus(),t(r).toHaveFocus(),t(e).toHaveAttribute("aria-expanded","true"),await i.click(u(a).getByRole("button",{name:/Lukk|Close/})),await n(()=>t(e).toHaveAttribute("aria-expanded","false")),t(a.matches(":modal")).toBe(!1),await n(()=>t(e).toHaveFocus())},"play")},f={parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:A.map(o=>({...o,removable:!0})),filterState:{status:["unread"],partyScope:["PERSONS"]}})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o);t(await s.findByRole("button",{name:"Fjern filter: Status"})).toBeInTheDocument(),t(s.getByRole("button",{name:"Fjern filter: Velg aktør"})).toBeInTheDocument()},"play")},H={render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:L.map(o=>({...o,removable:!0})),filterState:{status:["requires-action"]}})}),"render"),play:c(async({canvasElement:o})=>{const s=u(o),l=o.ownerDocument;await i.click(await s.findByRole("button",{name:/Legg til/i})),await n(()=>t(l.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const e=[...l.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(e.length).toBeGreaterThan(0);for(const a of e)t(l.querySelectorAll(`[id="${CSS.escape(a.id)}"]`).length).toBe(1)},"play")},gt=["TriggerButtonAria","ListboxKeyboard","LongListFollowsTheKeys","SearchableFilterIsDialog","FullscreenIsModalDialog","RemoveButtonsNameTheirFilter","AddMenuItemIdsAreUnique"];h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    // A native modal dialog, opened with showModal().
    expect(dialog.tagName).toBe('DIALOG');
    expect(dialog.matches(':modal')).toBe(true);
    expect(statusBtn).toHaveAttribute('aria-controls', dialog.id);
    const listbox = within(dialog).getByRole('listbox');
    await waitFor(() => expect(listbox).toHaveFocus());

    // The browser makes the page behind inert: it cannot be focused, so it cannot be reached with a screen reader either.
    statusBtn.focus();
    expect(statusBtn).not.toHaveFocus();
    expect(listbox).toHaveFocus();

    // Tab stays inside the dialog: the browser does that for a modal dialog. The synthetic Tab in this test
    // does not follow the browser's rules, so it is not checked here.
    expect(statusBtn).toHaveAttribute('aria-expanded', 'true');

    // The close button is inside the dialog and has a name.
    await userEvent.click(within(dialog).getByRole('button', {
      name: /Lukk|Close/
    }));
    await waitFor(() => expect(statusBtn).toHaveAttribute('aria-expanded', 'false'));

    // Closed, the page is usable again and focus is back on the button.
    expect(dialog.matches(':modal')).toBe(false);
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
}`,...H.parameters?.docs?.source}}};export{H as AddMenuItemIdsAreUnique,B as FullscreenIsModalDialog,x as ListboxKeyboard,y as LongListFollowsTheKeys,f as RemoveButtonsNameTheirFilter,g as SearchableFilterIsDialog,h as TriggerButtonAria,gt as __namedExportsOrder,yt as default};
