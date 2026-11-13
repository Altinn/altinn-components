var S=Object.defineProperty;var c=(e,r)=>S(e,"name",{value:r,configurable:!0});import{a7 as m,aa as R}from"./iframe-r-PzxnFG.js";import{a as w,T as v}from"./Toolbar-Be6Tch-c.js";import{T as L}from"./ToolbarMenu-BxyYmvJJ.js";import{i as I}from"./example.data-JXRBO0CT.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-D2Eauaak.js";import"./useIsDesktop-Di7DAkKs.js";import"./Dropdown-tD-rtn-3.js";import"./SearchField-Cn8qUcxo.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ItemLabel-DE7oETkr.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronRight-DoF3revo.js";import"./FieldBase-D95hzyfr.js";import"./Typography-DZA02yZr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./useMenu-BMl9Yb_c.js";import"./InformationSquare-x0k9ph8l.js";import"./Plus-C3gc2Iai.js";import"./ButtonGroup-tpSmkUGs.js";import"./ButtonGroupDivider-B1E5WcaK.js";import"./ChevronUpDown-HPDH3mEH.js";import"./ToolbarSearch-JhKmYWK0.js";import"./Paperclip-oc5U4BkP.js";import"./Eye-BC_-1Aae.js";import"./MenuHamburger-BBbrRald.js";const{expect:t,userEvent:i,waitFor:o,within:u}=__STORYBOOK_MODULE_TEST__,Bt={title:"Toolbar/ToolbarFilter (a11y)",component:w},T=[{name:"partyScope",label:"Velg aktør",title:"Velg aktør",items:[{role:"radio",name:"partyScope",value:"ALL_PARTIES",title:"Alle aktører"},{role:"radio",name:"partyScope",value:"PERSONS",title:"Personer"}]},{name:"status",label:"Status",title:"Status",items:[{role:"checkbox",name:"status",value:"unread",title:"Ulest"},{role:"checkbox",name:"status",value:"requires-action",title:"Krever handling"}]}],d=c(e=>{const r=e.ownerDocument.activeElement;return r&&e.contains(r)?r:null},"activeOption"),h=c(e=>e.contains(e.ownerDocument.activeElement),"hasFocusInside"),x={render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:T})}),"render"),play:c(async({canvasElement:e})=>{const r=u(e),l=e.ownerDocument,a=await r.findByRole("button",{name:/Velg aktør/i});t(a).toHaveAttribute("aria-haspopup","listbox"),t(a).toHaveAttribute("aria-expanded","false"),t(a).not.toHaveAttribute("aria-controls"),await i.click(a),await o(()=>t(a).toHaveAttribute("aria-expanded","true"));const n=a.getAttribute("aria-controls");t(n).toBe("toolbar-filter-menu-partyScope-listbox");const s=l.getElementById(n);t(s.getAttribute("role")).toBe("listbox"),t(s).toHaveAccessibleName("Velg aktør"),t(s).not.toHaveAttribute("aria-multiselectable"),t(u(s).getAllByRole("option")).toHaveLength(2),t(l.querySelectorAll('[role="menu"], [role="menuitemradio"], [role="menuitemcheckbox"]')).toHaveLength(0),t(s.closest('[role="dialog"]')).toBeNull();const p=await r.findByRole("button",{name:/^Status/i});await i.click(p),await o(()=>t(p).toHaveAttribute("aria-controls","toolbar-filter-menu-status-listbox")),t(p.getAttribute("aria-controls")).not.toBe(n),t(l.getElementById("toolbar-filter-menu-status-listbox")).toHaveAttribute("aria-multiselectable","true")},"play")},y={parameters:{screenshot:{skip:!0}},render:c(()=>{const[e,r]=R.useState({});return m.jsx(v,{children:m.jsx(w,{filters:T,filterState:e,onFilterStateChange:r})})},"render"),play:c(async({canvasElement:e})=>{const r=u(e),l=e.ownerDocument,a=await r.findByRole("button",{name:/^Status/i});await i.click(a);const n=await o(()=>l.getElementById("toolbar-filter-menu-status-listbox"));await o(()=>t(h(n)).toBe(!0)),await o(()=>t(d(n)).toHaveTextContent("Ulest")),t(d(n)).toHaveAttribute("role","option"),await i.keyboard("{ArrowDown}"),await o(()=>t(d(n)).toHaveTextContent("Krever handling")),await i.keyboard("{Home}"),await o(()=>t(d(n)).toHaveTextContent("Ulest")),await i.keyboard("{End}"),await o(()=>t(d(n)).toHaveTextContent("Krever handling")),await i.keyboard("u"),await o(()=>t(d(n)).toHaveTextContent("Ulest")),await i.keyboard(" "),await o(()=>t(u(n).getByRole("option",{name:"Ulest"})).toHaveAttribute("aria-selected","true")),t(a).toHaveAttribute("aria-expanded","true");const s=u(n).getByRole("option",{name:"Krever handling"});await i.click(s),await o(()=>t(s).toHaveAttribute("aria-selected","true")),await i.keyboard("{Enter}"),await o(()=>t(s).toHaveAttribute("aria-selected","false")),n.focus(),await i.tab(),await o(()=>t(a).toHaveAttribute("aria-expanded","false")),await o(()=>t(a).toHaveFocus());const p=await r.findByRole("button",{name:/Velg aktør/i});await i.click(p);const b=await o(()=>l.getElementById("toolbar-filter-menu-partyScope-listbox"));await o(()=>t(h(b)).toBe(!0)),await i.keyboard("{ArrowDown}"),await o(()=>t(d(b)).toHaveTextContent("Personer")),await i.keyboard("{Enter}"),await o(()=>t(p).toHaveAttribute("aria-expanded","false")),await o(()=>t(p).toHaveFocus())},"play")},g={parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(L,{id:"long",label:"Velg",title:"Velg nummer",items:Array.from({length:40},(e,r)=>({id:`n-${r}`,title:`Nummer ${r+1}`}))})}),"render"),play:c(async({canvasElement:e})=>{const r=u(e),l=e.ownerDocument,a=await r.findByRole("button",{name:"Velg nummer: Velg"});await i.click(a);const n=u(l.body).getByRole("listbox",{name:"Velg nummer"}),s=l.getElementById("long-panel");await o(()=>t(h(n)).toBe(!0)),t(s.scrollHeight).toBeGreaterThan(s.clientHeight);const p=c(async b=>o(()=>{const A=d(n);t(A).toHaveTextContent(b);const E=A.getBoundingClientRect(),F=s.getBoundingClientRect();t(E.top).toBeGreaterThanOrEqual(F.top-1),t(E.bottom).toBeLessThanOrEqual(F.bottom+1)}),"expectActiveInView");await i.keyboard("{End}"),await p("Nummer 40"),t(s.scrollTop).toBeGreaterThan(0),await i.keyboard("{Home}"),await p("Nummer 1");for(let b=0;b<25;b++)await i.keyboard("{ArrowDown}");await p("Nummer 26"),await i.keyboard("{Escape}"),await o(()=>t(a).toHaveAttribute("aria-expanded","false")),await i.click(a),await o(()=>t(h(n)).toBe(!0)),t(s.scrollTop).toBe(0),await o(()=>t(d(n)).toHaveTextContent("Nummer 1"))},"play")},B={parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:[{name:"owner",label:"Tjenesteeier",title:"Velg tjenesteeier",searchable:!0,search:{name:"owner-search",placeholder:"Søk"},items:[{role:"checkbox",name:"owner",value:"skatt",title:"Skatteetaten"},{role:"checkbox",name:"owner",value:"nav",title:"NAV"}]}]})}),"render"),play:c(async({canvasElement:e})=>{const r=u(e),l=e.ownerDocument,a=await r.findByRole("button",{name:/Tjenesteeier/i});t(a).toHaveAttribute("aria-haspopup","dialog"),await i.click(a);const n=await u(l.body).findByRole("dialog",{name:"Velg tjenesteeier"});t(a).toHaveAttribute("aria-controls",n.id),t(n).not.toHaveAttribute("aria-modal");const s=u(n).getByRole("combobox",{name:"Søk"}),p=u(n).getByRole("listbox");await o(()=>t(s).toHaveFocus()),t(s).toHaveAttribute("aria-controls",p.id),t(p.id).toBe("toolbar-filter-menu-owner-listbox"),t(l.querySelectorAll('[role="menu"]')).toHaveLength(0),await i.keyboard("{ArrowDown}"),await o(()=>t(s.getAttribute("aria-activedescendant")).toBeTruthy()),await i.keyboard("n a"),t(s).toHaveValue("n a"),await i.clear(s),s.focus(),await i.tab(),await o(()=>t(a).toHaveAttribute("aria-expanded","false")),await o(()=>t(a).toHaveFocus())},"play")},f={globals:{viewport:{value:"mobile1"}},parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:T})}),"render"),play:c(async({canvasElement:e})=>{const r=u(e),l=e.ownerDocument;t(window.innerWidth).toBeLessThan(1024);const a=await r.findByRole("button",{name:/^Status/i});t(a).toHaveAttribute("aria-haspopup","dialog"),await i.click(a);const n=await u(l.body).findByRole("dialog",{name:"Status"});t(n.tagName).toBe("DIALOG"),t(n.matches(":modal")).toBe(!0),t(a).toHaveAttribute("aria-controls",n.id);const s=u(n).getByRole("listbox");await o(()=>t(h(s)).toBe(!0)),a.focus(),t(a).not.toHaveFocus(),t(h(s)).toBe(!0),t(a).toHaveAttribute("aria-expanded","true"),await i.click(u(n).getByRole("button",{name:/Lukk|Close/})),await o(()=>t(a).toHaveAttribute("aria-expanded","false")),t(n.matches(":modal")).toBe(!1),await o(()=>t(a).toHaveFocus())},"play")},H={parameters:{screenshot:{skip:!0}},render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:T.map(e=>({...e,removable:!0})),filterState:{status:["unread"],partyScope:["PERSONS"]}})}),"render"),play:c(async({canvasElement:e})=>{const r=u(e);t(await r.findByRole("button",{name:"Fjern filter: Status"})).toBeInTheDocument(),t(r.getByRole("button",{name:"Fjern filter: Velg aktør"})).toBeInTheDocument()},"play")},k={render:c(()=>m.jsx(v,{children:m.jsx(w,{filters:I.map(e=>({...e,removable:!0})),filterState:{status:["requires-action"]}})}),"render"),play:c(async({canvasElement:e})=>{const r=u(e),l=e.ownerDocument;await i.click(await r.findByRole("button",{name:/Legg til/i})),await o(()=>t(l.querySelector('#tool-filter-add [role="menuitem"]')).toBeTruthy());const a=[...l.querySelectorAll('#tool-filter-add [role="menuitem"]')];t(a.length).toBeGreaterThan(0);for(const n of a)t(l.querySelectorAll(`[id="${CSS.escape(n.id)}"]`).length).toBe(1)},"play")},ft=["TriggerButtonAria","ListboxKeyboard","LongListFollowsTheKeys","SearchableFilterIsDialog","FullscreenIsModalDialog","RemoveButtonsNameTheirFilter","AddMenuItemIdsAreUnique"];x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => expect(hasFocusInside(listbox)).toBe(true));
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
    await waitFor(() => expect(hasFocusInside(partyList)).toBe(true));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeOption(partyList)).toHaveTextContent('Personer'));
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(partyBtn).toHaveAttribute('aria-expanded', 'false'));
    await waitFor(() => expect(partyBtn).toHaveFocus());
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => expect(hasFocusInside(listbox)).toBe(true));

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
    await waitFor(() => expect(hasFocusInside(listbox)).toBe(true));
    expect(panel.scrollTop).toBe(0);
    await waitFor(() => expect(activeOption(listbox)).toHaveTextContent('Nummer 1'));
  }
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    const input = within(dialog).getByRole('combobox', {
      name: 'Søk'
    });
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
}`,...B.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => expect(hasFocusInside(listbox)).toBe(true));

    // The browser makes the page behind inert: it cannot be focused, so it cannot be reached with a screen reader either.
    statusBtn.focus();
    expect(statusBtn).not.toHaveFocus();
    expect(hasFocusInside(listbox)).toBe(true);

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
}`,...f.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};export{k as AddMenuItemIdsAreUnique,f as FullscreenIsModalDialog,y as ListboxKeyboard,g as LongListFollowsTheKeys,H as RemoveButtonsNameTheirFilter,B as SearchableFilterIsDialog,x as TriggerButtonAria,ft as __namedExportsOrder,Bt as default};
