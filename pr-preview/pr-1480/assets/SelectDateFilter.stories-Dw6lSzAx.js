var S=Object.defineProperty;var n=(e,r)=>S(e,"name",{value:r,configurable:!0});import{a6 as t}from"./iframe-M-0W2Kc9.js";import{S as b}from"./SelectDateFilter-BWyJWeyC.js";import{t as u}from"./example.data-gzcHg1gk.js";import{a as v}from"./example.hooks-CYW1ZGZu.js";import{T as f,a as g}from"./Toolbar-CvbJikzK.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuListItem-liqRqbPT.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ItemLabel-lDW_MVeZ.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ChevronRight-e5zm3v6Y.js";import"./ArrowUndo-BbhWyJt8.js";import"./MenuListDivider-5CZ-K279.js";import"./Fieldset-Bscmb-Eq.js";import"./Field-CJDObndh.js";import"./Label-BfAsqjGj.js";import"./Input-PR-EPUfC.js";import"./SearchField-IrO9fkpT.js";import"./MagnifyingGlass-BCQWJszI.js";import"./FieldBase-Bv-PdLp_.js";import"./Typography-xHph4zf_.js";import"./useMenu-D1I6Xbj7.js";import"./InformationSquare-DDYjH-iE.js";import"./Paperclip-DpctCjls.js";import"./Eye-mvdxRCiO.js";import"./MenuHamburger-C2Da0bEq.js";import"./useDropdownMenuController-B592g0FD.js";import"./useIsDesktop-Cn7t9tR4.js";import"./Dropdown-DeOVVvS3.js";import"./Plus-DyAe2qPf.js";import"./ButtonGroup-C-A48uAy.js";import"./ButtonGroupDivider-BumEVR6W.js";import"./ChevronUpDown-CXgasQ1o.js";import"./ToolbarMenu-CSjJL_Ps.js";import"./ToolbarSearch-thdeVilr.js";const{expect:o,userEvent:F,waitFor:h,within:i}=__STORYBOOK_MODULE_TEST__,bt={title:"Toolbar/SelectDateFilter",component:b,parameters:{},args:{}},a=n(()=>{const e=v({filters:[{...u,as:b}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"Datepicker"),m=n(()=>{const e=v({filters:[{...u,as:b,removable:!0}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...e})}),t.jsx("hr",{}),JSON.stringify(e.filterState)]})},"RemovableDatepicker"),p=n(()=>{const e=u.items.map(s=>({...s,name:"date"})),r=v({filters:[{...u,items:e,name:"date",as:b}],defaultFilterState:{}});return t.jsxs("div",{children:[t.jsx(f,{children:t.jsx(g,{...r})}),t.jsx("hr",{}),JSON.stringify(r.filterState)]})},"CustomName"),d={parameters:{screenshot:{skip:!0}},render:n(()=>t.jsx(a,{}),"render"),play:n(async({canvasElement:e})=>{const r=i(e),s=e.ownerDocument,x=await r.findByRole("button",{name:"Dato ...: Tid"});o(x).toHaveAttribute("aria-haspopup","dialog"),await F.click(x);const l=await i(s.body).findByRole("dialog",{name:"Dato ..."});o(x).toHaveAttribute("aria-controls",l.id);const c=i(l).getByRole("listbox");await h(()=>o(c).toHaveFocus()),o(c.id).toBeTruthy(),o(i(c).getAllByRole("option")).toHaveLength(7),o(s.querySelectorAll('[role="menu"], [role="datepicker"]')).toHaveLength(0),await F.click(i(c).getByRole("option",{name:"Spesifiser dato ..."}));const w=await i(l).findByRole("button",{name:"Tilbake"});await h(()=>o(w).toHaveFocus()),await F.click(w),await h(()=>o(i(l).getByRole("listbox")).toHaveFocus())},"play")},xt=["Datepicker","RemovableDatepicker","CustomName","FocusFollowsTheView"];a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
