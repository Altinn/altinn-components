import{j as t}from"./iframe-CFpZEpOT.js";import{S as b}from"./ArrowRedo-DYHFH_mh.js";import{S as v}from"./EyeClosed-Bs3npMwY.js";import{S as I}from"./Archive-CGP_n4PV.js";import{S as k}from"./Trash-B2QKAP19.js";import{S as w}from"./ClockDashed-B-vg0pWf.js";import{S as l}from"./TeddyBear-qsGV_EEw.js";import{i as u}from"./inboxSearchResults-1huArLLV.js";import{C as r}from"./ContextMenu-CwPKUzNp.js";import{L as x}from"./List-p1cS4I4-.js";import{L as d}from"./ListItem-qVW9-kPs.js";import{D as g}from"./DialogListItem-DjUtohQp.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-Bpa1--zZ.js";import"./dialogs-CGZVJ0m2.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-BcPQDhCj.js";import"./AttachmentList-DIKFTVSj.js";import"./AttachmentLink-DF8D1dtM.js";import"./Icon-CcpuJg5J.js";import"./index-CMCH-iYZ.js";import"./Skeleton-BxeTCVQ2.js";import"./Badge-CiO-ESqG.js";import"./Section-0tWdfaTG.js";import"./Flex-LzaqVov5.js";import"./Heading-Biv3WsI7.js";import"./useHighlightedText-DHCy4ZgC.js";import"./TransmissionList-BGMcUACO.js";import"./Transmission-BcEZJNBR.js";import"./Typography-CFFVnqbI.js";import"./SeenByLog-DKFU4ifW.js";import"./SeenByLogButton-CW-IioyK.js";import"./Button-C0rUC1sb.js";import"./button-DcOM5j_b.js";import"./use-merge-refs-DZRIBNsE.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-CCJxayqM.js";import"./Avatar-BgJ1eR8E.js";import"./SeenByLogItem-VTXEmFXo.js";import"./Byline-BdIMXO9i.js";import"./Divider-B_IjgFoE.js";import"./DialogActions-BZKTXU32.js";import"./ButtonGroupDivider-BWSKwXfh.js";import"./ChevronUp-B6qove2P.js";import"./ChevronDown-COoSRgYT.js";import"./DropdownBase-BSB-jbNd.js";import"./useClickOutside-ChxnoCNJ.js";import"./ButtonGroup-ix1R0MqJ.js";import"./SearchField-7ltHAmFU.js";import"./MagnifyingGlass-C_OdGmS9.js";import"./XMark-DsxdrTa7.js";import"./FieldBase-BKE2EVCO.js";import"./Label-CTb5NEuA.js";import"./index-CBNpaYnn.js";import"./Input-D08OnHI6.js";import"./input-BOf7pxRD.js";import"./MenuListItem-DCTPpMWv.js";import"./MenuListHeading-BZULpIAa.js";import"./MenuItem-BNeTh361.js";import"./ItemMedia-DMrQkYiw.js";import"./Checkmark-DLdUb-vP.js";import"./ChevronRight-Ca_cSWgJ.js";import"./useMenu-BHNp1hvr.js";import"./InformationSquare-DvM0m3_a.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-e-RIKU4l.js";import"./Dropdown-CxnqCSsD.js";import"./Tooltip-D1tApwsv.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-CV_qxNWd.js";import"./DialogByline-BpEPwEwN.js";import"./DialogMetadata-Ci86OnId.js";import"./DialogStatus-BkUCaH12.js";import"./Hourglass-DPzviRjX.js";import"./MetaProgress-RkYGCbvr.js";import"./MetaItemLabel-BDPI0IWU.js";import"./ProgressIcon-BlD_20FD.js";import"./MetaItem-zdiTJFco.js";import"./MetaTimestamp-BnU0LWWm.js";import"./Paperclip-DlUMDrUD.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,Xt={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
