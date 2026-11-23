var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-BW6sNfUG.js";import{S as I}from"./ArrowRedo-BLv9jZAx.js";import{S as k}from"./EyeClosed-v8fN1F_5.js";import{S as w}from"./Archive-B39KtXbP.js";import{S as B}from"./Trash-V_KyvxF_.js";import{S as D}from"./ClockDashed-BfnIbYm5.js";import{C as a}from"./ContextMenu-Ci0D4hVi.js";import{i as u}from"./inboxSearchResults-D_jLTZNr.js";import{S as d}from"./TeddyBear-Csp6ddA3.js";import{L as h}from"./List-LxK0i123.js";import{D as g}from"./DialogListItem-BTQnTNJJ.js";import{L as y}from"./ListItem-sjVLqN5k.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-BlHO4qrZ.js";import"./Dropdown-bOP-opo8.js";import"./SearchField--GRE4W__.js";import"./MagnifyingGlass-Drdd_pqG.js";import"./MenuListItem-BekZrZTE.js";import"./MenuListDivider-Bd4QDS3f.js";import"./MenuItem-C4PV3Kj2.js";import"./CheckboxUncheckedIcon-D8b9z956.js";import"./RadioUncheckedIcon-BmM-W-GL.js";import"./ItemMedia-C8rbfA3l.js";import"./Avatar-C64BSSKk.js";import"./AvatarGroup-Ccq8C8ES.js";import"./ItemLabel-Dcm3mA4k.js";import"./Heading-DZSCY0dD.js";import"./useHighlightedText-Dx6jhFuL.js";import"./ItemControls-Bqaen0yJ.js";import"./Badge-CSeOMfHV.js";import"./Tooltip-CNbHjlA7.js";import"./ChevronRight-DCXIgdRg.js";import"./FieldBase-CiEo5wf3.js";import"./Typography-DluWU8As.js";import"./Field-BCzysLpY.js";import"./Label-xW9KovlB.js";import"./Input-gnkfXNcC.js";import"./useMenu-uJdjEIIP.js";import"./InformationSquare-1mOGr1dD.js";import"./dialogs-DpwBE6yE.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Bp3g3Lm2.js";import"./AttachmentList-BWCGZTl1.js";import"./File-EcF4yKkc.js";import"./Section-C6OUO-lD.js";import"./Flex-Ws1WKTNd.js";import"./TransmissionList-B2xS_nRa.js";import"./Transmission-DpdlharP.js";import"./SeenByLog-BrBJVecU.js";import"./SeenByLogItem-ptPL9xwC.js";import"./Byline-BE-T5e6F.js";import"./SeenByLogButton-CCDPQlfs.js";import"./Divider-DHERf67l.js";import"./DialogActions-Fya3QccO.js";import"./ButtonGroup-CkPO8wDs.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CfaNBgoH.js";import"./ItemLink-BFgdINRy.js";import"./DialogByline-5oEfYL5u.js";import"./DialogMetadata-CBNGTHaB.js";import"./DialogStatus-CFf22qZm.js";import"./Paperclip-CSajDkLH.js";import"./Files-Cf0jZox9.js";import"./Checkmark-Br7Bq_3w.js";import"./MetaBase-DIGp6ZFg.js";import"./MetaItem-D4KY7mh3.js";import"./ProgressIcon-C2LRBEqd.js";import"./ChevronUp-D9Lqz4C3.js";import"./ChevronDown-CGVF_s9R.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
