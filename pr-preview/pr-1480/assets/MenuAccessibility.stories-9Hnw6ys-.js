var v=Object.defineProperty;var s=(a,t)=>v(a,"name",{value:t,configurable:!0});import{M as b}from"./SearchField-Cn8qUcxo.js";import"./iframe-r-PzxnFG.js";import"./preload-helper-Cc2_yIPf.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ItemLabel-DE7oETkr.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronRight-DoF3revo.js";import"./FieldBase-D95hzyfr.js";import"./Typography-DZA02yZr.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./useMenu-BMl9Yb_c.js";import"./InformationSquare-x0k9ph8l.js";const{expect:e,within:n}=__STORYBOOK_MODULE_TEST__,G={title:"Menu/Accessibility",component:b,parameters:{a11y:{test:"error"}}},d={args:{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"partyScope",groupId:"1",title:"Alle aktører",value:"ALL_PARTIES",checked:!0},{role:"radio",name:"partyScope",groupId:"2",title:"Personer",value:"PERSONS"},{role:"radio",name:"partyScope",groupId:"2",title:"Virksomheter",value:"COMPANIES"}]}},m={args:{open:!0,keyboardEvents:!0,items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"}]}},g={args:{open:!0,keyboardEvents:!0,items:[{id:"inbox",title:"Innboks",href:"#"},{id:"drafts",title:"Utkast",href:"#"}]}},h={args:{open:!0,keyboardEvents:!0,a11yMode:"listbox","aria-label":"Status",groups:{1:{title:"Velg status"},2:{title:"Annet"}},items:[{role:"checkbox",name:"status",groupId:"1",title:"Ulest",value:"unread",checked:!0},{role:"checkbox",name:"status",groupId:"1",title:"Krever handling",value:"requires-action"},{role:"checkbox",name:"status",groupId:"2",title:"Arkivert",value:"archived"}]},play:s(async({canvasElement:a})=>{const t=n(a).getByRole("listbox",{name:"Status"}),o=n(t).getByRole("group",{name:"Velg status"});e(n(o).getAllByRole("option")).toHaveLength(2),e(n(t).getByRole("group",{name:"Annet"})).toBeInTheDocument(),e(n(t).getAllByRole("option")).toHaveLength(3);const r=n(t).getByText("Velg status");e(r).toHaveAttribute("aria-hidden","true"),e(o).toHaveAttribute("aria-labelledby",r.id)},"play")},l={parameters:{screenshot:{skip:!0}},args:{a11yMode:"listbox","aria-label":"Status ...",groups:{1:{title:"Velg status"}},items:[{role:"checkbox",name:"unread",groupId:"1",title:"Ulest",value:"true"},{role:"checkbox",name:"status",groupId:"2",title:"Krever handling",value:"requires-action"},{role:"checkbox",name:"status",groupId:"2",title:"Avventer",value:"awaiting"},{role:"checkbox",name:"status",groupId:"3",title:"Ingen status",value:"undefined"}]},play:s(async({canvasElement:a})=>{const o=n(a).getByRole("listbox",{name:"Velg status"});e(n(o).queryAllByRole("group")).toHaveLength(0),e(n(o).getAllByRole("option")).toHaveLength(4),e(n(o).getByText("Velg status")).toHaveAttribute("aria-hidden","true")},"play")},c={parameters:{screenshot:{skip:!0}},args:{...l.args,virtualized:!0},play:s(async({canvasElement:a})=>{const o=await n(a).findByRole("listbox",{name:"Velg status"});e(n(o).queryAllByRole("group")).toHaveLength(0);const r=await n(o).findAllByRole("option");e(r).toHaveLength(4),e(r.map(i=>i.getAttribute("aria-posinset"))).toEqual(["1","2","3","4"]),e(r.every(i=>i.getAttribute("aria-setsize")==="4")).toBe(!0)},"play")},p={parameters:{screenshot:{skip:!0}},args:{a11yMode:"listbox","aria-label":"Aktører",items:[{id:"a",title:"Alfa Bar & Brød",description:"Org.nr. 551 415 161, hovedenhet",badge:{label:"Slettet"}},{id:"b",title:"Alfa Bar & Brød",description:"Org.nr. 551 415 162, underenhet"},{id:"c",title:"Innboks",count:3},{id:"d",title:"Uten mer"}]},play:s(async({canvasElement:a})=>{const t=n(a).getAllByRole("option");e(t[0]).toHaveAccessibleName("Alfa Bar & Brød"),e(t[0]).toHaveAccessibleDescription("Org.nr. 551 415 161, hovedenhet Slettet"),e(t[1]).toHaveAccessibleName("Alfa Bar & Brød"),e(t[1]).toHaveAccessibleDescription("Org.nr. 551 415 162, underenhet"),e(t[2]).toHaveAccessibleName("Innboks"),e(t[2]).toHaveAccessibleDescription("3"),e(t[3]).not.toHaveAttribute("aria-describedby")},"play")},u={args:{a11yMode:"navigation",groups:{main:{},shortcuts:{title:"Snarveier"}},items:[{id:"inbox",groupId:"main",title:"Innboks",href:"#",selected:!0,expanded:!0,items:[{id:"drafts",title:"Utkast",href:"#"},{id:"sent",title:"Sendt",href:"#"}]},{id:"more",groupId:"main",title:"Mer",expanded:!1,items:[{id:"bin",title:"Papirkurv",href:"#"}]},{id:"new",groupId:"shortcuts",title:"Nytt skjema",href:"#"},{id:"profile",groupId:"shortcuts",title:"Profil",href:"#"}]},play:s(async({canvasElement:a})=>{const t=n(a),o=t.getByRole("heading",{name:"Snarveier",level:2}),r=t.getByRole("list",{name:"Snarveier"});e(o.nextElementSibling).toBe(r),e(n(r).getAllByRole("listitem")).toHaveLength(2),e(a.querySelectorAll('[role="menu"], [role="menuitem"], [aria-haspopup]')).toHaveLength(0);const i=t.getByRole("link",{name:"Innboks"});e(i).not.toHaveAttribute("aria-expanded"),e(i).not.toHaveAttribute("aria-controls"),e(i).toHaveAttribute("aria-current","page"),e(t.getByRole("link",{name:"Utkast"})).toBeInTheDocument(),e(t.getByRole("button",{name:"Mer"})).toHaveAttribute("aria-expanded","false")},"play")},Y=["RadioOptions","CheckboxOptions","LinkOptions","GroupHeading","ListTitle","ListTitleVirtualized","ItemDescription","NavigationHeadings"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    keyboardEvents: true,
    items: [{
      role: 'radio',
      name: 'partyScope',
      groupId: '1',
      title: 'Alle aktører',
      value: 'ALL_PARTIES',
      checked: true
    }, {
      role: 'radio',
      name: 'partyScope',
      groupId: '2',
      title: 'Personer',
      value: 'PERSONS'
    }, {
      role: 'radio',
      name: 'partyScope',
      groupId: '2',
      title: 'Virksomheter',
      value: 'COMPANIES'
    }]
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    keyboardEvents: true,
    items: [{
      role: 'checkbox',
      name: 'status',
      groupId: '1',
      title: 'Ulest',
      value: 'unread',
      checked: true
    }, {
      role: 'checkbox',
      name: 'status',
      groupId: '1',
      title: 'Krever handling',
      value: 'requires-action'
    }]
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    keyboardEvents: true,
    items: [{
      id: 'inbox',
      title: 'Innboks',
      href: '#'
    }, {
      id: 'drafts',
      title: 'Utkast',
      href: '#'
    }]
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    keyboardEvents: true,
    a11yMode: 'listbox',
    'aria-label': 'Status',
    groups: {
      1: {
        title: 'Velg status'
      },
      2: {
        title: 'Annet'
      }
    },
    items: [{
      role: 'checkbox',
      name: 'status',
      groupId: '1',
      title: 'Ulest',
      value: 'unread',
      checked: true
    }, {
      role: 'checkbox',
      name: 'status',
      groupId: '1',
      title: 'Krever handling',
      value: 'requires-action'
    }, {
      role: 'checkbox',
      name: 'status',
      groupId: '2',
      title: 'Arkivert',
      value: 'archived'
    }]
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const listbox = within(canvasElement).getByRole('listbox', {
      name: 'Status'
    });

    // A group title is the name of its group. It is not an item, and it is not read on its own.
    const group = within(listbox).getByRole('group', {
      name: 'Velg status'
    });
    expect(within(group).getAllByRole('option')).toHaveLength(2);
    expect(within(listbox).getByRole('group', {
      name: 'Annet'
    })).toBeInTheDocument();
    expect(within(listbox).getAllByRole('option')).toHaveLength(3);
    const title = within(listbox).getByText('Velg status');
    expect(title).toHaveAttribute('aria-hidden', 'true');
    expect(group).toHaveAttribute('aria-labelledby', title.id);
  }
}`,...h.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  // Behaviour only, the look is covered by the other Menu stories.
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    a11yMode: 'listbox',
    'aria-label': 'Status ...',
    groups: {
      1: {
        title: 'Velg status'
      }
    },
    items: [{
      role: 'checkbox',
      name: 'unread',
      groupId: '1',
      title: 'Ulest',
      value: 'true'
    }, {
      role: 'checkbox',
      name: 'status',
      groupId: '2',
      title: 'Krever handling',
      value: 'requires-action'
    }, {
      role: 'checkbox',
      name: 'status',
      groupId: '2',
      title: 'Avventer',
      value: 'awaiting'
    }, {
      role: 'checkbox',
      name: 'status',
      groupId: '3',
      title: 'Ingen status',
      value: 'undefined'
    }]
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);

    // The visible title is the name of the list, and every option belongs directly to the list.
    const listbox = canvas.getByRole('listbox', {
      name: 'Velg status'
    });
    expect(within(listbox).queryAllByRole('group')).toHaveLength(0);
    expect(within(listbox).getAllByRole('option')).toHaveLength(4);
    expect(within(listbox).getByText('Velg status')).toHaveAttribute('aria-hidden', 'true');
  }
}`,...l.parameters?.docs?.source},description:{story:`Groups are often used only to draw dividers, with one title on the first group that is really the title
of the whole list. That title names the list. It is not a group of its own around the first options.`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    ...ListTitle.args,
    virtualized: true
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const listbox = await canvas.findByRole('listbox', {
      name: 'Velg status'
    });
    expect(within(listbox).queryAllByRole('group')).toHaveLength(0);
    const options = await within(listbox).findAllByRole('option');
    expect(options).toHaveLength(4);
    expect(options.map(option => option.getAttribute('aria-posinset'))).toEqual(['1', '2', '3', '4']);
    expect(options.every(option => option.getAttribute('aria-setsize') === '4')).toBe(true);
  }
}`,...c.parameters?.docs?.source},description:{story:"The same in a virtualized list, where each option also states its position among all of them.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  // Behaviour only, the look is covered by the other Menu stories.
  parameters: {
    screenshot: {
      skip: true
    }
  },
  args: {
    a11yMode: 'listbox',
    'aria-label': 'Aktører',
    items: [{
      id: 'a',
      title: 'Alfa Bar & Brød',
      description: 'Org.nr. 551 415 161, hovedenhet',
      badge: {
        label: 'Slettet'
      }
    }, {
      id: 'b',
      title: 'Alfa Bar & Brød',
      description: 'Org.nr. 551 415 162, underenhet'
    }, {
      id: 'c',
      title: 'Innboks',
      count: 3
    }, {
      id: 'd',
      title: 'Uten mer'
    }]
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const options = within(canvasElement).getAllByRole('option');

    // Two accounts with the same name can be told apart, and the name itself stays just the title.
    expect(options[0]).toHaveAccessibleName('Alfa Bar & Brød');
    expect(options[0]).toHaveAccessibleDescription('Org.nr. 551 415 161, hovedenhet Slettet');
    expect(options[1]).toHaveAccessibleName('Alfa Bar & Brød');
    expect(options[1]).toHaveAccessibleDescription('Org.nr. 551 415 162, underenhet');
    expect(options[2]).toHaveAccessibleName('Innboks');
    expect(options[2]).toHaveAccessibleDescription('3');
    expect(options[3]).not.toHaveAttribute('aria-describedby');
  }
}`,...p.parameters?.docs?.source},description:{story:"The title is the name of an item. Count, description and badge are read after it, as its description.",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    a11yMode: 'navigation',
    groups: {
      main: {},
      shortcuts: {
        title: 'Snarveier'
      }
    },
    items: [{
      id: 'inbox',
      groupId: 'main',
      title: 'Innboks',
      href: '#',
      selected: true,
      expanded: true,
      items: [{
        id: 'drafts',
        title: 'Utkast',
        href: '#'
      }, {
        id: 'sent',
        title: 'Sendt',
        href: '#'
      }]
    }, {
      id: 'more',
      groupId: 'main',
      title: 'Mer',
      expanded: false,
      items: [{
        id: 'bin',
        title: 'Papirkurv',
        href: '#'
      }]
    }, {
      id: 'new',
      groupId: 'shortcuts',
      title: 'Nytt skjema',
      href: '#'
    }, {
      id: 'profile',
      groupId: 'shortcuts',
      title: 'Profil',
      href: '#'
    }]
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);

    // The title can be reached with heading navigation, and names the list that follows it.
    const heading = canvas.getByRole('heading', {
      name: 'Snarveier',
      level: 2
    });
    const shortcuts = canvas.getByRole('list', {
      name: 'Snarveier'
    });
    expect(heading.nextElementSibling).toBe(shortcuts);
    expect(within(shortcuts).getAllByRole('listitem')).toHaveLength(2);

    // Nothing in a plain list is a menu.
    expect(canvasElement.querySelectorAll('[role="menu"], [role="menuitem"], [aria-haspopup]')).toHaveLength(0);

    // A link with sub-items takes the user somewhere. It does not open and close them, so it has no expanded state.
    const inbox = canvas.getByRole('link', {
      name: 'Innboks'
    });
    expect(inbox).not.toHaveAttribute('aria-expanded');
    expect(inbox).not.toHaveAttribute('aria-controls');
    expect(inbox).toHaveAttribute('aria-current', 'page');
    expect(canvas.getByRole('link', {
      name: 'Utkast'
    })).toBeInTheDocument();

    // A button that shows and hides its sub-items does.
    expect(canvas.getByRole('button', {
      name: 'Mer'
    })).toHaveAttribute('aria-expanded', 'false');
  }
}`,...u.parameters?.docs?.source},description:{story:"In a plain list of links each group title is a real heading, followed by its own list.",...u.parameters?.docs?.description}}};export{m as CheckboxOptions,h as GroupHeading,p as ItemDescription,g as LinkOptions,l as ListTitle,c as ListTitleVirtualized,u as NavigationHeadings,d as RadioOptions,Y as __namedExportsOrder,G as default};
