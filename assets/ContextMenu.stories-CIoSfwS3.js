import{j as t}from"./iframe-BDpWuaMs.js";import{S as b}from"./ArrowRedo-BLPxLVi1.js";import{S as v}from"./EyeClosed-Bu97Jm2t.js";import{S as I}from"./Archive-DFGbX-XR.js";import{S as k}from"./Trash-CUnIoKK5.js";import{S as w}from"./ClockDashed-DDHzcO0b.js";import{S as l}from"./TeddyBear-UzA7WSmT.js";import{i as u}from"./inboxSearchResults-DbANHzTZ.js";import{C as r}from"./ContextMenu-CzieQggW.js";import{L as x}from"./List-BnWl-S7K.js";import{L as d}from"./ListItem-mkIEbDJT.js";import{D as g}from"./DialogListItem-M1pAI5wi.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BKmV9YxM.js";import"./dialogs-B_I8Z6-4.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BGH3IFWH.js";import"./AttachmentList-D4_6eZoS.js";import"./AttachmentLink-DP4ZqlP6.js";import"./Icon-4_NTN6mD.js";import"./index-DVPUayQ0.js";import"./Skeleton-DC_TZb2p.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./tooltip-DLcd2lCg.js";import"./Section-B9Daowr7.js";import"./Flex-zEgiMRQg.js";import"./Heading-D4nA4ZwT.js";import"./useHighlightedText-B13W4IFy.js";import"./TransmissionList-BvVj41Ym.js";import"./Transmission-6xVFktv8.js";import"./Typography-DZRyPYmV.js";import"./SeenByLog-_-ph2z9C.js";import"./SeenByLogButton-Cp1UJFo3.js";import"./Button-m_FXpHGO.js";import"./AvatarGroup-C5RQzawa.js";import"./Avatar-CT8r-oMP.js";import"./SeenByLogItem-CMdDJiae.js";import"./Byline-BE77fsAg.js";import"./Divider-CH8zwguZ.js";import"./DialogActions-DjOzzJ3D.js";import"./ButtonGroupDivider-koOAE-Up.js";import"./ChevronUp-CUbZcbs3.js";import"./ChevronDown-Bc_cVxBY.js";import"./DropdownBase-BnpgMGAU.js";import"./useClickOutside-DYOgnbCl.js";import"./ButtonGroup-DdOFFFWL.js";import"./SearchField-D16JUOzv.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./XMark-Cx5Omj8e.js";import"./FieldBase-CGSHeWph.js";import"./Label-7jR2lGh9.js";import"./Input-BoCHA0_0.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuListHeading-XsWTeeVe.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./Checkmark-DDYvLrrH.js";import"./ItemControls-BtUdj5a9.js";import"./ChevronRight-BJTZ2o3o.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";import"./InformationSquare-CS8D_BUZ.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-P2ixjEDe.js";import"./Dropdown-COTBq4xu.js";import"./MenuElipsisHorizontal-_yoYMfaf.js";import"./ItemLink-CfhFFB25.js";import"./DialogByline-Bf8cgwsa.js";import"./DialogMetadata-DGkXAmMB.js";import"./DialogStatus-D5GStjsj.js";import"./MetaItem-C27vspu9.js";import"./ProgressIcon-DtV7Xnhj.js";import"./Paperclip-Dm-BZpbK.js";import"./Files-C9tuwDdw.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Jt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const c=y(o),e=y(document.body),p=c.getByRole("button");await i.click(p),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(p);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},s={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},m={render:o=>{const c=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...c,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Nt=["Default","ListControls","DialogControls"];export{a as Default,m as DialogControls,s as ListControls,Nt as __namedExportsOrder,Jt as default};
