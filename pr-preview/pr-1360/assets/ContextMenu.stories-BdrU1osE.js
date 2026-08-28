import{a7 as t}from"./iframe-C9sF4CIH.js";import{S as b}from"./ArrowRedo-Cjuulx0-.js";import{S as v}from"./EyeClosed-PPNAr-41.js";import{S as I}from"./Archive-C9EZoKY1.js";import{S as k}from"./Trash-DtuzqxyC.js";import{S as w}from"./ClockDashed-CPjWxQp2.js";import{C as n}from"./ContextMenu-ZXotIdMM.js";import{i as l}from"./inboxSearchResults-CMnhMead.js";import{S as u}from"./TeddyBear-moJTx2D6.js";import{L as x}from"./List-Ljyom4hg.js";import{D as d}from"./DialogListItem-DrELQ_Ws.js";import{L as g}from"./ListItem-BH0TUSLo.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-D4Y6GTjn.js";import"./Dropdown-Bt-2pNLb.js";import"./SearchField-C_Ji_EMe.js";import"./MagnifyingGlass-BaBs8vmN.js";import"./FieldBase-BZH1Lr7P.js";import"./Typography-BQsARAdQ.js";import"./useHighlightedText-kH4xSFNx.js";import"./Field-D40vPUUg.js";import"./Label-BQs4ZavD.js";import"./Input-DZS0C5P8.js";import"./useMenu-BFGedA5y.js";import"./MenuListItem-C9rtWM2n.js";import"./MenuListDivider-D0Dk3XM8.js";import"./MenuListHeading-CQYtGjFy.js";import"./MenuItem-DU1kbbfo.js";import"./ItemMedia-Ck6acBMI.js";import"./Avatar-DJ-M8TRd.js";import"./AvatarGroup-SMrP0suq.js";import"./Checkmark-CL2jgLCm.js";import"./ItemLabel-Cb55IGYj.js";import"./Heading-CN6nglwQ.js";import"./ItemControls-BU12ltKZ.js";import"./Badge-dpJAfWyX.js";import"./Tooltip-hEd8MeM6.js";import"./ChevronRight-BzqVHEpk.js";import"./InformationSquare-BmRwhtkQ.js";import"./MenuElipsisHorizontal-BiPwQStA.js";import"./dialogs-q3lXV62t.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-m8OQWtTY.js";import"./AttachmentList-CMw95sFc.js";import"./AttachmentLink-LiTQebG3.js";import"./File-dlrR66nk.js";import"./Section-Ca3vkTbM.js";import"./Flex-DnMHh9vb.js";import"./TransmissionList-BSNAKHMR.js";import"./Transmission-C3tpmFmj.js";import"./SeenByLog-CtLkthNU.js";import"./SeenByLogItem-BIJ0wpVU.js";import"./Byline-DAi_lmyl.js";import"./SeenByLogButton-uQTj1yz1.js";import"./Divider-BdWJiqz4.js";import"./DialogActions-C10zMTQC.js";import"./ButtonGroupDivider-DlF0tam_.js";import"./ChevronUp-Bw8O-5uv.js";import"./ChevronDown-DNNZgNQx.js";import"./DropdownBase-Zdui3J7q.js";import"./useClickOutside-C44VAye1.js";import"./ButtonGroup-D3X_1KmS.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-CbO6Ng8R.js";import"./ItemLink-LcJuXaju.js";import"./DialogByline-CUu3hIDR.js";import"./DialogMetadata-b6QzW6KF.js";import"./DialogStatus-D_eR7ET0.js";import"./Paperclip-Bcn1nfDg.js";import"./Files-CL-af5vV.js";import"./MetaBase-BC6ZcZ3V.js";import"./MetaItem-DSzeQfP0.js";import"./ProgressIcon-0TC1sGp8.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: ContextMenuProps) => {
    const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
    const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
    return <List>
        <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
        <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
      </List>;
  }
}`,...s.parameters?.docs?.source}}};const Gt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Gt as __namedExportsOrder,zt as default};
