var v=Object.defineProperty;var r=(t,i)=>v(t,"name",{value:i,configurable:!0});import{a6 as e}from"./iframe-CjTVLX0J.js";import{S as I}from"./ArrowRedo-CU7FD30r.js";import{S as k}from"./EyeClosed-D30OCARZ.js";import{S as w}from"./Archive-BBOY_v7Z.js";import{S as B}from"./Trash-f0oxT1Hh.js";import{S as D}from"./ClockDashed-Btqf8PdS.js";import{C as a}from"./ContextMenu-txLONgGE.js";import{i as u}from"./inboxSearchResults-DIsYinW6.js";import{S as d}from"./TeddyBear-aZLffFSD.js";import{L as h}from"./List-D_f5-yc3.js";import{D as g}from"./DialogListItem-vWLXebrw.js";import{L as y}from"./ListItem-BsQLulwX.js";import"./preload-helper-Cc2_yIPf.js";import"./useDropdownMenuController-D0Z68xmE.js";import"./Dropdown-Dh6j_cOd.js";import"./SearchField-BoWCGyO9.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./MenuListItem-Db90m9cT.js";import"./MenuListDivider-D1F-iYgs.js";import"./MenuItem-BHJaEqQ5.js";import"./CheckboxUncheckedIcon-BI8H0dji.js";import"./RadioUncheckedIcon-BkjXdcpz.js";import"./ItemMedia-DnpNAz5S.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./ItemLabel-QKtbke7Z.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./ItemControls-DdDcRIJg.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./ChevronRight-B7WfXeCo.js";import"./FieldBase-C5zYRo5L.js";import"./Typography-D5LJyQSI.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./Input-B0rqselK.js";import"./useMenu-DyQl0UH7.js";import"./InformationSquare-DA1l9Dlv.js";import"./dialogs-CVk4Dd2Y.js";import"./seenByLog-9sbnLyZl.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Cns5tDMr.js";import"./AttachmentList-DvnLd7eu.js";import"./File-Cx1fYx9W.js";import"./Section-Srp_Bqeg.js";import"./Flex-DPGhARfx.js";import"./TransmissionList-dO0Vz7Wn.js";import"./Transmission-C0m6eFUE.js";import"./SeenByLog-qFw0rLqt.js";import"./SeenByLogItem-BBnEv75B.js";import"./Byline-DCQwseqO.js";import"./SeenByLogButton-D2UFcDZ9.js";import"./Divider-BNWONtts.js";import"./DialogActions-BDraxYoI.js";import"./ButtonGroup-CI4WR3eO.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DigRLYQR.js";import"./ItemLink-Dxgw-kvc.js";import"./DialogByline-BLh2Sxqe.js";import"./DialogMetadata-B_DtLMEK.js";import"./DialogStatus-D15iRFKQ.js";import"./Paperclip-Ddrby9yx.js";import"./Files-DDPtxbK-.js";import"./Checkmark-MZRBZVNG.js";import"./MetaBase-Cgi16DWV.js";import"./MetaItem-KwrcvAXW.js";import"./ProgressIcon-DGgEGzdl.js";import"./ChevronUp-BaW30cb9.js";import"./ChevronDown-mX34rd4T.js";const{expect:s,userEvent:n,within:x}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:a,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:I,title:"Del og gi tilgang",onClick:r(()=>console.log("Del og gi tilgang clicked"),"onClick")},{id:"2",groupId:"1",icon:k,title:"Marker som ny"},{id:"3",groupId:"2",icon:w,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:B,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:D,title:"Aktivitetslogg"}]}},m={args:{id:"context-menu-default"},play:r(async({canvasElement:t})=>{const i=x(t),o=x(document.body),l=i.getByRole("button");await n.click(l),await s(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l),await n.click(t),await s(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(l);const b=o.getByText("Flytt til arkiv");await n.click(b),await s(o.queryByRole("menu")).not.toBeInTheDocument()},"play")},c={render:r(t=>e.jsxs(h,{children:[e.jsx(y,{title:"As badge",icon:d,linkIcon:!0,badge:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(y,{title:"As controls",icon:d,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]}),"render")},p={render:r(t=>{const i=u.items[0],o=u.items[1];return e.jsxs(h,{children:[e.jsx(g,{...i,controls:e.jsx(a,{...t,placement:"right",id:"menu-1"})}),e.jsx(g,{...o,controls:e.jsx(a,{...t,placement:"right",id:"menu-2"})})]})},"render")},zt=["Default","ListControls","DialogControls"];m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
