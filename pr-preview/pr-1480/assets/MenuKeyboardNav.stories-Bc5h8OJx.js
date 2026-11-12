var k=Object.defineProperty;var i=(t,o)=>k(t,"name",{value:o,configurable:!0});import{a7 as c}from"./iframe-D6r7-MD4.js";import{M as p}from"./SearchField-xJmrCU7q.js";import"./preload-helper-Cc2_yIPf.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./MenuListItem-BIaSNRVF.js";import"./MenuListDivider-DoLEaBRc.js";import"./MenuItem-CVg-Aq96.js";import"./CheckboxUncheckedIcon-B9mzN8fM.js";import"./RadioUncheckedIcon-CaPqnsDK.js";import"./ItemMedia-CeccNKOc.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./ItemLabel-CjCW6exE.js";import"./Heading-BBX9eyEy.js";import"./useHighlightedText-ByiYciR_.js";import"./ItemControls-Cgg9ynEC.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./ChevronRight-B-ItEsH6.js";import"./FieldBase-BsGJArhX.js";import"./Typography-CHbDBJK8.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./Input-CtcmBtOO.js";import"./useMenu-BVbqxAfY.js";import"./InformationSquare-Rb80un_D.js";const{expect:e,userEvent:n,waitFor:a}=__STORYBOOK_MODULE_TEST__,W={title:"Menu/KeyboardNav",component:p};let y=!1;const s=i(t=>t.querySelector('[data-active="true"]')?.textContent??"","activeText"),w={render:i(()=>c.jsx(p,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:i(()=>{y=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:i(async({canvasElement:t})=>{y=!1,t.querySelector('ul[role="menu"]').focus(),await a(()=>e(s(t)).toContain("Alpha")),await n.keyboard("{ArrowDown}"),await a(()=>e(s(t)).toContain("Omega")),e(s(t)).not.toContain("Påkjørt Elg AS"),await n.keyboard("{ArrowDown}"),await a(()=>e(s(t)).toContain("Alpha")),[...t.querySelectorAll('[role="menuitemradio"]')].find(r=>r.textContent?.includes("Påkjørt Elg AS")).click(),e(y).toBe(!1)},"play")};let v=[];const d={parameters:{screenshot:{skip:!0}},render:i(()=>c.jsxs(c.Fragment,{children:[c.jsx("button",{type:"button",children:"Outside"}),c.jsx(p,{id:"scoped",open:!0,keyboardEvents:!0,keyboardScope:"focus",a11yMode:"listbox","aria-label":"Bokstaver",items:["Alpha","Beta","Gamma","Beta to"].map(t=>({title:t,onClick:i(()=>{v.push(t)},"onClick")}))})]}),"render"),play:i(async({canvasElement:t})=>{v=[];const o=t.querySelector('ul[role="listbox"]'),l=t.querySelector("button"),r=i(()=>t.querySelector('[data-active="true"]'),"active");e(o.id).toBe("scoped-listbox"),e(o).toHaveAccessibleName("Bokstaver"),l.focus(),await a(()=>e(r()).toHaveTextContent("Alpha")),await n.keyboard("{ArrowDown}{End}g{Enter}"),e(r()).toHaveTextContent("Alpha"),e(v).toEqual([]),o.focus(),await a(()=>e(r()).toHaveFocus()),await n.keyboard("{ArrowDown}"),await a(()=>e(r()).toHaveTextContent("Beta")),await n.keyboard("{End}"),await a(()=>e(r()).toHaveTextContent("Beta to")),await a(()=>e(r()).toHaveFocus()),await n.keyboard("{Home}"),await a(()=>e(r()).toHaveTextContent("Alpha")),await n.keyboard("b"),await a(()=>e(r()?.textContent?.trim()).toBe("Beta")),await n.keyboard("b"),await a(()=>e(r()?.textContent?.trim()).toBe("Beta to")),await n.keyboard("b"),await a(()=>e(r()?.textContent?.trim()).toBe("Beta")),await n.keyboard(" "),await n.keyboard("{Enter}"),e(v).toEqual(["Beta","Beta"])},"play")},u={parameters:{screenshot:{skip:!0}},render:i(()=>c.jsx(p,{id:"hidden-items",open:!0,keyboardEvents:!0,keyboardScope:"focus","aria-label":"Handlinger",groups:{c:{hidden:!0}},items:[{groupId:"a",title:"Flytt til arkiv"},{groupId:"a",title:"Flytt til papirkurv"},{groupId:"a",title:"Sett av",hidden:!0},{groupId:"a",title:"Aktivitetslogg"},{groupId:"c",title:"I skjult gruppe"}]}),"render"),play:i(async({canvasElement:t})=>{t.querySelector('ul[role="menu"]').focus(),await a(()=>e(s(t)).toContain("Flytt til arkiv")),await n.keyboard("{ArrowDown}"),await a(()=>e(s(t)).toContain("Flytt til papirkurv")),await n.keyboard("{ArrowDown}"),await a(()=>e(s(t)).toContain("Aktivitetslogg")),await a(()=>e(t.querySelector('[data-active="true"]')).toHaveFocus()),await n.keyboard("{End}"),await a(()=>e(s(t)).toContain("Aktivitetslogg")),await n.keyboard("{ArrowDown}"),await a(()=>e(s(t)).toContain("Flytt til arkiv"))},"play")},x=Array.from({length:300},(t,o)=>({id:`n-${o}`,title:`Nummer ${o+1}`})),m={parameters:{screenshot:{skip:!0}},render:i(()=>c.jsx(p,{id:"many",open:!0,virtualized:!0,keyboardEvents:!0,keyboardScope:"focus",a11yMode:"listbox","aria-label":"Nummer",items:x}),"render"),play:i(async({canvasElement:t})=>{const o=t.ownerDocument,l=t.querySelector('ul[role="listbox"]');l.focus(),await a(()=>e(o.activeElement).toHaveAttribute("role","option")),e(o.activeElement).toHaveTextContent("Nummer 1"),await n.keyboard("{End}"),await a(()=>e(o.activeElement?.textContent?.trim()).toBe("Nummer 300")),e(o.activeElement).toHaveAttribute("role","option"),e(o.activeElement).toHaveAttribute("aria-posinset","300"),e(o.activeElement).toHaveAttribute("aria-setsize","300");const r=o.activeElement;l.scrollTop=0,await new Promise(b=>setTimeout(b,200)),e(r.isConnected).toBe(!0),e(r).toHaveFocus(),await n.keyboard("{ArrowUp}"),await a(()=>e(o.activeElement?.textContent?.trim()).toBe("Nummer 299")),await n.keyboard("{Home}"),await a(()=>e(o.activeElement?.textContent?.trim()).toBe("Nummer 1"))},"play")},Y=["SkipsDisabledReachesLast","ScopedKeys","SkipsHiddenItems","VirtualizedRovingFocus"];w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    const active = () => canvasElement.querySelector<HTMLElement>('[data-active="true"]');
    expect(list.id).toBe('scoped-listbox');
    expect(list).toHaveAccessibleName('Bokstaver');

    // Focus is on another control: its keys are its own.
    outside.focus();
    await waitFor(() => expect(active()).toHaveTextContent('Alpha'));
    await userEvent.keyboard('{ArrowDown}{End}g{Enter}');
    expect(active()).toHaveTextContent('Alpha');
    expect(selected).toEqual([]);

    // Focus is on the list: it moves on to the active item, and the keys move both.
    list.focus();
    await waitFor(() => expect(active()).toHaveFocus());
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(active()).toHaveTextContent('Beta'));
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(active()).toHaveTextContent('Beta to'));
    await waitFor(() => expect(active()).toHaveFocus());
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
}`,...d.parameters?.docs?.source},description:{story:'With `keyboardScope="focus"` the keys only act while focus is on the list.',...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
    // Focus is on the item itself.
    await waitFor(() => expect(canvasElement.querySelector('[data-active="true"]')).toHaveFocus());

    // The last shown item is the end, not the item in the hidden group.
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Aktivitetslogg'));
    await userEvent.keyboard('{ArrowDown}');
    await waitFor(() => expect(activeText(canvasElement)).toContain('Flytt til arkiv'));
  }
}`,...u.parameters?.docs?.source},description:{story:"Keys only move through items that are shown. A hidden item, or one in a hidden group, is skipped.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <Menu id="many" open virtualized keyboardEvents keyboardScope="focus" a11yMode="listbox" aria-label="Nummer" items={manyItems} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const doc = canvasElement.ownerDocument;
    const list = canvasElement.querySelector('ul[role="listbox"]') as HTMLElement;
    list.focus();
    await waitFor(() => expect(doc.activeElement).toHaveAttribute('role', 'option'));
    expect(doc.activeElement).toHaveTextContent('Nummer 1');

    // End goes to the last row, which was not rendered, and focus follows.
    await userEvent.keyboard('{End}');
    await waitFor(() => expect(doc.activeElement?.textContent?.trim()).toBe('Nummer 300'));
    expect(doc.activeElement).toHaveAttribute('role', 'option');
    expect(doc.activeElement).toHaveAttribute('aria-posinset', '300');
    expect(doc.activeElement).toHaveAttribute('aria-setsize', '300');

    // Scrolled back to the top with the mouse, the focused row stays in the page with focus.
    const focused = doc.activeElement as HTMLElement;
    list.scrollTop = 0;
    await new Promise(r => setTimeout(r, 200));
    expect(focused.isConnected).toBe(true);
    expect(focused).toHaveFocus();

    // And the keys carry on from it.
    await userEvent.keyboard('{ArrowUp}');
    await waitFor(() => expect(doc.activeElement?.textContent?.trim()).toBe('Nummer 299'));
    await userEvent.keyboard('{Home}');
    await waitFor(() => expect(doc.activeElement?.textContent?.trim()).toBe('Nummer 1'));
  }
}`,...m.parameters?.docs?.source},description:{story:`Real focus in a virtualized list. Home and End go to rows that are not rendered yet, and the row with
focus stays rendered when it is scrolled out of view, so focus is never lost with it.`,...m.parameters?.docs?.description}}};export{d as ScopedKeys,w as SkipsDisabledReachesLast,u as SkipsHiddenItems,m as VirtualizedRovingFocus,Y as __namedExportsOrder,W as default};
