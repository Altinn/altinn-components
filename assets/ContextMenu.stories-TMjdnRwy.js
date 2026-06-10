import{a7 as t}from"./iframe-Da53zzTq.js";import{S as b}from"./ArrowRedo-DiNEAixy.js";import{S as v}from"./EyeClosed-w_uHAd9g.js";import{S as I}from"./Archive-BPAYx93c.js";import{S as k}from"./Trash-CFLNIgyC.js";import{S as w}from"./ClockDashed-WhXUVnqH.js";import{C as i}from"./ContextMenu-C2mB4zeU.js";import{i as l}from"./inboxSearchResults-hrop0BND.js";import{S as u}from"./TeddyBear-BCHjFxnu.js";import{L as x}from"./List-CC5ASBuj.js";import{D as d}from"./DialogListItem-CET_u5dU.js";import{L as g}from"./ListItem-y8d5EwTe.js";import"./preload-helper-PPVm8Dsz.js";import"./useDropdownMenuController-XTqI9DN8.js";import"./Dropdown-CHEaMzgw.js";import"./SearchField-C_K7QMu3.js";import"./MagnifyingGlass-bfd6ClVE.js";import"./FieldBase-BU_zP5Yv.js";import"./Typography-Dy4MqSc4.js";import"./useHighlightedText-CRKmbQjK.js";import"./Field-BfWcyiGr.js";import"./Label-BttEpvGq.js";import"./Input-CoMQYpcI.js";import"./useMenu-DY0SSfK5.js";import"./MenuListItem-miRB5bIM.js";import"./MenuListHeading-DpZURBIT.js";import"./MenuItem-CyggXvzt.js";import"./ItemMedia-DBIH2IUr.js";import"./Avatar-CNmsZKUa.js";import"./AvatarGroup-CiKX_xpR.js";import"./Checkmark-y0isgIvR.js";import"./ItemLabel-DluBJ4yx.js";import"./Heading-DscqP9Yc.js";import"./ItemControls-ohsHtP8K.js";import"./Badge-Cz-Xpmja.js";import"./Tooltip-Ovi09slt.js";import"./ChevronRight-R352om1g.js";import"./index-nqILkJZM.js";import"./InformationSquare-B_LCnSe8.js";import"./MenuElipsisHorizontal-C9QTcmdo.js";import"./dialogs-BBoINdLu.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DHh833iB.js";import"./AttachmentList-D2h3BdC5.js";import"./AttachmentLink-i4u3HzQs.js";import"./File-XsMHpKEw.js";import"./Section-CfHJUgK6.js";import"./Flex-D2KvdX5w.js";import"./TransmissionList-Ca6JfujY.js";import"./Transmission-Cf-8kAbs.js";import"./SeenByLog-Do7e92Wb.js";import"./SeenByLogButton-D-mIGfzG.js";import"./SeenByLogItem-B-9AvCIR.js";import"./Byline-CsqAXxYk.js";import"./Divider-Dx5Ajhn-.js";import"./DialogActions-Cr6NxzM-.js";import"./ButtonGroupDivider-9oaQ3ONq.js";import"./ChevronUp-kw1y4I9y.js";import"./ChevronDown-n3Y6y8IU.js";import"./DropdownBase-FPegBgI2.js";import"./useClickOutside-BsZr6isw.js";import"./ButtonGroup-D9Sva-zY.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./ItemBase-DxSyPEoM.js";import"./ItemLink-LSrTzTCf.js";import"./DialogByline-CoYzdwZc.js";import"./DialogMetadata-DnpxlM-6.js";import"./DialogStatus-uDfS3shc.js";import"./MetaItem-zAXA1wF0.js";import"./ProgressIcon-B1s_bS8T.js";import"./Paperclip-BL7UJNU7.js";import"./Files-X7ujCMJq.js";const{expect:r,userEvent:n,within:y}=__STORYBOOK_MODULE_TEST__,Yt={title:"Menu/ContextMenu",component:i,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:e})=>{const c=y(e),o=y(document.body),p=c.getByRole("button");await n.click(p),await r(o.getAllByRole("menu")[0]).toBeInTheDocument(),await n.keyboard("{Escape}"),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p),await n.click(e),await r(o.queryByRole("menu")).not.toBeInTheDocument(),await n.click(p);const h=o.getByText("Flytt til arkiv");await n.click(h),await r(o.queryByRole("menu")).not.toBeInTheDocument()}},m={render:e=>t.jsxs(x,{children:[t.jsx(g,{title:"As badge",icon:u,linkIcon:!0,badge:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(g,{title:"As controls",icon:u,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})},s={render:e=>{const c=l.items[0],o=l.items[1];return t.jsxs(x,{children:[t.jsx(d,{...c,controls:t.jsx(i,{...e,placement:"right",id:"menu-1"})}),t.jsx(d,{...o,controls:t.jsx(i,{...e,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,zt as __namedExportsOrder,Yt as default};
