import{a7 as t}from"./iframe-Dr1YYpI1.js";import{S as b}from"./ArrowRedo-j0UOxIzs.js";import{S as v}from"./EyeClosed-9DdvzbA5.js";import{S as I}from"./Archive-rT-9lkoM.js";import{S as k}from"./Trash-CnTRL0Pz.js";import{S as w}from"./ClockDashed-CA-yiIpZ.js";import{C as n}from"./ContextMenu-DFPb-mjt.js";import{i as l}from"./inboxSearchResults-BE862lSB.js";import{S as u}from"./TeddyBear-DD2EY32j.js";import{L as x}from"./List-Bd354_V5.js";import{D as d}from"./DialogListItem-B7SoxSDA.js";import{L as g}from"./ListItem-BNw8VTGu.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-lfZpt0cM.js";import"./Dropdown-CkHQtX7v.js";import"./SearchField-Cir7dqyx.js";import"./MagnifyingGlass-DOqx6Pwx.js";import"./FieldBase-CyLGbTYK.js";import"./Typography-CAIidHgh.js";import"./useHighlightedText-BV18x4ez.js";import"./Field-CFwGDJPk.js";import"./Label-CGK745vw.js";import"./Input-Brt0jiez.js";import"./useMenu-BbXnEU1n.js";import"./MenuListItem-BFvVa6a8.js";import"./MenuListDivider-DIxbGzVU.js";import"./MenuListHeading-BfYNlaNe.js";import"./MenuItem-CTIXytBa.js";import"./ItemMedia-BpxSm7tv.js";import"./Avatar-5MYoUnaT.js";import"./AvatarGroup-qKVf7nyJ.js";import"./Checkmark-BLry8rVn.js";import"./ItemLabel-CM1gzuiQ.js";import"./Heading-BD9oLNEa.js";import"./ItemControls-DQl8k1jC.js";import"./Badge-DlA625G6.js";import"./Tooltip-CpSJxiAh.js";import"./ChevronRight-F0aXUvpz.js";import"./index-CjeWyC4B.js";import"./InformationSquare-zR3kX6_5.js";import"./MenuElipsisHorizontal-DtCz34LC.js";import"./dialogs-CHvzokhk.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-Bp9BamXZ.js";import"./AttachmentList-DJeiy9mx.js";import"./AttachmentLink-CY0PxnFf.js";import"./File-FLnHtF8K.js";import"./Section-_zPAIWIf.js";import"./Flex-DPnodwFD.js";import"./TransmissionList-FZfG16KC.js";import"./Transmission-CZjTBAhs.js";import"./SeenByLog-yUKCHAv8.js";import"./SeenByLogButton-DLR2DuGv.js";import"./SeenByLogItem-C0sTerfL.js";import"./Byline-ClFKTn_e.js";import"./Divider-BgkgspeO.js";import"./DialogActions-DiAy3mPx.js";import"./ButtonGroupDivider-Cj6F7Rdk.js";import"./ChevronUp-B_Smx25I.js";import"./ChevronDown-BBfddSx6.js";import"./DropdownBase-BvHncDh_.js";import"./useClickOutside-Dt4kWcwe.js";import"./ButtonGroup-B0d19ndD.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-0lWwxmT3.js";import"./ItemLink-DdXuuqzx.js";import"./DialogByline-B6OiQ6NU.js";import"./DialogMetadata-Cr1-S_zA.js";import"./DialogStatus-TnmxC8K1.js";import"./MetaItem-Dshlo2Zv.js";import"./ProgressIcon-krC25_yx.js";import"./Paperclip-C3kDhW9C.js";import"./Files-CTNBGO6Z.js";const{expect:r,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,zt={title:"Menu/ContextMenu",component:n,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await i.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await i.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p),await i.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await i.click(p);const h=o.getByText("Flytt til arkiv");await i.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(n,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(n,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
