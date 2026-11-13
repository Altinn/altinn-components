var S=Object.defineProperty;var a=(e,r)=>S(e,"name",{value:r,configurable:!0});import{a7 as t}from"./iframe-r-PzxnFG.js";import{S as b}from"./SelectDateFilter-7z5KWOoM.js";import{t as u}from"./example.data-JXRBO0CT.js";import{a as v}from"./example.hooks-CJzF6ukF.js";import{T as f,a as g}from"./Toolbar-Be6Tch-c.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-IXmILE2K.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ItemLabel-DE7oETkr.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronRight-DoF3revo.js";import"./ArrowUndo-BHFoGQzk.js";import"./MenuListDivider-DjMXmyAN.js";import"./Fieldset-CZCpLVdS.js";import"./Field-C8va_Ig3.js";import"./Label-dzQU0Yg2.js";import"./Input-BYbvd3yE.js";import"./SearchField-Cn8qUcxo.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-7vnMkGiQ.js";import"./FieldBase-D95hzyfr.js";import"./Typography-DZA02yZr.js";import"./useMenu-BMl9Yb_c.js";import"./InformationSquare-x0k9ph8l.js";import"./Paperclip-oc5U4BkP.js";import"./Eye-BC_-1Aae.js";import"./MenuHamburger-BBbrRald.js";import"./useDropdownMenuController-D2Eauaak.js";import"./useIsDesktop-Di7DAkKs.js";import"./Dropdown-tD-rtn-3.js";import"./Plus-C3gc2Iai.js";import"./ButtonGroup-tpSmkUGs.js";import"./ButtonGroupDivider-B1E5WcaK.js";import"./ChevronUpDown-HPDH3mEH.js";import"./ToolbarMenu-BxyYmvJJ.js";import"./ToolbarSearch-JhKmYWK0.js";const{expect:o,userEvent:F,waitFor:h,within:i}=__STORYBOOK_MODULE_TEST__,xt={title:"Toolbar/SelectDateFilter",component:b,parameters:{},args:{}},s=a(()=>{const e=v({filters:[{...u,as:b}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"Datepicker"),m=a(()=>{const e=v({filters:[{...u,as:b,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"RemovableDatepicker"),p=a(()=>{const e=u.items.map(n=>({...n,name:"date"})),r=v({filters:[{...u,items:e,name:"date",as:b}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"CustomName"),d={parameters:{screenshot:{skip:!0}},render:a(()=>t.jsx(s,{}),"render"),play:a(async({canvasElement:e})=>{const r=i(e),n=e.ownerDocument,x=await r.findByRole("button",{name:"Dato ...: Tid"});o(x).toHaveAttribute("aria-haspopup","dialog"),await F.click(x);const l=await i(n.body).findByRole("dialog",{name:"Dato ..."});o(x).toHaveAttribute("aria-controls",l.id);const c=i(l).getByRole("listbox");await h(()=>o(c.contains(n.activeElement)).toBe(!0)),o(c.id).toBeTruthy(),o(i(c).getAllByRole("option")).toHaveLength(7),o(n.querySelectorAll('[role="menu"], [role="datepicker"]')).toHaveLength(0),await F.click(i(c).getByRole("option",{name:"Spesifiser dato ..."}));const w=await i(l).findByRole("button",{name:"Tilbake"});await h(()=>o(w).toHaveFocus()),await F.click(w),await h(()=>o(i(l).getByRole("listbox").contains(n.activeElement)).toBe(!0))},"play")},Ft=["Datepicker","RemovableDatepicker","CustomName","FocusFollowsTheView"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      as: SelectDateFilter
    }],
    defaultFilterState: {}
  });
  return <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>;
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      as: SelectDateFilter,
      removable: true
    }],
    defaultFilterState: {}
  });
  return <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>;
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const items = timeFilter.items.map(item => {
    return {
      ...item,
      name: 'date'
    };
  });
  const inboxFilter = useInboxFilter({
    filters: [{
      ...timeFilter,
      items,
      name: 'date',
      as: SelectDateFilter
    }],
    defaultFilterState: {}
  });
  return <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>;
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  // Behaviour only, the look is covered by the stories above.
  parameters: {
    screenshot: {
      skip: true
    }
  },
  render: () => <Datepicker />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const doc = canvasElement.ownerDocument;

    // The panel holds a list and a date form, so the button opens a dialog.
    const button = await canvas.findByRole('button', {
      name: 'Dato ...: Tid'
    });
    expect(button).toHaveAttribute('aria-haspopup', 'dialog');
    await userEvent.click(button);
    const dialog = await within(doc.body).findByRole('dialog', {
      name: 'Dato ...'
    });
    expect(button).toHaveAttribute('aria-controls', dialog.id);
    const listbox = within(dialog).getByRole('listbox');
    await waitFor(() => expect(listbox.contains(doc.activeElement)).toBe(true));
    expect(listbox.id).toBeTruthy();
    expect(within(listbox).getAllByRole('option')).toHaveLength(7);
    expect(doc.querySelectorAll('[role="menu"], [role="datepicker"]')).toHaveLength(0);

    // Opening the date form removes the list. Focus moves to the first control in the form.
    await userEvent.click(within(listbox).getByRole('option', {
      name: 'Spesifiser dato ...'
    }));
    const back = await within(dialog).findByRole('button', {
      name: 'Tilbake'
    });
    await waitFor(() => expect(back).toHaveFocus());

    // Going back removes the form. Focus moves to the list.
    await userEvent.click(back);
    await waitFor(() => expect(within(dialog).getByRole('listbox').contains(doc.activeElement)).toBe(true));
  }
}`,...d.parameters?.docs?.source}}};export{p as CustomName,s as Datepicker,d as FocusFollowsTheView,m as RemovableDatepicker,Ft as __namedExportsOrder,xt as default};
