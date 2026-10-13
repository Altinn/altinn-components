import{a7 as t}from"./iframe-BbHZTISi.js";import{S as b}from"./ArrowRedo-DFL_UKNO.js";import{S as v}from"./EyeClosed-BymrjMMZ.js";import{S as I}from"./Archive-aUibtt6h.js";import{S as k}from"./Trash-CsnE7fwZ.js";import{S as w}from"./ClockDashed-wDeFYimQ.js";import{C as i}from"./ContextMenu-BV5nv3Ct.js";import{i as l}from"./inboxSearchResults-3d_CJzsq.js";import{S as u}from"./TeddyBear-Ly5mVe73.js";import{L as x}from"./List-CzNKG4D0.js";import{D as d}from"./DialogListItem-BNTfbkJe.js";import{L as g}from"./ListItem-BYKMPFNC.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-DIgZVBo5.js";import"./Dropdown-awoLZP1t.js";import"./SearchField-DJUCyIg2.js";import"./MagnifyingGlass-C6rTQxQT.js";import"./FieldBase-Di9G28SV.js";import"./Typography-Ckv3AOJx.js";import"./useHighlightedText-BqQK_DfD.js";import"./Field-D9Cr4opO.js";import"./Label-DhhTw6wz.js";import"./Input-B1Y3KbZD.js";import"./useMenu-Bq15wZBe.js";import"./MenuListItem-DGvsWI69.js";import"./MenuListDivider-Dx9O9cQW.js";import"./MenuListHeading-CPr8ol3d.js";import"./MenuItem-CHBZGQXu.js";import"./ItemMedia-C2Z0jrya.js";import"./Avatar-C_TtduNz.js";import"./AvatarGroup-BedFE_X6.js";import"./Checkmark-DBqEBMWV.js";import"./ItemLabel-CDU57d8k.js";import"./Heading-Bg_B2C5V.js";import"./ItemControls-CSWL4roz.js";import"./Badge-DQBHy5Q9.js";import"./Tooltip-KX6NnDMS.js";import"./ChevronRight-BedwSMvr.js";import"./InformationSquare-5U7NjUWT.js";import"./MenuElipsisHorizontal-BhDkslsK.js";import"./dialogs-mvPiWvIO.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-9pbU-yem.js";import"./AttachmentList-nWyZ07ZR.js";import"./AttachmentLink-D4VnEf0A.js";import"./File-BqQmYV8X.js";import"./Section-DsI3lDGv.js";import"./Flex-RSxiLUVh.js";import"./TransmissionList-CEuxGPcZ.js";import"./Transmission-C8li9dog.js";import"./SeenByLog-BTGf3MpZ.js";import"./SeenByLogItem-D_oLTy31.js";import"./Byline-BcQeWFgN.js";import"./SeenByLogButton-DUmiKrrN.js";import"./Divider-MYmbMM0W.js";import"./DialogActions-BdP0Ed4f.js";import"./ButtonGroup-CDktoaSg.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-FTqYLeiu.js";import"./ItemLink-CRNO81NM.js";import"./DialogByline-CFawm2rk.js";import"./DialogMetadata-DX81lqQH.js";import"./DialogStatus-DZyVWxAo.js";import"./Paperclip-BHgbw4mZ.js";import"./Files-C6QfmFUy.js";import"./MetaBase-BIU3RM6L.js";import"./MetaItem-Cqy-NHLt.js";import"./ProgressIcon-BlZNmSP1.js";import"./ChevronUp-D4YgcdQR.js";import"./ChevronDown-88HBChSA.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Kt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},s={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},m={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...m.parameters?.docs?.source}}};const Ut=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Ut as __namedExportsOrder,Kt as default};
