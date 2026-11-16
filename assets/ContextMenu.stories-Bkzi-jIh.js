var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-DmXJhoHi.js";import{S as I}from"./ArrowRedo-BL3hyzbC.js";import{S as k}from"./EyeClosed-jDva9HJH.js";import{S as w}from"./Archive-C9lIxQaE.js";import{S as B}from"./Trash-xpT0Cazm.js";import{S as D}from"./ClockDashed-QdxModLZ.js";import{C as a}from"./ContextMenu-ONCJp8MR.js";import{i as u}from"./inboxSearchResults-7Zs6hBAP.js";import{S as d}from"./TeddyBear-CKmKEbk3.js";import{L as h}from"./List-B0PM0fvI.js";import{D as g}from"./DialogListItem-tT5dLP21.js";import{L as y}from"./ListItem-B6VvmXU-.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-AOASv4wb.js";import"./Dropdown-CroQAroQ.js";import"./SearchField-CmQy5YNq.js";import"./MagnifyingGlass-CDTvYECp.js";import"./MenuListItem-fE8Z_sJw.js";import"./MenuListDivider-DKZNTDIg.js";import"./MenuItem-C_9NXDrO.js";import"./CheckboxUncheckedIcon-THpi2fsF.js";import"./RadioUncheckedIcon-HRy4h_Iy.js";import"./ItemMedia-BhUDoeQn.js";import"./Avatar-Ct1BUX51.js";import"./AvatarGroup-jJ6DuwRZ.js";import"./ItemLabel-D6letihH.js";import"./Heading-DMD9BytY.js";import"./useHighlightedText-PrDe8r-L.js";import"./ItemControls-CqWny7dI.js";import"./Badge-BPEkC0lf.js";import"./Tooltip-DWnRPb8d.js";import"./ChevronRight-BBhULSEW.js";import"./FieldBase-BmJ_0UFe.js";import"./Typography-TuByLUlM.js";import"./Field-x0yE1z9d.js";import"./Label-Dmk4_kaT.js";import"./Input-BP2xOaTX.js";import"./useMenu-CAAj79LJ.js";import"./InformationSquare-Cf67cLsl.js";import"./dialogs-DevnDOKg.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BaWN6sgB.js";import"./AttachmentList-C2sePZrS.js";import"./File-DnbDKgFQ.js";import"./Section-Db3Vzokt.js";import"./Flex-B-7ly2La.js";import"./TransmissionList-BlvvgyOx.js";import"./Transmission-CI5wM7tj.js";import"./SeenByLog-B-T2-0Xh.js";import"./SeenByLogItem-DNfYcc88.js";import"./Byline-BCfahRVM.js";import"./SeenByLogButton-CavYM8bF.js";import"./Divider-Crxk48ty.js";import"./DialogActions-DkOQ-mNb.js";import"./ButtonGroup-BIAjr8pe.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DxatjkN9.js";import"./ItemLink-BEcGVWl4.js";import"./DialogByline-uuQaYowV.js";import"./DialogMetadata-CGQn3UW4.js";import"./DialogStatus-BQl5OyBa.js";import"./Paperclip-BPNfytGj.js";import"./Files-CPDWfEKa.js";import"./Checkmark-DUuS217X.js";import"./MetaBase-C6OU-U0Q.js";import"./MetaItem-CJfJ9LJa.js";import"./ProgressIcon-6Q1W9XYF.js";import"./ChevronUp-kg_frLlM.js";import"./ChevronDown-CCUi9si5.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'context-menu-default'
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // open the context menu
    const canvas = within(canvasElement);
    // menu items are rendered via a React portal into document.body
    const body = within(document.body);
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // ensure that the context menu is visible
    await expect(body.getAllByRole('menu')[0]).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('menu')).not.toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...p.parameters?.docs?.source}}};export{m as Default,p as DialogControls,c as ListControls,zt as __namedExportsOrder,Yt as default};
