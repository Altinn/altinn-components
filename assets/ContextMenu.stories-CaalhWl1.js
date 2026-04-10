import{j as t}from"./iframe-CfpleAaJ.js";import{S as b}from"./ArrowRedo-D-NuiE4L.js";import{S as v}from"./EyeClosed-CyYeq57x.js";import{S as I}from"./Archive-DQXPE0eG.js";import{S as k}from"./Trash-CK0t-M2f.js";import{S as w}from"./ClockDashed-BlB34t9g.js";import{S as l}from"./TeddyBear-Cp9dcNav.js";import{i as u}from"./inboxSearchResults-XYngBkW-.js";import{C as r}from"./ContextMenu-D_1W5NW4.js";import{L as x}from"./List-Daw1OOj7.js";import{L as d}from"./ListItem-BnFFeCbH.js";import{D as g}from"./DialogListItem-CyHgs6Ub.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CRfl8v3D.js";import"./dialogs--oWVeeHf.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-CF3q7Z7Y.js";import"./AttachmentList-C6fXcxhh.js";import"./AttachmentLink-D4eduEPa.js";import"./Icon-DFklvQ48.js";import"./index-C-ZlSrx2.js";import"./Skeleton-mkQz_xZ6.js";import"./Badge-BZbseZdr.js";import"./Section-BT3IVwl3.js";import"./Flex-Buw28yn5.js";import"./Heading-SalYmhoh.js";import"./useHighlightedText-Cf92T70c.js";import"./TransmissionList-NkShur5-.js";import"./Transmission-COJtmCgz.js";import"./Typography-KZreLO9a.js";import"./SeenByLog-LRxo1BWH.js";import"./SeenByLogButton-DxfISkFy.js";import"./Button-DKJP6EaO.js";import"./button-bjClnooE.js";import"./use-merge-refs-0CqQhLRb.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-vSwCjNL5.js";import"./Avatar-BBkC-qEC.js";import"./SeenByLogItem-BXqLFRBt.js";import"./Byline-CZBIzDb7.js";import"./Divider-DzmWM7JQ.js";import"./DialogActions-B4vIT2_v.js";import"./ButtonGroupDivider-C4vvU_mH.js";import"./ChevronUp-C1m4sJ12.js";import"./ChevronDown-QoYlkrAl.js";import"./DropdownBase-ZJ1_uQd-.js";import"./useClickOutside-540iRY_5.js";import"./ButtonGroup-BCc6e8WW.js";import"./SearchField-DaxLmgu-.js";import"./MagnifyingGlass-BxOwsnNq.js";import"./XMark-Mr05NtnF.js";import"./FieldBase-CjTWVBCf.js";import"./Label-BNnaJGt0.js";import"./index-CyGYnAy8.js";import"./Input-B030prVc.js";import"./input-DZJGjPia.js";import"./MenuListItem-Brl922Zx.js";import"./MenuListHeading-BxaazMkW.js";import"./MenuItem-BvkuTBxq.js";import"./ItemMedia-BjhAIHdo.js";import"./Checkmark-CwtLsQnH.js";import"./ChevronRight-F6vNJ-SN.js";import"./useMenu-DmjfRwxC.js";import"./InformationSquare-H_9f907d.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-D3ykFK6E.js";import"./Dropdown-C9n-MsJ3.js";import"./Tooltip-Da4m4fbj.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-cOqlEhU8.js";import"./DialogByline-Dsm5rzfu.js";import"./DialogMetadata-BJOgbvyx.js";import"./DialogStatus-DoyrUHri.js";import"./Hourglass-Ccd9_fep.js";import"./MetaProgress-wQuOe-9v.js";import"./MetaItemLabel-Dad9MMnT.js";import"./ProgressIcon-aCR4FKYa.js";import"./MetaItem-DAbAJ240.js";import"./MetaTimestamp-DA38feK7.js";import"./Paperclip-j9WxE5UR.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    await expect(body.getByRole('group')).toBeInTheDocument();

    // close the context menu by pressing escape key
    await userEvent.keyboard('{Escape}');
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and close by clicking outside
    await userEvent.click(button);
    await userEvent.click(canvasElement);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();

    // open the context menu again and select an item
    await userEvent.click(button);
    const item = body.getByText('Flytt til arkiv');
    await userEvent.click(item);
    await expect(body.queryByRole('group')).not.toBeInTheDocument();
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  return <List>
      <ListItem title="As badge" icon={TeddyBearIcon as ListItemProps['icon']} linkIcon badge={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <ListItem title="As controls" icon={TeddyBearIcon as ListItemProps['icon']} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: ContextMenuProps) => {
  const dialog1 = inboxSearchResults.items[0] as DialogListItemProps;
  const dialog2 = inboxSearchResults.items[1] as DialogListItemProps;
  return <List>
      <DialogListItem {...dialog1} controls={<ContextMenu {...args} placement="right" id="menu-1" />} />
      <DialogListItem {...dialog2} controls={<ContextMenu {...args} placement="right" id="menu-2" />} />
    </List>;
}`,...s.parameters?.docs?.source}}};const Zt=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,Zt as __namedExportsOrder,Xt as default};
