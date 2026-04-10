import{j as t}from"./iframe-COdTICiz.js";import{S as b}from"./ArrowRedo-BKvUsjZN.js";import{S as v}from"./EyeClosed-BZCFuwo2.js";import{S as I}from"./Archive-BB9PeNdy.js";import{S as k}from"./Trash-BPlCWJiN.js";import{S as w}from"./ClockDashed-yQpROOAt.js";import{S as l}from"./TeddyBear-ocPcN4bf.js";import{i as u}from"./inboxSearchResults-Bq8RkF8x.js";import{C as r}from"./ContextMenu-BHpDncYb.js";import{L as x}from"./List-whgW15bu.js";import{L as d}from"./ListItem-B7SDP4f5.js";import{D as g}from"./DialogListItem--gdjnPqM.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-lT615UMD.js";import"./dialogs-B2Ll16Ic.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-DAfkR5U9.js";import"./AttachmentList-B2D2VwPS.js";import"./AttachmentLink-BnmB-6mT.js";import"./Icon-CpwjhC7D.js";import"./index-eHSiAaoN.js";import"./Skeleton-DCT9M7tY.js";import"./Badge-CTG2EWNm.js";import"./Section-Cld6nU2J.js";import"./Flex-BH1BXZbH.js";import"./Heading-BXn08xBV.js";import"./useHighlightedText-FFYshbql.js";import"./TransmissionList-B8Dj4Aux.js";import"./Transmission-BwzjBc-g.js";import"./Typography-CRI9HVXo.js";import"./SeenByLog-CIcIeBwR.js";import"./SeenByLogButton-DJsZGvvB.js";import"./Button-Dqoqvefk.js";import"./button-BvBLLivB.js";import"./use-merge-refs-DMOZr-G2.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-DMJoFLAP.js";import"./Avatar-30_b1gUS.js";import"./SeenByLogItem-D3SaBZyS.js";import"./Byline-Tw37sWdf.js";import"./Divider-B4U8jiT-.js";import"./DialogActions-DH-nnrf2.js";import"./ButtonGroupDivider-BGHFJh1m.js";import"./ChevronUp-Dz_g_pRj.js";import"./ChevronDown-CXIH_g9t.js";import"./DropdownBase-D-GeILtx.js";import"./useClickOutside-mdIAXV_q.js";import"./ButtonGroup-BKCkWJMA.js";import"./SearchField-DQWZ98wb.js";import"./MagnifyingGlass-BjGJbcBP.js";import"./XMark-CpgXVK2Q.js";import"./FieldBase-CQukmgiw.js";import"./Label-Bw83ICjW.js";import"./index-zPL8uGVu.js";import"./Input-Dmsj72wJ.js";import"./input-DYzXaufk.js";import"./MenuListItem-BVxiRmRE.js";import"./MenuListHeading-C74FO8PH.js";import"./MenuItem-Pij9KqE-.js";import"./ItemMedia-BN92MYHv.js";import"./Checkmark-D_NJmpQs.js";import"./ItemControls-DRloD8XX.js";import"./ChevronRight-tPPKpYH4.js";import"./useMenu-C9hrnnrl.js";import"./InformationSquare-BF6iEl5i.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BmS2V_T_.js";import"./Dropdown-riK9lB0y.js";import"./Tooltip-CFVYTWjg.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-BknfGU10.js";import"./ItemLink-CDxFMY6P.js";import"./DialogByline-BugAxH0e.js";import"./DialogMetadata-B6lhGUAK.js";import"./DialogStatus-Bbi8-SYp.js";import"./Hourglass-DN-XYly3.js";import"./MetaProgress-Du_48nCI.js";import"./MetaItemLabel-CP8e3y6H.js";import"./ProgressIcon-y1rx6V-h.js";import"./MetaItem-DGlqcmk0.js";import"./MetaTimestamp-CvU92t6t.js";import"./Paperclip-BfNNDqa4.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m=o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]}),s=o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const to=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,to as __namedExportsOrder,$t as default};
