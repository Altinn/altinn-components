import{j as t}from"./iframe-BbAJh2l_.js";import{S as b}from"./ArrowRedo-BoftjVXg.js";import{S as v}from"./EyeClosed-CdDIFOJW.js";import{S as I}from"./Archive-BnSuVF__.js";import{S as k}from"./Trash-CReBsH0T.js";import{S as w}from"./ClockDashed-CG4xQbHM.js";import{S as l}from"./TeddyBear-C_Hv6JoA.js";import{i as u}from"./inboxSearchResults-BhpRa1O2.js";import{C as r}from"./ContextMenu-WSksyULt.js";import{L as x}from"./List-BLhrP6Wq.js";import{L as d}from"./ListItem-1XPivOtK.js";import{D as g}from"./DialogListItem-qEgHNHpD.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DlaeWOGU.js";import"./dialogs-BdEMnoLU.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-D-1DOOdr.js";import"./AttachmentList-C_BXjDVb.js";import"./AttachmentLink-cD6Qpht5.js";import"./Icon-BPIDnrjf.js";import"./index-D4eFSvt3.js";import"./Skeleton-DCAPmpFX.js";import"./Badge-Bayw0f9c.js";import"./Section-DKBhzXh6.js";import"./Flex-c7I9zH32.js";import"./Heading-DtMkhgFU.js";import"./useHighlightedText-Dxl-Q7I2.js";import"./TransmissionList-Bt_ahhg1.js";import"./Transmission-DN70DtEv.js";import"./Typography-Dc6esLAJ.js";import"./SeenByLog-9r0xM1ha.js";import"./SeenByLogButton-BIat9IfM.js";import"./Button-MneWcYDg.js";import"./button-BOk0ljv4.js";import"./use-merge-refs-B0vn2eeh.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-D7oFGG3U.js";import"./Avatar-j2CMQG5s.js";import"./SeenByLogItem-BSbqdyS5.js";import"./Byline-C1SJ4NmZ.js";import"./Divider-DNbY4sde.js";import"./DialogActions-CVYOAXg1.js";import"./ButtonGroupDivider-BKjt-F_a.js";import"./ChevronUp-BK_whBfS.js";import"./ChevronDown-B5pHKuJa.js";import"./DropdownBase-DrvyGdmc.js";import"./useClickOutside-Gtkv9Bjl.js";import"./ButtonGroup-CfWicBai.js";import"./SearchField-DsP_4HyY.js";import"./MagnifyingGlass-DGbwovi2.js";import"./XMark-CBD09dy-.js";import"./FieldBase-DPxwAUyD.js";import"./Label-BPdBz656.js";import"./index-BNnwLbXZ.js";import"./Input-3cVAucaE.js";import"./input-nlSK42jH.js";import"./MenuListItem-DT3pt1_M.js";import"./MenuListHeading-CDqxI5H7.js";import"./MenuItem-CGPdVF_D.js";import"./ItemMedia-Cdf2Y2Gw.js";import"./Checkmark-DCzlJj3W.js";import"./ItemControls-B5jsMXbN.js";import"./ChevronRight-C-emBdlp.js";import"./useMenu-YgVQ1Cwa.js";import"./InformationSquare-ina-Qzjq.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-C3VaoHjC.js";import"./Dropdown-oBR_mdc3.js";import"./Tooltip-C777j_wE.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-DkCmNo2T.js";import"./ItemLink-ByFnaisq.js";import"./DialogByline-BwyrpVHR.js";import"./DialogMetadata-BKrEtCml.js";import"./DialogStatus-jd9qScYW.js";import"./Hourglass-BEoCm0h9.js";import"./MetaProgress-Cc2lh_uQ.js";import"./MetaItemLabel-C1rTDpgH.js";import"./ProgressIcon-Bf7aPxEQ.js";import"./MetaItem-8Vv31zxH.js";import"./MetaTimestamp-BMmp0lmk.js";import"./Paperclip-DUfsEKsS.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const to=["Default","ListControls","DialogControls"];export{a as Default,s as DialogControls,m as ListControls,to as __namedExportsOrder,$t as default};
