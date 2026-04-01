import{j as t}from"./iframe-DxKlu2kD.js";import{S as b}from"./ArrowRedo-D9tiKF0k.js";import{S as v}from"./EyeClosed-DdQAv9pG.js";import{S as I}from"./Archive-DOcjXifM.js";import{S as k}from"./Trash-BduIn3aS.js";import{S as w}from"./ClockDashed-D0rwVTqN.js";import{S as l}from"./TeddyBear-CYrA0JBO.js";import{i as u}from"./inboxSearchResults-CtIpBOpY.js";import{C as r}from"./ContextMenu-BRoNLVIW.js";import{L as x}from"./List-C5g4_qse.js";import{L as d}from"./ListItem-BFQ5Iogs.js";import{D as g}from"./DialogListItem-slO2dqjW.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-_YfdAmsW.js";import"./dialogs-B5vMY-Ms.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-PVKSk2R-.js";import"./AttachmentList-C1qAYl-4.js";import"./AttachmentLink-BGMv6sli.js";import"./Icon-CrZKj0Yv.js";import"./index-BWCSYHeO.js";import"./Skeleton-niSIm0IT.js";import"./Badge-4TJDD2P9.js";import"./Section-5cGBq3ET.js";import"./Flex-CFZAXqgp.js";import"./Heading-m7XVygop.js";import"./useHighlightedText-DHBtHLKn.js";import"./TransmissionList-Dbo3xOIo.js";import"./Transmission-k8EkY2VX.js";import"./Typography-iC77LYkz.js";import"./SeenByLog-PSD2Kt7_.js";import"./SeenByLogButton-DVEQ3O6A.js";import"./Button-D78I7hWM.js";import"./button-B-2CHja_.js";import"./use-merge-refs-CvQTDNhp.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-D_QmYd99.js";import"./Avatar-BwF2spoI.js";import"./SeenByLogItem-MTAZUXew.js";import"./Byline-CIOZ3BUJ.js";import"./Divider-CHLjagug.js";import"./DialogActions-3iatBi5B.js";import"./ButtonGroupDivider-Dzf9jdTg.js";import"./ChevronUp-CoEIha6w.js";import"./ChevronDown-C5m-qI-T.js";import"./DropdownBase-DaCnHxjM.js";import"./useClickOutside-uhEEdzFg.js";import"./ButtonGroup-CKoZVXux.js";import"./SearchField-yItf8ktv.js";import"./MagnifyingGlass-BSd0JI5p.js";import"./XMark-C1fx_pyo.js";import"./FieldBase-DR6_g4FH.js";import"./Label-DPRrgAAI.js";import"./index-sO6KcVLH.js";import"./Input-3npG3_R_.js";import"./input-BTAyJhby.js";import"./MenuListItem-BTPFJyFs.js";import"./MenuListHeading-BCVqt4go.js";import"./MenuItem-kNYALtyW.js";import"./ItemMedia-BBqBVaQK.js";import"./Checkmark-C9NR0hmL.js";import"./ChevronRight-DCeYx28-.js";import"./useMenu-DwMeQcTX.js";import"./InformationSquare-D9H1eLzz.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-cNOqav4I.js";import"./Dropdown-BlFnr1UG.js";import"./Tooltip-DFu8-nHR.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-Brj3vs9F.js";import"./DialogByline-D4Zm6GIw.js";import"./DialogMetadata-Bq3t6ASB.js";import"./DialogStatus-DFemhXu8.js";import"./Hourglass-Bw_PJxUj.js";import"./MetaProgress-D8av1T2X.js";import"./MetaItemLabel-BNPu2iZx.js";import"./ProgressIcon-DvBoHhvI.js";import"./MetaItem-D5e-uN9I.js";import"./MetaTimestamp-BJxyGcPa.js";import"./Paperclip-BykLFP04.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
