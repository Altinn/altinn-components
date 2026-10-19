var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a7 as e}from"./iframe-BhbNl8M-.js";import{S as I}from"./ArrowRedo-B4ji5whx.js";import{S as k}from"./EyeClosed-BwhjKXuQ.js";import{S as w}from"./Archive-CfOkFSG4.js";import{S as B}from"./Trash-Df4Pkq18.js";import{S as D}from"./ClockDashed-CjBrcx7s.js";import{C as a}from"./ContextMenu-Ij8B0w81.js";import{i as u}from"./inboxSearchResults-CmlCdPtI.js";import{S as d}from"./TeddyBear-DGOfjC8q.js";import{L as h}from"./List-CK1afVUo.js";import{D as g}from"./DialogListItem-DlQpD0zb.js";import{L as y}from"./ListItem-BZwC__IQ.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./SearchField-ClYBiZmS.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./FieldBase--SCvu2WQ.js";import"./Typography-DcyIPmTi.js";import"./useHighlightedText-LhTntwcL.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./Input-jGspNcB3.js";import"./useMenu-6KerkDf-.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./Heading-Cykhux0L.js";import"./ItemControls-Enh4UL9O.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./ChevronRight-DG59p-Nv.js";import"./InformationSquare-9qL3pT6L.js";import"./MenuElipsisHorizontal-BHZ3A16x.js";import"./dialogs-Y2hBgqCl.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BFWeaoMi.js";import"./AttachmentList-D0ts3BtR.js";import"./AttachmentLink-C9qZJGLd.js";import"./File-CtbY2wj6.js";import"./Section-w9Om4z74.js";import"./Flex-ywhhAUvJ.js";import"./TransmissionList-DOZNYW5F.js";import"./Transmission-BGQuJZz1.js";import"./SeenByLog-jHaMO83N.js";import"./SeenByLogItem-C7e2jWPn.js";import"./Byline-Dz5EAti2.js";import"./SeenByLogButton-BqPCRn1z.js";import"./Divider-DT7uBvpy.js";import"./DialogActions-y3xqi89O.js";import"./ButtonGroup-Tx5tOZpy.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-H82chU0B.js";import"./ItemLink-BMM2GMUL.js";import"./DialogByline-CfSUrI6c.js";import"./DialogMetadata-C-ToCX0j.js";import"./DialogStatus-BYy6v-tB.js";import"./Paperclip-5XsvK0HN.js";import"./Files-oc8U2fk6.js";import"./MetaBase-D_U2C_FB.js";import"./MetaItem-C6R7FBa0.js";import"./ProgressIcon-CSOT5UhP.js";import"./ChevronUp-Dq4__2Sc.js";import"./ChevronDown-FDOS9kby.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{m as Default,p as DialogControls,c as ListControls,Gt as __namedExportsOrder,zt as default};
