var b=Object.defineProperty;var r=(e,i)=>b(e,"name",{value:i,configurable:!0});import{a6 as l}from"./iframe-CqoHfDH7.js";import{M as u}from"./SearchField-D-gn40zc.js";import"./preload-helper-Cc2_yIPf.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuListDivider-BNYPxbgd.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemMedia-Sf1LoSEA.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./ItemLabel-Bv-toCFX.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./ChevronRight-jzUrV1wz.js";import"./FieldBase-B4VpsYUB.js";import"./Typography-rh9OwAWr.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./useMenu-DC909dob.js";import"./InformationSquare-B2hWOsOH.js";const{expect:t,userEvent:a,waitFor:n}=__STORYBOOK_MODULE_TEST__,I={title:"Menu/KeyboardNav",component:u};let m=!1;const c=r(e=>e.querySelector('[data-active="true"]')?.textContent??"","activeText"),d={render:r(()=>l.jsx(u,{open:!0,keyboardEvents:!0,items:[{role:"radio",name:"actor",value:"a",title:"Alpha"},{role:"radio",name:"actor",value:"b",title:"Påkjørt Elg AS",disabled:!0,onClick:r(()=>{m=!0},"onClick")},{role:"radio",name:"actor",value:"c",title:"Omega"}]}),"render"),play:r(async({canvasElement:e})=>{m=!1,e.querySelector('ul[role="menu"]').focus(),await n(()=>t(c(e)).toContain("Alpha")),await a.keyboard("{ArrowDown}"),await n(()=>t(c(e)).toContain("Omega")),t(c(e)).not.toContain("Påkjørt Elg AS"),await a.keyboard("{ArrowDown}"),await n(()=>t(c(e)).toContain("Alpha")),[...e.querySelectorAll('[role="menuitemradio"]')].find(o=>o.textContent?.includes("Påkjørt Elg AS")).click(),t(m).toBe(!1)},"play")};let p=[];const s={parameters:{screenshot:{skip:!0}},render:r(()=>l.jsxs(l.Fragment,{children:[l.jsx("button",{type:"button",children:"Outside"}),l.jsx(u,{id:"scoped",open:!0,keyboardEvents:!0,keyboardScope:"focus",a11yMode:"listbox","aria-label":"Bokstaver",items:["Alpha","Beta","Gamma","Beta to"].map(e=>({title:e,onClick:r(()=>{p.push(e)},"onClick")}))})]}),"render"),play:r(async({canvasElement:e})=>{p=[];const i=e.querySelector('ul[role="listbox"]'),w=e.querySelector("button"),o=r(()=>e.ownerDocument.getElementById(i.getAttribute("aria-activedescendant")??""),"active");t(i.id).toBe("scoped-listbox"),t(i).toHaveAccessibleName("Bokstaver"),w.focus(),await n(()=>t(o()).toHaveTextContent("Alpha")),await a.keyboard("{ArrowDown}{End}g{Enter}"),t(o()).toHaveTextContent("Alpha"),t(p).toEqual([]),i.focus(),await a.keyboard("{ArrowDown}"),await n(()=>t(o()).toHaveTextContent("Beta")),await a.keyboard("{End}"),await n(()=>t(o()).toHaveTextContent("Beta to")),await a.keyboard("{Home}"),await n(()=>t(o()).toHaveTextContent("Alpha")),await a.keyboard("b"),await n(()=>t(o()?.textContent?.trim()).toBe("Beta")),await a.keyboard("b"),await n(()=>t(o()?.textContent?.trim()).toBe("Beta to")),await a.keyboard("b"),await n(()=>t(o()?.textContent?.trim()).toBe("Beta")),await a.keyboard(" "),await a.keyboard("{Enter}"),t(p).toEqual(["Beta","Beta"])},"play")},U=["SkipsDisabledReachesLast","ScopedKeys"];d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:'With `keyboardScope="focus"` the keys only act while focus is on the list.',...s.parameters?.docs?.description}}};export{s as ScopedKeys,d as SkipsDisabledReachesLast,U as __namedExportsOrder,I as default};
