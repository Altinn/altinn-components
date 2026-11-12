var y=Object.defineProperty;var o=(t,i)=>y(t,"name",{value:i,configurable:!0});import{a6 as l}from"./iframe-CrglqwQn.js";import{M as m}from"./SearchField-C2qhyCtD.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-C-uYCvZ7.js";import"./MenuListItem-BrJu3vrY.js";import"./MenuListDivider-BYAuSbm9.js";import"./MenuItem-BOpoNs7B.js";import"./CheckboxUncheckedIcon-CXEG0Svy.js";import"./RadioUncheckedIcon-BvYRqxVQ.js";import"./ItemMedia-CKHqoxmK.js";import"./Avatar-CdjH483A.js";import"./AvatarGroup-BVlT7mXX.js";import"./ItemLabel-C8AtzUlo.js";import"./Heading-Cue2sNHi.js";import"./useHighlightedText-BwDaK6ea.js";import"./ItemControls-BCjOivMY.js";import"./Badge-DecVHfU_.js";import"./Tooltip-C3l4V9U1.js";import"./ChevronRight-DGfPuTVb.js";import"./FieldBase-B81pLsMF.js";import"./Typography-BczTYRHT.js";import"./Field-2w0B3_JZ.js";import"./Label-DGjLhU1K.js";import"./Input-CFGd0v58.js";import"./useMenu-8J-CXIB0.js";import"./InformationSquare-BOQji3ZT.js";const{expect:e,userEvent:a,waitFor:n}=__STORYBOOK_MODULE_TEST__,U={title:"Menu/KeyboardNav",component:m};let w=!1;const s=o(t=>t.querySelector('[data-active="true"]')?.textContent??"","activeText"),p={render:o(()=>l.jsx(m,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:o(()=>{w=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:o(async({canvasElement:t})=>{w=!1,t.querySelector('ul[role="menu"]').focus(),await n(()=>e(s(t)).toContain("Alpha")),await a.keyboard("{ArrowDown}"),await n(()=>e(s(t)).toContain("Omega")),e(s(t)).not.toContain("Påkjørt Elg AS"),await a.keyboard("{ArrowDown}"),await n(()=>e(s(t)).toContain("Alpha")),[...t.querySelectorAll('[role="menuitemradio"]')].find(r=>r.textContent?.includes("Påkjørt Elg AS")).click(),e(w).toBe(!1)},"play")};let u=[];const c={parameters:{screenshot:{skip:!0}},render:o(()=>l.jsxs(l.Fragment,{children:[l.jsx("button",{type:"button",children:"Outside"}),l.jsx(m,{id:"scoped",open:!0,keyboardEvents:!0,keyboardScope:"focus",a11yMode:"listbox","aria-label":"Bokstaver",items:["Alpha","Beta","Gamma","Beta to"].map(t=>({title:t,onClick:o(()=>{u.push(t)},"onClick")}))})]}),"render"),play:o(async({canvasElement:t})=>{u=[];const i=t.querySelector('ul[role="listbox"]'),v=t.querySelector("button"),r=o(()=>t.ownerDocument.getElementById(i.getAttribute("aria-activedescendant")??""),"active");e(i.id).toBe("scoped-listbox"),e(i).toHaveAccessibleName("Bokstaver"),v.focus(),await n(()=>e(r()).toHaveTextContent("Alpha")),await a.keyboard("{ArrowDown}{End}g{Enter}"),e(r()).toHaveTextContent("Alpha"),e(u).toEqual([]),i.focus(),await a.keyboard("{ArrowDown}"),await n(()=>e(r()).toHaveTextContent("Beta")),await a.keyboard("{End}"),await n(()=>e(r()).toHaveTextContent("Beta to")),await a.keyboard("{Home}"),await n(()=>e(r()).toHaveTextContent("Alpha")),await a.keyboard("b"),await n(()=>e(r()?.textContent?.trim()).toBe("Beta")),await a.keyboard("b"),await n(()=>e(r()?.textContent?.trim()).toBe("Beta to")),await a.keyboard("b"),await n(()=>e(r()?.textContent?.trim()).toBe("Beta")),await a.keyboard(" "),await a.keyboard("{Enter}"),e(u).toEqual(["Beta","Beta"])},"play")},d={parameters:{screenshot:{skip:!0}},render:o(()=>l.jsx(m,{id:"hidden-items",open:!0,keyboardEvents:!0,keyboardScope:"focus","aria-label":"Handlinger",groups:{c:{hidden:!0}},items:[{groupId:"a",title:"Flytt til arkiv"},{groupId:"a",title:"Flytt til papirkurv"},{groupId:"a",title:"Sett av",hidden:!0},{groupId:"a",title:"Aktivitetslogg"},{groupId:"c",title:"I skjult gruppe"}]}),"render"),play:o(async({canvasElement:t})=>{const i=t.querySelector('ul[role="menu"]');i.focus(),await n(()=>e(s(t)).toContain("Flytt til arkiv")),await a.keyboard("{ArrowDown}"),await n(()=>e(s(t)).toContain("Flytt til papirkurv")),await a.keyboard("{ArrowDown}"),await n(()=>e(s(t)).toContain("Aktivitetslogg")),e(i.getAttribute("aria-activedescendant")).toBe(t.querySelector('[data-active="true"]')?.id),await a.keyboard("{End}"),await n(()=>e(s(t)).toContain("Aktivitetslogg")),await a.keyboard("{ArrowDown}"),await n(()=>e(s(t)).toContain("Flytt til arkiv"))},"play")},W=["SkipsDisabledReachesLast","ScopedKeys","SkipsHiddenItems"];p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Menu open keyboardEvents items={[{
    role: 'radio',
    name: 'actor',
    value: 'a',
    title: 'Alpha'
  }, {
    role: 'radio',
    name: 'actor',
    value: 'b',
    title: 'Påkjørt Elg AS',
    disabled: true,
    onClick: () => {
      disabledClicked = true;
    }
  }, {
    role: 'radio',
    name: 'actor',
    value: 'c',
    title: 'Omega'
  }]} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    disabledClicked = false;
    const list = canvasElement.querySelector('ul[role="menu"]') as HTMLElement;
    list.focus();
    await waitFor(() => expect(activeText(canvasElement)).toContain('Alpha'));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Omega'));
    expect(activeText(canvasElement)).not.toContain('Påkjørt Elg AS');
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Alpha'));
    const disabled = [...canvasElement.querySelectorAll('[role="menuitemradio"]')].find(el => el.textContent?.includes('Påkjørt Elg AS')) as HTMLElement;
    disabled.click();
    expect(disabledClicked).toBe(false);
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  // Behaviour only, the look is covered by the other Menu stories.
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <>
      <button type="button">Outside</button>
      <Menu id="scoped" open keyboardEvents keyboardScope="focus" a11yMode="listbox" aria-label="Bokstaver" items={['Alpha', 'Beta', 'Gamma', 'Beta to'].map(title => ({
      title,
      onClick: () => {
        selected.push(title);
      }
    }))} />
    </>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    selected = [];
    const list = canvasElement.querySelector('ul[role="listbox"]') as HTMLElement;
    const outside = canvasElement.querySelector('button') as HTMLElement;
    const active = () => canvasElement.ownerDocument.getElementById(list.getAttribute('aria-activedescendant') ?? '');
    expect(list.id).toBe('scoped-listbox');
    expect(list).toHaveAccessibleName('Bokstaver');

    // Focus is on another control: its keys are its own.
    outside.focus();
    await waitFor(() => expect(active()).toHaveTextContent('Alpha'));
    await userEvent.keyboard('{ArrowDown}{End}g{Enter}');
    expect(active()).toHaveTextContent('Alpha');
    expect(selected).toEqual([]);

    // Focus is on the list: the keys move its active item.
    list.focus();
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(active()).toHaveTextContent('Beta'));
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(active()).toHaveTextContent('Beta to'));
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(active()).toHaveTextContent('Alpha'));

    // Type-ahead goes to the next item starting with the letter, and wraps.
    await userEvent.keyboard('b');
    await waitFor(() => expect(active()?.textContent?.trim()).toBe('Beta'));
    await userEvent.keyboard('b');
    await waitFor(() => expect(active()?.textContent?.trim()).toBe('Beta to'));
    await userEvent.keyboard('b');
    await waitFor(() => expect(active()?.textContent?.trim()).toBe('Beta'));

    // Space and Enter both run the active item.
    await userEvent.keyboard(' ');
    await userEvent.keyboard('{Enter}');
    expect(selected).toEqual(['Beta', 'Beta']);
  }
}`,...c.parameters?.docs?.source},description:{story:'With `keyboardScope="focus"` the keys only act while focus is on the list.',...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <Menu id="hidden-items" open keyboardEvents keyboardScope="focus" aria-label="Handlinger" groups={{
    c: {
      hidden: true
    }
  }} items={[{
    groupId: 'a',
    title: 'Flytt til arkiv'
  }, {
    groupId: 'a',
    title: 'Flytt til papirkurv'
  }, {
    groupId: 'a',
    title: 'Sett av',
    hidden: true
  }, {
    groupId: 'a',
    title: 'Aktivitetslogg'
  }, {
    groupId: 'c',
    title: 'I skjult gruppe'
  }]} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const list = canvasElement.querySelector('ul[role="menu"]') as HTMLElement;
    list.focus();
    await waitFor(() => expect(activeText(canvasElement)).toContain('Flytt til arkiv'));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Flytt til papirkurv'));

    // The next shown item, not the hidden one after it.
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Aktivitetslogg'));
    expect(list.getAttribute('aria-activedescendant')).toBe(canvasElement.querySelector('[data-active="true"]')?.id);

    // The last shown item is the end, not the item in the hidden group.
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Aktivitetslogg'));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Flytt til arkiv'));
  }
}`,...d.parameters?.docs?.source},description:{story:"Keys only move through items that are shown. A hidden item, or one in a hidden group, is skipped.",...d.parameters?.docs?.description}}};export{c as ScopedKeys,p as SkipsDisabledReachesLast,d as SkipsHiddenItems,W as __namedExportsOrder,U as default};
