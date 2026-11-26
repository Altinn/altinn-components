var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-Dhr5kNpI.js";import{S as I}from"./ArrowRedo-DNXqeRWY.js";import{S as k}from"./EyeClosed-1ysEetj1.js";import{S as w}from"./Archive-CSWjZQYI.js";import{S as B}from"./Trash-DlyJC_yu.js";import{S as D}from"./ClockDashed-CsZP5RVc.js";import{C as a}from"./ContextMenu-BSYfi7oi.js";import{i as u}from"./inboxSearchResults-BB1pUcY8.js";import{S as d}from"./TeddyBear-BX2GJNzx.js";import{L as h}from"./List-CfCaM-vI.js";import{D as g}from"./DialogListItem-9C5lPyLc.js";import{L as y}from"./ListItem-DNrY8OXn.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-CYf_FFxY.js";import"./Dropdown-CYaHmHFx.js";import"./SearchField-Daiwk--y.js";import"./MagnifyingGlass-qp743Sh-.js";import"./MenuListItem-DSvu2y_O.js";import"./MenuListDivider-BDnQXOa-.js";import"./MenuItem-B7bCDHld.js";import"./CheckboxUncheckedIcon-CniL-5fW.js";import"./RadioUncheckedIcon-DgOCQagW.js";import"./ItemMedia-C0ReNhrI.js";import"./Avatar-DFghK3As.js";import"./AvatarGroup-DUSzafHi.js";import"./ItemLabel-D7TXcLH5.js";import"./Heading-DmbuxGS8.js";import"./useHighlightedText-D3bt4yNA.js";import"./ItemControls-CiyO-qr-.js";import"./Badge-DkiOJ260.js";import"./Tooltip-w2q6vIcA.js";import"./ChevronRight-BnrL2uT7.js";import"./FieldBase-C_75hFZi.js";import"./Typography-CiPthQfi.js";import"./Field-BxmDkK6m.js";import"./Label-DR9BIR4K.js";import"./Input-jpu5auKu.js";import"./useMenu-BGMvW90K.js";import"./InformationSquare-B4yRDNra.js";import"./dialogs-Bl-ylD6h.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-bu799eNL.js";import"./AttachmentList-cIRs1OP1.js";import"./File-q6YIAweS.js";import"./Section-xZgyq4QZ.js";import"./Flex-CQB0dbJh.js";import"./TransmissionList-DNoxEkPD.js";import"./Transmission-CdrMHZfu.js";import"./SeenByLog-B9MtNs-I.js";import"./SeenByLogItem-ByiU_NnR.js";import"./Byline-BXE4AnwT.js";import"./SeenByLogButton-CcUxabBo.js";import"./Divider-B2QpbQHm.js";import"./DialogActions-UjLXcTQ2.js";import"./ButtonGroup-DjJP_8QL.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-YnVoDumG.js";import"./ItemLink-r00OWv-Y.js";import"./DialogByline-I2QvCt6A.js";import"./DialogMetadata-BINnSzAR.js";import"./DialogStatus-B4JZmjAW.js";import"./Paperclip-BfqrsLsb.js";import"./Files-BCyuKfEN.js";import"./Checkmark-Dq0lqnYy.js";import"./MetaBase-Bg_PjnQ0.js";import"./MetaItem-DNIQRPof.js";import"./ProgressIcon-D7MbEeWq.js";import"./ChevronUp-CnX9Oj5-.js";import"./ChevronDown-CRBE2Pft.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
