var S=Object.defineProperty;var n=(e,r)=>S(e,"name",{value:r,configurable:!0});import{a6 as t}from"./iframe-CqoHfDH7.js";import{S as b}from"./SelectDateFilter-Cy127PgH.js";import{t as u}from"./example.data-BbNjYMip.js";import{a as v}from"./example.hooks-CcyhbWKI.js";import{T as f,a as g}from"./Toolbar-DqOfbzde.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-CqFpgSR1.js";import"./MenuItem-C8OuBr6l.js";import"./CheckboxUncheckedIcon-gMScnkcn.js";import"./RadioUncheckedIcon-BxdAbBT7.js";import"./ItemMedia-Sf1LoSEA.js";import"./Avatar-Co74uJ_O.js";import"./AvatarGroup-DYss91lm.js";import"./ItemLabel-Bv-toCFX.js";import"./Heading-CDVcG6kV.js";import"./useHighlightedText-CSyjuktp.js";import"./ItemControls-BKR8KplG.js";import"./Badge-DFDtKU_w.js";import"./Tooltip-D8wWP0Tl.js";import"./ChevronRight-jzUrV1wz.js";import"./ArrowUndo-CAunjfEO.js";import"./MenuListDivider-BNYPxbgd.js";import"./Fieldset-DwzMC0K1.js";import"./Field-CmdZ93FX.js";import"./Label-Cw8gPh7D.js";import"./Input-Dq2UXB3O.js";import"./SearchField-D-gn40zc.js";import"./MagnifyingGlass-BfkFvkOD.js";import"./FieldBase-B4VpsYUB.js";import"./Typography-rh9OwAWr.js";import"./useMenu-DC909dob.js";import"./InformationSquare-B2hWOsOH.js";import"./Paperclip-DtEp_-9S.js";import"./Eye-DGapNAbA.js";import"./MenuHamburger-DSLGNBpT.js";import"./useDropdownMenuController-jHmlB5TA.js";import"./useIsDesktop-DOYNI_br.js";import"./Dropdown-BxvitPqI.js";import"./Plus-DQZnEDJR.js";import"./ButtonGroup-Cf6Ux1xO.js";import"./ButtonGroupDivider-CW6_6-9r.js";import"./ChevronUpDown-CSOM-jEc.js";import"./ToolbarMenu-nPJI5_t4.js";import"./ToolbarSearch-Co1pCbtk.js";const{expect:o,userEvent:F,waitFor:h,within:i}=__STORYBOOK_MODULE_TEST__,bt={title:"Toolbar/SelectDateFilter",component:b,parameters:{},args:{}},a=n(()=>{const e=v({filters:[{...u,as:b}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"Datepicker"),m=n(()=>{const e=v({filters:[{...u,as:b,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"RemovableDatepicker"),p=n(()=>{const e=u.items.map(s=>({...s,name:"date"})),r=v({filters:[{...u,items:e,name:"date",as:b}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"CustomName"),d={parameters:{screenshot:{skip:!0}},render:n(()=>t.jsx(a,{}),"render"),play:n(async({canvasElement:e})=>{const r=i(e),s=e.ownerDocument,x=await r.findByRole("button",{name:"Dato ...: Tid"});o(x).toHaveAttribute("aria-haspopup","dialog"),await F.click(x);const l=await i(s.body).findByRole("dialog",{name:"Dato ..."});o(x).toHaveAttribute("aria-controls",l.id);const c=i(l).getByRole("listbox");await h(()=>o(c).toHaveFocus()),o(c.id).toBeTruthy(),o(i(c).getAllByRole("option")).toHaveLength(7),o(s.querySelectorAll('[role="menu"], [role="datepicker"]')).toHaveLength(0),await F.click(i(c).getByRole("option",{name:"Spesifiser dato ..."}));const w=await i(l).findByRole("button",{name:"Tilbake"});await h(()=>o(w).toHaveFocus()),await F.click(w),await h(()=>o(i(l).getByRole("listbox")).toHaveFocus())},"play")},xt=["Datepicker","RemovableDatepicker","CustomName","FocusFollowsTheView"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
    await waitFor(() => expect(listbox).toHaveFocus());
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
    await waitFor(() => expect(within(dialog).getByRole('listbox')).toHaveFocus());
  }
}`,...d.parameters?.docs?.source}}};export{p as CustomName,a as Datepicker,d as FocusFollowsTheView,m as RemovableDatepicker,xt as __namedExportsOrder,bt as default};
