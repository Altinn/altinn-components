var S=Object.defineProperty;var a=(e,r)=>S(e,"name",{value:r,configurable:!0});import{a7 as t}from"./iframe-xlSYDLmX.js";import{S as b}from"./SelectDateFilter-CpkeoCW5.js";import{t as u}from"./example.data-Ib3Mod1n.js";import{a as v}from"./example.hooks-DgjoooAt.js";import{T as f,a as g}from"./Toolbar-CFX4YYjF.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-C1VHk2tM.js";import"./MenuItem-BLhJ1hxZ.js";import"./CheckboxUncheckedIcon-DH-Lidl1.js";import"./RadioUncheckedIcon-C7ew2nKt.js";import"./ItemMedia-DF0c3SDh.js";import"./Avatar-DElWOLnF.js";import"./AvatarGroup-Dx8NgiU3.js";import"./ItemLabel-eTSb-Z0L.js";import"./Heading-DK8bpf-l.js";import"./useHighlightedText-CTgwY4NQ.js";import"./ItemControls-Dlw9_sua.js";import"./Badge-xtJTwQdy.js";import"./Tooltip-DtRHHtRs.js";import"./ChevronRight-WLOtysjI.js";import"./ArrowUndo-5Pl34Luc.js";import"./MenuListDivider-B_1so_ti.js";import"./Fieldset-0GtgxPum.js";import"./Field-mWeCiqLp.js";import"./Label-DW6M7Jnl.js";import"./Input-r4bRN1Qy.js";import"./SearchField-Cm1bebf2.js";import"./MagnifyingGlass-DJJa4Uj5.js";import"./FieldBase-CKEKDcDW.js";import"./Typography-CBKRdQ-b.js";import"./useMenu-C7Dhr05-.js";import"./InformationSquare-DlLj2oH8.js";import"./Paperclip-Ys9tITkh.js";import"./Eye-B1O1_9Cv.js";import"./MenuHamburger-Di3wOkSc.js";import"./useDropdownMenuController-DGUZzvC0.js";import"./useIsDesktop-6yxnkXHf.js";import"./Dropdown-CsBuGo6i.js";import"./Plus-B94II9lJ.js";import"./ButtonGroup-CmZy2FTH.js";import"./ButtonGroupDivider-VDvXkf2q.js";import"./ChevronUpDown-BMjPc945.js";import"./ToolbarMenu-DHpy7bGP.js";import"./ToolbarSearch-C7r9vTyz.js";const{expect:o,userEvent:F,waitFor:h,within:i}=__STORYBOOK_MODULE_TEST__,bt={title:"Toolbar/SelectDateFilter",component:b,parameters:{},args:{}},s=a(()=>{const e=v({filters:[{...u,as:b}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"Datepicker"),m=a(()=>{const e=v({filters:[{...u,as:b,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"RemovableDatepicker"),p=a(()=>{const e=u.items.map(n=>({...n,name:"date"})),r=v({filters:[{...u,items:e,name:"date",as:b}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"CustomName"),d={parameters:{screenshot:{skip:!0}},render:a(()=>t.jsx(s,{}),"render"),play:a(async({canvasElement:e})=>{const r=i(e),n=e.ownerDocument,x=await r.findByRole("button",{name:"Dato ...: Tid"});o(x).toHaveAttribute("aria-haspopup","dialog"),await F.click(x);const l=await i(n.body).findByRole("dialog",{name:"Dato ..."});o(x).toHaveAttribute("aria-controls",l.id);const c=i(l).getByRole("listbox");await h(()=>o(c.contains(n.activeElement)).toBe(!0)),o(c.id).toBeTruthy(),o(i(c).getAllByRole("option")).toHaveLength(7),o(n.querySelectorAll('[role="menu"], [role="datepicker"]')).toHaveLength(0),await F.click(i(c).getByRole("option",{name:"Spesifiser dato ..."}));const w=await i(l).findByRole("button",{name:"Tilbake"});await h(()=>o(w).toHaveFocus()),await F.click(w),await h(()=>o(i(l).getByRole("listbox").contains(n.activeElement)).toBe(!0))},"play")},xt=["Datepicker","RemovableDatepicker","CustomName","FocusFollowsTheView"];s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};export{p as CustomName,s as Datepicker,d as FocusFollowsTheView,m as RemovableDatepicker,xt as __namedExportsOrder,bt as default};
