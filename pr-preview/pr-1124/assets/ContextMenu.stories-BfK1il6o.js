import{j as t}from"./iframe-C30XMp4u.js";import{S as b}from"./ArrowRedo-B5JSrOJy.js";import{S as v}from"./EyeClosed-BC4ju8B0.js";import{S as I}from"./Archive-BZkpamMr.js";import{S as k}from"./Trash-CAta8Rpy.js";import{S as w}from"./ClockDashed-jA8a8t_j.js";import{S as l}from"./TeddyBear-CmevWW0A.js";import{i as u}from"./inboxSearchResults-DbNxNRxF.js";import{C as r}from"./ContextMenu-WHdt3mrD.js";import{L as x}from"./List-BOu6KRbF.js";import{L as d}from"./ListItem-BjER_6OV.js";import{D as g}from"./DialogListItem-BWCfXYAA.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-k4Xjw1TB.js";import"./dialogs-DIMKDQMw.js";import"./seenByLog-A816RdIE.js";import"./brreg-2IRVVnCD.js";import"./DialogAttachments-mvqvi0YA.js";import"./AttachmentList-BCxJerbx.js";import"./AttachmentLink-DIiXe2zu.js";import"./Icon-BW7eZq3t.js";import"./index-Dfjgmy9H.js";import"./Skeleton-DYu3bsVd.js";import"./Badge-BL5WZhsc.js";import"./Section-DJhGIaQb.js";import"./Flex-Olz8YtsP.js";import"./Heading-r7KrHQRq.js";import"./useHighlightedText-BcdufPkD.js";import"./TransmissionList-C85bKxDI.js";import"./Transmission-Botqgj6o.js";import"./Typography-C7Aiwmst.js";import"./SeenByLog-DGpChC6a.js";import"./SeenByLogButton-BLrtuYWt.js";import"./Button-DDYo0e3Y.js";import"./button-vIDiYGt4.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./AvatarGroup-BxUIiam6.js";import"./Avatar-md5Lcy6_.js";import"./SeenByLogItem-COgtk_HP.js";import"./Byline-_lZvj3fQ.js";import"./Divider-BlKWfvpJ.js";import"./DialogActions-BTPat34C.js";import"./ButtonGroupDivider-BoJnk5BU.js";import"./ChevronUp-Dd9Cdp1N.js";import"./ChevronDown-BpTniz1S.js";import"./DropdownBase-DqPEgLO0.js";import"./useClickOutside-CQbrwNbZ.js";import"./ButtonGroup-B8wqqWfc.js";import"./SearchField-GqHOGaRS.js";import"./MagnifyingGlass-BcLoywmE.js";import"./XMark-ZCF0kQw6.js";import"./FieldBase-Cg7qaDyY.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./Checkmark-BHVaOMRl.js";import"./ItemControls-XLXkfke2.js";import"./ChevronRight-cMtudnfA.js";import"./useMenu-HLwWT2ab.js";import"./InformationSquare-Cu6RA9m9.js";import"./skatt-Eb53q4vT.js";import"./ssb-CoS4w7-G.js";import"./useDropdownMenuController-BEzXPzCy.js";import"./Dropdown-MMgMxLyt.js";import"./Tooltip-BkHTwdrx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./MenuElipsisHorizontal-D27tqclt.js";import"./ItemLink-fzbmrdbP.js";import"./DialogByline-eJ618V6g.js";import"./DialogMetadata-DFuSkFd9.js";import"./DialogStatus-BXJsHQRL.js";import"./Hourglass-CWVLP2LZ.js";import"./MetaProgress-CYlEToHt.js";import"./MetaItemLabel-BRxEyyON.js";import"./ProgressIcon-Cx8OGjSP.js";import"./MetaItem-BeJZXVyp.js";import"./MetaTimestamp-Dk2zISZf.js";import"./Paperclip-BzWyAbZP.js";const{expect:n,userEvent:i,within:y}=__STORYBOOK_MODULE_TEST__,$t={title:"Menu/ContextMenu",component:r,tags:["autodocs"],parameters:{},args:{placement:"left",color:"person",items:[{id:"1",groupId:"1",icon:b,title:"Del og gi tilgang",onClick:()=>console.log("Del og gi tilgang clicked")},{id:"2",groupId:"1",icon:v,title:"Marker som ny"},{id:"3",groupId:"2",icon:I,title:"Flytt til arkiv"},{id:"4",groupId:"2",icon:k,title:"Flytt til papirkurv"},{id:"5",groupId:"3",icon:w,title:"Aktivitetslogg"}]}},a={args:{id:"context-menu-default"},play:async({canvasElement:o})=>{const p=y(o),e=y(document.body),c=p.getByRole("button");await i.click(c),await n(e.getByRole("group")).toBeInTheDocument(),await i.keyboard("{Escape}"),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c),await i.click(o),await n(e.queryByRole("group")).not.toBeInTheDocument(),await i.click(c);const h=e.getByText("Flytt til arkiv");await i.click(h),await n(e.queryByRole("group")).not.toBeInTheDocument()}},m={render:o=>t.jsxs(x,{children:[t.jsx(d,{title:"As badge",icon:l,linkIcon:!0,badge:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(d,{title:"As controls",icon:l,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})},s={render:o=>{const p=u.items[0],e=u.items[1];return t.jsxs(x,{children:[t.jsx(g,{...p,controls:t.jsx(r,{...o,placement:"right",id:"menu-1"})}),t.jsx(g,{...e,controls:t.jsx(r,{...o,placement:"right",id:"menu-2"})})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
